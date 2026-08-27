/**
 * The rappid. catalogue.
 *
 * One typed record per product: prices in EUR (the store's base currency),
 * sizes in the order a runner reads them, and the vendor's own copy split
 * into prose, material and care so the product page can lay each out on its
 * own instead of printing one wall of text.
 *
 * Every field here mirrors what the storefront publishes. When this app moves
 * onto the Commerce models, `products` becomes a query and the shape below is
 * what `Product` returns, so nothing above the data layer has to change.
 */

export interface ProductVariant {
  /** Size label as printed on the garment: XS through XXL, or "one size". */
  size: string
  sku: string
  /** EUR. Convert with `priceIn` from ./site. */
  price: number
  available: boolean
}

export interface ProductImage {
  src: string
  width: number
  height: number
}

export interface Product {
  handle: string
  title: string
  /** Lowest EUR price across variants. */
  price: number
  /** False when every size is sold out. */
  available: boolean
  publishedAt: string
  tags: string[]
  /** Handles of every collection this product belongs to. */
  collections: string[]
  variants: ProductVariant[]
  images: ProductImage[]
  /** Opening paragraph, used as the card and PDP lede. */
  intro: string
  /** Remaining prose paragraphs. */
  body: string[]
  material: string[]
  care: string[]
}

export const products: Product[] = [
  {
    handle: 'rappid-x-lsu-camo-ss',
    title: 'rappid. x lsu camo short',
    price: 44.95,
    available: true,
    publishedAt: '2026-08-25',
    tags: [
      'camo',
      'lsu',
      'shortsleeve',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'last-soul-ultra-2026',
      'lsu-tops',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP263LSUSS01-XS-CMF',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP263LSUSS01-S-CMF',
        price: 44.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP263LSUSS01-M-CMF',
        price: 44.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP263LSUSS01-L-CMF',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP263LSUSS01-XL-CMF',
        price: 44.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'DRP263LSUSS01-XXL-CMF',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/short-sleeve-t-shirt_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/short-sleeve-t-shirt_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the lsu short sleeve is a special edition created for last soul ultra 2026. inspired by classic americana apparel, it combines everyday comfort with a silhouette built for unrestricted movement. the raglan sleeve construction provides a natural range of motion, while the 190 gsm cotton offers a soft yet substantial feel. featuring front and back screen prints, the camo style pays homage to our texas camo classic in a new collegiate-inspired design.',
    body: [
      'made in turkey.',
      'material:',
      '100% cotton, 190 gsm.',
      'care:',
      'machine wash cold (30 °c)',
      'avoid bleach',
      'air dry only',
      'do not iron or tumble dry',
    ],
    material: [],
    care: [],
  },
  {
    handle: 'rappid-x-lsu-camo-ls',
    title: 'rappid. x lsu camo long',
    price: 54.95,
    available: true,
    publishedAt: '2026-08-25',
    tags: [
      'camo',
      'longsleeve',
      'lsu',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'last-soul-ultra-2026',
      'long-sleeve',
      'lsu-tops',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP263LSULS01-XS-CMF',
        price: 54.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP263LSULS01-S-CMF',
        price: 54.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP263LSULS01-M-CMF',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP263LSULS01-L-CMF',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP263LSULS01-XL-CMF',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP263LSULS01-XXL-CMF',
        price: 54.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/long-sleeve-t-shirt_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/long-sleeve-t-shirt_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the lsu long sleeve is a special edition created for last soul ultra 2026. inspired by classic americana apparel, it combines everyday comfort with a silhouette built for unrestricted movement. the raglan sleeve construction provides a natural range of motion, while the 190 gsm cotton offers a soft yet substantial feel. featuring front and back screen prints, the camo style pays homage to our texas camo classic in a new collegiate-inspired design.',
    body: [
      'made in turkey.',
      'material:',
      '100% cotton, 190 gsm.',
      'care:',
      'machine wash cold (30 °c)',
      'avoid bleach',
      'air dry only',
      'do not iron or tumble dry',
    ],
    material: [],
    care: [],
  },
  {
    handle: 'pace-cap-camo',
    title: 'pace cap camo',
    price: 29.95,
    available: false,
    publishedAt: '2026-08-25',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'last-soul-capsule-accessories',
      'last-soul-ultra-2026',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-011',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Cap_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Cap_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Cap_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'rappid-drinking-bottle',
    title: 'rappid. endurance bottle',
    price: 14.95,
    available: true,
    publishedAt: '2026-08-04',
    tags: [
      'accessories',
      'bottle',
      'not-purchasable',
      'rappid.',
    ],
    collections: [
      'accessories',
      'last-soul-capsule-accessories',
      'last-soul-ultra-2026',
    ],
    variants: [
      {
        size: 'Default Title',
        sku: 'DRP26-DRNKBTTL-001-BLK',
        price: 14.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/exec-400454be-15e5-4022-87e9-287c5f409b21.png',
        width: 1254,
        height: 1254,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/exec-0c0031aa-5c94-418f-87d6-453226783bdb.png',
        width: 1254,
        height: 1254,
      },
    ],
    intro: 'your exclusive rappid. water bottle. clean, black, built for every kilometer - the 500 ml sports bottle for training, everyday life, and everything in between.',
    body: [
      'made entirely from bio-based polyethylene: a lighter footprint and a build that lasts. just 100 g, black on black, with the rappid. logo in white on the front and back.',
      'order for 60 € or more and it\'s on us.',
    ],
    material: [],
    care: [],
  },
  {
    handle: 'atv-pace-shorts',
    title: 'atv pace shorts',
    price: 59.95,
    available: true,
    publishedAt: '2026-07-30',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'lsu-bottoms',
      'new-arrivals',
      'shorts',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVPS01-XS-BLK',
        price: 59.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP262ATVPS01-S-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVPS01-M-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVPS01-L-BLK',
        price: 59.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVPS01-XL-BLK',
        price: 59.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVPS01-XXL-BLK',
        price: 59.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/14pace-shorts_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/14pace-shorts_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Pace Shorts are engineered for unrestricted movement and breathability. A secure back pocket allows safe storage of essentials like phone, keys, and gels. The integrated lining prevents friction and features two additional pockets, accessible at all times through the overlapping shell construction.',
    body: [],
    material: [
      'Fabric: 67% nylon 33% spandex',
      'Lining: 58% nylon 42% spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-storm-jacket',
    title: 'atv storm jacket',
    price: 169.95,
    available: true,
    publishedAt: '2026-07-30',
    tags: [],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'lsu-tops',
      'new-arrivals',
      'outerwear',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVSJ01-XS-BLK',
        price: 169.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVSJ01-S-BLK',
        price: 169.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVSJ01-M-BLK',
        price: 169.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVSJ01-L-BLK',
        price: 169.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVSJ01-XL-BLK',
        price: 169.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVSJ01-XXL-BLK',
        price: 169.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/13storm-jacket_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/13storm-jacket_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid storm jacket is an ultra lightweight running jacket designed for performance in changing conditions. Made from a lightweight nylon shell, it ensures protection and comfort during movement. The newly developed 3D sleeve construction enhances mobility, allowing for a natural range of motion. Side pockets and an additional arm pocket provide secure storage for essentials like phone, keys, and gels.',
    body: [],
    material: [
      'Shell: 100% Nylon',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'collegial-hoodie-chr',
    title: 'collegial hoodie (preorder)',
    price: 89.95,
    available: true,
    publishedAt: '2026-07-30',
    tags: [
      'hoodie',
      'lsu',
    ],
    collections: [
      'collegial-hoodies',
      'last-soul-ultra-2026',
      'new-arrivals',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP263LSTHD01-S-CHR',
        price: 89.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP263LSTHD01-M-CHR',
        price: 89.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP263LSTHD01-L-CHR',
        price: 89.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP263LSTHD01-XL-CHR',
        price: 89.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-chr_1_e113a42c-e1d9-47d2-a9b4-6e8e9f9a057c.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-chr_2_cb06e148-cd74-47da-8886-1c086cbd086f.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the collegiate hoodie is built for everyday wear with a premium heavyweight construction and a timeless collegiate aesthetic. proudly crafted in portugal from brushed 380 gsm cotton, it delivers comfort with a structured feel. the vintage garment dye and distressed finish create a naturally worn-in look. old-school collegiate applications artwork add depth and character. finished with a cropped fit for a modern silhouette.',
    body: [],
    material: [],
    care: [],
  },
  {
    handle: 'collegial-hoodie-red',
    title: 'collegial hoodie (preorder)',
    price: 89.95,
    available: false,
    publishedAt: '2026-07-30',
    tags: [
      'hoodie',
      'lsu',
    ],
    collections: [
      'collegial-hoodies',
      'last-soul-ultra-2026',
      'new-arrivals',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP263LSTHD02-S-RED',
        price: 89.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP263LSTHD02-M-RED',
        price: 89.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'DRP263LSTHD02-L-RED',
        price: 89.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP263LSTHD02-XL-RED',
        price: 89.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-red_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-red_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the collegiate hoodie is built for everyday wear with a premium heavyweight construction and a timeless collegiate aesthetic. proudly crafted in portugal from brushed 380 gsm cotton, it delivers comfort with a structured feel. the vintage garment dye and distressed finish create a naturally worn-in look. old-school collegiate applications artwork add depth and character. finished with a cropped fit for a modern silhouette.',
    body: [],
    material: [],
    care: [],
  },
  {
    handle: 'collegial-hoodie-blk',
    title: 'collegial hoodie (preorder)',
    price: 89.95,
    available: false,
    publishedAt: '2026-07-30',
    tags: [
      'hoodie',
      'lsu',
    ],
    collections: [
      'collegial-hoodies',
      'last-soul-ultra-2026',
      'new-arrivals',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP263LSTHD02-S-BLK',
        price: 89.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP263LSTHD02-M-BLK',
        price: 89.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'DRP263LSTHD02-L-BLK',
        price: 89.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP263LSTHD02-XL-BLK',
        price: 89.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/pullover-black_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/pullover-black_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the collegiate hoodie is built for everyday wear with a premium heavyweight construction and a timeless collegiate aesthetic. proudly crafted in portugal from brushed 380 gsm cotton, it delivers comfort with a structured feel. the vintage garment dye and distressed finish create a naturally worn-in look. old-school collegiate applications artwork add depth and character. finished with a cropped fit for a modern silhouette.',
    body: [],
    material: [],
    care: [],
  },
  {
    handle: 'collegial-hoodie-grn',
    title: 'collegial hoodie (preorder)',
    price: 89.95,
    available: true,
    publishedAt: '2026-07-30',
    tags: [
      'hoodie',
      'lsu',
    ],
    collections: [
      'collegial-hoodies',
      'last-soul-ultra-2026',
      'new-arrivals',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP263LSTHD03-S-GRN',
        price: 89.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP263LSTHD03-M-GRN',
        price: 89.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP263LSTHD03-L-GRN',
        price: 89.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP263LSTHD03-XL-GRN',
        price: 89.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-grn_1_f60d957e-ba3b-4446-9728-0be72dc05838.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegial-hoodie-grn_2_724d6a79-d0e3-4e47-b43a-94c66a4a681b.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the collegiate hoodie is built for everyday wear with a premium heavyweight construction and a timeless collegiate aesthetic. proudly crafted in portugal from brushed 380 gsm cotton, it delivers comfort with a structured feel. the vintage garment dye and distressed finish create a naturally worn-in look. old-school collegiate applications artwork add depth and character. finished with a cropped fit for a modern silhouette.',
    body: [],
    material: [],
    care: [],
  },
  {
    handle: 'atv-short-sleeve-3',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVSS01-XS-BLK',
        price: 49.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVSS01-S-BLK',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVSS01-M-BLK',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVSS01-L-BLK',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVSS01-XL-BLK',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVSS01-XXL-BLK',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V3_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V3_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-short-sleeve-4',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVSS01-XS-NVY',
        price: 49.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVSS01-S-NVY',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVSS01-M-NVY',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVSS01-L-NVY',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVSS01-XL-NVY',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVSS01-XXL-NVY',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V2_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V2_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-short-sleeve-5',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVSS01-XS-CHC',
        price: 49.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVSS01-S-CHC',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVSS01-M-CHC',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVSS01-L-CHC',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVSS01-XL-CHC',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVSS01-XXL-CHC',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V1_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Short_Sleeve_V1_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve-3',
    title: 'atv long sleeve',
    price: 54.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVLS01-XS-BLK',
        price: 54.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVLS01-S-BLK',
        price: 54.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVLS01-M-BLK',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVLS01-L-BLK',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVLS01-XL-BLK',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVLS01-XXL-BLK',
        price: 54.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V3_1_db6a8483-e816-4519-a019-239186b6bb1d.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V3_2_dc97b01b-8470-4a96-9ea8-7a1acfb5d93a.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05_b1225179-876f-433e-a25b-738a7cf0504e.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve-4',
    title: 'atv long sleeve',
    price: 54.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVLS01-XS-CHC',
        price: 54.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVLS01-S-CHC',
        price: 54.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVLS01-M-CHC',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVLS01-L-CHC',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVLS01-XL-CHC',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVLS01-XXL-CHC',
        price: 54.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V1_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V1_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05_09704edf-ba56-47e3-982d-795e00c5433e.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve-5',
    title: 'atv long sleeve',
    price: 54.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'hats',
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVLS01-XS-NVY',
        price: 54.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVLS01-S-NVY',
        price: 54.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVLS01-M-NVY',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVLS01-L-NVY',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVLS01-XL-NVY',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVLS01-XXL-NVY',
        price: 54.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V2_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Long_Sleve_V2_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05_9469b04f-0437-46f5-a519-306c28aca72d.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-men-short-tights-10',
    title: 'atv men short tights "9',
    price: 59.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'lsu-bottoms',
      'new-arrivals',
      'tights',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVST01-XS-BLK',
        price: 59.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP262ATVST01-S-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVST01-M-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVST01-L-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVST01-XL-BLK',
        price: 59.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVST01-XXL-BLK',
        price: 59.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Tight_short_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Tight_short_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-02_5f560dbc-20ef-40e3-a32f-537f05c8bd6f.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Running Tights are a complete redevelopment, designed to meet the demands of high-performance running. Optimized leg pockets and a secure back pocket provide reliable storage without the use of zippers, ensuring long-term durability. The specially engineered nylon-spandex blend delivers the ideal balance between compression and freedom of movement.',
    body: [],
    material: [
      '75% Nylon',
      '25% Spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-half-zip',
    title: 'atv half zip',
    price: 69.95,
    available: true,
    publishedAt: '2026-06-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'long-sleeve',
      'new-arrivals',
      'outerwear',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVHZ01-XS-BLK',
        price: 69.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVHZ01-S-BLK',
        price: 69.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVHZ01-M-BLK',
        price: 69.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVHZ01-L-BLK',
        price: 69.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVHZ01-XL-BLK',
        price: 69.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVHZ01-XXL-BLK',
        price: 69.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Half_Zip_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Half_Zip_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: '',
    body: [],
    material: [],
    care: [],
  },
  {
    handle: 'rappid-jersey',
    title: 'rappid. jersey',
    price: 49.95,
    available: true,
    publishedAt: '2026-06-25',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'SS26WMGER-001-001-XS',
        price: 49.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'SS26WMGER-001-001-S',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'SS26WMGER-001-001-M',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'SS26WMGER-001-001-L',
        price: 49.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'SS26WMGER-001-001-XL',
        price: 49.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'SS26WMGER-001-001-XXL',
        price: 49.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Team_rappid_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Team_rappid_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-04_06737017-679a-43ae-bd14-5bb6240f01da.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'the rappid. jersey is inspired by the jerseys that have accompanied our community through countless backyard loops, long training days, and some of the toughest efforts imaginable. built with a performance-focused fit, lightweight construction, and a premium 3d patch, it is designed for running without distraction.',
    body: [],
    material: [
      '100% polyester',
    ],
    care: [
      'machine wash cold (30 °c)',
      'avoid bleach',
      'air dry only',
      'do not iron or tumble dry',
    ],
  },
  {
    handle: 'atv-windbreaker',
    title: 'atv windbreaker',
    price: 149.95,
    available: true,
    publishedAt: '2026-05-02',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'outerwear',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVWB01-XS',
        price: 149.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP261ATVWB01-S',
        price: 149.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP261ATVWB01-M',
        price: 149.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP261ATVWB01-L',
        price: 149.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVWB01-XL',
        price: 149.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVWB01-XXL',
        price: 149.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/ATV_Windbreaker_Anthracite_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/ATV_Windbreaker_Anthracite_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-01.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Jacket is a lightweight running jacket designed for performance in changing conditions. Made from a lightweight nylon shell with breathable mesh lining, it ensures comfort and ventilation during movement. The newly developed 3D sleeve construction enhances mobility, allowing for a natural range of motion. Side pockets and an additional arm pocket provide secure storage for essentials like phone, keys, and gels.',
    body: [],
    material: [
      'Shell: 100% Nylon',
      'Lining: 100% Polyester',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-men-running-shorts-5',
    title: 'atv men running shorts "5',
    price: 59.95,
    available: true,
    publishedAt: '2026-04-02',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'new-arrivals',
      'shorts',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP26ATVRS01-S',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP26ATVRS01-M',
        price: 59.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'DRP26ATVRS01-L',
        price: 59.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP26ATVRS01-XL',
        price: 59.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'DRP26ATVRS01-XXL',
        price: 59.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/5inch_ATV-shorts_anthracite_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/5inch_ATV-shorts_anthracite_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/5inch_ATV-shorts_anthracite_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/5inch_ATV-shorts_anthracite_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-06.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Running Shorts (5 Inch) are engineered for unrestricted movement and high-performance running. A secure back pocket allows safe storage of essentials like phone, keys, and gels. The integrated lining prevents friction and features two additional pockets, accessible at all times through the overlapping shell construction. performance in every session.',
    body: [],
    material: [
      'Shell: 75% Nylon 25% Spandex',
      'Lining: 83% Nylon 17% Spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-women-running-shorts-5-kopie',
    title: 'atv women running shorts "3',
    price: 59.95,
    available: true,
    publishedAt: '2026-04-02',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'new-arrivals',
      'shorts',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP26ATVRS02-XS',
        price: 59.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP26ATVRS02-S',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP26ATVRS02-M',
        price: 59.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP26ATVRS02-L',
        price: 59.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP26ATVRS02-XL',
        price: 59.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/3inch_ATV-shorts_Anthracite_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/3inch_ATV-shorts_Anthracite_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/3inch_ATV-shorts_Anthracite_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/3inch_ATV-shorts_Anthracite_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-08.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Running Shorts (3 Inch) are engineered for unrestricted movement and designed specifically for women. A secure back pocket allows safe storage of essentials like phone, keys, and gels. The integrated lining prevents friction and features two additional pockets, accessible at all times through the overlapping shell construction.',
    body: [],
    material: [
      'Shell: 75% Nylon 25% Spandex',
      'Lining: 83% Nylon 17% Spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-men-short-tights-9',
    title: 'atv men short tights "9',
    price: 59.95,
    available: true,
    publishedAt: '2026-04-02',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'new-arrivals',
      'tights',
    ],
    variants: [
      {
        size: 'S',
        sku: 'DRP261ATVST01-S',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP261ATVST01-M',
        price: 59.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'DRP261ATVST01-L',
        price: 59.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVST01-XL',
        price: 59.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVST01-XXL',
        price: 59.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/9inch_ATV-tights_anthracite_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/9inch_ATV-tights_anthracite_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/9inch_ATV-tights_anthracite_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/9inch_ATV-tights_anthracite_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-02.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Running Tights are a complete redevelopment, designed to meet the demands of high-performance running. Optimized leg pockets and a secure back pocket provide reliable storage without the use of zippers, ensuring long-term durability. The specially engineered nylon-spandex blend delivers the ideal balance between compression and freedom of movement.',
    body: [],
    material: [
      '75% Nylon',
      '25% Spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-women-short-tights-7-kopie',
    title: 'atv women short tights "7',
    price: 59.95,
    available: true,
    publishedAt: '2026-04-02',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'atv-bottoms',
      'atv-collection',
      'bottoms',
      'last-soul-ultra-2026',
      'new-arrivals',
      'tights',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVST02-XS',
        price: 59.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP261ATVST02-S',
        price: 59.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP261ATVST02-M',
        price: 59.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP261ATVST02-L',
        price: 59.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVST02-XL',
        price: 59.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/7inch_ATV-Tights_Anthracite_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/7inch_ATV-Tights_Anthracite_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/7inch_ATV-Tights_Anthracite_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/7inch_ATV-Tights_Anthracite_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-07.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Running Tights are a complete redevelopment, specifically designed for women to meet the demands of high-performance running. Optimized leg pockets and a secure back pocket provide reliable storage without the use of zippers, ensuring long-term durability. The specially engineered nylon-spandex blend delivers the ideal balance between compression and freedom of movement.',
    body: [],
    material: [
      '75% Nylon',
      '25% Spandex',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'run-club-shirt',
    title: 'marathon shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-003-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-003-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-003-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-003-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-003-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/marathon_shirt_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/marathon_shirt_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'overfueled-shirt',
    title: 'overfueled shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-002-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-002-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-002-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-002-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-002-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/overfueled_shirt_white_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/overfueled_shirt_white_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'no-train-for-nothing-shirt',
    title: 'no training for nothing shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-004-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-004-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-004-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-004-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-004-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/no_training_for_nothing_white_1_624cf3fe-8622-40f1-afee-e07c6d3b23c0.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/no_training_for_nothing_white_2_a0f383e1-b55e-4db6-8404-a6aee2cbed02.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'collegiate-shirt',
    title: 'collegiate shirt',
    price: 44.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-005-XS',
        price: 44.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-005-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-005-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-005-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-005-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_white_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_white_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'spectacle-shirt',
    title: 'spectacle shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-006-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-006-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-006-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-006-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-006-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle-shirt_white_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle-shirt_white_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'spectacle-shirt-1',
    title: 'spectacle shirt',
    price: 44.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-007-XS',
        price: 44.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-007-S',
        price: 44.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-007-M',
        price: 44.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-007-L',
        price: 44.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-007-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle-shirt_black_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle-shirt_black_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'spectacle-shirt-2',
    title: 'spectacle shirt',
    price: 44.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-008-XS',
        price: 44.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-008-S',
        price: 44.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-008-M',
        price: 44.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-008-L',
        price: 44.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-008-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle_shirt_navy_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/spectacle_shirt_navy_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'overfueled-shirt-1',
    title: 'overfueled shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-009-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-009-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-009-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-009-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-009-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/shirt_brown_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/shirt_brown_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'no-training-for-nothing-shirt-1',
    title: 'collegiate shirt',
    price: 44.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-011-XS',
        price: 44.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-011-S',
        price: 44.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-011-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-011-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-011-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_blue_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_blue_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'collegiate-shirt-1',
    title: 'collegiate shirt',
    price: 44.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-012-XS',
        price: 44.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-012-S',
        price: 44.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-012-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-012-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-012-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/collegiate_shirt_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'rappid-bandana-center',
    title: 'rappid. bandana center',
    price: 29.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [],
    collections: [
      'accessories',
      'atv-accessories',
      'bandanas',
    ],
    variants: [
      {
        size: 'one-size',
        sku: 'SRBBANDANA-001-002',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Bandana is a versatile accessory designed for both performance and everyday use. Featuring a modern interpretation of the classic paisley pattern combined with the signature rappid. logo, it delivers a clean and distinctive look. It can be worn as sun protection or as a neck scarf, adapting to different conditions and needs.',
    body: [],
    material: [
      '100% Cotton',
      'Dimensions',
      '56 x 56 cm',
    ],
    care: [
      'Hand wash only.',
      'Avoid bleach.Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'rappid-bandana-center-1',
    title: 'rappid. bandana center',
    price: 29.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [],
    collections: [
      'accessories',
      'atv-accessories',
      'bandanas',
    ],
    variants: [
      {
        size: 'one-size',
        sku: 'SRBBANDANA-001-001',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_w_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_w_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_gross_w_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Bandana is a versatile accessory designed for both performance and everyday use. Featuring a modern interpretation of the classic paisley pattern combined with the signature rappid. logo, it delivers a clean and distinctive look. It can be worn as sun protection or as a neck scarf, adapting to different conditions and needs.',
    body: [],
    material: [
      '100% Cotton',
      'Dimensions',
      '56 x 56 cm',
    ],
    care: [
      'Hand wash only.',
      'Avoid bleach.Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'rappid-bandana-quad',
    title: 'rappid. bandana quad',
    price: 29.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [],
    collections: [
      'accessories',
      'atv-accessories',
      'bandanas',
    ],
    variants: [
      {
        size: 'one-size',
        sku: 'SRBBANDANA-002-001',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_w_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_w_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_w_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Bandana is a versatile accessory designed for both performance and everyday use. Featuring a modern interpretation of the classic paisley pattern combined with the signature rappid. logo, it delivers a clean and distinctive look. It can be worn as sun protection or as a neck scarf, adapting to different conditions and needs.',
    body: [],
    material: [
      '100% Cotton',
      'Dimensions',
      '56 x 56 cm',
    ],
    care: [
      'Hand wash only.',
      'Avoid bleach.Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'rappid-bandana-quad-1',
    title: 'rappid. bandana quad',
    price: 29.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [],
    collections: [
      'accessories',
      'atv-accessories',
      'bandanas',
    ],
    variants: [
      {
        size: 'one-size',
        sku: 'SRBBANDANA-002-002',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/logo_klein_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Bandana is a versatile accessory designed for both performance and everyday use. Featuring a modern interpretation of the classic paisley pattern combined with the signature rappid. logo, it delivers a clean and distinctive look. It can be worn as sun protection or as a neck scarf, adapting to different conditions and needs.',
    body: [],
    material: [
      '100% Cotton',
      'Dimensions',
      '56 x 56 cm',
    ],
    care: [
      'Hand wash only.',
      'Avoid bleach.Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'no-training-for-nothing-shirt',
    title: 'no training for nothing shirt',
    price: 44.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-010-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-010-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-010-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-010-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-010-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/no_training_for_nothing_shirt_1_cf6a14fb-cb53-48ad-9977-ca0252f1c4fb.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/no_training_for_nothing_shirt_2_03f3fb00-c133-4adc-806c-ea66b2c954d8.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve',
    title: 'atv long sleeve',
    price: 54.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'lsu-tops',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVLS01-XS-WHT',
        price: 54.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP262ATVLS01-S-WHT',
        price: 54.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP262ATVLS01-M-WHT',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVLS01-L-WHT',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVLS01-XL-WHT',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVLS01-XXL-WHT',
        price: 54.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_white_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_white_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_white_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_white_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve-1',
    title: 'atv long sleeve',
    price: 54.95,
    available: false,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVLS01-2-XS',
        price: 54.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP261ATVLS01-2-S',
        price: 54.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP261ATVLS01-2-M',
        price: 54.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'DRP261ATVLS01-2-L',
        price: 54.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVLS01-2-XL',
        price: 54.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVLS01-2-XXL',
        price: 54.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_walnut_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_walnut_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_walnut_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_walnut_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-long-sleeve-2',
    title: 'atv long sleeve',
    price: 54.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'long-sleeve',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVLS01-3-XS',
        price: 54.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP261ATVLS01-3-S',
        price: 54.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP261ATVLS01-3-M',
        price: 54.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP261ATVLS01-3-L',
        price: 54.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVLS01-3-XL',
        price: 54.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVLS01-3-XXL',
        price: 54.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_tea_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_tea_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_tea_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/03_ATV_long_sleeve_tea_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-05.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active Longsleeve delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-short-sleeve',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVSS01-3-XS',
        price: 49.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP261ATVSS01-3-S',
        price: 49.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'DRP261ATVSS01-3-M',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP261ATVSS01-3-L',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVSS01-3-XL',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVSS01-3-XXL',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_tea_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_tea_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_tea_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_tea_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-04.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-short-sleeve-1',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'lsu-tops',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP262ATVSS01-XS-WHT',
        price: 49.95,
        available: true,
      },
      {
        size: 'S',
        sku: 'DRP262ATVSS01-S-WHT',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP262ATVSS01-M-WHT',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP262ATVSS01-L-WHT',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP262ATVSS01-XL-WHT',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP262ATVSS01-XXL-WHT',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-04.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'atv-short-sleeve-2',
    title: 'atv short sleeve',
    price: 49.95,
    available: true,
    publishedAt: '2026-03-26',
    tags: [
      'tops',
    ],
    collections: [
      'all-products',
      'atv-collection',
      'atv-tops',
      'last-soul-ultra-2026',
      'new-arrivals',
      'short-sleeve',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'DRP261ATVSS01-2-XS',
        price: 49.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'DRP261ATVSS01-2-S',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'DRP261ATVSS01-2-M',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'DRP261ATVSS01-2-L',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'DRP261ATVSS01-2-XL',
        price: 49.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'DRP261ATVSS01-2-XXL',
        price: 49.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_walnut_1_54fc964b-00e1-4646-a07f-d1dcf348fbbb.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_walnut_2_d743f35f-2739-4afc-8a87-a634ce997014.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_walnut_3_b0d434d1-fa2f-42ec-8ad0-162203ff6be5.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/02_ATV_short_sleeve_walnut_4_dee1fa37-7414-4a7b-a6b8-bbea7bfc5eea.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-04.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Active T-Shirt delivers lightweight performance with a design focused on unrestricted movement. The raglan sleeve construction allows for a natural range of motion, while maintaining a clean, athletic fit. The ultralight, breathable nylon blend ensures comfort during intense sessions, while reflective prints improve visibility in low-light conditions.',
    body: [],
    material: [
      '74% Recycled Nylon',
      '26% Elastane',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'pace-cap-wood',
    title: 'pace cap wood',
    price: 29.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-010',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/brown_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/brown_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/brown_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/brown_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-navy',
    title: 'pace cap navy',
    price: 29.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-009',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/navy_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/navy_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/navy_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/navy_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% nylon',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-lilac',
    title: 'pace cap lilac',
    price: 29.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-007',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/purple_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/purple_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/purple_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/purple_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-lilac-red',
    title: 'pace cap red',
    price: 29.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-008',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/red_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/red_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/red_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/red_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'ultra-cap-white',
    title: 'ultra cap white',
    price: 39.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'atv-accessories',
      'last-soul-ultra-2026',
      'new-arrivals',
      'ultra-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNUC-001-001',
        price: 39.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_8.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_7.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_5.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/White_Cap_S_6.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who push through extreme conditions, the ultra cap performs in peak heat. developed for the texas heat, it delivers protection and active cooling without compromising comfort or speed.',
    body: [
      'made from a lightweight nylon-elastane blend with a soft, flexible brim, detachable sunshade and integrated rear ice pockets - just add ice to stay cooler longer.',
    ],
    material: [
      '92% nylon 8% elastane',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'ultra-cap-sand',
    title: 'ultra cap sand',
    price: 39.95,
    available: false,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'atv-accessories',
      'new-arrivals',
      'ultra-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNUC-001-002',
        price: 39.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_8.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_7.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_5.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Beige_Cap_S_6.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who push through extreme conditions, the ultra cap performs in peak heat. developed for the texas heat, it delivers protection and active cooling without compromising comfort or speed.',
    body: [
      'made from a lightweight nylon-elastane blend with a soft, flexible brim, detachable sunshade and integrated rear ice pockets - just add ice to stay cooler longer.',
    ],
    material: [
      '92% nylon 8% elastane',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'ultra-cap-sky',
    title: 'ultra cap sky',
    price: 39.95,
    available: true,
    publishedAt: '2026-02-27',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'atv-accessories',
      'new-arrivals',
      'ultra-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNUC-001-003',
        price: 39.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_8.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_7.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_5.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Blue_Cap_S_6.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who push through extreme conditions, the ultra cap performs in peak heat. developed for the texas heat, it delivers protection and active cooling without compromising comfort or speed.',
    body: [
      'made from a lightweight nylon-elastane blend with a soft, flexible brim, detachable sunshade and integrated rear ice pockets - just add ice to stay cooler longer.',
    ],
    material: [
      '92% nylon 8% elastane',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-green',
    title: 'pace cap mint',
    price: 29.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-002',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/mint_1_484d26e0-ba00-4ac2-940b-7c54450e71fb.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/mint_2_bd709459-f315-4004-a9b3-e2ac1a5c010a.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/mint_3_79f28686-e38b-4ec9-b3cd-e69ccbf10b67.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/mint_4_8670de1c-5f5c-493d-9537-50f6c499522a.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-white',
    title: 'pace cap white',
    price: 29.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'atv-accessories',
      'last-soul-ultra-2026',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-003',
        price: 29.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/white_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/white_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/white_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/white_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-aqua',
    title: 'pace cap aqua',
    price: 29.95,
    available: false,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-004',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/blue_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/blue_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/blue_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/blue_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-grey',
    title: 'pace cap grey',
    price: 29.95,
    available: false,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-005',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/grey_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/grey_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/grey_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/grey_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'pace-cap-lavender',
    title: 'pace cap lavender',
    price: 29.95,
    available: false,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-006',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/lilac_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/lilac_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/lilac_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/lilac_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'grid-cap-black',
    title: 'grid cap black',
    price: 34.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'grid-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNGC-001-001',
        price: 34.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black1_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black1_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black1_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black1_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for athletes who want performance without the noise, the grit cap brings a subtle lifestyle character into a functional sports silhouette. crafted from premium nylon fabric, it offers a smooth, elevated feel while staying light and ready for movement.',
    body: [],
    material: [
      '90% Nylon 10% Elastane',
    ],
    care: [
      'Hand wash only.',
      'Do not bleach.',
      'Air dry.',
      'Do not tumble dry or iron.',
    ],
  },
  {
    handle: 'grid-cap-burgundy',
    title: 'grid cap burgundy',
    price: 34.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'grid-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNGC-001-003',
        price: 34.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/burgundy_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/burgundy_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/burgundy_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/burgundy_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for athletes who want performance without the noise, the grit cap brings a subtle lifestyle character into a functional sports silhouette. crafted from premium nylon fabric, it offers a smooth, elevated feel while staying light and ready for movement.',
    body: [],
    material: [
      '90% Nylon 10% Elastane',
    ],
    care: [
      'Hand wash only.',
      'Do not bleach.',
      'Air dry.',
      'Do not tumble dry or iron.',
    ],
  },
  {
    handle: 'grid-cap-navy',
    title: 'grid cap navy',
    price: 34.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'grid-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNGC-001-002',
        price: 34.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkblue_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkblue_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkblue_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkblue_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for athletes who want performance without the noise, the grit cap brings a subtle lifestyle character into a functional sports silhouette. crafted from premium nylon fabric, it offers a smooth, elevated feel while staying light and ready for movement.',
    body: [],
    material: [
      '90% Nylon 10% Elastane',
    ],
    care: [
      'Hand wash only.',
      'Do not bleach.',
      'Air dry.',
      'Do not tumble dry or iron.',
    ],
  },
  {
    handle: 'grid-cap-green',
    title: 'grid cap forrest',
    price: 34.95,
    available: true,
    publishedAt: '2025-11-14',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'grid-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNGC-001-004',
        price: 34.95,
        available: true,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkgreen_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkgreen_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/darkgreen_3.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for athletes who want performance without the noise, the grit cap brings a subtle lifestyle character into a functional sports silhouette. crafted from premium nylon fabric, it offers a smooth, elevated feel while staying light and ready for movement.',
    body: [],
    material: [
      '90% Nylon 10% Elastane',
    ],
    care: [
      'Hand wash only.',
      'Do not bleach.',
      'Air dry.',
      'Do not tumble dry or iron.',
    ],
  },
  {
    handle: 'long-tights-black',
    title: 'long tights black',
    price: 44.95,
    available: true,
    publishedAt: '2025-09-26',
    tags: [],
    collections: [
      'bottoms',
      'tights',
    ],
    variants: [
      {
        size: 'XXS',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: false,
      },
      {
        size: 'XS',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: true,
      },
      {
        size: 'XXL',
        sku: 'TR26/1-002-001',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Hose_schwarz_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Hose_schwarz_2.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The rappid. active long tights are built for performance and everyday training. Made from a durable polyester and elastane blend, they provide reliable flexibility and light compression without restricting movement. Two side pockets keep essentials like keys and a phone within easy reach, while two gel pockets at the back offer additional storage on longer sessions. White prints on the front and sides add a clear, functional finish to these full-length tights.',
    body: [
      'Compressive fit for long efforts',
      'Stretch fabric for full range of motion',
    ],
    material: [
      '93% Polyester',
      '7% Elastan',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'pace-cap-black',
    title: 'pace cap black',
    price: 29.95,
    available: false,
    publishedAt: '2025-09-03',
    tags: [
      'hats',
    ],
    collections: [
      'accessories',
      'all-products',
      'atv-accessories',
      'new-arrivals',
      'pace-caps',
    ],
    variants: [
      {
        size: 'ONESIZE',
        sku: 'CNPC-001-001',
        price: 29.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black_3.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/black_4.jpg',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'designed for runners who value function and comfort, the pace cap delivers lightweight performance for heat, sweat, and movement.',
    body: [
      'featuring a soft, flexible brim that stays lightweight and packable, laser-cut side perforations for ventilation, and an adjustable elastic cord for a secure fit.',
      'finished with an embroidered logo and subtle branding for a clean, durable look.',
    ],
    material: [
      '100% polyester',
    ],
    care: [
      'hand wash only',
      'do not bleach',
      'air dry',
      'do not tumble dry or iron',
    ],
  },
  {
    handle: 'runclub-shirt',
    title: 'runclub shirt',
    price: 44.95,
    available: false,
    publishedAt: '2025-08-29',
    tags: [
      'tops',
    ],
    collections: [
      'graphic-shirts',
      'new-arrivals',
      'tops',
    ],
    variants: [
      {
        size: 'XS',
        sku: 'PT26/1-001-001-XS',
        price: 44.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'PT26/1-001-001-S',
        price: 44.95,
        available: false,
      },
      {
        size: 'M',
        sku: 'PT26/1-001-001-M',
        price: 44.95,
        available: false,
      },
      {
        size: 'L',
        sku: 'PT26/1-001-001-L',
        price: 44.95,
        available: false,
      },
      {
        size: 'XL',
        sku: 'PT26/1-001-001-XL',
        price: 44.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/run_club_shirt_1.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/run_club_shirt_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/Masstabellen-03.png',
        width: 2048,
        height: 2048,
      },
    ],
    intro: 'The Rappid Graphic T-Shirt is made in Portugal and features our signature raglan fit, designed for a clean silhouette and unrestricted movement. Constructed from 220 GSM 100% cotton, it delivers a premium feel while remaining comfortable and not overly heavy. The fabric ensures durability and everyday wearability with a soft touch.',
    body: [],
    material: [
      '100% Cotton',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
  {
    handle: 'rappid-tights-black',
    title: 'the real og tights',
    price: 49.95,
    available: true,
    publishedAt: '2024-10-02',
    tags: [
      'bottoms',
    ],
    collections: [
      'all-products',
      'bottoms',
      'last-soul-ultra-2026',
      'lsu-bottoms',
      'tights',
    ],
    variants: [
      {
        size: 'XXS',
        sku: 'TR26/1-001-001-XXS',
        price: 49.95,
        available: false,
      },
      {
        size: 'XS',
        sku: 'TR26/1-001-001-XS',
        price: 49.95,
        available: false,
      },
      {
        size: 'S',
        sku: 'TR26/1-001-001-S',
        price: 49.95,
        available: true,
      },
      {
        size: 'M',
        sku: 'TR26/1-001-001-M',
        price: 49.95,
        available: true,
      },
      {
        size: 'L',
        sku: 'TR26/1-001-001-L',
        price: 49.95,
        available: true,
      },
      {
        size: 'XL',
        sku: 'TR26/1-001-001-XL',
        price: 49.95,
        available: false,
      },
      {
        size: 'XXL',
        sku: 'TR26/1-001-001-XXL',
        price: 49.95,
        available: false,
      },
    ],
    images: [
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/rappid_active_tights_black_1_4.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/rappid_active_tights_black_2_2.jpg',
        width: 2048,
        height: 2048,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/e-comfinal-37.jpg',
        width: 2000,
        height: 2998,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0862/1765/4598/files/e-comfinal-38.jpg',
        width: 2000,
        height: 2998,
      },
    ],
    intro: 'Our updated rappid. active tights take performance to the next level. The high-quality polyester and elastane blend ensures optimal flexibility and compression, supporting your movements without restriction. Two side pockets offer space for small essentials like keys and a phone, while two additional gel pockets at the back provide extra storage for longer workouts.',
    body: [],
    material: [
      '93% Polyester',
      '7% Elastan',
    ],
    care: [
      'Machine wash cold (30 °C).',
      'Avoid bleach.',
      'Air dry only.',
      'Do not iron or tumble dry.',
    ],
  },
]

export function productByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle)
}

export function productsIn(collection: string): Product[] {
  return products.filter(p => p.collections.includes(collection))
}

/**
 * In stock first, then newest. A grid that leads with sold-out rows wastes
 * its best row on things nobody can buy.
 */
export function byAvailabilityThenNewest(a: Product, b: Product): number {
  if (a.available !== b.available)
    return a.available ? -1 : 1
  return a.publishedAt < b.publishedAt ? 1 : -1
}

/** Sizes a runner can actually add to a cart right now. */
export function sizesInStock(product: Product): ProductVariant[] {
  return product.variants.filter(v => v.available)
}

/**
 * Shopify serves a resized derivative from the same URL. Asking for the width
 * a slot actually paints keeps a 2048px studio shot off a 300px card.
 */
export function image(src: string, width: number): string {
  return `${src}?width=${width}`
}
