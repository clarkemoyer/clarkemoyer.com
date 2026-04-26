# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-comptia-project-plus-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-comptia-project-plus-passing-guide/ missing <main>

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
        - text: / Project+ Guide
      - heading "Clarke Moyer CompTIA Project+ Certification Passing Guide" [level=1] [ref=e9]
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
      - paragraph [ref=e18]:
        - text: ⚠️
        - strong [ref=e19]: "A Note From Clarke:"
        - text: I no longer recommend pursuing the CompTIA Project+ as a project management certification. Skip this and go directly to the SAFe SPC certification instead — it carries significantly more weight in enterprise and DoD environments and reflects how modern software delivery actually works.
        - link "See the SAFe SPC Passing Guide" [ref=e20] [cursor=pointer]:
          - /url: /clarke-moyer-safe-spc-certification-passing-guide/
        - text: to start there instead. This guide remains here for those already committed to the Project+ path.
      - generic [ref=e21]:
        - paragraph [ref=e22]: 📋 Active CE Renewal
        - paragraph [ref=e23]:
          - text: Clarke actively maintains this certification through CompTIA's Continuing Education (CE) program — which is why you'll see the "ce" suffix (e.g., Project+
          - strong [ref=e24]: ce
          - text: ) in his credentials. While Clarke no longer recommends this as a starting path, he keeps it current as part of his professional maintenance discipline. An active CE certification requires ongoing education and renewal — it's not a one-time achievement left to expire.
      - generic [ref=e25]:
        - 'heading "BLUF: To pass the Project+, do 4 things" [level=2] [ref=e26]'
        - list [ref=e27]:
          - listitem [ref=e28]: Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.
          - listitem [ref=e29]: "Go audio-first: get the audiobook version and study while walking, driving, or doing household tasks. Passive absorption adds up."
          - listitem [ref=e30]: Practice tests are the core. Buy the book primarily for access to the digital test bank — that’s the real product.
          - listitem [ref=e31]: Don’t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take voucher is your safety net.
      - paragraph [ref=e32]: I passed the CompTIA Project+ in January 2009, near the end of my early CompTIA certification run. At the time it was a useful entry-level project management credential — lighter weight than the PMP but still a recognizable signal. I went on to earn the PMP in 2012 and the SAFe SPC in 2020, which are the credentials that have actually mattered in my career.
      - paragraph [ref=e33]:
        - strong [ref=e34]: "Obtained:"
        - text: January 14, 2009 |
        - strong [ref=e35]: "License:"
        - text: COMP001007606759
      - heading "Study Method" [level=2] [ref=e36]
      - heading "1. Create Competition" [level=3] [ref=e37]
      - paragraph [ref=e38]: Find someone — a colleague, study buddy, anyone — and make it a race. Announce it publicly if possible. The social pressure of a competition is more powerful than any study schedule.
      - heading "2. Audio First" [level=3] [ref=e39]
      - paragraph [ref=e40]: Project+ is heavily vocabulary-driven — project lifecycle phases, terminology, roles, risk concepts. This is ideal material for audio study during commutes and downtime. The concepts aren’t technically complex, but there are a lot of them, and audio repetition builds the recognition you need for test day.
      - heading "3. Practice Tests Are the Core" [level=3] [ref=e41]
      - paragraph [ref=e42]: Buy the study guide primarily for the digital test prep access. The online test bank is the real product. Spend your study hours in the test portal, not reading the book cover to cover.
      - heading "4. Don’t Over-Study" [level=3] [ref=e43]
      - paragraph [ref=e44]: Run all questions once. Rerun the ones you got wrong until you score zero wrong. Then switch to a real-test mix (random, timed) until you hit 90%+. Test at 80%. You have a re-take.
      - heading "Books / Materials" [level=2] [ref=e45]
      - heading "CompTIA Project+ Study Guide ← Must Buy" [level=3] [ref=e46]
      - paragraph [ref=e47]: The standard study guide for CompTIA Project+. Buy it for the online practice test access that comes with it — that’s where your prep time should go.
      - paragraph [ref=e48]:
        - link "CompTIA Project+ Study Guide ↗" [ref=e49] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=CompTIA+Project+Plus+study+guide&tag=clarkemoyer-20
      - heading "Test Strategy" [level=2] [ref=e50]
      - paragraph [ref=e51]: The Project+ PK0-005 exam is 95 questions, 90 minutes, with a passing score of 710 (on a 100–900 scale). It covers project management concepts, constraints, communication, change management, and project tools. The questions are scenario-based — read carefully and think about what a competent project manager would actually do, not just what the textbook says.
      - paragraph [ref=e52]: Project+ is vendor-neutral and doesn’t require documented project management experience (unlike the PMP). If you’re early in your career and need a project management credential quickly, it’s achievable. But if you have the experience hours, go straight to the PMP — and then consider SAFe SPC if you’re working in Agile or DoD software environments.
      - paragraph [ref=e53]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e54] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e56] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e57]
  - region "Cookie consent notice" [ref=e58]:
    - generic [ref=e60]:
      - generic [ref=e61]:
        - heading "We Value Your Privacy" [level=3] [ref=e62]
        - paragraph [ref=e63]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e64]:
          - link "Privacy Policy" [ref=e65] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e66] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e67]:
        - button "Decline All" [ref=e68]
        - button "Customize" [ref=e69]
        - button "Accept All" [ref=e70]
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
     |                                                            ^ Error: /clarke-moyer-comptia-project-plus-passing-guide/ missing <main>
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