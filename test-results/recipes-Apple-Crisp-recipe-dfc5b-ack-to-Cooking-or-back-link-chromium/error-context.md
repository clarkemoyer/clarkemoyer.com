# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recipes.spec.ts >> Apple Crisp recipe >> has a "Back to Cooking" or back link
- Location: tests/recipes.spec.ts:43:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
  4   |  * Recipe page content tests.
  5   |  * Validates real user-facing content: ingredients, phases, affiliate links,
  6   |  * disclosure footers, and back-navigation links.
  7   |  */
  8   | 
  9   | test.describe('Apple Crisp recipe', () => {
  10  |   test.beforeEach(async ({ page }) => {
  11  |     await page.goto('/clarke-moyer-world-famous-apple-crisp-recipe/')
  12  |   })
  13  | 
  14  |   test('has "Granny Smith" in content', async ({ page }) => {
  15  |     await expect(page.locator('body')).toContainText('Granny Smith')
  16  |   })
  17  | 
  18  |   test('has "crumble" in content', async ({ page }) => {
  19  |     await expect(page.locator('body')).toContainText('crumble')
  20  |   })
  21  | 
  22  |   test('has metadata strip with "Serves"', async ({ page }) => {
  23  |     await expect(page.locator('body')).toContainText('Serves')
  24  |   })
  25  | 
  26  |   test('has affiliate disclosure footer', async ({ page }) => {
  27  |     await expect(page.locator('body')).toContainText('affiliate')
  28  |   })
  29  | 
  30  |   test('has breadcrumb containing "Cooking"', async ({ page }) => {
  31  |     const breadcrumb = page.locator('nav[aria-label="Breadcrumb"], [aria-label="Breadcrumb"]').first()
  32  |     // Fall back to any link to /cooking if no aria-labeled breadcrumb
  33  |     const cookingLink = page.getByRole('link', { name: /Cooking/i }).first()
  34  |     const hasBreadcrumb = (await breadcrumb.count()) > 0 || (await cookingLink.count()) > 0
  35  |     expect(hasBreadcrumb).toBe(true)
  36  |   })
  37  | 
  38  |   test('has rel="sponsored" on at least one Amazon link', async ({ page }) => {
  39  |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
  40  |     await expect(sponsoredLinks.first()).toBeVisible()
  41  |   })
  42  | 
  43  |   test('has a "Back to Cooking" or back link', async ({ page }) => {
  44  |     const backLink = page.getByRole('link', { name: /Back to Cooking|← Cooking|Cooking ←/i }).first()
  45  |     const altBack = page.locator('a[href*="/cooking"]').first()
  46  |     const hasBack = (await backLink.count()) > 0 || (await altBack.count()) > 0
> 47  |     expect(hasBack).toBe(true)
      |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  48  |   })
  49  | })
  50  | 
  51  | test.describe('Sweet Tea recipe', () => {
  52  |   test.beforeEach(async ({ page }) => {
  53  |     await page.goto('/clarke-moyer-sweet-tea-recipe/')
  54  |   })
  55  | 
  56  |   test('has "Phase 1" in content', async ({ page }) => {
  57  |     await expect(page.locator('body')).toContainText('Phase 1')
  58  |   })
  59  | 
  60  |   test('has "Phase 2" in content', async ({ page }) => {
  61  |     await expect(page.locator('body')).toContainText('Phase 2')
  62  |   })
  63  | 
  64  |   test('has "Phase 3" in content', async ({ page }) => {
  65  |     await expect(page.locator('body')).toContainText('Phase 3')
  66  |   })
  67  | 
  68  |   test('has "2.5 gallon" in content', async ({ page }) => {
  69  |     await expect(page.locator('body')).toContainText('2.5 gallon')
  70  |   })
  71  | 
  72  |   test('has affiliate disclaimer', async ({ page }) => {
  73  |     await expect(page.locator('body')).toContainText('affiliate')
  74  |   })
  75  | 
  76  |   test('has rel="sponsored" on at least one link', async ({ page }) => {
  77  |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
  78  |     await expect(sponsoredLinks.first()).toBeVisible()
  79  |   })
  80  | 
  81  |   test('has a back link to Cooking', async ({ page }) => {
  82  |     const backLink = page.locator('a[href*="/cooking"]').first()
  83  |     expect(await backLink.count()).toBeGreaterThan(0)
  84  |   })
  85  | })
  86  | 
  87  | test.describe('Philly Cheesesteak recipe', () => {
  88  |   test.beforeEach(async ({ page }) => {
  89  |     await page.goto('/clarke-moyer-philly-cheesesteak-recipe/')
  90  |   })
  91  | 
  92  |   test('has "ribeye" in content', async ({ page }) => {
  93  |     await expect(page.locator('body')).toContainText('ribeye')
  94  |   })
  95  | 
  96  |   test('has "Cheez Whiz" in content', async ({ page }) => {
  97  |     await expect(page.locator('body')).toContainText('Cheez Whiz')
  98  |   })
  99  | 
  100 |   test('has affiliate disclaimer', async ({ page }) => {
  101 |     await expect(page.locator('body')).toContainText('affiliate')
  102 |   })
  103 | 
  104 |   test('has rel="sponsored" on at least one link', async ({ page }) => {
  105 |     const sponsoredLinks = page.locator('a[rel*="sponsored"]')
  106 |     await expect(sponsoredLinks.first()).toBeVisible()
  107 |   })
  108 | 
  109 |   test('has a back link to Cooking', async ({ page }) => {
  110 |     const backLink = page.locator('a[href*="/cooking"]').first()
  111 |     expect(await backLink.count()).toBeGreaterThan(0)
  112 |   })
  113 | })
  114 | 
```