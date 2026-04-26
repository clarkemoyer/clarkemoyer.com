# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-vcp-am-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-vcp-am-passing-guide/ missing <main>

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
        - text: / VCP-AM Guide
      - heading "Clarke Moyer VMware VCP-AM Application Modernization Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: ⚠️ VMware Training Prerequisite
        - paragraph [ref=e14]: VMware certs require attending an official VMware training course to be eligible for the exam. This is a hard requirement — no workaround exists.
      - generic [ref=e15]:
        - 'heading "BLUF: To pass the VCP-AM, do 4 things" [level=2] [ref=e16]'
        - list [ref=e17]:
          - listitem [ref=e18]: Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.
          - listitem [ref=e19]: Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.
          - listitem [ref=e20]: Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.
          - listitem [ref=e21]: "Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you’re scoring 90%+. Don’t over-study — test when you hit 80% and use the re-take as your safety net."
      - generic [ref=e22]:
        - paragraph [ref=e23]: 🔀 The Bridge Cert
        - paragraph [ref=e24]: VCP-AM sits at the intersection of the VMware era and the cloud-native era. VMware Tanzu is essentially Kubernetes with VMware’s enterprise wrapper — containers, application modernization, and the Kubernetes primitives that the CNCF defines. This cert acknowledged that the future was cloud-native even while the VMware ecosystem was the delivery vehicle.
      - heading "About VCP-AM" [level=2] [ref=e25]
      - paragraph [ref=e26]: The VMware Certified Professional – Application Modernization (VCP-AM) is a more modern credential than the VCP6-CMA, focused on containerization, Kubernetes, and modern application delivery on the VMware platform. It validates skills in VMware Tanzu — VMware’s portfolio for Kubernetes and cloud-native application workloads.
      - paragraph [ref=e27]:
        - text: Clarke holds this certification under license
        - strong [ref=e28]: VMW-02637767W
        - text: (VCP-AM 2021/2022). As the DoD and enterprise environments shift toward cloud-native architectures, container orchestration knowledge has become increasingly important for IT professionals operating in those environments.
      - heading "Key Topics Covered" [level=2] [ref=e29]
      - list [ref=e30]:
        - listitem [ref=e31]: VMware Tanzu portfolio — Tanzu Kubernetes Grid (TKG), Tanzu Application Platform (TAP)
        - listitem [ref=e32]: Kubernetes fundamentals — pods, deployments, services, ingress
        - listitem [ref=e33]: Container orchestration and lifecycle management
        - listitem [ref=e34]: Application modernization patterns — lift-and-shift vs. re-platform vs. re-architect
        - listitem [ref=e35]: vSphere with Tanzu (Supervisor clusters)
        - listitem [ref=e36]: Harbor container registry
        - listitem [ref=e37]: NSX-T networking for containerized workloads
      - heading "How VCP-AM Differs from VCP6-CMA" [level=2] [ref=e38]
      - paragraph [ref=e39]: Where VCP6-CMA focused on VMware’s traditional cloud management stack (vRealize Automation, vRealize Operations), VCP-AM focuses on the modern Kubernetes and container-native layer. If you’re operating in an environment moving toward DevSecOps pipelines, containerized microservices, or Kubernetes-based platforms, VCP-AM is the more current and relevant credential.
      - heading "Study Materials" [level=2] [ref=e40]
      - heading "VMware Tanzu & Kubernetes Study Guides" [level=3] [ref=e41]
      - paragraph [ref=e42]: Search for current Tanzu and Kubernetes study materials — the platform evolves quickly, so match your materials to the current exam blueprint version.
      - paragraph [ref=e43]:
        - 'link "Search: VMware Tanzu Kubernetes Study Guides ↗" [ref=e44] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=VMware+Tanzu+Kubernetes+study+guide&tag=clarkemoyer-20
      - heading "VCP Application Modernization Exam Prep" [level=3] [ref=e45]
      - paragraph [ref=e46]: Practice test books and exam prep for the VCP-AM track.
      - paragraph [ref=e47]:
        - 'link "Search: VMware VCP Application Modernization Exam Prep ↗" [ref=e48] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=VMware+VCP+application+modernization+exam&tag=clarkemoyer-20
      - heading "Training Options" [level=2] [ref=e49]
      - paragraph [ref=e50]: "As with all VMware certifications, an authorized training course is required before sitting for the exam:"
      - list [ref=e51]:
        - listitem [ref=e52]:
          - strong [ref=e53]: VMware Education Services
          - text: "— courses like “Kubernetes Fundamentals” and “VMware Tanzu Kubernetes Grid: Deploy, Configure, Manage”"
        - listitem [ref=e54]:
          - strong [ref=e55]: VMware Authorized Training Centers (VATCs)
        - listitem [ref=e56]: Pluralsight VMware learning paths (for supplemental study, not exam eligibility)
      - paragraph [ref=e57]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e58] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - paragraph [ref=e59]:
        - text: "📅 See also:"
        - link "Industry Conferences" [ref=e60] [cursor=pointer]:
          - /url: /industry-conferences/
      - generic [ref=e61]:
        - paragraph [ref=e62]: 🚀 What Comes Next
        - paragraph [ref=e63]: "The VMware cloud management era is over. The industry has moved decisively to cloud-native architecture under the CNCF. Clarke’s recommendation for anyone entering cloud today:"
        - list [ref=e64]:
          - listitem [ref=e65]: Focus on application and network service delivery, not underlying infrastructure components
          - listitem [ref=e66]: The underlying cloud is now commoditized — AWS, Azure, GCP, and private clouds built on OpenStack/Kubernetes are fungible
          - listitem [ref=e67]: Certify on what runs ON the cloud, not what the cloud runs on
          - listitem [ref=e68]:
            - strong [ref=e69]: KubeCon + CloudNativeCon
            - text: (commonly called KubeCon) is co-located with
            - strong [ref=e70]: CNCFCon
            - text: — both run simultaneously at the same venue. Clarke recommends attending both. KubeCon is the Kubernetes-focused track; CNCFCon covers the broader CNCF project ecosystem. Clarke attended last year in Atlanta.
        - paragraph [ref=e71]:
          - link "Cloud Native Computing Foundation →" [ref=e72] [cursor=pointer]:
            - /url: https://www.cncf.io
          - text: "|"
          - link "KubeCon + CloudNativeCon →" [ref=e73] [cursor=pointer]:
            - /url: https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/
          - text: "|"
          - link "CNCFCon →" [ref=e74] [cursor=pointer]:
            - /url: https://events.linuxfoundation.org/cncf-con/
      - link "← Back to Certification Guides" [ref=e76] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e77]
  - region "Cookie consent notice" [ref=e78]:
    - generic [ref=e80]:
      - generic [ref=e81]:
        - heading "We Value Your Privacy" [level=3] [ref=e82]
        - paragraph [ref=e83]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e84]:
          - link "Privacy Policy" [ref=e85] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e86] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e87]:
        - button "Decline All" [ref=e88]
        - button "Customize" [ref=e89]
        - button "Accept All" [ref=e90]
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
     |                                                            ^ Error: /clarke-moyer-vcp-am-passing-guide/ missing <main>
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