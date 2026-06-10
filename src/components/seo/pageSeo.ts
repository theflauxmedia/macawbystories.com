import { keywordSets } from './keywordSets';
import { DEFAULT_OG_IMAGE, CHENNAI_OG_IMAGE, SITE_NAME } from './siteConfig';

const suffix = ` | ${SITE_NAME}`;

export const pageSeo = {
  home: {
    title: `Rooftop Bar & Fine Dining in Bangalore & Chennai${suffix}`,
    description:
      'Macaw by Stories — iconic rooftop bars in Bengaluru (AECS Layout) and Chennai (OMR). Signature cocktails, live DJs, fine dining & nightlife. Book your table today.',
    path: '/',
    keywords: keywordSets.home,
    ogImage: DEFAULT_OG_IMAGE,
  },
  about: {
    title: `About Us — Rooftop Dining & Nightlife Brand${suffix}`,
    description:
      'Discover the story behind Macaw by Stories — tropical luxury meets urban sophistication across rooftop venues in Bengaluru and Chennai. Craft cocktails, live music & unforgettable vibes.',
    path: '/about-us',
    keywords: keywordSets.about,
    ogImage: DEFAULT_OG_IMAGE,
  },
  locations: {
    title: `Locations — Bangalore (AECS Layout) & Chennai (OMR) Rooftop${suffix}`,
    description:
      'Visit Macaw by Stories in Bengaluru (AECS Layout, Hosur Road) and Chennai (Sholinganallur, OMR). Rooftop dining, cocktails, live music & nightlife. Get directions and reserve.',
    path: '/locations',
    keywords: keywordSets.locations,
    ogImage: DEFAULT_OG_IMAGE,
  },
  gallery: {
    title: `Gallery — Rooftop Ambience, Food & Nightlife Photos${suffix}`,
    description:
      'Explore Macaw by Stories through photos — rooftop ambience, signature cocktails, gourmet food, DJ nights and celebration moments at our Bengaluru and Chennai venues.',
    path: '/gallery',
    keywords: keywordSets.gallery,
    ogImage: DEFAULT_OG_IMAGE,
  },
  packages: {
    title: `Bengaluru Celebration & Event Packages${suffix}`,
    description:
      'Macaw by Stories Bengaluru event packages from ₹1099/person. Curated appetizers, mains, mocktails & desserts for birthdays, corporate events & group celebrations. Min 25 guests.',
    path: '/packages',
    keywords: keywordSets.packages,
    ogImage: DEFAULT_OG_IMAGE,
  },
  chennaiPackages: {
    title: `Chennai Celebration Packages — Coming Soon${suffix}`,
    description:
      'Exciting celebration packages coming soon to Macaw by Stories Chennai (Sholinganallur, OMR). Contact us for private dining, corporate events & group bookings.',
    path: '/chennai-packages',
    keywords: keywordSets.chennaiPackages,
    ogImage: CHENNAI_OG_IMAGE,
  },
  media: {
    title: `Media, Press & Blog — News & Stories${suffix}`,
    description:
      'Latest press coverage, media features and blog stories from Macaw by Stories. News from The Hindu, Economic Times & more about our Bangalore and Chennai rooftops.',
    path: '/media',
    keywords: keywordSets.media,
    ogImage: DEFAULT_OG_IMAGE,
  },
  contact: {
    title: `Contact & Table Reservations — Bangalore & Chennai${suffix}`,
    description:
      'Book a table at Macaw by Stories — rooftop dining, cocktails & nightlife in Bengaluru and Chennai. Call, WhatsApp or enquire for reservations, private dining & corporate events.',
    path: '/contact',
    keywords: keywordSets.contact,
    ogImage: DEFAULT_OG_IMAGE,
  },
  notFound: {
    title: `Page Not Found${suffix}`,
    description: 'The page you are looking for could not be found. Explore Macaw by Stories rooftop bars in Bangalore and Chennai.',
    path: '/404',
    noIndex: true,
  },
} as const;

export const blogSlugs = [
  '5-must-try-cocktails-at-macaw',
  'behind-the-design-the-story-of-our-tropical-paradise',
  'how-to-host-the-perfect-corporate-event-in-bangalore',
  'spotlight-on-our-signature-sushi-platters',
  'weekend-vibes-best-times-to-visit-macaw-chennai',
  'the-art-of-rooftop-entertainment',
] as const;
