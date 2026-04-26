# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-pmp-certification-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-pmp-certification-passing-guide/ title: ""

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
        - text: / PMP Guide
      - heading "Clarke Moyer PMP Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - heading "⚠️ A Note From Clarke" [level=2] [ref=e13]
        - paragraph [ref=e14]:
          - text: I no longer recommend pursuing the PMP as a primary project management certification. I recommend going directly to the
          - link "SAFe SPC certification" [ref=e15] [cursor=pointer]:
            - /url: /clarke-moyer-safe-spc-certification-passing-guide/
          - text: instead — it reflects how modern software delivery and enterprise Lean-Agile transformation actually work, and carries more weight in current DoD and tech environments. This guide remains here for those already committed to the PMP path.
        - generic [ref=e16]:
          - paragraph [ref=e17]: 📋 About Clarke’s PMP Journey
          - paragraph [ref=e18]:
            - text: Clarke obtained the PMP in 2012 under an earlier version of the PMBOK and has renewed and maintained it since. The study materials linked here reflect the current exam format, but the core project management principles that Clarke tested on have remained consistent through multiple PMBOK versions. Longevity in certification maintenance is itself a professional signal — LinkedIn shows the
            - emphasis [ref=e19]: original certification date
            - text: ", not the renewal date, so a 2012 PMP that’s still active today represents 10+ years of maintained professional standing, not a one-time achievement."
      - generic [ref=e20]:
        - 'heading "BLUF: To pass the PMP, do 4 things" [level=2] [ref=e21]'
        - list [ref=e22]:
          - listitem [ref=e23]: Create a public contest with someone to complete your PMP before they finish a comparable educational goal. The competition keeps you accountable and moving.
          - listitem [ref=e24]: Audio-first. Rita Mulcahy’s audiobook is your commute, your gym, your background. Get the concepts in your ears before you ever open the full text. PM concepts told out loud make more sense than reading tables of process groups.
          - listitem [ref=e25]: Buy Rita’s book primarily for the digital practice tests. The book itself is a bonus. Run through all 1,000+ practice questions once, then re-run only the ones you got wrong until zero remain. Then simulate full 200-question exams with mixed domains until you’re consistently above 90%.
          - listitem [ref=e26]: Don’t over-study. When you’re over 80% on official prep, schedule and sit. The re-take voucher is the safety net — that’s what it’s there for.
      - paragraph [ref=e28]:
        - text: "📋 Eligibility Requirements: Before you can sit for the PMP, PMI requires"
        - strong [ref=e29]: 36 months of experience leading projects
        - text: (60 months if you don’t have a four-year degree) plus
        - strong [ref=e30]: 35 contact hours of project management education
        - text: . Verify your eligibility at
        - link "pmi.org" [ref=e31] [cursor=pointer]:
          - /url: https://www.pmi.org/certifications/project-management-pmp
        - text: before purchasing study materials.
      - paragraph [ref=e32]:
        - text: The PMP is PMI’s flagship credential and arguably the most recognized project management certification in the world. If you work in a management track — especially in DoD contracting or federal work — it will come up in job requirements constantly. I earned mine on
        - strong [ref=e33]: December 22, 2012
        - text: "(License: 1563680)."
      - paragraph [ref=e34]: The exam has evolved since then — it now includes more agile and hybrid content alongside predictive project management — but the core study approach hasn’t changed. Rita Mulcahy’s method still works. Practice tests are still the mechanism.
      - heading "Timeline & Context" [level=2] [ref=e35]
      - paragraph [ref=e36]: "I sat for the PMP as part of an annual educational objective tied to my performance review cycle. The accountability structure matters: I set the goal publicly, found someone else working toward a comparable credential, and turned it into a race. The result was a first-attempt pass without burnout or over-study."
      - paragraph [ref=e37]: The PMP is a broad exam. It covers all five process groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing) and ten knowledge areas across predictive, agile, and hybrid approaches. That breadth is why practice tests matter more than any single study guide — you need pattern recognition across the full domain landscape, not just chapter recall.
      - heading "Books / Materials" [level=2] [ref=e38]
      - heading "Rita Mulcahy’s PMP Exam Prep ← The Classic" [level=3] [ref=e39]
      - paragraph [ref=e40]: This is THE book. Rita Mulcahy built the standard for PMP prep. Even if you pick up an edition that’s a revision or two behind, the methodology holds. Buy it primarily for the digital practice tests that come with it — those are the actual value. The book itself is the bonus.
      - paragraph [ref=e41]:
        - link "Rita Mulcahy PMP Exam Prep ↗" [ref=e42] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1628255005?tag=clarkemoyer-20
      - heading "Rita Mulcahy PMP Exam Prep — Audiobook ← Audio-First" [level=3] [ref=e43]
      - paragraph [ref=e44]: This is where your studying actually happens. Commutes, walks, gym sessions — load this on your phone and run it constantly. PM process groups and knowledge areas make more sense when you hear them explained conversationally. The audiobook primes your brain before you grind practice questions.
      - paragraph [ref=e45]:
        - link "Rita Mulcahy PMP Exam Prep — Audiobook ↗" [ref=e46] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B09WJMN9L3?tag=clarkemoyer-20
      - heading "PMBOK Guide, 7th Edition" [level=3] [ref=e47]
      - paragraph [ref=e48]: PMI’s official guide. The 7th edition shifted from a process-based framework to a principles-based one — it’s less of a reference manual and more of a philosophy guide now. Useful for context, but Rita’s prep book is more exam-relevant. PMI members get the PMBOK as part of membership, which is worth checking before purchasing.
      - paragraph [ref=e49]:
        - link "PMBOK Guide, 7th Edition ↗" [ref=e50] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B09X4PMPT8?tag=clarkemoyer-20
      - heading "PMP Exam Prep Flashcards (Rita Mulcahy)" [level=3] [ref=e51]
      - paragraph [ref=e52]: Good for vocabulary, process sequences, and knowledge area relationships. Use these when you don’t have time for a full practice session — commute pocket review.
      - paragraph [ref=e53]:
        - link "PMP Exam Prep Flashcards — Rita Mulcahy ↗" [ref=e54] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1628254912?tag=clarkemoyer-20
      - heading "The PMP Exam Structure" [level=2] [ref=e55]
      - paragraph [ref=e56]: The current PMP exam is 180 questions — a mix of multiple choice, matching, hotspot, and limited fill-in. You have 230 minutes. Questions are split roughly 50/50 between predictive and agile/hybrid approaches. The exam tests situational judgment heavily — knowing the “PMI way” of handling project situations matters more than pure memorization.
      - paragraph [ref=e57]: This is exactly why practice tests are the core mechanism. You need to internalize how PMI wants you to think — the practice questions train that pattern. A thousand questions plus re-runs of your wrong answers builds the mental model faster than re-reading chapters.
      - heading "Test Strategy" [level=2] [ref=e58]
      - list [ref=e59]:
        - listitem [ref=e60]: Run through all available practice questions — aim for 1,000+. Don’t skip any.
        - listitem [ref=e61]: After the first full pass, run only your wrong answers. Keep going until you get zero wrong.
        - listitem [ref=e62]: Switch to full 180-question simulations with realistic time limits and mixed domains. Run these until you’re consistently above 90%.
        - listitem [ref=e63]: When you hit 80%+ on official PMI prep materials, schedule your exam. Don’t wait for 95%.
      - paragraph [ref=e64]: The re-take voucher is not a fallback plan — it’s part of the strategy. Having it lets you test without over-studying.
      - paragraph [ref=e65]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e66] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - generic [ref=e67]:
        - paragraph [ref=e68]:
          - text: "📅 PMI chapter meeting:"
          - link "Professional Development Events" [ref=e69] [cursor=pointer]:
            - /url: /professional-development/
        - link "← Back to Certification Guides" [ref=e70] [cursor=pointer]:
          - /url: /certification-guides/
  - alert [ref=e71]
  - region "Cookie consent notice" [ref=e72]:
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "We Value Your Privacy" [level=3] [ref=e76]
        - paragraph [ref=e77]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e78]:
          - link "Privacy Policy" [ref=e79] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e80] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e81]:
        - button "Decline All" [ref=e82]
        - button "Customize" [ref=e83]
        - button "Accept All" [ref=e84]
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
     |                                                  ^ Error: /clarke-moyer-pmp-certification-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```