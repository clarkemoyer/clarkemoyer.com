import { test, expect } from '@playwright/test'

/**
 * Affiliate compliance tests.
 * Validates FTC disclosure page, rel="sponsored" on Amazon links,
 * and presence of the clarkemoyer-20 affiliate tag.
 */

test.describe('Affiliate disclosure page', () => {
  test('exists and has "Amazon" in content', async ({ page }) => {
    await page.goto('/affiliate-disclosure/')
    await expect(page.locator('body')).toContainText('Amazon')
  })

  test('has "FTC" or "Federal Trade Commission" in content', async ({ page }) => {
    await page.goto('/affiliate-disclosure/')
    const body = page.locator('body')
    const hasFTC = (await body.getByText(/FTC/i).count()) > 0
    const hasFull = (await body.getByText(/Federal Trade Commission/i).count()) > 0
    expect(hasFTC || hasFull).toBe(true)
  })

  test('mentions "clarkemoyer-20" affiliate tag', async ({ page }) => {
    await page.goto('/affiliate-disclosure/')
    await expect(page.locator('body')).toContainText('clarkemoyer-20')
  })
})

test.describe('Amazon link compliance — Apple Crisp', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  })

  test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
    const amazonLinks = page.locator('a[href*="amazon.com"]')
    const count = await amazonLinks.count()
    if (count === 0) return // no amazon links — skip
    for (let i = 0; i < count; i++) {
      const rel = await amazonLinks.nth(i).getAttribute('rel')
      expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
    }
  })

  test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
    const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
    const count = await amazonLinks.count()
    expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
  })

  test('page has affiliate disclosure text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })
})

test.describe('Amazon link compliance — Sweet Tea', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-sweet-tea-recipe/')
  })

  test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
    const amazonLinks = page.locator('a[href*="amazon.com"]')
    const count = await amazonLinks.count()
    if (count === 0) return
    for (let i = 0; i < count; i++) {
      const rel = await amazonLinks.nth(i).getAttribute('rel')
      expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
    }
  })

  test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
    const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
    const count = await amazonLinks.count()
    expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
  })

  test('page has affiliate disclosure text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })
})

test.describe('Amazon link compliance — Philly Cheesesteak', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  })

  test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
    const amazonLinks = page.locator('a[href*="amazon.com"]')
    const count = await amazonLinks.count()
    if (count === 0) return
    for (let i = 0; i < count; i++) {
      const rel = await amazonLinks.nth(i).getAttribute('rel')
      expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
    }
  })

  test('page has affiliate disclosure text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })
})
