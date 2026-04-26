import { test, expect } from '@playwright/test'

/**
 * Professional development page tests.
 * Validates conference entries, academic programs, org memberships.
 */

test.describe('/professional-development/', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/professional-development/')
  })

  test('has "KubeCon" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('KubeCon')
  })

  test('has "VMworld" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('VMworld')
  })

  test('has "Smeal" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Smeal')
  })

  test('has "IEEE" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('IEEE')
  })

  test('has "NCMS" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('NCMS')
  })

  test('has section headings for all 4 professional categories', async ({ page }) => {
    const body = page.locator('body')
    // Industry Conferences
    const hasConferences =
      (await body.getByText(/conference/i).count()) > 0 ||
      (await body.getByText(/KubeCon/i).count()) > 0
    // Academic / DBA
    const hasAcademic =
      (await body.getByText(/academic|dba|smeal|eDBA/i).count()) > 0
    // Professional Orgs
    const hasOrgs =
      (await body.getByText(/NCMS|IEEE|PMI|professional org/i).count()) > 0
    // Technical Training
    const hasTraining =
      (await body.getByText(/training|technical/i).count()) > 0

    expect(hasConferences, 'Expected conferences section').toBe(true)
    expect(hasAcademic, 'Expected academic/DBA section').toBe(true)
    expect(hasOrgs, 'Expected professional orgs section').toBe(true)
    expect(hasTraining, 'Expected technical training section').toBe(true)
  })
})

test.describe('/industry-conferences/', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/industry-conferences/')
  })

  test('has "KubeCon" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('KubeCon')
  })

  test('has "Atlanta" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Atlanta')
  })

  test('has "VMworld" in content', async ({ page }) => {
    await expect(page.locator('body')).toContainText('VMworld')
  })
})
