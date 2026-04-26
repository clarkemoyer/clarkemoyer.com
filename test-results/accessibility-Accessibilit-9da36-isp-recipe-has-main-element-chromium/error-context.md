# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility — every page has <main> and <h1> >> /clarke-moyer-world-famous-apple-crisp-recipe/ has <main> element
- Location: tests/accessibility.spec.ts:27:5

# Error details

```
Error: /clarke-moyer-world-famous-apple-crisp-recipe/ missing <main>

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
        - link "Fun" [ref=e8] [cursor=pointer]:
          - /url: /fun/
        - text: / Apple Crisp Recipe
      - heading "Clarke Moyer’s World Famous Apple Crisp Recipe" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - heading "Tools" [level=2] [ref=e13]
        - list [ref=e14]:
          - listitem [ref=e15]: Apple Peeler, Cutter, & Corer
          - listitem [ref=e16]: 8×8 inch wide 2.75 inch deep Pyrex baking pan
          - listitem [ref=e17]: 4 Quart Pyrex Mixing Bowl
          - listitem [ref=e18]: "Measuring Spoons: 1/8th TSP, 1 TSP, 1 TBSP"
          - listitem [ref=e19]: "Measuring Cups: ½ Cup and 1/3rd Cup"
          - listitem [ref=e20]: 6 Inch Chef’s Knife
      - generic [ref=e21]:
        - heading "Ingredients" [level=2] [ref=e22]
        - generic [ref=e23]:
          - generic [ref=e24]:
            - heading "Filling" [level=3] [ref=e25]
            - list [ref=e26]:
              - listitem [ref=e27]: 3 Granny Smith Apples
              - listitem [ref=e28]: 3 Golden Delicious Apples
              - listitem [ref=e29]: 3 TBSP Granulated Sugar
              - listitem [ref=e30]: 1 TSP Ground Cinnamon
              - listitem [ref=e31]: 1/8th TSP Fine Salt
          - generic [ref=e32]:
            - heading "Crumble" [level=3] [ref=e33]
            - list [ref=e34]:
              - listitem [ref=e35]: 1 Cup Quaker Old Fashioned Oats
              - listitem [ref=e36]: 1 Cup Compacted Light Brown Sugar
              - listitem [ref=e37]: 2/3rd Cup All-purpose Flour
              - listitem [ref=e38]: 1 Stick Unsalted Butter
              - listitem [ref=e39]: 1/4th TSP Fine Salt
      - generic [ref=e40]:
        - heading "Directions" [level=2] [ref=e41]
        - list [ref=e42]:
          - listitem [ref=e43]: Pre-Heat the oven to 350°F and arrange a rack in the middle.
          - listitem [ref=e44]: Peel, Core and Cut Apples. Combine the apples, 3 TBSP granulated sugar, 1 TSP ground cinnamon, and 1/8 TSP salt in 4 quart Pyrex mixing bowl and toss to coat.
          - listitem [ref=e45]: Lightly coat 8-by-8-inch Pyrex baking dish with butter. Place the apple mixture in the baking dish and set aside.
          - listitem [ref=e46]: Using the same mixing bowl, mix together 1 Cup brown sugar, 1 Cup old fashioned oats, 2/3rd Cup all-purpose flour, and 1/4th TSP salt until evenly combined.
          - listitem [ref=e47]: Cut stick of cold butter into small cubes. With your hands, blend in the butter pieces into the crumble mix until small clumps form and the butter is well incorporated, about 2 minutes.
          - listitem [ref=e48]: Sprinkle the topping evenly over the apples and bake until the streusel is crispy and the apples are tender, about 50 to 60 minutes. Let cool on a rack at least 20 minutes before serving.
          - listitem [ref=e49]:
            - strong [ref=e50]: Serve with ice cream in a bowl while still hot.
            - text: 🍦
      - link "← Back to Fun" [ref=e52] [cursor=pointer]:
        - /url: /fun/
  - alert [ref=e53]
  - region "Cookie consent notice" [ref=e54]:
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "We Value Your Privacy" [level=3] [ref=e58]
        - paragraph [ref=e59]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e60]:
          - link "Privacy Policy" [ref=e61] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e62] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e63]:
        - button "Decline All" [ref=e64]
        - button "Customize" [ref=e65]
        - button "Accept All" [ref=e66]
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
     |                                                            ^ Error: /clarke-moyer-world-famous-apple-crisp-recipe/ missing <main>
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