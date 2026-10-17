import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { site } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Nuudelchin | Horse riding & journeys in Mongolia',
    template: '%s | Nuudelchin',
  },
  description:
    'Discover Mongolia on horseback. Explore Terelj day rides, multi-day mountain adventures, ger rentals and countryside escapes with Nuudelchin.',
  openGraph: { type: 'website', siteName: 'Nuudelchin', locale: 'en_US' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
