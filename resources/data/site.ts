/**
 * Brand-level constants: navigation, markets, footer, and the strings that
 * appear on more than one page. Anything a page prints twice belongs here so
 * the two copies cannot drift apart.
 */

export const brand = {
  name: 'rappid.',
  legalName: 'rappid.',
  tagline: 'by inspiring others we inspire ourselves',
  founded: 2023,
  url: 'https://rappid.run',
  /** Real return window, taken from the storefront's own returns notice. */
  returnDays: 14,
  returnsPortal: 'https://ff662c-2a.returnsportal.online/',
  marathonSignup: 'https://my.raceresult.com/415403/registration',
}

export interface NavGroup {
  title: string
  href: string
  items: { label: string, href: string }[]
}

export interface NavColumn {
  label: string
  href: string
  groups: NavGroup[]
}

/**
 * The two mega menus, mirroring the storefront's own shop and drops trees.
 * Every href here resolves to a collection in ./collections.
 */
export const shopMenu: NavGroup[] = [
  {
    title: 'tops',
    href: '/collections/tops',
    items: [
      { label: 'long sleeve', href: '/collections/long-sleeve' },
      { label: 'short sleeve', href: '/collections/short-sleeve' },
      { label: 'outerwear', href: '/collections/outerwear' },
      { label: 'graphic shirts', href: '/collections/graphic-shirts' },
      { label: 'hoodies', href: '/collections/collegial-hoodies' },
    ],
  },
  {
    title: 'bottoms',
    href: '/collections/bottoms',
    items: [
      { label: 'tights', href: '/collections/tights' },
      { label: 'shorts', href: '/collections/shorts' },
    ],
  },
  {
    title: 'accessories',
    href: '/collections/accessories',
    items: [
      { label: 'pace caps', href: '/collections/pace-caps' },
      { label: 'ultra caps', href: '/collections/ultra-caps' },
      { label: 'grid caps', href: '/collections/grid-caps' },
      { label: 'bandanas', href: '/collections/bandanas' },
    ],
  },
]

export const dropsMenu: NavGroup[] = [
  {
    title: 'last soul ultra 2026',
    href: '/collections/last-soul-ultra-2026',
    items: [
      { label: 'tops', href: '/collections/lsu-tops' },
      { label: 'bottoms', href: '/collections/lsu-bottoms' },
      { label: 'accessories', href: '/collections/last-soul-capsule-accessories' },
    ],
  },
  {
    title: 'atv collection',
    href: '/collections/atv-collection',
    items: [
      { label: 'tops', href: '/collections/atv-tops' },
      { label: 'bottoms', href: '/collections/atv-bottoms' },
      { label: 'accessories', href: '/collections/atv-accessories' },
    ],
  },
]

export const footerLinks = [
  { label: 'contact', href: '/contact' },
  { label: 'imprint', href: '/legal/imprint' },
  { label: 'privacy', href: '/legal/privacy' },
  { label: 'your privacy choices', href: '/legal/privacy-choices' },
  { label: 'refunds', href: '/legal/refunds' },
  { label: 'shipping', href: '/legal/shipping' },
  { label: 'terms', href: '/legal/terms' },
]

export interface Market {
  code: string
  label: string
  currency: 'EUR' | 'GBP' | 'USD'
  symbol: string
  /** Multiplier against the EUR base price. */
  rate: number
}

/**
 * The three currencies the storefront prices in. Rates are the store's own
 * market rates, read off its GB and US storefronts on 2026-08-27 (the storm
 * jacket prices at 169.95 EUR, 148.66 GBP and 201.80 USD). They are fixed
 * here rather than fetched, so a price never changes between the grid and
 * the product page inside one visit.
 */
/*
 * The base market is named rather than reached for as `markets[0]`: every
 * price on the site falls back to it, and an index lookup is typed as
 * possibly undefined.
 */
export const defaultMarket: Market = { code: 'de', label: 'germany', currency: 'EUR', symbol: '€', rate: 1 }

export const markets: Market[] = [
  defaultMarket,
  { code: 'gb', label: 'united kingdom', currency: 'GBP', symbol: '£', rate: 0.87473 },
  { code: 'us', label: 'united states', currency: 'USD', symbol: '$', rate: 1.18741 },
]

/** EUR base price rendered in a market's currency, rounded to the cent. */
export function priceIn(eur: number, market: Market = defaultMarket): string {
  const value = Math.round(eur * market.rate * 100) / 100
  return `${market.symbol}${value.toFixed(2)}`
}
