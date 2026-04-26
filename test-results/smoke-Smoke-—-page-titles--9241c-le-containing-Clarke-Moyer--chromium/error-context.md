# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-world-famous-apple-crisp-recipe/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-world-famous-apple-crisp-recipe/ title: ""

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
     |                                                  ^ Error: /clarke-moyer-world-famous-apple-crisp-recipe/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```