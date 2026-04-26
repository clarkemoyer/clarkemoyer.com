# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /quotes/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /quotes/ missing <main>

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
    - generic [ref=e40]:
      - generic [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
        - text: /
        - link "Fun" [ref=e43] [cursor=pointer]:
          - /url: /fun/
        - text: / Quotes
      - heading "Famous Business Quotes" [level=1] [ref=e44]
      - paragraph [ref=e45]: Popular culture distills hard truths. Here are some lyrics that hit differently when you're thinking about technology, organizations, and change.
    - generic [ref=e47]:
      - generic [ref=e49]:
        - heading "Somebody That I Used to Know" [level=2] [ref=e50]
        - paragraph [ref=e51]:
          - emphasis [ref=e52]: Gotye (feat. Kimbra)
        - blockquote [ref=e53]: “You can be addicted to a certain kind of sadness.”
        - button "Play Gotye - Somebody That I Used to Know (feat. Kimbra)" [ref=e56]:
          - img "Gotye - Somebody That I Used to Know (feat. Kimbra)" [ref=e57]
        - heading "The Business Angle" [level=3] [ref=e59]
        - generic [ref=e60]:
          - paragraph [ref=e61]: Organizations and individuals become attached to legacy systems, processes, and ways of working — even when they cause friction. The familiar discomfort of the old beats the uncertainty of the new. It's a strange comfort, choosing the devil you know over the one you don't.
          - paragraph [ref=e62]: This maps directly to status quo bias, sunk cost fallacy, and resistance to digital transformation. Teams defend aging infrastructure not because it's better, but because it's known. Processes persist not because they work, but because rebuilding them feels riskier than tolerating them.
          - paragraph [ref=e63]: Change management isn't just about deploying new technology — it's about breaking the emotional dependency on legacy ways of doing things. Acknowledge the grief. Name the attachment. Then move forward anyway.
      - generic [ref=e65]:
        - heading "7 Rings" [level=2] [ref=e66]
        - paragraph [ref=e67]:
          - emphasis [ref=e68]: Ariana Grande
        - blockquote [ref=e69]: “People who say money can’t solve their problems must not have had enough money to solve them.”
        - button "Play Ariana Grande - 7 rings" [ref=e72]:
          - img "Ariana Grande - 7 rings" [ref=e73]
        - heading "The Business Angle" [level=3] [ref=e75]
        - generic [ref=e76]:
          - paragraph [ref=e77]: Underfunded IT teams often treat tool selection, infrastructure upgrades, and talent acquisition as unsolvable problems — when the real constraint is budget. "We can't fix that" frequently translates to "we haven't allocated what it would cost to fix that." Adequate investment unlocks options that didn't exist before.
          - paragraph [ref=e78]: This speaks directly to IT budget advocacy and the hidden cost of technical debt. Every year an aging system isn't replaced, the organization pays in productivity loss, security exposure, and engineer burnout. The "savings" from not upgrading are often illusory — they're just future costs in disguise.
          - paragraph [ref=e79]: Chronically understaffed engineering organizations stay stuck in cycles of firefighting instead of building. You can't innovate when your whole team is on-call for a system that should have been retired three budget cycles ago. Sometimes the most strategic thing a technology leader can do is make the business case — clearly, loudly, and with data — for simply spending the money.
  - alert [ref=e80]
  - region "Cookie consent notice" [ref=e81]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - heading "We Value Your Privacy" [level=3] [ref=e85]
        - paragraph [ref=e86]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e87]:
          - link "Privacy Policy" [ref=e88] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e89] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e90]:
        - button "Decline All" [ref=e91]
        - button "Customize" [ref=e92]
        - button "Accept All" [ref=e93]
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
     |                                                            ^ Error: /quotes/ missing <main>
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