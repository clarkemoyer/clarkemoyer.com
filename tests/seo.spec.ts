import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * SEO E2E Tests
 *
 * These tests verify runtime page availability (HTTP 200) for all routes.
 * Page titles and meta descriptions are verified statically in the CI build
 * step by grepping the generated HTML in out/*/index.html for all pages.
 * Metadata TypeScript exports are verified by __tests__/pages/metadata.test.tsx.
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
