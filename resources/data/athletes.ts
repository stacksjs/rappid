/**
 * The athletes who run for rappid.
 *
 * Two, and only two, because two is who the brand actually publishes. Kim is a
 * co-founder who races in the kit he makes; Paweł carries "Team Athlete" as his
 * stated role with rappid. on his own site. Alexander Krenzek is the other
 * co-founder and does the design; he is not on this page because he is not an
 * athlete, and padding a roster is how a two-person team starts looking like a
 * team it is not.
 *
 * Every result below is a published one, with the distance and the time the
 * athlete's own record gives. Nothing here is estimated or rounded up.
 */

export interface Result {
  year: string
  /** The race, named as the organiser names it. */
  race: string
  /** Distance and time, or placing, exactly as recorded. */
  detail: string
  /** Set when the result is the athlete's headline one. */
  highlight?: boolean
}

export interface Athlete {
  slug: string
  name: string
  /** Their relationship to the brand, not a job title invented for a grid. */
  role: string
  /** One line under the name. */
  standfirst: string
  /** Where they are based. */
  basedIn: string
  /** The distances they actually race. */
  discipline: string
  portrait: string
  portraitAlt: string
  /** Two or three paragraphs, drawn from published race reports. */
  bio: string[]
  results: Result[]
  /** A story on this site about them, when one exists. */
  story?: { slug: string, title: string }
  links: { label: string, href: string }[]
}

export const athletes: Athlete[] = [
  {
    slug: 'kim-gottwald',
    name: 'kim gottwald',
    role: 'co-founder',
    standfirst: 'Started running 10 kilometres every morning in his last year of school. Has not really stopped.',
    basedIn: 'Cologne, Germany',
    discipline: 'backyard and last-one-standing ultras',
    portrait: 'https://www.rappid.run/cdn/shop/articles/SnapInsta.to_544813836_18521197024065331_2251850306319052349_n_7e77c96b-7e93-438d-8ccb-a4d6b70ab6c5.jpg?v=1758892202',
    portraitAlt: 'Kim Gottwald racing in a rappid. cap and singlet, other runners behind him',
    bio: [
      'Kim co-founded rappid. in 2023 with Alexander Krenzek, having already built and closed a streetwear label on his own. The brand had no visibility, so he made some: during Euro 2024 he ran from host city to host city for every German match, roughly a marathon a day, his mother alongside him on a bicycle carrying the kit.',
      'What followed was longer. The length of Germany on foot that October, Sylt to Neuschwanstein, over 63 kilometres a day for eighteen days. Then Austin, Texas in May 2025: a 6.7 kilometre loop every hour until nobody else could, in heat above 37 degrees. He was one of two runners left at 30 hours and still going at 56 when a storm ended it, which made him the last one standing.',
      'He races in the kit he makes, which is the whole argument for it. The Last Soul Ultra in October 2025 he also organised, then won at round 67 with a knee that had locked at 100 kilometres, and was carried to the ambulance afterwards.',
    ],
    results: [
      // Rounds, not kilometres: a backyard ultra publishes the round count, and
      // multiplying it by an assumed loop length would be a number nobody
      // recorded.
      { year: '2025', race: 'Last Soul Ultra', detail: '67 rounds · winner', highlight: true },
      { year: '2025', race: 'Go One More Ultra, Austin TX', detail: '382 km · 56 hours · last one standing', highlight: true },
      { year: '2024', race: 'Germany, Sylt to Neuschwanstein', detail: '1,160 km · 18 days' },
      { year: '2024', race: 'Berlin 161K', detail: '161 km' },
      { year: '2024', race: 'Euro 2024, host city to host city', detail: '450+ km · a marathon most days' },
    ],
    story: { slug: 'last-soul-ultra', title: 'last soul ultra' },
    links: [
      { label: 'instagram', href: 'https://www.instagram.com/rappid.run/' },
      { label: 'youtube', href: 'https://www.youtube.com/@kimgottwald' },
    ],
  },
  {
    slug: 'pawel-dregan',
    name: 'paweł dregan',
    role: 'team athlete',
    standfirst: 'Races the longest events on the calendar, from 100 kilometres to 700.',
    basedIn: 'Germany',
    discipline: 'ultra distance, 100K to 700K',
    portrait: 'https://www.rappid.run/cdn/shop/articles/WhatsApp_Image_2026-06-02_at_12.39.18_2_e0816d63-6924-472a-91e1-2a4bc08dc9f8.jpg?v=1780504888',
    portraitAlt: 'Paweł Dregan hauling a sled across a frozen Lapland snowfield',
    bio: [
      'Paweł runs the events most people read about from a heated room. In 2025 he crossed 515 kilometres of the Swedish Arctic at the Lappland Arctic Ultra, dragging a sled for nearly seven days in temperatures well below zero, and finished second. Shin splints arrived halfway; he slept three hours in an open shelter at minus twenty and started day four at half past four in the morning.',
      'The final 60 kilometres of that race took the winner fifteen hours. He covered them in under twelve, having stopped once for a six-minute nap on his sled.',
      'The same year he finished the SwissPeaks Trail 700K. He coaches one to one alongside racing, and crewed Kim through the back half of the Last Soul Ultra.',
    ],
    results: [
      { year: '2025', race: 'Lappland Arctic Ultra 500K', detail: '515 km · 6d 23h 27m · 2nd place', highlight: true },
      { year: '2025', race: 'SwissPeaks Trail 700K', detail: '700 km · 175:43:56 · finisher', highlight: true },
      { year: '2024', race: 'Eiger Ultra Trail E250 by UTMB', detail: '254 km · 70:42:49' },
      { year: '2023', race: 'KAT100 by UTMB', detail: '160 km · 36:15:50' },
      { year: '2023', race: 'KoBoLT 140', detail: '140 km · 19:57:00 · 6th place' },
      { year: '2022', race: 'Pitz Alpine Glacier Trail P105', detail: '106 km · 26:31:54' },
      { year: '2020', race: 'Chiemgauer 100', detail: '160.9 km · 31:47:42 · first 100 miler' },
    ],
    story: { slug: 'the-human-soul-is-still-wilderness', title: '“the human soul is still wilderness”' },
    links: [
      { label: 'paweldregan.com', href: 'https://paweldregan.com' },
    ],
  },
]

export function athleteBySlug(slug: string): Athlete | undefined {
  return athletes.find(athlete => athlete.slug === slug)
}

/** Longest single race across the roster, in kilometres. Derived, not typed in. */
export function longestRace(): number {
  const distances = athletes
    .flatMap(athlete => athlete.results)
    .map(result => Number(result.detail.match(/([\d,.]+)\s*km/)?.[1]?.replace(/,/g, '') ?? 0))
  return Math.max(...distances)
}

/** Total published race kilometres across the roster. */
export function totalKilometres(): number {
  return athletes
    .flatMap(athlete => athlete.results)
    .reduce((sum, result) => sum + Number(result.detail.match(/([\d,.]+)\s*km/)?.[1]?.replace(/,/g, '') ?? 0), 0)
}
