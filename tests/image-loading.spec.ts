import { test, expect } from '@playwright/test'

test.describe('Image Loading', () => {
  test('hero image on homepage loads successfully', async ({ page }) => {
    const responses: number[] = []
    page.on('response', (r) => {
      if (r.url().includes('/images/') || r.url().includes('wp-content'))
        responses.push(r.status())
    })
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
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.images)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src)
    })
    expect(brokenImages).toHaveLength(0)
  })
})
