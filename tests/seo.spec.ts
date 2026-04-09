import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} has title and meta description`, async ({ page }) => {
      await page.goto(path)
      // Auto-retries until title is set (handles React hydration delay)
      await expect(page).toHaveTitle(/.{6,}/, { timeout: 15000 })
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
