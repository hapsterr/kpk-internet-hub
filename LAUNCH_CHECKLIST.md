# Launch Checklist — KPK Internet Hub Website

Items that must be confirmed by the business owner or supplied before the website goes live. Nothing on this list is fabricated in the codebase — dependent features stay hidden until each item is provided.

## 1. Business information (required)

Configure in `app/config/business.ts`:

- [ ] WhatsApp number (enables all WhatsApp CTAs, floating button, header CTA)
- [ ] Telephone number
- [ ] Business email address
- [ ] Shop street address
- [ ] Suburb / city
- [ ] Province
- [ ] Operating hours (e.g. `["Mon–Fri: 08:00–18:00", "Sat: 08:00–14:00"]`)
- [ ] Google Maps directions URL (once the address is confirmed)
- [ ] Production domain → set as `websiteUrl` (enables canonical URLs, Open Graph URLs, sitemap.xml and removes the site-wide `noindex`)
- [ ] Facebook / Instagram page URLs (optional)

## 2. Brand assets

- [x] **Official KPK logo file** — `public/images/logo/KPKLogo.png` is used in the header and footer (`app/components/layout/Logo.tsx`).
- [ ] **Favicon** — still the temporary monogram (`public/favicon.svg`); swap in a square crop/icon of the official logo.
- [ ] Real photographs of the shop (reserved placeholder exists on the About page).
- [ ] Product photographs (optional — cards currently use icons).

## 3. Content verification with the owner

- [ ] Confirm internet-access wording (session options/facilities) before publishing specifics.
- [ ] Confirm CV update service is offered (`cv-updates` entry in `app/data/services.ts`).
- [ ] Confirm SSD form factors/capacities actually stocked before any sizes are mentioned (currently none are).
- [ ] Confirm the full services list matches what the shop actually offers; remove anything unconfirmed.
- [ ] Privacy policy: confirm the contact channel named for POPIA data requests and review the flagged section on the page.

## 4. Portfolio

- [ ] Owner approval before listing any completed website project in `app/data/portfolio.ts` (currently empty by design).
- [ ] Optionally add the KPK Internet Hub site itself once live and approved.

## 5. Deployment

- [ ] Push to GitHub.
- [ ] Create Netlify site (build: `npm run build`, publish: `build/client` — already in `netlify.toml`).
- [ ] Connect the custom domain and issue HTTPS.
- [ ] Set `websiteUrl` in `business.ts`, redeploy, and verify `sitemap.xml` + canonical tags on production.
- [ ] Submit the sitemap to Google Search Console.
- [ ] Test all WhatsApp CTAs on a real phone once the number is live.
- [ ] Update the guarded component tests in `tests/components/` that assume contact details are unconfigured.

## 6. Post-launch

- [ ] Replace About-page photo placeholder with real shop photos.
- [ ] Review site in Search Console after 2–4 weeks.
- [ ] Monitor Netlify bandwidth/credits usage.
