import { ArrowUpRight, Mountain } from 'lucide-react';
import { site } from '@/lib/site';

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9z" />
    </svg>
  );
}
function Tripadvisor({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m2 7-1-2 5 1a13 13 0 0 1 12 0l5-1-1 2M9 17l3 3 3-3M10 9l2-2 2 2" />
      <circle cx="6" cy="12" r="5" />
      <circle cx="18" cy="12" r="5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  );
}
export function Socials() {
  const icons = { Instagram, Facebook, Tripadvisor };
  return (
    <div className="socials">
      {Object.entries(site.socials).map(([name, href]) => {
        const Icon = icons[name as keyof typeof icons];
        return href ? (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={18} />
          </a>
        ) : (
          <span
            key={name}
            className="social-unset"
            aria-label={`${name} profile coming soon`}
            title={`${name} profile coming soon`}
          >
            <Icon size={18} />
          </span>
        );
      })}
    </div>
  );
}
export function Header() {
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Nuudelchin home">
        <Mountain size={34} strokeWidth={1.3} />
        <span>
          NUUDELCHIN<small>MONGOLIA · HORSE & TRAVEL</small>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/trips/">Our trips</a>
        <a href="/services/">Our services</a>
        <a href="/about/">Our story</a>
      </nav>
      <a className="header-cta" href="/contact/">
        Plan your journey <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <a className="brand" href="/">
            <Mountain size={32} />
            <span>
              NUUDELCHIN<small>FOLLOW YOUR WILD SIDE.</small>
            </span>
          </a>
          <p>
            Open landscapes. Unhurried journeys.
            <br />
            Mongolia, one trail at a time.
          </p>
        </div>
        <div>
          <span className="eyebrow">Explore</span>
          <a href="/trips/">Our trips</a>
          <a href="/services/">Our services</a>
          <a href="/about/">Our story</a>
        </div>
        <div>
          <span className="eyebrow">Let’s connect</span>
          <a href="/contact/">Plan your journey ↗</a>
          <Socials />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nuudelchin</span>
        <span>Made for the open road, and the trail beyond.</span>
      </div>
    </footer>
  );
}
