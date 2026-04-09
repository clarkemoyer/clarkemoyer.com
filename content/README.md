# Content Directory

```
content/
├── sections/           # Markdown files for page content (some pages)
├── wordpress-legacy/   # Preserved WordPress source content (reference only)
├── gap-analysis.md     # Migration gap analysis (resolved — see file for status)
└── README.md           # This file
```

---

## `content/sections/`

Markdown files consumed by `src/lib/content.ts` at build time. Each file corresponds to a page route (e.g., `resume.md` → `/it-project-management-resume-of-clarke-moyer/`).

**Important:** Most newer pages (who-i-am, CISSP guide, WGU degree, referrals, privacy/cookie policy, etc.) have content written **directly in their `page.tsx`** files rather than loading from Markdown here. The `sections/` directory is partially superseded by this inline approach. Over time, pages may continue moving to inline content.

Pages that still use `sections/` files: resume, family, fun, and a few others — check `src/lib/content.ts` callers to confirm which pages actively load from here.

### File Format

```markdown
---
title: "Page Title"
description: "Meta description for SEO"
---

Markdown content here...
```

---

## `content/wordpress-legacy/`

Complete preservation of the original WordPress site content, retained for reference. This directory is **not used at runtime** — the Next.js build does not read from it.

Contents:
- `pages/` — original WordPress page HTML files
- `uploads/` — WordPress media files organized by year (2012, 2020, 2021, 2023)
- `extracted-content/` — Markdown versions converted from WordPress HTML
- `original-homepage.html` — full backup of the WordPress homepage

These files serve as a historical archive and fallback reference if content questions arise during the migration.

---

## `content/gap-analysis.md`

Tracks migration parity between WordPress and Next.js. As of April 2026, all original gap analysis items from Issue #41 have been resolved. See the file for current pre-cutover checklist.
