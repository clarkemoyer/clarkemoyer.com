import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer ITIL 4 Foundation Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the ITIL 4 Foundation exam — the entry-level IT service management certification required for certain DoD and enterprise contracts.',
  openGraph: {
    title: 'Clarke Moyer ITIL 4 Foundation Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the ITIL 4 Foundation exam — the entry-level IT service management certification required for certain DoD and enterprise contracts.',
    type: 'article',
    url: '/clarke-moyer-itil-4-foundation-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';
function amzn(url: string, label: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function ITIL4FoundationGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / ITIL 4 Foundation Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer ITIL 4 Foundation Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* Neutral info callout */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <p className="text-blue-900 text-base leading-relaxed">
              <strong>ℹ️ A Note From Clarke:</strong> I recommend this cert specifically for those working on contracts
              that require it. ITIL 4 Foundation is a good baseline for IT service management vocabulary and process
              understanding, but it&rsquo;s not a certification I actively pursue beyond the foundation level. If
              your contract or employer requires it, earn it — it&rsquo;s approachable and the exam is straightforward
              with the right prep. Otherwise, prioritize credentials with more career leverage.
            </p>
          </div>

          {/* BLUF */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass ITIL 4 Foundation, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.</li>
              <li>Go audio-first: study while walking, driving, or doing household tasks. ITIL vocabulary is perfectly suited to passive audio absorption.</li>
              <li>Practice tests are the core. Buy the book primarily for access to the digital test bank — that&rsquo;s the real product.</li>
              <li>Don&rsquo;t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take is your safety net.</li>
            </ol>
          </div>

          <p>
            ITIL 4 Foundation is the entry point to the ITIL (Information Technology Infrastructure Library)
            certification scheme. It covers IT service management concepts, the ITIL service value system,
            the four dimensions model, and the guiding principles that underpin modern ITSM practice.
          </p>
          <p>
            It&rsquo;s a vendor-neutral credential managed by{' '}
            <a href="https://www.axelos.com/certifications/itil-service-management/itil-4-foundation" target="_blank" rel="noopener noreferrer">
              Axelos/PeopleCert
            </a>
            {' '}and is frequently cited in DoD and enterprise IT service contracts as a required baseline.
            The exam itself is accessible — 40 questions, 60 minutes, 65% to pass. With focused prep,
            most people clear it in 2–4 weeks of part-time study.
          </p>

          <h2>What ITIL 4 Foundation Covers</h2>
          <ul>
            <li><strong>Service Management Concepts</strong> — value, outcomes, costs, risks, utility, and warranty</li>
            <li><strong>The ITIL Service Value System (SVS)</strong> — the guiding principles, governance, service value chain, practices, and continual improvement</li>
            <li><strong>The Four Dimensions Model</strong> — Organizations &amp; People, Information &amp; Technology, Partners &amp; Suppliers, Value Streams &amp; Processes</li>
            <li><strong>ITIL Guiding Principles</strong> — focus on value, start where you are, progress iteratively, collaborate, think holistically, keep it simple, optimize and automate</li>
            <li><strong>Key ITIL Practices</strong> — incident management, problem management, change enablement, service desk, service level management, and more</li>
          </ul>

          <h2>Study Method</h2>

          <h3>1. Create Competition</h3>
          <p>
            Find someone — a colleague, study buddy, anyone — and make it a race. Announce it publicly.
            The social accountability is more powerful than any study schedule. ITIL Foundation is well-scoped
            enough that a friendly competition can realistically conclude in under a month.
          </p>

          <h3>2. Audio First</h3>
          <p>
            ITIL is vocabulary-dense in a very specific way — lots of defined terms, principles, and practice
            names that need to feel familiar before test day. This is ideal audio material. Listen during
            commutes, walks, or workouts. By the time you sit down for practice tests, the terminology
            should already feel like background knowledge.
          </p>

          <h3>3. Practice Tests Are the Core</h3>
          <p>
            Buy the official study guide primarily for the digital practice test access. The online test bank
            is the real product. The exam questions are scenario-based — you need test reps, not just reading.
          </p>

          <h3>4. Don&rsquo;t Over-Study</h3>
          <p>
            At 40 questions with a 65% pass mark, this is one of the more forgiving exams in enterprise IT.
            Run all practice questions once, rerun wrong ones to zero, then do timed full-length mocks until
            you hit 90%+. Schedule your test at 80%. The bar is approachable — don&rsquo;t let it become a
            months-long project.
          </p>

          <h2>Books / Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            ITIL 4 Foundation Official Guide (Axelos){' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The official Axelos publication. This is the authoritative source — the exam is written against
            this material. Buy it for the practice test access included digitally.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=ITIL+4+Foundation+official+guide+Axelos&tag=${AMZN_TAG}`, 'ITIL 4 Foundation Official Guide (Axelos)')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            ITIL 4 Foundation Practice Exam Questions
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Dedicated practice question banks let you drill scenarios beyond what the official guide includes.
            Useful for the final stretch before test day.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=ITIL+4+Foundation+practice+exam+questions&tag=${AMZN_TAG}`, 'ITIL 4 Foundation Practice Exam Questions')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            ITIL 4 Foundation Audiobook
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            For the audio-first method. ITIL&rsquo;s guiding principles and practice definitions are
            well-suited to audio — listen repeatedly until the vocabulary is automatic.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=ITIL+4+Foundation+audiobook&tag=${AMZN_TAG}`, 'ITIL 4 Foundation Audiobook')}
          </p>

          <h2>Official Training &amp; Exam</h2>
          <p>
            ITIL 4 Foundation is owned by Axelos and administered by PeopleCert. Official training,
            exam booking, and accredited course listings are available at:{' '}
            <a href="https://www.axelos.com/certifications/itil-service-management/itil-4-foundation" target="_blank" rel="noopener noreferrer">
              axelos.com — ITIL 4 Foundation
            </a>
          </p>
          <p>
            The exam can be taken online (proctored) or at a test center. Online proctoring through PeopleCert
            is convenient and widely available. The exam is 40 multiple-choice questions, 60 minutes,
            passing score 26/40 (65%).
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
