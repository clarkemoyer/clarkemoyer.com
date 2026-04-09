import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * SEO E2E Tests
 *
 * Page titles are verified statically in the CI "Verify build output titles" step
 * for all pages in testConfig.pages. The metadata unit tests (__tests__/pages/)
 * also verify title/description exports. These E2E tests cover HTTP 200 and
 * meta descriptions at runtime.
 */

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} loads with 200 and has meta description`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response, `${path} response should not be null`).not.toBeNull()
      expect(response!.status(), `${path} should return 200`).toBe(200)
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      const trimmed = (description ?? '').trim()
      expect(trimmed.length, `${path} should have non-empty meta description`).toBeGreaterThan(0)
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
