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
    await page.goto('/', { waitUntil: 'networkidle' })
    await expect(page.locator('nav')).toBeVisible()
  })

  test('search control exists in navigation', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
    await expect(searchEl).toBeVisible({ timeout: 15000 })
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
