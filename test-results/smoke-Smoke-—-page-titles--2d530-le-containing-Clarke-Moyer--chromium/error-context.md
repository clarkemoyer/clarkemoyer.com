# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-ms-900-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-ms-900-passing-guide/ title: ""

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
        - text: / MS-900 Guide
      - heading "Clarke Moyer Microsoft MS-900 Microsoft 365 Fundamentals Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - text: Clarke holds this certification and maintains Microsoft credentials as the platform evolves. The exam content and objectives are updated regularly by Microsoft — always verify current objectives at
        - link "Microsoft Learn" [ref=e14] [cursor=pointer]:
          - /url: https://learn.microsoft.com
        - text: before purchasing study materials.
      - generic [ref=e15]:
        - paragraph [ref=e16]: ✅ Currently Recommended by Clarke
        - paragraph [ref=e17]: The MS-900 is a solid entry-level credential for anyone working in or transitioning into a Microsoft 365 environment — cloud productivity, collaboration, security, and compliance concepts. It’s particularly useful for DoD contractors and enterprise IT professionals where M365 is the standard productivity platform. Clarke holds this cert and recommends it as an accessible starting point for the Microsoft certification track.
      - generic [ref=e18]:
        - 'heading "BLUF: To pass the MS-900, do 4 things" [level=2] [ref=e19]'
        - list [ref=e20]:
          - listitem [ref=e21]: Create a public contest with another person to complete the MS-900 before they complete a similar educational objective. Accountability accelerates everything.
          - listitem [ref=e22]: Microsoft Learn’s free MS-900 learning path is excellent — do it entirely on your phone. It’s short enough to complete in a weekend of commute and downtime.
          - listitem [ref=e23]: Buy a practice test resource primarily for the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then restart with real exam-length mixed sets until 90%+.
          - listitem [ref=e24]: Don’t over-study. This is a fundamentals exam. Test when you’re consistently over 80% on practice. The re-take is your safety net.
      - heading "What Is the MS-900?" [level=2] [ref=e25]
      - paragraph [ref=e26]: "The Microsoft MS-900 (Microsoft 365 Fundamentals) certification validates foundational knowledge of Microsoft 365 cloud services, including:"
      - list [ref=e27]:
        - listitem [ref=e28]: Cloud concepts and Microsoft 365 productivity solutions
        - listitem [ref=e29]: Microsoft 365 security, compliance, privacy, and trust
        - listitem [ref=e30]: Microsoft 365 pricing, licensing, and support
      - paragraph [ref=e31]: It’s the entry point for the Microsoft 365 certification track, equivalent to AZ-900 for the Azure track. Both are worth having if you work in a Microsoft-heavy enterprise or DoD environment.
      - generic [ref=e32]:
        - heading "📋 Recommended Path" [level=3] [ref=e33]
        - paragraph [ref=e34]:
          - text: Consider pairing MS-900 with
          - link "AZ-900" [ref=e35] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-az-900-passing-guide/
          - text: and
          - link "AI-900" [ref=e36] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
          - text: "— together they cover the full Microsoft cloud landscape: productivity, infrastructure, and AI. All three are approachable fundamentals-level exams."
      - 'heading "Free Resource: Microsoft Learn" [level=2] [ref=e37]'
      - paragraph [ref=e38]:
        - text: Microsoft’s free MS-900 learning path maps directly to exam objectives and is the best starting point.
        - link "Microsoft MS-900 Learning Path ↗" [ref=e39] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/microsoft-365-fundamentals/
      - heading "Books / Study Materials" [level=2] [ref=e40]
      - heading "MS-900 Study Guide ← Get for the Practice Tests" [level=3] [ref=e41]
      - paragraph [ref=e42]: Buy primarily to access the digital practice test bank. The online test portal is the real value.
      - paragraph [ref=e43]:
        - link "Microsoft MS-900 Microsoft 365 Fundamentals Study Guide ↗" [ref=e44] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Microsoft%20MS-900%20Microsoft%20365%20Fundamentals%20study%20guide%20exam%20prep&tag=clarkemoyer-20
      - heading "Audio Study Content" [level=3] [ref=e45]
      - paragraph [ref=e46]: Reinforce concepts while commuting, walking, or at the gym.
      - paragraph [ref=e47]:
        - link "MS-900 Audio Study Content ↗" [ref=e48] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Microsoft%20365%20Fundamentals%20MS-900%20audiobook%20exam%20prep&tag=clarkemoyer-20
      - heading "Test Methodology" [level=2] [ref=e49]
      - paragraph [ref=e50]: "Clarke’s practice test approach for all Microsoft fundamentals exams:"
      - list [ref=e51]:
        - listitem [ref=e52]:
          - strong [ref=e53]: Microsoft Learn first
          - text: — complete the entire free path. It’s short and directly exam-mapped.
        - listitem [ref=e54]:
          - strong [ref=e55]: All questions once
          - text: — work through every practice question in your test bank.
        - listitem [ref=e56]:
          - strong [ref=e57]: Wrong answers only
          - text: — loop through only missed questions until zero wrong answers remain.
        - listitem [ref=e58]:
          - strong [ref=e59]: Mock exam sets
          - text: — run full-length, timed, mixed-domain practice exams until consistently over 90%.
        - listitem [ref=e60]:
          - strong [ref=e61]: Test on schedule
          - text: — don’t delay once you hit 80%+ consistently. Re-takes are cheap; over-studying is time you won’t get back.
      - paragraph [ref=e62]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you.
        - link "Affiliate Disclosure" [ref=e63] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e65] [cursor=pointer]:
        - /url: /certification-guides/
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
     |                                                  ^ Error: /clarke-moyer-microsoft-ms-900-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```