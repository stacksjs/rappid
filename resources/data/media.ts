/**
 * Campaign photography, by the job it does on the page.
 *
 * These are the brand's own race and campaign frames rather than product
 * shots: a garment on a white sweep sells the garment, a runner pouring water
 * over their head at hour 30 sells the reason to buy it.
 *
 * `at()` asks the CDN for the width the slot actually paints.
 */

export interface Shot {
  src: string
  alt: string
  /** Intrinsic aspect, so the slot can reserve space and never shift layout. */
  ratio: string
}

const CDN = 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files'

export const shots = {
  hero: {
    src: `${CDN}/1417C5D2-B83C-48A5-ADC4-5DD018FEFCC9-3.jpg`,
    alt: 'A runner in a rappid. pace cap tipping a sponge of water over their head at an aid station',
    ratio: '16/9',
  },
  lastSoul: {
    src: `${CDN}/LSU.jpg`,
    alt: 'Last Soul Ultra lap board lit red against the night',
    ratio: '16/9',
  },
  tops: {
    src: `${CDN}/Zeichenflaeche_3.webp`,
    alt: 'A runner in a rappid. long sleeve and cap, lit from one side against black',
    ratio: '3/4',
  },
  bottoms: {
    src: `${CDN}/Zeichenflaeche_4.webp`,
    alt: 'A runner in short tights driving through standing water, spray in the air',
    ratio: '3/4',
  },
  accessories: {
    src: `${CDN}/Zeichenflaeche_5.webp`,
    alt: 'Profile of a runner in an ultra cap with the neck cover down and a bandana tied at the throat',
    ratio: '3/4',
  },
  goOneMore: {
    src: `${CDN}/Zeichenflaeche_2.webp`,
    alt: 'Runners walking out under a hand-painted GO ONE MORE banner at the start of another loop',
    ratio: '3/4',
  },
  kim: {
    src: `${CDN}/SnapInsta.to_557437765_18525862252065331_7740609491901548511_n.jpg`,
    alt: 'Kim Gottwald racing in a rappid. cap and singlet, other runners behind',
    ratio: '4/5',
  },
} satisfies Record<string, Shot>

/** The same frame at the width a given slot paints. */
export function at(shot: Shot, width: number): string {
  return `${shot.src}?width=${width}`
}

/**
 * A srcset at 1x and 2x for a slot of the given CSS width, so a retina screen
 * gets the sharp file and a phone does not download it.
 */
export function srcset(shot: Shot, width: number): string {
  return `${shot.src}?width=${width} 1x, ${shot.src}?width=${width * 2} 2x`
}
