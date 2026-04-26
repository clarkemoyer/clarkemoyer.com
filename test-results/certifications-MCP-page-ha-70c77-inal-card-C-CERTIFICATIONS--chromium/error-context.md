# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: certifications.spec.ts >> MCP page >> has green terminal card (C:\CERTIFICATIONS)
- Location: tests/certifications.spec.ts:60:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Expected substring: "CERTIFICATIONS"
Received string:    "Skip to main contentHome / Certification Guides / MCP GuideClarke Moyer Microsoft MCP Certification Passing Guide🎓 Early Career ContextClarke obtained the MCP in 2009 during the same period he completed his BS-IT at Western Governors University. WGU's program helped build the foundational Microsoft Windows knowledge that led to this credential. Clarke obtained the MCP specifically as a prerequisite for his hire into SAIC and DCGS — it was a career requirement, not just an academic one.The StoryI got my MCP in March 2009 — and yes, it was a Windows XP certification. If you’re wondering how long ago that was: the “P” in XP stood for “Professional,” not “Please upgrade already.”At the time, the MCP was a hard prerequisite. SAIC and DCGS required it before they’d even consider hiring you. It wasn’t optional, it wasn’t a nice-to-have — it was the ticket you had to punch to get in the door. So I punched it.This was the before cloud era. Microsoft certifications in 2009 meant knowing your way around a domain controller and Active Directory. You didn’t “spin up resources” — you physically racked servers. Group Policy was the closest thing to infrastructure-as-code, and DNS was something you fixed at 2am with a prayer and a server reboot.The MCP was the entry credential to everything else in the Microsoft ecosystem at the time: MCSA, MCSE, MCDBA. It said “this person passed at least one Microsoft exam and can be trusted near a Windows server.” That was the bar.I earned it, it served its purpose, and then Microsoft eventually retired the entire track when they shifted to the role-based cloud certification model. No complaints — the new track is genuinely better and more useful.⚠️ Retired CertificationThe MCP certification track has been retired by Microsoft. Microsoft no longer offers the MCP credential. Clarke holds this as a legacy certification. There is nothing to study for — you cannot take this exam anymore.For current Microsoft certifications, see the recommendations below.What I Recommend InsteadMicrosoft’s current certification track is genuinely excellent — role-based, cloud-focused, and actually relevant to what enterprises and DoD environments are running today. I’ve completed all of these and recommend them.→AZ-900 Azure Fundamentals — Start here. The entry point for all Azure certifications. Covers cloud concepts, Azure services, pricing, and governance.→AI-900 Azure AI Fundamentals — Essential for anyone advising on AI policy or procurement in enterprise or DoD environments.→MS-900 Microsoft 365 Fundamentals — Covers productivity, collaboration, security, and compliance across the Microsoft 365 platform.→SC-900 Security, Compliance & Identity Fundamentals — Entry point to the Microsoft security track. Especially useful alongside CISSP for mapping concepts to Azure.→SC Series — Cloud & AI Security Engineer Track — Clarke’s overview of the full SC security track, from SC-900 through SC-100, and how each maps to DoD and enterprise security roles.📅 Related training: Professional Development Events← Back to Certification GuidesWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    9 × locator resolved to <body class="font-sans">…</body>
      - unexpected value "Skip to main contentHome / Certification Guides / MCP GuideClarke Moyer Microsoft MCP Certification Passing Guide🎓 Early Career ContextClarke obtained the MCP in 2009 during the same period he completed his BS-IT at Western Governors University. WGU's program helped build the foundational Microsoft Windows knowledge that led to this credential. Clarke obtained the MCP specifically as a prerequisite for his hire into SAIC and DCGS — it was a career requirement, not just an academic one.The StoryI got my MCP in March 2009 — and yes, it was a Windows XP certification. If you’re wondering how long ago that was: the “P” in XP stood for “Professional,” not “Please upgrade already.”At the time, the MCP was a hard prerequisite. SAIC and DCGS required it before they’d even consider hiring you. It wasn’t optional, it wasn’t a nice-to-have — it was the ticket you had to punch to get in the door. So I punched it.This was the before cloud era. Microsoft certifications in 2009 meant knowing your way around a domain controller and Active Directory. You didn’t “spin up resources” — you physically racked servers. Group Policy was the closest thing to infrastructure-as-code, and DNS was something you fixed at 2am with a prayer and a server reboot.The MCP was the entry credential to everything else in the Microsoft ecosystem at the time: MCSA, MCSE, MCDBA. It said “this person passed at least one Microsoft exam and can be trusted near a Windows server.” That was the bar.I earned it, it served its purpose, and then Microsoft eventually retired the entire track when they shifted to the role-based cloud certification model. No complaints — the new track is genuinely better and more useful.⚠️ Retired CertificationThe MCP certification track has been retired by Microsoft. Microsoft no longer offers the MCP credential. Clarke holds this as a legacy certification. There is nothing to study for — you cannot take this exam anymore.For current Microsoft certifications, see the recommendations below.What I Recommend InsteadMicrosoft’s current certification track is genuinely excellent — role-based, cloud-focused, and actually relevant to what enterprises and DoD environments are running today. I’ve completed all of these and recommend them.→AZ-900 Azure Fundamentals — Start here. The entry point for all Azure certifications. Covers cloud concepts, Azure services, pricing, and governance.→AI-900 Azure AI Fundamentals — Essential for anyone advising on AI policy or procurement in enterprise or DoD environments.→MS-900 Microsoft 365 Fundamentals — Covers productivity, collaboration, security, and compliance across the Microsoft 365 platform.→SC-900 Security, Compliance & Identity Fundamentals — Entry point to the Microsoft security track. Especially useful alongside CISSP for mapping concepts to Azure.→SC Series — Cloud & AI Security Engineer Track — Clarke’s overview of the full SC security track, from SC-900 through SC-100, and how each maps to DoD and enterprise security roles.📅 Related training: Professional Development Events← Back to Certification GuidesWe Value Your PrivacyWe use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.Privacy PolicyCookie PolicyDecline AllCustomizeAccept All"

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
        - text: / MCP Guide
      - heading "Clarke Moyer Microsoft MCP Certification Passing Guide" [level=1] [ref=e9]
    - generic [ref=e11]:
      - generic [ref=e12]:
        - paragraph [ref=e13]: 🎓 Early Career Context
        - paragraph [ref=e14]:
          - text: Clarke obtained the MCP in 2009 during the same period he completed his
          - strong [ref=e15]: BS-IT at Western Governors University
          - text: . WGU's program helped build the foundational Microsoft Windows knowledge that led to this credential. Clarke obtained the MCP specifically as a prerequisite for his hire into SAIC and DCGS — it was a career requirement, not just an academic one.
      - heading "The Story" [level=2] [ref=e16]
      - paragraph [ref=e17]:
        - text: I got my MCP in March 2009 — and yes, it was a
        - strong [ref=e18]: Windows XP certification
        - text: ". If you’re wondering how long ago that was: the “P” in XP stood for “Professional,” not “Please upgrade already.”"
      - paragraph [ref=e19]: At the time, the MCP was a hard prerequisite. SAIC and DCGS required it before they’d even consider hiring you. It wasn’t optional, it wasn’t a nice-to-have — it was the ticket you had to punch to get in the door. So I punched it.
      - paragraph [ref=e20]:
        - text: This was the
        - strong [ref=e21]: before cloud era
        - text: . Microsoft certifications in 2009 meant knowing your way around a domain controller and Active Directory. You didn’t “spin up resources” — you physically racked servers. Group Policy was the closest thing to infrastructure-as-code, and DNS was something you fixed at 2am with a prayer and a server reboot.
      - paragraph [ref=e22]: "The MCP was the entry credential to everything else in the Microsoft ecosystem at the time: MCSA, MCSE, MCDBA. It said “this person passed at least one Microsoft exam and can be trusted near a Windows server.” That was the bar."
      - paragraph [ref=e23]: I earned it, it served its purpose, and then Microsoft eventually retired the entire track when they shifted to the role-based cloud certification model. No complaints — the new track is genuinely better and more useful.
      - generic [ref=e24]:
        - paragraph [ref=e25]: ⚠️ Retired Certification
        - paragraph [ref=e26]: The MCP certification track has been retired by Microsoft. Microsoft no longer offers the MCP credential. Clarke holds this as a legacy certification. There is nothing to study for — you cannot take this exam anymore.
        - paragraph [ref=e27]: For current Microsoft certifications, see the recommendations below.
      - heading "What I Recommend Instead" [level=2] [ref=e28]
      - paragraph [ref=e29]: Microsoft’s current certification track is genuinely excellent — role-based, cloud-focused, and actually relevant to what enterprises and DoD environments are running today. I’ve completed all of these and recommend them.
      - list [ref=e30]:
        - listitem [ref=e31]:
          - text: →
          - generic [ref=e32]:
            - link "AZ-900 Azure Fundamentals" [ref=e33] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-az-900-passing-guide/
            - text: — Start here. The entry point for all Azure certifications. Covers cloud concepts, Azure services, pricing, and governance.
        - listitem [ref=e34]:
          - text: →
          - generic [ref=e35]:
            - link "AI-900 Azure AI Fundamentals" [ref=e36] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
            - text: — Essential for anyone advising on AI policy or procurement in enterprise or DoD environments.
        - listitem [ref=e37]:
          - text: →
          - generic [ref=e38]:
            - link "MS-900 Microsoft 365 Fundamentals" [ref=e39] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-ms-900-passing-guide/
            - text: — Covers productivity, collaboration, security, and compliance across the Microsoft 365 platform.
        - listitem [ref=e40]:
          - text: →
          - generic [ref=e41]:
            - link "SC-900 Security, Compliance & Identity Fundamentals" [ref=e42] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-900-passing-guide/
            - text: — Entry point to the Microsoft security track. Especially useful alongside CISSP for mapping concepts to Azure.
        - listitem [ref=e43]:
          - text: →
          - generic [ref=e44]:
            - link "SC Series — Cloud & AI Security Engineer Track" [ref=e45] [cursor=pointer]:
              - /url: /clarke-moyer-microsoft-sc-500-passing-guide/
            - text: — Clarke’s overview of the full SC security track, from SC-900 through SC-100, and how each maps to DoD and enterprise security roles.
      - generic [ref=e46]:
        - paragraph [ref=e47]:
          - text: "📅 Related training:"
          - link "Professional Development Events" [ref=e48] [cursor=pointer]:
            - /url: /professional-development/
        - link "← Back to Certification Guides" [ref=e49] [cursor=pointer]:
          - /url: /certification-guides/
  - alert [ref=e50]
  - region "Cookie consent notice" [ref=e51]:
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "We Value Your Privacy" [level=3] [ref=e55]
        - paragraph [ref=e56]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e57]:
          - link "Privacy Policy" [ref=e58] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e59] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e60]:
        - button "Decline All" [ref=e61]
        - button "Customize" [ref=e62]
        - button "Accept All" [ref=e63]
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
  38  |     await expect(page.locator('body')).toContainText('affiliate')
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
> 61  |     await expect(page.locator('body')).toContainText('CERTIFICATIONS')
      |                                        ^ Error: expect(locator).toContainText(expected) failed
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