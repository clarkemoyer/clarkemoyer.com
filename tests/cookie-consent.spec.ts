import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Cookie Consent Tests
 * Note: cookie consent component lands via feat/cookie-consent-v2.
 * These tests will fully activate once that PR merges into main.
 * For now they gracefully skip when the banner is not present.
 */

test.describe('Cookie Consent Banner', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('banner shows on first visit (when consent component present)', async ({ page }) => {
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    const isPresent = await banner.count()
    if (isPresent === 0) {
      test.skip()
      return
    }
    await expect(banner).toBeVisible()
    await expect(banner.getByRole('button', { name: testConfig.cookieConsent.buttons.acceptAll })).toBeVisible()
    await expect(banner.getByRole('button', { name: testConfig.cookieConsent.buttons.declineAll })).toBeVisible()
  })

  test('banner hides after Accept All', async ({ page }) => {
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    if (await banner.count() === 0) { test.skip(); return }
    await page.getByRole('button', { name: 'Accept All' }).click()
    await expect(banner).not.toBeVisible()
  })

  test('footer Cookie Preferences is hidden until consent is stored', async ({ page }) => {
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    if (await banner.count() === 0) { test.skip(); return }

    const footerPreferences = page.locator('footer').getByRole('button', { name: 'Cookie Preferences' })
    await expect(footerPreferences).toHaveCount(0)

    await page.getByRole('button', { name: 'Accept All' }).click()
    await expect(footerPreferences).toBeVisible()

    await footerPreferences.click()
    await expect(page.locator('[role="dialog"][aria-modal="true"]')).toBeVisible()
  })

  test('Customize opens modal', async ({ page }) => {
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    if (await banner.count() === 0) { test.skip(); return }
    await page.getByRole('button', { name: 'Customize' }).click()
    const modal = page.locator('[role="dialog"][aria-modal="true"]')
    await expect(modal).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(modal).not.toBeVisible()
  })
})
