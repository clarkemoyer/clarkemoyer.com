# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: affiliate.spec.ts >> Affiliate disclosure page >> mentions "clarkemoyer-20" affiliate tag
- Location: tests/affiliate.spec.ts:23:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "clarkemoyer-20"
Received string:    "Skip to main contentAffiliate DisclosureEffective Date: April 2026Amazon AssociatesClarke Moyer is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.This means that when you click on certain product links on this site and make a purchase on Amazon, I may earn a small commission at no additional cost to you. The price you pay is exactly the same whether you use my affiliate link or go directly to Amazon.FTC DisclosureIn accordance with the Federal Trade Commission's guidelines, I disclose that this site contains affiliate links. I only link to products I actually use and recommend. My opinions and content are entirely my own and are not influenced by affiliate relationships.Which Pages Contain Affiliate LinksAffiliate links currently appear on the following pages:Apple Crisp RecipeSweet Tea RecipePhilly Cheesesteak RecipeCISSP Certification Passing GuideCISSP-ISSEP Certification Passing GuidePMP Certification Passing GuideSAFe SPC Certification Passing GuideCompTIA Security+ Certification Passing GuideCompTIA Network+ Certification Passing GuideCompTIA A+ Certification Passing GuideCompTIA Project+ Certification Passing GuideCIW Professional Passing GuideITIL 4 Foundation Certification Passing GuideMicrosoft AZ-900 Azure Fundamentals Passing GuideMicrosoft AZ-500 Azure Security Technologies Passing GuideMicrosoft AI-900 Azure AI Fundamentals Passing GuideMicrosoft SC-900 Security Fundamentals Passing GuideMicrosoft SC Security Certification Track GuideMicrosoft MS-900 Microsoft 365 Fundamentals GuideVMware VCP6-CMA Cloud Management & Automation Passing GuideVMware VCP-AM Application Modernization Passing GuideVMware VCP5-DCV Data Center Virtualization Passing GuideVMware VCP4-DCV Data Center Virtualization Passing GuideAffiliate links on these pages are marked with ↗ and will open Amazon.com in a new tab. A notice reading “As an Amazon Associate I earn from qualifying purchases” also appears at the bottom of each recipe page.QuestionsIf you have any questions about this disclosure, contact Clarke Moyer via LinkedIn.← Back to HomeWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    9 × locator resolved to <body class="font-sans">…</body>
      - unexpected value "Skip to main contentAffiliate DisclosureEffective Date: April 2026Amazon AssociatesClarke Moyer is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.This means that when you click on certain product links on this site and make a purchase on Amazon, I may earn a small commission at no additional cost to you. The price you pay is exactly the same whether you use my affiliate link or go directly to Amazon.FTC DisclosureIn accordance with the Federal Trade Commission's guidelines, I disclose that this site contains affiliate links. I only link to products I actually use and recommend. My opinions and content are entirely my own and are not influenced by affiliate relationships.Which Pages Contain Affiliate LinksAffiliate links currently appear on the following pages:Apple Crisp RecipeSweet Tea RecipePhilly Cheesesteak RecipeCISSP Certification Passing GuideCISSP-ISSEP Certification Passing GuidePMP Certification Passing GuideSAFe SPC Certification Passing GuideCompTIA Security+ Certification Passing GuideCompTIA Network+ Certification Passing GuideCompTIA A+ Certification Passing GuideCompTIA Project+ Certification Passing GuideCIW Professional Passing GuideITIL 4 Foundation Certification Passing GuideMicrosoft AZ-900 Azure Fundamentals Passing GuideMicrosoft AZ-500 Azure Security Technologies Passing GuideMicrosoft AI-900 Azure AI Fundamentals Passing GuideMicrosoft SC-900 Security Fundamentals Passing GuideMicrosoft SC Security Certification Track GuideMicrosoft MS-900 Microsoft 365 Fundamentals GuideVMware VCP6-CMA Cloud Management & Automation Passing GuideVMware VCP-AM Application Modernization Passing GuideVMware VCP5-DCV Data Center Virtualization Passing GuideVMware VCP4-DCV Data Center Virtualization Passing GuideAffiliate links on these pages are marked with ↗ and will open Amazon.com in a new tab. A notice reading “As an Amazon Associate I earn from qualifying purchases” also appears at the bottom of each recipe page.QuestionsIf you have any questions about this disclosure, contact Clarke Moyer via LinkedIn.← Back to HomeWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=e4]:
    - heading "Affiliate Disclosure" [level=1] [ref=e5]
    - paragraph [ref=e6]:
      - emphasis [ref=e7]: "Effective Date: April 2026"
    - generic [ref=e8]:
      - generic [ref=e9]:
        - heading "Amazon Associates" [level=2] [ref=e10]
        - paragraph [ref=e11]:
          - text: Clarke Moyer is a participant in the
          - link "Amazon Services LLC Associates Program" [ref=e12] [cursor=pointer]:
            - /url: https://affiliate-program.amazon.com
          - text: ", an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."
        - paragraph [ref=e13]:
          - text: This means that when you click on certain product links on this site and make a purchase on Amazon, I may earn a small commission at
          - strong [ref=e14]: no additional cost to you
          - text: . The price you pay is exactly the same whether you use my affiliate link or go directly to Amazon.
      - generic [ref=e15]:
        - heading "FTC Disclosure" [level=2] [ref=e16]
        - paragraph [ref=e17]:
          - text: In accordance with the
          - link "Federal Trade Commission's guidelines" [ref=e18] [cursor=pointer]:
            - /url: https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking
          - text: ", I disclose that this site contains affiliate links. I only link to products I actually use and recommend. My opinions and content are entirely my own and are not influenced by affiliate relationships."
      - generic [ref=e19]:
        - heading "Which Pages Contain Affiliate Links" [level=2] [ref=e20]
        - paragraph [ref=e21]: "Affiliate links currently appear on the following pages:"
        - list [ref=e22]:
          - listitem [ref=e23]:
            - link "Apple Crisp Recipe" [ref=e24] [cursor=pointer]:
              - /url: /clarke-moyer-world-famous-apple-crisp-recipe/
          - listitem [ref=e25]:
            - link "Sweet Tea Recipe" [ref=e26] [cursor=pointer]:
              - /url: /clarke-moyer-sweet-tea-recipe/
          - listitem [ref=e27]:
            - link "Philly Cheesesteak Recipe" [ref=e28] [cursor=pointer]:
              - /url: /clarke-moyer-philly-cheesesteak-recipe/
          - listitem [ref=e29]:
            - link "CISSP Certification Passing Guide" [ref=e30] [cursor=pointer]:
              - /url: /clarke-moyer-cissp-certification-passing-guide/
          - listitem [ref=e31]:
            - link "CISSP-ISSEP Certification Passing Guide" [ref=e32] [cursor=pointer]:
              - /url: /clarke-moyer-cissp-issep-certification-passing-guide/
          - listitem [ref=e33]:
            - link "PMP Certification Passing Guide" [ref=e34] [cursor=pointer]:
              - /url: /clarke-moyer-pmp-certification-passing-guide/
          - listitem [ref=e35]:
            - link "SAFe SPC Certification Passing Guide" [ref=e36] [cursor=pointer]:
              - /url: /clarke-moyer-safe-spc-certification-passing-guide/
          - listitem [ref=e37]:
            - link "CompTIA Security+ Certification Passing Guide" [ref=e38] [cursor=pointer]:
              - /url: /clarke-moyer-comptia-security-plus-passing-guide/
          - listitem [ref=e39]:
            - link "CompTIA Network+ Certification Passing Guide" [ref=e40] [cursor=pointer]:
              - /url: /clarke-moyer-comptia-network-plus-passing-guide/
          - listitem [ref=e41]:
            - link "CompTIA A+ Certification Passing Guide" [ref=e42] [cursor=pointer]:
              - /url: /clarke-moyer-comptia-a-plus-passing-guide/
          - listitem [ref=e43]:
            - link "CompTIA Project+ Certification Passing Guide" [ref=e44] [cursor=pointer]:
              - /url: /clarke-moyer-comptia-project-plus-passing-guide/
          - listitem [ref=e45]:
            - link "CIW Professional Passing Guide" [ref=e46] [cursor=pointer]:
              - /url: /clarke-moyer-ciw-professional-passing-guide/
          - listitem [ref=e47]:
            - link "ITIL 4 Foundation Certification Passing Guide" [ref=e48] [cursor=pointer]:
              - /url: /clarke-moyer-itil-4-foundation-passing-guide/
          - listitem [ref=e49]:
            - link "Microsoft AZ-900 Azure Fundamentals Passing Guide" [ref=e50] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-az-900-passing-guide/
          - listitem [ref=e51]:
            - link "Microsoft AZ-500 Azure Security Technologies Passing Guide" [ref=e52] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-az-500-passing-guide/
          - listitem [ref=e53]:
            - link "Microsoft AI-900 Azure AI Fundamentals Passing Guide" [ref=e54] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
          - listitem [ref=e55]:
            - link "Microsoft SC-900 Security Fundamentals Passing Guide" [ref=e56] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-900-passing-guide/
          - listitem [ref=e57]:
            - link "Microsoft SC Security Certification Track Guide" [ref=e58] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-500-passing-guide/
          - listitem [ref=e59]:
            - link "Microsoft MS-900 Microsoft 365 Fundamentals Guide" [ref=e60] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ms-900-passing-guide/
          - listitem [ref=e61]:
            - link "VMware VCP6-CMA Cloud Management & Automation Passing Guide" [ref=e62] [cursor=pointer]:
              - /url: /clarke-moyer-vcp6-cma-passing-guide/
          - listitem [ref=e63]:
            - link "VMware VCP-AM Application Modernization Passing Guide" [ref=e64] [cursor=pointer]:
              - /url: /clarke-moyer-vcp-am-passing-guide/
          - listitem [ref=e65]:
            - link "VMware VCP5-DCV Data Center Virtualization Passing Guide" [ref=e66] [cursor=pointer]:
              - /url: /clarke-moyer-vcp5-dcv-passing-guide/
          - listitem [ref=e67]:
            - link "VMware VCP4-DCV Data Center Virtualization Passing Guide" [ref=e68] [cursor=pointer]:
              - /url: /clarke-moyer-vcp4-dcv-passing-guide/
        - paragraph [ref=e69]: Affiliate links on these pages are marked with ↗ and will open Amazon.com in a new tab. A notice reading “As an Amazon Associate I earn from qualifying purchases” also appears at the bottom of each recipe page.
      - generic [ref=e70]:
        - heading "Questions" [level=2] [ref=e71]
        - paragraph [ref=e72]:
          - text: If you have any questions about this disclosure, contact Clarke Moyer via
          - link "LinkedIn" [ref=e73] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/clarkemoyer
          - text: .
    - link "← Back to Home" [ref=e75] [cursor=pointer]:
      - /url: /
  - alert [ref=e76]
  - region "Cookie consent notice" [ref=e77]:
    - generic [ref=e79]:
      - generic [ref=e80]:
        - heading "We Value Your Privacy" [level=3] [ref=e81]
        - paragraph [ref=e82]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e83]:
          - link "Privacy Policy" [ref=e84] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e85] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e86]:
        - button "Decline All" [ref=e87]
        - button "Customize" [ref=e88]
        - button "Accept All" [ref=e89]
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
> 25  |     await expect(page.locator('body')).toContainText('clarkemoyer-20')
      |                                        ^ Error: expect(locator).toContainText(expected) failed
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
  47  |     expect(count, 'Expected at least one affiliate-tagged Amazon link').toBeGreaterThan(0)
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