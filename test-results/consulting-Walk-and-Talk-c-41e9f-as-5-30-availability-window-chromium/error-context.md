# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: consulting.spec.ts >> Walk and Talk consulting page >> has "5:30" availability window
- Location: tests/consulting.spec.ts:50:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "5:30"
Received string:    "Skip to main content404This page could not be found.We Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    9 × locator resolved to <body class="font-sans">…</body>
      - unexpected value "Skip to main content404This page could not be found.We Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"

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
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | /**
  4  |  * Walk and Talk consulting page tests.
  5  |  * Validates pricing, availability windows, booking URLs, and linked orgs.
  6  |  */
  7  | 
  8  | test.describe('Walk and Talk consulting page', () => {
  9  |   test.beforeEach(async ({ page }) => {
  10 |     await page.goto('/walk-and-talk/')
  11 |   })
  12 | 
  13 |   test('has "Walk and Talk" in h1', async ({ page }) => {
  14 |     const h1 = page.locator('h1').first()
  15 |     await expect(h1).toContainText('Walk and Talk')
  16 |   })
  17 | 
  18 |   test('has "$562.50" (45-min price) in content', async ({ page }) => {
  19 |     await expect(page.locator('body')).toContainText('$562.50')
  20 |   })
  21 | 
  22 |   test('has "$750" (1-hour price) in content', async ({ page }) => {
  23 |     await expect(page.locator('body')).toContainText('$750')
  24 |   })
  25 | 
  26 |   test('has "$3,000" (4-hour minimum) in content', async ({ page }) => {
  27 |     await expect(page.locator('body')).toContainText('$3,000')
  28 |   })
  29 | 
  30 |   test('has link to freeforcharity.org', async ({ page }) => {
  31 |     const link = page.locator('a[href*="freeforcharity.org"]').first()
  32 |     await expect(link).toBeVisible()
  33 |   })
  34 | 
  35 |   test('has link to technologyadoptionbarriers.org', async ({ page }) => {
  36 |     const link = page.locator('a[href*="technologyadoptionbarriers.org"]').first()
  37 |     await expect(link).toBeVisible()
  38 |   })
  39 | 
  40 |   test('has at least 2 outlook.office.com booking links', async ({ page }) => {
  41 |     const bookingLinks = page.locator('a[href*="outlook.office.com"]')
  42 |     const count = await bookingLinks.count()
  43 |     expect(count, 'Expected at least 2 booking links').toBeGreaterThanOrEqual(2)
  44 |   })
  45 | 
  46 |   test('has "1:30" availability window', async ({ page }) => {
  47 |     await expect(page.locator('body')).toContainText('1:30')
  48 |   })
  49 | 
  50 |   test('has "5:30" availability window', async ({ page }) => {
> 51 |     await expect(page.locator('body')).toContainText('5:30')
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  52 |   })
  53 | 
  54 |   test('has "Mon–Fri" availability text', async ({ page }) => {
  55 |     await expect(page.locator('body')).toContainText('Mon–Fri')
  56 |   })
  57 | })
  58 | 
```