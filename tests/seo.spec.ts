import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} has title and meta description`, async ({ page }) => {
      await page.goto(path)
      await expect(page).toHaveTitle(/.+/, { timeout: 10000 })
      const title = await page.title()
      expect(title.length, `${path} title should be non-empty`).toBeGreaterThan(5)
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
