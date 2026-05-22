# 🌐 clarkemoyer.com

<p align="center">
  <img src="public/images/logo.png" alt="Clarke Moyer Logo" width="120" style="border-radius: 50%; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" onerror="this.style.display='none'" />
</p>

<h3 align="center">Clarke Moyer's Personal Website & Portfolio</h3>

<p align="center">
  A premium, high-performance static website built with the modern Next.js App Router, React 19, TypeScript, and Tailwind CSS. Built to be ultra-fast, fully responsive, and securely deployed to GitHub Pages.
</p>

<p align="center">
  <a href="https://clarkemoyer.com"><strong>Explore the Live Site »</strong></a>
  <br />
  <br />
  <a href="https://github.com/clarkemoyer/clarkemoyer.com/actions/workflows/ci.yml">
    <img src="https://github.com/clarkemoyer/clarkemoyer.com/actions/workflows/ci.yml/badge.svg" alt="CI Workflow Status" />
  </a>
  <a href="https://github.com/clarkemoyer/clarkemoyer.com/actions/workflows/deploy.yml">
    <img src="https://github.com/clarkemoyer/clarkemoyer.com/actions/workflows/deploy.yml/badge.svg" alt="Deploy Workflow Status" />
  </a>
  <a href="https://github.com/clarkemoyer/clarkemoyer.com/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/clarkemoyer/clarkemoyer.com?color=blue" alt="License" />
  </a>
</p>

---

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16** (App Router) | Static export workflow with React 19 & TypeScript |
| **Styling** | **Tailwind CSS** | Premium utility-first styling with responsive layouts |
| **Deployment** | **GitHub Actions + Pages** | Fully automated build, export, and global edge delivery |
| **DNS / CDN** | **Cloudflare / GitHub Pages** | Edge optimization, custom domain mapping, security headers |
| **Analytics** | **GTM + GA4** | Google Tag Manager (`GTM-5JL6TDQW`) and Google Analytics (`G-C2Q1HC0GVQ`) |
| **Testing** | **Jest + Playwright** | Full unit testing, integration tests, and multi-browser E2E testing |
| **Performance** | **Lighthouse CI** | Automated quality auditing for Perf, A11y, Best Practices, and SEO |

---

## 🔄 CI/CD Deployment Pipeline

The website relies on a fully automated, multi-tiered CI/CD pipeline built with GitHub Actions. The flow from local coding to production delivery and continuous audit is structured as follows:

```mermaid
graph TD
    A[💻 Local Development] -->|git push| B(🐙 Pull Request on GitHub)
    
    subgraph "🔍 Pull Request validation (ci.yml)"
        B --> C{CI Actions}
        C --> D[💅 Lint & Format Check]
        C --> E[🧪 Jest Unit & Integration Tests]
        C --> F[📦 Next.js Static Export Build]
        C --> G[🎭 Playwright End-to-End Tests]
    end

    G -->|Merge to main| H[🚀 Production Deployment (deploy.yml)]
    
    subgraph "🌐 Edge Release & Performance Audit (deploy.yml & lighthouse.yml)"
        H --> I[📦 Production Next.js Build]
        I --> J[📁 Static Export to /out]
        J --> K[☁️ Deploy to GitHub Pages Edge]
        K --> L[📊 Lighthouse CI Performance Audit]
        L --> M{Scores Check}
        M -->|Pass| N[🎉 Live at clarkemoyer.com]
        M -->|Fail| O[⚠️ Alert Developer]
    end
    
    style A fill:#eaebff,stroke:#5c6bc0,stroke-width:2px;
    style B fill:#fff3e0,stroke:#ffb74d,stroke-width:2px;
    style K fill:#e8f5e9,stroke:#81c784,stroke-width:2px;
    style N fill:#e8f8f5,stroke:#2ecc71,stroke-width:3px;
    style O fill:#fdebd0,stroke:#e74c3c,stroke-width:2px;
```

---

## 🔑 Environment Variables

These are **publicly accessible tracking IDs** and configuration flags. They are hardcoded inside `.github/workflows/deploy.yml` for automated deployment and documented in `.env.example` for local matching.

| Variable | Value | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-C2Q1HC0GVQ` | Google Analytics 4 tracking |
| `NEXT_PUBLIC_GTM_ID` | `GTM-5JL6TDQW` | Google Tag Manager container injection |
| `NEXT_PUBLIC_SITE_URL` | `https://clarkemoyer.com` | Primary canonical domain for SEO / metadataBase |
| `USE_BASE_PATH` | `false` | Path prefix configuration (false because a custom domain is mapped) |

### 🔒 Transitioning to `google-prod` Environment (Recommended)

To streamline and decouple configurations from build scripts, these variables should be moved to a protected GitHub Actions environment:

1. Navigate to your repository on GitHub: `github.com/clarkemoyer/clarkemoyer.com` → **Settings** → **Environments**.
2. Click **New environment** and name it `google-prod`.
3. Restrict deployment permissions to the `main` branch.
4. Add the four public variables listed in the table above as **Environment variables** (not secrets).
5. Update your `deploy.yml` workflow file to reference `environment: google-prod`.

> [!NOTE]
> GitHub limits custom environment creation to the repository owner on personal accounts. Collaborators and integrated automated agents do not have permission to execute this step on your behalf.

To start local development, replicate the environment configuration:
```bash
cp .env.example .env.local
```

---

## 💻 Local Development Workflow

Follow these steps to set up, run, and test the project locally.

### 📦 Setup & Commands

```bash
# 1. Install production and development dependencies deterministically
npm ci

# 2. Run the hot-reloading development server
npm run dev
# Server will start on http://localhost:3000

# 3. Format files using Prettier configuration
npm run format

# 4. Check for code syntax and structural rules
npm run lint

# 5. Compile and export a static version of the site to the /out folder
npm run build

# 6. Run the local preview server of the built /out folder (for accurate E2E testing)
npm run preview
```

---

## 📊 Analytics & Privacy Architecture

The repository handles user behavior measurement ethically and in full compliance with modern privacy standards.

```
┌────────────────────────────────────────────────────────┐
│                   Visitor Arrives                      │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
              ┌──────────────────────────┐
              │ GTM Loaded (Inactive)    │
              └────────────┬─────────────┘
                           │
                           ▼
             ┌────────────────────────────┐
             │ Cookie Consent Banner      │
             └─────────────┬──────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
      [Accept Cookies]           [Decline Cookies]
             │                           │
             ▼                           ▼
┌─────────────────────────┐ ┌──────────────────────────┐
│ GTM Updates Consent     │ │ GTM Remains Blocked      │
│ GA4 Initiates Sessions  │ │ Zero Cookies Dropped     │
└─────────────────────────┘ └──────────────────────────┘
```

### 🏷️ Google Tag Manager (`GTM-5JL6TDQW`)
Integrated inside `src/app/layout.tsx` using Next.js's optimized `next/script` library with the `afterInteractive` loading strategy. This loads the tag manager container efficiently without blocking critical UI rendering.

### 📈 Google Analytics 4 (`G-C2Q1HC0GVQ`)
- **Management Account:** `17425922` | **Data Stream Property:** `362129069`
- **Privacy Enforcement:** Configured with `anonymize_ip: true` by default.
- **Dynamic Activation:** Google Analytics is **only** loaded and executed once the user explicitly grants analytics consent via the interactive cookie banner.

### 🍪 Cookie Consent Flow
- A non-intrusive cookie consent banner floats at the bottom of the screen offering choices: **Accept All**, **Decline All**, or **Customize**.
- User choices are saved in `localStorage` and synchronized to the browser's `document.cookie`.
- The banner triggers custom `consent_update` events via the GTM `dataLayer` to dynamically update GTM Consent Mode settings.
- A "Cookie Preferences" link is embedded in the website footer, allowing visitors to instantly reopen the preference panel and modify their settings at any time.

---

## 📁 Project Structure

```
clarkemoyer.com/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml            # Build & deploy to GitHub Pages on push to main
│   │   ├── ci.yml                # PR validation: lint, format, build, unit/E2E tests
│   │   ├── codeql.yml            # Security analysis scanning pipeline
│   │   └── lighthouse.yml        # Lighthouse CI core web vitals check post-deployment
│   ├── copilot-instructions.md   # Advanced environment instruction set for AI tools
│   └── dependabot.yml            # Weekly dependency updates
├── __mocks__/                    # System-level test mocks (e.g., assets, scripts)
├── __tests__/                    # Jest unit and integration test suite
├── tests/                        # Playwright comprehensive E2E test scripts
├── src/
│   ├── app/                      # Next.js App Router root & page structures
│   │   ├── layout.tsx            # Global layout: analytics loader, skip-navigation, cookie banner
│   │   ├── page.tsx              # Interactive Home portfolio landing page
│   │   ├── who-i-am/             # Career summary and narrative section
│   │   ├── free-for-charity/     # Philanthropy, open-source work, and support details
│   │   ├── psu-arl-referral-program/
│   │   ├── wgu-referral-program/
│   │   ├── certification-guides/
│   │   ├── clarke-moyer-cissp-certification-passing-guide/
│   │   ├── learn-free-charity/
│   │   ├── personal-project-manager/
│   │   ├── clarke-moyer-world-famous-apple-crisp-recipe/
│   │   ├── it-project-management-resume-of-clarke-moyer/
│   │   ├── western-governors-university-bs-it/
│   │   ├── fun/                  # Sandbox experiments and entertainment projects
│   │   ├── quotes/               # Compiled source book of inspiration
│   │   ├── privacy-policy/       # Terms of service and cookie privacy policy statements
│   │   └── cookie-policy/
│   ├── components/
│   │   ├── Navigation.tsx        # Global responsive header navigation
│   │   ├── cookie-consent/       # Cookie banner UI, local storage logic, GA4 loader
│   │   └── cookie-preferences-button/
│   └── types/global.d.ts         # TypeScript global namespaces and custom declarations
├── public/                       # Statics including sitemap.xml, robots.txt, and portfolio images
├── .env.example                  # Environment configuration template
├── jest.config.cjs               # Unit test execution controls
├── playwright.config.ts          # E2E browser automation setup
└── lighthouserc.json             # Core Web Vitals thresholds and validation configs
```

---

## 🔗 URL Architecture & Redirects

To prevent broken links, retain authority, and ensure high SEO rankings, WordPress-style URLs are actively matched and map to highly descriptive Next.js paths.

> [!TIP]
> The canonical short URLs are designed to be shared verbally or printed. The longer aliases exist as fallback redirects for inbound backlinks and browser bookmarks.

| Canonical Short URL | Target Redirect Alias Page | Purpose |
| :--- | :--- | :--- |
| `/certification/` | `/certification-guides/` | Exam strategies & guides |
| `/charity/` | `/free-for-charity/` | FFC guidelines & active projects |
| `/education/` | `/western-governors-university-bs-it/` | WGU degree journey & courses |
| `/resume/` | `/it-project-management-resume-of-clarke-moyer/` | Interactive curriculum vitae |
| `/psu-arl-referral/` | `/psu-arl-referral-program/` | Penn State ARL recruitment rules |
| `/wgu-referral/` | `/wgu-referral-program/` | WGU academic referral link |

---

## 🧪 Comprehensive Quality Assurance

To ensure excellent accessibility, top-tier performance, and zero regressions, this project uses a multi-layered testing suite.

### 🃏 Jest: Unit & Functional Tests
Used for component isolation, utility logic validation, and event handling.
```bash
# Run unit test suite
npm test

# Run tests with complete coverage reports
npm run test:coverage
```

### 🎭 Playwright: End-to-End Tests
Automates real-browser rendering tests across Chromium, Firefox, and WebKit engines to verify routing, cookie banner clicks, layout responsiveness, and dark mode triggers.
```bash
# Must build the static package first
npm run build

# Run Playwright suite in headless or UI mode
npm run test:e2e
```

### ⚡ Lighthouse CI Web Vitals Targets
Integrated directly into the deployment process, the build is audited across performance, accessibility, code quality, and SEO guidelines. The pipeline enforces these strict thresholds:

```
┌──────────────────────────────────────────────┐
│  Performance (Speed index, LCP)     ≥ 55%    │
├──────────────────────────────────────────────┤
│  Accessibility (A11y ARIA rules)    ≥ 90%    │
├──────────────────────────────────────────────┤
│  Best Practices (Security, HTML)    ≥ 65%    │
├──────────────────────────────────────────────┤
│  SEO (Meta tags, Indexability)      ≥ 95%    │
└──────────────────────────────────────────────┘
```

---

## 🏁 Owner-Side Post-Cutover Polish

The codebase is fully tested, built, and serving successfully from the custom domain. If you are the owner, complete the following list to finalize search visibility and security integrations:

- [ ] **Enforce HTTPS in GitHub Settings:** Navigate to your repo settings page, head to **Pages**, and ensure the **Enforce HTTPS** box is checked. (The GitHub Pages API might temporarily show `enforce_https: null` while propagating, but the checkbox must remain active).
- [ ] **Configure Cloudflare Edge Security (Optional but Recommended):** If placing Cloudflare back in front of GitHub Pages, set up edge **Transform Rules** or a **Cloudflare Worker** to force these security response headers:
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy` (CSP)
  - `X-Frame-Options: DENY` (Anti-Clickjacking)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: geolocation=(), camera=(), microphone=()`
- [ ] **SEO Link Redirects in Cloudflare Rules:** Configure `301 Permanent Redirects` at the CDN edge from long canonical aliases back to the preferred shorter, canonical WordPress-style routes.
- [ ] **Submit Sitemap to Google Search Console:** Navigate to GSC, log in, and register `https://clarkemoyer.com/sitemap.xml` to trigger rapid site-wide indexing.

---

## 📄 License & Distribution

Distributed under the copyleft **AGPL-3.0 License**. See [LICENSE](LICENSE) for more information.

---

## 👤 Project Author & Contact

**Clarke Moyer**
- **LinkedIn:** [linkedin.com/in/clarkemoyer](https://linkedin.com/in/clarkemoyer)
- **Website:** [clarkemoyer.com](https://clarkemoyer.com)
- **Portfolio Repository:** [github.com/clarkemoyer/clarkemoyer.com](https://github.com/clarkemoyer/clarkemoyer.com)
