# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-comptia-a-plus-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-comptia-a-plus-passing-guide/ title: ""

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
        - text: / A+ Guide
      - heading "Clarke Moyer CompTIA A+ Certification Passing Guide" [level=1] [ref=e9]
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
      - paragraph [ref=e18]:
        - text: ⚠️
        - strong [ref=e19]: "A Note From Clarke:"
        - text: I no longer recommend pursuing CompTIA certifications as a primary certification track. If your goal is DoD 8570/NICE compliance or a career in cybersecurity, go directly to the CISSP track — it carries significantly more weight and longevity. CompTIA certs are accepted as DoD 8570 baseline qualifiers but the CISSP supersedes them.
        - link "See the CISSP Passing Guide" [ref=e20] [cursor=pointer]:
          - /url: /clarke-moyer-cissp-certification-passing-guide/
        - text: to start there instead. This guide remains here for those already committed to the CompTIA path.
      - generic [ref=e21]:
        - paragraph [ref=e22]: 📋 Active CE Renewal
        - paragraph [ref=e23]:
          - text: Clarke actively maintains this certification through CompTIA's Continuing Education (CE) program — which is why you'll see the "ce" suffix (e.g., A+
          - strong [ref=e24]: ce
          - text: ) in his credentials. While Clarke no longer recommends this as a starting path, he keeps it current as part of his professional maintenance discipline. An active CE certification requires ongoing education and renewal — it's not a one-time achievement left to expire.
      - generic [ref=e25]:
        - 'heading "BLUF: To pass the A+, do 4 things" [level=2] [ref=e26]'
        - list [ref=e27]:
          - listitem [ref=e28]: Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.
          - listitem [ref=e29]: "Go audio-first: get the audiobook version and study while walking, driving, or doing household tasks. Passive absorption adds up."
          - listitem [ref=e30]: Practice tests are the core. Buy the book primarily for access to the digital test bank — that’s the real product.
          - listitem [ref=e31]: Don’t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take voucher is your safety net.
      - paragraph [ref=e32]: "I passed the CompTIA A+ in August 2008 — it was my first CompTIA certification and the starting point of a run that included Network+ and Security+ within the same year. A+ is two exams (Core 1 and Core 2), which makes the test strategy below even more important: don’t over-prepare for either one."
      - paragraph [ref=e33]:
        - strong [ref=e34]: "Obtained:"
        - text: August 15, 2008 |
        - strong [ref=e35]: "License:"
        - text: COMP001007606759
      - heading "Study Method" [level=2] [ref=e36]
      - heading "1. Create Competition" [level=3] [ref=e37]
      - paragraph [ref=e38]: Find someone — a colleague, study buddy, anyone — and make it a race. Announce it publicly if possible. The social pressure of a competition is more powerful than any study schedule. Even if you lose the race, you both pass. That happened to me with the CISSP and it still worked.
      - heading "2. Audio First" [level=3] [ref=e39]
      - paragraph [ref=e40]: A+ covers an enormous breadth of hardware, software, networking, and troubleshooting topics. Audio study is ideal for the vocabulary-heavy portions — component names, connector types, OS features. Use your commute and downtime. By the time you hit the practice tests, the terminology should feel second nature.
      - heading "3. Practice Tests Are the Core" [level=3] [ref=e41]
      - paragraph [ref=e42]: Buy the study guide primarily for the digital test prep access that comes with it. Mike Meyers publishes separate Core 1 and Core 2 guides — each includes online test access. That test bank is the real product. The book is a reference.
      - heading "4. Don’t Over-Study" [level=3] [ref=e43]
      - paragraph [ref=e44]: Run all questions once. Rerun the ones you got wrong until you score zero wrong. Then switch to a real-test mix (random, timed) and keep going until you hit 90%+. Schedule when you’re at 80% — you have a re-take available. Repeat for both Core 1 and Core 2 independently.
      - heading "Books / Materials" [level=2] [ref=e45]
      - heading "Mike Meyers CompTIA A+ Core 1 (220-1101) ← Must Buy" [level=3] [ref=e46]
      - paragraph [ref=e47]: Covers hardware, networking, mobile devices, virtualization, and cloud computing. Buy for the online practice test access included with the book.
      - paragraph [ref=e48]:
        - link "Mike Meyers CompTIA A+ Core 1 (220-1101) ↗" [ref=e49] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Mike+Meyers+CompTIA+A+Plus+Core+1&tag=clarkemoyer-20
      - heading "Mike Meyers CompTIA A+ Core 2 (220-1102) ← Must Buy" [level=3] [ref=e50]
      - paragraph [ref=e51]: Covers operating systems, security, software troubleshooting, and operational procedures. Same approach — buy it for the online test bank.
      - paragraph [ref=e52]:
        - link "Mike Meyers CompTIA A+ Core 2 (220-1102) ↗" [ref=e53] [cursor=pointer]:
          - /url: https://www.amazon.com/s?k=Mike+Meyers+CompTIA+A+Plus+Core+2&tag=clarkemoyer-20
      - heading "Test Strategy" [level=2] [ref=e54]
      - paragraph [ref=e55]: "A+ is two separate exams: Core 1 (220-1101) and Core 2 (220-1102). Each is 90 questions, 90 minutes, with a passing score of 675 and 700 respectively (on a 100–900 scale). Both include performance-based questions — flag them and return at the end."
      - paragraph [ref=e56]: You can take them in any order. Some people knock out Core 1 first since it’s hardware-heavy and tends to feel more concrete. Either way, apply the same practice-test methodology to each exam independently. Don’t blur the two objectives together while studying.
      - paragraph [ref=e57]: A+ satisfies DoD 8570 IAT Level I (along with Network+ and a CE designation). If you’re on a DoD contract that requires it, earn it and move on. Long-term, the CISSP is the credential with the most leverage.
      - paragraph [ref=e58]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e59] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - link "← Back to Certification Guides" [ref=e61] [cursor=pointer]:
        - /url: /certification-guides/
  - alert [ref=e62]
  - region "Cookie consent notice" [ref=e63]:
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "We Value Your Privacy" [level=3] [ref=e67]
        - paragraph [ref=e68]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e69]:
          - link "Privacy Policy" [ref=e70] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e71] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e72]:
        - button "Decline All" [ref=e73]
        - button "Customize" [ref=e74]
        - button "Accept All" [ref=e75]
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
     |                                                  ^ Error: /clarke-moyer-comptia-a-plus-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```