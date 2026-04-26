# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-microsoft-ai-900-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-microsoft-ai-900-passing-guide/ missing <main>

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
     |                                                            ^ Error: /clarke-moyer-microsoft-ai-900-passing-guide/ missing <main>
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