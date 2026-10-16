import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Socials } from '@/components/site-shell';
export const metadata: Metadata = { title: 'Plan your journey' };
export default function ContactPage() {
  return (
    <section className="section page-section editorial">
      <span className="eyebrow">A GOOD JOURNEY STARTS HERE</span>
      <h1>
        Let’s find your
        <br />
        <em>next horizon.</em>
      </h1>
      <p className="lead">
        Thinking about a horse trip, a ger stay, or a longer escape? Start with
        the journey that catches your eye.
      </p>
      <div className="contact-panel">
        <h2>Plan a trip with Nuudelchin</h2>
        <p>
          When getting in touch, include your preferred trip, travel dates,
          group size and riding experience so we can help you plan.
        </p>
        {site.email ? (
          <a
            className="button dark"
            href={`mailto:${site.email}?subject=Mongolia%20trip%20enquiry`}
          >
            Email us ↗
          </a>
        ) : (
          <p className="note">
            Our enquiry contact details will be available here soon. In the
            meantime, explore the trips and services to find your inspiration.
          </p>
        )}
        <Socials />
      </div>
      <p className="note">
        Online registration and payments are not open yet. Dates, prices and
        arrangements must be confirmed before any booking.
      </p>
      <a className="text-link" href="/trips/">
        Browse the journeys ↗
      </a>
    </section>
  );
}
