# Magnolia Bitcoin Memorial — Worklog

This document is the canonical record of the Magnolia Web project. The
authoritative version of how the project is built today lives in `AGENTS.md`;
this file is the history of how it got there.

---

## Task: Bitcoin fundraising landing page for Magnolia

### Initial build (commit 94fcd80, "Primer commit de Magnolia_Project")
- Next.js 16 + Tailwind v4 + shadcn/ui skeleton scaffolded.
- `dev` / `build` / `start` / `lint` scripts in place.

### Hero, counter, donation flow, FAQ, footer (commits 10ae692 → 5c09e75)
- 3 AI-generated images: hero background, Satoshi statue concept, Bitcoin
  forest trail.
- `qrcode` package installed for QR generation.
- Custom ES/EN i18n: `src/translations/index.ts` + `LanguageContext`.
- `ThemeProvider` (next-themes-style, dark default, `class` strategy).
- Color palette and Arimo font baked into `src/app/globals.css`.
- `Header` (transparent scroll, language switcher, theme toggle, mobile menu).
- `HeroSection` (parallax, particles, decorative lines, mobile optimizations).
- `LiveCounter` (real BTC balance from Mempool Space + CoinGecko via
  `/api/btc-balance`, count-up animation, progress bar).
- `/api/qr-code` route for server-side QR generation.
- `FundUsage`, `ContributionLevels`, `DonationFlow`, `FAQSection`, `Footer`.
- All eight sections assembled in `src/app/page.tsx`.

### Magnolia Bitcoin Trail (21 stations)
- New bilingual content system: `src/content/stations.es.ts` and
  `src/content/stations.en.ts`, one per language, both conforming to the
  `Station` interface in `src/lib/stations.ts`.
- 21 stations along a 2-mile walk, 5 categories: fundamentos, historia,
  tecnología, filosofía, economía.
- `/trail` index with: hero, sticky search + filter chips, 21 marker cards
  on a dashed vertical "trail", per-category color tokens, `TrailProgress`
  progress strip.
- `/trail/[slug]` detail page with title, highlight block, content,
  `StationCarousel` (image gallery, mobile-friendly controls), and
  `StationNav` (prev/next station).
- `useStations` hook in `src/hooks/useStations.ts` is the single entry point
  for trail data; it returns the locale-correct station list plus `getBySlug`,
  `getAdjacent`, and `filterByCategory`.
- `StationHeader` (used inside `trail/layout.tsx`) — back-to-index button,
  language and theme toggles, mobile menu.

### Generic pages
- `src/app/paginas/[slug]/page.tsx` — minimal client-rendered pages for
  `sobre-nosotros` and `contacto`. Content is bilingual inline. Enlazados
  desde el footer.
- `notFound()` is called before any JSX render so unknown slugs short-circuit
  to the 404 boundary cleanly.

### Housekeeping (audit pass, current state)
- Removed: `download/`, `examples/`, `mini-services/`, `.zscripts/`,
  `bun.lock`, `dev.log`, `server.log`, `session-ses_*.md`, `.opencode/`,
  `.understand-anything/`. None of these were part of the runtime.
- Removed: `prisma/`, `db/`, `src/lib/db.ts`. The Prisma `User`/`Post`
  schema was never imported by any component.
- Removed: `tailwind.config.ts` (Tailwind v4 is config-less).
- Removed: `src/app/api/route.ts` (Hello-world boilerplate, unused).
- Removed: 33 unused `src/components/ui/*` primitives (alert, calendar,
  carousel-of-radix dialogs, etc.). The 15 that survive are the ones
  actually imported by feature components.
- Trimmed `package.json` deps: removed `next-auth`, `next-intl`,
  `z-ai-web-dev-sdk`, `zod`, `zustand`, `uuid`, `date-fns`,
  `@hookform/resolvers`, all `@dnd-kit/*`, `@mdxeditor/editor`,
  `@tanstack/react-query`, `@tanstack/react-table`, `react-hook-form`,
  `react-markdown`, `react-syntax-highlighter`, `react-day-picker`,
  `react-resizable-panels`, `input-otp`, `vaul`, `cmdk`, `recharts`,
  `sonner`, plus their Radix dependencies that no longer have any consumer.
- Centralized the Bitcoin address: `BTC_ADDRESS` (and the mempool/coingecko
  URLs, the $22,000 fundraising goal, the fallback price, the cache TTL)
  now live in `src/lib/btc.ts` and are imported by `api/btc-balance/route`,
  `DonationFlow`, `FAQSection`. The address appears literally in exactly
  one place in the codebase.
- Fixed the `t("faqA1").split(".")[0]` hack in `FAQSection` — replaced
  with a proper `faqCtaNote` i18n key in both languages.
- Linked `sobre-nosotros` and `contacto` from a new "Project" column in
  the Footer, with bilingual labels (`footerAboutLink`, `footerContactLink`).
- Updated `.gitignore` to actually exclude `*.tsbuildinfo`, `dev.log`,
  `server.log`, `.opencode`, `.understand-anything`, `.zscripts/`,
  `node_modules`, `.next`, etc. — many of these had been committed
  previously because the original ignore list was incomplete.
- Migrated `AGENTS.md` from Bun to npm/Node — the project has always been
  run with `npm run dev`; `bun` was never installed on this machine.
  `package-lock.json` is the canonical lockfile.

### Still TODO (parked, not blocking)
- Decide which is real: the "El Salvador" copy in `paginas/[slug]` and
  `Footer.tsx` text, the "118 acres, Canadensis, PA" copy in the Trail
  hero, or the Google Maps iframe pointing to "Magnolia Streamside Resort
  Weddings" in the Poconos. These three disagree. See `src/components/Footer.tsx`
  (map embed) and `src/translations/index.ts` (footer copy) for details.
- Wire the BTC address validator: `isValidBTCAddress` is exported from
  `src/lib/btc.ts` but no consumer calls it yet. Once a manual donation
  form or admin tool is added, validate before sending.
- Add real station images: `StationCarousel` already has the
  infrastructure and a documented "uncomment the `<Image>`" path, but
  the files in `public/trail/<slug>/` are missing.
- Decide whether the unused `use-toast` / `Toaster` plumbing should stay
  for future copy / error feedback, or be removed. Currently no component
  ever calls `toast()`.
