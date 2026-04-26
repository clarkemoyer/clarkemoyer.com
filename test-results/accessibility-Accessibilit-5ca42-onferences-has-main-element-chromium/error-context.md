# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /industry-conferences/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /industry-conferences/ missing <main>

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
        - text: / Industry Conferences
      - heading "Industry Conferences" [level=1] [ref=e8]
      - paragraph [ref=e9]: Clarke is a strong advocate for in-person industry conferences — for learning, certification, networking, and staying current with where the industry is actually going.
    - generic [ref=e11]:
      - generic [ref=e12]:
        - text: For the complete record of all professional development events including academic residencies and chapter meetings, see the
        - link "Professional Development page" [ref=e13] [cursor=pointer]:
          - /url: /professional-development/
        - text: .
      - heading "Why Conferences Matter" [level=2] [ref=e14]
      - paragraph [ref=e15]: Conferences aren’t just networking events — they’re the highest-density learning environments in the industry. You get the talks, the hallway conversations, the vendor demos, and often the certification testing all in one place. Clarke has used conferences to earn certifications on-site, meet the people building the tools he uses, and calibrate his sense of where the industry is heading. There is no substitute for being in the room.
      - heading "Conferences Attended" [level=2] [ref=e16]
      - generic [ref=e17]:
        - paragraph [ref=e18]: 🖥️ VMworld (Multiple Years)
        - paragraph [ref=e19]:
          - text: VMware’s annual conference — now rebranded as
          - strong [ref=e20]: VMware Explore
          - text: . Clarke attended multiple years during the DCGS private cloud era, when VMware was the dominant enterprise virtualization platform and the conference was the center of gravity for anyone working in data center operations.
        - list [ref=e21]:
          - listitem [ref=e22]: On-site Pearson VUE testing centers allowed same-week certification
          - listitem [ref=e23]: Conference tickets historically included exam vouchers
          - listitem [ref=e24]: Clarke completed multiple VMware certifications at VMworld testing centers
          - listitem [ref=e25]: Recommended for anyone in enterprise virtualization or multi-cloud
      - generic [ref=e26]:
        - paragraph [ref=e27]: ☸️ KubeCon + CloudNativeCon — Atlanta (2025)
        - paragraph [ref=e28]:
          - text: The CNCF’s flagship annual conference. Clarke attended in 2025 in Atlanta.
          - strong [ref=e29]: KubeCon + CloudNativeCon
          - text: is co-located with
          - strong [ref=e30]: CNCFCon
          - text: — both run simultaneously at the same venue. KubeCon is the Kubernetes-focused track; CNCFCon covers the broader CNCF project ecosystem. Clarke recommends attending both.
        - list [ref=e31]:
          - listitem [ref=e32]: The single best signal of where cloud-native infrastructure is heading
          - listitem [ref=e33]: Co-located with CNCFCon — broader CNCF project ecosystem coverage
          - listitem [ref=e34]: Recommended for anyone in cloud-native, containers, Kubernetes, or platform engineering
        - paragraph [ref=e35]:
          - link "KubeCon + CloudNativeCon →" [ref=e36] [cursor=pointer]:
            - /url: https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/
          - text: "|"
          - link "CNCFCon →" [ref=e37] [cursor=pointer]:
            - /url: https://events.linuxfoundation.org/cncf-con/
      - heading "Clarke’s Conference Philosophy" [level=2] [ref=e38]
      - list [ref=e39]:
        - listitem [ref=e40]: Conferences that bundle certification vouchers with attendance are the highest ROI model — you learn and certify in the same week.
        - listitem [ref=e41]: The hallway track (unscheduled conversations) is often more valuable than the sessions. The people in the hallway are the ones building the things.
        - listitem [ref=e42]: Attending a conference is a commitment signal — it tells your team and your employer you’re invested in staying current.
        - listitem [ref=e43]: If you can only attend one conference per year, Clarke recommends KubeCon + CNCFCon for anyone in cloud, DevOps, or platform engineering roles.
      - generic [ref=e44]:
        - paragraph [ref=e45]: 📅 Coming Soon
        - paragraph [ref=e46]: Clarke plans to document additional conference experiences here as they happen.
      - link "← Back to Home" [ref=e48] [cursor=pointer]:
        - /url: /
  - alert [ref=e49]
  - region "Cookie consent notice" [ref=e50]:
    - generic [ref=e52]:
      - generic [ref=e53]:
        - heading "We Value Your Privacy" [level=3] [ref=e54]
        - paragraph [ref=e55]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e56]:
          - link "Privacy Policy" [ref=e57] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e58] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e59]:
        - button "Decline All" [ref=e60]
        - button "Customize" [ref=e61]
        - button "Accept All" [ref=e62]
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
     |                                                            ^ Error: /industry-conferences/ missing <main>
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