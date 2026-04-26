# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-sc-900-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-sc-900-passing-guide/ title: ""

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
        - text: / SC-900 Guide
      - heading "Clarke Moyer Microsoft SC-900 Security Fundamentals Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: ✅ Currently Recommended by Clarke
        - paragraph [ref=e14]: Clarke recommends SC-900 as the entry point to the Microsoft security certification track — especially valuable for CISSP holders looking to map their knowledge to the Azure platform.
      - generic [ref=e15]:
        - 'heading "BLUF: To pass the SC-900, do 4 things" [level=2] [ref=e16]'
        - list [ref=e17]:
          - listitem [ref=e18]: Create a public contest with someone else to finish before they complete a similar educational objective — accountability is the best accelerator.
          - listitem [ref=e19]: "Go audio-first: security fundamentals concepts are highly listenable. Commutes, walks, drives — use them."
          - listitem [ref=e20]: Practice tests are the core. Buy the study guide for digital test prep access, then run questions until you’re clearing 90%+ on mixed sets.
          - listitem [ref=e21]: Don’t over-study. When you’re above 80% consistently, schedule the exam. The retake is your insurance policy.
      - generic [ref=e22]:
        - paragraph [ref=e23]: 📋 A Note on Clarke’s Version
        - paragraph [ref=e24]:
          - text: Clarke completed an earlier version of this certification when it was more heavily focused on Azure and Microsoft 365 security fundamentals. The exam has since evolved. If you’re deciding where to start in the Microsoft certification track, Clarke now recommends beginning with the
          - link "AI-900 (Azure AI Fundamentals)" [ref=e25] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
          - text: as it better reflects where enterprise and DoD environments are heading. SC-900 remains a solid credential for compliance and identity fundamentals.
      - heading "What Is the SC-900?" [level=2] [ref=e26]
      - paragraph [ref=e27]:
        - text: The
        - strong [ref=e28]: Microsoft Security, Compliance, and Identity Fundamentals (SC-900)
        - text: "is the entry-level exam for Microsoft’s security certification track. It covers foundational concepts across three domains: security (Zero Trust, shared responsibility, defense-in-depth), compliance (regulatory frameworks, Microsoft Purview), and identity (authentication, authorization, Azure Active Directory / Microsoft Entra ID)."
      - paragraph [ref=e29]: No hands-on configuration is required — SC-900 is a conceptual exam. It tests whether you understand how Microsoft’s security, compliance, and identity products fit together and why they matter in an enterprise environment.
      - heading "Why It Complements CISSP" [level=2] [ref=e30]
      - paragraph [ref=e31]: "If you hold a CISSP, SC-900 is surprisingly fast to complete — the overlap with CISSP domain knowledge is significant. What SC-900 adds is the Microsoft-specific implementation layer: where does Zero Trust show up in Azure AD? What is Microsoft Sentinel vs. Defender for Cloud vs. Defender XDR? How does Microsoft Purview map to a DLP and compliance program?"
      - paragraph [ref=e32]: For DoD and enterprise practitioners working in Microsoft 365 or Azure environments, SC-900 provides the vocabulary to operate credibly in those platforms at a policy and architecture level — before you go deeper with SC-200 (Security Operations) or SC-300 (Identity and Access).
      - heading "Exam Coverage" [level=2] [ref=e33]
      - list [ref=e34]:
        - listitem [ref=e35]:
          - strong [ref=e36]: Security concepts
          - text: — Zero Trust, shared responsibility model, defense-in-depth, common threat types
        - listitem [ref=e37]:
          - strong [ref=e38]: Microsoft Entra / Azure AD
          - text: — Authentication, authorization, MFA, conditional access, identity governance, privileged identity management
        - listitem [ref=e39]:
          - strong [ref=e40]: Microsoft security solutions
          - text: — Defender for Cloud, Sentinel, Defender XDR, Microsoft 365 Defender
        - listitem [ref=e41]:
          - strong [ref=e42]: Microsoft compliance solutions
          - text: — Purview, compliance manager, information protection, eDiscovery, audit
      - 'heading "Free Resource: Microsoft Learn" [level=2] [ref=e43]'
      - paragraph [ref=e44]: The SC-900 free learning path on Microsoft Learn is well-structured and maps directly to exam objectives. This is the right first resource — start here before spending money on anything else.
      - paragraph [ref=e45]:
        - link "Microsoft Learn — SC-900 Security, Compliance, and Identity Fundamentals ↗" [ref=e46] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/
      - heading "Books / Study Materials" [level=2] [ref=e47]
      - heading "SC-900 Security Fundamentals Study Guide ← Must Buy" [level=3] [ref=e48]
      - paragraph [ref=e49]: The digital practice tests bundled with this guide are the engine of the study method. Run all questions, rerun every wrong answer until zero wrong, then run mixed full-length simulations until you clear 90%+.
      - paragraph [ref=e50]:
        - link "Microsoft SC-900 Security Fundamentals Study Guide ↗" [ref=e51] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B0BVFMY7ZH?tag=clarkemoyer-20
      - heading "Test Methodology" [level=2] [ref=e52]
      - list [ref=e53]:
        - listitem [ref=e54]: Start with the free Microsoft Learn SC-900 path — complete it end to end.
        - listitem [ref=e55]: Buy the study guide for digital practice test access.
        - listitem [ref=e56]: Run all questions once, flagging every wrong answer.
        - listitem [ref=e57]: Re-run only wrong questions until you hit zero wrong.
        - listitem [ref=e58]: Simulate full mixed exams until you’re consistently clearing 90%+.
        - listitem [ref=e59]: When you break 80% on real-test mixes, schedule the exam and stop drilling.
      - heading "Where SC-900 Fits in the SC Series" [level=2] [ref=e60]
      - paragraph [ref=e61]: "SC-900 is the recommended first step before any of the associate-level Microsoft security exams. After SC-900, the natural paths are:"
      - list [ref=e62]:
        - listitem [ref=e63]:
          - strong [ref=e64]: SC-200
          - text: — Security Operations Analyst (SOC, threat detection, Sentinel)
        - listitem [ref=e65]:
          - strong [ref=e66]: SC-300
          - text: — Identity and Access Administrator (Entra ID, IAM, ZTA)
        - listitem [ref=e67]:
          - strong [ref=e68]: SC-400
          - text: — Information Protection and Compliance Administrator (Purview, DLP, eDiscovery)
      - paragraph [ref=e69]: SC-100 (Cybersecurity Architect Expert) sits at the top as the capstone, requiring one of the above as a prerequisite.
      - paragraph [ref=e70]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e71] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e73] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e74]
  - region "Cookie consent notice" [ref=e75]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - heading "We Value Your Privacy" [level=3] [ref=e79]
        - paragraph [ref=e80]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e81]:
          - link "Privacy Policy" [ref=e82] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e83] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e84]:
        - button "Decline All" [ref=e85]
        - button "Customize" [ref=e86]
        - button "Accept All" [ref=e87]
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
     |                                                  ^ Error: /clarke-moyer-microsoft-sc-900-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```