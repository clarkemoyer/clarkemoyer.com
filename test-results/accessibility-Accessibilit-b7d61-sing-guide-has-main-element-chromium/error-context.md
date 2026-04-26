# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-mcp-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-mcp-passing-guide/ missing <main>

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
        - text: / MCP Guide
      - heading "Clarke Moyer Microsoft MCP Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 🎓 Early Career Context
        - paragraph [ref=e14]:
          - text: Clarke obtained the MCP in 2009 during the same period he completed his
          - strong [ref=e15]: BS-IT at Western Governors University
          - text: . WGU's program helped build the foundational Microsoft Windows knowledge that led to this credential. Clarke obtained the MCP specifically as a prerequisite for his hire into SAIC and DCGS — it was a career requirement, not just an academic one.
      - heading "The Story" [level=2] [ref=e16]
      - paragraph [ref=e17]:
        - text: I got my MCP in March 2009 — and yes, it was a
        - strong [ref=e18]: Windows XP certification
        - text: ". If you’re wondering how long ago that was: the “P” in XP stood for “Professional,” not “Please upgrade already.”"
      - paragraph [ref=e19]: At the time, the MCP was a hard prerequisite. SAIC and DCGS required it before they’d even consider hiring you. It wasn’t optional, it wasn’t a nice-to-have — it was the ticket you had to punch to get in the door. So I punched it.
      - paragraph [ref=e20]:
        - text: This was the
        - strong [ref=e21]: before cloud era
        - text: . Microsoft certifications in 2009 meant knowing your way around a domain controller and Active Directory. You didn’t “spin up resources” — you physically racked servers. Group Policy was the closest thing to infrastructure-as-code, and DNS was something you fixed at 2am with a prayer and a server reboot.
      - paragraph [ref=e22]: "The MCP was the entry credential to everything else in the Microsoft ecosystem at the time: MCSA, MCSE, MCDBA. It said “this person passed at least one Microsoft exam and can be trusted near a Windows server.” That was the bar."
      - paragraph [ref=e23]: I earned it, it served its purpose, and then Microsoft eventually retired the entire track when they shifted to the role-based cloud certification model. No complaints — the new track is genuinely better and more useful.
      - generic [ref=e24]:
        - paragraph [ref=e25]: ⚠️ Retired Certification
        - paragraph [ref=e26]: The MCP certification track has been retired by Microsoft. Microsoft no longer offers the MCP credential. Clarke holds this as a legacy certification. There is nothing to study for — you cannot take this exam anymore.
        - paragraph [ref=e27]: For current Microsoft certifications, see the recommendations below.
      - heading "What I Recommend Instead" [level=2] [ref=e28]
      - paragraph [ref=e29]: Microsoft’s current certification track is genuinely excellent — role-based, cloud-focused, and actually relevant to what enterprises and DoD environments are running today. I’ve completed all of these and recommend them.
      - list [ref=e30]:
        - listitem [ref=e31]:
          - text: →
          - generic [ref=e32]:
            - link "AZ-900 Azure Fundamentals" [ref=e33] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-az-900-passing-guide/
            - text: — Start here. The entry point for all Azure certifications. Covers cloud concepts, Azure services, pricing, and governance.
        - listitem [ref=e34]:
          - text: →
          - generic [ref=e35]:
            - link "AI-900 Azure AI Fundamentals" [ref=e36] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
            - text: — Essential for anyone advising on AI policy or procurement in enterprise or DoD environments.
        - listitem [ref=e37]:
          - text: →
          - generic [ref=e38]:
            - link "MS-900 Microsoft 365 Fundamentals" [ref=e39] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ms-900-passing-guide/
            - text: — Covers productivity, collaboration, security, and compliance across the Microsoft 365 platform.
        - listitem [ref=e40]:
          - text: →
          - generic [ref=e41]:
            - link "SC-900 Security, Compliance & Identity Fundamentals" [ref=e42] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-900-passing-guide/
            - text: — Entry point to the Microsoft security track. Especially useful alongside CISSP for mapping concepts to Azure.
        - listitem [ref=e43]:
          - text: →
          - generic [ref=e44]:
            - link "SC Series — Cloud & AI Security Engineer Track" [ref=e45] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-500-passing-guide/
            - text: — Clarke’s overview of the full SC security track, from SC-900 through SC-100, and how each maps to DoD and enterprise security roles.
      - generic [ref=e46]:
        - paragraph [ref=e47]:
          - text: "📅 Related training:"
          - link "Professional Development Events" [ref=e48] [cursor=pointer]:
            - /url: /professional-development/
        - link "← Back to Certification Guides" [ref=e49] [cursor=pointer]:
          - /url: /certification-guides/
  - alert [ref=e50]
  - region "Cookie consent notice" [ref=e51]:
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "We Value Your Privacy" [level=3] [ref=e55]
        - paragraph [ref=e56]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e57]:
          - link "Privacy Policy" [ref=e58] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e59] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e60]:
        - button "Decline All" [ref=e61]
        - button "Customize" [ref=e62]
        - button "Accept All" [ref=e63]
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
     |                                                            ^ Error: /clarke-moyer-mcp-passing-guide/ missing <main>
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