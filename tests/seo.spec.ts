import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * SEO E2E Tests
 *
 * Page titles are verified statically in the CI "Verify build output" step
 * (checks out/index.html and key page HTML files). Unit tests in
 * __tests__/pages/metadata.test.tsx verify page metadata exports.
 * These E2E tests cover: HTTP 200, meta descriptions, sitemap, robots.
 */

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} loads with 200 and has meta description`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response, `${path} response should not be null`).not.toBeNull()
      expect(response!.status(), `${path} should return 200`).toBe(200)
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
