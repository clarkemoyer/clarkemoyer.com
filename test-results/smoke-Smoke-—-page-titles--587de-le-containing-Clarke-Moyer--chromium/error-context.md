# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /industry-conferences/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /industry-conferences/ title: ""

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
     |                                                  ^ Error: /industry-conferences/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```