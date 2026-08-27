import { readdirSync } from 'node:fs'
import { env } from '@stacksjs/env'
import { socialCardName } from '@stacksjs/image'
import { publicPath } from '@stacksjs/path'
import { brand } from './site'

/**
 * Search and link-preview metadata.
 *
 * One module so a page's canonical URL, its title, and the card a scraper
 * renders all come from the same place. The alternative — every view writing
 * its own `og:` tags — is how a site ends up with three pages claiming the
 * same canonical and a card that still advertises last season's copy.
 */

/**
 * The canonical origin. Every absolute URL in a page's head is built off it.
 *
 * Read from `APP_URL` rather than hard-coded to the brand's own domain,
 * because this build does not always serve that domain: a canonical, an
 * `og:url` or an `og:image` pointing at a host this deployment does not answer
 * is worse than none. Scrapers fetch the image, and a 404 there means the
 * preview falls back to a bare link.
 */
export const origin = normalizeOrigin(String(env.APP_URL || brand.url))

/**
 * `APP_URL` is a bare host in development (`rappid.localhost`) and a full URL
 * in production. An `og:image` without a scheme is not a URL a scraper will
 * fetch, so the scheme is supplied here rather than assumed: loopback hosts
 * get `http`, everything else `https`.
 */
function normalizeOrigin(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, '')
  if (/^https?:\/\//.test(trimmed)) return trimmed
  const local = /(^|\.)localhost$|^127\.|^0\.0\.0\.0$/.test(trimmed.split(':')[0] ?? '')
  return `${local ? 'http' : 'https'}://${trimmed}`
}

/** Absolute URL for a site-relative path. Scrapers reject relative `og:` URLs. */
export function absolute(path: string): string {
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

const cardsUrlPath = '/social'
const format = 'jpeg'
const extension = 'jpg'

let builtCards: Set<string> | undefined

/**
 * The cards that actually exist, read from the generated directory.
 *
 * Two decisions worth keeping:
 *
 * Not read from `config/images.ts`. Importing that file from a view resolves
 * to the framework's own merged defaults rather than this project's file, so
 * `social.enabled` came back false and every page silently fell back to the
 * site card. The generated directory is the ground truth anyway: a card exists
 * if and only if its file was written, so this cannot advertise an `og:image`
 * that 404s the way a config read can.
 *
 * Read lazily, and through `publicPath()` rather than `process.cwd()`. This
 * module is evaluated once when the server boots, which does not always happen
 * with the project root as the working directory - so a listing taken at load
 * time came back empty and stayed empty for the life of the process.
 */
function cards(): Set<string> {
  if (builtCards) return builtCards
  try {
    builtCards = new Set(
      readdirSync(publicPath('social'))
        .filter(file => file.endsWith(`.${extension}`))
        .map(file => file.slice(0, -(extension.length + 1))),
    )
  }
  catch {
    // Nothing generated yet: every page falls back to the site card, which is
    // also missing, so the tag points at a URL that will exist after the next
    // `buddy generate:images`.
    builtCards = new Set<string>()
  }
  return builtCards
}

export interface SocialCard {
  /** Absolute URL of the image. */
  url: string
  width: number
  height: number
  type: string
  /** The route whose card this is, which may be `/` after falling back. */
  path: string
}

/*
 * `og` is the only preset generated, and it is 1200x630. Declaring the size
 * matters: a scraper that cannot fetch the image still has to reserve the
 * right space, and without dimensions X falls back to a small square crop.
 */
const CARD = { width: 1200, height: 630 }

/**
 * The card for a route, falling back to the site card.
 *
 * A product page has no card of its own by design: sixty-five near-identical
 * cards would take a minute to build on every deploy and say less than the
 * site card, which still carries the brand and a real photograph. Falling back
 * is therefore the normal path, not an error case.
 */
export function cardFor(path: string): SocialCard {
  const name = socialCardName(path)
  const fallback = socialCardName('/')
  const resolved = cards().has(name) ? name : fallback
  return {
    url: absolute(`${cardsUrlPath}/${resolved}.${extension}`),
    width: CARD.width,
    height: CARD.height,
    type: `image/${format}`,
    path: resolved === name ? path : '/',
  }
}

/**
 * A page title, suffixed with the brand exactly once.
 *
 * The home page is the exception: "rappid. - rappid." reads as a bug, so a
 * title that already ends in the brand is left alone.
 */
export function pageTitleFor(title: string): string {
  const name = brand.name
  return title.endsWith(name) ? title : `${title} - ${name}`
}

/**
 * Trim a description to what a scraper will actually show.
 *
 * Google truncates around 155-160 characters and Open Graph previews around
 * 200. Cutting on a word boundary here means the visible half is a sentence
 * rather than a fragment ending mid-word.
 */
export function clampDescription(text: string, limit = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= limit) return clean
  const cut = clean.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  return `${(lastSpace > limit * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, '')}...`
}
