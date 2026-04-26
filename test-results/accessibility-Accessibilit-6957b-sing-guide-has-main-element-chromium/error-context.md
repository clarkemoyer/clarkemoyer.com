# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-itil-4-foundation-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-itil-4-foundation-passing-guide/ missing <main>

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
        - text: / ITIL 4 Foundation Guide
      - heading "Clarke Moyer ITIL 4 Foundation Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - strong [ref=e14]: "ℹ️ A Note From Clarke:"
        - text: I recommend this cert specifically for those working on contracts that require it. ITIL 4 Foundation is a good baseline for IT service management vocabulary and process understanding, but it’s not a certification I actively pursue beyond the foundation level. If your contract or employer requires it, earn it — it’s approachable and the exam is straightforward with the right prep. Otherwise, prioritize credentials with more career leverage.
      - generic [ref=e15]:
        - 'heading "BLUF: To pass ITIL 4 Foundation, do 4 things" [level=2] [ref=e16]'
        - list [ref=e17]:
          - listitem [ref=e18]: Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.
          - listitem [ref=e19]: "Go audio-first: study while walking, driving, or doing household tasks. ITIL vocabulary is perfectly suited to passive audio absorption."
          - listitem [ref=e20]: Practice tests are the core. Buy the book primarily for access to the digital test bank — that’s the real product.
          - listitem [ref=e21]: Don’t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take is your safety net.
      - paragraph [ref=e22]: ITIL 4 Foundation is the entry point to the ITIL (Information Technology Infrastructure Library) certification scheme. It covers IT service management concepts, the ITIL service value system, the four dimensions model, and the guiding principles that underpin modern ITSM practice.
      - paragraph [ref=e23]:
        - text: It’s a vendor-neutral credential managed by
        - link "Axelos/PeopleCert" [ref=e24] [cursor=pointer]:
          - /url: https://www.axelos.com/certifications/itil-service-management/itil-4-foundation
        - text: and is frequently cited in DoD and enterprise IT service contracts as a required baseline. The exam itself is accessible — 40 questions, 60 minutes, 65% to pass. With focused prep, most people clear it in 2–4 weeks of part-time study.
      - heading "What ITIL 4 Foundation Covers" [level=2] [ref=e25]
      - list [ref=e26]:
        - listitem [ref=e27]:
          - strong [ref=e28]: Service Management Concepts
          - text: — value, outcomes, costs, risks, utility, and warranty
        - listitem [ref=e29]:
          - strong [ref=e30]: The ITIL Service Value System (SVS)
          - text: — the guiding principles, governance, service value chain, practices, and continual improvement
        - listitem [ref=e31]:
          - strong [ref=e32]: The Four Dimensions Model
          - text: — Organizations & People, Information & Technology, Partners & Suppliers, Value Streams & Processes
        - listitem [ref=e33]:
          - strong [ref=e34]: ITIL Guiding Principles
          - text: — focus on value, start where you are, progress iteratively, collaborate, think holistically, keep it simple, optimize and automate
        - listitem [ref=e35]:
          - strong [ref=e36]: Key ITIL Practices
          - text: — incident management, problem management, change enablement, service desk, service level management, and more
      - heading "Study Method" [level=2] [ref=e37]
      - heading "1. Create Competition" [level=3] [ref=e38]
      - paragraph [ref=e39]: Find someone — a colleague, study buddy, anyone — and make it a race. Announce it publicly. The social accountability is more powerful than any study schedule. ITIL Foundation is well-scoped enough that a friendly competition can realistically conclude in under a month.
      - heading "2. Audio First" [level=3] [ref=e40]
      - paragraph [ref=e41]: ITIL is vocabulary-dense in a very specific way — lots of defined terms, principles, and practice names that need to feel familiar before test day. This is ideal audio material. Listen during commutes, walks, or workouts. By the time you sit down for practice tests, the terminology should already feel like background knowledge.
      - heading "3. Practice Tests Are the Core" [level=3] [ref=e42]
      - paragraph [ref=e43]: Buy the official study guide primarily for the digital practice test access. The online test bank is the real product. The exam questions are scenario-based — you need test reps, not just reading.
      - heading "4. Don’t Over-Study" [level=3] [ref=e44]
      - paragraph [ref=e45]: At 40 questions with a 65% pass mark, this is one of the more forgiving exams in enterprise IT. Run all practice questions once, rerun wrong ones to zero, then do timed full-length mocks until you hit 90%+. Schedule your test at 80%. The bar is approachable — don’t let it become a months-long project.
      - heading "Books / Materials" [level=2] [ref=e46]
      - heading "ITIL 4 Foundation Official Guide (Axelos) ← Must Buy" [level=3] [ref=e47]
      - paragraph [ref=e48]: The official Axelos publication. This is the authoritative source — the exam is written against this material. Buy it for the practice test access included digitally.
      - paragraph [ref=e49]:
        - link "ITIL 4 Foundation Official Guide (Axelos) ↗" [ref=e50] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=ITIL+4+Foundation+official+guide+Axelos&tag=clarkemoyer-20
      - heading "ITIL 4 Foundation Practice Exam Questions" [level=3] [ref=e51]
      - paragraph [ref=e52]: Dedicated practice question banks let you drill scenarios beyond what the official guide includes. Useful for the final stretch before test day.
      - paragraph [ref=e53]:
        - link "ITIL 4 Foundation Practice Exam Questions ↗" [ref=e54] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=ITIL+4+Foundation+practice+exam+questions&tag=clarkemoyer-20
      - heading "ITIL 4 Foundation Audiobook" [level=3] [ref=e55]
      - paragraph [ref=e56]: For the audio-first method. ITIL’s guiding principles and practice definitions are well-suited to audio — listen repeatedly until the vocabulary is automatic.
      - paragraph [ref=e57]:
        - link "ITIL 4 Foundation Audiobook ↗" [ref=e58] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=ITIL+4+Foundation+audiobook&tag=clarkemoyer-20
      - heading "Official Training & Exam" [level=2] [ref=e59]
      - paragraph [ref=e60]:
        - text: "ITIL 4 Foundation is owned by Axelos and administered by PeopleCert. Official training, exam booking, and accredited course listings are available at:"
        - link "axelos.com — ITIL 4 Foundation" [ref=e61] [cursor=pointer]:
          - /url: https://www.axelos.com/certifications/itil-service-management/itil-4-foundation
      - paragraph [ref=e62]: The exam can be taken online (proctored) or at a test center. Online proctoring through PeopleCert is convenient and widely available. The exam is 40 multiple-choice questions, 60 minutes, passing score 26/40 (65%).
      - paragraph [ref=e63]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e64] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e66] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e67]
  - region "Cookie consent notice" [ref=e68]:
    - generic [ref=e70]:
      - generic [ref=e71]:
        - heading "We Value Your Privacy" [level=3] [ref=e72]
        - paragraph [ref=e73]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e74]:
          - link "Privacy Policy" [ref=e75] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e76] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e77]:
        - button "Decline All" [ref=e78]
        - button "Customize" [ref=e79]
        - button "Accept All" [ref=e80]
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
     |                                                            ^ Error: /clarke-moyer-itil-4-foundation-passing-guide/ missing <main>
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