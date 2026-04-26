# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-ciw-professional-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-ciw-professional-passing-guide/ missing <main>

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
        - text: /
        - link "Certification Guides" [ref=e8] [cursor=pointer]:
          - /url: /certification-guides/
        - text: / CIW Professional Guide
      - heading "Clarke Moyer CIW Professional Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 🎓 WGU Degree Program Context
        - paragraph [ref=e14]:
          - text: Clarke obtained this certification as part of completing his
          - strong [ref=e15]: BS-IT (Bachelor of Science in Information Technology)
          - text: at
          - link "Western Governors University (WGU)" [ref=e16] [cursor=pointer]:
            - /url: /wgu-referral-program
          - text: . WGU's IT degree program integrates industry certification preparation directly into the curriculum — students can earn both the degree and the certifications simultaneously. This is why Clarke holds multiple foundational certifications from the same 2008–2009 period. If you're considering WGU, the built-in cert prep is a significant part of the value.
      - generic [ref=e17]:
        - paragraph [ref=e18]: 📋 Market Recognition Note
        - paragraph [ref=e19]: The CIW certification program has limited current market recognition compared to modern cloud certifications. Clarke recommends pursuing Microsoft or CompTIA certifications instead for current market value.
      - generic [ref=e20]:
        - 'heading "BLUF: To pass CIW exams, do 4 things" [level=2] [ref=e21]'
        - list [ref=e22]:
          - listitem [ref=e23]: Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.
          - listitem [ref=e24]: Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.
          - listitem [ref=e25]: Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.
          - listitem [ref=e26]: "Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you’re scoring 90%+. Don’t over-study — test when you hit 80% and use the re-take as your safety net."
      - heading "About CIW Professional" [level=2] [ref=e27]
      - paragraph [ref=e28]:
        - text: CIW (Certified Internet Webmaster) Professional is a foundational web technology credential covering internet fundamentals, web design, and network technology. Clarke obtained his CIW Professional on
        - strong [ref=e29]: April 22, 2009
        - text: ", alongside the CIW Database Design Specialist — a companion certification focused on relational database design, SQL, and data modeling for web applications."
      - paragraph [ref=e30]: These credentials were earned during Clarke’s intensive 2008–2009 certification sprint, which also included CompTIA A+, Network+, Security+, Project+, and Microsoft MCP. They represent the foundational web and data technology knowledge that supported his early IT career.
      - heading "CIW Database Design Specialist" [level=2] [ref=e31]
      - paragraph [ref=e32]: "The CIW Database Design Specialist companion certification validates skills in:"
      - list [ref=e33]:
        - listitem [ref=e34]: Relational database concepts and normalization
        - listitem [ref=e35]: SQL queries — SELECT, JOIN, subqueries, aggregation
        - listitem [ref=e36]: Database design and entity-relationship modeling
        - listitem [ref=e37]: Web database integration basics
      - heading "Historical Context" [level=2] [ref=e38]
      - paragraph [ref=e39]: In 2009, CIW was a recognized vendor-neutral web technology credential. The program has since lost significant market traction as the industry moved toward cloud platforms, role-based Microsoft certifications, and CompTIA’s expanding catalog. While these certs served a legitimate purpose at the time, Clarke would direct someone building credentials today toward Microsoft Azure or CompTIA tracks instead.
      - heading "Study Materials" [level=2] [ref=e40]
      - heading "CIW Professional Study Guides" [level=3] [ref=e41]
      - paragraph [ref=e42]: If you’re pursuing CIW for a specific contract requirement, search for current study guides below. Materials are sparse — most preparation will come from official CIW courseware.
      - paragraph [ref=e43]:
        - 'link "Search: CIW Professional Study Guides ↗" [ref=e44] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=CIW+Professional+study+guide&tag=clarkemoyer-20
      - paragraph [ref=e45]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e46] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e48] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e49]
  - region "Cookie consent notice" [ref=e50]:
    - generic [ref=e52]:
      - generic [ref=e53]:
        - heading "We Value Your Privacy" [level=3] [ref=e54]
        - paragraph [ref=e55]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e56]:
          - link "Privacy Policy" [ref=e57] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e58] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e59]:
        - button "Decline All" [ref=e60]
        - button "Customize" [ref=e61]
        - button "Accept All" [ref=e62]
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
     |                                                            ^ Error: /clarke-moyer-ciw-professional-passing-guide/ missing <main>
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