import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('shows copyright with 2026', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toContainText('2026')
    await expect(footer).toContainText('©')
  })

  test('shows privacy policy and cookie policy links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer a[href="/privacy-policy"]')).toBeVisible()
    await expect(page.locator('footer a[href="/cookie-policy"]')).toBeVisible()
  })
})
