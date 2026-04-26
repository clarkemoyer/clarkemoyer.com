# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-safe-spc-certification-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-safe-spc-certification-passing-guide/ missing <main>

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
        - text: / SAFe SPC Guide
      - heading "Clarke Moyer SAFe SPC Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - text: ⚠️ This is NOT a self-study certification. The SAFe SPC requires attending an official
        - strong [ref=e14]: 4-day Scaled Agile instructor-led training event
        - text: . Self-study alone will not make you eligible to sit for the exam. The exam is taken at the conclusion of the course.
      - generic [ref=e15]:
        - paragraph [ref=e16]: 📋 About Clarke’s SAFe Journey
        - paragraph [ref=e17]:
          - text: Clarke originally obtained the SAFe SPC certification at version 5 and has been renewing and maintaining it through version 6. This page covers the current exam but Clarke’s journey started with SAFe 5 — the credential shown in his LinkedIn headline reflects the most recent active version (SPC6). Note that LinkedIn shows the
          - emphasis [ref=e18]: original certification date
          - text: ", not the renewal date — a 2020 SAFe SPC that’s still active in 2025 represents five-plus years of maintained professional standing, not a one-time achievement."
      - generic [ref=e19]:
        - 'heading "BLUF: To earn the SAFe SPC, do 4 things" [level=2] [ref=e20]'
        - list [ref=e21]:
          - listitem [ref=e22]: Create a public commitment — tell someone you’re registering for the SPC course and when. The 4-day course is intense; knowing you’ve announced it keeps you from bailing when the week gets hard.
          - listitem [ref=e23]: Audio-first in prep. Read SAFe 5.0 Distilled and related transformation context books as audio before the course. Walking in with a mental model of the SAFe framework makes the 4 days significantly more productive.
          - listitem [ref=e24]: Engage fully during the course — the exam follows immediately after. The practice scenarios and exercises in class are the prep. Take notes, ask questions, do the work. This is your test bank.
          - listitem [ref=e25]: Don’t over-study post-course. The exam is designed to be passable by an engaged participant. If you were present and active for 4 days, test your readiness with the provided practice and sit the exam promptly — don’t let the window close.
      - paragraph [ref=e26]: The SAFe Program Consultant (SPC) is Scaled Agile’s implementation professional credential. SPCs are trained to lead SAFe transformations — they can train other SAFe practitioners and drive Lean-Agile change at enterprise scale. It’s not a passive knowledge cert. It’s a coach-and-implement credential.
      - paragraph [ref=e27]:
        - text: I earned my
        - strong [ref=e28]: Certified SAFe® 5 Program Consultant (SPC5)
        - text: "on"
        - strong [ref=e29]: October 18, 2020
        - text: "(License: 00763322-3362). The course was one of the most densely packed four days of professional training I’ve done — and the exam at the end was genuinely fair to anyone who was present and paying attention."
      - heading "How This Is Different from CISSP or PMP" [level=2] [ref=e30]
      - paragraph [ref=e31]: "For CISSP and PMP, the prep path is self-directed: buy books, grind practice tests, schedule and sit. The SAFe SPC doesn’t work that way."
      - paragraph [ref=e32]:
        - text: You must register for and attend an official
        - link "Scaled Agile SPC training event" [ref=e33] [cursor=pointer]:
          - /url: https://scaledagile.com/training/safe-for-teams/
        - text: — typically a 4-day live or virtual course delivered by a certified SAFe Training Partner. The exam is administered during or immediately following that course. There is no way to bypass the training event to sit for the exam independently.
      - paragraph [ref=e34]:
        - text: That said, what you do
        - emphasis [ref=e35]: before
        - text: the course matters a lot. Candidates who arrive with context — having read the framework, understood the terminology, and worked with Agile teams — get far more out of the 4 days and perform better on the exam.
      - 'heading "Pre-Course Prep: Books & Materials" [level=2] [ref=e36]'
      - heading "SAFe 5.0 Distilled — Dean Leffingwell ← Read Before the Course" [level=3] [ref=e37]
      - paragraph [ref=e38]: Written by SAFe’s creator, this is the authoritative overview of the framework. Read or listen to this before your course date. It won’t teach you everything you need for the exam — that happens in class — but it primes your mental model so you can absorb the 4-day training at a higher level. Audio version available on Audible.
      - paragraph [ref=e39]:
        - link "SAFe 5.0 Distilled — Dean Leffingwell ↗" [ref=e40] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B09NQ3HCNZ?tag=clarkemoyer-20
      - heading "Project to Product — Mik Kersten" [level=3] [ref=e41]
      - paragraph [ref=e42]:
        - text: Not a SAFe book, but essential context for anyone driving enterprise transformation. Kersten’s Flow Framework explains
        - emphasis [ref=e43]: why
        - text: organizations struggle to scale software delivery — and that “why” is the backdrop against which SAFe makes the most sense. If you’re selling or implementing SAFe at scale, this book gives you the transformation story.
      - paragraph [ref=e44]:
        - link "Project to Product — Mik Kersten ↗" [ref=e45] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1098129628?tag=clarkemoyer-20
      - 'heading "The SPC Course: What to Expect" [level=2] [ref=e46]'
      - paragraph [ref=e47]: The 4-day SPC course is rigorous. You’ll cover the full SAFe Big Picture, PI Planning, ART launch mechanics, Lean-Agile leadership, coaching, and change management. The format is workshop-heavy — you’re not sitting through a lecture. You’re doing exercises, playing roles, and practicing facilitation.
      - paragraph [ref=e48]: The exam at the end tests whether you can apply the framework, not just recite it. Multiple choice, scenario-based questions. Candidates who were engaged during the course find it straightforward. Candidates who checked out during the 4 days find it hard.
      - paragraph [ref=e49]: "Tip: Take notes aggressively during the course. The facilitation exercises and discussion threads are where the exam-relevant nuances live. The slides are available after, but your own notes will be more useful."
      - 'heading "After Certification: Staying Current" [level=2] [ref=e50]'
      - paragraph [ref=e51]:
        - text: SAFe credentials require renewal every year — you need to complete continuing education and pay a renewal fee to remain certified. Scaled Agile releases framework updates regularly (currently SAFe 6.0). Stay connected to the
        - link "Scaled Agile community" [ref=e52] [cursor=pointer]:
          - /url: https://scaledagile.com
        - text: and the SA Community of Practice platform to track framework evolution and maintain your SPC.
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
     |                                                            ^ Error: /clarke-moyer-safe-spc-certification-passing-guide/ missing <main>
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