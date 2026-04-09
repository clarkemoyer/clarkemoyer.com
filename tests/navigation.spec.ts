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

  test('navigation renders on homepage', async ({ page }) => {
    await page.goto('/')
    // Homepage has its own inline navigation
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    // At least one nav-like element should exist
    await expect(page.locator('header, nav, [role="navigation"]').first()).toBeVisible()
  })

  test('shared Navigation component renders with search link', async ({ page }) => {
    // cookie-policy uses @/components/Navigation — verify it loads and has the search link
    const response = await page.goto('/cookie-policy/')
    expect(response?.status()).toBe(200)
    await expect(page.locator('nav')).toBeVisible()
    const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
    await expect(searchEl).toBeVisible({ timeout: 15000 })
    await expect(searchEl).toHaveAttribute('href', /duckduckgo\.com/)
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
