import Image from 'next/image';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { Trip } from '@/lib/trips';
export function TripCard({ trip }: { trip: Trip }) {
  return (
    <a href={`/trips/${trip.slug}/`} className="trip-card">
      <div className="trip-image">
        <Image
          src={trip.image}
          alt={trip.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
        <span className="image-label">{trip.category}</span>
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="trip-meta">
        <span>
          <Clock3 size={14} />
          {trip.duration}
        </span>
        <span>Mongolia</span>
      </div>
      <h3>{trip.name}</h3>
      <p>{trip.description}</p>
    </a>
  );
}
