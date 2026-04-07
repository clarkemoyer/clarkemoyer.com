# WordPress → Next.js Migration Gap Analysis
*Issue #41 — Last updated: 2026-04-07*

## Summary

This document tracks the migration parity between clarkemoyer.com (WordPress) and the Next.js staging site at staging.clarkemoyer.com.

---

## ✅ Pages Migrated (WordPress → Next.js)

| WordPress URL | Next.js Route | Status |
|---|---|---|
| / | /  | ✅ Complete |
| /who-i-am/ | /who-i-am/ | ✅ Complete |
| /fun/ | /fun/ | ✅ Complete |
| /certification-guides/ | /certification-guides/ | ✅ Complete |
| /clarke-moyer-cissp-certification-passing-guide/ | /clarke-moyer-cissp-certification-passing-guide/ | ✅ Complete |
| /wgu-referral-program/ | /wgu-referral-program/ | ✅ Complete |
| /psu-arl-referral-program/ | /psu-arl-referral-program/ | ✅ Complete |
| /free-for-charity/ | /free-for-charity/ | ✅ Complete |
| /learn-free-charity/ | /learn-free-charity/ | ✅ Complete |
| /it-project-management-resume-of-clarke-moyer/ | /it-project-management-resume-of-clarke-moyer/ | ✅ Complete |
| /clarke-moyer-world-famous-apple-crisp-recipe/ | /clarke-moyer-world-famous-apple-crisp-recipe/ | ✅ Complete |
| /personal-project-manager/ | /personal-project-manager/ | ✅ Stub (no WP content found) |
| /western-governors-university-bs-it/ | /western-governors-university-bs-it/ | ✅ Complete |
| /family/ | /family/ | ✅ Complete |

## ↩️ Redirects In Place (Old Routes → Canonical WP Slugs)

| Old Next.js Route | Redirects To |
|---|---|
| /resume/ | /it-project-management-resume-of-clarke-moyer/ |
| /certification/ | /certification-guides/ |
| /charity/ | /free-for-charity/ |
| /psu-arl-referral/ | /psu-arl-referral-program/ |
| /wgu-referral/ | /wgu-referral-program/ |
| /education/ | /western-governors-university-bs-it/ |

---

## ⚠️ Known Gaps / Needs Clarke's Input

### Content Gaps
1. **`/personal-project-manager/`** — No WordPress source content found. Page is a stub. Clarke should provide content or confirm this page is no longer needed.
2. **`/cooking/`** — The `/fun/` page links to a `/cooking/` subpage (from original WP). No equivalent exists on staging. Could be a future page or the link should be removed.
3. **`/family/`** — Page exists in Next.js but content quality needs review by Clarke (was generated from markdown, not reviewed against live WP).

### Media / Assets
4. **Hero background image** — Now served from `/images/Grand-Canyon-2019-Family-Photo.jpg` (migrated). Previously loaded from `/wp-content/uploads/2020/08/`.
5. **WP Uploads PDF** — `/it-project-management-resume-of-clarke-moyer/` links to `/wp-content/uploads/2012/05/DCGS-A-Resume-Clarke-Moyer-10-MAR-2014PDF.pdf`. This PDF lives on the WP server — needs to be copied to `public/` and path updated before DNS cutover.
6. **Other `/wp-content/uploads/` references** — Several legacy images referenced in `/fun/` (via WGU logo, hero images) should be audited to ensure all are in `public/images/`.

### Features
7. **Search** — Navigation has a SEARCH button that does nothing. WP had basic search. No equivalent in Next.js.
8. **Comments / Contact Form** — WP had a contact/comments system. No equivalent in Next.js. Clarke should decide if this is needed.
9. **WGU Referral Link** — Currently links to `https://mbsy.co/3ff2tz` (ambassador link). Clarke should verify this is still active.
10. **PSU-ARL Referral form** — Verify the embedded referral content/links are current in `content/sections/psu-arl-referral.md`.

### Technical
11. **`redirect()` in static export** — Next.js `redirect()` in static export mode creates a redirect via HTML meta refresh. This works for users but is not a 301 HTTP redirect. For true SEO-safe redirects, a `_redirects` file (for Netlify/Cloudflare Pages) or a custom 404 handler would be needed. Since this is GitHub Pages, true server-side 301s are not possible without additional infrastructure.

---

## 🔒 Not Applicable / Intentionally Omitted
- WordPress admin (`/wp-admin/`, `/wp-login.php`) — Removed; Next.js site has no CMS
- WordPress REST API endpoints — Not needed for static site
- WordPress plugins functionality (forms, etc.) — To be replaced with static alternatives if needed

