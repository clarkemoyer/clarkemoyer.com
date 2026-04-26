# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-vcp4-dcv-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-vcp4-dcv-passing-guide/ title: ""

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
     |                                                  ^ Error: /clarke-moyer-vcp4-dcv-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```