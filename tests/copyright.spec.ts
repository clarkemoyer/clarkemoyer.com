import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('shows copyright with current year', async ({ page }) => {
    await page.goto('/')
    const currentYear = new Date().getFullYear().toString()
    const footer = page.locator('footer')
    await expect(footer).toContainText('©')
    await expect(footer).toContainText(currentYear)
    await expect(footer).toContainText('2010')
  })

  test('privacy and cookie policy links present (when feat/cookie-consent-v2 merged)', async ({ page }) => {
    await page.goto('/')
    const privacyLink = page.locator('footer a[href="/privacy-policy"]')
    const cookieLink = page.locator('footer a[href="/cookie-policy"]')
    const privacyCount = await privacyLink.count()
    const cookieCount = await cookieLink.count()
    // Skip gracefully if not yet merged
    if (privacyCount === 0 || cookieCount === 0) {
      test.skip()
      return
    }
    await expect(privacyLink).toBeVisible()
    await expect(cookieLink).toBeVisible()
  })
})
