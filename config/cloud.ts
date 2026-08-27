import type { CloudConfig } from '@stacksjs/types'
import type { CloudConfig as TsCloudConfig } from '@stacksjs/ts-cloud'
import { env } from '@stacksjs/env'

const APP_SLUG = 'rappid'
const APP_DOMAIN = env.APP_DOMAIN || 'rappid.hq.training'

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
     * The storefront. A single Bun process serving the stx views.
     *
     * There is no API site and no database: every page renders from the typed
     * modules in `resources/data`, so the whole site is one process reading
     * its own source. `serve-entry.js` is the framework's own production
     * entry, which means no hand-written server file to drift from it.
     *
     * Port 3190 is this tenant's slot on the shared box. It is bound to
     * localhost and fronted by rpx; ports are picked from what is actually
     * listening on the box (`ss -lntp`), not from what other configs claim,
     * because two tenants binding one port fails silently for the loser.
     */
    main: {
      root: '.',
      path: '/',
      domain: APP_DOMAIN,
      start: 'bun node_modules/@stacksjs/buddy/dist/serve-entry.js',
      port: 3190,
      // Install from the committed lockfile on the box. No migrate step:
      // this app has no database.
      preStart: ['bun install --frozen-lockfile'],
      env: {
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
