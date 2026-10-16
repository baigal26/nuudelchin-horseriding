# Nuudelchin — Mongolia travel

A Next.js App Router project with TypeScript, responsive CSS, Lucide icons, ESLint and Prettier. Static HTML is generated for each route, with ordinary anchor navigation for full-page loads rather than SPA navigation. No backend or booking/payment collection is enabled.

## Development

Requires Node.js 22+ and npm.

```sh
npm install
cp .env.example .env.local
npm run dev
```

On PowerShell use `Copy-Item .env.example .env.local`.

## Checks and deployment

```sh
npm run typecheck
npm run lint
npm run build
```

Deploy the generated `out/` directory to any static host supporting directory indexes. `npm run dev` serves local development. Configure the production site URL before building so sitemap and metadata use the correct domain. Environment settings are baked into the static build; rebuild when they change.

## Content

- `src/lib/trips.ts`: typed trip catalog, used by listings and generated detail pages.
- `src/lib/site.ts`: brand, contact and social settings.
- `src/app/`: home, trips, four trip details, services, story, contact, sitemap, robots and 404.
- `src/components/`: shared site shell and trip cards.
- `src/app/globals.css`: responsive design tokens and styling.

Set a real email and verified social URLs in `.env.local`. Unconfigured social icons are labeled as coming soon and are not links. No fictitious contact addresses or social profiles are supplied. Contact uses an email link when configured.

Before launch, approve copy, itineraries, durations, inclusions and photography; add real business details and appropriate privacy/legal pages. The supplied Tsenkher duration (2 days, 2 nights) is preserved and should be confirmed. Landscape photographs are illustrative stock images, not verified photographs of the destinations. Fonts load from Google Fonts with local system fallbacks.

## Future registrations and payments

`src/lib/booking/types.ts` provides an initial domain boundary. When implementing transactions:

1. Remove `output: 'export'` from `next.config.ts` and deploy to a Next.js server-capable host, or keep the static frontend with a separately hosted API.
2. Replace the trip repository with a database or CMS without changing presentation components.
3. Add server-side validation, availability, durable registration storage and authenticated administration. Calculate prices on the server.
4. Integrate a hosted payment provider checkout. Keep credentials server-only; confirm payment through verified, idempotent webhooks, never through browser redirects alone.
5. Add confirmation emails, consent, cancellation/refund policies, abuse controls and integration tests with the provider’s test environment.

Do not add server routes or Server Actions while static export is enabled. No pretend checkout or inactive registration form is included.

## Image credits

Illustrative images served locally from Unsplash image sources:

- Hero: https://images.unsplash.com/photo-1553284965-83fd3e82fa5a
- Valley: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b
- Lake: https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1
- Mountains: https://images.unsplash.com/photo-1454496522488-7a8e488e8606
- Countryside: https://images.unsplash.com/photo-1472396961693-142e6e269027

Static export reference: https://nextjs.org/docs/app/guides/static-exports
