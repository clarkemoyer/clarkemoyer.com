import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer SAFe SPC Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the SAFe 5/6 Program Consultant (SPC) certification — the implementation professional credential for enterprise Lean-Agile transformation.',
  openGraph: {
    title: 'Clarke Moyer SAFe SPC Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the SAFe 5/6 Program Consultant (SPC) certification — the implementation professional credential for enterprise Lean-Agile transformation.',
    type: 'article',
    url: '/clarke-moyer-safe-spc-certification-passing-guide/',
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

export default function SAFeSPCGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / SAFe SPC Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer SAFe SPC Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8 not-prose">
            <p className="text-yellow-900 font-semibold text-sm">⚠️ This is NOT a self-study certification. The SAFe SPC requires attending an official <strong>4-day Scaled Agile instructor-led training event</strong>. Self-study alone will not make you eligible to sit for the exam. The exam is taken at the conclusion of the course.</p>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
            <p className="font-bold text-amber-900">📋 About Clarke&rsquo;s SAFe Journey</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke originally obtained the SAFe SPC certification at version 5 and has been renewing and
              maintaining it through version 6. This page covers the current exam but Clarke&rsquo;s journey
              started with SAFe 5 — the credential shown in his LinkedIn headline reflects the most recent
              active version (SPC6). Note that LinkedIn shows the <em>original certification date</em>, not the
              renewal date — a 2020 SAFe SPC that&rsquo;s still active in 2025 represents five-plus years of
              maintained professional standing, not a one-time achievement.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To earn the SAFe SPC, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public commitment — tell someone you&rsquo;re registering for the SPC course and when. The 4-day course is intense; knowing you&rsquo;ve announced it keeps you from bailing when the week gets hard.</li>
              <li>Audio-first in prep. Read SAFe 5.0 Distilled and related transformation context books as audio before the course. Walking in with a mental model of the SAFe framework makes the 4 days significantly more productive.</li>
              <li>Engage fully during the course — the exam follows immediately after. The practice scenarios and exercises in class are the prep. Take notes, ask questions, do the work. This is your test bank.</li>
              <li>Don&rsquo;t over-study post-course. The exam is designed to be passable by an engaged participant. If you were present and active for 4 days, test your readiness with the provided practice and sit the exam promptly — don&rsquo;t let the window close.</li>
            </ol>
          </div>

          <p>
            The SAFe Program Consultant (SPC) is Scaled Agile&rsquo;s implementation professional credential. SPCs
            are trained to lead SAFe transformations — they can train other SAFe practitioners and drive
            Lean-Agile change at enterprise scale. It&rsquo;s not a passive knowledge cert. It&rsquo;s a
            coach-and-implement credential.
          </p>

          <p>
            I earned my <strong>Certified SAFe® 5 Program Consultant (SPC5)</strong> on{' '}
            <strong>October 18, 2020</strong> (License: 00763322-3362). The course was one of the most
            densely packed four days of professional training I&rsquo;ve done — and the exam at the end was
            genuinely fair to anyone who was present and paying attention.
          </p>

          <h2>How This Is Different from CISSP or PMP</h2>
          <p>
            For CISSP and PMP, the prep path is self-directed: buy books, grind practice tests, schedule
            and sit. The SAFe SPC doesn&rsquo;t work that way.
          </p>
          <p>
            You must register for and attend an official{' '}
            <a href="https://scaledagile.com/training/safe-for-teams/" target="_blank" rel="noopener noreferrer">
              Scaled Agile SPC training event
            </a>{' '}
            — typically a 4-day live or virtual course delivered by a certified SAFe Training Partner.
            The exam is administered during or immediately following that course. There is no way to
            bypass the training event to sit for the exam independently.
          </p>
          <p>
            That said, what you do <em>before</em> the course matters a lot. Candidates who arrive with
            context — having read the framework, understood the terminology, and worked with Agile teams —
            get far more out of the 4 days and perform better on the exam.
          </p>

          <h2>Pre-Course Prep: Books &amp; Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            SAFe 5.0 Distilled — Dean Leffingwell{' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Read Before the Course</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Written by SAFe&rsquo;s creator, this is the authoritative overview of the framework. Read or
            listen to this before your course date. It won&rsquo;t teach you everything you need for the
            exam — that happens in class — but it primes your mental model so you can absorb the
            4-day training at a higher level. Audio version available on Audible.
          </p>
          <p className="not-prose">
            {amzn('B09NQ3HCNZ', 'SAFe 5.0 Distilled — Dean Leffingwell')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Project to Product — Mik Kersten
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Not a SAFe book, but essential context for anyone driving enterprise transformation.
            Kersten&rsquo;s Flow Framework explains <em>why</em> organizations struggle to scale
            software delivery — and that &ldquo;why&rdquo; is the backdrop against which SAFe makes the most
            sense. If you&rsquo;re selling or implementing SAFe at scale, this book gives you the
            transformation story.
          </p>
          <p className="not-prose">
            {amzn('1098129628', 'Project to Product — Mik Kersten')}
          </p>

          <h2>The SPC Course: What to Expect</h2>
          <p>
            The 4-day SPC course is rigorous. You&rsquo;ll cover the full SAFe Big Picture, PI Planning,
            ART launch mechanics, Lean-Agile leadership, coaching, and change management. The format
            is workshop-heavy — you&rsquo;re not sitting through a lecture. You&rsquo;re doing exercises,
            playing roles, and practicing facilitation.
          </p>
          <p>
            The exam at the end tests whether you can apply the framework, not just recite it. Multiple
            choice, scenario-based questions. Candidates who were engaged during the course find it
            straightforward. Candidates who checked out during the 4 days find it hard.
          </p>
          <p>
            Tip: Take notes aggressively during the course. The facilitation exercises and discussion
            threads are where the exam-relevant nuances live. The slides are available after, but your
            own notes will be more useful.
          </p>

          <h2>After Certification: Staying Current</h2>
          <p>
            SAFe credentials require renewal every year — you need to complete continuing education
            and pay a renewal fee to remain certified. Scaled Agile releases framework updates
            regularly (currently SAFe 6.0). Stay connected to the{' '}
            <a href="https://scaledagile.com" target="_blank" rel="noopener noreferrer">Scaled Agile community</a>{' '}
            and the SA Community of Practice platform to track framework evolution and maintain your SPC.
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
