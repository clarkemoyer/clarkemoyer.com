# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-vcp5-dcv-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-vcp5-dcv-passing-guide/ title: ""

expect(received).toMatch(expected)

Expected pattern: /Clarke Moyer/i
Received string:  ""
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
  5  |  * Smoke Tests
  6  |  * Verifies all pages return HTTP 200 and have a non-empty <title> containing
  7  |  * "Clarke Moyer". Tests run against the live dev/preview server.
  8  |  */
  9  | 
  10 | const certPages = [
  11 |   '/clarke-moyer-cissp-certification-passing-guide/',
  12 |   '/clarke-moyer-cissp-issep-certification-passing-guide/',
  13 |   '/clarke-moyer-ciw-professional-passing-guide/',
  14 |   '/clarke-moyer-comptia-a-plus-passing-guide/',
  15 |   '/clarke-moyer-comptia-network-plus-passing-guide/',
  16 |   '/clarke-moyer-comptia-project-plus-passing-guide/',
  17 |   '/clarke-moyer-comptia-security-plus-passing-guide/',
  18 |   '/clarke-moyer-itil-4-foundation-passing-guide/',
  19 |   '/clarke-moyer-mcp-passing-guide/',
  20 |   '/clarke-moyer-microsoft-ai-900-passing-guide/',
  21 |   '/clarke-moyer-microsoft-az-500-passing-guide/',
  22 |   '/clarke-moyer-microsoft-az-900-passing-guide/',
  23 |   '/clarke-moyer-microsoft-ms-900-passing-guide/',
  24 |   '/clarke-moyer-microsoft-sc-500-passing-guide/',
  25 |   '/clarke-moyer-microsoft-sc-900-passing-guide/',
  26 |   '/clarke-moyer-pmp-certification-passing-guide/',
  27 |   '/clarke-moyer-safe-spc-certification-passing-guide/',
  28 |   '/clarke-moyer-vcp4-dcv-passing-guide/',
  29 |   '/clarke-moyer-vcp5-dcv-passing-guide/',
  30 |   '/clarke-moyer-vcp6-cma-passing-guide/',
  31 |   '/clarke-moyer-vcp-am-passing-guide/',
  32 | ]
  33 | 
  34 | const allPages = [...new Set([...testConfig.pages, ...certPages])]
  35 | 
  36 | test.describe('Smoke — HTTP 200 for all pages', () => {
  37 |   for (const path of allPages) {
  38 |     test(`${path} returns 200`, async ({ page }) => {
  39 |       const response = await page.goto(path)
  40 |       expect(response, `${path} response should not be null`).not.toBeNull()
  41 |       expect(response!.status(), `${path} should return 200`).toBe(200)
  42 |     })
  43 |   }
  44 | })
  45 | 
  46 | test.describe('Smoke — page titles', () => {
  47 |   for (const path of allPages) {
  48 |     test(`${path} has a title containing "Clarke Moyer"`, async ({ page }) => {
  49 |       await page.goto(path)
  50 |       const title = await page.title()
> 51 |       expect(title, `${path} title: "${title}"`).toMatch(/Clarke Moyer/i)
     |                                                  ^ Error: /clarke-moyer-vcp5-dcv-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```