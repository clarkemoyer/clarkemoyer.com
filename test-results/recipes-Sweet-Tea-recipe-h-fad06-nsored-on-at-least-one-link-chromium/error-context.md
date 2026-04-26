# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recipes.spec.ts >> Sweet Tea recipe >> has rel="sponsored" on at least one link
- Location: tests/recipes.spec.ts:76:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[rel*="sponsored"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[rel*="sponsored"]').first()

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
  2   | 
  3   | /**
  4   |  * Recipe page content tests.
  5   |  * Validates real user-facing content: ingredients, phases, affiliate links,
  6   |  * disclosure footers, and back-navigation links.
  7   |  */
  8   | 
  9   | test.describe('Apple Crisp recipe', () => {
  10  |   test.beforeEach(async ({ page }) => {
  11  |     await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  12  |   })
  13  | 
  14  |   test('has "Granny Smith" in content', async ({ page }) => {
  15  |     await expect(page.locator('body')).toContainText('Granny Smith')
  16  |   })
  17  | 
  18  |   test('has "crumble" in content', async ({ page }) => {
  19  |     await expect(page.locator('body')).toContainText('crumble')
  20  |   })
  21  | 
  22  |   test('has metadata strip with "Serves"', async ({ page }) => {
  23  |     await expect(page.locator('body')).toContainText('Serves')
  24  |   })
  25  | 
  26  |   test('has affiliate disclosure footer', async ({ page }) => {
  27  |     await expect(page.locator('body')).toContainText('affiliate')
  28  |   })
  29  | 
  30  |   test('has breadcrumb containing "Cooking"', async ({ page }) => {
  31  |     const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], [aria-label="Breadcrumb"]').first()
  32  |     // Fall back to any link to /cooking if no aria-labeled breadcrumb
  33  |     const cookingLink = page.getByRole('link', { name: /Cooking/i }).first()
  34  |     const hasBreadcrumb = (await breadcrumb.count()) > 0 || (await cookingLink.count()) > 0
  35  |     expect(hasBreadcrumb).toBe(true)
  36  |   })
  37  | 
  38  |   test('has rel="sponsored" on at least one Amazon link', async ({ page }) => {
  39  |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
  40  |     await expect(sponsoredLinks.first()).toBeVisible()
  41  |   })
  42  | 
  43  |   test('has a "Back to Cooking" or back link', async ({ page }) => {
  44  |     const backLink = page.getByRole('link', { name: /Back to Cooking|← Cooking|Cooking ←/i }).first()
  45  |     const altBack = page.locator('a[href*="/cooking"]').first()
  46  |     const hasBack = (await backLink.count()) > 0 || (await altBack.count()) > 0
  47  |     expect(hasBack).toBe(true)
  48  |   })
  49  | })
  50  | 
  51  | test.describe('Sweet Tea recipe', () => {
  52  |   test.beforeEach(async ({ page }) => {
  53  |     await page.goto('/clarke-moyer-sweet-tea-recipe/')
  54  |   })
  55  | 
  56  |   test('has "Phase 1" in content', async ({ page }) => {
  57  |     await expect(page.locator('body')).toContainText('Phase 1')
  58  |   })
  59  | 
  60  |   test('has "Phase 2" in content', async ({ page }) => {
  61  |     await expect(page.locator('body')).toContainText('Phase 2')
  62  |   })
  63  | 
  64  |   test('has "Phase 3" in content', async ({ page }) => {
  65  |     await expect(page.locator('body')).toContainText('Phase 3')
  66  |   })
  67  | 
  68  |   test('has "2.5 gallon" in content', async ({ page }) => {
  69  |     await expect(page.locator('body')).toContainText('2.5 gallon')
  70  |   })
  71  | 
  72  |   test('has affiliate disclaimer', async ({ page }) => {
  73  |     await expect(page.locator('body')).toContainText('affiliate')
  74  |   })
  75  | 
  76  |   test('has rel="sponsored" on at least one link', async ({ page }) => {
  77  |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
> 78  |     await expect(sponsoredLinks.first()).toBeVisible()
      |                                          ^ Error: expect(locator).toBeVisible() failed
  79  |   })
  80  | 
  81  |   test('has a back link to Cooking', async ({ page }) => {
  82  |     const backLink = page.locator('a[href*="/cooking"]').first()
  83  |     expect(await backLink.count()).toBeGreaterThan(0)
  84  |   })
  85  | })
  86  | 
  87  | test.describe('Philly Cheesesteak recipe', () => {
  88  |   test.beforeEach(async ({ page }) => {
  89  |     await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  90  |   })
  91  | 
  92  |   test('has "ribeye" in content', async ({ page }) => {
  93  |     await expect(page.locator('body')).toContainText('ribeye')
  94  |   })
  95  | 
  96  |   test('has "Cheez Whiz" in content', async ({ page }) => {
  97  |     await expect(page.locator('body')).toContainText('Cheez Whiz')
  98  |   })
  99  | 
  100 |   test('has affiliate disclaimer', async ({ page }) => {
  101 |     await expect(page.locator('body')).toContainText('affiliate')
  102 |   })
  103 | 
  104 |   test('has rel="sponsored" on at least one link', async ({ page }) => {
  105 |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
  106 |     await expect(sponsoredLinks.first()).toBeVisible()
  107 |   })
  108 | 
  109 |   test('has a back link to Cooking', async ({ page }) => {
  110 |     const backLink = page.locator('a[href*="/cooking"]').first()
  111 |     expect(await backLink.count()).toBeGreaterThan(0)
  112 |   })
  113 | })
  114 | 
```