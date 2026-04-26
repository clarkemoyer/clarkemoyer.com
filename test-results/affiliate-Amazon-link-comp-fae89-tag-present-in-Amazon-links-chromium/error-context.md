# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: affiliate.spec.ts >> Amazon link compliance — Apple Crisp >> "clarkemoyer-20" tag present in Amazon links
- Location: tests/affiliate.spec.ts:44:3

# Error details

```
Error: Expected at least one affiliate-tagged Amazon link

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
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | /**
  4   |  * Affiliate compliance tests.
  5   |  * Validates FTC disclosure page, rel="sponsored" on Amazon links,
  6   |  * and presence of the clarkemoyer-20 affiliate tag.
  7   |  */
  8   | 
  9   | test.describe('Affiliate disclosure page', () => {
  10  |   test('exists and has "Amazon" in content', async ({ page }) => {
  11  |     await page.goto('/affiliate-disclosure/')
  12  |     await expect(page.locator('body')).toContainText('Amazon')
  13  |   })
  14  | 
  15  |   test('has "FTC" or "Federal Trade Commission" in content', async ({ page }) => {
  16  |     await page.goto('/affiliate-disclosure/')
  17  |     const body = page.locator('body')
  18  |     const hasFTC = (await body.getByText(/FTC/i).count()) > 0
  19  |     const hasFull = (await body.getByText(/Federal Trade Commission/i).count()) > 0
  20  |     expect(hasFTC || hasFull).toBe(true)
  21  |   })
  22  | 
  23  |   test('mentions "clarkemoyer-20" affiliate tag', async ({ page }) => {
  24  |     await page.goto('/affiliate-disclosure/')
  25  |     await expect(page.locator('body')).toContainText('clarkemoyer-20')
  26  |   })
  27  | })
  28  | 
  29  | test.describe('Amazon link compliance — Apple Crisp', () => {
  30  |   test.beforeEach(async ({ page }) => {
  31  |     await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  32  |   })
  33  | 
  34  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  35  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  36  |     const count = await amazonLinks.count()
  37  |     if (count === 0) return // no amazon links — skip
  38  |     for (let i = 0; i < count; i++) {
  39  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  40  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  41  |     }
  42  |   })
  43  | 
  44  |   test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
  45  |     const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
  46  |     const count = await amazonLinks.count()
> 47  |     expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
      |                                                                         ^ Error: Expected at least one affiliate-tagged Amazon link
  48  |   })
  49  | 
  50  |   test('page has affiliate disclosure text', async ({ page }) => {
  51  |     await expect(page.locator('body')).toContainText('affiliate')
  52  |   })
  53  | })
  54  | 
  55  | test.describe('Amazon link compliance — Sweet Tea', () => {
  56  |   test.beforeEach(async ({ page }) => {
  57  |     await page.goto('/clarke-moyer-sweet-tea-recipe/')
  58  |   })
  59  | 
  60  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  61  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  62  |     const count = await amazonLinks.count()
  63  |     if (count === 0) return
  64  |     for (let i = 0; i < count; i++) {
  65  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  66  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  67  |     }
  68  |   })
  69  | 
  70  |   test('"clarkemoyer-20" tag present in Amazon links', async ({ page }) => {
  71  |     const amazonLinks = page.locator('a[href*="clarkemoyer-20"]')
  72  |     const count = await amazonLinks.count()
  73  |     expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
  74  |   })
  75  | 
  76  |   test('page has affiliate disclosure text', async ({ page }) => {
  77  |     await expect(page.locator('body')).toContainText('affiliate')
  78  |   })
  79  | })
  80  | 
  81  | test.describe('Amazon link compliance — Philly Cheesesteak', () => {
  82  |   test.beforeEach(async ({ page }) => {
  83  |     await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  84  |   })
  85  | 
  86  |   test('all Amazon links have rel containing "sponsored"', async ({ page }) => {
  87  |     const amazonLinks = page.locator('a[href*="amazon.com"]')
  88  |     const count = await amazonLinks.count()
  89  |     if (count === 0) return
  90  |     for (let i = 0; i < count; i++) {
  91  |       const rel = await amazonLinks.nth(i).getAttribute('rel')
  92  |       expect(rel, `Amazon link ${i} missing rel="sponsored"`).toContain('sponsored')
  93  |     }
  94  |   })
  95  | 
  96  |   test('page has affiliate disclosure text', async ({ page }) => {
  97  |     await expect(page.locator('body')).toContainText('affiliate')
  98  |   })
  99  | })
  100 | 
```