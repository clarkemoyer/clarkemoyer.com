import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft SC-500 Security Passing Guide',
  description: "Clarke Moyer's guide to the Microsoft SC-500 security certification track — Azure security for enterprise and DoD environments.",
  openGraph: {
    title: 'Clarke Moyer Microsoft SC-500 Security Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the Microsoft SC-500 security certification track — Azure security for enterprise and DoD environments.",
    type: 'article',
    url: '/clarke-moyer-microsoft-sc-500-passing-guide/',
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

export default function SC500GuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}SC-500 Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft Security Certification Track (SC Series) Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">✅ Currently Recommended by Clarke</p>
            <p className="text-green-700 mt-1">Clarke has worked through the Microsoft SC security certification track and recommends it for anyone in enterprise or DoD security roles working in Azure environments.</p>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
            <p className="text-amber-800 font-semibold">📋 Note on SC-500</p>
            <p className="text-amber-700 mt-1 text-sm">
              As of 2024, Microsoft does not offer an exam numbered SC-500. The Microsoft Security certification
              family uses SC-900 (Fundamentals), SC-200 (Security Operations Analyst), SC-300 (Identity and
              Access Administrator), SC-400 (Information Protection and Compliance Administrator), and SC-100
              (Cybersecurity Architect Expert). Clarke has worked on the SC security track including SC-900-level
              content — this page covers the full SC series and how it fits together.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: The SC Series approach</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Start with SC-900 to get the vocabulary right — it maps cleanly to what CISSP holders already know in a Microsoft-specific context.</li>
              <li>Go audio-first where you can. Security concepts at the fundamentals level absorb well on commutes and walks.</li>
              <li>Practice tests are the core — buy the study guide for digital test prep access, run questions until zero wrong, then simulate until 90%+.</li>
              <li>Don&rsquo;t over-study. Test at 80%, use the retake as your safety net.</li>
            </ol>
          </div>

          <h2>The Microsoft SC Security Certification Family</h2>
          <p>
            Microsoft&rsquo;s SC series covers security, compliance, and identity (SCI) for the Azure platform.
            Unlike vendor-neutral security certs (CISSP, Security+), the SC series is Azure-specific — these exams
            test your ability to use and configure Microsoft&rsquo;s security tooling, not just understand security
            principles.
          </p>

          <h3>SC-900 — Security, Compliance, and Identity Fundamentals</h3>
          <p>
            The entry point. Covers fundamental security, compliance, and identity concepts in the Microsoft ecosystem:
            Zero Trust, shared responsibility, Azure AD / Entra ID, Microsoft Defender, Purview, and Sentinel at a
            conceptual level. No hands-on required. Clarke recommends this as the first SC cert, especially for
            CISSP holders who want to map their existing knowledge to Azure.
          </p>

          <h3>SC-200 — Microsoft Security Operations Analyst</h3>
          <p>
            The hands-on security operations cert. Focuses on threat detection, investigation, and response using
            Microsoft Sentinel, Defender for Cloud, and Microsoft 365 Defender. This is the natural next step after
            SC-900 for anyone in a SOC, incident response, or security engineering role.
          </p>

          <h3>SC-300 — Microsoft Identity and Access Administrator</h3>
          <p>
            Covers identity and access management using Azure AD / Microsoft Entra: implementing MFA, conditional
            access, privileged identity management, and identity governance. Highly relevant for IAM practitioners
            and ZTA (Zero Trust Architecture) implementation work.
          </p>

          <h3>SC-400 — Microsoft Information Protection and Compliance Administrator</h3>
          <p>
            Focuses on data governance, information protection, and compliance using Microsoft Purview. Relevant for
            data classification, DLP policy, eDiscovery, and compliance frameworks — important in regulated
            environments like DoD and federal contracting.
          </p>

          <h3>SC-100 — Microsoft Cybersecurity Architect (Expert)</h3>
          <p>
            The expert-level capstone. Requires passing SC-200, SC-300, or SC-400 first. Covers designing a Zero
            Trust strategy across Microsoft platforms, cloud security posture, and hybrid/multi-cloud architecture.
            The Microsoft equivalent of a senior security architect credential.
          </p>

          <h2>Why It Complements CISSP</h2>
          <p>
            CISSP gives you the framework — security principles, risk management, cryptography, architecture. The
            SC series gives you the implementation layer on Microsoft&rsquo;s platform. A CISSP-holder with SC-200
            can not only talk about incident response theory but also actually configure Sentinel playbooks and
            Defender alerts. In a DoD or federal environment where Microsoft 365 and Azure are the standard stack,
            that combination is genuinely powerful.
          </p>
          <p>
            Start with SC-900 to map your existing knowledge, then pick SC-200 (SOC/IR track) or SC-300 (IAM track)
            based on your role.
          </p>

          <h2>Free Resource: Microsoft Learn</h2>
          <p>
            Microsoft&rsquo;s SC learning paths are free and excellent. Start with the SC-900 path, then branch to
            whichever specialization fits your role.
          </p>
          <p>
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Microsoft Learn — SC-900 Security, Compliance, and Identity Fundamentals ↗
            </a>
          </p>

          <h2>Books / Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            SC-900 Security Fundamentals Study Guide <span className="text-green-700 text-base font-semibold ml-2">← Start Here</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The practice tests in this guide are the foundation of the study method. Run all questions, rerun wrong
            ones until zero, then simulate full exams until 90%+.
          </p>
          <p className="not-prose">
            {amzn('B0BVFMY7ZH', 'Microsoft SC-900 Security Fundamentals Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            SC-200 Security Operations Analyst Study Guide
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            After SC-900, SC-200 is the natural next step for SOC and incident response practitioners.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=Microsoft+SC-200+Security+Operations+Analyst+study+guide&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search Amazon: Microsoft SC-200 Security Operations Analyst Study Guide ↗
            </a>
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Microsoft Azure Security — Audiobook Options
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Audio-first is the method — great for commutes and walks. Security fundamentals translate well to audio.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=Microsoft+Azure+security+certification+audiobook&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search Amazon: Microsoft Azure Security Certification Audiobook ↗
            </a>
          </p>

          <h2>Recommended SC Series Sequence</h2>
          <ol>
            <li><strong>SC-900</strong> — Fundamentals (start here, regardless of role)</li>
            <li><strong>SC-200</strong> — Security Operations Analyst (SOC, IR, threat detection)</li>
            <li><strong>SC-300</strong> — Identity and Access Administrator (IAM, ZTA, Entra ID)</li>
            <li><strong>SC-400</strong> — Information Protection (data governance, compliance)</li>
            <li><strong>SC-100</strong> — Cybersecurity Architect Expert (capstone, requires one of the above)</li>
          </ol>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
