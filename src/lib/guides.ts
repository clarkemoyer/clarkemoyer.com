import type { Metadata } from 'next'

/**
 * Single source of truth for the certification passing guides: search titles,
 * meta descriptions, the credential each guide covers, the date its content
 * last changed, and which guides it links to as "related".
 *
 * `dateModified` is the date of the last meaningful content change. It feeds
 * the Article schema and must match the guide's `<lastmod>` in
 * public/sitemap.xml (a test checks this). Bump both when a guide's content
 * changes; leave them alone for formatting or link-only edits.
 */

export type GuideStatus = 'current' | 'retired'

export interface Guide {
  /** Route segment, e.g. `clarke-moyer-microsoft-az-900-passing-guide`. */
  slug: string
  /** Short label used in breadcrumbs and related-guide cards. */
  shortName: string
  /** `<title>` text; the root layout appends " | Clarke Moyer". Keep at or under 50 characters. */
  title: string
  /** Meta and Open Graph description. Keep between 110 and 160 characters. */
  description: string
  /** One-line teaser shown on related-guide cards. */
  blurb: string
  /** The credential the guide covers. */
  credential: string
  /** Organization that issues the credential. */
  issuer: string
  status: GuideStatus
  /** YYYY-MM-DD. */
  dateModified: string
  /** Slugs of two or three related guides. */
  related: string[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'clarke-moyer-microsoft-az-900-passing-guide',
    shortName: 'AZ-900 Azure Fundamentals',
    title: 'How to Pass AZ-900 Azure Fundamentals',
    description:
      "How to pass AZ-900 Azure Fundamentals: Clarke Moyer's 4-step method, the free Microsoft Learn path, the study guide and practice tests, and what to take next.",
    blurb: 'The entry point for every Azure certification.',
    credential: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    status: 'current',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-ai-900-passing-guide',
      'clarke-moyer-microsoft-sc-900-passing-guide',
      'clarke-moyer-microsoft-sc-500-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-microsoft-ai-900-passing-guide',
    shortName: 'AI-901 Azure AI Fundamentals',
    title: 'AI-901 (AI-900) Azure AI Fundamentals Guide',
    description:
      "How to pass Azure AI Fundamentals, now exam AI-901 (formerly AI-900): Clarke Moyer's 4-step method, free Microsoft Learn path, study guide and practice tests.",
    blurb: "Clarke's recommended first Microsoft certification.",
    credential: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    status: 'current',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-az-900-passing-guide',
      'clarke-moyer-microsoft-sc-900-passing-guide',
      'clarke-moyer-microsoft-ms-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-microsoft-sc-900-passing-guide',
    shortName: 'SC-900 Security Fundamentals',
    title: 'How to Pass SC-900 Security Fundamentals',
    description:
      "How to pass SC-900 Security, Compliance, and Identity Fundamentals: Clarke Moyer's 4-step method, free Microsoft Learn path, practice tests, and the CISSP fit.",
    blurb: 'Microsoft security, compliance and identity basics.',
    credential: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    status: 'current',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-sc-500-passing-guide',
      'clarke-moyer-cissp-certification-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-microsoft-sc-500-passing-guide',
    shortName: 'SC-500 Cloud & AI Security Engineer',
    title: 'How to Pass SC-500 Cloud & AI Security Engineer',
    description:
      "How to pass Microsoft SC-500 Cloud and AI Security Engineer Associate: Clarke Moyer's 4-step method, study resources and practice approach.",
    blurb: 'Associate-level Azure cloud and AI security.',
    credential: 'Microsoft Certified: Cloud and AI Security Engineer Associate',
    issuer: 'Microsoft',
    status: 'current',
    dateModified: '2026-05-15',
    related: [
      'clarke-moyer-microsoft-sc-900-passing-guide',
      'clarke-moyer-microsoft-az-500-passing-guide',
      'clarke-moyer-cissp-certification-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-microsoft-az-500-passing-guide',
    shortName: 'AZ-500 Azure Security Technologies',
    title: 'AZ-500 Study Guide (Retired) and the SC-500 Path',
    description:
      "Clarke Moyer's AZ-500 Azure Security Technologies guide. AZ-500 retired August 31, 2026; see how the method carries to SC-500, now the closest current exam.",
    blurb: 'Retired August 2026; SC-500 is the closest current exam.',
    credential: 'Microsoft Certified: Azure Security Engineer Associate',
    issuer: 'Microsoft',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-sc-500-passing-guide',
      'clarke-moyer-microsoft-sc-900-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-microsoft-ms-900-passing-guide',
    shortName: 'MS-900 Microsoft 365 Fundamentals',
    title: 'MS-900 Study Guide (Retired) and the AB-900 Path',
    description:
      "MS-900 Microsoft 365 Fundamentals retired March 31, 2026. Clarke Moyer's study method, and why AB-900 (Copilot and Agent Administration) is the closest exam.",
    blurb: 'Retired March 2026; AB-900 is the closest current exam.',
    credential: 'Microsoft 365 Certified: Fundamentals',
    issuer: 'Microsoft',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-ai-900-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
      'clarke-moyer-mcp-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-mcp-passing-guide',
    shortName: 'Microsoft MCP',
    title: 'Microsoft MCP Certification (Retired) Guide',
    description:
      "The story of Clarke Moyer's 2009 Microsoft Certified Professional (MCP) credential, why Microsoft retired the track, and which certifications to earn now.",
    blurb: 'A retired classic, and what to take instead.',
    credential: 'Microsoft Certified Professional (MCP)',
    issuer: 'Microsoft',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-microsoft-az-900-passing-guide',
      'clarke-moyer-microsoft-ai-900-passing-guide',
      'clarke-moyer-microsoft-ms-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-cissp-certification-passing-guide',
    shortName: 'CISSP',
    title: 'How to Pass the CISSP: Study Guide and Method',
    description:
      'How Clarke Moyer passed the CISSP on the first attempt: a 4-step method, the books and training he used, practice-test sources, and when to book the exam.',
    blurb: 'The flagship security management certification.',
    credential: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC2',
    status: 'current',
    dateModified: '2026-04-28',
    related: [
      'clarke-moyer-cissp-issep-certification-passing-guide',
      'clarke-moyer-comptia-security-plus-passing-guide',
      'clarke-moyer-microsoft-sc-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-cissp-issep-certification-passing-guide',
    shortName: 'CISSP-ISSEP',
    title: 'How to Pass CISSP-ISSEP: Study Guide',
    description:
      "How to pass the CISSP-ISSEP concentration: Clarke Moyer's 4-step method, the ISSEP domains, recommended books and a test strategy from someone who passed it.",
    blurb: 'The security engineering concentration for CISSPs.',
    credential: 'Information Systems Security Engineering Professional (CISSP-ISSEP)',
    issuer: 'ISC2',
    status: 'current',
    dateModified: '2026-04-28',
    related: [
      'clarke-moyer-cissp-certification-passing-guide',
      'clarke-moyer-comptia-security-plus-passing-guide',
      'clarke-moyer-microsoft-sc-500-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-comptia-security-plus-passing-guide',
    shortName: 'CompTIA Security+',
    title: 'How to Pass Security+ SY0-701: Study Guide',
    description:
      "How to pass CompTIA Security+ SY0-701: Clarke Moyer's study method, books, practice tests and test strategy, and whether to wait for the new V8 exam.",
    blurb: 'SY0-701 now, and whether to wait for V8.',
    credential: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'current',
    dateModified: '2026-11-02',
    related: [
      'clarke-moyer-cissp-certification-passing-guide',
      'clarke-moyer-comptia-network-plus-passing-guide',
      'clarke-moyer-microsoft-sc-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-comptia-network-plus-passing-guide',
    shortName: 'CompTIA Network+',
    title: 'How to Pass CompTIA Network+: Study Guide',
    description:
      "How to pass CompTIA Network+: Clarke Moyer's study method, recommended books and practice tests, and the test strategy he used. Clarke keeps Network+ current.",
    blurb: 'Networking fundamentals from CompTIA.',
    credential: 'CompTIA Network+',
    issuer: 'CompTIA',
    status: 'current',
    dateModified: '2026-05-12',
    related: [
      'clarke-moyer-comptia-a-plus-passing-guide',
      'clarke-moyer-comptia-security-plus-passing-guide',
      'clarke-moyer-comptia-project-plus-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-comptia-a-plus-passing-guide',
    shortName: 'CompTIA A+',
    title: 'How to Pass CompTIA A+: Study Guide',
    description:
      "How to pass CompTIA A+: Clarke Moyer's study method, recommended books and practice tests, and the test strategy he used. Clarke keeps A+ current through CE.",
    blurb: 'The classic entry-level IT certification.',
    credential: 'CompTIA A+',
    issuer: 'CompTIA',
    status: 'current',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-comptia-network-plus-passing-guide',
      'clarke-moyer-comptia-security-plus-passing-guide',
      'clarke-moyer-ciw-professional-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-comptia-project-plus-passing-guide',
    shortName: 'CompTIA Project+',
    title: 'How to Pass CompTIA Project+: Study Guide',
    description:
      "How to pass CompTIA Project+: Clarke Moyer's study method, recommended books and practice tests, and the test strategy he used. Clarke keeps Project+ current.",
    blurb: 'Entry-level project management from CompTIA.',
    credential: 'CompTIA Project+',
    issuer: 'CompTIA',
    status: 'current',
    dateModified: '2026-05-12',
    related: [
      'clarke-moyer-pmp-certification-passing-guide',
      'clarke-moyer-safe-spc-certification-passing-guide',
      'clarke-moyer-itil-4-foundation-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-pmp-certification-passing-guide',
    shortName: 'PMP',
    title: 'How to Pass the PMP Exam: Study Guide',
    description:
      'How Clarke Moyer passed the PMP: his 4-step method, books, exam structure and test strategy, plus why he now recommends SAFe SPC over the PMP for most people.',
    blurb: 'The established project management credential.',
    credential: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    status: 'current',
    dateModified: '2026-04-28',
    related: [
      'clarke-moyer-safe-spc-certification-passing-guide',
      'clarke-moyer-comptia-project-plus-passing-guide',
      'clarke-moyer-itil-4-foundation-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-safe-spc-certification-passing-guide',
    shortName: 'SAFe SPC',
    title: 'How to Pass SAFe SPC: Study Guide',
    description:
      "How to earn the SAFe SPC certification: Clarke Moyer's 4-step method, the pre-course reading, what to expect in the SPC course, and how to stay current after.",
    blurb: "Clarke's top pick for Lean-Agile delivery leaders.",
    credential: 'Certified SAFe Practice Consultant (SPC)',
    issuer: 'Scaled Agile',
    status: 'current',
    dateModified: '2026-04-28',
    related: [
      'clarke-moyer-pmp-certification-passing-guide',
      'clarke-moyer-comptia-project-plus-passing-guide',
      'clarke-moyer-itil-4-foundation-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-itil-4-foundation-passing-guide',
    shortName: 'ITIL 4 Foundation',
    title: 'How to Pass ITIL 4 Foundation: Study Guide',
    description:
      "How to pass ITIL 4 Foundation: Clarke Moyer's 4-step method, what the exam covers, recommended books and official training, plus the new ITIL Version 5 exam.",
    blurb: 'IT service management basics for DoD and enterprise.',
    credential: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    status: 'current',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-safe-spc-certification-passing-guide',
      'clarke-moyer-pmp-certification-passing-guide',
      'clarke-moyer-comptia-project-plus-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-ciw-professional-passing-guide',
    shortName: 'CIW Professional',
    title: 'CIW Professional Certification Guide (Retired)',
    description:
      "Clarke Moyer's notes on the CIW Professional and CIW Database Design Specialist certifications, with history and study materials. CIW retired the title in 2011.",
    blurb: 'A retired web technology credential.',
    credential: 'CIW Professional',
    issuer: 'CIW',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-comptia-a-plus-passing-guide',
      'clarke-moyer-comptia-network-plus-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-vcp4-dcv-passing-guide',
    shortName: 'VMware VCP4-DCV',
    title: 'VMware VCP4-DCV Certification Guide (Retired)',
    description:
      "Clarke Moyer's notes on VMware VCP4-DCV, the original vSphere 4 data center virtualization credential retired in 2014, and how to learn VMware today.",
    blurb: 'The original vSphere data center credential.',
    credential: 'VMware Certified Professional 4 – Data Center Virtualization',
    issuer: 'VMware',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-vcp5-dcv-passing-guide',
      'clarke-moyer-vcp6-cma-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-vcp5-dcv-passing-guide',
    shortName: 'VMware VCP5-DCV',
    title: 'VMware VCP5-DCV Certification Guide (Retired)',
    description:
      "Clarke Moyer's VMware VCP5-DCV guide: the vSphere 5 data center topics, study materials and his 4-step method for VCP exams. VMware retired VCP5-DCV in 2017.",
    blurb: 'vSphere 5 data center virtualization.',
    credential: 'VMware Certified Professional 5 – Data Center Virtualization',
    issuer: 'VMware',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-vcp4-dcv-passing-guide',
      'clarke-moyer-vcp6-cma-passing-guide',
      'clarke-moyer-vcp-am-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-vcp6-cma-passing-guide',
    shortName: 'VMware VCP6-CMA',
    title: 'VMware VCP6-CMA Guide (Retired) and the VCF Path',
    description:
      "Clarke Moyer's VMware VCP6-CMA cloud management and automation guide. VCP6-CMA retired in 2019; see the VMware Cloud Foundation exams that replace it.",
    blurb: 'Retired in 2019; VCF automation exams replace it.',
    credential: 'VMware Certified Professional 6 – Cloud Management and Automation',
    issuer: 'VMware',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-vcp-am-passing-guide',
      'clarke-moyer-vcp5-dcv-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
    ],
  },
  {
    slug: 'clarke-moyer-vcp-am-passing-guide',
    shortName: 'VMware VCP-AM',
    title: 'VMware VCP-AM Guide (Retired) and the VKS Path',
    description:
      "Clarke Moyer's VMware VCP-AM Application Modernization guide. VCP-AM retired in 2023; the VCAP Administrator VKS 9.0 exam now covers Kubernetes on VMware.",
    blurb: 'Retired in 2023; VCAP VKS 9.0 covers it now.',
    credential: 'VMware Certified Professional – Application Modernization',
    issuer: 'VMware',
    status: 'retired',
    dateModified: '2026-10-19',
    related: [
      'clarke-moyer-vcp6-cma-passing-guide',
      'clarke-moyer-microsoft-az-900-passing-guide',
      'clarke-moyer-microsoft-ai-900-passing-guide',
    ],
  },
]

export const GUIDE_OG_IMAGE = {
  url: '/og/certifications.png',
  width: 1200,
  height: 630,
  alt: 'Clarke Moyer Certification Guides',
}

export function guidePath(slug: string): string {
  return `/${slug}/`
}

export function getGuide(slug: string): Guide {
  const guide = GUIDES.find((g) => g.slug === slug)
  if (!guide) throw new Error(`Unknown certification guide: ${slug}`)
  return guide
}

/** Page metadata for a guide: title, description, canonical, Open Graph and Twitter. */
export function guideMetadata(slug: string): Metadata {
  const guide = getGuide(slug)
  const url = guidePath(slug)
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${guide.title} | Clarke Moyer`,
      description: guide.description,
      type: 'article',
      url,
      modifiedTime: guide.dateModified,
      authors: ['Clarke Moyer'],
      images: [GUIDE_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Clarke Moyer`,
      description: guide.description,
      images: [GUIDE_OG_IMAGE.url],
    },
  }
}
