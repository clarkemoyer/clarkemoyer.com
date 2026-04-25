import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft MS-900 Microsoft 365 Fundamentals Passing Guide',
  description: "Clarke Moyer's guide to passing the Microsoft MS-900 Microsoft 365 Fundamentals exam — the entry point for the Microsoft 365 certification track.",
  openGraph: {
    title: 'Clarke Moyer Microsoft MS-900 Microsoft 365 Fundamentals Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to passing the Microsoft MS-900 Microsoft 365 Fundamentals exam.",
    type: 'article',
    url: '/clarke-moyer-microsoft-ms-900-passing-guide/',
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

function amznSearch(query: string, label: string) {
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function MS900GuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / MS-900 Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft MS-900 Microsoft 365 Fundamentals Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8">
            <p className="font-bold text-green-900">✅ Currently Recommended by Clarke</p>
            <p className="text-green-800 text-sm mt-1">
              The MS-900 is a solid entry-level credential for anyone working in or transitioning into a
              Microsoft 365 environment — cloud productivity, collaboration, security, and compliance concepts.
              It&rsquo;s particularly useful for DoD contractors and enterprise IT professionals where M365
              is the standard productivity platform. Clarke holds this cert and recommends it as an accessible
              starting point for the Microsoft certification track.
            </p>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the MS-900, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with another person to complete the MS-900 before they complete a similar educational objective. Accountability accelerates everything.</li>
              <li>Microsoft Learn&rsquo;s free MS-900 learning path is excellent — do it entirely on your phone. It&rsquo;s short enough to complete in a weekend of commute and downtime.</li>
              <li>Buy a practice test resource primarily for the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then restart with real exam-length mixed sets until 90%+.</li>
              <li>Don&rsquo;t over-study. This is a fundamentals exam. Test when you&rsquo;re consistently over 80% on practice. The re-take is your safety net.</li>
            </ol>
          </div>

          <h2>What Is the MS-900?</h2>
          <p>
            The Microsoft MS-900 (Microsoft 365 Fundamentals) certification validates foundational knowledge
            of Microsoft 365 cloud services, including:
          </p>
          <ul>
            <li>Cloud concepts and Microsoft 365 productivity solutions</li>
            <li>Microsoft 365 security, compliance, privacy, and trust</li>
            <li>Microsoft 365 pricing, licensing, and support</li>
          </ul>
          <p>
            It&rsquo;s the entry point for the Microsoft 365 certification track, equivalent to AZ-900 for the
            Azure track. Both are worth having if you work in a Microsoft-heavy enterprise or DoD environment.
          </p>

          <div className="not-prose bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8">
            <h3 className="font-bold text-yellow-900 mb-1">📋 Recommended Path</h3>
            <p className="text-yellow-800 text-sm">
              Consider pairing MS-900 with{' '}
              <Link href="/clarke-moyer-microsoft-az-900-passing-guide" className="underline">AZ-900</Link> and{' '}
              <Link href="/clarke-moyer-microsoft-ai-900-passing-guide" className="underline">AI-900</Link> —
              together they cover the full Microsoft cloud landscape: productivity, infrastructure, and AI.
              All three are approachable fundamentals-level exams.
            </p>
          </div>

          <h2>Free Resource: Microsoft Learn</h2>
          <p>
            Microsoft&rsquo;s free MS-900 learning path maps directly to exam objectives and is the best
            starting point.{' '}
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/microsoft-365-fundamentals/" target="_blank" rel="noopener noreferrer">
              Microsoft MS-900 Learning Path ↗
            </a>
          </p>

          <h2>Books / Study Materials</h2>

          <h3 className="not-prose mt-6 text-xl font-bold text-gray-900">
            MS-900 Study Guide <span className="text-green-700 text-base font-semibold ml-2">← Get for the Practice Tests</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Buy primarily to access the digital practice test bank. The online test portal is the real value.
          </p>
          <p className="not-prose">
            {amznSearch('Microsoft MS-900 Microsoft 365 Fundamentals study guide exam prep', 'Microsoft MS-900 Microsoft 365 Fundamentals Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">Audio Study Content</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Reinforce concepts while commuting, walking, or at the gym.
          </p>
          <p className="not-prose">
            {amznSearch('Microsoft 365 Fundamentals MS-900 audiobook exam prep', 'MS-900 Audio Study Content')}
          </p>

          <h2>Test Methodology</h2>
          <p>Clarke&rsquo;s practice test approach for all Microsoft fundamentals exams:</p>
          <ol>
            <li><strong>Microsoft Learn first</strong> — complete the entire free path. It&rsquo;s short and directly exam-mapped.</li>
            <li><strong>All questions once</strong> — work through every practice question in your test bank.</li>
            <li><strong>Wrong answers only</strong> — loop through only missed questions until zero wrong answers remain.</li>
            <li><strong>Mock exam sets</strong> — run full-length, timed, mixed-domain practice exams until consistently over 90%.</li>
            <li><strong>Test on schedule</strong> — don&rsquo;t delay once you hit 80%+ consistently. Re-takes are cheap; over-studying is time you won&rsquo;t get back.</li>
          </ol>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you.{' '}
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
