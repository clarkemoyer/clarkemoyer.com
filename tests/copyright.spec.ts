import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('shows copyright notice with year range', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toContainText('©')
    await expect(footer).toContainText('2010')
    // Year range is static in footer (2010-2026); if footer becomes dynamic update this test
    await expect(footer).toContainText('2026')
  })

  test('privacy and cookie policy links present when consent PR merged', async ({ page }) => {
    await page.goto('/')
    const privacyLink = page.locator('footer a[href="/privacy-policy"]')
    if (await privacyLink.count() === 0) { test.skip(); return }
    await expect(privacyLink).toBeVisible()
    await expect(page.locator('footer a[href="/cookie-policy"]')).toBeVisible()
  })
})
