# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-vcp4-dcv-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-vcp4-dcv-passing-guide/ missing <main>

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
        - text: / VCP4-DCV Guide
      - heading "Clarke Moyer VMware VCP4-DCV Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 📋 Historical / Legacy Certification
        - paragraph [ref=e14]: The VCP4-DCV is a historical credential based on vSphere 4 — a version of VMware’s platform that has been end-of-lifed for over a decade. This cert is no longer available. Clarke holds it as part of his DoD 8570 Computing Environment track and as the foundation on which his VCP5-DCV and later VMware credentials were built.
        - paragraph [ref=e15]: ⚠️ VMware Training Prerequisite
        - paragraph [ref=e16]: All VMware certifications require attending an official VMware authorized training course to be eligible for the exam.
      - generic [ref=e17]:
        - paragraph [ref=e18]: 🖥️ The VMware Story Begins
        - paragraph [ref=e19]: Clarke started his VMware journey with hands-on training before VMware even had a formal certification program (VMware 3 era). This VCP4-DCV represents the formal beginning of a certification track that would span over a decade, driven by real-world work building private clouds and dark clouds on the DCGS program. This cert is the foundation of that story.
      - generic [ref=e20]:
        - paragraph [ref=e21]: 🏟️ VMworld Testing Center
        - paragraph [ref=e22]:
          - text: Clarke completed several VMware certifications at the
          - strong [ref=e23]: VMworld testing centers
          - text: "— on-site Pearson VUE testing facilities available to conference attendees. VMworld conference tickets historically included exam vouchers, making the conference itself a cost-effective way to both learn and certify. This is a model Clarke strongly endorses: industry conferences that bundle certification opportunities with attendance. It’s efficient, motivating, and puts you in the room with the community at the same time."
      - heading "About VCP4-DCV" [level=2] [ref=e24]
      - paragraph [ref=e25]:
        - text: The VMware Certified Professional 4 – Data Center Virtualization (VCP4-DCV) was the original DCV credential — the predecessor to the VCP5-DCV and the start of Clarke’s VMware certification track. Clarke obtained this certification in
        - strong [ref=e26]: November 2010
        - text: "(License: VMW-00546448G-00080093)."
      - paragraph [ref=e27]: vSphere 4 was a significant moment in enterprise virtualization history. It was the first version to ship as a combined ESX and ESXi platform, introduced vSphere as a brand name (replacing VI3), and brought features like VMware vShield Zones for VM-level security. At the time, virtualization was rapidly shifting from “interesting technology” to “standard data center practice.”
      - paragraph [ref=e28]: The VCP4 was Clarke’s starting point on the VMware track, followed by the VCP5-DCV in 2012, VCP6-CMA in 2018, and ultimately the VCP-AM in 2021/2022. Each credential built on the foundational understanding established here.
      - heading "Key Topics (Historical)" [level=2] [ref=e29]
      - list [ref=e30]:
        - listitem [ref=e31]: ESX 4 and ESXi 4 hypervisor architecture
        - listitem [ref=e32]: vCenter Server 4 — centralized management and orchestration
        - listitem [ref=e33]: vSphere HA and DRS — availability and workload balancing
        - listitem [ref=e34]: vMotion — live VM migration between hosts
        - listitem [ref=e35]: vSphere Standard and Distributed Switches
        - listitem [ref=e36]: VMFS datastores, NAS, and iSCSI storage
        - listitem [ref=e37]: VM lifecycle management — templates, clones, snapshots
      - heading "If You’re Looking to Learn VMware Today" [level=2] [ref=e38]
      - paragraph [ref=e39]:
        - text: vSphere 4 content is purely of historical interest. If you’re building VMware skills today, focus on vSphere 8 and VMware’s Tanzu/Kubernetes portfolio. See the
        - link "VCP5-DCV guide" [ref=e40] [cursor=pointer]:
          - /url: /clarke-moyer-vcp5-dcv-passing-guide/
        - text: for the next step in the historical progression, or jump to the
        - link "VCP-AM guide" [ref=e41] [cursor=pointer]:
          - /url: /clarke-moyer-vcp-am-passing-guide/
        - text: for the current cloud-native VMware track.
      - heading "Study Materials" [level=2] [ref=e42]
      - paragraph [ref=e43]: "For anyone building current VMware skills, search for modern vSphere study guides:"
      - paragraph [ref=e44]:
        - 'link "Search: VMware vSphere VCP Study Guides ↗" [ref=e45] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=VMware+vSphere+study+guide+VCP&tag=clarkemoyer-20
      - paragraph [ref=e46]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e47] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
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
     |                                                            ^ Error: /clarke-moyer-vcp4-dcv-passing-guide/ missing <main>
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