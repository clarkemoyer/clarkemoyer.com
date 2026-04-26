# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /wgu-referral-program/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /wgu-referral-program/ title: ""

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
      - heading "WGU Referral Program" [level=1] [ref=e7]
      - generic [ref=e8]:
        - heading "Absolutely free, alumni referral to Western Governors University (WGU)." [level=2] [ref=e9]
        - paragraph [ref=e10]: For years now since I started and subsequently graduated from Western Governors University I've been referring my friends family and colleagues to enroll in the university with the WGU referral program. I have done this due to how much I enjoyed my experience as well as how much I feel that I have actually gained from the completion of my degrees. While I have attended two ground-based colleges and three different online colleges, both before and after my degrees with Western Governors University; Western Governors University is the only one who really rises to the top and deserves my undivided recommendation.
        - heading "🎓 Built-In Certification Prep — A Major Hidden Benefit" [level=3] [ref=e11]
        - paragraph [ref=e12]:
          - text: One of the underrated benefits of WGU's IT program is that certification preparation is built directly into the coursework. Clarke earned his
          - link "CompTIA A+" [ref=e13] [cursor=pointer]:
            - /url: /clarke-moyer-comptia-a-plus-passing-guide
          - text: ","
          - link "Network+" [ref=e14] [cursor=pointer]:
            - /url: /clarke-moyer-comptia-network-plus-passing-guide
          - text: ","
          - link "Security+" [ref=e15] [cursor=pointer]:
            - /url: /clarke-moyer-comptia-security-plus-passing-guide
          - text: ","
          - link "Project+" [ref=e16] [cursor=pointer]:
            - /url: /clarke-moyer-comptia-project-plus-passing-guide
          - text: ", and"
          - link "CIW Professional" [ref=e17] [cursor=pointer]:
            - /url: /clarke-moyer-ciw-professional-passing-guide
          - text: certifications as part of completing the BS-IT degree — not separately. If you're planning to pursue these certs anyway, the WGU path lets you get both the degree and the certifications at the same time. Clarke held all of these before finishing the degree program, thanks to WGU's integrated curriculum.
        - paragraph [ref=e18]:
          - link "See all certification guides →" [ref=e19] [cursor=pointer]:
            - /url: /certification-guides/
        - heading "Referral Information" [level=3] [ref=e20]
        - paragraph [ref=e21]:
          - strong [ref=e22]: "NOTE:"
          - text: If WGU no longer has direct referral links you have to fill out a form.
        - paragraph [ref=e23]:
          - strong [ref=e24]: "Referrer Information:"
        - list [ref=e25]:
          - listitem [ref=e26]:
            - strong [ref=e27]: "Email:"
            - text: "[email protected]"
          - listitem [ref=e28]:
            - strong [ref=e29]: "First Name:"
            - text: Clarke
          - listitem [ref=e30]:
            - strong [ref=e31]: "Last Name:"
            - text: Moyer
        - paragraph [ref=e32]: Then input your information in the "Referral's" fields.
        - heading "Still not convinced? Read on to see why I recommend WGU so highly" [level=3] [ref=e33]
        - heading "Why an online university?" [level=2] [ref=e34]
        - heading "Don't Quit Your Job" [level=3] [ref=e35]
        - paragraph [ref=e36]: You do not have to quit your job to gain an education
        - heading "More Degree Choices" [level=3] [ref=e37]
        - paragraph [ref=e38]: You do not have to limit yourself to the programs available in your local college
        - heading "Portability" [level=3] [ref=e39]
        - paragraph [ref=e40]: You can move and not worry about transferring credits. With a traditional university if you move between accreditation regions some or all of your coursework will not transfer.
        - heading "Respected" [level=3] [ref=e41]
        - paragraph [ref=e42]: If your online university holds the same accreditation as your state university it is hard to discount the quality of the program.
        - heading "Why education at all?" [level=2] [ref=e43]
        - paragraph [ref=e44]: "In a nut shell formal education has had the following effects in my life:"
        - heading "Quantitative factors (actual provable results)" [level=3] [ref=e45]
        - list [ref=e46]:
          - listitem [ref=e47]: More total job offers
          - listitem [ref=e48]: More stability in my position
          - listitem [ref=e49]: Improved positions
          - listitem [ref=e50]: Direct promotions
        - heading "Qualitative factors (perceived effects)" [level=3] [ref=e51]
        - list [ref=e52]:
          - listitem [ref=e53]: More stability in my active position
          - listitem [ref=e54]: Transition from wage worker to career focus
          - listitem [ref=e55]: Seen as more of an expert
        - paragraph [ref=e56]:
          - text: For more details about my WGU experience, see my
          - link "Educational Background" [ref=e57] [cursor=pointer]:
            - /url: /education
          - text: page.
      - generic [ref=e58]:
        - heading "Connect with me" [level=3] [ref=e59]
        - generic [ref=e60]:
          - link "Connect on LinkedIn" [ref=e61] [cursor=pointer]:
            - /url: https://linkedin.com/in/clarkemoyer
          - link "Apply for Jobs at ARL" [ref=e62] [cursor=pointer]:
            - /url: https://www.arl.army.mil/careers/
  - alert [ref=e63]
  - region "Cookie consent notice" [ref=e64]:
    - generic [ref=e66]:
      - generic [ref=e67]:
        - heading "We Value Your Privacy" [level=3] [ref=e68]
        - paragraph [ref=e69]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e70]:
          - link "Privacy Policy" [ref=e71] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e72] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e73]:
        - button "Decline All" [ref=e74]
        - button "Customize" [ref=e75]
        - button "Accept All" [ref=e76]
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
     |                                                  ^ Error: /wgu-referral-program/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```