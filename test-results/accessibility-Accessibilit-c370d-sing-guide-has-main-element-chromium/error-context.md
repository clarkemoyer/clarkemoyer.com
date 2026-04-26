# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-microsoft-az-900-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-microsoft-az-900-passing-guide/ missing <main>

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
     |                                                            ^ Error: /clarke-moyer-microsoft-az-900-passing-guide/ missing <main>
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