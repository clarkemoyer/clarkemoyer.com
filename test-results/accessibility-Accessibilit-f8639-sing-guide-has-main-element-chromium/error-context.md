# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-cissp-issep-certification-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-cissp-issep-certification-passing-guide/ missing <main>

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
        - text: / CISSP-ISSEP Guide
      - heading "Clarke Moyer CISSP-ISSEP Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]: "⚠️ Prerequisites: You must already hold an active CISSP before pursuing the ISSEP concentration. This is not a standalone certification — it requires an existing CISSP in good standing."
      - generic [ref=e14]:
        - 'heading "BLUF: To pass the CISSP-ISSEP, do 4 things" [level=2] [ref=e15]'
        - list [ref=e16]:
          - listitem [ref=e17]: Create a public contest with someone to complete your ISSEP (or another certification) before they complete a similar educational goal. Accountability and competition work — even if you lose the race, you both win.
          - listitem [ref=e18]: Audio-first. The ISSEP domains map tightly to the Systems Security Engineering (SSE) process — listen while walking, driving, or doing tasks. Absorb the framework before you start grinding practice questions.
          - listitem [ref=e19]: Practice tests are the mechanism. ISSEP-specific test banks are slim, but work what you can find. Run through everything once, then re-run only your wrong answers until zero remain. Then simulate full test conditions until you’re consistently above 90%.
          - listitem [ref=e20]: Don’t over-study. When you’re over 80% on official prep, schedule and sit. The CISSP you already hold is strong context for this exam — trust it.
      - paragraph [ref=e21]: The CISSP-ISSEP concentration is awarded by ISC2 to active CISSP holders who demonstrate mastery of Systems Security Engineering. If you work in defense, government, or any environment where security must be engineered into systems from the ground up — this credential is a natural next step after your CISSP.
      - paragraph [ref=e22]:
        - text: I earned my ISSEP on
        - strong [ref=e23]: November 6, 2019
        - text: "(License: 393607). By the time I sat for it, the CISSP framework was already second nature. The ISSEP is narrower in scope but deeper in its focus on systems engineering — the SSE-CMM, the RMF, and integrating security into the full acquisition and development lifecycle."
      - heading "Timeline & Context" [level=2] [ref=e24]
      - paragraph [ref=e25]: I’ve found the most sustainable way to stay sharp is to set one educational objective per year and make it public — usually as a friendly competition. The ISSEP came out of a year where I needed to validate my Systems Security Engineering depth to align with IASAE III requirements. It was a logical progression from my CISSP and mapped directly to work I was already doing.
      - paragraph [ref=e26]: The ISSEP doesn’t require a new study regimen from scratch. If you’re already a working CISSP in a security engineering role, you know more than you think. The exam rewards applied knowledge more than memorization.
      - heading "Books / Materials" [level=2] [ref=e27]
      - heading "ISC2 CISSP-ISSEP Official Study Guide" [level=3] [ref=e28]
      - paragraph [ref=e29]: "The official ISC2 study guide for the ISSEP concentration. Covers the ISSEP CBK domains: Systems Security Engineering, Certification and Accreditation (C&A)/RMF, Technical Management, and U.S. Government Information Assurance Regulations. This is your primary reference for the concentration material beyond the CISSP baseline."
      - paragraph [ref=e30]:
        - link "ISC2 CISSP-ISSEP Official Study Guide ↗" [ref=e31] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1119458935?tag=clarkemoyer-20
      - heading "CISSP-ISSEP Practice Tests ← Must Find" [level=3] [ref=e32]
      - paragraph [ref=e33]: Dedicated ISSEP practice test books are limited compared to CISSP. Search for what’s current — the landscape changes and newer resources appear regularly.
      - paragraph [ref=e34]:
        - 'link "Search: CISSP-ISSEP Practice Tests on Amazon ↗" [ref=e35] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=CISSP-ISSEP+practice+tests&tag=clarkemoyer-20
      - generic [ref=e36]:
        - heading "💡 Use Your CISSP Materials Too" [level=4] [ref=e37]
        - paragraph [ref=e38]:
          - text: The CISSP All-in-One Exam Guide (and its audiobook) contain significant ISSEP-relevant content. If you’ve already worked through that material for your CISSP, you have a head start. See the
          - link "CISSP Certification Guide" [ref=e39] [cursor=pointer]:
            - /url: /clarke-moyer-cissp-certification-passing-guide/
          - text: for those resources.
      - heading "The ISSEP Domains" [level=2] [ref=e40]
      - paragraph [ref=e41]: "The ISSEP exam covers four primary domains:"
      - list [ref=e42]:
        - listitem [ref=e43]:
          - strong [ref=e44]: Systems Security Engineering (SSE)
          - text: — The core. SSE process, SSE-CMM, applying security across the system lifecycle.
        - listitem [ref=e45]:
          - strong [ref=e46]: Certification & Accreditation / RMF
          - text: — The Risk Management Framework, C&A processes, NIST SP 800-series integration.
        - listitem [ref=e47]:
          - strong [ref=e48]: Technical Management
          - text: — Engineering management, project management for security engineering efforts.
        - listitem [ref=e49]:
          - strong [ref=e50]: U.S. Government Information Assurance Regulations
          - text: — FISMA, DIACAP/RMF history, relevant legislation.
      - paragraph [ref=e51]: If you work in DoD or federal IA, domains 2 and 4 will be very familiar. Domain 1 is where most candidates need to focus their study time.
      - heading "Test Strategy" [level=2] [ref=e52]
      - paragraph [ref=e53]: The same method that works for the CISSP works here — adapted for the ISSEP’s narrower scope. Practice test banks are smaller, so you’ll exhaust them faster. That’s fine — run through everything, isolate your wrong answers, and re-run until clean. Then simulate full exams until you’re consistently over 90%.
      - paragraph [ref=e54]: "The ISSEP is a concentration exam — it assumes CISSP-level knowledge as a baseline. Don’t re-study CISSP fundamentals. Focus on the delta: the engineering process, RMF depth, and government IA frameworks."
      - paragraph [ref=e55]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e56] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e58] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e59]
  - region "Cookie consent notice" [ref=e60]:
    - generic [ref=e62]:
      - generic [ref=e63]:
        - heading "We Value Your Privacy" [level=3] [ref=e64]
        - paragraph [ref=e65]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e66]:
          - link "Privacy Policy" [ref=e67] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e68] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e69]:
        - button "Decline All" [ref=e70]
        - button "Customize" [ref=e71]
        - button "Accept All" [ref=e72]
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
     |                                                            ^ Error: /clarke-moyer-cissp-issep-certification-passing-guide/ missing <main>
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