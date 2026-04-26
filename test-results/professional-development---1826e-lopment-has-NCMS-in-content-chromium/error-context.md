# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: professional-development.spec.ts >> /professional-development/ >> has "NCMS" in content
- Location: tests/professional-development.spec.ts:29:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "NCMS"
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
  4  |  * Professional development page tests.
  5  |  * Validates conference entries, academic programs, org memberships.
  6  |  */
  7  | 
  8  | test.describe('/professional-development/', () => {
  9  |   test.beforeEach(async ({ page }) => {
  10 |     await page.goto('/professional-development/')
  11 |   })
  12 | 
  13 |   test('has "KubeCon" in content', async ({ page }) => {
  14 |     await expect(page.locator('body')).toContainText('KubeCon')
  15 |   })
  16 | 
  17 |   test('has "VMworld" in content', async ({ page }) => {
  18 |     await expect(page.locator('body')).toContainText('VMworld')
  19 |   })
  20 | 
  21 |   test('has "Smeal" in content', async ({ page }) => {
  22 |     await expect(page.locator('body')).toContainText('Smeal')
  23 |   })
  24 | 
  25 |   test('has "IEEE" in content', async ({ page }) => {
  26 |     await expect(page.locator('body')).toContainText('IEEE')
  27 |   })
  28 | 
  29 |   test('has "NCMS" in content', async ({ page }) => {
> 30 |     await expect(page.locator('body')).toContainText('NCMS')
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  31 |   })
  32 | 
  33 |   test('has section headings for all 4 professional categories', async ({ page }) => {
  34 |     const body = page.locator('body')
  35 |     // Industry Conferences
  36 |     const hasConferences =
  37 |       (await body.getByText(/conference/i).count()) > 0 ||
  38 |       (await body.getByText(/KubeCon/i).count()) > 0
  39 |     // Academic / DBA
  40 |     const hasAcademic =
  41 |       (await body.getByText(/academic|dba|smeal|eDBA/i).count()) > 0
  42 |     // Professional Orgs
  43 |     const hasOrgs =
  44 |       (await body.getByText(/NCMS|IEEE|PMI|professional org/i).count()) > 0
  45 |     // Technical Training
  46 |     const hasTraining =
  47 |       (await body.getByText(/training|technical/i).count()) > 0
  48 | 
  49 |     expect(hasConferences, 'Expected conferences section').toBe(true)
  50 |     expect(hasAcademic, 'Expected academic/DBA section').toBe(true)
  51 |     expect(hasOrgs, 'Expected professional orgs section').toBe(true)
  52 |     expect(hasTraining, 'Expected technical training section').toBe(true)
  53 |   })
  54 | })
  55 | 
  56 | test.describe('/industry-conferences/', () => {
  57 |   test.beforeEach(async ({ page }) => {
  58 |     await page.goto('/industry-conferences/')
  59 |   })
  60 | 
  61 |   test('has "KubeCon" in content', async ({ page }) => {
  62 |     await expect(page.locator('body')).toContainText('KubeCon')
  63 |   })
  64 | 
  65 |   test('has "Atlanta" in content', async ({ page }) => {
  66 |     await expect(page.locator('body')).toContainText('Atlanta')
  67 |   })
  68 | 
  69 |   test('has "VMworld" in content', async ({ page }) => {
  70 |     await expect(page.locator('body')).toContainText('VMworld')
  71 |   })
  72 | })
  73 | 
```