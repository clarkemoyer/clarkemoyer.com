# Deployment Guide

## Current Configuration

- **Production URL:** `https://clarkemoyer.com` — live on GitHub Pages
- **Hosting:** GitHub Pages (static export via `next build`)
- **CDN/Proxy:** GitHub Pages direct serving; Cloudflare records must remain DNS-only (not proxied)

---

## Deployment Modes

The site supports two modes depending on where it's served from.

### 1. Custom Domain Mode (Current)

Used when serving from the custom production domain (`clarkemoyer.com`).

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

| Variable                        | Value                     | Purpose                     |
| ------------------------------- | ------------------------- | --------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-C2Q1HC0GVQ`            | Google Analytics 4          |
| `NEXT_PUBLIC_GTM_ID`            | `GTM-5JL6TDQW`            | Google Tag Manager          |
| `NEXT_PUBLIC_SITE_URL`          | `https://clarkemoyer.com` | Canonical URL / sitemap     |
| `USE_BASE_PATH`                 | `false`                   | Deployment mode (see above) |

### google-prod GitHub Environment

A `google-prod` GitHub Actions environment is planned to hold these vars officially (with environment protection rules). **This environment must be created by the repo owner (`clarkemoyer`) at:**

> Settings → Environments → New environment → `google-prod`

Collaborators cannot create environments on personal repos. Once created, the four vars above should move there from the inline `env:` block in `deploy.yml`.

---

## Automated Deployment (`deploy.yml`)

Triggers on every push to `main` (also supports `workflow_dispatch`).

**Steps:**

1. Checkout source
2. Setup Node.js 24 with npm cache
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

Production currently resolves to GitHub Pages. Expected records are:

```
# Apex domain (A records)
A   185.199.108.153
A   185.199.109.153
A   185.199.110.153
A   185.199.111.153

# www subdomain
CNAME   www   clarkemoyer.github.io
```

Cloudflare may host the DNS zone, but its proxy must remain disabled for these records. The orange-cloud/proxied mode is not part of the production architecture; traffic should go directly to GitHub Pages so GitHub owns HTTPS termination and certificate management.

---

## Routine Production Verification

Run these checks during routine status reviews and after any deployment or DNS change:

1. Confirm `http://clarkemoyer.com` redirects to `https://clarkemoyer.com/` and the HTTPS endpoint returns `200`.
2. Confirm response headers identify GitHub Pages rather than a Cloudflare proxy.
3. Confirm apex DNS resolves to GitHub Pages addresses and `www` remains a CNAME to `clarkemoyer.github.io`.
4. Confirm `https://clarkemoyer.com/robots.txt` and `https://clarkemoyer.com/sitemap.xml` both return `200`.
5. Confirm `robots.txt` contains `Sitemap: https://clarkemoyer.com/sitemap.xml`.
6. Parse the sitemap as XML and check for duplicate URLs before submitting it to Google Search Console.

Example PowerShell checks:

```powershell
curl.exe -I http://clarkemoyer.com
curl.exe -I https://clarkemoyer.com
curl.exe -I https://clarkemoyer.com/robots.txt
curl.exe -I https://clarkemoyer.com/sitemap.xml
Resolve-DnsName clarkemoyer.com -Type A
Resolve-DnsName www.clarkemoyer.com -Type CNAME
$sitemap = [xml](Invoke-WebRequest https://clarkemoyer.com/sitemap.xml).Content
$sitemap.urlset.url.loc | Group-Object | Where-Object Count -gt 1
```

Verified on 2026-09-12: HTTP redirected to HTTPS with `301`; HTTPS, `robots.txt`, and `sitemap.xml` returned `200` from `GitHub.com`; the GitHub Pages API reported `https_enforced: true` and an approved certificate; apex A records resolved to the four GitHub Pages IPv4 addresses; and `www` resolved by CNAME to `clarkemoyer.github.io`.

## Remaining Owner-Side Actions

- [ ] **Search Console** — submit/refresh `https://clarkemoyer.com/sitemap.xml` and inspect/request indexing for key canonical pages.
- [ ] **GitHub environment (optional)** — create `google-prod` and move the public build variables from the workflow if environment scoping is desired.

---

## Troubleshooting

**Images 404 on custom domain** — site was built with `USE_BASE_PATH=true`. Rebuild with `USE_BASE_PATH=false` (or unset).

**Images 404 on GitHub Pages subdirectory** — site was built without `USE_BASE_PATH`. Rebuild with `USE_BASE_PATH=true`.

**SSL not provisioning** — remove custom domain from GitHub Pages settings, wait 5 min, re-add it.

**Custom domain not working** — verify `public/CNAME` file exists and contains the correct domain; confirm DNS has propagated (24–48h).
