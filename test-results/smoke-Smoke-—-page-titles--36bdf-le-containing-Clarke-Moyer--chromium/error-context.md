# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-itil-4-foundation-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-itil-4-foundation-passing-guide/ title: ""

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
     |                                                  ^ Error: /clarke-moyer-itil-4-foundation-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```