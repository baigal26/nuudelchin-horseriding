import type { Metadata } from 'next';
import { ArrowUpRight, TentTree, Compass, Mountain } from 'lucide-react';
export const metadata: Metadata = { title: 'Our services' };
const services = [
  {
    id: 'ger-rental',
    Icon: TentTree,
    title: 'Mongolian ger rental',
    text: 'Make a traditional Mongolian ger part of your journey. Tell us about your dates and group size to discuss rental options and arrangements.',
    link: '/contact/',
    cta: 'Ask about ger rental',
  },
  {
    id: 'short-trips',
    Icon: Compass,
    title: 'Short trips, lasting memories',
    text: 'A day away can make all the difference. Discover shorter escapes, including our Terelj day horse trip, and make a little room for adventure.',
    link: '/trips/terelj-day-horse-trip/',
    cta: 'Explore our day trip',
  },
  {
    id: 'long-trips',
    Icon: Mountain,
    title: 'Longer trails, wider horizons',
    text: 'Set aside a few days for the journey. Explore our Hagiin Har Lake and Kherkhluur Saridag horse trips, or slow down on a Tsenkher hot spring escape.',
    link: '/trips/',
    cta: 'Find a longer journey',
  },
];
export default function ServicesPage() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <span className="eyebrow">ROOM FOR YOUR KIND OF ADVENTURE</span>
        <h1>
          Travel your <em>way.</em>
        </h1>
        <p>
          A place to stay. A trail to follow. Time to discover something new.
        </p>
      </div>
      <div className="service-list">
        {services.map(({ id, Icon, title, text, link, cta }, i) => (
          <article id={id} key={id}>
            <span className="service-number">0{i + 1}</span>
            <Icon size={48} strokeWidth={1} />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
              <a className="text-link" href={link}>
                {cta}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
