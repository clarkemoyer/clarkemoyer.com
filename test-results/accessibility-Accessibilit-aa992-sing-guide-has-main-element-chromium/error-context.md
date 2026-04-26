# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-microsoft-az-500-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-microsoft-az-500-passing-guide/ missing <main>

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
     |                                                            ^ Error: /clarke-moyer-microsoft-az-500-passing-guide/ missing <main>
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