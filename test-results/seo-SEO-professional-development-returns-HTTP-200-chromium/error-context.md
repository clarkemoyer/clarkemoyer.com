# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo.spec.ts >> SEO >> /professional-development/ returns HTTP 200
- Location: tests/seo.spec.ts:15:5

# Error details

```
Error: /professional-development/ should return 200

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e5]:
    - heading "404" [level=1] [ref=e6]
    - heading "This page could not be found." [level=2] [ref=e8]
  - alert [ref=e9]
  - region "Cookie consent notice" [ref=e10]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "We Value Your Privacy" [level=3] [ref=e14]
        - paragraph [ref=e15]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e16]:
          - link "Privacy Policy" [ref=e17] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e18] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e19]:
        - button "Decline All" [ref=e20]
        - button "Customize" [ref=e21]
        - button "Accept All" [ref=e22]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { testConfig } from './test.config'
  3  | 
  4  | /**
  5  |  * SEO E2E Tests
  6  |  *
  7  |  * These tests verify runtime page availability (HTTP 200) for all routes.
  8  |  * Page titles and meta descriptions are verified statically in the CI build
  9  |  * step against the generated HTML for the configured page list.
  10 |  * Metadata TypeScript exports are verified by __tests__/pages/metadata.test.tsx.
  11 |  */
  12 | 
  13 | test.describe('SEO', () => {
  14 |   for (const path of testConfig.pages) {
  15 |     test(`${path} returns HTTP 200`, async ({ page }) => {
  16 |       const response = await page.goto(path)
  17 |       expect(response, `${path} response should not be null`).not.toBeNull()
> 18 |       expect(response!.status(), `${path} should return 200`).toBe(200)
     |                                                               ^ Error: /professional-development/ should return 200
  19 |     })
  20 |   }
  21 | 
  22 |   test('sitemap.xml is accessible', async ({ page }) => {
  23 |     const response = await page.goto('/sitemap.xml')
  24 |     expect(response?.status()).toBe(200)
  25 |   })
  26 | 
  27 |   test('robots.txt is accessible', async ({ page }) => {
  28 |     const response = await page.goto('/robots.txt')
  29 |     expect(response?.status()).toBe(200)
  30 |   })
  31 | })
  32 | 
```