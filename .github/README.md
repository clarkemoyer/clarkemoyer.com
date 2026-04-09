# GitHub Configuration and CI/CD

This directory contains GitHub Actions workflows and GitHub-specific configuration for the clarkemoyer.com Next.js site.

## Directory Structure

```
.github/
├── workflows/
│   ├── deploy.yml        # Deploy to GitHub Pages on push to main
│   ├── ci.yml            # Lint + test + build + Playwright E2E on PRs
│   ├── codeql.yml        # Security scanning (weekly + push/PR)
│   ├── lighthouse.yml    # Post-deploy Perf/A11y/SEO scoring
│   └── nextjs.yml        # (legacy, unused)
├── dependabot.yml        # Weekly npm + Actions dependency updates
└── README.md             # This file
```

---

## Workflows

### `deploy.yml` — Deploy to GitHub Pages

**Triggers:** Push to `main`, `workflow_dispatch`

Builds the Next.js static export and deploys to GitHub Pages. Environment variables (`NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_SITE_URL`, `USE_BASE_PATH`) are set inline in the `env:` block because they are public tracking IDs, not secrets.

See `docs/DEPLOYMENT.md` for full details including the planned `google-prod` environment.

### `ci.yml` — Continuous Integration

**Triggers:** Pull requests to `main`, push to `main`, `workflow_dispatch`

Runs in sequence:
1. `npm run lint` — ESLint
2. `npm test` — Jest unit tests
3. `npm run build` — Next.js static export
4. Playwright install (Chromium only)
5. `npm run test:e2e` — Playwright E2E tests (includes image loading)

Uploads build artifacts on failure for debugging.

### `codeql.yml` — Security Scanning

**Triggers:** Push to `main`, pull requests to `main`, weekly on Monday at 23:17 UTC

Runs GitHub's CodeQL analysis on `javascript-typescript`. Results appear in the Security tab under Code scanning alerts.

### `lighthouse.yml` — Lighthouse CI

**Triggers:** After a successful `deploy.yml` run on `main`, pull requests to `main`, `workflow_dispatch`

Runs Lighthouse against the deployed site and reports Perf/Accessibility/SEO/Best Practices scores. Posts results as a PR comment on pull requests.

### `dependabot.yml` — Dependency Updates

Configured for weekly automated dependency PRs:
- **npm** packages
- **GitHub Actions** versions

---

## Environment and Permissions Notes

GitHub Actions environments (e.g., `google-prod`) can only be created by the **repository owner** on personal repos. Collaborators (like `cbmagent`) can use environments but cannot create them.

To create the `google-prod` environment:
> `clarkemoyer` → Settings → Environments → New environment → `google-prod`

Once created, the four build-time env vars can be scoped to that environment for better access control.
