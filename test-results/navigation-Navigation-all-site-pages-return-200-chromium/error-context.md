# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation >> all site pages return 200
- Location: tests/navigation.spec.ts:10:3

# Error details

```
Error: /walk-and-talk/ should return 200

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e5]:
    - heading "404" [level=1] [ref=e6]
    - heading "This page could not be found." [level=2] [ref=e8]
  - alert [ref=e9]
  - region "Cookie consent notice" [ref=e10]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "We Value Your Privacy" [level=3] [ref=e14]
        - paragraph [ref=e15]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e16]:
          - link "Privacy Policy" [ref=e17] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e18] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e19]:
        - button "Decline All" [ref=e20]
        - button "Customize" [ref=e21]
        - button "Accept All" [ref=e22]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | import { testConfig } from './test.config'
  3   | 
  4   | test.describe('Navigation', () => {
  5   |   test('home page loads with 200', async ({ page }) => {
  6   |     const response = await page.goto('/')
  7   |     expect(response?.status()).toBe(200)
  8   |   })
  9   | 
  10  |   test('all site pages return 200', async ({ page }) => {
  11  |     for (const path of testConfig.pages) {
  12  |       const response = await page.goto(path)
> 13  |       expect(response?.status(), `${path} should return 200`).toBe(200)
      |                                                               ^ Error: /walk-and-talk/ should return 200
  14  |     }
  15  |   })
  16  | 
  17  |   test('navigation renders on homepage', async ({ page }) => {
  18  |     await page.goto('/')
  19  |     await expect(page.locator('header, nav, [role="navigation"]').first()).toBeVisible()
  20  |   })
  21  | 
  22  |   test('shared Navigation component renders with search link', async ({ page }) => {
  23  |     const response = await page.goto('/cookie-policy/')
  24  |     expect(response?.status()).toBe(200)
  25  |     await expect(page.locator('nav')).toBeVisible()
  26  |     const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
  27  |     await expect(searchEl).toBeVisible({ timeout: 15000 })
  28  |     await expect(searchEl).toHaveAttribute('href', /duckduckgo\.com/)
  29  |   })
  30  | 
  31  |   test('old WordPress slug redirects work', async ({ page }) => {
  32  |     const redirects: [string, string][] = [
  33  |       ['/certification/', '/certification-guides/'],
  34  |       ['/charity/', '/free-for-charity/'],
  35  |       ['/resume/', '/it-project-management-resume-of-clarke-moyer/'],
  36  |       ['/wgu-referral/', '/wgu-referral-program/'],
  37  |       ['/psu-arl-referral/', '/psu-arl-referral-program/'],
  38  |     ]
  39  |     for (const [from, to] of redirects) {
  40  |       await page.goto(from)
  41  |       await page.waitForURL(`**${to}`, { timeout: 5000 })
  42  |       expect(page.url()).toContain(to)
  43  |     }
  44  |   })
  45  | 
  46  |   // ── Dropdown structure ──────────────────────────────────────────────────────
  47  | 
  48  |   test('CONSULTING dropdown contains expected links', async ({ page }) => {
  49  |     await page.goto('/cookie-policy/')
  50  |     // On desktop viewport the nav links are visible; find the CONSULTING trigger
  51  |     const consulting = page.locator('nav').getByText('CONSULTING', { exact: true })
  52  |     await expect(consulting).toBeVisible()
  53  |     // Hover/click to open dropdown
  54  |     await consulting.hover()
  55  |     await expect(page.getByRole('link', { name: /Walk and Talk/i }).first()).toBeVisible({ timeout: 5000 })
  56  |     await expect(page.getByRole('link', { name: /Certification Guides/i }).first()).toBeVisible()
  57  |     await expect(page.getByRole('link', { name: /Professional Development/i }).first()).toBeVisible()
  58  |     await expect(page.getByRole('link', { name: /Industry Conferences/i }).first()).toBeVisible()
  59  |   })
  60  | 
  61  |   test('FUN dropdown contains Cooking and Quotes', async ({ page }) => {
  62  |     await page.goto('/cookie-policy/')
  63  |     const fun = page.locator('nav').getByText('FUN', { exact: true })
  64  |     await expect(fun).toBeVisible()
  65  |     await fun.hover()
  66  |     await expect(page.getByRole('link', { name: /Cooking/i }).first()).toBeVisible({ timeout: 5000 })
  67  |     await expect(page.getByRole('link', { name: /Quotes/i }).first()).toBeVisible()
  68  |   })
  69  | 
  70  |   test('ABOUT dropdown contains Who I Am, Resume, Personal Project Manager', async ({ page }) => {
  71  |     await page.goto('/cookie-policy/')
  72  |     const about = page.locator('nav').getByText('ABOUT', { exact: true })
  73  |     await expect(about).toBeVisible()
  74  |     await about.hover()
  75  |     await expect(page.getByRole('link', { name: /Who I Am/i }).first()).toBeVisible({ timeout: 5000 })
  76  |     await expect(page.getByRole('link', { name: /Resume/i }).first()).toBeVisible()
  77  |     await expect(page.getByRole('link', { name: /Personal Project Manager/i }).first()).toBeVisible()
  78  |   })
  79  | 
  80  |   // ── Mobile menu ─────────────────────────────────────────────────────────────
  81  | 
  82  |   test('mobile hamburger opens and closes menu', async ({ page }) => {
  83  |     await page.setViewportSize({ width: 375, height: 812 })
  84  |     await page.goto('/cookie-policy/')
  85  |     // Hamburger button should be visible on mobile
  86  |     const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], button[aria-expanded]').first()
  87  |     await expect(hamburger).toBeVisible({ timeout: 10000 })
  88  |     // Open
  89  |     await hamburger.click()
  90  |     // Some nav item should now be visible
  91  |     await expect(page.getByRole('link', { name: /HOME/i }).first()).toBeVisible({ timeout: 5000 })
  92  |     // Close — click the button again
  93  |     await hamburger.click()
  94  |   })
  95  | 
  96  |   // ── Spot-check navigation links ─────────────────────────────────────────────
  97  | 
  98  |   test('HOME link navigates to /', async ({ page }) => {
  99  |     await page.goto('/cookie-policy/')
  100 |     await page.getByRole('link', { name: /^HOME$/i }).first().click()
  101 |     await expect(page).toHaveURL('/')
  102 |   })
  103 | 
  104 |   test('logo/brand link navigates to /', async ({ page }) => {
  105 |     await page.goto('/cookie-policy/')
  106 |     // The brand link contains "CLARKE MOYER" text
  107 |     await page.getByRole('link', { name: /Clarke Moyer/i }).first().click()
  108 |     await expect(page).toHaveURL('/')
  109 |   })
  110 | 
  111 |   test('CONSULTING > Walk and Talk nav link navigates correctly', async ({ page }) => {
  112 |     await page.goto('/cookie-policy/')
  113 |     const consulting = page.locator('nav').getByText('CONSULTING', { exact: true })
```