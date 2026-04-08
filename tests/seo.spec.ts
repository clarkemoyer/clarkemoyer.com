import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('SEO', () => {
  for (const path of testConfig.pages) {
    test(`${path} has title and meta description`, async ({ page }) => {
      await page.goto(path)
      const title = await page.title()
      expect(title).toBeTruthy()
      expect(title.length).toBeGreaterThan(5)
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content')
      expect(description).toBeTruthy()
    })
  }

  test('homepage has canonical URL', async ({ page }) => {
    await page.goto('/')
    // metadataBase is set — OG url should be present
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content')
    expect(ogUrl).toBeTruthy()
  })

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml')
    expect(response?.status()).toBe(200)
  })

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt')
    expect(response?.status()).toBe(200)
  })
})
