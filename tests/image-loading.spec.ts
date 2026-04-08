import { test, expect } from '@playwright/test'

test.describe('Image Loading', () => {
  test('homepage images are attached to DOM', async ({ page }) => {
    await page.goto('/')
    const imgs = page.locator('img')
    const count = await imgs.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < Math.min(count, 5); i++) {
      await expect(imgs.nth(i)).toBeAttached()
    }
  })

  test('no broken images on homepage', async ({ page }) => {
    await page.goto('/')
    // Wait for images to attempt loading
    await page.waitForLoadState('networkidle')
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.images)
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.src)
    })
    expect(brokenImages).toHaveLength(0)
  })

  test('hero image request returns 200', async ({ page }) => {
    const imageStatuses: { url: string; status: number }[] = []
    page.on('response', r => {
      if (r.url().match(/\.(jpg|jpeg|png|webp|gif)/i)) {
        imageStatuses.push({ url: r.url(), status: r.status() })
      }
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // At least one image should have loaded successfully
    const successful = imageStatuses.filter(r => r.status === 200)
    expect(successful.length).toBeGreaterThan(0)
  })
})
