# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /clarke-moyer-mcp-passing-guide/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /clarke-moyer-mcp-passing-guide/ title: ""

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
     |                                                  ^ Error: /clarke-moyer-mcp-passing-guide/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```