import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * SEO E2E Tests
 *
 * These tests verify runtime page availability (HTTP 200) for all routes.
 * Page titles are verified statically in the CI build step (grep out/*/index.html).
 * Meta descriptions and metadata exports are verified by unit tests (__tests__/pages/).
 */

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} returns HTTP 200`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response, `${path} response should not be null`).not.toBeNull()
      expect(response!.status(), `${path} should return 200`).toBe(200)
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
