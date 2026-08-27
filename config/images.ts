import type { ImagesConfig } from '@stacksjs/types'
import { products } from '../resources/data/catalog'
import { collections } from '../resources/data/collections'

/**
 * **Images Configuration**
 *
 * Generated imagery — the social cards link previews show — is declared here
 * and built by `buddy generate:images` into `public/social`.
 *
 * The failure this addresses is the one every storefront ships with: a page
 * shared into Slack, iMessage or Discord renders as a favicon next to a URL,
 * so the only part of the page most people ever see says nothing. A card per
 * route fixes that, and building it from config keeps it right as the copy
 * changes.
 */
/*
 * A shot for each collection family, so a shared collection link shows the
 * kind of thing it holds rather than the same frame every time.
 */
const FAMILY_SHOT: Record<string, string> = {
  tops: 'resources/assets/images/social/tops.jpg',
  'long-sleeve': 'resources/assets/images/social/tops.jpg',
  'short-sleeve': 'resources/assets/images/social/tops.jpg',
  outerwear: 'resources/assets/images/social/tops.jpg',
  'graphic-shirts': 'resources/assets/images/social/tops.jpg',
  'collegial-hoodies': 'resources/assets/images/social/tops.jpg',
  bottoms: 'resources/assets/images/social/bottoms.jpg',
  tights: 'resources/assets/images/social/bottoms.jpg',
  shorts: 'resources/assets/images/social/bottoms.jpg',
  accessories: 'resources/assets/images/social/accessories.jpg',
  'pace-caps': 'resources/assets/images/social/accessories.jpg',
  'ultra-caps': 'resources/assets/images/social/accessories.jpg',
  'grid-caps': 'resources/assets/images/social/accessories.jpg',
  bandanas: 'resources/assets/images/social/accessories.jpg',
  'last-soul-ultra-2026': 'resources/assets/images/social/last-soul.jpg',
  'lsu-tops': 'resources/assets/images/social/last-soul.jpg',
  'lsu-bottoms': 'resources/assets/images/social/last-soul.jpg',
  'last-soul-capsule-accessories': 'resources/assets/images/social/last-soul.jpg',
}

const collectionCards = collections.map(collection => ({
  path: `/collections/${collection.handle}`,
  eyebrow: collection.group === 'drops' ? 'drop' : 'shop',
  title: `${collection.title}.`,
  subtitle: collection.blurb,
  foreground: FAMILY_SHOT[collection.handle] ?? FAMILY_SHOT[collection.parent ?? ''] ?? undefined,
}))

/*
 * Products draw their own studio shot, downloaded into the project by
 * `buddy fetch:product-shots`. A card built from a remote URL would make the
 * image build depend on someone else's CDN being up.
 */
const productCards = products.map((product) => {
  const sizes = product.variants.filter(variant => variant.available).map(variant => variant.size)
  const oneSize = product.variants.length === 1

  /*
   * Price and sizes, not the opening line of the description.
   *
   * The card gives the subtitle two lines, and a marketing sentence gets cut
   * mid-clause inside them. What somebody deciding whether to open a shared
   * product link actually wants is what it costs and whether their size is
   * left, both of which fit.
   */
  const availability = !product.available
    ? 'sold out'
    : oneSize
      ? 'one size'
      : sizes.length === product.variants.length
        ? `${sizes[0]} to ${sizes[sizes.length - 1]}`
        : `${sizes.join(', ')} in stock`

  return {
    path: `/products/${product.handle}`,
    eyebrow: product.available ? undefined : 'sold out',
    title: `${product.title}.`,
    subtitle: `EUR ${product.price.toFixed(2)} / ${availability}`,
    foreground: `resources/assets/images/products/${product.handle}.jpg`,
  }
})

export default {
  /*
   * Cards draw real glyphs rather than leaning on a system font stack, so the
   * face has to be a file the project ships. Geist is the site's own type, and
   * these are the static TrueType cuts: OpenType/CFF and WOFF2 are different
   * outline formats and will not load.
   */
  fonts: {
    title: 'resources/assets/fonts/geist/Geist-Bold.ttf',
    body: 'resources/assets/fonts/geist/Geist-Regular.ttf',
  },

  /*
   * The site's palette, not a generic dark card.
   *
   * `--page` in dark mode is #0b0b0b and the accent is #ff5334, so a card
   * dropped into a chat window reads as the same brand as the page it links
   * to. The glow sits top-right, away from the copy on the left.
   */
  background: {
    color: '#0b0b0b',
    gradient: {
      angle: 155,
      stops: [
        { offset: 0, color: '#111111' },
        { offset: 1, color: '#070707' },
      ],
    },
    glows: [{ x: 0.82, y: 0.1, radius: 0.55, color: '#ff53341f' }],
  },
  color: '#f2f2f0',
  mutedColor: '#a3a39e',
  accent: '#ff5334',

  social: {
    // Explicit: cards need a face and a palette the framework cannot invent,
    // so "the section exists" is not enough of a signal to start demanding
    // them.
    enabled: true,

    // One card per route. The square and portrait crops exist for URLs you
    // reference directly; putting them in `og:image` is what makes Discord
    // collage a preview into slivers.
    presets: ['og'],
    format: 'jpeg',
    quality: 86,

    /*
     * Drawn as text in Geist Bold rather than as a raster mark. The rappid.
     * wordmark is the brand name set in a geometric grotesque, so the face the
     * site already ships renders it faithfully, and there is no PNG to keep in
     * step with the SVG in `resources/components/Wordmark.stx`.
     */
    brand: 'rappid.',

    // The campaign frame most pages share. Individual routes override it below
    // where a more specific shot exists.
    foreground: 'resources/assets/images/social/hero.jpg',

    device: {
      // Square corners, like every other surface on the site.
      radius: 0,
      shadow: { blur: 48, offsetY: 18, color: '#00000066' },
    },

    /*
     * One entry per route, derived from the catalogue rather than hand-listed.
     *
     * A product link is the most-shared URL a shop has, and a product sharing
     * as the generic site card wastes the preview: it says "rappid." where it
     * could say which piece, at what price, in which sizes. Deriving the list
     * also means a new product gets a card by existing, not by somebody
     * remembering to add one here.
     */
    pages: [
      {
        path: '/',
        title: 'gear that lasts longer than you do.',
        subtitle: 'Running apparel built in Bochum and tested at 382km in Texas heat.',
      },
      ...collectionCards,
      ...productCards,
      {
        path: '/drops',
        eyebrow: 'drops',
        title: 'released in capsules, not seasons.',
        subtitle: 'Each one made for a specific race, in a run that ends when it ends.',
        foreground: 'resources/assets/images/social/last-soul.jpg',
      },
      {
        path: '/stories',
        eyebrow: 'stories',
        title: 'stories from the runs.',
        subtitle: 'Race reports written by the people who ran them.',
        foreground: 'resources/assets/images/social/go-one-more.jpg',
      },
      {
        path: '/sizing',
        eyebrow: 'sizes',
        title: 'does it come in your size?',
        subtitle: 'Live availability across every sized piece in the range.',
        foreground: 'resources/assets/images/social/tops.jpg',
      },
      {
        path: '/returns',
        eyebrow: 'returns',
        title: '14 days to change your mind.',
        subtitle: 'Unworn, in original packaging, started in the returns portal.',
      },
    ],
  },
} satisfies ImagesConfig
