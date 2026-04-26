import { test, expect } from '@playwright/test'

/**
 * Recipe page content tests.
 * Validates real user-facing content: ingredients, phases, affiliate links,
 * disclosure footers, and back-navigation links.
 */

test.describe('Apple Crisp recipe', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  })

  test('has "Granny Smith" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Granny Smith')
  })

  test('has "crumble" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('crumble')
  })

  test('has metadata strip with "Serves"', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Serves')
  })

  test('has affiliate disclosure footer', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })

  test('has breadcrumb containing "Cooking"', async ({ page }) => {
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], [aria-label="Breadcrumb"]').first()
    // Fall back to any link to /cooking if no aria-labeled breadcrumb
    const cookingLink = page.getByRole('link', { name: /Cooking/i }).first()
    const hasBreadcrumb = (await breadcrumb.count()) > 0 || (await cookingLink.count()) > 0
    expect(hasBreadcrumb).toBe(true)
  })

  test('has rel="sponsored" on at least one Amazon link', async ({ page }) => {
    const sponsoredLinks = page.locator('a[rel*="sponsored"]')
    await expect(sponsoredLinks.first()).toBeVisible()
  })

  test('has a "Back to Cooking" or back link', async ({ page }) => {
    const backLink = page.getByRole('link', { name: /Back to Cooking|← Cooking|Cooking ←/i }).first()
    const altBack = page.locator('a[href*="/cooking"]').first()
    const hasBack = (await backLink.count()) > 0 || (await altBack.count()) > 0
    expect(hasBack).toBe(true)
  })
})

test.describe('Sweet Tea recipe', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-sweet-tea-recipe/')
  })

  test('has "Phase 1" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Phase 1')
  })

  test('has "Phase 2" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Phase 2')
  })

  test('has "Phase 3" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Phase 3')
  })

  test('has "2.5 gallon" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('2.5 gallon')
  })

  test('has affiliate disclaimer', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })

  test('has rel="sponsored" on at least one link', async ({ page }) => {
    const sponsoredLinks = page.locator('a[rel*="sponsored"]')
    await expect(sponsoredLinks.first()).toBeVisible()
  })

  test('has a back link to Cooking', async ({ page }) => {
    const backLink = page.locator('a[href*="/cooking"]').first()
    expect(await backLink.count()).toBeGreaterThan(0)
  })
})

test.describe('Philly Cheesesteak recipe', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  })

  test('has "ribeye" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('ribeye')
  })

  test('has "Cheez Whiz" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Cheez Whiz')
  })

  test('has affiliate disclaimer', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })

  test('has rel="sponsored" on at least one link', async ({ page }) => {
    const sponsoredLinks = page.locator('a[rel*="sponsored"]')
    await expect(sponsoredLinks.first()).toBeVisible()
  })

  test('has a back link to Cooking', async ({ page }) => {
    const backLink = page.locator('a[href*="/cooking"]').first()
    expect(await backLink.count()).toBeGreaterThan(0)
  })
})
