import type { Metadata } from 'next';
import { TripCard } from '@/components/trip-card';
import { trips } from '@/lib/trips';
export const metadata: Metadata = { title: 'Our trips' };
export default function TripsPage() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <span className="eyebrow">FIND YOUR OWN HORIZON</span>
        <h1>
          Journeys worth
          <br />
          <em>taking slowly.</em>
        </h1>
        <p>
          From a day in Terelj to a longer adventure in the mountains, find your
          next escape.
        </p>
      </div>
      <div className="trip-grid">
        {trips.map((trip) => (
          <TripCard trip={trip} key={trip.slug} />
        ))}
      </div>
      <p className="note">
        Trip itineraries, departure dates, prices and inclusions will be
        confirmed before booking. Online registration is not open yet.
      </p>
    </section>
  );
}
