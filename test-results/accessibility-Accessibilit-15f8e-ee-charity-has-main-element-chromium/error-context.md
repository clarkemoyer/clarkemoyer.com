# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /learn-free-charity/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /learn-free-charity/ missing <main>

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
        - text: / Learn Free Charity
      - heading "Learn More About Free For Charity" [level=1] [ref=e8]
    - generic [ref=e10]:
      - paragraph [ref=e11]:
        - text: Contact me anytime about Free For Charity or go to the website to learn more at
        - link "FreeForCharity.org" [ref=e12] [cursor=pointer]:
          - /url: https://freeforcharity.org
      - heading "About Free For Charity" [level=2] [ref=e13]
      - heading "Free for Charity has a simple mission with broad implications." [level=3] [ref=e14]
      - paragraph [ref=e15]: Reduce costs and increase revenues for nonprofits; putting that money back into their charitable mission where it belongs.
      - paragraph [ref=e16]: This charity for charities seeks to replace as many functions as possible that current nonprofits pay for to for-profit companies with free or at-cost work from our campus, on-site projects, or partnerships with other entities.
      - heading "Some things we are working to get to free or at cost to nonprofits and charity groups:" [level=3] [ref=e17]
      - list [ref=e18]:
        - listitem [ref=e19]: Free charity website hosting with tons of normally for-profit paid products included free for charities
        - listitem [ref=e20]: Research papers, case studies, and use cases from other industries and nonprofits
        - listitem [ref=e21]: Guides for the charity or nonprofit manager in many best business practices
        - listitem [ref=e22]: Unbiased technology directory focused on helping you find the software and tools you need
        - listitem [ref=e23]: Unbiased service and consultant directory — again free of overt marketing or gimmicks
      - paragraph [ref=e24]: Free for Charity engages in a full cycle training and workshop program to develop the needed talent by leveraging the growing use of telecommuting and information technology from a campus environment.
      - paragraph [ref=e25]: Free for Charity trains both the in-house staff of existing charities, as well as direct employees and volunteers of Free for Charity who will then perform work for charities as out-of-house consultants.
      - paragraph [ref=e26]: Cultivation of information technology and business skills is the charitable purpose and the net result of Free for Charity. As part of the educational mission, Free for Charity trainees engage local residents, small businesses, and pre-501c3 charities to build up the skills needed to work on complex non-profit projects.
      - link "Visit FreeForCharity.org" [ref=e28] [cursor=pointer]:
        - /url: https://freeforcharity.org
  - alert [ref=e29]
  - region "Cookie consent notice" [ref=e30]:
    - generic [ref=e32]:
      - generic [ref=e33]:
        - heading "We Value Your Privacy" [level=3] [ref=e34]
        - paragraph [ref=e35]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e36]:
          - link "Privacy Policy" [ref=e37] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e38] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e39]:
        - button "Decline All" [ref=e40]
        - button "Customize" [ref=e41]
        - button "Accept All" [ref=e42]
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
     |                                                            ^ Error: /learn-free-charity/ missing <main>
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