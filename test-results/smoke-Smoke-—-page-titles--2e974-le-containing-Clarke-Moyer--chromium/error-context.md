# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /psu-arl-referral-program/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /psu-arl-referral-program/ title: ""

expect(received).toMatch(expected)

Expected pattern: /Clarke Moyer/i
Received string:  ""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=e4]:
    - generic [ref=e5]:
      - link "← Back to Home" [ref=e6] [cursor=pointer]:
        - /url: /
      - heading "PSU-ARL Referral Program" [level=1] [ref=e7]
      - generic [ref=e8]:
        - paragraph [ref=e9]: "Please connect with me for referrals to work for PSU-ARL. NOTE: I provide referrals only to those that I have personally validated the experience of."
        - paragraph [ref=e10]: The best way to start a referral with me is to connect on Linkedin and then send me a Linkedin message. Priority is given for those that are a MOS 33W or 35T qualified and those that are currently enrolled in WGU or have completed a WGU program of study.
        - paragraph [ref=e11]:
          - link "CONNECT WITH ME ON LINKEDIN" [ref=e12] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/clarkemoyer/
        - paragraph [ref=e13]: As ARL PI/PM I am currently hiring in multiple labor categories and locations. There is a specific focus on DevSecOps, CI/CD, Cyber security, and Logistics in the San Diego area. You can directly apply for these jobs on the PSU-ARL Careers page without a referral.
        - paragraph [ref=e14]:
          - link "APPLY TO THE ARL DEVSECOPS PROGRAM" [ref=e15] [cursor=pointer]:
            - /url: https://psu.wd1.myworkdayjobs.com/PSU_Staff?q=ARL&locations=b0858b72065c0154f935e400c501ef12
  - alert [ref=e16]
  - region "Cookie consent notice" [ref=e17]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - heading "We Value Your Privacy" [level=3] [ref=e21]
        - paragraph [ref=e22]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e23]:
          - link "Privacy Policy" [ref=e24] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e25] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e26]:
        - button "Decline All" [ref=e27]
        - button "Customize" [ref=e28]
        - button "Accept All" [ref=e29]
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
     |                                                  ^ Error: /psu-arl-referral-program/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```