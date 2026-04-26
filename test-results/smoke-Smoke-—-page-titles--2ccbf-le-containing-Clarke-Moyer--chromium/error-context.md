# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-microsoft-az-500-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-microsoft-az-500-passing-guide/ title: ""

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
        - text: / AZ-500 Azure Security Technologies
      - heading "Clarke Moyer AZ-500 Microsoft Azure Security Technologies Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - paragraph [ref=e13]:
        - text: Clarke holds the AZ-500 and keeps it current as Azure security services and exam objectives evolve. Always verify current objectives at
        - link "Microsoft Learn" [ref=e14] [cursor=pointer]:
          - /url: https://learn.microsoft.com
        - text: before purchasing study materials.
      - generic [ref=e15]:
        - paragraph [ref=e16]: ✅ Clarke’s Recommendation
        - paragraph [ref=e17]: Clarke recommends AZ-500 for anyone with 1–2 years of Azure experience who wants to specialize in cloud security. It pairs well with the CISSP for a strong security credentials stack.
      - generic [ref=e18]:
        - 'heading "BLUF: What Is AZ-500?" [level=2] [ref=e19]'
        - paragraph [ref=e20]: AZ-500 (Microsoft Azure Security Technologies) is an Associate-level Azure certification for security engineers who implement security controls, maintain security posture, and manage identity and access. Clarke holds this certification and maintains it as the Azure security landscape evolves. This is one of the highest-value Azure certifications for anyone in a cloud security or DevSecOps role.
      - heading "About AZ-500" [level=2] [ref=e21]
      - paragraph [ref=e22]:
        - text: The
        - strong [ref=e23]: "AZ-500: Microsoft Azure Security Technologies"
        - text: exam validates your ability to implement platform protections, manage security operations, and secure data and applications in Azure. Unlike the fundamentals-level AZ-900 or SC-900, this is an Associate-level credential requiring hands-on security experience with the Azure platform.
      - paragraph [ref=e24]: "Key domains covered by the AZ-500:"
      - list [ref=e25]:
        - listitem [ref=e26]:
          - strong [ref=e27]: Azure Active Directory / Microsoft Entra ID
          - text: — identity governance, conditional access, Privileged Identity Management (PIM)
        - listitem [ref=e28]:
          - strong [ref=e29]: Network security
          - text: — Network Security Groups (NSGs), Azure Firewall, Azure DDoS Protection, Virtual Network segmentation
        - listitem [ref=e30]:
          - strong [ref=e31]: Azure Security Center / Microsoft Defender for Cloud
          - text: — security posture management, threat detection, regulatory compliance
        - listitem [ref=e32]:
          - strong [ref=e33]: Azure Key Vault
          - text: — secrets management, certificate lifecycle, HSM-backed keys
        - listitem [ref=e34]:
          - strong [ref=e35]: Storage security
          - text: — SAS tokens, storage account firewalls, encryption at rest and in transit
        - listitem [ref=e36]:
          - strong [ref=e37]: Monitoring and incident response
          - text: — Azure Monitor, Microsoft Sentinel, Log Analytics
      - heading "Who It’s For" [level=2] [ref=e38]
      - paragraph [ref=e39]: "The AZ-500 is the right cert for:"
      - list [ref=e40]:
        - listitem [ref=e41]: Security engineers responsible for Azure workload security
        - listitem [ref=e42]: Cloud architects moving into a security specialization
        - listitem [ref=e43]: Anyone holding the CISSP who wants Azure-specific security validation
        - listitem [ref=e44]: DoD and enterprise professionals working in Azure-hosted or Azure-connected environments
        - listitem [ref=e45]: Security analysts who need to speak credibly about cloud-native security controls
      - heading "Study Approach (Clarke’s Method)" [level=2] [ref=e46]
      - list [ref=e47]:
        - listitem [ref=e48]:
          - strong [ref=e49]: Competition first.
          - text: Create a public contest with another person to complete your AZ-500 before they complete a comparable certification. Accountability is the best study plan.
        - listitem [ref=e50]:
          - strong [ref=e51]: Audio-first.
          - text: Security concepts absorb well during commutes and walks. Get the domain structure in your head before opening practice questions.
        - listitem [ref=e52]:
          - strong [ref=e53]: Microsoft Learn paths.
          - text: Microsoft’s free AZ-500 learning path maps directly to exam objectives and is the single best free resource available. Use it first.
        - listitem [ref=e54]:
          - strong [ref=e55]: Practice exams.
          - text: Buy a study guide primarily to get the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then simulate full exam-length mixed sets.
        - listitem [ref=e56]:
          - strong [ref=e57]: Grind wrong answers only.
          - text: Don’t re-study everything — focus exclusively on the domains where you’re missing questions.
        - listitem [ref=e58]:
          - strong [ref=e59]: Mock at 90%+.
          - text: Schedule and sit when you’re consistently clearing 90% on mock exams. Don’t over-study — the re-take is your safety net.
      - paragraph [ref=e60]:
        - link "Microsoft Learn — AZ-500 Azure Security Technologies ↗" [ref=e61] [cursor=pointer]:
          - /url: https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/
      - heading "Study Materials" [level=2] [ref=e62]
      - heading "AZ-500 Study Guides ← Search for Current Edition" [level=3] [ref=e63]
      - paragraph [ref=e64]: Microsoft updates AZ-500 objectives regularly. Search for the most current study guide rather than a specific edition — match the publication date to the current exam objectives on Microsoft Learn.
      - paragraph [ref=e65]:
        - 'link "Search Amazon: AZ-500 Azure Security Technologies Study Guides ↗" [ref=e66] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=AZ-500+study+guide&tag=clarkemoyer-20
      - heading "AZ-500 Practice Tests" [level=3] [ref=e67]
      - paragraph [ref=e68]: Practice test access is the core of the study method. Additional practice question sources beyond the study guide improve exam readiness.
      - paragraph [ref=e69]:
        - 'link "Search Amazon: AZ-500 Practice Tests ↗" [ref=e70] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=AZ-500+practice+tests+Azure+security&tag=clarkemoyer-20
      - heading "See Also" [level=2] [ref=e71]
      - list [ref=e72]:
        - listitem [ref=e73]:
          - link "CISSP Certification Passing Guide" [ref=e74] [cursor=pointer]:
            - /url: /clarke-moyer-cissp-certification-passing-guide/
          - text: — pairs well with AZ-500 for a complete security credentials stack
        - listitem [ref=e75]:
          - link "AZ-900 Azure Fundamentals Guide" [ref=e76] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-az-900-passing-guide/
          - text: — start here if you’re new to Azure
        - listitem [ref=e77]:
          - link "SC-500 Cloud & AI Security Engineer Guide" [ref=e78] [cursor=pointer]:
            - /url: /clarke-moyer-microsoft-sc-500-passing-guide/
          - text: — complementary Microsoft security certification
        - listitem [ref=e79]:
          - link "Industry Conferences" [ref=e80] [cursor=pointer]:
            - /url: /industry-conferences/
          - text: — conferences Clarke attends for learning and certification
      - paragraph [ref=e81]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e82] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e84] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e85]
  - region "Cookie consent notice" [ref=e86]:
    - generic [ref=e88]:
      - generic [ref=e89]:
        - heading "We Value Your Privacy" [level=3] [ref=e90]
        - paragraph [ref=e91]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e92]:
          - link "Privacy Policy" [ref=e93] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e94] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e95]:
        - button "Decline All" [ref=e96]
        - button "Customize" [ref=e97]
        - button "Accept All" [ref=e98]
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
     |                                                  ^ Error: /clarke-moyer-microsoft-az-500-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```