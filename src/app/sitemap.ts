import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { trips } from '@/lib/trips';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/trips',
    '/services',
    '/about',
    '/contact',
    ...trips.map((t) => `/trips/${t.slug}`),
  ].map((path) => ({ url: `${site.url}${path}/` }));
}
