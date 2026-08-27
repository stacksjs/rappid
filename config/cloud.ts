import type { CloudConfig } from '@stacksjs/types'
import type { CloudConfig as TsCloudConfig } from '@stacksjs/ts-cloud'
import { env } from '@stacksjs/env'

/**
 * The slug names the files this deploy OWNS on the box:
 * `/etc/rpx/sites.d/<slug>.json` and the `rpx-cert-renew-<slug>.*` units. The
 * fragment is replaced wholesale, so a slug that collides with another
 * tenant's silently takes over its routes and TLS. It must be unique across
 * every project attached to this box, and it must never equal `attachTo`.
 */
const APP_SLUG = 'rappid'
const APP_DOMAIN = env.APP_DOMAIN || 'rappid.hq.training'

/**
 * Ports on the shared box.
 *
 * Read from a live `ss -lntp` on the box, not from another project's config:
 * those list what a project declares, not what is bound, and they miss any
 * tenant not checked out locally. Two services CAN bind one port here (the
 * kernel load-balances between them rather than refusing the second), so a
 * collision shows up as two domains serving each other's site half the time.
 *
 * 3190/3191 were free on 2026-08-27; the highest neighbour was 3188.
 */
const PORT_MAIN = 3190
const PORT_API = 3191

/**
 * State that must outlive a release.
 *
 * Deploys are atomic: each activates a new release directory and the previous
 * one is pruned, so anything written inside a release is destroyed by the next
 * deploy. The SQLite database therefore lives outside the release tree and is
 * symlinked in, which is also what makes a rollback find the same data.
 *
 * The FILE is shared, not the `database/` directory: sharing the directory
 * would replace the release's `database/migrations/*.sql` too, so `migrate`
 * would find no migrations, report the database up to date, and serve a schema
 * that only ever got the framework's own tables.
 */
const STATE_DIR = '/var/lib/rappid'

function sharedState(seed: boolean) {
  return [
    { path: 'database/stacks.sqlite', target: `${STATE_DIR}/stacks.sqlite`, seed },
  ]
}

/**
 * Cloud configuration — rappid.
 *
 * Attach-mode Hetzner deploy: rappid ships onto the shared
 * `stacks-production-app` box owned by the `stacks` project. The owner manages
 * the box, the rpx gateway (:80/:443 and on-demand TLS), and the firewall.
 * This deploy only ships our one site, writes our additive rpx fragment
 * (`/etc/rpx/sites.d/rappid.json`), creates our `rappid-*` systemd unit, and
 * upserts our own A/AAAA records in the `hq.training` zone.
 *
 * Nothing is provisioned here. The `infrastructure` block is the declarative
 * intent a dedicated box would use, plus the rpx and TLS settings the attach
 * path forces on anyway.
 */
export const tsCloud: TsCloudConfig = {
  project: {
    name: APP_SLUG,
    slug: APP_SLUG,
    region: 'us-east-1', // AWS default, unused on Hetzner
  },

  // Machine-local cloud state lives under storage/, like every other
  // runtime-owned directory in a Stacks app.
  stateDir: 'storage/cloud',

  cloud: {
    provider: 'hetzner',
    /**
     * The owner project's slug. Without this, ts-cloud finds no server
     * labelled `ts-cloud/project=rappid` and quietly provisions a NEW box,
     * which is an expensive way to discover a missing line. It must never
     * equal this project's own slug.
     */
    attachTo: 'stacks',
  },

  mode: 'server',

  environments: {
    production: {
      type: 'production',
      deployBranch: 'main',
      region: 'us-east-1',
      variables: {
        APP_ENV: 'production',
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
    },
  },

  infrastructure: {
    compute: {
      instances: 1,
      size: 'small',
      disk: {
        size: 20,
        type: 'ssd',
        encrypted: true,
      },
      /**
       * Without `webServer: 'rpx'` (or `proxy.engine`) the gateway step is
       * gated off entirely: the deploy prints "App deployed", writes no route,
       * and the domain never resolves to anything.
       */
      webServer: 'rpx',
      proxy: {
        engine: 'rpx',
        // Issues this tenant's own certificate rather than leaving the
        // hostname on the box's fallback cert, which belongs to someone else.
        onDemandTls: true,
      },
    },

    /**
     * DNS.
     *
     * `rappid.hq.training` lives in the `hq.training` zone, registered and
     * nameserved at Porkbun. The address pass is opt-in on `provider` being
     * set: it derives one A (and one AAAA, since the box is dual-stack) per
     * site domain and upserts them, never deleting anything else in a zone
     * this project does not own.
     *
     * `domain` names the ZONE, not this site: the deploy falls back to the
     * last two labels of the site domain, which is the same answer here, but
     * saying it explicitly is what keeps a future `a.b.hq.training` correct.
     */
    dns: {
      provider: 'porkbun',
      domain: 'hq.training',
    },
  },

  /**
   * Sites.
   *
   * On the shared box ts-cloud namespaces every install directory by project
   * slug: this ships to `/var/www/rappid-main` and runs as
   * `rappid-main@<sha>.service`, so it can never collide with the box owner's
   * units or another tenant's.
   */
  sites: {
    /**
     * The storefront: the stx views, and the proxy in front of the API.
     *
     * Every page renders from the typed modules in `resources/data`, so the
     * catalogue needs no database. The one thing that does is the newsletter
     * form in the footer, which posts to the framework's own
     * `POST /api/email/subscribe` and writes a `SubscriberEmail` row. That is
     * the whole reason this deploy carries an API process and a SQLite file:
     * a drop announcement list the brand actually relies on.
     *
     * `serve-entry.js` is the framework's own production entry, so there is no
     * hand-written server file here to drift from it.
     */
    main: {
      root: '.',
      path: '/',
      domain: APP_DOMAIN,
      start: 'bun node_modules/@stacksjs/buddy/dist/serve-entry.js',
      port: PORT_MAIN,
      // The main site runs the migration that creates the database, so it is
      // the site that may seed the shared target.
      sharedPaths: sharedState(true),
      // Markers between steps, kept deliberately: the remote log interleaves
      // commands with no delimiters, and a failing command's stderr attaches
      // itself to whichever command last flushed.
      preStart: [
        'echo "[rappid] preStart: install"',
        'bun install --frozen-lockfile',
        'echo "[rappid] preStart: migrate"',
        // `buddy deploy` splices `db:backup --before-migrations` in front of
        // this line and derives that invocation from it, so how this is
        // written decides how the backup is taken.
        'bun node_modules/@stacksjs/buddy/dist/cli.js migrate',
        'echo "[rappid] preStart: done"',
      ],
      env: {
        APP_ENV: 'production',
        NODE_ENV: 'production',
        APP_URL: `https://${APP_DOMAIN}`,
        // Both are read: PORT_API is what the page server's proxy dials,
        // API_URL is what anything resolving an absolute API base uses.
        PORT_API: String(PORT_API),
        API_URL: `http://127.0.0.1:${PORT_API}`,
      },
    },

    /**
     * The API process, on loopback only. The public site proxies `/api/**` and
     * every mutating verb to it. No `domain`, so rpx skips it and the box
     * firewall keeps the port off the public network.
     */
    api: {
      root: '.',
      start: 'bun node_modules/@stacksjs/actions/dist/serve/api.js',
      port: PORT_API,
      // The same database file as main, and explicitly not the seeder.
      sharedPaths: sharedState(false),
      preStart: ['bun install --frozen-lockfile'],
      env: {
        HOST: '127.0.0.1',
        APP_ENV: 'production',
        NODE_ENV: 'production',
        APP_URL: `https://${APP_DOMAIN}`,
      },
    },
  },
}

// Stacks-specific cloud config (unused here; the ts-cloud block above is what
// `buddy deploy` reads).
const config: CloudConfig = {}

export default config
