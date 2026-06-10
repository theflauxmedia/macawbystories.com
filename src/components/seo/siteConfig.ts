export const SITE_URL = 'https://macawbystoriesindia.com';
export const SITE_NAME = 'Macaw by Stories';
export const SITE_TAGLINE = 'Two Cities, One Iconic Nightlife Vibe';
export const SITE_LOCALE = 'en_IN';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.webp`;
export const LOGO_URL = `${SITE_URL}/lovable-uploads/aeb86edc-b26e-4db4-a52f-ce91f9aa64d1.png`;
export const CHENNAI_OG_IMAGE = `${SITE_URL}/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.webp`;

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/macawchennai',
  'https://www.instagram.com/macawbystories',
] as const;

export const LOCATIONS = {
  bengaluru: {
    id: 'bengaluru',
    name: 'Macaw by Stories – Bengaluru',
    slug: 'bengaluru',
    telephone: '+91-8068507673',
    streetAddress: '2224–2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560068',
    openingHours: 'Mo-Su 12:00-01:00',
    latitude: 12.8697,
    longitude: 77.6267,
    reservationUrl: 'https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8',
    image: DEFAULT_OG_IMAGE,
  },
  chennai: {
    id: 'chennai',
    name: 'Macaw by Stories – Chennai',
    slug: 'chennai',
    telephone: '+91-8045883769',
    streetAddress: '132, Max Kailash Building, Rajiv Gandhi Salai, Sholinganallur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600119',
    openingHours: 'Mo-Su 12:00-23:30',
    latitude: 12.9006,
    longitude: 80.2204,
    reservationUrl: 'https://webbook.wegsoft.com/Q8W7E6R5T4Y3U2I1O0',
    image: CHENNAI_OG_IMAGE,
  },
} as const;

export function absoluteUrl(path = '/') {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
