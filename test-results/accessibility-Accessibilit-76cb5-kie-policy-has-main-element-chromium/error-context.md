# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /cookie-policy/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /cookie-policy/ missing <main>

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
    - navigation [ref=e4]:
      - generic [ref=e7]:
        - link "Search this site (opens in new tab)" [ref=e9] [cursor=pointer]:
          - /url: https://duckduckgo.com/?q=site%3Aclarkemoyer.com
          - img [ref=e10]
          - text: SEARCH
        - link "CLARKE MOYER" [ref=e13] [cursor=pointer]:
          - /url: /
          - heading "CLARKE MOYER" [level=1] [ref=e14]
        - button "Toggle menu" [ref=e16]:
          - img [ref=e17]
          - text: MENU
      - generic [ref=e21]:
        - link "HOME" [ref=e22] [cursor=pointer]:
          - /url: /
        - button "ABOUT" [ref=e24]:
          - text: ABOUT
          - img [ref=e25]
        - button "FUN" [ref=e28]:
          - text: FUN
          - img [ref=e29]
        - link "CERTIFICATION GUIDES" [ref=e31] [cursor=pointer]:
          - /url: /certification-guides/
        - link "WGU REFERRAL PROGRAM" [ref=e32] [cursor=pointer]:
          - /url: /wgu-referral-program/
        - link "PSU-ARL REFERRAL PROGRAM" [ref=e33] [cursor=pointer]:
          - /url: /psu-arl-referral-program/
        - link "FREE FOR CHARITY" [ref=e34] [cursor=pointer]:
          - /url: /free-for-charity/
      - link "CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE" [ref=e38] [cursor=pointer]:
        - /url: /clarke-moyer-cissp-certification-passing-guide/
    - generic [ref=e39]:
      - heading "Cookie Policy" [level=1] [ref=e40]
      - paragraph [ref=e41]:
        - emphasis [ref=e42]: "Last Updated: April 2026"
      - generic [ref=e43]:
        - generic [ref=e44]:
          - heading "1. What Are Cookies?" [level=2] [ref=e45]
          - paragraph [ref=e46]: Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it. Cookies can be "persistent" (remain until they expire or are deleted) or "session" (deleted when you close your browser).
        - generic [ref=e47]:
          - heading "2. How This Site Uses Cookies" [level=2] [ref=e48]
          - paragraph [ref=e49]: This site uses cookies to store your cookie consent preferences, and optionally to analyze traffic and support marketing — only with your explicit consent.
        - generic [ref=e50]:
          - heading "3. Types of Cookies" [level=2] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - strong [ref=e54]: "Necessary:"
              - text: Required for the site to function (e.g. storing your consent choice). Always active.
            - listitem [ref=e55]:
              - strong [ref=e56]: "Analytics:"
              - text: Help understand how visitors use the site (e.g. Google Analytics, Microsoft Clarity). Opt-in only.
            - listitem [ref=e57]:
              - strong [ref=e58]: "Marketing:"
              - text: Used for retargeting and advertising (e.g. Meta Pixel). Opt-in only.
        - generic [ref=e59]:
          - heading "4. Managing Your Preferences" [level=2] [ref=e60]
          - paragraph [ref=e61]: You can update your cookie preferences at any time using the "Cookie Preferences" link in the footer. You can also clear your browser's local storage and cookies to reset your preferences.
        - generic [ref=e62]:
          - heading "5. Contact" [level=2] [ref=e63]
          - paragraph [ref=e64]:
            - text: Questions? Contact Clarke Moyer via
            - link "LinkedIn" [ref=e65] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/clarkemoyer
            - text: .
  - alert [ref=e66]
  - region "Cookie consent notice" [ref=e67]:
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading "We Value Your Privacy" [level=3] [ref=e71]
        - paragraph [ref=e72]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e73]:
          - link "Privacy Policy" [ref=e74] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e75] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e76]:
        - button "Decline All" [ref=e77]
        - button "Customize" [ref=e78]
        - button "Accept All" [ref=e79]
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
     |                                                            ^ Error: /cookie-policy/ missing <main>
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