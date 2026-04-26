# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-ai-900-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-ai-900-passing-guide/ title: ""

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
        - text: / AI-900 Guide
      - heading "Clarke Moyer Microsoft AI-900 Azure AI Fundamentals Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - text: Clarke holds this certification and maintains Microsoft credentials as the platform evolves. The exam content and objectives are updated regularly by Microsoft — always verify current objectives at
        - link "Microsoft Learn" [ref=e14] [cursor=pointer]:
          - /url: https://learn.microsoft.com
        - text: before purchasing study materials.
      - generic [ref=e15]:
        - paragraph [ref=e16]: ✅ Currently Recommended by Clarke
        - paragraph [ref=e17]: Clarke actively recommends the AI-900 to colleagues and recommends it as a starting point for understanding AI in the enterprise.
      - generic [ref=e18]:
        - 'heading "BLUF: To pass the AI-900, do 4 things" [level=2] [ref=e19]'
        - list [ref=e20]:
          - listitem [ref=e21]: Create a public contest with someone else to finish before they complete a similar educational objective — accountability accelerates everything.
          - listitem [ref=e22]: "Go audio-first where you can: listen while commuting, walking, or doing chores. The concepts here are approachable and absorb well on the move."
          - listitem [ref=e23]: Practice tests are the core — buy the study guide for the digital test prep portal access, and run questions until you hit 90%+.
          - listitem [ref=e24]: Don’t over-study. When you’re scoring above 80% consistently, schedule the exam. That’s what retakes are for.
      - heading "What Is the AI-900?" [level=2] [ref=e25]
      - paragraph [ref=e26]:
        - text: The
        - strong [ref=e27]: Microsoft Azure AI Fundamentals (AI-900)
        - text: is Microsoft’s entry-level certification for AI on the Azure platform. It’s not a developer exam — it’s a conceptual foundations exam designed for anyone who wants to understand how AI workloads work in an enterprise cloud environment.
      - paragraph [ref=e28]: "The exam covers five main areas: AI workloads and considerations, fundamental principles of machine learning, computer vision workloads on Azure, natural language processing (NLP) workloads, and conversational AI workloads. None of this requires a coding background."
      - heading "Why Clarke Recommends It" [level=2] [ref=e29]
      - paragraph [ref=e30]: AI-900 is genuinely useful before you can honestly advise on AI procurement, policy, or integration in a DoD or enterprise environment. The vocabulary alone — knowing the difference between ML, deep learning, computer vision, and NLP in context — makes you a more credible voice in those conversations. It’s a low-cost, low-time-investment cert with disproportionate relevance right now.
      - paragraph [ref=e31]: "If you already hold a CISSP or similar security cert, AI-900 fills in a gap that security-focused study almost never touches: understanding the AI services that are now being layered into every enterprise platform you’ll be asked to secure."
      - 'heading "Free Resource: Microsoft Learn" [level=2] [ref=e32]'
      - paragraph [ref=e33]: Microsoft’s own free learning path for AI-900 is excellent and should be your starting point. It’s well-structured, maps directly to exam objectives, and costs nothing.
      - paragraph [ref=e34]:
        - link "Microsoft Learn — Azure AI Fundamentals (AI-900) ↗" [ref=e35] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/
      - heading "Books / Study Materials" [level=2] [ref=e36]
      - heading "AI-900 Azure AI Fundamentals Study Guide ← Must Buy" [level=3] [ref=e37]
      - paragraph [ref=e38]: The practice tests bundled with this guide are the core of the study method. Run all questions once, re-run wrong ones until zero, then restart with a mixed set until you’re clearing 90%+.
      - paragraph [ref=e39]:
        - link "Microsoft Azure AI Fundamentals AI-900 Study Guide ↗" [ref=e40] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B0CLRN4Y8G?tag=clarkemoyer-20
      - heading "AI-900 Audio / Audiobook Options" [level=3] [ref=e41]
      - paragraph [ref=e42]: Audio-first is the method. AI fundamentals concepts translate well to audio — great for commutes and walks.
      - paragraph [ref=e43]:
        - 'link "Search Amazon: Azure AI Fundamentals AI-900 Exam Prep ↗" [ref=e44] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=Azure+AI+Fundamentals+AI-900+exam+prep&tag=clarkemoyer-20
      - heading "Test Methodology" [level=2] [ref=e45]
      - list [ref=e46]:
        - listitem [ref=e47]: Start with Microsoft Learn — complete the free learning path end to end.
        - listitem [ref=e48]: Buy the study guide for digital practice test access.
        - listitem [ref=e49]: Run all practice questions once, flagging every wrong answer.
        - listitem [ref=e50]: Re-run only wrong questions until you hit zero wrong.
        - listitem [ref=e51]: Restart with a full mixed-question simulation until you’re consistently above 90%.
        - listitem [ref=e52]: When you break 80% on real-test mixes, schedule the exam — don’t wait for 100%.
      - heading "Where It Fits in the Azure Path" [level=2] [ref=e53]
      - paragraph [ref=e54]: AI-900 sits alongside AZ-900 (Azure Fundamentals) as a peer entry-point, not a prerequisite to it. Many people take both. If you’re heading toward cloud architecture or security roles, AZ-900 first makes more sense — but if AI is your primary interest, AI-900 is the right on-ramp.
      - paragraph [ref=e55]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e56] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - paragraph [ref=e57]:
        - text: "📅 See also:"
        - link "Industry Conferences" [ref=e58] [cursor=pointer]:
          - /url: /industry-conferences/
      - link "← Back to Certification Guides" [ref=e60] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e61]
  - region "Cookie consent notice" [ref=e62]:
    - generic [ref=e64]:
      - generic [ref=e65]:
        - heading "We Value Your Privacy" [level=3] [ref=e66]
        - paragraph [ref=e67]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e68]:
          - link "Privacy Policy" [ref=e69] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e70] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e71]:
        - button "Decline All" [ref=e72]
        - button "Customize" [ref=e73]
        - button "Accept All" [ref=e74]
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
     |                                                  ^ Error: /clarke-moyer-microsoft-ai-900-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```