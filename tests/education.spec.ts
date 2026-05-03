import { test, expect } from '@playwright/test'

test.describe('Education section', () => {
  test('education hub loads and has all 5 degree cards', async ({ page }) => {
    await page.goto('/education/')
    await expect(page.locator('h1')).toContainText('Education')
    // All 5 institutions should be represented (rendered uppercase via CSS)
    const body = await page.locator('body').innerText()
    expect(body.toLowerCase()).toContain('cochise college')
    expect(body.toLowerCase()).toContain('western governors university')
    expect(body.toLowerCase()).toContain('university of maryland')
    expect(body.toLowerCase()).toContain('penn state')
  })

  test('WGU page has both degrees', async ({ page }) => {
    await page.goto('/education/wgu/')
    const body = await page.locator('body').innerText()
    expect(body).toContain('Bachelor of Science')
    expect(body).toContain('MBA')
    expect(body).toContain('2009')
    expect(body).toContain('2010')
  })

  test('Cochise College page has AAS and key facts', async ({ page }) => {
    await page.goto('/education/cochise-college/')
    const body = await page.locator('body').innerText()
    expect(body).toContain('Electronics Technology')
    expect(body).toContain('Honors')
    expect(body).toContain('2005')
    expect(body).toContain('2013')
    expect(body).toContain('Fort Huachuca')
  })

  test('UMUC page has grad cert details', async ({ page }) => {
    await page.goto('/education/umuc/')
    const body = await page.locator('body').innerText()
    expect(body).toContain('Project Management')
    expect(body).toContain('2012')
    expect(body).toContain('Maryland')
  })

  test('Smeal DBA page has IN PROGRESS indicator and TABS', async ({ page }) => {
    await page.goto('/education/smeal-dba/')
    const body = await page.locator('body').innerText()
    expect(body.toLowerCase()).toMatch(/in progress/i)
    expect(body.toLowerCase()).toContain('penn state')
    expect(body.toLowerCase()).toContain('tabs')
    expect(body.toLowerCase()).toContain('technologyadoptionbarriers.org')
  })

  test('all education sub-pages have breadcrumb link back to Education', async ({ page }) => {
    const pages = [
      '/education/wgu/',
      '/education/cochise-college/',
      '/education/umuc/',
      '/education/smeal-dba/',
    ]
    for (const path of pages) {
      await page.goto(path)
      // Each sub-page has a breadcrumb link pointing back to /education/
      const educationLink = page.getByRole('link', { name: /Education/i }).first()
      await expect(educationLink, `${path} should have breadcrumb link to Education`).toBeVisible()
    }
  })

  test('education hub card links navigate to correct sub-pages', async ({ page }) => {
    await page.goto('/education/')
    // Find the WGU link by navigating to /education/wgu/ directly
    const wguLink = page.locator('a[href*="/education/wgu"]').first()
    await expect(wguLink).toBeVisible()
    await wguLink.click()
    await expect(page).toHaveURL(/\/education\/wgu/)
  })
})
