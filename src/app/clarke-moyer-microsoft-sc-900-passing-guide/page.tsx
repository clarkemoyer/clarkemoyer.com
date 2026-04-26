import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft SC-900 Security Fundamentals Passing Guide',
  description: "Clarke Moyer's guide to passing the Microsoft SC-900 Security, Compliance, and Identity Fundamentals exam — Azure security entry point for enterprise and DoD.",
  openGraph: {
    title: 'Clarke Moyer Microsoft SC-900 Security Fundamentals Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to passing the Microsoft SC-900 Security, Compliance, and Identity Fundamentals exam — Azure security entry point for enterprise and DoD.",
    type: 'article',
    url: '/clarke-moyer-microsoft-sc-900-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';
function amzn(asin: string, label: string) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function SC900GuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}SC-900 Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft SC-900 Security Fundamentals Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">✅ Currently Recommended by Clarke</p>
            <p className="text-green-700 mt-1">Clarke recommends SC-900 as the entry point to the Microsoft security certification track — especially valuable for CISSP holders looking to map their knowledge to the Azure platform.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the SC-900, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with someone else to finish before they complete a similar educational objective — accountability is the best accelerator.</li>
              <li>Go audio-first: security fundamentals concepts are highly listenable. Commutes, walks, drives — use them.</li>
              <li>Practice tests are the core. Buy the study guide for digital test prep access, then run questions until you&rsquo;re clearing 90%+ on mixed sets.</li>
              <li>Don&rsquo;t over-study. When you&rsquo;re above 80% consistently, schedule the exam. The retake is your insurance policy.</li>
            </ol>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
            <p className="font-bold text-amber-900">📋 A Note on Clarke&rsquo;s Version</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke completed an earlier version of this certification when it was more heavily focused on
              Azure and Microsoft 365 security fundamentals. The exam has since evolved. If you&rsquo;re deciding
              where to start in the Microsoft certification track, Clarke now recommends beginning with the{' '}
              <Link href="/clarke-moyer-microsoft-ai-900-passing-guide" className="underline font-semibold">AI-900 (Azure AI Fundamentals)</Link>{' '}
              as it better reflects where enterprise and DoD environments are heading. SC-900 remains a solid
              credential for compliance and identity fundamentals.
            </p>
          </div>

          <h2>What Is the SC-900?</h2>
          <p>
            The <strong>Microsoft Security, Compliance, and Identity Fundamentals (SC-900)</strong> is the entry-level
            exam for Microsoft&rsquo;s security certification track. It covers foundational concepts across three
            domains: security (Zero Trust, shared responsibility, defense-in-depth), compliance (regulatory frameworks,
            Microsoft Purview), and identity (authentication, authorization, Azure Active Directory / Microsoft Entra ID).
          </p>
          <p>
            No hands-on configuration is required — SC-900 is a conceptual exam. It tests whether you understand how
            Microsoft&rsquo;s security, compliance, and identity products fit together and why they matter in an
            enterprise environment.
          </p>

          <h2>Why It Complements CISSP</h2>
          <p>
            If you hold a CISSP, SC-900 is surprisingly fast to complete — the overlap with CISSP domain knowledge is
            significant. What SC-900 adds is the Microsoft-specific implementation layer: where does Zero Trust show up
            in Azure AD? What is Microsoft Sentinel vs. Defender for Cloud vs. Defender XDR? How does Microsoft Purview
            map to a DLP and compliance program?
          </p>
          <p>
            For DoD and enterprise practitioners working in Microsoft 365 or Azure environments, SC-900 provides the
            vocabulary to operate credibly in those platforms at a policy and architecture level — before you go deeper
            with SC-200 (Security Operations) or SC-300 (Identity and Access).
          </p>

          <h2>Exam Coverage</h2>
          <ul>
            <li><strong>Security concepts</strong> — Zero Trust, shared responsibility model, defense-in-depth, common threat types</li>
            <li><strong>Microsoft Entra / Azure AD</strong> — Authentication, authorization, MFA, conditional access, identity governance, privileged identity management</li>
            <li><strong>Microsoft security solutions</strong> — Defender for Cloud, Sentinel, Defender XDR, Microsoft 365 Defender</li>
            <li><strong>Microsoft compliance solutions</strong> — Purview, compliance manager, information protection, eDiscovery, audit</li>
          </ul>

          <h2>Free Resource: Microsoft Learn</h2>
          <p>
            The SC-900 free learning path on Microsoft Learn is well-structured and maps directly to exam objectives.
            This is the right first resource — start here before spending money on anything else.
          </p>
          <p>
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Microsoft Learn — SC-900 Security, Compliance, and Identity Fundamentals ↗
            </a>
          </p>

          <h2>Books / Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            SC-900 Security Fundamentals Study Guide <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The digital practice tests bundled with this guide are the engine of the study method. Run all questions,
            rerun every wrong answer until zero wrong, then run mixed full-length simulations until you clear 90%+.
          </p>
          <p className="not-prose">
            {amzn('B0BVFMY7ZH', 'Microsoft SC-900 Security Fundamentals Study Guide')}
          </p>

          <h2>Test Methodology</h2>
          <ol>
            <li>Start with the free Microsoft Learn SC-900 path — complete it end to end.</li>
            <li>Buy the study guide for digital practice test access.</li>
            <li>Run all questions once, flagging every wrong answer.</li>
            <li>Re-run only wrong questions until you hit zero wrong.</li>
            <li>Simulate full mixed exams until you&rsquo;re consistently clearing 90%+.</li>
            <li>When you break 80% on real-test mixes, schedule the exam and stop drilling.</li>
          </ol>

          <h2>Where SC-900 Fits in the SC Series</h2>
          <p>
            SC-900 is the recommended first step before any of the associate-level Microsoft security exams. After
            SC-900, the natural paths are:
          </p>
          <ul>
            <li><strong>SC-200</strong> — Security Operations Analyst (SOC, threat detection, Sentinel)</li>
            <li><strong>SC-300</strong> — Identity and Access Administrator (Entra ID, IAM, ZTA)</li>
            <li><strong>SC-400</strong> — Information Protection and Compliance Administrator (Purview, DLP, eDiscovery)</li>
          </ul>
          <p>
            SC-100 (Cybersecurity Architect Expert) sits at the top as the capstone, requiring one of the above
            as a prerequisite.
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
