# Copilot Instructions for clarkemoyer.com

## Repository Overview

Personal website for Clarke Moyer — Next.js static site deployed to GitHub Pages at **https://staging.clarkemoyer.com** (staging) and **https://clarkemoyer.com** (production post-cutover).

**Stack:** Next.js 15 + React 19 + TypeScript + Tailwind CSS  
**Deployment:** GitHub Actions → static export (`out/`) → GitHub Pages  
**DNS/CDN:** Cloudflare (proxy, security headers, 301 redirects)

---

## Environment Variables

These are **public tracking IDs** — not secrets. Hardcoded in `.github/workflows/deploy.yml` and documented here.

> **Note:** GitHub Actions environments require the repo owner to configure via
> Settings → Environments. Collaborators cannot create environments on personal repos.
> A `google-prod` environment should be created by the repo owner (clarkemoyer) and
> these vars moved there once available. Until then they live in the workflow directly.

| Variable | Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-C2Q1HC0GVQ` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | `GTM-5JL6TDQW` | Google Tag Manager |
| `NEXT_PUBLIC_SITE_URL` | `https://clarkemoyer.com` | Canonical URL / metadataBase |
| `USE_BASE_PATH` | `false` (deploy) / `true` (gh-pages subdirectory) | GitHub Pages basePath |

### Future: google-prod Environment
When the repo owner creates the `google-prod` environment in GitHub Settings → Environments,
move `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`, and `NEXT_PUBLIC_SITE_URL`
into that environment's variables, then update `deploy.yml` to reference:
```yaml
environment:
  name: google-prod
```

---

## Essential Commands

```bash
npm ci                    # Install dependencies (always use ci, not install)
npm run dev               # Dev server on localhost:3000
npm run build             # Production static export to out/
npm run lint              # ESLint (must pass before commits)
npm test                  # Jest unit tests
npm run test:coverage     # Jest with coverage report
npm run test:e2e          # Playwright E2E (requires built out/ + serve)
npm run format            # Prettier format
npm run format:check      # Prettier check (CI)
npm run preview           # Serve built out/ on port 3000 (for E2E)
```

---

## Project Structure

```
clarkemoyer.com/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml         # Main deploy to GitHub Pages
│   │   ├── ci.yml             # PR checks: lint + test + build + E2E
│   │   ├── codeql.yml         # Security scanning
│   │   └── lighthouse.yml     # Perf/a11y/SEO scoring post-deploy
│   ├── copilot-instructions.md
│   └── dependabot.yml         # Weekly npm + Actions updates
├── __tests__/                 # Jest unit tests
│   └── components/
│       ├── CookieConsent.test.tsx
│       └── Navigation.test.tsx
│   └── pages/
│       └── metadata.test.tsx
├── tests/                     # Playwright E2E tests
│   ├── test.config.ts
│   ├── navigation.spec.ts
│   ├── cookie-consent.spec.ts
│   ├── copyright.spec.ts
│   ├── image-loading.spec.ts
│   └── seo.spec.ts
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout: GTM, skip-nav, CookieConsent
│   │   ├── page.tsx           # Homepage
│   │   ├── who-i-am/
│   │   ├── free-for-charity/
│   │   ├── psu-arl-referral-program/
│   │   ├── wgu-referral-program/
│   │   ├── certification-guides/
│   │   ├── it-project-management-resume-of-clarke-moyer/
│   │   ├── western-governors-university-bs-it/
│   │   ├── clarke-moyer-cissp-certification-passing-guide/
│   │   ├── learn-free-charity/
│   │   ├── personal-project-manager/
│   │   ├── clarke-moyer-world-famous-apple-crisp-recipe/
│   │   ├── fun/
│   │   ├── quotes/            # YouTube embed + business philosophy
│   │   ├── privacy-policy/
│   │   └── cookie-policy/
│   ├── components/
│   │   ├── Navigation.tsx     # Nav with ABOUT dropdown, search → DuckDuckGo
│   │   ├── ContentSection.tsx
│   │   ├── CTAButtons.tsx
│   │   ├── cookie-consent/    # Cookie banner + preferences modal (GA4 gated)
│   │   └── cookie-preferences-button/  # Footer client component
│   ├── types/
│   │   └── global.d.ts        # Window.openCookiePreferences type
│   └── lib/
│       └── content.ts         # Markdown/frontmatter utilities
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── images/
│   └── wp-content/            # Legacy WordPress media (preserved)
├── .env.example               # All env vars documented
├── jest.config.cjs
├── jest.setup.js
├── playwright.config.ts
├── lighthouserc.json
└── next.config.js
```

---

## Analytics & Tracking

### Google Tag Manager (`GTM-5JL6TDQW`)
- Loaded via `next/script` in `layout.tsx` with `afterInteractive` strategy
- Noscript iframe fallback in body
- Container manages all tags — add new tracking tags via GTM UI, not code

### Google Analytics 4 (`G-C2Q1HC0GVQ`)
- Property: 362129069 | Account: 17425922 (www.clarkemoyer.com)
- Loaded by the `CookieConsent` component **only after user grants analytics consent**
- Also configurable via GTM (recommended: add GA4 config tag with consent trigger)
- `anonymize_ip: true` set by default

### Consent Architecture
The `CookieConsent` component (`src/components/cookie-consent/index.tsx`):
- Shows banner on first visit
- Stores preferences in `localStorage` + `document.cookie` (dual write for fallback)
- Fires `consent_update` dataLayer events GTM can listen to
- `necessary` cookies always forced `true` even if localStorage is tampered
- Focus trap, Escape-to-close, and proper ARIA on modal
- `window.openCookiePreferences()` allows footer button to reopen from any page

---

## URL Structure & Redirects

All canonical WordPress URLs are preserved. Old short slugs redirect client-side:

| Old slug | Canonical URL |
|---|---|
| `/certification/` | `/certification-guides/` |
| `/charity/` | `/free-for-charity/` |
| `/education/` | `/western-governors-university-bs-it/` |
| `/resume/` | `/it-project-management-resume-of-clarke-moyer/` |
| `/psu-arl-referral/` | `/psu-arl-referral-program/` |
| `/wgu-referral/` | `/wgu-referral-program/` |

**Note:** These are client-side Next.js redirects (not HTTP 301s). True 301s must be
configured in **Cloudflare Bulk Redirects** before DNS cutover for SEO link equity transfer.

---

## Cloudflare Configuration (Pre-Cutover Checklist)

### Bulk Redirects (Traffic → Bulk Redirects)
Add 301s for all old slug pairs listed above.

### Transform Rules — Response Headers (all requests)
| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

### SSL/TLS
- Mode: Full (strict)
- Always Use HTTPS: On
- HSTS: On, max-age 6 months
- Minimum TLS: 1.2

### DNS Cutover
Point `clarkemoyer.com` A/CNAME records to GitHub Pages IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## Google Search Console

- Verify via **Cloudflare DNS TXT record** (survives the WordPress→Next.js cutover)
- DNS record: Type TXT, Name `@`, Value `google-site-verification=XXXXXXX`
- After cutover: submit `https://clarkemoyer.com/sitemap.xml`

---

## Testing

### Unit Tests (Jest)
```bash
npm test                 # Run all unit tests
npm run test:coverage    # With coverage report
```
- `CookieConsent` — show/hide, localStorage, axe accessibility
- `Navigation` — renders, search link, ARIA
- Page `metadata` — title + description on all key pages

### E2E Tests (Playwright)
```bash
npm run build && npm run test:e2e
```
- All 16 pages return 200
- Cookie consent full flow (accept/decline/customize/persist/modal)
- Old slug redirects
- Footer copyright + policy links
- No broken images
- SEO: titles, descriptions, sitemap, robots.txt

### Lighthouse CI
Runs post-deploy via `.github/workflows/lighthouse.yml`.
Thresholds: Performance ≥55%, Accessibility ≥90%, Best Practices ≥65%, SEO ≥95%

---

## Accessibility

- Skip-to-content link as first focusable element in `<body>`
- `<div id="main-content" tabIndex={-1}>` as skip target (avoids nested `<main>` issue)
- Navigation: search is `<a>` not `<button>`, decorative SVGs have `aria-hidden`
- Cookie modal: focus trap, Escape-to-close, `aria-modal`, `aria-labelledby`
- YouTube embeds: focus moves to iframe on activation, play icon `aria-hidden`

---

## Common Issues

| Issue | Fix |
|---|---|
| `type: module` conflict with Jest | Use `jest.config.cjs` not `jest.config.js` |
| `marked` ESM breaks jsdom | Mock in `__mocks__/marked.cjs` |
| `next/script` breaks jsdom | Mock in `__mocks__/next-script.cjs` |
| Build fails on GitHub Pages | Ensure `USE_BASE_PATH: false` in workflow |
| Cookie banner shows on return visit | Clear `localStorage` key `cookie-consent` |
