import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft AZ-900 Azure Fundamentals Passing Guide',
  description: "Clarke Moyer's guide to passing the Microsoft AZ-900 Azure Fundamentals exam — the entry point for all Azure certifications.",
  openGraph: {
    title: 'Clarke Moyer Microsoft AZ-900 Azure Fundamentals Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to passing the Microsoft AZ-900 Azure Fundamentals exam — the entry point for all Azure certifications.",
    type: 'article',
    url: '/clarke-moyer-microsoft-az-900-passing-guide/',
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

export default function AZ900GuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}AZ-900 Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft AZ-900 Azure Fundamentals Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-6">
            <p className="text-amber-800 text-sm">
              Clarke holds this certification and maintains Microsoft credentials as the platform evolves.
              The exam content and objectives are updated regularly by Microsoft — always verify current
              objectives at <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Learn</a> before purchasing study materials.
            </p>
          </div>

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">✅ Currently Recommended by Clarke</p>
            <p className="text-green-700 mt-1">Clarke recommends AZ-900 before any other Azure certification — it establishes the vocabulary and conceptual framework everything else builds on.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the AZ-900, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with someone else to finish before they complete a similar educational objective — accountability is the best study plan.</li>
              <li>Go audio-first: cloud fundamentals are conceptual and absorb well during commutes, walks, and drives.</li>
              <li>Practice tests are the core. Buy the study guide for digital test prep access. Run the questions until you&rsquo;re clearing 90%+ on mixed sets.</li>
              <li>Don&rsquo;t over-study. Test when you&rsquo;re above 80% consistently. That&rsquo;s what the retake option is for.</li>
            </ol>
          </div>

          <h2>What Is the AZ-900?</h2>
          <p>
            The <strong>Microsoft Azure Fundamentals (AZ-900)</strong> is the entry point for the entire Microsoft Azure
            certification path. It&rsquo;s a conceptual exam — no hands-on coding required — that tests your understanding
            of cloud concepts, core Azure services, security and compliance, pricing models, SLAs, and the Azure service
            lifecycle.
          </p>
          <p>
            Think of it as establishing a shared vocabulary. If you don&rsquo;t know what a subscription is, what a
            resource group does, how Azure regions relate to availability zones, or how Azure pricing models differ —
            AZ-900 fixes all of that. Every other Azure cert assumes this foundation.
          </p>

          <h2>Why Clarke Recommends It First</h2>
          <p>
            In DoD and enterprise IT environments, cloud literacy is no longer optional. But there&rsquo;s a big difference
            between &ldquo;I&rsquo;ve used Azure&rdquo; and being able to speak confidently about architecture, cost
            management, or compliance posture. AZ-900 closes that gap quickly.
          </p>
          <p>
            It&rsquo;s also short and low-risk — a half-day of exam prep over a few weeks, and you come out with a
            Microsoft-recognized credential and a solid conceptual base for every more advanced Azure cert that follows.
            AI-900 and SC-900 both become easier after AZ-900.
          </p>

          <h2>Free Resource: Microsoft Learn</h2>
          <p>
            Microsoft&rsquo;s free AZ-900 learning path is the best single study resource available and should be your
            first stop. It maps directly to exam objectives and is genuinely well-produced.
          </p>
          <p>
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Microsoft Learn — Azure Fundamentals (AZ-900) ↗
            </a>
          </p>

          <h2>Books / Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AZ-900 Azure Fundamentals Study Guide <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The practice tests that come with this guide are the core of the study method. Run all questions,
            rerun wrong ones until zero, then simulate full exams until you&rsquo;re clearing 90%+.
          </p>
          <p className="not-prose">
            {amzn('B0C8JKH9KM', 'Microsoft Azure Fundamentals AZ-900 Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AZ-900 Practice Tests
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Additional practice test resources to supplement the study guide — more question variety means better exam readiness.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=AZ-900+Azure+Fundamentals+practice+tests&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search Amazon: AZ-900 Azure Fundamentals Practice Tests ↗
            </a>
          </p>

          <h2>Exam Coverage</h2>
          <ul>
            <li><strong>Cloud concepts</strong> — What cloud is, service models (IaaS, PaaS, SaaS), shared responsibility</li>
            <li><strong>Azure architecture</strong> — Regions, availability zones, resource groups, subscriptions, management groups</li>
            <li><strong>Azure services</strong> — Compute, networking, storage, databases at a conceptual level</li>
            <li><strong>Security and compliance</strong> — Azure AD basics, Zero Trust, compliance offerings, Azure Policy</li>
            <li><strong>Pricing and SLAs</strong> — Cost management tools, pricing calculator, service lifecycle</li>
          </ul>

          <h2>Test Methodology</h2>
          <ol>
            <li>Complete the Microsoft Learn AZ-900 path first.</li>
            <li>Buy the study guide for digital practice test access.</li>
            <li>Run all questions once, marking every wrong answer.</li>
            <li>Re-run only wrong questions until you score zero wrong.</li>
            <li>Mix the full question bank and simulate real exams until you clear 90%+.</li>
            <li>Schedule the exam when you&rsquo;re consistently over 80% — don&rsquo;t keep drilling for perfect.</li>
          </ol>

          <h2>Where It Fits</h2>
          <p>
            AZ-900 is the right first Azure cert for anyone — DoD contractors, enterprise IT professionals, security
            practitioners, or managers who want to speak credibly about cloud. After AZ-900, the natural next steps
            are AI-900 (AI fundamentals), SC-900 (security fundamentals), or moving up the Azure Administrator (AZ-104)
            or Solutions Architect (AZ-305) path.
          </p>

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
