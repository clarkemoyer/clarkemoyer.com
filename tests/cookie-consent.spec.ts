import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('Cookie Consent Banner', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('shows banner on first visit', async ({ page }) => {
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    await expect(banner).toBeVisible()
    await expect(
      banner.getByRole('button', { name: testConfig.cookieConsent.buttons.acceptAll })
    ).toBeVisible()
    await expect(
      banner.getByRole('button', { name: testConfig.cookieConsent.buttons.declineAll })
    ).toBeVisible()
    await expect(
      banner.getByRole('button', { name: testConfig.cookieConsent.buttons.customize })
    ).toBeVisible()
  })

  test('hides after Accept All and persists', async ({ page }) => {
    await page.getByRole('button', { name: 'Accept All' }).click()
    await expect(
      page.locator('[role="region"][aria-label="Cookie consent notice"]')
    ).not.toBeVisible()
    await page.reload()
    await expect(
      page.locator('[role="region"][aria-label="Cookie consent notice"]')
    ).not.toBeVisible()
    const consent = await page.evaluate(() => localStorage.getItem('cookie-consent'))
    const prefs = JSON.parse(consent!)
    expect(prefs.necessary).toBe(true)
    expect(prefs.analytics).toBe(true)
    expect(prefs.marketing).toBe(true)
  })

  test('hides after Decline All and persists', async ({ page }) => {
    await page.getByRole('button', { name: 'Decline All' }).click()
    await expect(
      page.locator('[role="region"][aria-label="Cookie consent notice"]')
    ).not.toBeVisible()
    await page.reload()
    await expect(
      page.locator('[role="region"][aria-label="Cookie consent notice"]')
    ).not.toBeVisible()
    const consent = await page.evaluate(() => localStorage.getItem('cookie-consent'))
    const prefs = JSON.parse(consent!)
    expect(prefs.analytics).toBe(false)
    expect(prefs.marketing).toBe(false)
  })

  test('Customize opens modal with all sections', async ({ page }) => {
    await page.getByRole('button', { name: 'Customize' }).click()
    const modal = page.locator('[role="dialog"][aria-modal="true"]')
    await expect(modal).toBeVisible()
    await expect(modal.getByText('Necessary Cookies')).toBeVisible()
    await expect(modal.getByText('Analytics Cookies')).toBeVisible()
    await expect(modal.getByText('Marketing Cookies')).toBeVisible()
  })

  test('modal closes on Escape', async ({ page }) => {
    await page.getByRole('button', { name: 'Customize' }).click()
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('[role="dialog"]')).not.toBeVisible()
  })
})
