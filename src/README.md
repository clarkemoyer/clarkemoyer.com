# Source Code Architecture

## Directory Structure

```
src/
├── app/                          # Next.js App Router pages and root layout
│   ├── globals.css               # Global styles, Tailwind imports
│   ├── layout.tsx                # Root layout (GTM, skip-to-content, CookieConsent)
│   ├── page.tsx                  # Homepage
│   ├── who-i-am/                 # About / bio page
│   ├── family/                   # Family page
│   ├── fun/                      # Personal interests
│   ├── cooking/                  # Cooking / recipes
│   ├── quotes/                   # Quotes page
│   ├── certification/            # Certifications (redirect)
│   ├── certification-guides/     # Certification guides
│   ├── clarke-moyer-cissp-certification-passing-guide/  # CISSP guide
│   ├── it-project-management-resume-of-clarke-moyer/    # Resume
│   ├── resume/                   # Resume (redirect)
│   ├── western-governors-university-bs-it/              # WGU degree page
│   ├── education/                # Education (redirect)
│   ├── wgu-referral-program/     # WGU referral
│   ├── wgu-referral/             # WGU referral (redirect)
│   ├── psu-arl-referral-program/ # PSU-ARL referral
│   ├── psu-arl-referral/         # PSU-ARL referral (redirect)
│   ├── free-for-charity/         # Free For Charity nonprofit page
│   ├── charity/                  # Charity (redirect)
│   ├── learn-free-charity/       # Learning resources (nonprofit)
│   ├── personal-project-manager/ # Personal project manager (stub)
│   ├── privacy-policy/           # Privacy policy
│   └── cookie-policy/            # Cookie policy
├── components/
│   ├── Navigation.tsx            # Site-wide navigation bar
│   ├── ContentSection.tsx        # Reusable content section wrapper
│   ├── CTAButtons.tsx            # Call-to-action buttons (LinkedIn, contact)
│   ├── cookie-consent/           # Cookie consent banner component
│   └── cookie-preferences-button/ # Button to re-open cookie preferences
├── types/
│   └── global.d.ts               # Global type augmentations
└── lib/
    └── content.ts                # Markdown content loader (Gray Matter + Marked)
```

---

## Key Patterns

### Root Layout (`layout.tsx`)

The root layout includes:
- **Google Tag Manager** — `<script>` in `<head>` and `<noscript>` iframe in body, gated on `NEXT_PUBLIC_GTM_ID`
- **Skip-to-content link** — accessible keyboard shortcut to main content
- **`<CookieConsent>`** — consent banner rendered at layout level, available on all pages
- **`<div id="main-content" tabIndex={-1}>`** — wraps page content; receives focus on skip-link activation

> **Why `<div>` and not `<main>`?** Pages render their own `<main>` elements. Using `<div>` here avoids a nested `<main>` landmark, which would be invalid HTML and an accessibility violation.

### Cookie Consent

- `cookie-consent/` — banner with Accept/Decline; stores choice in `localStorage`
- `cookie-preferences-button/` — re-opens preferences (shown in footer/nav after initial choice)
- `Window.openCookiePreferences` typed in `src/types/global.d.ts`

Google Analytics 4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) only fires after consent is granted.

### Content Loading

Most newer pages (who-i-am, CISSP guide, etc.) have content written **inline in `page.tsx`** rather than loading from Markdown files. The `lib/content.ts` loader is used by older pages that still read from `content/sections/`. See `content/README.md` for details.

### Static Export

All pages are statically generated at build time (`output: 'export'` in `next.config.js`). No server-side rendering or API routes are used.
