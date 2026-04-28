import { test, expect } from '@playwright/test'

/**
 * Certification page tests.
 * Validates hub page content and individual cert page content, breadcrumbs,
 * and unique copy (terminal card, era context, etc.).
 */

test.describe('Certification hub (/certification/)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/certification/')
  })

  test('has "CISSP" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('CISSP')
  })

  test('has "VMware" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('VMware')
  })
})

test.describe('CISSP page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-cissp-certification-passing-guide/')
  })

  test('has "CISSP" in h1', async ({ page }) => {
    await expect(page.locator('h1').first()).toContainText('CISSP')
  })

  test('has breadcrumb link to "Certification Guides"', async ({ page }) => {
    const link = page.getByRole('link', { name: /Certification Guides/i }).first()
    await expect(link).toBeVisible()
  })

  test('has affiliate disclaimer', async ({ page }) => {
    await expect(page.locator('body')).toContainText('affiliate')
  })

  test('has "← Back to Certification Guides" link', async ({ page }) => {
    const backLink = page.getByRole('link', { name: /Back to Certification Guides/i }).first()
    await expect(backLink).toBeVisible()
  })
})

test.describe('MCP page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-mcp-passing-guide/')
  })

  test('has "Windows XP" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Windows XP')
  })

  test('has "SAIC" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('SAIC')
  })

  test('has green terminal card (C:\\CERTIFICATIONS)', async ({ page }) => {
    await expect(page.locator('body')).toContainText('CERTIFICATIONS')
  })
})

test.describe('AZ-500 page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-microsoft-az-500-passing-guide/')
  })

  test('has "AZ-500" in h1', async ({ page }) => {
    await expect(page.locator('h1').first()).toContainText('AZ-500')
  })

  test('has "Azure Security" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Azure Security')
  })
})

test.describe('VCP6-CMA page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-vcp6-cma-passing-guide/')
  })

  test('has "DCGS" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('DCGS')
  })

  test('has "KubeCon" or "CNCF" in content', async ({ page }) => {
    const body = page.locator('body')
    const hasKubeCon = (await body.getByText(/KubeCon/i).count()) > 0
    const hasCNCF = (await body.getByText(/CNCF/i).count()) > 0
    expect(hasKubeCon || hasCNCF).toBe(true)
  })
})

test.describe('CompTIA Security+ page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clarke-moyer-comptia-security-plus-passing-guide/')
  })

  test('has CE renewal content', async ({ page }) => {
    // The CE renewal callout card is present
    await expect(page.locator('body')).toContainText('CE')
  })

  test('has "WGU" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('WGU')
  })
})
