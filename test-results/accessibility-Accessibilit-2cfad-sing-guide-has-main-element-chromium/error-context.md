# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-cissp-certification-passing-guide/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-cissp-certification-passing-guide/ missing <main>

expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
  5  |  * Basic accessibility tests.
  6  |  * No axe dependency required — uses Playwright DOM assertions.
  7  |  */
  8  | 
  9  | // Pages to spot-check for per-page accessibility rules
  10 | const spotCheckPages = [
  11 |   '/walk-and-talk/',
  12 |   '/clarke-moyer-cissp-certification-passing-guide/',
  13 |   '/clarke-moyer-world-famous-apple-crisp-recipe/',
  14 |   '/professional-development/',
  15 | ]
  16 | 
  17 | // Pages known to have breadcrumbs
  18 | const breadcrumbPages = [
  19 |   '/clarke-moyer-cissp-certification-passing-guide/',
  20 |   '/clarke-moyer-world-famous-apple-crisp-recipe/',
  21 |   '/clarke-moyer-mcp-passing-guide/',
  22 |   '/clarke-moyer-microsoft-az-500-passing-guide/',
  23 | ]
  24 | 
  25 | test.describe('Accessibility — every page has <main> and <h1>', () => {
  26 |   for (const path of testConfig.pages) {
  27 |     test(`${path} has <main> element`, async ({ page }) => {
  28 |       await page.goto(path)
  29 |       const main = page.locator('main, [role="main"]')
> 30 |       expect(await main.count(), `${path} missing <main>`).toBeGreaterThan(0)
     |                                                            ^ Error: /clarke-moyer-cissp-certification-passing-guide/ missing <main>
  31 |     })
  32 | 
  33 |     test(`${path} has at least one <h1>`, async ({ page }) => {
  34 |       await page.goto(path)
  35 |       const h1 = page.locator('h1')
  36 |       expect(await h1.count(), `${path} missing <h1>`).toBeGreaterThan(0)
  37 |     })
  38 |   }
  39 | })
  40 | 
  41 | test.describe('Accessibility — breadcrumb aria-label', () => {
  42 |   for (const path of breadcrumbPages) {
  43 |     test(`${path} breadcrumb has aria-label="Breadcrumb"`, async ({ page }) => {
  44 |       await page.goto(path)
  45 |       const breadcrumb = page.locator('[aria-label="Breadcrumb"]')
  46 |       expect(await breadcrumb.count(), `${path} missing aria-label="Breadcrumb"`).toBeGreaterThan(0)
  47 |     })
  48 |   }
  49 | })
  50 | 
  51 | test.describe('Accessibility — images have alt text (spot check)', () => {
  52 |   for (const path of spotCheckPages) {
  53 |     test(`${path} — no images missing alt attribute`, async ({ page }) => {
  54 |       await page.goto(path)
  55 |       const imgsWithoutAlt = page.locator('img:not([alt])')
  56 |       const count = await imgsWithoutAlt.count()
  57 |       expect(count, `${path} has ${count} image(s) missing alt text`).toBe(0)
  58 |     })
  59 |   }
  60 | })
  61 | 
  62 | test.describe('Accessibility — external links on Walk and Talk page', () => {
  63 |   test('all external links have target="_blank" and rel containing "noopener"', async ({ page }) => {
  64 |     await page.goto('/walk-and-talk/')
  65 |     const externalLinks = page.locator('a[href^="http"]')
  66 |     const count = await externalLinks.count()
  67 |     expect(count).toBeGreaterThan(0)
  68 |     for (let i = 0; i < count; i++) {
  69 |       const link = externalLinks.nth(i)
  70 |       const href = await link.getAttribute('href')
  71 |       const rel = await link.getAttribute('rel') ?? ''
  72 |       const target = await link.getAttribute('target') ?? ''
  73 |       expect(
  74 |         target,
  75 |         `External link ${href} missing target="_blank"`
  76 |       ).toBe('_blank')
  77 |       expect(
  78 |         rel,
  79 |         `External link ${href} missing rel="noopener"`
  80 |       ).toContain('noopener')
  81 |     }
  82 |   })
  83 | })
  84 | 
```