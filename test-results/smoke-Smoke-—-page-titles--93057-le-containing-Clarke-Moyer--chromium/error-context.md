# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /who-i-am/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /who-i-am/ title: ""

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
        - text: / Who I Am
      - heading "Who I Am" [level=1] [ref=e8]
    - generic [ref=e10]:
      - paragraph [ref=e11]: Start your targeting packages here. This is a general introduction to who I am and what motivates me.
      - heading "Husband and Father" [level=2] [ref=e12]
      - paragraph [ref=e13]: I am married to April Moyer and we have 2 children Autumn Moyer and Clarke S. Moyer. We focus on doing fun things around the house and saving for great vacations. For pictures and a better view of my family life, send me a friend request on Facebook.
      - heading "Education Supporter" [level=2] [ref=e14]
      - paragraph [ref=e15]: I started late into education. When getting out of the Army I did not think that I “needed” a college education. Times have changed for me. I have now invested in myself through both technical certifications and formal education.
      - paragraph [ref=e16]:
        - text: I currently hold over 10 certifications and trainings. For more information regarding my DoD and industry IT certifications please visit my
        - link "LinkedIn Page" [ref=e17] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - text: .
      - paragraph [ref=e18]: For formal education, I hold a BS-IT and an MBA-ITM from WGU as well as a graduate certificate of project management from UMUC. I am pursuing the PSU Smeal eDBA Program.
      - paragraph [ref=e19]:
        - text: I highly recommend WGU to anyone seeking to further their education. For more information please see my
        - link "WGU alumni referral page" [ref=e20] [cursor=pointer]:
          - /url: /wgu-referral/
        - text: .
      - heading "DoD Contractor" [level=2] [ref=e21]
      - paragraph [ref=e22]:
        - text: Since leaving the US Army as a 33W (35T) I have worked for several great companies and organizations. My services have focused primarily on Agile information technology support. This support has spanned multiple size organizations at different echelons across the government sector. For a full listing of my experience and education please view my
        - link "LinkedIn Page" [ref=e23] [cursor=pointer]:
          - /url: https://linkedin.com/in/clarkemoyer
        - text: .
      - paragraph [ref=e24]: I am currently employed by PSU-ARL.
      - heading "Physical Investor / Charity Supporter" [level=2] [ref=e25]
      - paragraph [ref=e26]: Taking an active role in investing for the future is to me a critical part of anyone’s life. Investing to me means more than just stocks and bonds stashed away in a 401K. Taking a physical approach to investing I hold many unique assets above and beyond stocks and bonds.
      - paragraph [ref=e27]:
        - text: I have also founded a 501c3 non profit that helps to educate other nonprofits and charity staff on IT, business and marketing topics. To learn more visit
        - link "freeforcharity.org" [ref=e28] [cursor=pointer]:
          - /url: https://freeforcharity.org
        - text: .
      - link "Connect on LinkedIn" [ref=e30] [cursor=pointer]:
        - /url: https://linkedin.com/in/clarkemoyer
  - alert [ref=e31]
  - region "Cookie consent notice" [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - heading "We Value Your Privacy" [level=3] [ref=e36]
        - paragraph [ref=e37]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e38]:
          - link "Privacy Policy" [ref=e39] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e40] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e41]:
        - button "Decline All" [ref=e42]
        - button "Customize" [ref=e43]
        - button "Accept All" [ref=e44]
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
     |                                                  ^ Error: /who-i-am/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```