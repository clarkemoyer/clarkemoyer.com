# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /fun/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /fun/ missing <main>

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
    - generic [ref=e4]:
      - generic [ref=e6]:
        - text: "You are here:"
        - link "Home" [ref=e7] [cursor=pointer]:
          - /url: /
        - text: / Fun
      - heading "Fun" [level=1] [ref=e9]
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "An Assortment of Other Fun Things I am Working On" [level=2] [ref=e14]
        - paragraph [ref=e15]: Reach out to me if you have any questions on any topic.
        - link "Reach out to me on LinkedIn" [ref=e16] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/clarkemoyer
      - generic [ref=e17]:
        - generic [ref=e18]:
          - heading "Cooking" [level=3] [ref=e19]
          - paragraph [ref=e20]: My wife is a trained chef but she does not have a website! This is where I keep my ‘World Famous’ recipes.
          - link "Cooking Homepage" [ref=e21] [cursor=pointer]:
            - /url: /cooking/
        - generic [ref=e22]:
          - heading "Quotes" [level=3] [ref=e23]
          - paragraph [ref=e24]: Popular song lyrics reframed as business philosophy and technology adoption insights.
          - link "Quotes Homepage" [ref=e25] [cursor=pointer]:
            - /url: /quotes/
        - generic [ref=e26]:
          - heading "Books & Reading" [level=3] [ref=e27]
          - paragraph [ref=e28]: I don’t read many books but when I do I sometimes add them here.
          - link "Books & Reading Homepage" [ref=e29] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e30]:
          - heading "Travel & Events" [level=3] [ref=e31]
          - paragraph [ref=e32]: We love to travel and do local things. I will try and list them here.
          - link "Travel & Events homepage" [ref=e33] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e34]:
          - heading "Speaking & Publishing" [level=3] [ref=e35]
          - paragraph [ref=e36]: I am always looking for speaking and publishing opportunities. If I get them I post them here.
          - link "Speaking & Publishing Homepage" [ref=e37] [cursor=pointer]:
            - /url: "#"
    - generic [ref=e39]:
      - heading "Let's Start a Dialogue" [level=3] [ref=e40]
      - paragraph [ref=e41]: At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and an Education Supporter. I am seeking to expand upon my existing experiences and relationships by representing what I am involved in and taking inputs from the greater community. Please contact me if you see some common ground.
      - link "Connect Today" [ref=e42] [cursor=pointer]:
        - /url: https://www.linkedin.com/in/clarkemoyer/
    - generic [ref=e44]:
      - heading "Click for a WGU Referral" [level=3] [ref=e45]
      - link "Western Governors University Logo PROUD WGU GRAD!" [ref=e46] [cursor=pointer]:
        - /url: https://mbsy.co/3ff2tz
        - generic [ref=e47]:
          - img "Western Governors University Logo" [ref=e49]
          - generic [ref=e50]: PROUD
          - generic [ref=e51]: WGU GRAD!
  - alert [ref=e52]
  - region "Cookie consent notice" [ref=e53]:
    - generic [ref=e55]:
      - generic [ref=e56]:
        - heading "We Value Your Privacy" [level=3] [ref=e57]
        - paragraph [ref=e58]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e59]:
          - link "Privacy Policy" [ref=e60] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e61] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e62]:
        - button "Decline All" [ref=e63]
        - button "Customize" [ref=e64]
        - button "Accept All" [ref=e65]
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
     |                                                            ^ Error: /fun/ missing <main>
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