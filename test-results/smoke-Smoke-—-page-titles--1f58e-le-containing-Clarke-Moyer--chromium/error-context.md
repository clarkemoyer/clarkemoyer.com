# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-ciw-professional-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-ciw-professional-passing-guide/ title: ""

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
        - text: / CIW Professional Guide
      - heading "Clarke Moyer CIW Professional Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 🎓 WGU Degree Program Context
        - paragraph [ref=e14]:
          - text: Clarke obtained this certification as part of completing his
          - strong [ref=e15]: BS-IT (Bachelor of Science in Information Technology)
          - text: at
          - link "Western Governors University (WGU)" [ref=e16] [cursor=pointer]:
            - /url: /wgu-referral-program
          - text: . WGU's IT degree program integrates industry certification preparation directly into the curriculum — students can earn both the degree and the certifications simultaneously. This is why Clarke holds multiple foundational certifications from the same 2008–2009 period. If you're considering WGU, the built-in cert prep is a significant part of the value.
      - generic [ref=e17]:
        - paragraph [ref=e18]: 📋 Market Recognition Note
        - paragraph [ref=e19]: The CIW certification program has limited current market recognition compared to modern cloud certifications. Clarke recommends pursuing Microsoft or CompTIA certifications instead for current market value.
      - generic [ref=e20]:
        - 'heading "BLUF: To pass CIW exams, do 4 things" [level=2] [ref=e21]'
        - list [ref=e22]:
          - listitem [ref=e23]: Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.
          - listitem [ref=e24]: Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.
          - listitem [ref=e25]: Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.
          - listitem [ref=e26]: "Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you’re scoring 90%+. Don’t over-study — test when you hit 80% and use the re-take as your safety net."
      - heading "About CIW Professional" [level=2] [ref=e27]
      - paragraph [ref=e28]:
        - text: CIW (Certified Internet Webmaster) Professional is a foundational web technology credential covering internet fundamentals, web design, and network technology. Clarke obtained his CIW Professional on
        - strong [ref=e29]: April 22, 2009
        - text: ", alongside the CIW Database Design Specialist — a companion certification focused on relational database design, SQL, and data modeling for web applications."
      - paragraph [ref=e30]: These credentials were earned during Clarke’s intensive 2008–2009 certification sprint, which also included CompTIA A+, Network+, Security+, Project+, and Microsoft MCP. They represent the foundational web and data technology knowledge that supported his early IT career.
      - heading "CIW Database Design Specialist" [level=2] [ref=e31]
      - paragraph [ref=e32]: "The CIW Database Design Specialist companion certification validates skills in:"
      - list [ref=e33]:
        - listitem [ref=e34]: Relational database concepts and normalization
        - listitem [ref=e35]: SQL queries — SELECT, JOIN, subqueries, aggregation
        - listitem [ref=e36]: Database design and entity-relationship modeling
        - listitem [ref=e37]: Web database integration basics
      - heading "Historical Context" [level=2] [ref=e38]
      - paragraph [ref=e39]: In 2009, CIW was a recognized vendor-neutral web technology credential. The program has since lost significant market traction as the industry moved toward cloud platforms, role-based Microsoft certifications, and CompTIA’s expanding catalog. While these certs served a legitimate purpose at the time, Clarke would direct someone building credentials today toward Microsoft Azure or CompTIA tracks instead.
      - heading "Study Materials" [level=2] [ref=e40]
      - heading "CIW Professional Study Guides" [level=3] [ref=e41]
      - paragraph [ref=e42]: If you’re pursuing CIW for a specific contract requirement, search for current study guides below. Materials are sparse — most preparation will come from official CIW courseware.
      - paragraph [ref=e43]:
        - 'link "Search: CIW Professional Study Guides ↗" [ref=e44] [cursor=pointer]':
          - /url: https://www.amazon.com/s?k=CIW+Professional+study+guide&tag=clarkemoyer-20
      - paragraph [ref=e45]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e46] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e48] [cursor=pointer]:
        - /url: /certification-guides/
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
     |                                                  ^ Error: /clarke-moyer-ciw-professional-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```