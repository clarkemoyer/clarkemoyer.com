# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-sc-500-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-sc-500-passing-guide/ title: ""

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
        - text: / SC-500 Guide
      - heading "Clarke Moyer Microsoft SC-500 Cloud & AI Security Engineer Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]:
          - text: Clarke holds this certification and keeps it active as Microsoft evolves the cloud security track. The SC-500 is a relatively new exam — objectives may be updated; always verify at
          - link "Microsoft Learn" [ref=e14] [cursor=pointer]:
            - /url: https://learn.microsoft.com
          - text: before purchasing study materials.
        - paragraph [ref=e15]:
          - strong [ref=e16]: "Note:"
          - text: Clarke holds this credential — verify the current exam code at Microsoft Learn before purchasing study materials, as Microsoft periodically updates exam numbers and objectives.
      - generic [ref=e17]:
        - paragraph [ref=e18]: ✅ Currently Recommended by Clarke
        - paragraph [ref=e19]: The SC-500 is a newer Microsoft certification focused specifically on securing cloud and AI workloads. For anyone in the DoD or enterprise space working with Azure-hosted systems and AI services, this is a high-value credential that complements the CISSP. Clarke recommends this as part of a modern cloud security certification track.
      - generic [ref=e20]:
        - 'heading "BLUF: To pass the SC-500, do 4 things" [level=2] [ref=e21]'
        - list [ref=e22]:
          - listitem [ref=e23]: Create a public contest with another person to complete your SC-500 before they complete a similar educational objective. Accountability is the best study tool.
          - listitem [ref=e24]: Start with Microsoft Learn — the free SC-500 learning path is excellent and maps directly to the exam objectives. Link it to your phone and use it on the go.
          - listitem [ref=e25]: Buy a practice test book primarily to access the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then restart with real exam-length mixed sets until you’re consistently over 90%.
          - listitem [ref=e26]: Don’t over-study. Test when you’re over 80% on official practice. The re-take is your safety net.
      - generic [ref=e27]:
        - paragraph [ref=e28]: 📋 A Note on Clarke’s Version
        - paragraph [ref=e29]:
          - text: Clarke completed an earlier version of this certification track when it was more heavily focused on core Azure security and Microsoft 365 security administration. The exam has since evolved toward Cloud and AI Security Engineering. The fundamentals and study methodology remain the same, but be aware that current exam objectives place greater emphasis on AI workload security than the version Clarke sat. Always verify current exam objectives at
          - link "Microsoft Learn" [ref=e30] [cursor=pointer]:
            - /url: https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/
          - text: before purchasing study materials.
      - heading "About the SC-500 Exam" [level=2] [ref=e31]
      - paragraph [ref=e32]: "The Microsoft SC-500 (Cloud and AI Security Engineer Associate) certification validates skills in securing cloud environments and AI workloads on Microsoft Azure. It covers:"
      - list [ref=e33]:
        - listitem [ref=e34]: Planning and implementing security for cloud infrastructure
        - listitem [ref=e35]: Securing AI services, data, and applications on Azure
        - listitem [ref=e36]: Managing identity, governance, and compliance in cloud environments
        - listitem [ref=e37]: Implementing threat protection and security operations
      - paragraph [ref=e38]: This cert sits above SC-900 in the Microsoft security track and is particularly relevant for roles involving AI security — a fast-growing requirement in DoD and enterprise settings.
      - generic [ref=e39]:
        - heading "📋 Recommended Prerequisites" [level=3] [ref=e40]
        - paragraph [ref=e41]:
          - text: Complete
          - link "SC-900" [ref=e42] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-sc-900-passing-guide/
          - text: and
          - link "AZ-900" [ref=e43] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-az-900-passing-guide/
          - text: first. Familiarity with Microsoft Defender, Purview, and Entra ID is helpful before sitting this exam.
      - heading "Study Resources" [level=2] [ref=e44]
      - heading "Microsoft Learn (Free — Start Here)" [level=3] [ref=e45]
      - paragraph [ref=e46]:
        - text: Microsoft’s official free learning path for SC-500 is comprehensive and directly mapped to exam objectives. Use it on your phone.
        - link "Microsoft SC-500 Learning Path ↗" [ref=e47] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/
      - heading "SC-500 Study Guide" [level=3] [ref=e48]
      - paragraph [ref=e49]: Buy primarily to access the digital practice test bank. The online test portal is the real value.
      - paragraph [ref=e50]:
        - link "Microsoft SC-500 Cloud & AI Security Engineer Study Guide ↗" [ref=e51] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Microsoft%20SC-500%20Cloud%20AI%20Security%20Engineer%20study%20guide%20exam%20prep&tag=clarkemoyer-20
      - heading "SC-500 Practice Tests" [level=3] [ref=e52]
      - paragraph [ref=e53]: Audio content for the SC series for studying on the go.
      - paragraph [ref=e54]:
        - link "SC-500 Practice Exam Questions ↗" [ref=e55] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Microsoft%20SC-500%20practice%20exam%20questions%20test%20prep&tag=clarkemoyer-20
      - heading "Study Method" [level=2] [ref=e56]
      - paragraph [ref=e57]: "Clarke’s approach to all Microsoft certification exams:"
      - list [ref=e58]:
        - listitem [ref=e59]:
          - strong [ref=e60]: Microsoft Learn first
          - text: — work through the entire free path before buying anything.
        - listitem [ref=e61]:
          - strong [ref=e62]: Audio content
          - text: — find a podcast or audiobook on Azure security concepts to reinforce while commuting, walking, or at the gym.
        - listitem [ref=e63]:
          - strong [ref=e64]: Practice test grind
          - text: — all questions once through, then wrong-answers-only loop until clean, then full mock exams at real test length and domain mix until 90%+.
        - listitem [ref=e65]:
          - strong [ref=e66]: Hands-on labs
          - text: — Microsoft Learn includes free sandbox labs. Do them. Azure security is a hands-on exam.
      - paragraph [ref=e67]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you.
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
     |                                                  ^ Error: /clarke-moyer-microsoft-sc-500-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```