# clarkemoyer.com

Personal website for Clarke Moyer — built with Next.js and deployed to GitHub Pages.

- **Production:** https://clarkemoyer.com — live on the Next.js/GitHub Pages build
- **Repo:** https://github.com/clarkemoyer/clarkemoyer.com
- **Status:** migration/cutover code work is complete; remaining items are owner-side console polish

---

## Technology Stack

- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Actions → static export (`out/`) → GitHub Pages
- **DNS/CDN:** GitHub Pages direct serving today; Cloudflare may be re-enabled for edge headers/redirects
- **Analytics:** Google Tag Manager (`GTM-5JL6TDQW`) + Google Analytics 4 (`G-C2Q1HC0GVQ`)
- **Testing:** Jest + Playwright + Lighthouse CI

---

## Environment Variables

These are **public tracking IDs** — not secrets. They are hardcoded in `.github/workflows/deploy.yml`.

| Variable                        | Value                     | Purpose                                       |
| ------------------------------- | ------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-C2Q1HC0GVQ`            | Google Analytics 4                            |
| `NEXT_PUBLIC_GTM_ID`            | `GTM-5JL6TDQW`            | Google Tag Manager                            |
| `NEXT_PUBLIC_SITE_URL`          | `https://clarkemoyer.com` | Canonical URL / metadataBase                  |
| `USE_BASE_PATH`                 | `false`                   | GitHub Pages basePath (false = custom domain) |

### google-prod Environment (Pending)

These variables should be moved to a GitHub Actions environment named `google-prod` once created by the repo owner:

1. Go to `github.com/clarkemoyer/clarkemoyer.com` → Settings → Environments → **New environment**
2. Name it `google-prod`, restrict to `main` branch
3. Add the four variables above as **Environment variables** (not secrets)
4. Update `deploy.yml` to reference `environment: google-prod`

> GitHub limits environment creation to the repo owner on personal repos.
> Collaborators (including `cbmagent`) cannot create environments via API.

Copy `.env.example` for local development:

```bash
cp .env.example .env.local
```

---

## Local Development

```bash
npm ci                # Install dependencies
npm run dev           # Dev server on http://localhost:3000
npm run build         # Production static export → out/
npm run lint          # ESLint
npm test              # Jest unit tests
npm run test:e2e      # Playwright E2E (requires: npm run build first)
npm run preview       # Serve out/ on port 3000 (for E2E testing)
npm run format        # Prettier
```

---

## Project Structure

```
clarkemoyer.com/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml         # Deploy to GitHub Pages on push to main
│   │   ├── ci.yml             # PR: lint + unit tests + build + E2E
│   │   ├── codeql.yml         # Security scanning
│   │   └── lighthouse.yml     # Perf/a11y/SEO scoring post-deploy
│   ├── copilot-instructions.md  # Full technical reference for AI agents
│   └── dependabot.yml
├── __tests__/                 # Jest unit tests
├── tests/                     # Playwright E2E tests
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root: GTM, skip-nav, CookieConsent
│   │   ├── page.tsx           # Homepage
│   │   ├── who-i-am/
│   │   ├── free-for-charity/
│   │   ├── psu-arl-referral-program/
│   │   ├── wgu-referral-program/
│   │   ├── certification-guides/
│   │   ├── clarke-moyer-cissp-certification-passing-guide/
│   │   ├── learn-free-charity/
│   │   ├── personal-project-manager/
│   │   ├── clarke-moyer-world-famous-apple-crisp-recipe/
│   │   ├── it-project-management-resume-of-clarke-moyer/
│   │   ├── western-governors-university-bs-it/
│   │   ├── fun/
│   │   ├── quotes/
│   │   ├── privacy-policy/
│   │   └── cookie-policy/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── cookie-consent/    # Consent banner + GA4 loader
│   │   └── cookie-preferences-button/
│   └── types/global.d.ts
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── images/
├── .env.example               # All env vars documented
├── jest.config.cjs
├── playwright.config.ts
└── lighthouserc.json
```

---

## Analytics & Tracking

### Google Tag Manager (`GTM-5JL6TDQW`)

Loaded in `layout.tsx` via `next/script afterInteractive`. Manages all tracking tags.
Add new tags via the GTM UI — no code deploys required.

### Google Analytics 4 (`G-C2Q1HC0GVQ`)

- Property: `362129069` | Account: `17425922`
- Loaded **only after user grants analytics consent** via the cookie banner
- `anonymize_ip: true` set by default
- Recommended: also configure a GA4 tag in GTM with a consent trigger

### Cookie Consent

Bottom banner with Accept All / Decline All / Customize.
Stores preferences in `localStorage` + `document.cookie`.
Fires `consent_update` dataLayer events for GTM consent mode.
Footer "Cookie Preferences" button reopens the modal from any page.

---

## Owner-Side Post-Cutover Polish

The live site is already serving from GitHub Pages at `https://clarkemoyer.com`. Remaining items require owner access to GitHub, Cloudflare, or Google Search Console:

- Confirm **Enforce HTTPS** in GitHub Pages settings. HTTPS works, but the Pages API currently returns `enforce_https: null`.
- Decide whether to keep direct GitHub Pages serving or place Cloudflare proxy back in front.
- If using Cloudflare, add response-header Transform Rules / Workers for security headers:
  - `Strict-Transport-Security`
  - `Content-Security-Policy`
  - `X-Frame-Options` or equivalent frame policy
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
- If using Cloudflare, add edge 301 redirects from long alias URLs to short canonical URLs for cleaner SEO.
- Submit or refresh `https://clarkemoyer.com/sitemap.xml` in Google Search Console.

---

## URL Structure

The original short WordPress URLs are canonical for readability when shared verbally.
Longer descriptive routes remain available as redirect aliases for backlinks/bookmarks.

| Canonical URL        | Redirect alias                                   |
| -------------------- | ------------------------------------------------ |
| `/certification/`    | `/certification-guides/`                         |
| `/charity/`          | `/free-for-charity/`                             |
| `/education/`        | `/western-governors-university-bs-it/`           |
| `/resume/`           | `/it-project-management-resume-of-clarke-moyer/` |
| `/psu-arl-referral/` | `/psu-arl-referral-program/`                     |
| `/wgu-referral/`     | `/wgu-referral-program/`                         |

---

## Testing

```bash
npm test                    # Unit tests (Jest)
npm run test:coverage       # With coverage
npm run build && npm run test:e2e   # E2E tests (Playwright)
```

Lighthouse CI runs automatically post-deploy. Thresholds:

- Performance ≥ 55%
- Accessibility ≥ 90%
- Best Practices ≥ 65%
- SEO ≥ 95%

---

## License

AGPL-3.0 — see [LICENSE](LICENSE)

## Author

**Clarke Moyer** · [linkedin.com/in/clarkemoyer](https://linkedin.com/in/clarkemoyer) · [clarkemoyer.com](https://clarkemoyer.com)
