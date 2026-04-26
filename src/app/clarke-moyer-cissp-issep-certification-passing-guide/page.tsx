import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer CISSP-ISSEP Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the CISSP-ISSEP (Information Systems Security Engineering Professional) concentration exam.',
  openGraph: {
    title: 'Clarke Moyer CISSP-ISSEP Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the CISSP-ISSEP (Information Systems Security Engineering Professional) concentration exam.',
    type: 'article',
    url: '/clarke-moyer-cissp-issep-certification-passing-guide/',
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
function amznSearch(searchUrl: string, label: string) {
  return (
    <a href={searchUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function CISSPISSEPGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / CISSP-ISSEP Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer CISSP-ISSEP Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8 not-prose">
            <p className="text-yellow-900 font-semibold text-sm">⚠️ Prerequisites: You must already hold an active CISSP before pursuing the ISSEP concentration. This is not a standalone certification — it requires an existing CISSP in good standing.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the CISSP-ISSEP, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with someone to complete your ISSEP (or another certification) before they complete a similar educational goal. Accountability and competition work — even if you lose the race, you both win.</li>
              <li>Audio-first. The ISSEP domains map tightly to the Systems Security Engineering (SSE) process — listen while walking, driving, or doing tasks. Absorb the framework before you start grinding practice questions.</li>
              <li>Practice tests are the mechanism. ISSEP-specific test banks are slim, but work what you can find. Run through everything once, then re-run only your wrong answers until zero remain. Then simulate full test conditions until you&rsquo;re consistently above 90%.</li>
              <li>Don&rsquo;t over-study. When you&rsquo;re over 80% on official prep, schedule and sit. The CISSP you already hold is strong context for this exam — trust it.</li>
            </ol>
          </div>

          <p>
            The CISSP-ISSEP concentration is awarded by ISC2 to active CISSP holders who demonstrate mastery of
            Systems Security Engineering. If you work in defense, government, or any environment where security
            must be engineered into systems from the ground up — this credential is a natural next step after
            your CISSP.
          </p>

          <p>
            I earned my ISSEP on <strong>November 6, 2019</strong> (License: 393607). By the time I sat for it,
            the CISSP framework was already second nature. The ISSEP is narrower in scope but deeper in its focus
            on systems engineering — the SSE-CMM, the RMF, and integrating security into the full acquisition
            and development lifecycle.
          </p>

          <h2>Timeline &amp; Context</h2>
          <p>
            I&rsquo;ve found the most sustainable way to stay sharp is to set one educational objective per year and
            make it public — usually as a friendly competition. The ISSEP came out of a year where I needed to
            validate my Systems Security Engineering depth to align with IASAE III requirements. It was a logical
            progression from my CISSP and mapped directly to work I was already doing.
          </p>
          <p>
            The ISSEP doesn&rsquo;t require a new study regimen from scratch. If you&rsquo;re already a working CISSP
            in a security engineering role, you know more than you think. The exam rewards applied knowledge
            more than memorization.
          </p>

          <h2>Books / Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            ISC2 CISSP-ISSEP Official Study Guide
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The official ISC2 study guide for the ISSEP concentration. Covers the ISSEP CBK domains: Systems
            Security Engineering, Certification and Accreditation (C&amp;A)/RMF, Technical Management, and U.S.
            Government Information Assurance Regulations. This is your primary reference for the concentration
            material beyond the CISSP baseline.
          </p>
          <p className="not-prose">
            {amzn('1119458935', 'ISC2 CISSP-ISSEP Official Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            CISSP-ISSEP Practice Tests{' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Find</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Dedicated ISSEP practice test books are limited compared to CISSP. Search for what&rsquo;s current —
            the landscape changes and newer resources appear regularly.
          </p>
          <p className="not-prose">
            {amznSearch('https://www.amazon.com/s?k=CISSP-ISSEP+practice+tests&tag=clarkemoyer-20', 'Search: CISSP-ISSEP Practice Tests on Amazon')}
          </p>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 Use Your CISSP Materials Too</h4>
            <p className="text-blue-800 text-sm mb-3">
              The CISSP All-in-One Exam Guide (and its audiobook) contain significant ISSEP-relevant content.
              If you&rsquo;ve already worked through that material for your CISSP, you have a head start.
              See the <Link href="/clarke-moyer-cissp-certification-passing-guide" className="underline">CISSP Certification Guide</Link> for those resources.
            </p>
          </div>

          <h2>The ISSEP Domains</h2>
          <p>The ISSEP exam covers four primary domains:</p>
          <ol>
            <li><strong>Systems Security Engineering (SSE)</strong> — The core. SSE process, SSE-CMM, applying security across the system lifecycle.</li>
            <li><strong>Certification &amp; Accreditation / RMF</strong> — The Risk Management Framework, C&amp;A processes, NIST SP 800-series integration.</li>
            <li><strong>Technical Management</strong> — Engineering management, project management for security engineering efforts.</li>
            <li><strong>U.S. Government Information Assurance Regulations</strong> — FISMA, DIACAP/RMF history, relevant legislation.</li>
          </ol>
          <p>
            If you work in DoD or federal IA, domains 2 and 4 will be very familiar. Domain 1 is where most
            candidates need to focus their study time.
          </p>

          <h2>Test Strategy</h2>
          <p>
            The same method that works for the CISSP works here — adapted for the ISSEP&rsquo;s narrower scope.
            Practice test banks are smaller, so you&rsquo;ll exhaust them faster. That&rsquo;s fine — run through
            everything, isolate your wrong answers, and re-run until clean. Then simulate full exams until
            you&rsquo;re consistently over 90%.
          </p>
          <p>
            The ISSEP is a concentration exam — it assumes CISSP-level knowledge as a baseline. Don&rsquo;t
            re-study CISSP fundamentals. Focus on the delta: the engineering process, RMF depth, and
            government IA frameworks.
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
