# AGENTS.md — Working on KPK Internet Hub

Commercial website for a South African internet café. Also a portfolio project — code quality, accessibility and SEO matter. Full specification: see the project brief (writing-block.md) or README.md.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:5173 |
| `npm run build` | Production build + postbuild (404.html, sitemap when domain set, output verification) |
| `npm run typecheck` | `react-router typegen && tsc` — run after adding/changing routes |
| `npm run lint` | ESLint (typescript-eslint + react-hooks + jsx-a11y) |
| `npm test` | Vitest unit + component tests |
| `npm run e2e` | Playwright smoke tests (starts dev server itself) |

Run `typecheck`, `lint`, `test` and `build` before considering any change done.

## Hard rules

- **No prices anywhere.** No "starting from", discounts, stock statuses, ratings or cart/checkout. CTAs are enquiry-only ("Enquire Now", "Check Availability", "Chat on WhatsApp").
- **Never invent business details.** Contact info lives only in `app/config/business.ts`; features depending on unset values must hide themselves (`hasWhatsApp`, `formatLocation()` etc.).
- **No fabricated history, testimonials, staff, awards or portfolio projects.**
- **No government branding or affiliation claims.** Application assistance pages must keep the independent-assistance disclaimer.
- The site must not collect personal data (no forms, uploads, credentials).

## Architecture

- React Router Framework Mode, `ssr: false` + full prerender (`react-router.config.ts`). Static output → `build/client`, deployed to Netlify Free. Do not add server loaders/actions — they are prohibited in this mode.
- All content is typed data: `app/config/` (business, navigation, types), `app/data/` (services, products, faqs, portfolio, tech-services, homepage).
- Shared UI: `app/components/ui/`; layout: `app/components/layout/` (rendered from `app/root.tsx`).
- Path alias: `~/` → `app/` (e.g. `~/components/ui/Button`).
- Brand tokens (colours, fonts, shadows, utilities like `container-page`, `btn-primary`, `card-base`, `gradient-bg`) are centralised in `app/app.css`. Use them instead of ad-hoc values.
- SEO: every route exports `meta` through `app/utils/seo.ts`. Canonical/sitemap activate only when `websiteUrl` is set; until then pages are `noindex` on purpose.
- WhatsApp links: only via `app/utils/whatsapp.ts` (`buildWhatsAppUrl`). Buttons render nothing while no number is configured.

## Adding a route

1. Create `app/routes/<name>.tsx` with a `meta` export (use `seoMeta`).
2. Register it in `app/routes.ts`.
3. Add the path to `prerender` in `react-router.config.ts`.
4. Add the path to `scripts/verify-build.mjs` and, if public, `scripts/generate-sitemap.mjs`.
5. Run `npm run typecheck` (generates `+types`) and `npm run build`.

## Testing notes

- Component tests use `tests/helpers.tsx` (`renderWithRouter`).
- Some component tests are guarded for the "contact details unconfigured" state — update them when real numbers are added (see LAUNCH_CHECKLIST.md).
- E2E: desktop nav tests skip on mobile viewports and vice versa (`isMobile` in `playwright.config.ts` projects).
