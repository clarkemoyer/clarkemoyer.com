# Migration Gap Analysis — RESOLVED

All items from the original gap analysis (Issue #41) have been addressed.
See the closed issue for history: https://github.com/clarkemoyer/clarkemoyer.com/issues/41

## Current Status (May 2026)

- Live `https://clarkemoyer.com` serves the Next.js/GitHub Pages build ✅
- GitHub Pages custom domain is `clarkemoyer.com` ✅
- DNS resolves to GitHub Pages IPv4/IPv6 addresses ✅
- All original short WordPress URLs are canonical and live ✅
- Longer descriptive URLs remain available as in-app aliases ✅
- Per-page SEO metadata on all pages ✅
- sitemap.xml and robots.txt present ✅
- Cookie consent system with privacy/cookie policy pages ✅
- Google Analytics 4 (G-C2Q1HC0GVQ) wired behind consent gate ✅
- Google Tag Manager (GTM-5JL6TDQW) in layout ✅
- Full test suite: Jest + Playwright + Lighthouse CI ✅

## Production Decisions and Remaining Owner-Side Polish

- GitHub Pages **Enforce HTTPS** is enabled and the certificate is approved (verified 2026-09-12).
- Production serves directly from GitHub Pages. Cloudflare records must remain DNS-only; do not enable the proxy.
- Verify HTTPS, DNS, `robots.txt`, and `sitemap.xml` during routine status reviews using `docs/DEPLOYMENT.md`.
- Submit/refresh `https://clarkemoyer.com/sitemap.xml` in Google Search Console and inspect key canonical pages after material content changes.

## Canonical URL Decision (May 2026)

Clarke requested the original short WordPress URLs remain canonical for phone readability:

- `/certification/`
- `/charity/`
- `/education/`
- `/resume/`
- `/psu-arl-referral/`
- `/wgu-referral/`

The longer descriptive URLs are retained as in-app redirects/backward-compatible aliases, not as canonical URLs.
