import type { Product } from './catalog'
import { byAvailabilityThenNewest, products, productsIn } from './catalog'

/**
 * Every collection the storefront links to, in the shape the shop pages and
 * the mega menu both read. One list, so a menu can never offer a collection
 * that has no page and a page can never exist that nothing links to.
 */
export interface Collection {
  handle: string
  title: string
  /** One line under the collection title. Plain description, not a slogan. */
  blurb: string
  /** Groups the collection in the mega menu. */
  group: 'shop' | 'drops'
  /** Parent handle when this is a sub-collection, so breadcrumbs resolve. */
  parent?: string
}

export const collections: Collection[] = [
  { handle: 'all-products', title: 'all products', blurb: 'The full range, every size currently in stock.', group: 'shop' },
  { handle: 'new-arrivals', title: 'new arrivals', blurb: 'Everything added to the range this season, newest first.', group: 'shop' },

  { handle: 'tops', title: 'tops', blurb: 'Short sleeve, long sleeve, half zips and outerwear.', group: 'shop' },
  { handle: 'long-sleeve', title: 'long sleeve', blurb: 'Cover for cold mornings and long efforts.', group: 'shop', parent: 'tops' },
  { handle: 'short-sleeve', title: 'short sleeve', blurb: 'Light, breathable tees for training and race day.', group: 'shop', parent: 'tops' },
  { handle: 'outerwear', title: 'outerwear', blurb: 'Wind and weather layers that pack down small.', group: 'shop', parent: 'tops' },
  { handle: 'graphic-shirts', title: 'graphic shirts', blurb: 'Race and project shirts from the last two seasons.', group: 'shop', parent: 'tops' },
  { handle: 'collegial-hoodies', title: 'hoodies', blurb: 'Heavyweight cotton for the hours around the run.', group: 'shop', parent: 'tops' },

  { handle: 'bottoms', title: 'bottoms', blurb: 'Tights and shorts built for distance.', group: 'shop' },
  { handle: 'tights', title: 'tights', blurb: 'Long and short tights with pocket storage.', group: 'shop', parent: 'bottoms' },
  { handle: 'shorts', title: 'shorts', blurb: 'Split and lined shorts for fast work.', group: 'shop', parent: 'bottoms' },

  { handle: 'accessories', title: 'accessories', blurb: 'Caps, bandanas and the small things that carry.', group: 'shop' },
  { handle: 'pace-caps', title: 'pace caps', blurb: 'Soft brim, laser-cut vents, packable.', group: 'shop', parent: 'accessories' },
  { handle: 'ultra-caps', title: 'ultra caps', blurb: 'Neck cover and full shade for long days out.', group: 'shop', parent: 'accessories' },
  { handle: 'grid-caps', title: 'grid caps', blurb: 'Structured five panel in four colourways.', group: 'shop', parent: 'accessories' },
  { handle: 'bandanas', title: 'bandanas', blurb: 'Sweat, sun and dust cover.', group: 'shop', parent: 'accessories' },

  { handle: 'last-soul-ultra-2026', title: 'last soul ultra 2026', blurb: 'The capsule made for the backyard ultra in October.', group: 'drops' },
  { handle: 'lsu-tops', title: 'tops', blurb: 'Race shirts and layers from the LSU capsule.', group: 'drops', parent: 'last-soul-ultra-2026' },
  { handle: 'lsu-bottoms', title: 'bottoms', blurb: 'Shorts and tights from the LSU capsule.', group: 'drops', parent: 'last-soul-ultra-2026' },
  { handle: 'last-soul-capsule-accessories', title: 'accessories', blurb: 'Caps and bandanas from the LSU capsule.', group: 'drops', parent: 'last-soul-ultra-2026' },

  { handle: 'atv-collection', title: 'atv collection', blurb: 'The all-terrain range: shell, half zip, tights and caps.', group: 'drops' },
  { handle: 'atv-tops', title: 'tops', blurb: 'Storm jacket, half zip, long and short sleeve.', group: 'drops', parent: 'atv-collection' },
  { handle: 'atv-bottoms', title: 'bottoms', blurb: 'Short tights, running shorts and pace shorts.', group: 'drops', parent: 'atv-collection' },
  { handle: 'atv-accessories', title: 'accessories', blurb: 'Caps and carry from the ATV range.', group: 'drops', parent: 'atv-collection' },
]

export function collectionByHandle(handle: string): Collection | undefined {
  return collections.find(c => c.handle === handle)
}

export function childrenOf(handle: string): Collection[] {
  return collections.filter(c => c.parent === handle)
}

/**
 * A collection's products, in stock first. `all-products` deliberately reads
 * the whole catalogue rather than the storefront's own `all-products` list:
 * that list lags behind by whatever was published since it was last curated.
 */
export function itemsIn(handle: string): Product[] {
  const list = handle === 'all-products' ? [...products] : productsIn(handle)
  return list.sort(byAvailabilityThenNewest)
}

/** Sizes present across a set of products, in the order a runner reads them. */
const SIZE_ORDER = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'ONESIZE']

export function sizesAcross(items: Product[]): string[] {
  const seen = new Set(items.flatMap(p => p.variants.map(v => v.size)))
  return [...seen].sort((a, b) => {
    const ai = SIZE_ORDER.indexOf(a.toUpperCase())
    const bi = SIZE_ORDER.indexOf(b.toUpperCase())
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi)
  })
}
