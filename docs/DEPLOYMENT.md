# Deployment Guide

## Current Configuration

- **Staging URL:** `https://staging.clarkemoyer.com` ✅ Live
- **Production URL:** `https://clarkemoyer.com` — pending DNS cutover
- **Hosting:** GitHub Pages (static export via `next export`)
- **CDN/Proxy:** Cloudflare

---

## Deployment Modes

The site supports two modes depending on where it's served from.

### 1. Custom Domain Mode (Current)

Used when serving from a custom domain (`staging.clarkemoyer.com` or `clarkemoyer.com`).

- `USE_BASE_PATH=false` (or unset)
- Asset paths are root-relative: `/images/photo.jpg`
- `public/CNAME` must contain the domain name

### 2. GitHub Pages Subdirectory Mode

Used when serving from `https://clarkemoyer.github.io/clarkemoyer.com/`.

- `USE_BASE_PATH=true`
- Asset paths include the repo prefix: `/clarkemoyer.com/images/photo.jpg`
- Remove `public/CNAME` if switching to this mode

---

## Environment Variables

These four variables are used at build time. They are set as plain `env:` entries in the workflow (not GitHub secrets) because they are public-facing tracking IDs.

| Variable | Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-C2Q1HC0GVQ` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | `GTM-5JL6TDQW` | Google Tag Manager |
| `NEXT_PUBLIC_SITE_URL` | `https://clarkemoyer.com` | Canonical URL / sitemap |
| `USE_BASE_PATH` | `false` | Deployment mode (see above) |

### google-prod GitHub Environment

A `google-prod` GitHub Actions environment is planned to hold these vars officially (with environment protection rules). **This environment must be created by the repo owner (`clarkemoyer`) at:**

> Settings → Environments → New environment → `google-prod`

Collaborators cannot create environments on personal repos. Once created, the four vars above should move there from the inline `env:` block in `deploy.yml`.

---

## Automated Deployment (`deploy.yml`)

Triggers on every push to `main` (also supports `workflow_dispatch`).

**Steps:**
1. Checkout source
2. Setup Node.js 20 with npm cache
3. `npm ci` — install dependencies
4. `npm run build` — Next.js static export to `out/`; env vars injected here
5. `touch ./out/.nojekyll` — prevents Jekyll processing on GitHub Pages
6. Upload `out/` as Pages artifact
7. Deploy to GitHub Pages

The `deploy` job runs in the `github-pages` environment and requires `pages: write` + `id-token: write` permissions for OIDC deployment.

---

## Manual Deployment

```bash
# Custom domain build (current mode)
npm run build

# GitHub Pages subdirectory build (alternative)
USE_BASE_PATH=true npm run build

# Serve locally to verify output
npx serve out/
```

---

## DNS Records for GitHub Pages

When cutting over production, point `clarkemoyer.com` to GitHub Pages:

```
# Apex domain (A records)
A   185.199.108.153
A   185.199.109.153
A   185.199.110.153
A   185.199.111.153

# www subdomain
CNAME   www   clarkemoyer.github.io

# staging (already live)
CNAME   staging   clarkemoyer.github.io
```

---

## Cloudflare Pre-Cutover Checklist

Before switching DNS to point `clarkemoyer.com` at GitHub Pages:

- [ ] **Bulk Redirects** — add 301 rules for all old WordPress slugs (see `content/gap-analysis.md`)
- [ ] **Security response headers** — add `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` via Transform Rules or Workers
- [ ] **SSL/TLS mode** — set to **Full (strict)**
- [ ] **HSTS** — enable via SSL/TLS → Edge Certificates → HTTP Strict Transport Security
- [ ] **DNS records** — add A/CNAME records above pointing to GitHub Pages IPs
- [ ] **Pause Cloudflare proxy** during GitHub Pages SSL provisioning if needed, then re-enable

---

## Troubleshooting

**Images 404 on custom domain** — site was built with `USE_BASE_PATH=true`. Rebuild with `USE_BASE_PATH=false` (or unset).

**Images 404 on GitHub Pages subdirectory** — site was built without `USE_BASE_PATH`. Rebuild with `USE_BASE_PATH=true`.

**SSL not provisioning** — remove custom domain from GitHub Pages settings, wait 5 min, re-add it.

**Custom domain not working** — verify `public/CNAME` file exists and contains the correct domain; confirm DNS has propagated (24–48h).
