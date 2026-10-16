import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Mountain,
  TentTree,
} from 'lucide-react';
import { TripCard } from '@/components/trip-card';
import { trips } from '@/lib/trips';
export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-photo"
          src="/images/hero.jpg"
          alt="A white horse running beside a forest"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow light">MONGOLIA, BEYOND THE ORDINARY</span>
          <h1>
            Find your way
            <br />
            to the <em>wild.</em>
          </h1>
          <p>
            Wide-open skies. The rhythm of hooves.
            <br />A journey that stays with you.
          </p>
          <a className="button cream" href="/trips/">
            Explore our trips <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>48° N &nbsp; 107° E &nbsp; / &nbsp; MONGOLIA</span>
          <a href="#journeys">
            A little further from the everyday <ArrowDown size={16} />
          </a>
        </div>
        <span className="hero-side">THE LAND OF THE ETERNAL BLUE SKY</span>
      </section>
      <section className="intro section">
        <span className="eyebrow">A DIFFERENT KIND OF JOURNEY</span>
        <div>
          <h2>
            Less rush.
            <br />
            More <em>wide-open wonder.</em>
          </h2>
          <p>
            There’s a different rhythm out here. Follow a trail through the
            valley, settle into a Mongolian ger, and make room for the
            unexpected. This is your invitation to experience Mongolia at the
            pace of the land.
          </p>
          <a className="text-link" href="/about/">
            Get to know Nuudelchin <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="section journeys" id="journeys">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FOLLOW YOUR CURIOSITY</span>
            <h2>
              Your next great <em>escape.</em>
            </h2>
          </div>
          <a className="text-link" href="/trips/">
            View all trips <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="trip-grid">
          {trips.slice(0, 2).map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>
      <section className="service-band section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR WAY TO MONGOLIA</span>
            <h2>
              A day, a trail,
              <br />
              or a little longer.
            </h2>
          </div>
          <p>
            Make space for the kind of travel you love.
            <br />
            We’ll help you find a place to begin.
          </p>
        </div>
        <div className="service-grid">
          {[
            {
              Icon: TentTree,
              title: 'Stay in a ger',
              text: 'A round doorway to a different way of life.',
              hash: 'ger-rental',
            },
            {
              Icon: Compass,
              title: 'Get away for a day',
              text: 'A short journey. A welcome change of scenery.',
              hash: 'short-trips',
            },
            {
              Icon: Mountain,
              title: 'Take the long way',
              text: 'More trails, more horizons, more time outside.',
              hash: 'long-trips',
            },
          ].map(({ Icon, title, text, hash }, i) => (
            <a href={`/services/#${hash}`} key={title}>
              <span className="service-number">0{i + 1}</span>
              <Icon size={34} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>
      <section className="closing section">
        <span className="eyebrow">THE TRAIL STARTS WITH AN IDEA</span>
        <h2>
          Where will your
          <br />
          <em>curiosity take you?</em>
        </h2>
        <a className="button dark" href="/contact/">
          Let’s plan your journey <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}
