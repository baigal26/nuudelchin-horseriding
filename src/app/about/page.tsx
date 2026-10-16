import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Our story' };
export default function AboutPage() {
  return (
    <section className="section page-section editorial">
      <span className="eyebrow">THE SPIRIT OF NUUDELCHIN</span>
      <h1>
        Stay curious.
        <br />
        <em>Travel closer.</em>
      </h1>
      <p className="lead">
        Our idea of a journey is simple: spend more time with the landscape, and
        less time rushing past it.
      </p>
      <p>
        Nuudelchin brings together horse trips, Mongolian ger rental and
        countryside escapes. From a single day in Terelj to several days on a
        mountain trail, our collection is an invitation to explore Mongolia at a
        different pace.
      </p>
      <h2>The space between destinations.</h2>
      <p>
        A quiet moment in the valley. A new view from the saddle. The feeling of
        being somewhere far from the everyday. These are the experiences at the
        heart of the journeys we share.
      </p>
      <a className="button dark" href="/trips/">
        Find your journey ↗
      </a>
    </section>
  );
}
