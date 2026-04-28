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
    await expect(page.locator('header, nav, [role="navigation"]').first()).toBeVisible()
  })

  test('shared Navigation component renders with search link', async ({ page }) => {
    const response = await page.goto('/cookie-policy/')
    expect(response?.status()).toBe(200)
    await expect(page.locator('nav')).toBeVisible()
    const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
    await expect(searchEl).toBeVisible({ timeout: 15000 })
    await expect(searchEl).toHaveAttribute('href', /duckduckgo\.com/)
  })

  test('old WordPress slug redirects work', async ({ page }) => {
    const redirects: [string, string][] = [
      ['/certification/', '/certification/'],
      ['/charity/', '/free-for-charity/'],
      ['/resume/', '/resume/'],
      ['/wgu-referral/', '/wgu-referral/'],
      ['/psu-arl-referral/', '/psu-arl-referral/'],
    ]
    for (const [from, to] of redirects) {
      await page.goto(from)
      await page.waitForURL(`**${to}`, { timeout: 5000 })
      expect(page.url()).toContain(to)
    }
  })

  // ── Dropdown structure ──────────────────────────────────────────────────────

  test('CONSULTING dropdown contains expected links', async ({ page }) => {
    await page.goto('/')
    // Check nav links exist in the DOM (href-based, no hover needed)
    const nav = page.locator('nav')
    await expect(nav.getByRole('link', { name: /Walk and Talk/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Certification/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Professional Development/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Industry Conferences/i }).first()).toBeAttached()
  })

  test('FUN dropdown contains Cooking and Quotes', async ({ page }) => {
    await page.goto('/cookie-policy/')
    const fun = page.locator('nav').getByText('FUN', { exact: true })
    await expect(fun).toBeVisible()
    await fun.hover()
    await expect(page.getByRole('link', { name: /Cooking/i }).first()).toBeVisible({ timeout: 5000 })
    await expect(page.getByRole('link', { name: /Quotes/i }).first()).toBeVisible()
  })

  test('ABOUT dropdown contains Who I Am, Resume, Education, Personal Project Manager', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav')
    await expect(nav.getByRole('link', { name: /Who I Am/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Resume/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Personal Project Manager/i }).first()).toBeAttached()
    await expect(nav.getByRole('link', { name: /Education/i }).first()).toBeAttached()
  })

  // ── Mobile menu ─────────────────────────────────────────────────────────────

  test('mobile hamburger opens and closes menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/cookie-policy/')
    // Hamburger button should be visible on mobile
    const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], button[aria-expanded]').first()
    await expect(hamburger).toBeVisible({ timeout: 10000 })
    // Open
    await hamburger.click()
    // Some nav item should now be visible
    await expect(page.getByRole('link', { name: /HOME/i }).first()).toBeVisible({ timeout: 5000 })
    // Close — click the button again
    await hamburger.click()
  })

  // ── Spot-check navigation links ─────────────────────────────────────────────

  test('HOME link navigates to /', async ({ page }) => {
    await page.goto('/cookie-policy/')
    await page.getByRole('link', { name: /^HOME$/i }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('logo/brand link navigates to /', async ({ page }) => {
    await page.goto('/cookie-policy/')
    // The brand link contains "CLARKE MOYER" text
    await page.getByRole('link', { name: /Clarke Moyer/i }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('CONSULTING > Walk and Talk nav link navigates correctly', async ({ page }) => {
    await page.goto('/cookie-policy/')
    const consulting = page.locator('nav').getByText('CONSULTING', { exact: true })
    await consulting.hover()
    await page.getByRole('link', { name: /Walk and Talk/i }).first().click()
    await page.waitForURL('**/walk-and-talk**', { timeout: 8000 })
    expect(page.url()).toContain('/walk-and-talk')
  })

  test('ABOUT > Who I Am nav link navigates correctly', async ({ page }) => {
    await page.goto('/cookie-policy/')
    const about = page.locator('nav').getByText('ABOUT', { exact: true })
    await about.hover()
    await page.getByRole('link', { name: /Who I Am/i }).first().click()
    await page.waitForURL('**/who-i-am**', { timeout: 8000 })
    expect(page.url()).toContain('/who-i-am')
  })

  test('FUN > Cooking nav link navigates correctly', async ({ page }) => {
    await page.goto('/cookie-policy/')
    const fun = page.locator('nav').getByText('FUN', { exact: true })
    await fun.hover()
    await page.getByRole('link', { name: /^COOKING$/i }).first().click()
    await page.waitForURL('**/cooking**', { timeout: 8000 })
    expect(page.url()).toContain('/cooking')
  })
})
