# KPK Internet Hub — Official Website

Production website for **KPK Internet Hub**, a South African internet café and digital services business. Built as both a real commercial site and a professional portfolio project.

> One Hub. Endless Possibilities.

## Business objectives

- Establish a professional online presence for the shop.
- Make services (printing, applications, CV typing, tech support, accessories, websites) clear and discoverable.
- Drive customer enquiries through WhatsApp and in-person visits.
- Showcase website development capability for prospective business clients.

## Technology stack

| Concern | Choice |
| --- | --- |
| UI | React 19 (functional components + hooks) |
| Language | TypeScript (strict) |
| Routing/build | React Router v7+ Framework Mode, static prerendering (`ssr: false`) |
| Bundler | Vite (React Router tooling) |
| Styling | Tailwind CSS v4 with centralised brand tokens in `app/app.css` |
| Icons | lucide-react |
| Unit/component tests | Vitest + React Testing Library + axe-core |
| E2E tests | Playwright |
| Hosting | Netlify Free (static only — no runtime server) |

### Why static prerendering?

Every public route is rendered to HTML at build time. This gives fast first paints (especially on mobile), full SEO metadata per page, and lets the site host on Netlify's free static tier with no server, no cold starts and minimal attack surface. The business has no runtime data needs in V1, so a server would add cost and complexity for nothing.

## Local setup

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build with full static prerender |
| `npm run postbuild` | 404.html for Netlify + sitemap (when domain configured) + build verification |
| `npm run typecheck` | Route type generation + `tsc` |
| `npm run lint` | ESLint (typescript, react-hooks, jsx-a11y, prettier compatibility) |
| `npm run format` | Prettier write |
| `npm test` | Vitest unit + component tests |
| `npm run e2e` | Playwright smoke tests (starts the dev server automatically) |

## Directory structure

```text
app/
├── components/
│   ├── layout/      # Header, MobileNav, Footer, FloatingWhatsApp, Logo
│   ├── ui/          # Button, SectionHeading, PageHeader, CtaBanner,
│   │                # FaqAccordion, Breadcrumbs, WhatsAppButton
│   ├── home/        # Homepage sections
│   ├── services/    # ServiceCard
│   └── products/    # ProductCard
├── config/          # business.ts, navigation.ts, types.ts
├── data/            # services, products, faqs, portfolio, tech-services, homepage
├── routes/          # One route module per public page
├── utils/           # whatsapp.ts, seo.ts
├── root.tsx         # Document shell, header/footer layout, default meta, JSON-LD
└── routes.ts        # Route table (all public routes prerendered)

scripts/             # generate-sitemap.mjs, verify-build.mjs (post-build)
tests/
├── unit/            # WhatsApp URL, data integrity, config
├── components/      # Header, cards, accessibility (axe)
└── e2e/             # Playwright smoke tests
public/              # favicon.svg, robots.txt, images/
```

## Updating content

All business content lives in typed data files — no component edits needed for ordinary updates.

### Business information (address, phone, WhatsApp, hours)

Edit `app/config/business.ts`:

```ts
whatsappNumber: "072 123 4567",   // local or international format
phone: "012 345 6789",
email: "hello@example.co.za",
address: "12 Main Street",
city: "Pretoria",
province: "Gauteng",
openingHours: ["Mon–Fri: 08:00–18:00", "Sat: 08:00–14:00"],
googleMapsUrl: "https://maps.google.com/...",
websiteUrl: "https://kpkinternethub.co.za",  // enables canonical URLs + sitemap
```

Features depending on missing values (WhatsApp buttons, maps, hours, header CTA, sitemap) stay **hidden** until configured — nothing fake is ever published.

### WhatsApp behaviour

- Links are built by `app/utils/whatsapp.ts` (`buildWhatsAppUrl`) with proper URL encoding and SA country-code normalisation.
- Pre-filled enquiry messages live next to their content: service messages in `app/data/services.ts`, product messages in `app/data/products.ts`, page CTAs in the route modules.

### Services

Edit `app/data/services.ts` — each entry has a slug, name, description, category, icon and optional WhatsApp message. Categories: `internet-printing`, `applications`, `documents`, `design`.

Tech services: `app/data/tech-services.ts`.

### Products

Edit `app/data/products.ts`. The products page is an **enquiry-only catalogue**: no prices, no stock statuses, no cart.

### FAQs / portfolio

- `app/data/faqs.ts` — website FAQ entries.
- `app/data/portfolio.ts` — add approved projects only (currently intentionally empty).

## Testing

```bash
npm test          # unit + component (Vitest)
npm run e2e       # Playwright smoke tests (desktop + Pixel 7)
npm run build     # also verifies prerendered output for every route
```

E2E covers: every route loads with the right heading, desktop and mobile navigation, 404 handling, FAQ interaction, services/products listings, and guards against prices/checkout language appearing anywhere.

**Note:** component tests assert current behaviour with contact details unconfigured (e.g. WhatsApp buttons render nothing). Once real numbers are added to `business.ts`, update the guarded cases in `tests/components/`.

## Building & deployment (Netlify Free)

1. Push the repository to GitHub.
2. In Netlify: *Add new site → Import an existing project*.
3. Build command: `npm run build` · Publish directory: `build/client` (already set in `netlify.toml`).
4. Every push to `main` deploys; pull requests create deploy previews.
5. After the real domain is set in `business.ts` (`websiteUrl`), the next build emits `sitemap.xml` and a canonical `Sitemap:` line in `robots.txt`. Until then, all pages are `noindex` so preview URLs never become the indexed version.

### Custom domain

Netlify → *Domain management → Add custom domain*, then follow Netlify's DNS instructions. HTTPS is provisioned automatically via Let's Encrypt.

### Usage awareness

The site is fully static and lightweight (prerendered HTML, small route-level JS chunks). Monitor Netlify bandwidth/credits under *Site settings → Billing*. Prefer deploy previews over frequent production redeploys.

## Architecture notes

- **Centralised config** — nothing about the business is hard-coded in components; components hide features that depend on unconfigured values.
- **Route modules** export `meta` via `app/utils/seo.ts` (title, description, canonical, Open Graph, Twitter). Preview deployments get `noindex`.
- **Accessibility** — skip link, semantic landmarks, keyboard-operable mobile menu (`aria-expanded`/`aria-controls`, Escape to close), native `<details>` FAQ accordion, visible focus rings, `prefers-reduced-motion` support.
- **POPIA-conscious** — the site collects no personal data; the privacy policy states this plainly and flags owner-review items.

## Future enhancements (not in V1)

CMS for services/products, quotation forms, appointment booking, analytics, e-commerce. See the project specification — the data layer is deliberately simple so these can be added without rewrites.

## Outstanding items

See [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for real-world information and owner approvals required before going live.
