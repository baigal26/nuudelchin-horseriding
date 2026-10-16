export const site = {
  name: 'Nuudelchin',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  socials: {
    Instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    Facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    Tripadvisor: process.env.NEXT_PUBLIC_TRIPADVISOR_URL || '',
  },
};
