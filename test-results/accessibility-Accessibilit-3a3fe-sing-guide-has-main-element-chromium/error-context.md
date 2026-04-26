# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-microsoft-sc-500-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-microsoft-sc-500-passing-guide/ missing <main>

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
     |                                                            ^ Error: /clarke-moyer-microsoft-sc-500-passing-guide/ missing <main>
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