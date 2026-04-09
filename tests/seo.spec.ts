import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * SEO E2E Tests
 *
 * Note: Page titles are verified statically in the CI build step
 * ("Verify build output contains expected title"). These E2E tests
 * cover runtime SEO behavior: page loads, descriptions, sitemap, robots.
 */

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} loads with 200 and has meta description`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response?.status(), `${path} should return 200`).toBe(200)
      // Description is in static HTML — no hydration wait needed
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect(description, `${path} should have meta description`).toBeTruthy()
    })
  }

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response?.status()).toBe(200)
  })

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response?.status()).toBe(200)
  })
})
