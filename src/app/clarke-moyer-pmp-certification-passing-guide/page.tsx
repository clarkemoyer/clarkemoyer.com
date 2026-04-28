import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Clarke Moyer PMP Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the PMP certification exam — study materials, practice tests, and the method that works.',
  openGraph: {
    title: 'Clarke Moyer PMP Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the PMP certification exam — study materials, practice tests, and the method that works.',
    type: 'article',
    url: '/clarke-moyer-pmp-certification-passing-guide/',
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

export default function PMPGuidePage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Certification Guides', url: '/certification-guides/' },
        { name: 'PMP Guide', url: '/clarke-moyer-pmp-certification-passing-guide/' },
      ])} />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / PMP Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer PMP Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 not-prose">
            <h2 className="text-xl font-bold text-red-900 mb-2">⚠️ A Note From Clarke</h2>
            <p className="text-red-800">
              I no longer recommend pursuing the PMP as a primary project management certification.
              I recommend going directly to the{' '}
              <Link href="/clarke-moyer-safe-spc-certification-passing-guide" className="underline font-semibold">SAFe SPC certification</Link>{' '}
              instead — it reflects how modern software delivery and enterprise Lean-Agile transformation
              actually work, and carries more weight in current DoD and tech environments.
              This guide remains here for those already committed to the PMP path.
            </p>
            <div className="mt-4 pt-4 border-t border-red-200">
              <p className="font-bold text-amber-900">📋 About Clarke&rsquo;s PMP Journey</p>
              <p className="text-amber-800 text-sm mt-1">
                Clarke obtained the PMP in 2012 under an earlier version of the PMBOK and has renewed and
                maintained it since. The study materials linked here reflect the current exam format, but the
                core project management principles that Clarke tested on have remained consistent through
                multiple PMBOK versions. Longevity in certification maintenance is itself a professional
                signal — LinkedIn shows the <em>original certification date</em>, not the renewal date, so a
                2012 PMP that&rsquo;s still active today represents 10+ years of maintained professional standing,
                not a one-time achievement.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the PMP, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with someone to complete your PMP before they finish a comparable educational goal. The competition keeps you accountable and moving.</li>
              <li>Audio-first. Rita Mulcahy&rsquo;s audiobook is your commute, your gym, your background. Get the concepts in your ears before you ever open the full text. PM concepts told out loud make more sense than reading tables of process groups.</li>
              <li>Buy Rita&rsquo;s book primarily for the digital practice tests. The book itself is a bonus. Run through all 1,000+ practice questions once, then re-run only the ones you got wrong until zero remain. Then simulate full 200-question exams with mixed domains until you&rsquo;re consistently above 90%.</li>
              <li>Don&rsquo;t over-study. When you&rsquo;re over 80% on official prep, schedule and sit. The re-take voucher is the safety net — that&rsquo;s what it&rsquo;s there for.</li>
            </ol>
          </div>

<div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8 not-prose">
            <p className="text-yellow-900 font-semibold text-sm">📋 Eligibility Requirements: Before you can sit for the PMP, PMI requires <strong>36 months of experience leading projects</strong> (60 months if you don&rsquo;t have a four-year degree) plus <strong>35 contact hours of project management education</strong>. Verify your eligibility at <a href="https://www.pmi.org/certifications/project-management-pmp" target="_blank" rel="noopener noreferrer" className="underline">pmi.org</a> before purchasing study materials.</p>
          </div>

          <p>
            The PMP is PMI&rsquo;s flagship credential and arguably the most recognized project management
            certification in the world. If you work in a management track — especially in DoD contracting or
            federal work — it will come up in job requirements constantly. I earned mine on{' '}
            <strong>December 22, 2012</strong> (License: 1563680).
          </p>

          <p>
            The exam has evolved since then — it now includes more agile and hybrid content alongside predictive
            project management — but the core study approach hasn&rsquo;t changed. Rita Mulcahy&rsquo;s method
            still works. Practice tests are still the mechanism.
          </p>

          <h2>Timeline &amp; Context</h2>
          <p>
            I sat for the PMP as part of an annual educational objective tied to my performance review cycle.
            The accountability structure matters: I set the goal publicly, found someone else working toward
            a comparable credential, and turned it into a race. The result was a first-attempt pass without
            burnout or over-study.
          </p>
          <p>
            The PMP is a broad exam. It covers all five process groups (Initiating, Planning, Executing,
            Monitoring &amp; Controlling, Closing) and ten knowledge areas across predictive, agile, and
            hybrid approaches. That breadth is why practice tests matter more than any single study
            guide — you need pattern recognition across the full domain landscape, not just chapter recall.
          </p>

          <h2>Books / Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Rita Mulcahy&rsquo;s PMP Exam Prep{' '}
            <span className="text-green-700 text-base font-semibold ml-2">← The Classic</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            This is THE book. Rita Mulcahy built the standard for PMP prep. Even if you pick up an edition
            that&rsquo;s a revision or two behind, the methodology holds. Buy it primarily for the digital
            practice tests that come with it — those are the actual value. The book itself is the bonus.
          </p>
          <p className="not-prose">
            {amzn('1628255005', 'Rita Mulcahy PMP Exam Prep')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Rita Mulcahy PMP Exam Prep — Audiobook{' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Audio-First</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            This is where your studying actually happens. Commutes, walks, gym sessions — load this on
            your phone and run it constantly. PM process groups and knowledge areas make more sense
            when you hear them explained conversationally. The audiobook primes your brain before
            you grind practice questions.
          </p>
          <p className="not-prose">
            {amzn('B09WJMN9L3', 'Rita Mulcahy PMP Exam Prep — Audiobook')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            PMBOK Guide, 7th Edition
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            PMI&rsquo;s official guide. The 7th edition shifted from a process-based framework to a
            principles-based one — it&rsquo;s less of a reference manual and more of a philosophy guide
            now. Useful for context, but Rita&rsquo;s prep book is more exam-relevant. PMI members
            get the PMBOK as part of membership, which is worth checking before purchasing.
          </p>
          <p className="not-prose">
            {amzn('B09X4PMPT8', 'PMBOK Guide, 7th Edition')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            PMP Exam Prep Flashcards (Rita Mulcahy)
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Good for vocabulary, process sequences, and knowledge area relationships. Use these when
            you don&rsquo;t have time for a full practice session — commute pocket review.
          </p>
          <p className="not-prose">
            {amzn('1628254912', 'PMP Exam Prep Flashcards — Rita Mulcahy')}
          </p>

          <h2>The PMP Exam Structure</h2>
          <p>
            The current PMP exam is 180 questions — a mix of multiple choice, matching, hotspot, and
            limited fill-in. You have 230 minutes. Questions are split roughly 50/50 between predictive
            and agile/hybrid approaches. The exam tests situational judgment heavily — knowing the
            &ldquo;PMI way&rdquo; of handling project situations matters more than pure memorization.
          </p>
          <p>
            This is exactly why practice tests are the core mechanism. You need to internalize how
            PMI wants you to think — the practice questions train that pattern. A thousand questions
            plus re-runs of your wrong answers builds the mental model faster than re-reading chapters.
          </p>

          <h2>Test Strategy</h2>
          <ol>
            <li>Run through all available practice questions — aim for 1,000+. Don&rsquo;t skip any.</li>
            <li>After the first full pass, run only your wrong answers. Keep going until you get zero wrong.</li>
            <li>Switch to full 180-question simulations with realistic time limits and mixed domains. Run these until you&rsquo;re consistently above 90%.</li>
            <li>When you hit 80%+ on official PMI prep materials, schedule your exam. Don&rsquo;t wait for 95%.</li>
          </ol>
          <p>
            The re-take voucher is not a fallback plan — it&rsquo;s part of the strategy. Having it lets
            you test without over-studying.
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <div className="mt-8 text-center not-prose">
            <p className="text-sm text-gray-600 mb-3">
              📅 PMI chapter meeting:{' '}
              <Link href="/professional-development/" className="text-blue-600 hover:underline">
                Professional Development Events
              </Link>
            </p>
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
