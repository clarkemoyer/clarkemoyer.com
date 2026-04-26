# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /quotes/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /quotes/ title: ""

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
    - generic [ref=e40]:
      - generic [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
        - text: /
        - link "Fun" [ref=e43] [cursor=pointer]:
          - /url: /fun/
        - text: / Quotes
      - heading "Famous Business Quotes" [level=1] [ref=e44]
      - paragraph [ref=e45]: Popular culture distills hard truths. Here are some lyrics that hit differently when you're thinking about technology, organizations, and change.
    - generic [ref=e47]:
      - generic [ref=e49]:
        - heading "Somebody That I Used to Know" [level=2] [ref=e50]
        - paragraph [ref=e51]:
          - emphasis [ref=e52]: Gotye (feat. Kimbra)
        - blockquote [ref=e53]: “You can be addicted to a certain kind of sadness.”
        - button "Play Gotye - Somebody That I Used to Know (feat. Kimbra)" [ref=e56]:
          - img "Gotye - Somebody That I Used to Know (feat. Kimbra)" [ref=e57]
        - heading "The Business Angle" [level=3] [ref=e59]
        - generic [ref=e60]:
          - paragraph [ref=e61]: Organizations and individuals become attached to legacy systems, processes, and ways of working — even when they cause friction. The familiar discomfort of the old beats the uncertainty of the new. It's a strange comfort, choosing the devil you know over the one you don't.
          - paragraph [ref=e62]: This maps directly to status quo bias, sunk cost fallacy, and resistance to digital transformation. Teams defend aging infrastructure not because it's better, but because it's known. Processes persist not because they work, but because rebuilding them feels riskier than tolerating them.
          - paragraph [ref=e63]: Change management isn't just about deploying new technology — it's about breaking the emotional dependency on legacy ways of doing things. Acknowledge the grief. Name the attachment. Then move forward anyway.
      - generic [ref=e65]:
        - heading "7 Rings" [level=2] [ref=e66]
        - paragraph [ref=e67]:
          - emphasis [ref=e68]: Ariana Grande
        - blockquote [ref=e69]: “People who say money can’t solve their problems must not have had enough money to solve them.”
        - button "Play Ariana Grande - 7 rings" [ref=e72]:
          - img "Ariana Grande - 7 rings" [ref=e73]
        - heading "The Business Angle" [level=3] [ref=e75]
        - generic [ref=e76]:
          - paragraph [ref=e77]: Underfunded IT teams often treat tool selection, infrastructure upgrades, and talent acquisition as unsolvable problems — when the real constraint is budget. "We can't fix that" frequently translates to "we haven't allocated what it would cost to fix that." Adequate investment unlocks options that didn't exist before.
          - paragraph [ref=e78]: This speaks directly to IT budget advocacy and the hidden cost of technical debt. Every year an aging system isn't replaced, the organization pays in productivity loss, security exposure, and engineer burnout. The "savings" from not upgrading are often illusory — they're just future costs in disguise.
          - paragraph [ref=e79]: Chronically understaffed engineering organizations stay stuck in cycles of firefighting instead of building. You can't innovate when your whole team is on-call for a system that should have been retired three budget cycles ago. Sometimes the most strategic thing a technology leader can do is make the business case — clearly, loudly, and with data — for simply spending the money.
  - alert [ref=e80]
  - region "Cookie consent notice" [ref=e81]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - heading "We Value Your Privacy" [level=3] [ref=e85]
        - paragraph [ref=e86]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e87]:
          - link "Privacy Policy" [ref=e88] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e89] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e90]:
        - button "Decline All" [ref=e91]
        - button "Customize" [ref=e92]
        - button "Accept All" [ref=e93]
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
     |                                                  ^ Error: /quotes/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```