import type { Product } from './catalog'
import { products } from './catalog'
import { collectionByHandle, itemsIn, sizesAcross } from './collections'

/**
 * Size availability, derived from the catalogue.
 *
 * The store publishes no garment measurements anywhere, so none are invented
 * here. What it does publish, on every variant, is which sizes exist and
 * which are still buyable, and that is worth putting on one page: it answers
 * "do you have my size" without opening sixty-five product pages.
 */

export interface SizeRow {
  size: string
  /** Products in this family that offer the size at all. */
  offered: number
  /** Products in this family with the size in stock right now. */
  inStock: number
}

export interface FamilyChart {
  handle: string
  title: string
  blurb: string
  sizes: string[]
  rows: SizeRow[]
  total: number
}

function chartFor(handle: string): FamilyChart {
  const items = itemsIn(handle).filter(p => p.variants.length > 1)
  const sizes = sizesAcross(items)
  const collection = collectionByHandle(handle)

  return {
    handle,
    title: collection?.title ?? handle,
    blurb: collection?.blurb ?? '',
    sizes,
    total: items.length,
    rows: sizes.map(size => ({
      size,
      offered: items.filter(p => p.variants.some(v => v.size === size)).length,
      inStock: items.filter(p => p.variants.some(v => v.size === size && v.available)).length,
    })),
  }
}

export const families: FamilyChart[] = [chartFor('tops'), chartFor('bottoms')]

/** Pieces sold in a single size, so the page can say so rather than imply a range. */
export function oneSizePieces(): Product[] {
  return products.filter(p => p.variants.length === 1)
}
