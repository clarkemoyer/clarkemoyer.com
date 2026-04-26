# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /who-i-am/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /who-i-am/ missing <main>

expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e3]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "Home" [ref=e7] [cursor=pointer]:
          - /url: /
        - text: / Who I Am
      - heading "Who I Am" [level=1] [ref=e8]
    - generic [ref=e10]:
      - paragraph [ref=e11]: Start your targeting packages here. This is a general introduction to who I am and what motivates me.
      - heading "Husband and Father" [level=2] [ref=e12]
      - paragraph [ref=e13]: I am married to April Moyer and we have 2 children Autumn Moyer and Clarke S. Moyer. We focus on doing fun things around the house and saving for great vacations. For pictures and a better view of my family life, send me a friend request on Facebook.
      - heading "Education Supporter" [level=2] [ref=e14]
      - paragraph [ref=e15]: I started late into education. When getting out of the Army I did not think that I “needed” a college education. Times have changed for me. I have now invested in myself through both technical certifications and formal education.
      - paragraph [ref=e16]:
        - text: I currently hold over 10 certifications and trainings. For more information regarding my DoD and industry IT certifications please visit my
        - link "LinkedIn Page" [ref=e17] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - text: .
      - paragraph [ref=e18]: For formal education, I hold a BS-IT and an MBA-ITM from WGU as well as a graduate certificate of project management from UMUC. I am pursuing the PSU Smeal eDBA Program.
      - paragraph [ref=e19]:
        - text: I highly recommend WGU to anyone seeking to further their education. For more information please see my
        - link "WGU alumni referral page" [ref=e20] [cursor=pointer]:
          - /url: /wgu-referral/
        - text: .
      - heading "DoD Contractor" [level=2] [ref=e21]
      - paragraph [ref=e22]:
        - text: Since leaving the US Army as a 33W (35T) I have worked for several great companies and organizations. My services have focused primarily on Agile information technology support. This support has spanned multiple size organizations at different echelons across the government sector. For a full listing of my experience and education please view my
        - link "LinkedIn Page" [ref=e23] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - text: .
      - paragraph [ref=e24]: I am currently employed by PSU-ARL.
      - heading "Physical Investor / Charity Supporter" [level=2] [ref=e25]
      - paragraph [ref=e26]: Taking an active role in investing for the future is to me a critical part of anyone’s life. Investing to me means more than just stocks and bonds stashed away in a 401K. Taking a physical approach to investing I hold many unique assets above and beyond stocks and bonds.
      - paragraph [ref=e27]:
        - text: I have also founded a 501c3 non profit that helps to educate other nonprofits and charity staff on IT, business and marketing topics. To learn more visit
        - link "freeforcharity.org" [ref=e28] [cursor=pointer]:
          - /url: https://freeforcharity.org
        - text: .
      - link "Connect on LinkedIn" [ref=e30] [cursor=pointer]:
        - /url: https://linkedin.com/in/clarkemoyer
  - alert [ref=e31]
  - region "Cookie consent notice" [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - heading "We Value Your Privacy" [level=3] [ref=e36]
        - paragraph [ref=e37]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e38]:
          - link "Privacy Policy" [ref=e39] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e40] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e41]:
        - button "Decline All" [ref=e42]
        - button "Customize" [ref=e43]
        - button "Accept All" [ref=e44]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { testConfig } from './test.config'
  3  | 
  4  | /**
  5  |  * Basic accessibility tests.
  6  |  * No axe dependency required — uses Playwright DOM assertions.
  7  |  */
  8  | 
  9  | // Pages to spot-check for per-page accessibility rules
  10 | const spotCheckPages = [
  11 |   '/walk-and-talk/',
  12 |   '/clarke-moyer-cissp-certification-passing-guide/',
  13 |   '/clarke-moyer-world-famous-apple-crisp-recipe/',
  14 |   '/professional-development/',
  15 | ]
  16 | 
  17 | // Pages known to have breadcrumbs
  18 | const breadcrumbPages = [
  19 |   '/clarke-moyer-cissp-certification-passing-guide/',
  20 |   '/clarke-moyer-world-famous-apple-crisp-recipe/',
  21 |   '/clarke-moyer-mcp-passing-guide/',
  22 |   '/clarke-moyer-microsoft-az-500-passing-guide/',
  23 | ]
  24 | 
  25 | test.describe('Accessibility — every page has <main> and <h1>', () => {
  26 |   for (const path of testConfig.pages) {
  27 |     test(`${path} has <main> element`, async ({ page }) => {
  28 |       await page.goto(path)
  29 |       const main = page.locator('main, [role="main"]')
> 30 |       expect(await main.count(), `${path} missing <main>`).toBeGreaterThan(0)
     |                                                            ^ Error: /who-i-am/ missing <main>
  31 |     })
  32 | 
  33 |     test(`${path} has at least one <h1>`, async ({ page }) => {
  34 |       await page.goto(path)
  35 |       const h1 = page.locator('h1')
  36 |       expect(await h1.count(), `${path} missing <h1>`).toBeGreaterThan(0)
  37 |     })
  38 |   }
  39 | })
  40 | 
  41 | test.describe('Accessibility — breadcrumb aria-label', () => {
  42 |   for (const path of breadcrumbPages) {
  43 |     test(`${path} breadcrumb has aria-label="Breadcrumb"`, async ({ page }) => {
  44 |       await page.goto(path)
  45 |       const breadcrumb = page.locator('[aria-label="Breadcrumb"]')
  46 |       expect(await breadcrumb.count(), `${path} missing aria-label="Breadcrumb"`).toBeGreaterThan(0)
  47 |     })
  48 |   }
  49 | })
  50 | 
  51 | test.describe('Accessibility — images have alt text (spot check)', () => {
  52 |   for (const path of spotCheckPages) {
  53 |     test(`${path} — no images missing alt attribute`, async ({ page }) => {
  54 |       await page.goto(path)
  55 |       const imgsWithoutAlt = page.locator('img:not([alt])')
  56 |       const count = await imgsWithoutAlt.count()
  57 |       expect(count, `${path} has ${count} image(s) missing alt text`).toBe(0)
  58 |     })
  59 |   }
  60 | })
  61 | 
  62 | test.describe('Accessibility — external links on Walk and Talk page', () => {
  63 |   test('all external links have target="_blank" and rel containing "noopener"', async ({ page }) => {
  64 |     await page.goto('/walk-and-talk/')
  65 |     const externalLinks = page.locator('a[href^="http"]')
  66 |     const count = await externalLinks.count()
  67 |     expect(count).toBeGreaterThan(0)
  68 |     for (let i = 0; i < count; i++) {
  69 |       const link = externalLinks.nth(i)
  70 |       const href = await link.getAttribute('href')
  71 |       const rel = await link.getAttribute('rel') ?? ''
  72 |       const target = await link.getAttribute('target') ?? ''
  73 |       expect(
  74 |         target,
  75 |         `External link ${href} missing target="_blank"`
  76 |       ).toBe('_blank')
  77 |       expect(
  78 |         rel,
  79 |         `External link ${href} missing rel="noopener"`
  80 |       ).toContain('noopener')
  81 |     }
  82 |   })
  83 | })
  84 | 
```