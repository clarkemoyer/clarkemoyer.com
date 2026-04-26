import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Basic accessibility tests.
 * No axe dependency required — uses Playwright DOM assertions.
 */

// Pages to spot-check for per-page accessibility rules
const spotCheckPages = [
  '/walk-and-talk/',
  '/clarke-moyer-cissp-certification-passing-guide/',
  '/clarke-moyer-world-famous-apple-crisp-recipe/',
  '/professional-development/',
]

// Pages known to have breadcrumbs
const breadcrumbPages = [
  '/clarke-moyer-cissp-certification-passing-guide/',
  '/clarke-moyer-world-famous-apple-crisp-recipe/',
  '/clarke-moyer-mcp-passing-guide/',
  '/clarke-moyer-microsoft-az-500-passing-guide/',
]

test.describe('Accessibility — every page has <main> and <h1>', () => {
  for (const path of testConfig.pages) {
    test(`${path} has <main> element`, async ({ page }) => {
      await page.goto(path)
      const main = page.locator('main, [role="main"]')
      expect(await main.count(), `${path} missing <main>`).toBeGreaterThan(0)
    })

    test(`${path} has at least one <h1>`, async ({ page }) => {
      await page.goto(path)
      const h1 = page.locator('h1')
      expect(await h1.count(), `${path} missing <h1>`).toBeGreaterThan(0)
    })
  }
})

test.describe('Accessibility — breadcrumb aria-label', () => {
  for (const path of breadcrumbPages) {
    test(`${path} breadcrumb has aria-label="Breadcrumb"`, async ({ page }) => {
      await page.goto(path)
      const breadcrumb = page.locator('[aria-label="Breadcrumb"]')
      expect(await breadcrumb.count(), `${path} missing aria-label="Breadcrumb"`).toBeGreaterThan(0)
    })
  }
})

test.describe('Accessibility — images have alt text (spot check)', () => {
  for (const path of spotCheckPages) {
    test(`${path} — no images missing alt attribute`, async ({ page }) => {
      await page.goto(path)
      const imgsWithoutAlt = page.locator('img:not([alt])')
      const count = await imgsWithoutAlt.count()
      expect(count, `${path} has ${count} image(s) missing alt text`).toBe(0)
    })
  }
})

test.describe('Accessibility — external links on Walk and Talk page', () => {
  test('all external links have target="_blank" and rel containing "noopener"', async ({ page }) => {
    await page.goto('/walk-and-talk/')
    const externalLinks = page.locator('a[href^="http"]')
    const count = await externalLinks.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i)
      const href = await link.getAttribute('href')
      const rel = await link.getAttribute('rel') ?? ''
      const target = await link.getAttribute('target') ?? ''
      expect(
        target,
        `External link ${href} missing target="_blank"`
      ).toBe('_blank')
      expect(
        rel,
        `External link ${href} missing rel="noopener"`
      ).toContain('noopener')
    }
  })
})
