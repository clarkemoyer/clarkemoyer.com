# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-safe-spc-certification-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-safe-spc-certification-passing-guide/ title: ""

expect(received).toMatch(expected)

Expected pattern: /Clarke Moyer/i
Received string:  ""
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
  5  |  * Smoke Tests
  6  |  * Verifies all pages return HTTP 200 and have a non-empty <title> containing
  7  |  * "Clarke Moyer". Tests run against the live dev/preview server.
  8  |  */
  9  | 
  10 | const certPages = [
  11 |   '/clarke-moyer-cissp-certification-passing-guide/',
  12 |   '/clarke-moyer-cissp-issep-certification-passing-guide/',
  13 |   '/clarke-moyer-ciw-professional-passing-guide/',
  14 |   '/clarke-moyer-comptia-a-plus-passing-guide/',
  15 |   '/clarke-moyer-comptia-network-plus-passing-guide/',
  16 |   '/clarke-moyer-comptia-project-plus-passing-guide/',
  17 |   '/clarke-moyer-comptia-security-plus-passing-guide/',
  18 |   '/clarke-moyer-itil-4-foundation-passing-guide/',
  19 |   '/clarke-moyer-mcp-passing-guide/',
  20 |   '/clarke-moyer-microsoft-ai-900-passing-guide/',
  21 |   '/clarke-moyer-microsoft-az-500-passing-guide/',
  22 |   '/clarke-moyer-microsoft-az-900-passing-guide/',
  23 |   '/clarke-moyer-microsoft-ms-900-passing-guide/',
  24 |   '/clarke-moyer-microsoft-sc-500-passing-guide/',
  25 |   '/clarke-moyer-microsoft-sc-900-passing-guide/',
  26 |   '/clarke-moyer-pmp-certification-passing-guide/',
  27 |   '/clarke-moyer-safe-spc-certification-passing-guide/',
  28 |   '/clarke-moyer-vcp4-dcv-passing-guide/',
  29 |   '/clarke-moyer-vcp5-dcv-passing-guide/',
  30 |   '/clarke-moyer-vcp6-cma-passing-guide/',
  31 |   '/clarke-moyer-vcp-am-passing-guide/',
  32 | ]
  33 | 
  34 | const allPages = [...new Set([...testConfig.pages, ...certPages])]
  35 | 
  36 | test.describe('Smoke — HTTP 200 for all pages', () => {
  37 |   for (const path of allPages) {
  38 |     test(`${path} returns 200`, async ({ page }) => {
  39 |       const response = await page.goto(path)
  40 |       expect(response, `${path} response should not be null`).not.toBeNull()
  41 |       expect(response!.status(), `${path} should return 200`).toBe(200)
  42 |     })
  43 |   }
  44 | })
  45 | 
  46 | test.describe('Smoke — page titles', () => {
  47 |   for (const path of allPages) {
  48 |     test(`${path} has a title containing "Clarke Moyer"`, async ({ page }) => {
  49 |       await page.goto(path)
  50 |       const title = await page.title()
> 51 |       expect(title, `${path} title: "${title}"`).toMatch(/Clarke Moyer/i)
     |                                                  ^ Error: /clarke-moyer-safe-spc-certification-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```