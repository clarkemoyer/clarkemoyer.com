# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-microsoft-ms-900-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-microsoft-ms-900-passing-guide/ missing <main>

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
     |                                                            ^ Error: /clarke-moyer-microsoft-ms-900-passing-guide/ missing <main>
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