# Image Testing

## Current Approach

Image loading is tested via Playwright E2E: **`tests/image-loading.spec.ts`**

This test runs against the built site and verifies that all key images load without errors (no 404s, no broken `<img>` elements). It is the canonical, authoritative image test.

Run it via:

```bash
# Run all E2E tests (includes image loading)
npm run test:e2e

# Or run directly with Playwright
npx playwright test tests/image-loading.spec.ts
```

### Legacy Scripts

`npm run test:images` and `npm run test:images:github` may still exist in `package.json`. These were earlier custom validation scripts that checked HTML output for basePath correctness. They are superseded by the Playwright E2E approach and should not be relied on as the primary image test.

---

## How Images Work in This Project

### Next.js Image Component

All images use the Next.js `<Image>` component. Because the site is a fully static export, image optimization is disabled:

```js
// next.config.js
images: {
  unoptimized: true,
}
```

This means images are served as-is with no server-side resizing or format conversion — required for static hosting on GitHub Pages.

### Local Images

Static images live in two directories under `public/`:

- **`public/images/`** — primary images (hero photo, logos, headshots, etc.)
- **`public/wp-content/`** — WordPress legacy assets preserved at their original paths for URL compatibility

These are served at root-relative paths in custom domain mode (e.g., `/images/photo.jpg`).

### YouTube Thumbnails

YouTube thumbnails are fetched at runtime from `img.youtube.com`. This domain is explicitly allowed in `next.config.js` via `remotePatterns`:

```js
images: {
  unoptimized: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'img.youtube.com',
    },
  ],
}
```

---

## Deployment Modes and Image Paths

| Mode | `USE_BASE_PATH` | Image path example |
|---|---|---|
| Custom domain (current) | `false` / unset | `/images/photo.jpg` |
| GitHub Pages subdirectory | `true` | `/clarkemoyer.com/images/photo.jpg` |

See `docs/DEPLOYMENT.md` for full details on deployment modes.

---

## Adding New Images

1. Place the file in `public/images/` (or `public/wp-content/` for legacy paths)
2. Reference via `<Image src="/images/filename.jpg" ... />` in your component
3. Run `npm run test:e2e` to confirm it loads without errors
