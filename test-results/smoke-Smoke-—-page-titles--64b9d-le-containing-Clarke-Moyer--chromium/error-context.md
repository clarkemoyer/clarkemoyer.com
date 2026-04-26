# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /western-governors-university-bs-it/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /western-governors-university-bs-it/ title: ""

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
      - heading "Education" [level=1] [ref=e7]
      - generic [ref=e8]:
        - paragraph [ref=e9]: I started late into education. When getting out of the Army I did not think that I 'needed' a college education. Times have changed for me. I have now invested in myself through both technical certifications and formal education.
        - paragraph [ref=e10]: For formal education, I hold a BS-IT and an MBA-ITM from WGU as well as a graduate certificate of project management from UMUC. I am pursuing the PSU Smeal eDBA Program.
        - heading "Western Governors University (WGU) Educational Journey" [level=2] [ref=e11]
        - paragraph [ref=e12]: For years now since I started and subsequently graduated from Western Governors University I've been referring my friends family and colleagues to enroll in the university with the WGU referral program. I have done this due to how much I enjoyed my experience as well as how much I feel that I have actually gained from the completion of my degrees. While I have attended two ground-based colleges and three different online colleges, both before and after my degrees with Western Governors University; Western Governors University is the only one who really rises to the top and deserves my undivided recommendation.
        - heading "How I Found out about Western Governors University" [level=3] [ref=e13]
        - paragraph [ref=e14]: My experiences with Western Governors University were for the most part very positive. I was first referred to the University by an Air Force sergeant who I worked with in the 607th ACOMS at Osan airbase South Korea. By this time I had already had a large number of credits from my prior college experience before the Army and the online education that I had done since I had gotten out. What I did not have was a degree. After getting out of the Army I have decided to focus primarily on certifications in the information technology sector. When I started taking a number of CompTIA certifications to meet DOD 8570 requirements my colleague stated that with her University she was able to get college credits in conjunction with many of the CompTIA exams. She also told me that Western Governors University's bachelors of science in information technology program (BS-IT) was a direct partner with all of the certification agencies including Microsoft and CompTIA certification vendors I was already pursuing. This was the biggest selling point for me that got me to apply.
        - heading "Why WGU Worked for Me" [level=3] [ref=e15]
        - paragraph [ref=e16]: For those that know me I tend to work in large bursts. When I was focused on education I would do a lot of education. When I was focused on certifications I did certification training nonstop. One of the largest problems that I have had with University study is I would get into a groove writing a project or studying one of my course materials and books and I would have to stop immediately because our class was not yet on that chapter or that assignment.
        - heading "Competency Based Learning through Asynchronous Education" [level=3] [ref=e17]
        - paragraph [ref=e18]: With WGU the syllabuses are designed on a 12 week cycle just like a traditional University however if you can complete the objectives to the standard faster than 12 weeks then you have met the standard. WGU is not a time-based educational experience it is a competency-based educational experience. In a single weekend I was able to get several weeks of college done.
        - heading "Linear Course Progress (One Course at a Time)" [level=3] [ref=e19]
        - paragraph [ref=e20]: WGU does not have any implicit due dates for course assignments just that you complete a minimum amount of whole courses per semester to meet full-time or part-time enrollment. I chose to do intense focus on one class, one subject, one instructor, until complete and then moved on to the next class. The power of working on just one topic at a time is often lost in our world of "multitasking".
        - paragraph [ref=e21]: Given the immense efficiency of integrating prior experiences and personal motivation I was able to complete my bachelor's degree in just two terms of six months.
      - generic [ref=e22]:
        - heading "Connect with me" [level=3] [ref=e23]
        - generic [ref=e24]:
          - link "Connect on LinkedIn" [ref=e25] [cursor=pointer]:
            - /url: https://linkedin.com/in/clarkemoyer
          - link "Apply for Jobs at ARL" [ref=e26] [cursor=pointer]:
            - /url: https://www.arl.army.mil/careers/
  - alert [ref=e27]
  - region "Cookie consent notice" [ref=e28]:
    - generic [ref=e30]:
      - generic [ref=e31]:
        - heading "We Value Your Privacy" [level=3] [ref=e32]
        - paragraph [ref=e33]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e34]:
          - link "Privacy Policy" [ref=e35] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e36] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e37]:
        - button "Decline All" [ref=e38]
        - button "Customize" [ref=e39]
        - button "Accept All" [ref=e40]
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
     |                                                  ^ Error: /western-governors-university-bs-it/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```