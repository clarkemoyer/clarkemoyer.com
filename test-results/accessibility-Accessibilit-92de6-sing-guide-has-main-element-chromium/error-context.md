# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-vcp5-dcv-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-vcp5-dcv-passing-guide/ missing <main>

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
        - text: / VCP5-DCV Guide
      - heading "Clarke Moyer VMware VCP5-DCV Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 📋 Legacy Certification Note
        - paragraph [ref=e14]: The VCP5-DCV is a legacy credential based on vSphere 5, which has been end-of-lifed by VMware. It is no longer available as a new certification. Clarke holds this credential as part of his DoD 8570 Computing Environment track history. It demonstrates foundational data center virtualization knowledge that carries forward to modern vSphere versions.
        - paragraph [ref=e15]: ⚠️ VMware Training Prerequisite
        - paragraph [ref=e16]: All VMware certifications require attending an official VMware authorized training course to be eligible for the exam.
      - generic [ref=e17]:
        - 'heading "BLUF: To pass VCP exams, do 4 things" [level=2] [ref=e18]'
        - list [ref=e19]:
          - listitem [ref=e20]: Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.
          - listitem [ref=e21]: Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.
          - listitem [ref=e22]: Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.
          - listitem [ref=e23]: "Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you’re scoring 90%+. Don’t over-study — test when you hit 80% and use the re-take as your safety net."
      - generic [ref=e24]:
        - paragraph [ref=e25]: 🖥️ Continuing the DCGS VMware Track
        - paragraph [ref=e26]:
          - text: Clarke obtained VCP5 as the DCGS program continued to mature its private cloud infrastructure. vSphere 5 was a significant leap in enterprise virtualization capability. See the
          - link "VCP4-DCV guide" [ref=e27] [cursor=pointer]:
            - /url: /clarke-moyer-vcp4-dcv-passing-guide/
          - text: for where this journey started.
      - generic [ref=e28]:
        - paragraph [ref=e29]: 🏟️ VMworld Testing Center
        - paragraph [ref=e30]:
          - text: Clarke completed several VMware certifications at the
          - strong [ref=e31]: VMworld testing centers
          - text: "— on-site Pearson VUE testing facilities available to conference attendees. VMworld conference tickets historically included exam vouchers, making the conference itself a cost-effective way to both learn and certify. This is a model Clarke strongly endorses: industry conferences that bundle certification opportunities with attendance. It’s efficient, motivating, and puts you in the room with the community at the same time."
      - heading "About VCP5-DCV" [level=2] [ref=e32]
      - paragraph [ref=e33]:
        - text: The VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV) validates core vSphere 5 administration skills — the foundational building block of enterprise VMware environments. Clarke obtained this certification in
        - strong [ref=e34]: February 2012
        - text: "(License: VMW-00546448G-00080093) as part of his DoD 8570 Computing Environment certification track."
      - paragraph [ref=e35]: At the time, vSphere 5 represented a major leap in enterprise virtualization — ESXi became the only hypervisor (ESX console-based was retired), vCenter 5 brought enhanced cluster management, and features like Storage DRS and Profile-Driven Storage were introduced. A VCP5-DCV meant you could design, deploy, and manage a production VMware data center.
      - heading "Key Topics Covered" [level=2] [ref=e36]
      - list [ref=e37]:
        - listitem [ref=e38]: ESXi 5 architecture — hypervisor, kernel, and management interfaces
        - listitem [ref=e39]: vCenter Server 5 — deployment, configuration, and management
        - listitem [ref=e40]: vSphere HA (High Availability) and Fault Tolerance
        - listitem [ref=e41]: vSphere DRS (Distributed Resource Scheduler)
        - listitem [ref=e42]: vMotion and Storage vMotion — live migration of VMs and storage
        - listitem [ref=e43]: vSphere Distributed Switch (vDS) — enterprise virtual networking
        - listitem [ref=e44]: "Storage: VMFS, NFS, iSCSI, FCoE, and Storage DRS"
        - listitem [ref=e45]: VM templates, snapshots, and cloning
        - listitem [ref=e46]: vSphere Update Manager
        - listitem [ref=e47]: Resource pools and performance monitoring
      - heading "Study Materials" [level=2] [ref=e48]
      - heading "VMware vSphere Study Guides" [level=3] [ref=e49]
      - paragraph [ref=e50]: Search for current VMware vSphere study guides. While vSphere 5 materials are primarily of historical interest, the core DCV concepts carry forward through vSphere 6, 7, and 8.
      - paragraph [ref=e51]:
        - 'link "Search: VMware vSphere VCP Study Guides ↗" [ref=e52] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=VMware+vSphere+study+guide+VCP&tag=clarkemoyer-20
      - paragraph [ref=e53]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e54] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e56] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e57]
  - region "Cookie consent notice" [ref=e58]:
    - generic [ref=e60]:
      - generic [ref=e61]:
        - heading "We Value Your Privacy" [level=3] [ref=e62]
        - paragraph [ref=e63]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e64]:
          - link "Privacy Policy" [ref=e65] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e66] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e67]:
        - button "Decline All" [ref=e68]
        - button "Customize" [ref=e69]
        - button "Accept All" [ref=e70]
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
     |                                                            ^ Error: /clarke-moyer-vcp5-dcv-passing-guide/ missing <main>
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