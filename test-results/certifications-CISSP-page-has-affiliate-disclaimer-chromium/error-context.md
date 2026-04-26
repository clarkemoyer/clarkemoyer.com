# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: certifications.spec.ts >> CISSP page >> has affiliate disclaimer
- Location: tests/certifications.spec.ts:37:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "affiliate"
Received string:    "Skip to main contentHome / Certification Guides / CISSP Certification Passing GuideClarke Moyer CISSP Certification Passing Guide📋 About Clarke’s CISSPClarke obtained the CISSP in 2018 and has maintained it continuously through CPE (Continuing Professional Education) credits and renewal cycles. An active CISSP in good standing represents not just passing an exam but ongoing commitment to the security profession. Clarke’s credential has been active for 7+ years — LinkedIn shows the original certification date, not the most recent renewal.BLUF: To pass the CISSP, do 4 thingsCreate a contest publicly with another person to complete your CISSP before they complete a similar or identical educational objective. (Note: I lost this “race” by one day but both of us still passed — so it’s still a win.)Buy your vouchers and a training plan at the lowest cost possible from a source that will give you a test voucher and a re-take.Take a ton of practice tests from as many sources as your access or funding allows (ISC Official Online, Army Skillport).Don’t over-study and test as soon as you’re over the 80% pass percentage in the official tests. (This is why you have a re-take — so you don’t over-study.)My approach to passing the CISSP was slow and non-regimented. If you want to reduce your stress I would not follow my methods, but I did pass the first attempt and don’t think that I over-studied.TimelineEach year I try and do at least one educational objective for my company performance review. I do this for several reasons:I like to learn new things and believe strongly in lifelong learning for the sake of expanding one’s knowledge.I like having something external to my current work to show that I am not stagnating and by extension improving my resume with industry respected factors.When I do the performance reviews of others I don’t want it to come off as “do as I say not as I do” when I ask for the educational objectives of others.In most years this educational objective aligns to an industry certification.Books / MaterialsSunflower CISSP Study Guide 2.0 (Free)Great resource. I read cover to cover and had it laminated. Best part is it is free. I also put the PDF in the Kindle app on my phone but with the other apps I rarely used it this way because it is hard to read in such a small form factor.Download PDFISC2 CISSP Official Study Guide, 10th EditionFully updated for the 2024 CISSP Body of Knowledge. The definitive study guide direct from ISC2. Use the online tools provided with the book.ISC2 CISSP Official Study Guide, 10th Edition ↗ISC2 CISSP Official Practice Tests ← Must BuyI spent literally 15 hours of testing in this online portal. Best value overall. The online options for testing are the best of all the test banks I used. This is a must-buy for success in my mind.ISC2 CISSP Official Practice Tests ↗💡 Buy Both Together and SaveIf you’re getting both the study guide and practice tests, the bundle is the better value. Only the practice tests are truly required — but the study guide is a strong companion.ISC2 CISSP Official Study Guide + Practice Tests Bundle (10th Edition) ↗CISSP All-in-One Exam Guide — Audiobook (9th Edition)Alternative vendor not direct from ISC2. Great if you learn by listening — commutes, gym, household tasks. Shon Harris is one of the most respected voices in CISSP prep.CISSP All-in-One Exam Guide, 9th Edition — Audiobook ↗Training ProgramsCIO/G-6 NETCOM IA – CISSP 2018 (Free with CAC)Available via Army Skillport. Note: If you don’t already have an account and are a contractor you must apply through your government IA rep and must be on IAT or IAM orders before they will grant you an account.Simplilearn Online Classroom Flexi-Pass ($2,319)Decent course but not as good as I wanted it to be. The videos were hard to download for offline use. All in all, I would do this only so that you have a formal course to go back to — the 5 practice tests were good. This package included a voucher and a re-take voucher (worth ~$1,398), so the course and tests effectively cost only $1,000. I would still not recommend this unless you are a very good self-study person. This course alone will not get it done.Test / Quiz Options(ISC)² CISSP Official Study App ($10)Great tool for vocabulary and quick mini-tests when you don’t have time for a full 125-question test. I would do these tests anywhere and anytime. Available on iOS and Android.CISSP SkillSet Pro Subscription ($90)Most promising of the vendors I have not personally used. skillset.comCISSP Practice Question Videos (Free)YouTube ChannelAs an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See Affiliate Disclosure.📅 IEEE Zero Trust lecture (2019): Professional Development Events← Back to Certification GuidesWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    9 × locator resolved to <body class="font-sans">…</body>
      - unexpected value "Skip to main contentHome / Certification Guides / CISSP Certification Passing GuideClarke Moyer CISSP Certification Passing Guide📋 About Clarke’s CISSPClarke obtained the CISSP in 2018 and has maintained it continuously through CPE (Continuing Professional Education) credits and renewal cycles. An active CISSP in good standing represents not just passing an exam but ongoing commitment to the security profession. Clarke’s credential has been active for 7+ years — LinkedIn shows the original certification date, not the most recent renewal.BLUF: To pass the CISSP, do 4 thingsCreate a contest publicly with another person to complete your CISSP before they complete a similar or identical educational objective. (Note: I lost this “race” by one day but both of us still passed — so it’s still a win.)Buy your vouchers and a training plan at the lowest cost possible from a source that will give you a test voucher and a re-take.Take a ton of practice tests from as many sources as your access or funding allows (ISC Official Online, Army Skillport).Don’t over-study and test as soon as you’re over the 80% pass percentage in the official tests. (This is why you have a re-take — so you don’t over-study.)My approach to passing the CISSP was slow and non-regimented. If you want to reduce your stress I would not follow my methods, but I did pass the first attempt and don’t think that I over-studied.TimelineEach year I try and do at least one educational objective for my company performance review. I do this for several reasons:I like to learn new things and believe strongly in lifelong learning for the sake of expanding one’s knowledge.I like having something external to my current work to show that I am not stagnating and by extension improving my resume with industry respected factors.When I do the performance reviews of others I don’t want it to come off as “do as I say not as I do” when I ask for the educational objectives of others.In most years this educational objective aligns to an industry certification.Books / MaterialsSunflower CISSP Study Guide 2.0 (Free)Great resource. I read cover to cover and had it laminated. Best part is it is free. I also put the PDF in the Kindle app on my phone but with the other apps I rarely used it this way because it is hard to read in such a small form factor.Download PDFISC2 CISSP Official Study Guide, 10th EditionFully updated for the 2024 CISSP Body of Knowledge. The definitive study guide direct from ISC2. Use the online tools provided with the book.ISC2 CISSP Official Study Guide, 10th Edition ↗ISC2 CISSP Official Practice Tests ← Must BuyI spent literally 15 hours of testing in this online portal. Best value overall. The online options for testing are the best of all the test banks I used. This is a must-buy for success in my mind.ISC2 CISSP Official Practice Tests ↗💡 Buy Both Together and SaveIf you’re getting both the study guide and practice tests, the bundle is the better value. Only the practice tests are truly required — but the study guide is a strong companion.ISC2 CISSP Official Study Guide + Practice Tests Bundle (10th Edition) ↗CISSP All-in-One Exam Guide — Audiobook (9th Edition)Alternative vendor not direct from ISC2. Great if you learn by listening — commutes, gym, household tasks. Shon Harris is one of the most respected voices in CISSP prep.CISSP All-in-One Exam Guide, 9th Edition — Audiobook ↗Training ProgramsCIO/G-6 NETCOM IA – CISSP 2018 (Free with CAC)Available via Army Skillport. Note: If you don’t already have an account and are a contractor you must apply through your government IA rep and must be on IAT or IAM orders before they will grant you an account.Simplilearn Online Classroom Flexi-Pass ($2,319)Decent course but not as good as I wanted it to be. The videos were hard to download for offline use. All in all, I would do this only so that you have a formal course to go back to — the 5 practice tests were good. This package included a voucher and a re-take voucher (worth ~$1,398), so the course and tests effectively cost only $1,000. I would still not recommend this unless you are a very good self-study person. This course alone will not get it done.Test / Quiz Options(ISC)² CISSP Official Study App ($10)Great tool for vocabulary and quick mini-tests when you don’t have time for a full 125-question test. I would do these tests anywhere and anytime. Available on iOS and Android.CISSP SkillSet Pro Subscription ($90)Most promising of the vendors I have not personally used. skillset.comCISSP Practice Question Videos (Free)YouTube ChannelAs an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See Affiliate Disclosure.📅 IEEE Zero Trust lecture (2019): Professional Development Events← Back to Certification GuidesWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"

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
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | /**
  4   |  * Certification page tests.
  5   |  * Validates hub page content and individual cert page content, breadcrumbs,
  6   |  * and unique copy (terminal card, era context, etc.).
  7   |  */
  8   | 
  9   | test.describe('Certification hub (/certification-guides/)', () => {
  10  |   test.beforeEach(async ({ page }) => {
  11  |     await page.goto('/certification-guides/')
  12  |   })
  13  | 
  14  |   test('has "CISSP" in content', async ({ page }) => {
  15  |     await expect(page.locator('body')).toContainText('CISSP')
  16  |   })
  17  | 
  18  |   test('has "VMware" in content', async ({ page }) => {
  19  |     await expect(page.locator('body')).toContainText('VMware')
  20  |   })
  21  | })
  22  | 
  23  | test.describe('CISSP page', () => {
  24  |   test.beforeEach(async ({ page }) => {
  25  |     await page.goto('/clarke-moyer-cissp-certification-passing-guide/')
  26  |   })
  27  | 
  28  |   test('has "CISSP" in h1', async ({ page }) => {
  29  |     await expect(page.locator('h1').first()).toContainText('CISSP')
  30  |   })
  31  | 
  32  |   test('has breadcrumb link to "Certification Guides"', async ({ page }) => {
  33  |     const link = page.getByRole('link', { name: /Certification Guides/i }).first()
  34  |     await expect(link).toBeVisible()
  35  |   })
  36  | 
  37  |   test('has affiliate disclaimer', async ({ page }) => {
> 38  |     await expect(page.locator('body')).toContainText('affiliate')
      |                                        ^ Error: expect(locator).toContainText(expected) failed
  39  |   })
  40  | 
  41  |   test('has "← Back to Certification Guides" link', async ({ page }) => {
  42  |     const backLink = page.getByRole('link', { name: /Back to Certification Guides/i }).first()
  43  |     await expect(backLink).toBeVisible()
  44  |   })
  45  | })
  46  | 
  47  | test.describe('MCP page', () => {
  48  |   test.beforeEach(async ({ page }) => {
  49  |     await page.goto('/clarke-moyer-mcp-passing-guide/')
  50  |   })
  51  | 
  52  |   test('has "Windows XP" in content', async ({ page }) => {
  53  |     await expect(page.locator('body')).toContainText('Windows XP')
  54  |   })
  55  | 
  56  |   test('has "SAIC" in content', async ({ page }) => {
  57  |     await expect(page.locator('body')).toContainText('SAIC')
  58  |   })
  59  | 
  60  |   test('has green terminal card (C:\\CERTIFICATIONS)', async ({ page }) => {
  61  |     await expect(page.locator('body')).toContainText('CERTIFICATIONS')
  62  |   })
  63  | })
  64  | 
  65  | test.describe('AZ-500 page', () => {
  66  |   test.beforeEach(async ({ page }) => {
  67  |     await page.goto('/clarke-moyer-microsoft-az-500-passing-guide/')
  68  |   })
  69  | 
  70  |   test('has "AZ-500" in h1', async ({ page }) => {
  71  |     await expect(page.locator('h1').first()).toContainText('AZ-500')
  72  |   })
  73  | 
  74  |   test('has "Azure Security" in content', async ({ page }) => {
  75  |     await expect(page.locator('body')).toContainText('Azure Security')
  76  |   })
  77  | })
  78  | 
  79  | test.describe('VCP6-CMA page', () => {
  80  |   test.beforeEach(async ({ page }) => {
  81  |     await page.goto('/clarke-moyer-vcp6-cma-passing-guide/')
  82  |   })
  83  | 
  84  |   test('has "DCGS" in content', async ({ page }) => {
  85  |     await expect(page.locator('body')).toContainText('DCGS')
  86  |   })
  87  | 
  88  |   test('has "KubeCon" or "CNCF" in content', async ({ page }) => {
  89  |     const body = page.locator('body')
  90  |     const hasKubeCon = (await body.getByText(/KubeCon/i).count()) > 0
  91  |     const hasCNCF = (await body.getByText(/CNCF/i).count()) > 0
  92  |     expect(hasKubeCon || hasCNCF).toBe(true)
  93  |   })
  94  | })
  95  | 
  96  | test.describe('CompTIA Security+ page', () => {
  97  |   test.beforeEach(async ({ page }) => {
  98  |     await page.goto('/clarke-moyer-comptia-security-plus-passing-guide/')
  99  |   })
  100 | 
  101 |   test('has CE renewal content', async ({ page }) => {
  102 |     // The CE renewal callout card is present
  103 |     await expect(page.locator('body')).toContainText('CE')
  104 |   })
  105 | 
  106 |   test('has "WGU" in content', async ({ page }) => {
  107 |     await expect(page.locator('body')).toContainText('WGU')
  108 |   })
  109 | })
  110 | 
```