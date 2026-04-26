import { test, expect } from '@playwright/test'

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

// ---------------------------------------------------------------------------
// Test group 1: Image loading
// ---------------------------------------------------------------------------

test.describe('Image loading — static export compliance', () => {
  const pagesWithImages = [
    { name: 'home', path: '/' },
    { name: 'cooking hub', path: '/cooking/' },
    { name: 'apple crisp recipe', path: '/clarke-moyer-world-famous-apple-crisp-recipe/' },
    { name: 'walk-and-talk', path: '/walk-and-talk/' },
    { name: 'professional development', path: '/professional-development/' },
  ]

  for (const { name, path } of pagesWithImages) {
    test(`no broken images on ${name}`, async ({ page }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      const broken = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          .filter(img => !img.complete || img.naturalWidth === 0)
          .map(img => img.src)
      })
      expect(broken, `Broken images on ${path}: ${JSON.stringify(broken)}`).toEqual([])
    })

    test(`no server-side image optimizer URLs on ${name}`, async ({ page }) => {
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

  test('OG image tags use absolute URLs', async ({ page }) => {
    const pagesToCheck = [
      '/',
      '/walk-and-talk/',
      '/professional-development/',
    ]
    for (const p of pagesToCheck) {
      await page.goto(p)
      const ogImage = await page.evaluate(() => {
        const meta = document.querySelector('meta[property="og:image"]')
        return meta?.getAttribute('content') ?? null
      })
      if (ogImage !== null) {
        expect(
          ogImage,
          `og:image on ${p} should be an absolute URL, got: ${ogImage}`
        ).toMatch(/^https?:\/\//)
      }
    }
  })
})

// ---------------------------------------------------------------------------
// Test group 2: Character encoding / mojibake
// ---------------------------------------------------------------------------

test.describe('Character encoding — mojibake detection', () => {
  test('pages have UTF-8 charset declaration', async ({ page }) => {
    const pagesToCheck = ['/', '/walk-and-talk/', '/professional-development/']
    for (const p of pagesToCheck) {
      await page.goto(p)
      // Use document.characterSet which always reflects the actual encoding;
      // meta[charset] may not be in the DOM after Next.js hydration
      const charset = await page.evaluate(() => document.characterSet.toLowerCase())
      expect(charset, `Wrong/missing charset on ${p}`).toBe('utf-8')
    }
  })

  test('Apple Crisp apostrophes render correctly', async ({ page }) => {
    await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
    const bodyText = await page.evaluate(() => document.body.innerText)
    expect(bodyText, 'Mojibake apostrophe â€™ found').not.toContain('â€™')
    expect(bodyText, 'Mojibake left-quote â€˜ found').not.toContain('â€˜')
    expect(bodyText, 'Mojibake em-dash â€" found').not.toContain('â€"')
    // Recipe name should render with a real apostrophe
    expect(bodyText).toMatch(/Clarke Moyer.s World Famous/)
  })

  test('Sweet Tea page renders numbers and phases without encoding issues', async ({ page }) => {
    // Try common sweet tea URL patterns
    const candidates = [
      '/southern-sweet-tea-recipe/',
      '/sweet-tea/',
      '/clarke-moyer-sweet-tea-recipe/',
    ]
    let found = false
    for (const p of candidates) {
      const resp = await page.goto(p)
      if (resp && resp.status() < 400) {
        found = true
        const bodyText = await page.evaluate(() => document.body.innerText)
        expect(bodyText).not.toMatch(/â€[™˜"â€]/)
        expect(bodyText).not.toContain('â€')
        break
      }
    }
    if (!found) {
      test.skip() // page doesn't exist yet — skip gracefully
    }
  })

  test('MCP guide renders terminal characters correctly', async ({ page }) => {
    await page.goto('/clarke-moyer-mcp-passing-guide/')
    const bodyText = await page.evaluate(() => document.body.innerText)
    // Should not contain mojibake sequences
    expect(bodyText).not.toMatch(/â€[™˜"â€]/)
    expect(bodyText).not.toContain('â€')
    // C:\ and > should render as real characters, not escaped literals in text
    // (innerText renders HTML entities, so &gt; becomes > — but mojibake won't)
    expect(bodyText).not.toContain('&gt;')
    expect(bodyText).not.toContain('&lt;')
  })

  test('no mojibake on key pages', async ({ page }) => {
    const pagesToCheck = [
      '/',
      '/walk-and-talk/',
      '/clarke-moyer-cissp-certification-passing-guide/',
      '/clarke-moyer-mcp-passing-guide/',
      '/professional-development/',
    ]
    for (const p of pagesToCheck) {
      await page.goto(p)
      const text = await page.evaluate(() => document.body.innerText)
      expect(text, `Mojibake (â€ sequence) found on ${p}`).not.toMatch(/â€[™˜"â€]/)
      expect(text, `Replacement character â€ found on ${p}`).not.toContain('â€')
    }
  })

  test('curly quotes render correctly on home page', async ({ page }) => {
    await page.goto('/')
    const bodyText = await page.evaluate(() => document.body.innerText)
    // Should not see raw UTF-8 mojibake for curly quotes
    expect(bodyText).not.toContain('â€œ') // U+201C left double quotation mark mojibake
    expect(bodyText).not.toContain('â€\u009d') // U+201D right double quotation mark mojibake
  })
})

// ---------------------------------------------------------------------------
// Test group 3: Static asset paths
// ---------------------------------------------------------------------------

test.describe('Static asset integrity', () => {
  test('CSS loads correctly — page is styled', async ({ page }) => {
    await page.goto('/')
    // font-sans (Tailwind) sets font-family on the body — verifies CSS loaded
    const fontFamily = await page.evaluate(() => {
      return window.getComputedStyle(document.body).fontFamily
    })
    // If CSS failed to load, body would fall back to browser default (usually serif or Times)
    // Tailwind's font-sans sets a sans-serif stack
    expect(fontFamily).not.toBeNull()
    // A styled page should not have the browser default 'serif' or 'Times New Roman' alone
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

  test('no 404 JavaScript chunks on walk-and-talk', async ({ page }) => {
    const failedRequests: string[] = []
    page.on('requestfailed', req => {
      if (req.url().includes('/_next/static/')) {
        failedRequests.push(req.url())
      }
    })
    await page.goto('/walk-and-talk/')
    await page.waitForLoadState('networkidle')
    expect(
      failedRequests,
      `Failed JS chunk requests: ${JSON.stringify(failedRequests)}`
    ).toEqual([])
  })

  test('no HTTP error responses for static assets', async ({ page }) => {
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
