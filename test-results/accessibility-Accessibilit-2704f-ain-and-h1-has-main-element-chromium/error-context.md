# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> / has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: / missing <main>

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
    - generic [ref=e6]:
      - heading "Clarke Moyer Projects" [level=2] [ref=e7]
      - paragraph [ref=e8]: Thank you for visiting my site. Please scroll down to check out my featured projects below. You can also "Connect on LinkedIn" or to learn more about my family and I click "Get More Info".
      - generic [ref=e9]:
        - link "CONNECT ON LINKEDIN" [ref=e10] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - link "GET MORE INFO" [ref=e11] [cursor=pointer]:
          - /url: "#projects"
    - generic [ref=e15]:
      - img "Clarke Moyer (CM) Logo 3D Black" [ref=e17]
      - heading "CLARKE MOYER" [level=3] [ref=e18]
    - generic [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - img "Clarke Moyer Logo" [ref=e25]
          - generic [ref=e26]:
            - heading "PSU-ARL Referral Program" [level=3] [ref=e27]
            - paragraph [ref=e28]: "Please connect with me for referrals to work for PSU-ARL. NOTE: I provide referrals only to those that I have personally validated the experience of..."
            - link "Continue Reading" [ref=e29] [cursor=pointer]:
              - /url: /psu-arl-referral-program/
              - text: Continue Reading
              - img [ref=e30]
        - generic [ref=e32]:
          - generic [ref=e34]:
            - img "Western Governors University Logo" [ref=e36]
            - generic [ref=e37]: PROUD
            - generic [ref=e38]: WGU GRAD!
          - generic [ref=e39]:
            - heading "WGU Referral Program" [level=3] [ref=e40]
            - paragraph [ref=e41]: Absolutely free, alumni referral to Western Governors University (WGU). For years now since I started and subsequently graduated from Western Governors University I've been referring...
            - link "Continue Reading" [ref=e42] [cursor=pointer]:
              - /url: /wgu-referral-program/
              - text: Continue Reading
              - img [ref=e43]
      - generic [ref=e45]:
        - generic [ref=e46]:
          - img "Clarke Moyer Bio Picture" [ref=e47]
          - generic [ref=e48]:
            - heading "Who I Am" [level=3] [ref=e49]
            - link "Learn More" [ref=e50] [cursor=pointer]:
              - /url: /about/
              - text: Learn More
              - img [ref=e51]
        - generic [ref=e53]:
          - img "Free For Charity Logo" [ref=e56]
          - generic [ref=e57]:
            - heading "Free For Charity" [level=3] [ref=e58]
            - link "Learn More" [ref=e59] [cursor=pointer]:
              - /url: /free-for-charity/
              - text: Learn More
              - img [ref=e60]
        - generic [ref=e62]:
          - img "Technical Certification Exam" [ref=e63]
          - generic [ref=e64]:
            - heading "Certification Guides" [level=3] [ref=e65]
            - link "Learn More" [ref=e66] [cursor=pointer]:
              - /url: /certification-guides/
              - text: Learn More
              - img [ref=e67]
      - link "Read More Pages" [ref=e71] [cursor=pointer]:
        - /url: "#menu-footer"
    - generic [ref=e73]:
      - heading "--Favorite Quotes--" [level=2] [ref=e74]
      - generic [ref=e75]:
        - blockquote [ref=e76]:
          - paragraph [ref=e77]: “Always Be Caught Doing the Right Thing”
          - text: Greg Davis - DoD SME
        - blockquote [ref=e78]:
          - paragraph [ref=e79]: “The Best Way to Win New Work Is to Do a Good Job on Your Current Work”
          - text: Bryan Tebo - Semper Valens VP
    - generic [ref=e81]:
      - heading "Let's Start a Dialogue" [level=3] [ref=e82]
      - paragraph [ref=e83]: At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and an Education Supporter. I am seeking to expand upon my existing experiences and relationships by representing what I am involved in and taking inputs from the greater community. Please contact me if you see some common ground.
      - link "CONNECT TODAY" [ref=e84] [cursor=pointer]:
        - /url: https://linkedin.com/in/clarkemoyer
    - generic [ref=e86]:
      - heading "Click for a WGU Referral" [level=3] [ref=e87]
      - generic [ref=e88]:
        - img "Western Governors University Logo" [ref=e90]
        - generic [ref=e91]: PROUD
        - generic [ref=e92]: WGU GRAD!
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - navigation [ref=e95]:
          - generic [ref=e96]:
            - link "HOME" [ref=e97] [cursor=pointer]:
              - /url: /
            - link "FUN" [ref=e98] [cursor=pointer]:
              - /url: /fun/
            - link "CERTIFICATION GUIDES" [ref=e99] [cursor=pointer]:
              - /url: /certification-guides/
            - link "WGU REFERRAL PROGRAM" [ref=e100] [cursor=pointer]:
              - /url: /wgu-referral-program/
            - link "PSU-ARL REFERRAL PROGRAM" [ref=e101] [cursor=pointer]:
              - /url: /psu-arl-referral-program/
            - link "FREE FOR CHARITY" [ref=e102] [cursor=pointer]:
              - /url: /free-for-charity/
            - link "CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE" [ref=e103] [cursor=pointer]:
              - /url: /certification-guides/
        - generic [ref=e104]:
          - paragraph [ref=e105]: Copyright © 2010–2026 Hosted on Free For Charity Hosting
          - generic [ref=e106]:
            - link "Privacy Policy" [ref=e107] [cursor=pointer]:
              - /url: /privacy-policy/
            - link "Cookie Policy" [ref=e108] [cursor=pointer]:
              - /url: /cookie-policy/
            - button "Cookie Preferences" [ref=e109]
  - alert [ref=e110]
  - region "Cookie consent notice" [ref=e111]:
    - generic [ref=e113]:
      - generic [ref=e114]:
        - heading "We Value Your Privacy" [level=3] [ref=e115]
        - paragraph [ref=e116]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e117]:
          - link "Privacy Policy" [ref=e118] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e119] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e120]:
        - button "Decline All" [ref=e121]
        - button "Customize" [ref=e122]
        - button "Accept All" [ref=e123]
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
     |                                                            ^ Error: / missing <main>
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