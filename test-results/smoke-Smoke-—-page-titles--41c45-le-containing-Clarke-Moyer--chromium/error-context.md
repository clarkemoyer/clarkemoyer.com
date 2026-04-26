# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-az-900-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-az-900-passing-guide/ title: ""

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
        - text: / AZ-900 Guide
      - heading "Clarke Moyer Microsoft AZ-900 Azure Fundamentals Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - text: Clarke holds this certification and maintains Microsoft credentials as the platform evolves. The exam content and objectives are updated regularly by Microsoft — always verify current objectives at
        - link "Microsoft Learn" [ref=e14] [cursor=pointer]:
          - /url: https://learn.microsoft.com
        - text: before purchasing study materials.
      - generic [ref=e15]:
        - paragraph [ref=e16]: ✅ Currently Recommended by Clarke
        - paragraph [ref=e17]: Clarke recommends AZ-900 before any other Azure certification — it establishes the vocabulary and conceptual framework everything else builds on.
      - generic [ref=e18]:
        - 'heading "BLUF: To pass the AZ-900, do 4 things" [level=2] [ref=e19]'
        - list [ref=e20]:
          - listitem [ref=e21]: Create a public contest with someone else to finish before they complete a similar educational objective — accountability is the best study plan.
          - listitem [ref=e22]: "Go audio-first: cloud fundamentals are conceptual and absorb well during commutes, walks, and drives."
          - listitem [ref=e23]: Practice tests are the core. Buy the study guide for digital test prep access. Run the questions until you’re clearing 90%+ on mixed sets.
          - listitem [ref=e24]: Don’t over-study. Test when you’re above 80% consistently. That’s what the retake option is for.
      - heading "What Is the AZ-900?" [level=2] [ref=e25]
      - paragraph [ref=e26]:
        - text: The
        - strong [ref=e27]: Microsoft Azure Fundamentals (AZ-900)
        - text: is the entry point for the entire Microsoft Azure certification path. It’s a conceptual exam — no hands-on coding required — that tests your understanding of cloud concepts, core Azure services, security and compliance, pricing models, SLAs, and the Azure service lifecycle.
      - paragraph [ref=e28]: Think of it as establishing a shared vocabulary. If you don’t know what a subscription is, what a resource group does, how Azure regions relate to availability zones, or how Azure pricing models differ — AZ-900 fixes all of that. Every other Azure cert assumes this foundation.
      - heading "Why Clarke Recommends It First" [level=2] [ref=e29]
      - paragraph [ref=e30]: In DoD and enterprise IT environments, cloud literacy is no longer optional. But there’s a big difference between “I’ve used Azure” and being able to speak confidently about architecture, cost management, or compliance posture. AZ-900 closes that gap quickly.
      - paragraph [ref=e31]: It’s also short and low-risk — a half-day of exam prep over a few weeks, and you come out with a Microsoft-recognized credential and a solid conceptual base for every more advanced Azure cert that follows. AI-900 and SC-900 both become easier after AZ-900.
      - 'heading "Free Resource: Microsoft Learn" [level=2] [ref=e32]'
      - paragraph [ref=e33]: Microsoft’s free AZ-900 learning path is the best single study resource available and should be your first stop. It maps directly to exam objectives and is genuinely well-produced.
      - paragraph [ref=e34]:
        - link "Microsoft Learn — Azure Fundamentals (AZ-900) ↗" [ref=e35] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/
      - heading "Books / Study Materials" [level=2] [ref=e36]
      - heading "AZ-900 Azure Fundamentals Study Guide ← Must Buy" [level=3] [ref=e37]
      - paragraph [ref=e38]: The practice tests that come with this guide are the core of the study method. Run all questions, rerun wrong ones until zero, then simulate full exams until you’re clearing 90%+.
      - paragraph [ref=e39]:
        - link "Microsoft Azure Fundamentals AZ-900 Study Guide ↗" [ref=e40] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B0C8JKH9KM?tag=clarkemoyer-20
      - heading "AZ-900 Practice Tests" [level=3] [ref=e41]
      - paragraph [ref=e42]: Additional practice test resources to supplement the study guide — more question variety means better exam readiness.
      - paragraph [ref=e43]:
        - 'link "Search Amazon: AZ-900 Azure Fundamentals Practice Tests ↗" [ref=e44] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=AZ-900+Azure+Fundamentals+practice+tests&tag=clarkemoyer-20
      - heading "Exam Coverage" [level=2] [ref=e45]
      - list [ref=e46]:
        - listitem [ref=e47]:
          - strong [ref=e48]: Cloud concepts
          - text: — What cloud is, service models (IaaS, PaaS, SaaS), shared responsibility
        - listitem [ref=e49]:
          - strong [ref=e50]: Azure architecture
          - text: — Regions, availability zones, resource groups, subscriptions, management groups
        - listitem [ref=e51]:
          - strong [ref=e52]: Azure services
          - text: — Compute, networking, storage, databases at a conceptual level
        - listitem [ref=e53]:
          - strong [ref=e54]: Security and compliance
          - text: — Azure AD basics, Zero Trust, compliance offerings, Azure Policy
        - listitem [ref=e55]:
          - strong [ref=e56]: Pricing and SLAs
          - text: — Cost management tools, pricing calculator, service lifecycle
      - heading "Test Methodology" [level=2] [ref=e57]
      - list [ref=e58]:
        - listitem [ref=e59]: Complete the Microsoft Learn AZ-900 path first.
        - listitem [ref=e60]: Buy the study guide for digital practice test access.
        - listitem [ref=e61]: Run all questions once, marking every wrong answer.
        - listitem [ref=e62]: Re-run only wrong questions until you score zero wrong.
        - listitem [ref=e63]: Mix the full question bank and simulate real exams until you clear 90%+.
        - listitem [ref=e64]: Schedule the exam when you’re consistently over 80% — don’t keep drilling for perfect.
      - heading "Where It Fits" [level=2] [ref=e65]
      - paragraph [ref=e66]: AZ-900 is the right first Azure cert for anyone — DoD contractors, enterprise IT professionals, security practitioners, or managers who want to speak credibly about cloud. After AZ-900, the natural next steps are AI-900 (AI fundamentals), SC-900 (security fundamentals), or moving up the Azure Administrator (AZ-104) or Solutions Architect (AZ-305) path.
      - paragraph [ref=e67]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e68] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - paragraph [ref=e69]:
        - text: "📅 See also:"
        - link "Industry Conferences" [ref=e70] [cursor=pointer]:
          - /url: /industry-conferences/
      - link "← Back to Certification Guides" [ref=e72] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e73]
  - region "Cookie consent notice" [ref=e74]:
    - generic [ref=e76]:
      - generic [ref=e77]:
        - heading "We Value Your Privacy" [level=3] [ref=e78]
        - paragraph [ref=e79]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e80]:
          - link "Privacy Policy" [ref=e81] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e82] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e83]:
        - button "Decline All" [ref=e84]
        - button "Customize" [ref=e85]
        - button "Accept All" [ref=e86]
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
     |                                                  ^ Error: /clarke-moyer-microsoft-az-900-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```