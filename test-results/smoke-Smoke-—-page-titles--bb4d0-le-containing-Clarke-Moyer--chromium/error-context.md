# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke — page titles >> /certification-guides/ has a title containing "Clarke Moyer"
- Location: tests/smoke.spec.ts:48:5

# Error details

```
Error: /certification-guides/ title: ""

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
        - text: / Certification Guides
      - heading "Certification Guides" [level=1] [ref=e8]
    - generic [ref=e10]:
      - paragraph [ref=e11]: List of completed Management and Technical certifications, some with guides or methods of passing.
      - paragraph [ref=e12]:
        - emphasis [ref=e13]:
          - text: "Note: For the most up-to-date listing please go to my"
          - link "LinkedIn" [ref=e14] [cursor=pointer]:
            - /url: https://linkedin.com/in/clarkemoyer
          - text: .
      - heading "Microsoft Azure Certifications" [level=2] [ref=e15]
      - paragraph [ref=e16]: Clarke currently recommends these Microsoft Azure certifications — solid entry points for cloud, AI, and security in enterprise and DoD environments.
      - generic [ref=e17]:
        - generic [ref=e18]:
          - heading "Microsoft AZ-900 Azure Fundamentals Guide" [level=2] [ref=e19]
          - text: ✅ Recommended
        - paragraph [ref=e20]: The entry point for all Azure certifications — establishes the vocabulary and framework everything else builds on.
        - link "Read the AZ-900 Guide →" [ref=e21] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-az-900-passing-guide/
      - generic [ref=e22]:
        - generic [ref=e23]:
          - heading "Microsoft AI-900 Azure AI Fundamentals Guide" [level=2] [ref=e24]
          - text: ✅ Recommended
        - paragraph [ref=e25]: Entry-level Azure AI certification — essential for understanding AI workloads in enterprise and DoD environments before anyone can advise on AI policy or procurement.
        - link "Read the AI-900 Guide →" [ref=e26] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-ai-900-passing-guide/
      - generic [ref=e27]:
        - generic [ref=e28]:
          - heading "Microsoft SC-900 Security Fundamentals Guide" [level=2] [ref=e29]
          - text: ✅ Recommended
        - paragraph [ref=e30]: Entry point to the Microsoft SC security track — covers security, compliance, and identity (SCI) fundamentals. Especially useful for CISSP holders mapping to Azure.
        - link "Read the SC-900 Guide →" [ref=e31] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-sc-900-passing-guide/
      - generic [ref=e32]:
        - generic [ref=e33]:
          - 'heading "SC-500: Cloud & AI Security Engineer" [level=2] [ref=e34]'
          - text: ✅ Recommended
        - paragraph [ref=e35]: Clarke’s overview of the full Microsoft SC security certification track — SC-900 through SC-100 — and how each cert maps to DoD and enterprise security roles.
        - link "Read the SC Series Guide →" [ref=e36] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-sc-500-passing-guide/
      - generic [ref=e37]:
        - generic [ref=e38]:
          - 'heading "AZ-500: Azure Security Technologies" [level=2] [ref=e39]'
          - text: 🔒 Security
        - paragraph [ref=e40]: Associate-level Azure security cert for security engineers implementing security controls, managing identity/access, and securing Azure workloads. Clarke holds this certification.
        - link "Read the AZ-500 Guide →" [ref=e41] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-az-500-passing-guide/
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Microsoft MS-900 Microsoft 365 Fundamentals Guide" [level=2] [ref=e44]
          - text: ✅ Recommended
        - paragraph [ref=e45]: Clarke’s guide to the MS-900 — the entry point for the Microsoft 365 track covering productivity, collaboration, security, and compliance fundamentals.
        - link "Read the MS-900 Guide →" [ref=e46] [cursor=pointer]:
          - /url: /clarke-moyer-microsoft-ms-900-passing-guide/
      - generic [ref=e47]:
        - heading "CISSP Certification Passing Guide" [level=2] [ref=e48]
        - paragraph [ref=e49]: I wrote a detailed guide on how I passed the CISSP on my first attempt.
        - link "Read the CISSP Guide →" [ref=e50] [cursor=pointer]:
          - /url: /clarke-moyer-cissp-certification-passing-guide/
      - generic [ref=e51]:
        - heading "CISSP-ISSEP Certification Passing Guide" [level=2] [ref=e52]
        - paragraph [ref=e53]: The ISSEP concentration — Systems Security Engineering Professional. Requires active CISSP. Earned November 2019.
        - link "Read the CISSP-ISSEP Guide →" [ref=e54] [cursor=pointer]:
          - /url: /clarke-moyer-cissp-issep-certification-passing-guide/
      - generic [ref=e55]:
        - heading "PMP Certification Passing Guide" [level=2] [ref=e56]
        - paragraph [ref=e57]: PMI’s flagship project management credential. Study method, Rita Mulcahy resources, and test strategy. Earned December 2012.
        - link "Read the PMP Guide →" [ref=e58] [cursor=pointer]:
          - /url: /clarke-moyer-pmp-certification-passing-guide/
      - generic [ref=e59]:
        - heading "SAFe SPC Certification Passing Guide" [level=2] [ref=e60]
        - paragraph [ref=e61]: SAFe Program Consultant — the 4-day instructor-led path to leading enterprise Lean-Agile transformations. Earned October 2020.
        - link "Read the SAFe SPC Guide →" [ref=e62] [cursor=pointer]:
          - /url: /clarke-moyer-safe-spc-certification-passing-guide/
      - heading "CompTIA Certifications" [level=2] [ref=e63]
      - paragraph [ref=e64]:
        - text: Legacy path — see the
        - link "CISSP guide" [ref=e65] [cursor=pointer]:
          - /url: /clarke-moyer-cissp-certification-passing-guide/
        - text: for the recommended security track and the
        - link "SAFe SPC guide" [ref=e66] [cursor=pointer]:
          - /url: /clarke-moyer-safe-spc-certification-passing-guide/
        - text: for the recommended project management track.
      - generic [ref=e69]:
        - generic [ref=e70]:
          - heading "CompTIA Security+ Passing Guide" [level=3] [ref=e71]
          - text: ⚠️ Legacy Path
        - paragraph [ref=e72]: DoD 8570 IAT Level II baseline qualifier. Earned November 2008. See CISSP guide for the recommended security track.
        - link "Read the Security+ Guide →" [ref=e73] [cursor=pointer]:
          - /url: /clarke-moyer-comptia-security-plus-passing-guide/
      - generic [ref=e76]:
        - generic [ref=e77]:
          - heading "CompTIA Network+ Passing Guide" [level=3] [ref=e78]
          - text: ⚠️ Legacy Path
        - paragraph [ref=e79]: DoD 8570 IAT Level I baseline qualifier. Earned October 2008. Solid networking foundation but superseded by CISSP for career leverage.
        - link "Read the Network+ Guide →" [ref=e80] [cursor=pointer]:
          - /url: /clarke-moyer-comptia-network-plus-passing-guide/
      - generic [ref=e83]:
        - generic [ref=e84]:
          - heading "CompTIA A+ Passing Guide" [level=3] [ref=e85]
          - text: ⚠️ Legacy Path
        - paragraph [ref=e86]: DoD 8570 IAT Level I baseline qualifier. Earned August 2008. Hardware and OS fundamentals — a common career starting point.
        - link "Read the A+ Guide →" [ref=e87] [cursor=pointer]:
          - /url: /clarke-moyer-comptia-a-plus-passing-guide/
      - generic [ref=e90]:
        - generic [ref=e91]:
          - heading "CompTIA Project+ Passing Guide" [level=3] [ref=e92]
          - text: ⚠️ Legacy Path
        - paragraph [ref=e93]: Entry-level project management credential. Earned January 2009. Clarke recommends SAFe SPC instead for enterprise and DoD environments.
        - link "Read the Project+ Guide →" [ref=e94] [cursor=pointer]:
          - /url: /clarke-moyer-comptia-project-plus-passing-guide/
      - heading "VMware Certifications" [level=2] [ref=e95]
      - paragraph [ref=e96]: DoD 8570 Computing Environment certifications — VMware data center virtualization and cloud management credentials.
      - paragraph [ref=e97]: Clarke’s VMware track spans over a decade of private cloud and DCGS program work — starting before formal VMware certification existed and culminating in cloud management and application modernization. This era has given way to cloud-native architecture under the CNCF.
      - generic [ref=e98]:
        - heading "VMware VCP-AM Application Modernization Guide" [level=3] [ref=e99]
        - paragraph [ref=e100]: "VCP-AM covers Tanzu, Kubernetes, and container orchestration — VMware’s modern cloud-native platform. License: VMW-02637767W."
        - link "Read the VCP-AM Guide →" [ref=e101] [cursor=pointer]:
          - /url: /clarke-moyer-vcp-am-passing-guide/
      - generic [ref=e102]:
        - heading "VMware VCP6-CMA Cloud Management & Automation Guide" [level=3] [ref=e103]
        - paragraph [ref=e104]: VCP6-CMA validates skills in vRealize Automation, vRealize Operations, and cloud management. Obtained May 2018.
        - link "Read the VCP6-CMA Guide →" [ref=e105] [cursor=pointer]:
          - /url: /clarke-moyer-vcp6-cma-passing-guide/
      - generic [ref=e106]:
        - heading "VMware VCP5-DCV Data Center Virtualization Guide" [level=3] [ref=e107]
        - paragraph [ref=e108]: VCP5-DCV covers vSphere 5 — ESXi, vCenter, HA, DRS, and vMotion. Legacy credential. Obtained February 2012.
        - link "Read the VCP5-DCV Guide →" [ref=e109] [cursor=pointer]:
          - /url: /clarke-moyer-vcp5-dcv-passing-guide/
      - generic [ref=e110]:
        - heading "VMware VCP4-DCV Data Center Virtualization Guide" [level=3] [ref=e111]
        - paragraph [ref=e112]: VCP4-DCV — the original DCV credential, based on vSphere 4. Historical cert. Obtained November 2010.
        - link "Read the VCP4-DCV Guide →" [ref=e113] [cursor=pointer]:
          - /url: /clarke-moyer-vcp4-dcv-passing-guide/
      - heading "Legacy & Retired Certifications" [level=2] [ref=e114]
      - paragraph [ref=e115]: Credentials that are retired or have limited current market value. Included for completeness and historical context.
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "Microsoft MCP Passing Guide" [level=3] [ref=e118]
          - text: 🗂 Retired
        - paragraph [ref=e119]: The original Microsoft Certified Professional credential — a Windows XP era cert required for SAIC/DCGS hiring in 2009. Retired by Microsoft. Historical context only.
        - link "Read the MCP Guide →" [ref=e120] [cursor=pointer]:
          - /url: /clarke-moyer-mcp-passing-guide/
      - generic [ref=e121]:
        - generic [ref=e122]:
          - heading "CIW Professional & Database Design Specialist Guide" [level=3] [ref=e123]
          - text: 🗂 Legacy
        - paragraph [ref=e124]: Foundational web technology credential from 2009. Limited current market recognition. Clarke recommends Microsoft or CompTIA certs instead for market value today.
        - link "Read the CIW Professional Guide →" [ref=e125] [cursor=pointer]:
          - /url: /clarke-moyer-ciw-professional-passing-guide/
      - heading "Service Management Certifications" [level=2] [ref=e126]
      - generic [ref=e127]:
        - heading "ITIL 4 Foundation Passing Guide" [level=3] [ref=e128]
        - paragraph [ref=e129]: Entry-level IT service management credential — required on certain DoD and enterprise contracts. Covers the ITIL service value system, four dimensions model, and guiding principles.
        - link "Read the ITIL 4 Foundation Guide →" [ref=e130] [cursor=pointer]:
          - /url: /clarke-moyer-itil-4-foundation-passing-guide/
      - generic [ref=e131]:
        - heading "Full Credentials Record" [level=2] [ref=e132]
        - paragraph [ref=e133]: Complete listing of all certifications, credentials, and degrees held. For detailed study guides, see the cards above.
      - heading "Industry Management Certifications (DFARS)" [level=2] [ref=e134]
      - list [ref=e135]:
        - listitem [ref=e136]:
          - strong [ref=e137]: Certified SAFe® 5/6 Program Consultant (SPC5)
          - text: "(Obtained: 2020-Oct-18) (License: 00763322-3362)"
          - text: A SAFe implementation professional responsible for training leaders and change agents to drive Lean-Agile transformation at enterprise scale.
        - listitem [ref=e138]:
          - strong [ref=e139]: Project Management Professional (PMP)
          - text: "(Obtained: 2012-Dec-22) (License: 1563680)"
          - text: PMI’s most important industry-recognized certification for project managers.
        - listitem [ref=e140]:
          - strong [ref=e141]: CompTIA Project+ (P+)
          - text: "(Obtained: 2009-Jan-14) (License: COMP001007606759)"
      - heading "Industry Certifications (DoD 8570.1M / DoD NICE Framework IAM III, IAT III, & IASAE III Qualified)" [level=2] [ref=e142]
      - heading "DoD 8570 Baseline Security Certifications" [level=3] [ref=e143]
      - list [ref=e144]:
        - listitem [ref=e145]:
          - strong [ref=e146]: CISSP – Information Systems Security Engineering (CISSP-ISSEP)
          - text: "(Obtained: 2019-Nov-6) (License: 393607)"
        - listitem [ref=e147]:
          - strong [ref=e148]: Certified Information Systems Security Professional (CISSP)
          - text: "(Obtained: 2018-Dec-05) (License: 393607)"
        - listitem [ref=e149]:
          - strong [ref=e150]: CompTIA Secure Infrastructure Specialist (CSIS)
          - text: — includes S+ce, N+ce, & A+ce
          - text: "(Obtained: 2013-Aug-27) (License: COMP001007606759)"
        - listitem [ref=e151]:
          - strong [ref=e152]: CompTIA Security+ (S+ce)
          - text: "(Obtained: 2008-Nov-19)"
        - listitem [ref=e153]:
          - strong [ref=e154]: CompTIA Network+ (N+ce)
          - text: "(Obtained: 2008-Oct-08)"
        - listitem [ref=e155]:
          - strong [ref=e156]: CompTIA A+ (A+ce)
          - text: "(Obtained: 2008-Aug-15)"
      - heading "DoD 8570 Computing Environment Certifications" [level=3] [ref=e157]
      - list [ref=e158]:
        - listitem [ref=e159]:
          - strong [ref=e160]: VMware Certified Professional – Application Modernization 2021/2022 (VCP-AM)
          - text: "(License: VMW-02637767W)"
        - listitem [ref=e161]:
          - strong [ref=e162]: VMware Certified Professional 6 – Cloud Management and Automation (VCP6-CMA)
          - text: "(Obtained: 2018-May-15)"
        - listitem [ref=e163]:
          - strong [ref=e164]: Microsoft Certified Professional (MCP)
          - text: "(Obtained: 2009-Mar-21)"
        - listitem [ref=e165]:
          - strong [ref=e166]: CIW Professional
          - text: "(Obtained: 2009-Apr-22) including CIW Database Design Specialist"
      - heading "Microsoft Azure Certifications" [level=3] [ref=e167]
      - list [ref=e168]:
        - listitem [ref=e169]:
          - strong [ref=e170]: "Microsoft MS-900: Microsoft 365 Fundamentals"
        - listitem [ref=e171]:
          - strong [ref=e172]: "Microsoft AZ-900: Azure Fundamentals"
        - listitem [ref=e173]:
          - strong [ref=e174]: "Microsoft AI-900: Azure AI Fundamentals"
        - listitem [ref=e175]:
          - strong [ref=e176]: "Microsoft SC-900: Security, Compliance, and Identity Fundamentals"
        - listitem [ref=e177]:
          - strong [ref=e178]: "Microsoft SC-500: Cloud and AI Security Engineer Associate"
      - heading "Service Management" [level=3] [ref=e179]
      - list [ref=e180]:
        - listitem [ref=e181]:
          - strong [ref=e182]: ITIL 4 Foundation
      - heading "Degrees and Graduate Certificates" [level=2] [ref=e183]
      - list [ref=e184]:
        - listitem [ref=e185]: "DBA (Focus: IT Management) — Penn State University (In Progress)"
        - listitem [ref=e186]: "GC-PM (Focus: Project Management) — University of Maryland (Completed 08/30/2012)"
        - listitem [ref=e187]: "MBA-ITM (Focus: IT Management) — Western Governors University (Completed 6/18/2010)"
        - listitem [ref=e188]: "BS-IT (Focus: Information Technology) — Western Governors University (Completed 07/16/2009)"
        - listitem [ref=e189]: "A.A.S. (Focus: Electronics Technology) — Cochise College (Awarded 12/2013)"
  - alert [ref=e190]
  - region "Cookie consent notice" [ref=e191]:
    - generic [ref=e193]:
      - generic [ref=e194]:
        - heading "We Value Your Privacy" [level=3] [ref=e195]
        - paragraph [ref=e196]: We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.
        - generic [ref=e197]:
          - link "Privacy Policy" [ref=e198] [cursor=pointer]:
            - /url: /privacy-policy/
          - link "Cookie Policy" [ref=e199] [cursor=pointer]:
            - /url: /cookie-policy/
      - generic [ref=e200]:
        - button "Decline All" [ref=e201]
        - button "Customize" [ref=e202]
        - button "Accept All" [ref=e203]
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
     |                                                  ^ Error: /certification-guides/ title: ""
  52 |     })
  53 |   }
  54 | })
  55 | 
```