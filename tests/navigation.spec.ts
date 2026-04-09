import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('Navigation', () => {
  test('home page loads with 200', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
  })

  test('all site pages return 200', async ({ page }) => {
    for (const path of testConfig.pages) {
      const response = await page.goto(path)
      expect(response?.status(), `${path} should return 200`).toBe(200)
    }
  })

  test('navigation renders on a page using shared Navigation component', async ({ page }) => {
    // cookie-policy imports Navigation from @/components/Navigation
    await page.goto('/cookie-policy/')
    await expect(page.locator('nav')).toBeVisible()
  })

  test('search link exists in shared Navigation component', async ({ page }) => {
    // The shared Navigation component is used on cookie-policy, privacy-policy, quotes pages
    // (most pages have their own inline navigation)
    await page.goto('/cookie-policy/')
    const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
    await expect(searchEl).toBeVisible({ timeout: 15000 })
    const href = await searchEl.getAttribute('href')
    expect(href).toContain('duckduckgo.com')
  })

  test('old WordPress slug redirects work', async ({ page }) => {
    const redirects: [string, string][] = [
      ['/certification/', '/certification-guides/'],
      ['/charity/', '/free-for-charity/'],
      ['/resume/', '/it-project-management-resume-of-clarke-moyer/'],
      ['/wgu-referral/', '/wgu-referral-program/'],
      ['/psu-arl-referral/', '/psu-arl-referral-program/'],
    ]
    for (const [from, to] of redirects) {
      await page.goto(from)
      await page.waitForURL(`**${to}`, { timeout: 5000 })
      expect(page.url()).toContain(to)
    }
  })
})
