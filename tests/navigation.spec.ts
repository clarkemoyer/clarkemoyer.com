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

  test('skip to main content link exists in DOM', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeAttached()
  })

  test('search link opens duckduckgo', async ({ page }) => {
    await page.goto('/')
    const searchLink = page.locator(`a[aria-label="${testConfig.navigation.searchLabel}"]`)
    await expect(searchLink).toBeVisible()
    const href = await searchLink.getAttribute('href')
    expect(href).toContain('duckduckgo.com')
    expect(href).toContain('clarkemoyer.com')
  })

  test('old WordPress slug redirects work', async ({ page }) => {
    const redirects = [
      ['/certification/', '/certification-guides/'],
      ['/charity/', '/free-for-charity/'],
      ['/resume/', '/it-project-management-resume-of-clarke-moyer/'],
      ['/wgu-referral/', '/wgu-referral-program/'],
      ['/psu-arl-referral/', '/psu-arl-referral-program/'],
    ]
    for (const [from, to] of redirects) {
      await page.goto(from)
      // Client-side redirect — check final URL after navigation
      await page.waitForURL(`**${to}`, { timeout: 5000 })
      expect(page.url()).toContain(to)
    }
  })
})
