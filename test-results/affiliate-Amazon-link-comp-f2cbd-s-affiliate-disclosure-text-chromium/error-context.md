# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: affiliate.spec.ts >> Amazon link compliance — Philly Cheesesteak >> page has affiliate disclosure text
- Location: tests/affiliate.spec.ts:96:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "affiliate"
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
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | /**
  4   |  * Affiliate compliance tests.
  5   |  * Validates FTC disclosure page, rel="sponsored" on Amazon links,
  6   |  * and presence of the clarkemoyer-20 affiliate tag.
  7   |  */
  8   | 
  9   | test.describe('Affiliate disclosure page', () => {
  10  |   test('exists and has "Amazon" in content', async ({ page }) => {
  11  |     await page.goto('/affiliate-disclosure/')
  12  |     await expect(page.locator('body')).toContainText('Amazon')
  13  |   })
  14  | 
  15  |   test('has "FTC" or "Federal Trade Commission" in content', async ({ page }) => {
  16  |     await page.goto('/affiliate-disclosure/')
  17  |     const body = page.locator('body')
  18  |     const hasFTC = (await body.getByText(/FTC/i).count()) > 0
  19  |     const hasFull = (await body.getByText(/Federal Trade Commission/i).count()) > 0
  20  |     expect(hasFTC || hasFull).toBe(true)
  21  |   })
  22  | 
  23  |   test('mentions "clarkemoyer-20" affiliate tag', async ({ page }) => {
  24  |     await page.goto('/affiliate-disclosure/')
  25  |     await expect(page.locator('body')).toContainText('clarkemoyer-20')
  26  |   })
  27  | })
  28  | 
  29  | test.describe('Amazon link compliance — Apple Crisp', () => {
  30  |   test.beforeEach(async ({ page }) => {
  31  |     await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  32  |   })
  33  | 
  34  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  35  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  36  |     const count = await amazonLinks.count()
  37  |     if (count === 0) return // no amazon links — skip
  38  |     for (let i = 0; i < count; i++) {
  39  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  40  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  41  |     }
  42  |   })
  43  | 
  44  |   test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
  45  |     const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
  46  |     const count = await amazonLinks.count()
  47  |     expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
  48  |   })
  49  | 
  50  |   test('page has affiliate disclosure text', async ({ page }) => {
  51  |     await expect(page.locator('body')).toContainText('affiliate')
  52  |   })
  53  | })
  54  | 
  55  | test.describe('Amazon link compliance — Sweet Tea', () => {
  56  |   test.beforeEach(async ({ page }) => {
  57  |     await page.goto('/clarke-moyer-sweet-tea-recipe/')
  58  |   })
  59  | 
  60  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  61  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  62  |     const count = await amazonLinks.count()
  63  |     if (count === 0) return
  64  |     for (let i = 0; i < count; i++) {
  65  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  66  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  67  |     }
  68  |   })
  69  | 
  70  |   test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
  71  |     const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
  72  |     const count = await amazonLinks.count()
  73  |     expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
  74  |   })
  75  | 
  76  |   test('page has affiliate disclosure text', async ({ page }) => {
  77  |     await expect(page.locator('body')).toContainText('affiliate')
  78  |   })
  79  | })
  80  | 
  81  | test.describe('Amazon link compliance — Philly Cheesesteak', () => {
  82  |   test.beforeEach(async ({ page }) => {
  83  |     await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  84  |   })
  85  | 
  86  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  87  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  88  |     const count = await amazonLinks.count()
  89  |     if (count === 0) return
  90  |     for (let i = 0; i < count; i++) {
  91  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  92  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  93  |     }
  94  |   })
  95  | 
  96  |   test('page has affiliate disclosure text', async ({ page }) => {
> 97  |     await expect(page.locator('body')).toContainText('affiliate')
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  98  |   })
  99  | })
  100 | 
```