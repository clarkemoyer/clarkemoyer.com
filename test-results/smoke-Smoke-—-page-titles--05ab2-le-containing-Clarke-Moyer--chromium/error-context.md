# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-cissp-certification-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-cissp-certification-passing-guide/ title: ""

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
        - text: / CISSP Certification Passing Guide
      - heading "Clarke Moyer CISSP Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 📋 About Clarke’s CISSP
        - paragraph [ref=e14]: Clarke obtained the CISSP in 2018 and has maintained it continuously through CPE (Continuing Professional Education) credits and renewal cycles. An active CISSP in good standing represents not just passing an exam but ongoing commitment to the security profession. Clarke’s credential has been active for 7+ years — LinkedIn shows the original certification date, not the most recent renewal.
      - generic [ref=e15]:
        - 'heading "BLUF: To pass the CISSP, do 4 things" [level=2] [ref=e16]'
        - list [ref=e17]:
          - listitem [ref=e18]: "Create a contest publicly with another person to complete your CISSP before they complete a similar or identical educational objective. (Note: I lost this “race” by one day but both of us still passed — so it’s still a win.)"
          - listitem [ref=e19]: Buy your vouchers and a training plan at the lowest cost possible from a source that will give you a test voucher and a re-take.
          - listitem [ref=e20]: Take a ton of practice tests from as many sources as your access or funding allows (ISC Official Online, Army Skillport).
          - listitem [ref=e21]: Don’t over-study and test as soon as you’re over the 80% pass percentage in the official tests. (This is why you have a re-take — so you don’t over-study.)
      - paragraph [ref=e22]: My approach to passing the CISSP was slow and non-regimented. If you want to reduce your stress I would not follow my methods, but I did pass the first attempt and don’t think that I over-studied.
      - heading "Timeline" [level=2] [ref=e23]
      - paragraph [ref=e24]: "Each year I try and do at least one educational objective for my company performance review. I do this for several reasons:"
      - list [ref=e25]:
        - listitem [ref=e26]: I like to learn new things and believe strongly in lifelong learning for the sake of expanding one’s knowledge.
        - listitem [ref=e27]: I like having something external to my current work to show that I am not stagnating and by extension improving my resume with industry respected factors.
        - listitem [ref=e28]: When I do the performance reviews of others I don’t want it to come off as “do as I say not as I do” when I ask for the educational objectives of others.
      - paragraph [ref=e29]: In most years this educational objective aligns to an industry certification.
      - heading "Books / Materials" [level=2] [ref=e30]
      - heading "Sunflower CISSP Study Guide 2.0 (Free)" [level=3] [ref=e31]
      - paragraph [ref=e32]: Great resource. I read cover to cover and had it laminated. Best part is it is free. I also put the PDF in the Kindle app on my phone but with the other apps I rarely used it this way because it is hard to read in such a small form factor.
      - paragraph [ref=e33]:
        - link "Download PDF" [ref=e34] [cursor=pointer]:
          - /url: https://docs.wixstatic.com/ugd/dc6afa_fc8dba86e57a4f3cb9aaf66aff6f9d22.pdf
      - heading "ISC2 CISSP Official Study Guide, 10th Edition" [level=3] [ref=e35]
      - paragraph [ref=e36]: Fully updated for the 2024 CISSP Body of Knowledge. The definitive study guide direct from ISC2. Use the online tools provided with the book.
      - paragraph [ref=e37]:
        - link "ISC2 CISSP Official Study Guide, 10th Edition ↗" [ref=e38] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1394254695?tag=clarkemoyer-20
      - heading "ISC2 CISSP Official Practice Tests ← Must Buy" [level=3] [ref=e39]
      - paragraph [ref=e40]:
        - text: I spent literally 15 hours of testing in this online portal. Best value overall. The online options for testing are the best of all the test banks I used.
        - strong [ref=e41]: This is a must-buy for success in my mind.
      - paragraph [ref=e42]:
        - link "ISC2 CISSP Official Practice Tests ↗" [ref=e43] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1394255071?tag=clarkemoyer-20
      - generic [ref=e44]:
        - heading "💡 Buy Both Together and Save" [level=4] [ref=e45]
        - paragraph [ref=e46]: If you’re getting both the study guide and practice tests, the bundle is the better value. Only the practice tests are truly required — but the study guide is a strong companion.
        - link "ISC2 CISSP Official Study Guide + Practice Tests Bundle (10th Edition) ↗" [ref=e47] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/1394258410?tag=clarkemoyer-20
      - heading "CISSP All-in-One Exam Guide — Audiobook (9th Edition)" [level=3] [ref=e48]
      - paragraph [ref=e49]: Alternative vendor not direct from ISC2. Great if you learn by listening — commutes, gym, household tasks. Shon Harris is one of the most respected voices in CISSP prep.
      - paragraph [ref=e50]:
        - link "CISSP All-in-One Exam Guide, 9th Edition — Audiobook ↗" [ref=e51] [cursor=pointer]:
          - /url: https://www.amazon.com/dp/B0C5YW939P?tag=clarkemoyer-20
      - heading "Training Programs" [level=2] [ref=e52]
      - heading "CIO/G-6 NETCOM IA – CISSP 2018 (Free with CAC)" [level=3] [ref=e53]
      - paragraph [ref=e54]: "Available via Army Skillport. Note: If you don’t already have an account and are a contractor you must apply through your government IA rep and must be on IAT or IAM orders before they will grant you an account."
      - heading "Simplilearn Online Classroom Flexi-Pass ($2,319)" [level=3] [ref=e55]
      - paragraph [ref=e56]: Decent course but not as good as I wanted it to be. The videos were hard to download for offline use. All in all, I would do this only so that you have a formal course to go back to — the 5 practice tests were good. This package included a voucher and a re-take voucher (worth ~$1,398), so the course and tests effectively cost only $1,000. I would still not recommend this unless you are a very good self-study person. This course alone will not get it done.
      - heading "Test / Quiz Options" [level=2] [ref=e57]
      - heading "(ISC)² CISSP Official Study App ($10)" [level=3] [ref=e58]
      - paragraph [ref=e59]: Great tool for vocabulary and quick mini-tests when you don’t have time for a full 125-question test. I would do these tests anywhere and anytime. Available on iOS and Android.
      - heading "CISSP SkillSet Pro Subscription ($90)" [level=3] [ref=e60]
      - paragraph [ref=e61]:
        - text: Most promising of the vendors I have not personally used.
        - link "skillset.com" [ref=e62] [cursor=pointer]:
          - /url: https://www.skillset.com/
      - heading "CISSP Practice Question Videos (Free)" [level=3] [ref=e63]
      - paragraph [ref=e64]:
        - link "YouTube Channel" [ref=e65] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCwUkAunxT1BNbmKVOSEoqYA
      - paragraph [ref=e66]:
        - text: As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See
        - link "Affiliate Disclosure" [ref=e67] [cursor=pointer]:
          - /url: /affiliate-disclosure
        - text: .
      - generic [ref=e68]:
        - paragraph [ref=e69]:
          - text: "📅 IEEE Zero Trust lecture (2019):"
          - link "Professional Development Events" [ref=e70] [cursor=pointer]:
            - /url: /professional-development/
        - link "← Back to Certification Guides" [ref=e71] [cursor=pointer]:
          - /url: /certification-guides/
  - alert [ref=e72]
  - region "Cookie consent notice" [ref=e73]:
    - generic [ref=e75]:
      - generic [ref=e76]:
        - heading "We Value Your Privacy" [level=3] [ref=e77]
        - paragraph [ref=e78]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e79]:
          - link "Privacy Policy" [ref=e80] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e81] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e82]:
        - button "Decline All" [ref=e83]
        - button "Customize" [ref=e84]
        - button "Accept All" [ref=e85]
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
     |                                                  ^ Error: /clarke-moyer-cissp-certification-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```