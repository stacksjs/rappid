/**
 * The stories section: eight long-form pieces on the runs behind the brand.
 *
 * Bodies are the published text, paragraph by paragraph, so the reading page
 * can set measure and rhythm itself instead of rendering a blob of vendor
 * HTML. `pullQuote` is empty on the pieces that have no line worth lifting;
 * the template skips the block rather than inventing one.
 */

export interface Story {
  slug: string
  title: string
  /** ISO date. Formatted for display by `storyDate`. */
  date: string
  author: string
  excerpt: string
  image: string
  imageAlt: string
  body: string[]
  pullQuote: string
  pullQuoteBy: string
}

export const stories: Story[] = [
  {
    slug: 'the-human-soul-is-still-wilderness',
    title: '“the human soul is still wilderness” by a.p.l.',
    date: '2026-06-03',
    author: 'a.p.l.',
    excerpt: 'lapland arctic ultra - pawel dregan\'s 515-kilometre expedition across the arctic wilderness.',
    image: 'https://www.rappid.run/cdn/shop/articles/WhatsApp_Image_2026-06-02_at_12.39.18_2_e0816d63-6924-472a-91e1-2a4bc08dc9f8.jpg?v=1780504888',
    imageAlt: 'Pawel Dregan hauling a sled across a frozen Lapland snowfield',
    body: [
      'humanity\'s knowledge of the world was once a luxury provided by a species of man we have agreed to think of as extinct.',
      'modernity and its persuasive veil of comfort have eliminated the blanks on the maps of our world. oceans and great plains no longer need valiant crossing, uncharted territories are no more, and distant cultures can study each other in excruciating detail, never once forced to take a single step outside of a technology-induced cosmos of safety and familiarity. the planet is documented now, photographed from every angle.',
      'so what use do we have for explorers and adventurers? what contribution do the brave and audacious have to offer the rest of mankind?',
      'it is a question that hangs over every age convinced it has reached the terminus of history. not too long ago men sailed westward not knowing if there was land beyond the horizon. they vanished into polar wastes and the roaring sea, crossed mountain ranges that killed entire expeditions, and disappeared into deserts carrying little more than instinct, conviction and prayer. the explorer occupied a sacred place in civilisation because he enlarged the world. he returned with maps, stories, warnings, possibilities. he proved that the edge was farther away than people imagined.',
      'but modern man, cocooned in certainty, has mistaken geographical completion for existential realisation. because the earth has been measured, we assume the frontier itself is dead. exploration was never merely about land. it was, has always been, and remains to this day an expression of human capacity.',
      'this is a truth i was exposed to when watching my dear friend drag a sled through 515 kilometres of arctic wilderness across frozen scandinavia. the lapland arctic ultra is a race so ridiculously punishing that even its statistics seem reluctant to be believed. nearly seven days of temperatures collapsing far below zero. endless snowfields. isolation. exhaustion. sleep deprivation. a human being moving through the white silence of the swedish arctic with only the most primitive mandate available to man: continue.',
      'there is a tendency to reduce today\'s ultra-endurance athletes to caricatures. narcissists in expensive gear, dopamine addicts chasing suffering for social media applause. the criticism is understandable in an age where every achievement is photographed before it is even understood. cynics might justifiably contend that modern-day ultra-endurance running and herculean expeditions of this magnitude serve more often than not simply the greater glory of self. such critique, however, goes wholly against the constitution of the man i know pawel dregan to be.',
      'to know him, even briefly, is to understand that gentleness and ferocity are not opposites. they often live harmoniously in the same man. he is profoundly loyal, deeply kind, and wildly and unmistakably devoted to the life he has built beside his wife, whom he speaks of not as an accessory to achievement but as the central blessing of his existence. there are men who pursue hardship because they are fleeing life. my friend pawel appears to pursue it because he loves life so intensely he wishes always to encounter it in its rawest form.',
      'before the race began, he had prepared meticulously. his body was trained, his mind fortified and disciplined. i know, because just a few weeks prior to his adventure we trained together in the mallorcan hills for just over a week, a training camp that proved to me he was truly in miraculous shape and excited to put his body and spirit to the test.',
      'yet preparation, he would later discover, is humbled quickly by the arctic, for the cold is a violent thing which cares not for something as feeble and fragile as human preparation. snow is not a singular substance there; it shifts temperament constantly. it changes character. it behaves. one hour it is compact earth, the next wet cement, the next ash. there were entire sections of the race which made running completely impossible due to the changing consistency of the snow beneath pawel\'s feet. during the crossing itself, movement is governed almost entirely by adaptation.',
      'there were also other ways in which the cold imposed its own laws. hunger became utterly insatiable. sleep, often the first thing to be sacrificed during these races and expeditions, turned quickly from luxury into biological necessity. energy disappeared with alarming speed. the body, fighting merely to remain warm, burned through reserves violently. the arctic stripped existence down to fundamentals: heat, motion, calories, shelter.',
      'this is where prolonged endurance in hostile environments becomes soul-revealing. masks disappear and modern identity, so often constructed from performance and posture, begins to fracture. what remains is elemental character. and pawel has one pervading characteristic: he is purposeful. purpose is perhaps the defining trait of all great explorers. it is not recklessness, it is not thrill-seeking, and it is certainly not mere bravery. it is a voluntary confrontation with uncertainty in pursuit of something difficult to articulate but instantly recognisable when witnessed.',
      'midway through the arctic crossing, pawel\'s body began to fail him. shin splints emerged after prolonged movement in snowshoes, a familiar injury carrying terrible psychological weight. it had ended a previous expedition across germany, and the memory of this injury has since been stored in his mind and body. human beings can survive inconceivable physical pain when meaning remains intact, but once hope fractures, collapse follows with murderous intent.',
      'now, in the frozen north, the pain returned like a prophecy. pawel was concerned. of all the enemies, the cold, the ice and the distance, demoralisation was the most dangerous of them all.',
      'the slow erosion of inner conviction reared its ugly face, but pawel was ready. he spent the third night sleeping in an open shelter at minus 20 degrees. three hours of sleep had to be enough, and so began day four at 4:30 am. the pain remained a companion, but a silent one. pawel charged on. the race was still his to decide.',
      'and ultimately, endurance and defiance are exactly that: a decision. it is why endurance athletes fascinate us, for they externalise a private human struggle every person recognises. every human life eventually becomes an argument between surrender and continuation.',
      'john f. kennedy understood this idea well when he addressed america at rice university in 1962, and the message endures because it articulates something eternal: hardship, willingly chosen, has intrinsic value. not because suffering itself is noble, but because difficulty clarifies the soul. it reveals reserves of courage, ingenuity and perseverance inaccessible through comfort alone.',
      'civilisations are not built by people seeking ease, for ease does not provide the constitution necessary to build. the explorers who crossed oceans, the mountaineers who vanished into storms, the pioneers who pushed beyond borders were all participating in the same ancient instinct. humanity advances because certain individuals refuse the boundaries imposed by fear and familiarity. one person really can change the world.',
      'shackleton\'s doomed endurance expedition remains one of history\'s great examples not because antarctica was conquered, but because the human spirit was tested there with terrifying severity, and in the face of this gruesome severity the human soul proved itself capable of extraordinary resilience. the ice became secondary; the revelation was man himself.',
      'after days of exhaustion, deteriorating conditions and mounting physical pain, he continued pulling his sled northwards through slush and darkness. the temptation to stop became overwhelming when small shelters along the final stage of the route offered warmth and sleep, but pawel is a man hungry for the taste of well-kept promises, so he passed them and kept moving, also insulting in the process the spirit of debilitating fatigue. at one point, heavy and depleted, he collapsed onto his sled for a six-minute nap before rising again into the polar night. the final 60-kilometre section of the race, which the winner of this year\'s race needed 15 hours to complete, pawel completed in under 12.',
      'when dawn finally arrived over the arctic landscape, it did not merely illuminate snowfields; it illuminated completion. a man emerging from a confrontation with himself. he crossed the finish line in second place after nearly seven days in conditions that would appear uninhabitable to most people reading about them from heated rooms thousands of miles away.',
      'but the placing is almost irrelevant. i congratulate him warmly on this failure, for victory, after all, is the dullest possible conclusion to any adventure. it reduces a story to a statistic. finishing second, however, leaves a delicious space for reflection. and what matters most is what journeys such as his preserve.',
      'the modern world risks becoming hostile to the very instincts that created it. convenience has immense value, but comfort, when worshipped absolutely, produces a hideous spiritual stagnation. we are descendants of voyagers, migrants, builders and risk-takers. entire nations were founded by people willing to endure uncertainty in pursuit of possibility. to lose that impulse entirely would be to amputate something fundamentally human.',
      'not because there are continents left undiscovered, but because there are dimensions of human experience still unmapped. courage and resilience, though so richly documented, remain unexplored territory. devotion, suffering, endurance, transcendence: these frontiers stretch infinitely inward.',
      'and perhaps that is the responsibility inherited by modern adventurers and ultra-endurance athletes. we voyage not across unknown seas, but across the hidden interior of man himself. we return carrying evidence that the boundaries governing ordinary life are illusions negotiated long before true limits are reached. we remind civilisation that comfort is not the apex of existence. meaning is.',
      'so while satellites orbit overhead and every coastline has long since been named, there remains one vast canvas still demanding exploration, and we stand under an obligation to chart it bravely for those who come after us.',
    ],
    pullQuote: 'we choose to go to the moon in this decade and do the other things not because they are easy but because they are hard.',
    pullQuoteBy: 'john f. kennedy, rice university, 1962',
  },
  {
    slug: 'last-soul-ultra',
    title: 'last soul ultra',
    date: '2025-10-27',
    author: 'kim gottwald',
    excerpt: '67 hours of pain, pressure, and purpose: my journey through the backyard ultra.',
    image: 'https://www.rappid.run/cdn/shop/articles/last-soul-rappid-133_a406bdda-25d3-4b7e-86c2-7534e652dd36.jpg?v=1762178795',
    imageAlt: 'Kim Gottwald mid-loop at the Last Soul Ultra backyard race',
    body: [
      'a week before the race, i was already running on empty. from sunday to monday, i slept fifteen hours straight, my body\'s desperate attempt to recover from weeks of organizational stress and unresolved issues. tuesday was spent entirely in stuttgart, leaving no room for rest or mental preparation as my mind was consumed by event logistics rather than racing.',
      'early on i was certain that i would never again try to be both organizer and participant. although my team spoke of “earned pressure,” i felt more like a moving target than an athlete between internal expectations and external demands. it seemed as if everyone were waiting for me to fail.',
      'the day before the race felt like anything but the calm before the storm. i picked up my crew member, chris, at noon and tried to catch up on everything i had neglected over the past few days. due to traffic keeping us from reaching the race location on time, we detoured to bochum to unpack and pre-cook meals. meanwhile, my phone buzzed incessantly with organizational calls, causing my head to spin.',
      'we woke at 5 a.m., packed the van, and picked up our second crew member, aaron. the sky greeted us with a sunrise and a rainbow, creating a surreal contrast to the storm of thoughts in my head. while setting up camp, we realized we had forgotten a few tactical items, which my family later brought. the weather was colder and wetter than expected, adding to my unease.',
      'between livestream duties and last-minute preparations, focus was difficult to come by. eventually, aleks\' crew pulled me aside, fed me porridge, and shielded me in a tent. for the first time that morning, i felt a sense of calm. ten minutes before the start, i prayed and read aleks\' favorite poem. in that moment, everything else fell away, and i was locked in.',
      'our pacing plan, created the night before, followed world-champion splits. we divided the race into three temporal zones: red rounds were slow (48 to 51 minutes), yellow steady (44 to 48), and green fast (40 to 42). after my stomach collapsed at the texas race after 24 hours, caution was non-negotiable. so the strategy was simple: start conservatively with five red rounds to let the body adapt and test digestion.',
      'early digestion issues and distant toilets cost me time, but by round six, i found my rhythm. muscle fatigue showed up quickly, particularly in my calves and hamstrings, and physio work began sooner than planned. as the sun set, i started transitioning into yellow rounds.',
      'my plan was straightforward: run fast, eat, and sleep as much as possible. as nutrition was steady, consisting of sweet bread with jam, nuts, dried fruits, and instant meals, the first two night rounds went smoothly. however, with adrenaline keeping me wired, sleep refused to come. around midnight, i finally managed to rest, though my legs struggled with the 42-minute rounds. i decided to slow down, which helped physically. but mentally i hit a wall.',
      'up to the 100 km mark, the field remained strong, and there were no major dropouts. my left knee, however, was completely locked, forcing a camp-side team meeting. physios diagnosed classic overuse, and my morale plummeted.',
      'then aleks, who had dropped out in round 12 due to stomach issues, returned in order to crew for me. the moment i broke down crying in the tent became a turning point. together, aleks and i decided: if we were going to suffer, everyone else would too. no more tears. a mindset shift occurred.',
      'the second day brought steadier energy. i started enjoying small moments again, even video-calling friends like lucy and jack, and my girlfriend. as spectators arrived the race atmosphere grew livelier. what had felt like an endless nightmare began to feel like an event again. but most of the time highs are followed by lows, and the second night would test me harder than ever.',
      'by midnight, sleep deprivation hit full force. when i started hallucinating, talking to myself, solving imaginary puzzles, and visualizing cameramen hiding in trees and ditches, each round became a mental labyrinth.',
      'yet, as the sun rose, a wave of strength returned. around 320 km in, only three runners remained: ello, pierre, and me. after round 40, pierre dropped out, leaving just the two of us.',
      'as day three arrived, my body was destroyed. while ello ran like a metronome, seemingly unfazed, my left leg was nearly useless. somehow, as i reached round 50, new energy emerged. i saw the crowd, their signs, the support. a young girl held a “go kim” sign and coach pawel returned. my focus shifted from victory to gratitude and the atmosphere was electric.',
      'then came the final night. as always, the higher the high, the deeper the fall. my pace collapsed after round 57. sleep deprivation, hallucinations, and pain spiraled. each round was slower than the last. by round 63, i could barely stay upright. everyone assumed it was over. after i called aleks, who feared for my safety, i called my girlfriend, who was relieved i might stop. but i refused. “i\'ll run until i collapse.”',
      'rounds 64 to 66 became a blur of pain and fragmented consciousness. i came up with a rather desperate plan: two slow rounds, then one fast into sunrise. perhaps ello would break before i did.',
      'as i started round 67, hope flickered since i noticed ello missing from his usual checkpoints. his crew cheered me on, mistaking me for ello and unaware of the fact i was still in the fight. finally reaching the final stretch, i heard clapping and saw fireworks. it hit me all at once: i had actually won.',
      'crossing the finish line was overwhelming. i hugged ello and his crew, then my own: aleks, chris, aaron, and pawel. this wasn\'t just my victory. it was ours.',
      'after the race, my body completely shut down. i had to be carried to interviews, then to the ambulance. in the hospital, my blood and inflammation markers were critically low. days later, the swelling faded, but my left knee remained immobile.',
      'the most important thing i learned during those 67 hours and rounds of pain, pressure and purpose is that the people around you matter most. without my crew, family members and friends i would not have made it a single round further. i learned that our bodies and souls are separate forces. while our body sets limits, our soul drives us forward and you should respect both equally. finally i was taught that you should never underestimate recovery.',
    ],
    pullQuote: 'if we were going to suffer, everyone else would too. no more tears.',
    pullQuoteBy: 'round 12, with aleks back on the crew',
  },
  {
    slug: 'going-the-distance-the-g1m-ultra',
    title: 'going the distance: the g1m ultra',
    date: '2025-09-19',
    author: 'rappid.',
    excerpt: 'at the go one more ultra in texas, kim gottwald pushed through 56 hours and 382 km, an experience that reshaped both his running and rappid.',
    image: 'https://www.rappid.run/cdn/shop/articles/ASDASDASD_5847975e-2ab8-45ea-bd1d-a5359e289254.jpg?v=1758892578',
    imageAlt: 'Kim Gottwald running a loop at the Go One More Ultra in Austin, Texas',
    body: [
      'in may 2025, rappid. co-founder kim gottwald took part in what would become the most extreme challenge of his running career so far: the go one more ultra in austin, texas.',
      'the race format, known as last man standing, required participants to run a 6.7 km loop every hour, on the hour, for as long as they could. there was no finish line, only the last athlete remaining. for kim, it wasn\'t just a race. it was a test of discipline, pain tolerance, and belief.',
      'the event had special meaning. it was hosted by bpn and nick bare, the reason kim had started running in the first place. when the race was first announced, he knew immediately that he wanted to be part of it. not to compete casually, but to prove something: to himself, to others, and to the mission behind rappid.',
      'he spent the 4.5 months leading up to the race training with complete focus. three hours a day, every day, everything in his life aligned toward the goal.',
      'what unfolded in texas was brutal: temperatures above 37 degrees, extreme sleep deprivation, physical breakdowns, hallucinations. after 30 hours, only two runners were left. kim kept going. at 56 hours and 382 kilometers, the race was cut short due to a severe storm. he was still standing, effectively the winner.',
      'this wasn\'t his first ultra, but it was the one that changed everything. his first ultra had been 100 kilometers without preparation, and left him bedridden for days. this time, he was ready. not just physically, but mentally.',
      'during the race, he drew strength from a simple principle: everything is temporary. he didn\'t run for himself. he ran for the message rappid. stands for: not quitting when it gets hard. pushing through. moving forward.',
      'wearing his own gear throughout the race added another layer of meaning. the brand, which already had momentum before the g1m ultra, saw its biggest shift during the event. every product sold out mid-race. the preorder that followed exceeded expectations by a wide margin. since then, each drop has sold out within minutes.',
      'for kim, the event also marked another personal milestone: he became the first non-english-speaking athlete to officially join bpn, something he\'d quietly envisioned since the day he started running.',
    ],
    pullQuote: 'ultras aren\'t really about running. it\'s a mental game. you\'re constantly trying to resist the urge to quit.',
    pullQuoteBy: 'kim gottwald',
  },
  {
    slug: 'germany-ultra-marathon-2024',
    title: 'germany ultra marathon 2024',
    date: '2025-09-19',
    author: 'rappid.',
    excerpt: 'retracing a youtube tour from 2014, kim gottwald covered 1,160 km on foot through germany, facing weather, injuries, and endurance.',
    image: 'https://www.rappid.run/cdn/shop/articles/SnapInsta.to_462654812_1066238851549500_2522741171535027406_n.jpg?v=1758892529',
    imageAlt: 'Kim Gottwald on a country road during the 1,160 km Germany ultra',
    body: [
      'after completing his euro 2024 ultra marathon, kim gottwald began planning a new project for october: the germany ultra marathon. the idea was inspired by a special occasion. kim wanted to retrace the “longboard tour,” a 2014 youtube project by some of the platform\'s biggest creators, exactly ten years later.',
      'the route ran the length of germany, from the northern tip of sylt to neuschwanstein castle in the south. unlike the original, which was completed on longboards, he covered the entire distance on foot. his path mainly went along eastern germany, passing through cities such as kiel, hamburg, leipzig, nuremberg, and augsburg.',
      'by the third day, he was already struggling with injuries. further strong winds and persistent rain in the north made progress difficult. despite numerous obstacles, he continued, covering endless stretches of country roads and a variety of landscapes. on average, he ran over 63 kilometres per day. a camper van served as his support vehicle, providing a place to sleep and recover.',
      'after 18 days and a total of 1,160 kilometres, kim reached neuschwanstein castle, tired but relieved. while the project did not attract as much public attention as some of his earlier undertakings, it represented a significant physical and mental challenge for him personally.',
    ],
    pullQuote: '',
    pullQuoteBy: '',
  },
  {
    slug: 'ultra-euro-2024-run',
    title: 'ultra euro 2024 run',
    date: '2025-09-19',
    author: 'rappid.',
    excerpt: 'during euro 2024, kim gottwald ran over 450 km between host cities, a project that marked the start of his social media presence.',
    image: 'https://www.rappid.run/cdn/shop/articles/IMG_7626_25c6c65a-7271-4933-b5a7-19dbe63a778b.jpg?v=1758892278',
    imageAlt: 'Kim Gottwald running between Euro 2024 host cities',
    body: [
      'during the european football championship in 2024, law student kim gottwald decided to run from one host city to the next for every match played by the german national team. a demanding project that gradually attracted interest on social media.',
      'at the age of 20, he began his journey in munich and worked his way through the group stage to cities such as stuttgart and frankfurt, while documenting each stage in regular posts. on average, he covered roughly a marathon distance each day, about 50 km, climbing up to 700 m in elevation and burning around 8,000 calories. kim drank as much as eight litres of water. his food supply often included bananas, apple turnovers, and about half a kilogram of pasta.',
      'his mother, michaela, accompanied him by bicycle, carrying equipment and offering support along the way. the unusual effort soon attracted media interest, reaching from social platforms to specialist media and larger news channels.',
      'after the group stage, his path led him from frankfurt via dortmund and, in the event of a round of 16 appearance against denmark, back to stuttgart for the quarter-finals. all within six days, requiring daily distances of 65 to 70 km. the physical and mental strain was immense, and he was often on the verge of giving up. yet encouragement from his online community and the hope of another summer fairy tale kept him going.',
      'germany\'s loss to spain in the quarter-final in stuttgart marked the end of his journey, which by then totalled more than 450 km. meanwhile, he had gained a following in the five-figure range. for kim, the project became the starting point of his social media presence and showed how a well-planned athletic challenge can develop into a widely shared story.',
    ],
    pullQuote: '',
    pullQuoteBy: '',
  },
  {
    slug: 'from-streetwear-to-running-gear',
    title: 'from streetwear to running gear',
    date: '2025-09-19',
    author: 'rappid.',
    excerpt: 'kim first explored fashion through a small streetwear label before focusing fully on running and starting rappid.',
    image: 'https://www.rappid.run/cdn/shop/articles/Aliud_Teppich_Wand-1701_a85ffc0b-a0b7-485b-99c7-c2d11aff742b.jpg?v=1758926319',
    imageAlt: 'Studio wall from Kim Gottwald\'s first streetwear label',
    body: [
      'for many people who follow kim gottwald on social media, rappid. is the first company they associate with him. in reality, it is his second business. before that, kim co-ran a streetwear label with a partner, which played an important role in the later development of rappid.',
      'after finishing school in 2021 and taking a gap semester, kim decided to turn his interest in fashion into a business. he taught himself everything, from product design and creating marketing campaigns to forming a social media strategy, as well as running production in his own textile studio, which included getting familiar with custom printing and embroidery techniques. alongside his law studies, he devoted almost all of his free time to the label.',
      'some collections and individual pieces gained considerable attention online and sold well, but a major breakthrough never materialised. over time, kim\'s focus shifted increasingly toward sports, with ultrarunning becoming a particular passion. eventually, he realised that he wanted to pursue this path professionally as well.',
      'he decided to close the streetwear label and start rappid., a running brand shaped by his interest in endurance, pushing physical limits, and connecting with a community of runners. with rappid., kim aims to encourage others to explore their own limits and challenge themselves.',
    ],
    pullQuote: '',
    pullQuoteBy: '',
  },
  {
    slug: 'meet-kim-gottwald',
    title: 'meet kim gottwald',
    date: '2025-09-19',
    author: 'rappid.',
    excerpt: 'from early morning runs to long-distance challenges, kim gottwald shares his journey in sport and design through the brand rappid.',
    image: 'https://www.rappid.run/cdn/shop/articles/SnapInsta.to_544813836_18521197024065331_2251850306319052349_n_7e77c96b-7e93-438d-8ccb-a4d6b70ab6c5.jpg?v=1758892202',
    imageAlt: 'Portrait of Kim Gottwald, co-founder of rappid.',
    body: [
      'kim gottwald, 22, is one of the founders of rappid. his journey into running began during his final year of high school in 2021. what started as a personal routine, running 10 kilometers every morning for a year, quickly became something more. without chasing a specific goal at first, the discipline shaped both his mindset and direction.',
      'after graduating, kim launched his first business: a streetwear label he built entirely on his own, from design and coding to production and distribution. later, he moved to cologne to study law, continuing to develop his creative projects alongside university.',
      'running became a way to explore new ideas. kim gained attention through unconventional formats, like running every cologne tram line or covering the distance to each of germany\'s matches during the european football championship in 2024. what began locally soon caught national media interest.',
      'that momentum led to larger efforts. in the same year, he completed a 161-kilometer race in berlin and ran 1,160 kilometers across germany, from sylt to neuschwanstein. around the same time, rappid. was born: a running brand focused on offering quality gear at fair prices, designed to support athletes pushing themselves further. the early days were intense, including months of living and working out of the office.',
      'in may 2025, kim took on his biggest physical and mental challenge so far: the go one more ultra in austin, texas. after 56 hours and 382 kilometers, the race was cut short by weather, with kim leading. the format: 6.7 km every hour, until no one\'s left. for him, it was more than a race. it shifted his outlook on effort, limits, and what comes next.',
      'kim\'s daily routine reflects that mindset. mornings start with training, followed by deep focus on content, logistics, and product development for rappid. evenings are for strength and mobility work, then rest, because the next day starts early.',
    ],
    pullQuote: 'everything is temporary. so keep moving forward.',
    pullQuoteBy: 'kim gottwald',
  },
  {
    slug: 'the-story-behind-rappid',
    title: 'the story behind rappid.',
    date: '2025-09-17',
    author: 'rappid.',
    excerpt: 'founded in 2023, rappid. grew from a bold running project into a performance-focused apparel brand that combines accessibility with quality.',
    image: 'https://www.rappid.run/cdn/shop/articles/insta_final-18_fd874b1d-52d0-48d2-afbd-d304cdffb457.jpg?v=1758892703',
    imageAlt: 'Early rappid. product shoot',
    body: [
      'the idea of starting a running apparel brand first came up in 2023. but kim and his partner alex quickly realized that launching a brand without any visibility would be difficult in today\'s world. as the 2024 european football championship approached, kim decided to run from game to game, a project that unexpectedly gained attention and helped build the visibility they needed.',
      'within just a few days, kim and alex began adjusting fits, sourcing materials, building a website, and settling on a name and logo. they had no clear idea whether anyone would actually be interested in rappid., but they decided to move forward anyway.',
      'the first collection launched in november 2024. fortunately, things fell into place. interest grew, and with it new challenges arose, especially for a young brand: improving both quality and production capacity while staying grounded in their original idea.',
      'rappid. aims to offer performance-focused gear that remains accessible for everyone. the products reflect a mindset shaped by personal development, the idea that by challenging yourself, you might also encourage others.',
      'for kim and alex, rappid. has always been a collaborative project. kim represents the brand in practice, while alex brings in years of experience in design. together, they shaped the product and guided it into production, step by step.',
      'for a long time, rappid. has been a two-person project, every step done by hand, every detail managed directly. over the past months, that has become harder to sustain. to keep pushing things forward the right way, we\'ve taken a first step: bringing in a new team member.',
      'the focus now is to build smarter structures without losing what matters. we\'re carefully looking for a trustworthy fulfillment partner. getting orders out quickly and reliably is non-negotiable. at the same time, we\'re working on a broader product strategy: moving away from pure drop culture toward a more consistent and accessible lineup. that includes building a never out of stock core collection, and expanding into accessories like socks, beanies, and other essentials.',
      'another important step is a new project: a dedicated subline developed together with kim, an ultrarunner. the goal is clear, top-tier performance gear built with high-class materials, shaped through multiple sample rounds. these pieces are meant to support real effort, the moments where 100% isn\'t enough. they\'ll exist alongside the nos collection, made to perform and made to last.',
    ],
    pullQuote: '',
    pullQuoteBy: '',
  },
]

/**
 * The hero frame at the width a slot paints. Article URLs already carry a
 * `?v=` cache key, so the size parameter is appended rather than starting a
 * new query string; without it a card downloads the full 1 MB original.
 */
export function storyImage(story: Story, width: number): string {
  return `${story.image}&width=${width}`
}

export function storyBySlug(slug: string): Story | undefined {
  return stories.find(s => s.slug === slug)
}

/** The other stories, newest first, for the "keep reading" rail. */
export function otherStories(slug: string, count = 3): Story[] {
  return stories.filter(s => s.slug !== slug).slice(0, count)
}

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

/** "27 october 2025". Lowercase, like every other string on the site. */
export function storyDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`
}

/** Rough read time at 220 words a minute, floored at one minute. */
export function readMinutes(story: Story): number {
  const words = story.body.join(' ').split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}
