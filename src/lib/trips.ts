export type Trip = {
  slug: string;
  name: string;
  duration: string;
  category: 'Day ride' | 'Horse expedition' | 'Slow escape';
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};
// Editorial content lives independently of the UI; replace this repository with a CMS later.
export const trips: Trip[] = [
  {
    slug: 'terelj-day-horse-trip',
    name: 'Terelj day horse trip',
    duration: '1 day',
    category: 'Day ride',
    description:
      'A little time in the saddle. A whole new perspective. Discover open valleys and the quiet beauty of Terelj on a day away from the city.',
    image: '/images/valley.jpg',
    imageAlt: 'A rugged mountain peak beneath a wide sky',
    highlights: [
      'A day in the Mongolian countryside',
      'Explore Terelj on horseback',
      'Space to slow down',
    ],
  },
  {
    slug: 'hagiin-har-lake',
    name: 'Hagiin Har Lake',
    duration: '4 days · 3 nights',
    category: 'Horse expedition',
    description:
      'Follow the idea of the open trail, through forest and mountain country toward Hagiin Har Lake. An extended horseback escape into the wilderness.',
    image: '/images/lake.jpg',
    imageAlt: 'An alpine lake surrounded by mountains',
    highlights: [
      'A multi-day horseback journey',
      'Lake and mountain landscapes',
      'Nights away from the city',
    ],
  },
  {
    slug: 'kherkhluur-saridag',
    name: 'Kherkhluur Saridag',
    duration: '4 days · 3 nights',
    category: 'Horse expedition',
    description:
      'Trade the everyday for mountain horizons. A four-day horse trip made for those drawn to a longer journey and the rhythm of the trail.',
    image: '/images/mountains.jpg',
    imageAlt: 'Layers of rugged mountains',
    highlights: [
      'Four days of discovery',
      'Mountain scenery',
      'A longer escape on horseback',
    ],
  },
  {
    slug: 'tsenkher-hot-spring',
    name: 'Tsenkher hot spring',
    duration: '2 days · 2 nights',
    category: 'Slow escape',
    description:
      'Take the slower road to Tsenkher. A countryside escape with time to unwind around the hot springs and enjoy a change of pace.',
    image: '/images/steppe.jpg',
    imageAlt: 'Wildlife in a green woodland landscape',
    highlights: [
      'A relaxing countryside escape',
      'Time around the hot springs',
      'A slower travel rhythm',
    ],
  },
];
export function getTrip(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
