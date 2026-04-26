# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation >> CONSULTING dropdown contains expected links
- Location: tests/navigation.spec.ts:48:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav').getByText('CONSULTING', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('nav').getByText('CONSULTING', { exact: true })

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
  1   | import { test, expect } from '@playwright/test'
  2   | import { testConfig } from './test.config'
  3   | 
  4   | test.describe('Navigation', () => {
  5   |   test('home page loads with 200', async ({ page }) => {
  6   |     const response = await page.goto('/')
  7   |     expect(response?.status()).toBe(200)
  8   |   })
  9   | 
  10  |   test('all site pages return 200', async ({ page }) => {
  11  |     for (const path of testConfig.pages) {
  12  |       const response = await page.goto(path)
  13  |       expect(response?.status(), `${path} should return 200`).toBe(200)
  14  |     }
  15  |   })
  16  | 
  17  |   test('navigation renders on homepage', async ({ page }) => {
  18  |     await page.goto('/')
  19  |     await expect(page.locator('header, nav, [role="navigation"]').first()).toBeVisible()
  20  |   })
  21  | 
  22  |   test('shared Navigation component renders with search link', async ({ page }) => {
  23  |     const response = await page.goto('/cookie-policy/')
  24  |     expect(response?.status()).toBe(200)
  25  |     await expect(page.locator('nav')).toBeVisible()
  26  |     const searchEl = page.locator(`[aria-label="${testConfig.navigation.searchLabel}"]`)
  27  |     await expect(searchEl).toBeVisible({ timeout: 15000 })
  28  |     await expect(searchEl).toHaveAttribute('href', /duckduckgo\.com/)
  29  |   })
  30  | 
  31  |   test('old WordPress slug redirects work', async ({ page }) => {
  32  |     const redirects: [string, string][] = [
  33  |       ['/certification/', '/certification-guides/'],
  34  |       ['/charity/', '/free-for-charity/'],
  35  |       ['/resume/', '/it-project-management-resume-of-clarke-moyer/'],
  36  |       ['/wgu-referral/', '/wgu-referral-program/'],
  37  |       ['/psu-arl-referral/', '/psu-arl-referral-program/'],
  38  |     ]
  39  |     for (const [from, to] of redirects) {
  40  |       await page.goto(from)
  41  |       await page.waitForURL(`**${to}`, { timeout: 5000 })
  42  |       expect(page.url()).toContain(to)
  43  |     }
  44  |   })
  45  | 
  46  |   // ── Dropdown structure ──────────────────────────────────────────────────────
  47  | 
  48  |   test('CONSULTING dropdown contains expected links', async ({ page }) => {
  49  |     await page.goto('/cookie-policy/')
  50  |     // On desktop viewport the nav links are visible; find the CONSULTING trigger
  51  |     const consulting = page.locator('nav').getByText('CONSULTING', { exact: true })
> 52  |     await expect(consulting).toBeVisible()
      |                              ^ Error: expect(locator).toBeVisible() failed
  53  |     // Hover/click to open dropdown
  54  |     await consulting.hover()
  55  |     await expect(page.getByRole('link', { name: /Walk and Talk/i }).first()).toBeVisible({ timeout: 5000 })
  56  |     await expect(page.getByRole('link', { name: /Certification Guides/i }).first()).toBeVisible()
  57  |     await expect(page.getByRole('link', { name: /Professional Development/i }).first()).toBeVisible()
  58  |     await expect(page.getByRole('link', { name: /Industry Conferences/i }).first()).toBeVisible()
  59  |   })
  60  | 
  61  |   test('FUN dropdown contains Cooking and Quotes', async ({ page }) => {
  62  |     await page.goto('/cookie-policy/')
  63  |     const fun = page.locator('nav').getByText('FUN', { exact: true })
  64  |     await expect(fun).toBeVisible()
  65  |     await fun.hover()
  66  |     await expect(page.getByRole('link', { name: /Cooking/i }).first()).toBeVisible({ timeout: 5000 })
  67  |     await expect(page.getByRole('link', { name: /Quotes/i }).first()).toBeVisible()
  68  |   })
  69  | 
  70  |   test('ABOUT dropdown contains Who I Am, Resume, Personal Project Manager', async ({ page }) => {
  71  |     await page.goto('/cookie-policy/')
  72  |     const about = page.locator('nav').getByText('ABOUT', { exact: true })
  73  |     await expect(about).toBeVisible()
  74  |     await about.hover()
  75  |     await expect(page.getByRole('link', { name: /Who I Am/i }).first()).toBeVisible({ timeout: 5000 })
  76  |     await expect(page.getByRole('link', { name: /Resume/i }).first()).toBeVisible()
  77  |     await expect(page.getByRole('link', { name: /Personal Project Manager/i }).first()).toBeVisible()
  78  |   })
  79  | 
  80  |   // ── Mobile menu ─────────────────────────────────────────────────────────────
  81  | 
  82  |   test('mobile hamburger opens and closes menu', async ({ page }) => {
  83  |     await page.setViewportSize({ width: 375, height: 812 })
  84  |     await page.goto('/cookie-policy/')
  85  |     // Hamburger button should be visible on mobile
  86  |     const hamburger = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], button[aria-expanded]').first()
  87  |     await expect(hamburger).toBeVisible({ timeout: 10000 })
  88  |     // Open
  89  |     await hamburger.click()
  90  |     // Some nav item should now be visible
  91  |     await expect(page.getByRole('link', { name: /HOME/i }).first()).toBeVisible({ timeout: 5000 })
  92  |     // Close — click the button again
  93  |     await hamburger.click()
  94  |   })
  95  | 
  96  |   // ── Spot-check navigation links ─────────────────────────────────────────────
  97  | 
  98  |   test('HOME link navigates to /', async ({ page }) => {
  99  |     await page.goto('/cookie-policy/')
  100 |     await page.getByRole('link', { name: /^HOME$/i }).first().click()
  101 |     await expect(page).toHaveURL('/')
  102 |   })
  103 | 
  104 |   test('logo/brand link navigates to /', async ({ page }) => {
  105 |     await page.goto('/cookie-policy/')
  106 |     // The brand link contains "CLARKE MOYER" text
  107 |     await page.getByRole('link', { name: /Clarke Moyer/i }).first().click()
  108 |     await expect(page).toHaveURL('/')
  109 |   })
  110 | 
  111 |   test('CONSULTING > Walk and Talk nav link navigates correctly', async ({ page }) => {
  112 |     await page.goto('/cookie-policy/')
  113 |     const consulting = page.locator('nav').getByText('CONSULTING', { exact: true })
  114 |     await consulting.hover()
  115 |     await page.getByRole('link', { name: /Walk and Talk/i }).first().click()
  116 |     await page.waitForURL('**/walk-and-talk**', { timeout: 8000 })
  117 |     expect(page.url()).toContain('/walk-and-talk')
  118 |   })
  119 | 
  120 |   test('ABOUT > Who I Am nav link navigates correctly', async ({ page }) => {
  121 |     await page.goto('/cookie-policy/')
  122 |     const about = page.locator('nav').getByText('ABOUT', { exact: true })
  123 |     await about.hover()
  124 |     await page.getByRole('link', { name: /Who I Am/i }).first().click()
  125 |     await page.waitForURL('**/who-i-am**', { timeout: 8000 })
  126 |     expect(page.url()).toContain('/who-i-am')
  127 |   })
  128 | 
  129 |   test('FUN > Cooking nav link navigates correctly', async ({ page }) => {
  130 |     await page.goto('/cookie-policy/')
  131 |     const fun = page.locator('nav').getByText('FUN', { exact: true })
  132 |     await fun.hover()
  133 |     await page.getByRole('link', { name: /^COOKING$/i }).first().click()
  134 |     await page.waitForURL('**/cooking**', { timeout: 8000 })
  135 |     expect(page.url()).toContain('/cooking')
  136 |   })
  137 | })
  138 | 
```