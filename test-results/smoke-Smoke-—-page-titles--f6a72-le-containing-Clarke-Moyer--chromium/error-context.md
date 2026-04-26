# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /fun/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /fun/ title: ""

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
    - generic [ref=e4]:
      - generic [ref=e6]:
        - text: "You are here:"
        - link "Home" [ref=e7] [cursor=pointer]:
          - /url: /
        - text: / Fun
      - heading "Fun" [level=1] [ref=e9]
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "An Assortment of Other Fun Things I am Working On" [level=2] [ref=e14]
        - paragraph [ref=e15]: Reach out to me if you have any questions on any topic.
        - link "Reach out to me on LinkedIn" [ref=e16] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/clarkemoyer
      - generic [ref=e17]:
        - generic [ref=e18]:
          - heading "Cooking" [level=3] [ref=e19]
          - paragraph [ref=e20]: My wife is a trained chef but she does not have a website! This is where I keep my ‘World Famous’ recipes.
          - link "Cooking Homepage" [ref=e21] [cursor=pointer]:
            - /url: /cooking/
        - generic [ref=e22]:
          - heading "Quotes" [level=3] [ref=e23]
          - paragraph [ref=e24]: Popular song lyrics reframed as business philosophy and technology adoption insights.
          - link "Quotes Homepage" [ref=e25] [cursor=pointer]:
            - /url: /quotes/
        - generic [ref=e26]:
          - heading "Books & Reading" [level=3] [ref=e27]
          - paragraph [ref=e28]: I don’t read many books but when I do I sometimes add them here.
          - link "Books & Reading Homepage" [ref=e29] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e30]:
          - heading "Travel & Events" [level=3] [ref=e31]
          - paragraph [ref=e32]: We love to travel and do local things. I will try and list them here.
          - link "Travel & Events homepage" [ref=e33] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e34]:
          - heading "Speaking & Publishing" [level=3] [ref=e35]
          - paragraph [ref=e36]: I am always looking for speaking and publishing opportunities. If I get them I post them here.
          - link "Speaking & Publishing Homepage" [ref=e37] [cursor=pointer]:
            - /url: "#"
    - generic [ref=e39]:
      - heading "Let's Start a Dialogue" [level=3] [ref=e40]
      - paragraph [ref=e41]: At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and an Education Supporter. I am seeking to expand upon my existing experiences and relationships by representing what I am involved in and taking inputs from the greater community. Please contact me if you see some common ground.
      - link "Connect Today" [ref=e42] [cursor=pointer]:
        - /url: https://www.linkedin.com/in/clarkemoyer/
    - generic [ref=e44]:
      - heading "Click for a WGU Referral" [level=3] [ref=e45]
      - link "Western Governors University Logo PROUD WGU GRAD!" [ref=e46] [cursor=pointer]:
        - /url: https://mbsy.co/3ff2tz
        - generic [ref=e47]:
          - img "Western Governors University Logo" [ref=e49]
          - generic [ref=e50]: PROUD
          - generic [ref=e51]: WGU GRAD!
  - alert [ref=e52]
  - region "Cookie consent notice" [ref=e53]:
    - generic [ref=e55]:
      - generic [ref=e56]:
        - heading "We Value Your Privacy" [level=3] [ref=e57]
        - paragraph [ref=e58]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e59]:
          - link "Privacy Policy" [ref=e60] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e61] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e62]:
        - button "Decline All" [ref=e63]
        - button "Customize" [ref=e64]
        - button "Accept All" [ref=e65]
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
     |                                                  ^ Error: /fun/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```