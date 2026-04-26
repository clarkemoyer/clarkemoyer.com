import { test, expect } from '@playwright/test'

/**
 * Walk and Talk consulting page tests.
 * Validates pricing, availability windows, booking URLs, and linked orgs.
 */

test.describe('Walk and Talk consulting page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/walk-and-talk/')
  })

  test('has "Walk and Talk" in h1', async ({ page }) => {
    const h1 = page.locator('h1').first()
    await expect(h1).toContainText('Walk and Talk')
  })

  test('has "$562.50" (45-min price) in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('$562.50')
  })

  test('has "$750" (1-hour price) in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('$750')
  })

  test('has "$3,000" (4-hour minimum) in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('$3,000')
  })

  test('has link to freeforcharity.org', async ({ page }) => {
    const link = page.locator('a[href*="freeforcharity.org"]').first()
    await expect(link).toBeVisible()
  })

  test('has link to technologyadoptionbarriers.org', async ({ page }) => {
    const link = page.locator('a[href*="technologyadoptionbarriers.org"]').first()
    await expect(link).toBeVisible()
  })

  test('has at least 2 outlook.office.com booking links', async ({ page }) => {
    const bookingLinks = page.locator('a[href*="outlook.office.com"]')
    const count = await bookingLinks.count()
    expect(count, 'Expected at least 2 booking links').toBeGreaterThanOrEqual(2)
  })

  test('has "1:30" availability window', async ({ page }) => {
    await expect(page.locator('body')).toContainText('1:30')
  })

  test('has "5:30" availability window', async ({ page }) => {
    await expect(page.locator('body')).toContainText('5:30')
  })

  test('has "Mon–Fri" availability text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Mon–Fri')
  })
})
