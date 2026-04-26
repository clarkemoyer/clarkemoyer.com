# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /it-project-management-resume-of-clarke-moyer/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /it-project-management-resume-of-clarke-moyer/ title: ""

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
        - text: / Resume
      - heading "IT Project Management Resume of Clarke Moyer" [level=1] [ref=e8]
    - generic [ref=e10]:
      - paragraph [ref=e11]: I am always looking to connect with interesting people making a difference in my industry. Connect today with me on LinkedIn.
      - link "Clarke Moyer LinkedIn Profile" [ref=e12] [cursor=pointer]:
        - /url: https://www.linkedin.com/in/clarkemoyer/
      - paragraph [ref=e13]: If you are looking for a resume example to use, please see my older resume template below. You can freely use this for your own needs.
      - link "Example Resume of Clarke Moyer (PDF)" [ref=e14] [cursor=pointer]:
        - /url: /downloads/Clarke-Moyer-Resume.pdf
  - alert [ref=e15]
  - region "Cookie consent notice" [ref=e16]:
    - generic [ref=e18]:
      - generic [ref=e19]:
        - heading "We Value Your Privacy" [level=3] [ref=e20]
        - paragraph [ref=e21]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e22]:
          - link "Privacy Policy" [ref=e23] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e24] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e25]:
        - button "Decline All" [ref=e26]
        - button "Customize" [ref=e27]
        - button "Accept All" [ref=e28]
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
     |                                                  ^ Error: /it-project-management-resume-of-clarke-moyer/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```