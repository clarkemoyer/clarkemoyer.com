import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Basic accessibility tests.
 * No axe dependency required — uses Playwright DOM assertions.
 */

const PAGES = testConfig.pages

// Pages known to have breadcrumbs (cert guides + recipes)
const breadcrumbPages = PAGES.filter(
  p => p.includes('passing-guide') || p.includes('recipe')
)

test.describe('Accessibility — every page has <main> and <h1>', () => {
  for (const path of PAGES) {
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

test.describe('Accessibility — images have alt text', () => {
  for (const path of PAGES) {
    test(`${path} — no images missing alt attribute`, async ({ page }) => {
      await page.goto(path)
      const imgsWithoutAlt = page.locator('img:not([alt])')
      const count = await imgsWithoutAlt.count()
      expect(count, `${path} has ${count} image(s) missing alt text`).toBe(0)
    })
  }
})

test.describe('Accessibility — external links have rel=noopener', () => {
  for (const path of PAGES) {
    test(`${path} — external links have rel containing "noopener"`, async ({ page }) => {
      await page.goto(path)
      const externalLinks = page.locator('a[href^="http"]')
      const count = await externalLinks.count()
      if (count === 0) return // no external links on this page — skip
      for (let i = 0; i < count; i++) {
        const link = externalLinks.nth(i)
        const href = await link.getAttribute('href')
        const rel = await link.getAttribute('rel') ?? ''
        expect(
          rel,
          `External link ${href} on ${path} missing rel="noopener"`
        ).toContain('noopener')
      }
    })
  }
})
