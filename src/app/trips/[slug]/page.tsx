import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, Clock3 } from 'lucide-react';
import { getTrip, trips } from '@/lib/trips';
export function generateStaticParams() {
  return trips.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const trip = getTrip((await params).slug);
  return { title: trip?.name, description: trip?.description };
}
export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const trip = getTrip((await params).slug);
  if (!trip) notFound();
  return (
    <>
      <section className="section page-section">
        <a className="back-link" href="/trips/">
          ← All trips
        </a>
        <div className="page-heading">
          <span className="eyebrow">{trip.category}</span>
          <h1>{trip.name}</h1>
          <span className="duration">
            <Clock3 size={17} />
            {trip.duration}
          </span>
        </div>
        <div className="detail-image">
          <Image
            src={trip.image}
            alt={trip.imageAlt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="detail-columns">
          <div>
            <span className="eyebrow">THE JOURNEY</span>
            <h2>
              A change of pace.
              <br />
              <em>A fresh perspective.</em>
            </h2>
            <p>{trip.description}</p>
            <ul className="highlights">
              {trip.highlights.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <span className="eyebrow">MAKE IT YOUR NEXT ADVENTURE</span>
            <h3>Start with a conversation.</h3>
            <p>
              Ask about departure dates, riding experience, itinerary and what
              to bring. Pricing and availability will be confirmed before
              booking.
            </p>
            <a className="button dark" href={`/contact/?trip=${trip.slug}`}>
              Enquire about this trip <ArrowUpRight size={18} />
            </a>
            <small>
              Online registration and payments are not available yet.
            </small>
          </aside>
        </div>
      </section>
    </>
  );
}
