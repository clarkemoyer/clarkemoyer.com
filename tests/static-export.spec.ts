import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Static Export Validation Tests
 *
 * These tests target failure modes unique to Next.js static export
 * (output: 'export'). They run against the live staging URL and
 * verify that the static build is correctly configured.
 *
 * Key config facts:
 *   - output: 'export'
 *   - trailingSlash: true
 *   - images: { unoptimized: true }  ← so /_next/image?url= should NEVER appear
 *   - basePath: '' (custom domain, no subdirectory prefix)
 */

const PAGES = testConfig.pages

// ---------------------------------------------------------------------------
// Test group 1: Image loading — all pages
// ---------------------------------------------------------------------------

test.describe('Image loading — static export compliance', () => {
  for (const path of PAGES) {
    test(`[${path}] no broken images`, async ({ page }) => {
      await page.goto(path)
      // Wait for images to finish loading (handles lazy loading)
      await page.waitForLoadState('networkidle')
      const broken = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          // Only check same-origin/relative images — skip external CDN images
          // (e.g., YouTube thumbnails) that may not load in test environments
          .filter(img => {
            try {
              const url = new URL(img.src)
              return url.hostname === window.location.hostname
            } catch {
              return true // relative URL — check it
            }
          })
          .filter(img => !img.complete || img.naturalWidth === 0)
          .map(img => img.src)
      })
      expect(broken, `Broken images on ${path}: ${JSON.stringify(broken)}`).toEqual([])
    })

    test(`[${path}] no server-side image optimizer URLs`, async ({ page }) => {
      await page.goto(path)
      const serverImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img'))
          .map(img => img.src)
          .filter(src => src.includes('/_next/image?url='))
      })
      expect(
        serverImages,
        `Server image optimizer URLs found on ${path} — static export does not support this`
      ).toEqual([])
    })
  }

  for (const path of PAGES) {
    test(`[${path}] OG image uses absolute URL (if present)`, async ({ page }) => {
      await page.goto(path)
      const ogImage = await page.evaluate(() => {
        const meta = document.querySelector('meta[property="og:image"]')
        return meta?.getAttribute('content') ?? null
      })
      if (ogImage !== null) {
        expect(
          ogImage,
          `og:image on ${path} should be an absolute URL, got: ${ogImage}`
        ).toMatch(/^https?:\/\//)
      }
    })
  }
})

// ---------------------------------------------------------------------------
// Test group 2: Character encoding / mojibake — all pages
// ---------------------------------------------------------------------------

test.describe('Character encoding — mojibake detection', () => {
  for (const path of PAGES) {
    test(`[${path}] no mojibake sequences`, async ({ page }) => {
      await page.goto(path)
      const text = await page.evaluate(() => document.body.innerText)
      expect(text, `Mojibake (â€ sequence) found on ${path}`).not.toMatch(/â€[™˜"â€]/)
      expect(text, `Replacement character â€ found on ${path}`).not.toContain('â€')
      expect(text, `Mojibake (Ã¢â‚¬ pattern) found on ${path}`).not.toMatch(/Ã¢â‚¬/)
    })
  }

  test('UTF-8 charset declared on all pages', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path)
      const charset = await page.evaluate(() => document.characterSet.toLowerCase())
      expect(charset, `Wrong/missing charset on ${path}`).toBe('utf-8')
    }
  })

  test('Apple Crisp apostrophes render correctly', async ({ page }) => {
    await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
    const bodyText = await page.evaluate(() => document.body.innerText)
    expect(bodyText, 'Mojibake apostrophe â€™ found').not.toContain('â€™')
    expect(bodyText, 'Mojibake left-quote â€˜ found').not.toContain('â€˜')
    expect(bodyText, 'Mojibake em-dash â€" found').not.toContain('â€"')
    expect(bodyText).toMatch(/Clarke Moyer.s World Famous/)
  })

  test('curly quotes render correctly on home page', async ({ page }) => {
    await page.goto('/')
    const bodyText = await page.evaluate(() => document.body.innerText)
    expect(bodyText).not.toContain('â€œ')
    expect(bodyText).not.toContain('â€\u009d')
  })
})

// ---------------------------------------------------------------------------
// Test group 3: Static asset paths — scoped checks
// ---------------------------------------------------------------------------

test.describe('Static asset integrity', () => {
  test('CSS loads correctly — page is styled', async ({ page }) => {
    await page.goto('/')
    const fontFamily = await page.evaluate(() => {
      return window.getComputedStyle(document.body).fontFamily
    })
    expect(fontFamily).not.toBeNull()
    const isUnstyled =
      fontFamily === 'serif' ||
      fontFamily === 'Times New Roman' ||
      fontFamily === 'Times'
    expect(
      isUnstyled,
      `Body font-family looks unstyled (CSS may not have loaded): ${fontFamily}`
    ).toBe(false)
  })

  test('no 404 JavaScript chunks on home page', async ({ page }) => {
    const failedRequests: string[] = []
    page.on('requestfailed', req => {
      if (req.url().includes('/_next/static/')) {
        failedRequests.push(req.url())
      }
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(
      failedRequests,
      `Failed JS chunk requests: ${JSON.stringify(failedRequests)}`
    ).toEqual([])
  })

  test('no HTTP error responses for static assets on home page', async ({ page }) => {
    const errors: { url: string; status: number }[] = []
    page.on('response', resp => {
      const url = resp.url()
      if (
        (url.includes('/_next/static/') || url.includes('/_next/')) &&
        resp.status() >= 400
      ) {
        errors.push({ url, status: resp.status() })
      }
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(
      errors,
      `Static asset errors: ${JSON.stringify(errors)}`
    ).toEqual([])
  })
})
