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

  test('image requests return successful status', async ({ page }) => {
    const imageStatuses: { url: string; status: number }[] = []
    page.on('response', r => {
      if (r.url().match(/\.(jpg|jpeg|png|webp|gif)/i)) {
        imageStatuses.push({ url: r.url(), status: r.status() })
      }
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Accept 200 (fresh) or 304 (cached) as success
    const failed = imageStatuses.filter(r => r.status >= 400)
    expect(failed, `Failed image requests: ${JSON.stringify(failed)}`).toHaveLength(0)
    expect(imageStatuses.length).toBeGreaterThan(0)
  })
})
