# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /free-for-charity/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /free-for-charity/ title: ""

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
    - heading "Free For Charity" [level=1] [ref=e6]
    - generic [ref=e10]:
      - paragraph [ref=e11]: I have been actively involved in direct and indirect charity projects for many years. Most notably I have Founded and continue to fund a nonprofit that helps other nonprofits with IT, Business, Web, Marketing, and other services at no cost called “Free For Charity”
      - link "Learn More About Free For Charity" [ref=e13] [cursor=pointer]:
        - /url: https://freeforcharity.org
      - generic [ref=e14]:
        - paragraph [ref=e15]: I have been actively involved in direct and indirect charity projects for many years. Most notably I have founded and continue to fund a nonprofit that helps other nonprofits with IT, business, web, marketing, and other services at no cost called "Free For Charity".
        - heading "About Free For Charity" [level=2] [ref=e16]
        - paragraph [ref=e17]: Free for Charity has a simple mission with broad implications.
        - heading "Reduce costs and increase revenues for nonprofits; putting that money back into their charitable mission where it belongs." [level=3] [ref=e18]
        - paragraph [ref=e19]: This charity for charities seeks to replace as many functions as possible that current nonprofits pay for to for-profit companies with free or at cost work from our campus, on site projects, or partnerships with other entities.
        - heading "Some things we are working to get to free or at cost to non profits and charity groups are:" [level=3] [ref=e20]
        - list [ref=e21]:
          - listitem [ref=e22]: Free charity website hosting with tons of normally for-profit paid products included free for charities
          - listitem [ref=e23]: Research papers, case studies, and use cases from other industries and nonprofits
          - listitem [ref=e24]: Guides for the charity or nonprofit manager in many best business practices
          - listitem [ref=e25]: Unbiased technology directory focused on helping you find the software and tools you need
          - listitem [ref=e26]: Unbiased service and consultant directory again free of overt marketing or gimmicks
        - paragraph [ref=e27]: Free for Charity engages in a full cycle training and workshop programs to develop the needed talent by leveraging the growing use of telecommuting and information technology from a campus environment.
        - paragraph [ref=e28]: Free for Charity trains both the in-house staff of existing charities, as well as direct employees and volunteers of Free for Charity who will then perform work for charities as out of house consultants.
        - paragraph [ref=e29]: Cultivation of information technology and business skills is the charitable purpose and the net result of Free for Charity. As part of the educational mission Free for Charity trainees engage local residents, small businesses, and pre 501c3 charities to build up the skills needed to work on complex non-profit projects.
        - paragraph [ref=e30]:
          - strong [ref=e31]:
            - text: Contact me anytime about Free For Charity or visit
            - link "FreeForCharity.org" [ref=e32] [cursor=pointer]:
              - /url: https://freeforcharity.org
            - text: to learn more.
    - generic [ref=e34]:
      - heading "Connect with me" [level=3] [ref=e35]
      - generic [ref=e36]:
        - link "Connect on LinkedIn" [ref=e37] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - link "Apply for Jobs at ARL" [ref=e38] [cursor=pointer]:
          - /url: https://www.arl.army.mil/careers/
  - alert [ref=e39]
  - region "Cookie consent notice" [ref=e40]:
    - generic [ref=e42]:
      - generic [ref=e43]:
        - heading "We Value Your Privacy" [level=3] [ref=e44]
        - paragraph [ref=e45]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e46]:
          - link "Privacy Policy" [ref=e47] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e48] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e49]:
        - button "Decline All" [ref=e50]
        - button "Customize" [ref=e51]
        - button "Accept All" [ref=e52]
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
     |                                                  ^ Error: /free-for-charity/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```