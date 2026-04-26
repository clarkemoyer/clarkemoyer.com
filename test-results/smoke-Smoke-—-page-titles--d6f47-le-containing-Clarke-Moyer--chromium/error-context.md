# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /cookie-policy/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /cookie-policy/ title: ""

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
    - navigation [ref=e4]:
      - generic [ref=e7]:
        - link "Search this site (opens in new tab)" [ref=e9] [cursor=pointer]:
          - /url: https://duckduckgo.com/?q=site%3Aclarkemoyer.com
          - img [ref=e10]
          - text: SEARCH
        - link "CLARKE MOYER" [ref=e13] [cursor=pointer]:
          - /url: /
          - heading "CLARKE MOYER" [level=1] [ref=e14]
        - button "Toggle menu" [ref=e16]:
          - img [ref=e17]
          - text: MENU
      - generic [ref=e21]:
        - link "HOME" [ref=e22] [cursor=pointer]:
          - /url: /
        - button "ABOUT" [ref=e24]:
          - text: ABOUT
          - img [ref=e25]
        - button "FUN" [ref=e28]:
          - text: FUN
          - img [ref=e29]
        - link "CERTIFICATION GUIDES" [ref=e31] [cursor=pointer]:
          - /url: /certification-guides/
        - link "WGU REFERRAL PROGRAM" [ref=e32] [cursor=pointer]:
          - /url: /wgu-referral-program/
        - link "PSU-ARL REFERRAL PROGRAM" [ref=e33] [cursor=pointer]:
          - /url: /psu-arl-referral-program/
        - link "FREE FOR CHARITY" [ref=e34] [cursor=pointer]:
          - /url: /free-for-charity/
      - link "CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE" [ref=e38] [cursor=pointer]:
        - /url: /clarke-moyer-cissp-certification-passing-guide/
    - generic [ref=e39]:
      - heading "Cookie Policy" [level=1] [ref=e40]
      - paragraph [ref=e41]:
        - emphasis [ref=e42]: "Last Updated: April 2026"
      - generic [ref=e43]:
        - generic [ref=e44]:
          - heading "1. What Are Cookies?" [level=2] [ref=e45]
          - paragraph [ref=e46]: Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it. Cookies can be "persistent" (remain until they expire or are deleted) or "session" (deleted when you close your browser).
        - generic [ref=e47]:
          - heading "2. How This Site Uses Cookies" [level=2] [ref=e48]
          - paragraph [ref=e49]: This site uses cookies to store your cookie consent preferences, and optionally to analyze traffic and support marketing — only with your explicit consent.
        - generic [ref=e50]:
          - heading "3. Types of Cookies" [level=2] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - strong [ref=e54]: "Necessary:"
              - text: Required for the site to function (e.g. storing your consent choice). Always active.
            - listitem [ref=e55]:
              - strong [ref=e56]: "Analytics:"
              - text: Help understand how visitors use the site (e.g. Google Analytics, Microsoft Clarity). Opt-in only.
            - listitem [ref=e57]:
              - strong [ref=e58]: "Marketing:"
              - text: Used for retargeting and advertising (e.g. Meta Pixel). Opt-in only.
        - generic [ref=e59]:
          - heading "4. Managing Your Preferences" [level=2] [ref=e60]
          - paragraph [ref=e61]: You can update your cookie preferences at any time using the "Cookie Preferences" link in the footer. You can also clear your browser's local storage and cookies to reset your preferences.
        - generic [ref=e62]:
          - heading "5. Contact" [level=2] [ref=e63]
          - paragraph [ref=e64]:
            - text: Questions? Contact Clarke Moyer via
            - link "LinkedIn" [ref=e65] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/clarkemoyer
            - text: .
  - alert [ref=e66]
  - region "Cookie consent notice" [ref=e67]:
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading "We Value Your Privacy" [level=3] [ref=e71]
        - paragraph [ref=e72]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e73]:
          - link "Privacy Policy" [ref=e74] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e75] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e76]:
        - button "Decline All" [ref=e77]
        - button "Customize" [ref=e78]
        - button "Accept All" [ref=e79]
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
     |                                                  ^ Error: /cookie-policy/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```