import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Penn State Smeal eDBA | Clarke Moyer',
  description: 'Clarke Moyer is pursuing an Executive Doctor of Business Administration (eDBA) at Penn State Smeal College of Business, researching technology adoption barriers in organizations.',
  openGraph: {
    title: 'Penn State Smeal eDBA | Clarke Moyer',
    description: 'Clarke Moyer is pursuing an eDBA at Penn State Smeal, researching technology adoption barriers in organizations via the TABS platform.',
    type: 'website',
    url: '/education/smeal-dba/',
  },
};

export default function SmealDBAPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/education/" className="hover:underline text-gray-300">Education</Link>{' '}
            / Penn State Smeal College of Business
          </div>
          <div className="mt-2 mb-4">
            <span className="inline-block bg-amber-500 text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full">IN PROGRESS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Penn State Smeal</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Executive Doctor of Business Administration (eDBA) — Started 2023
          </p>
        </div>
      </section>

      {/* Program details */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-amber-500 text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">IN PROGRESS</span>
            <span className="text-gray-500 text-sm">Started 2023 — Cohort-based program</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Executive Doctor of Business Administration</h2>
          <p className="text-gray-500 text-sm mb-6">Penn State Smeal College of Business — State College, PA</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Program</div>
              <div className="text-gray-800 font-medium">Executive DBA (eDBA)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Institution</div>
              <div className="text-gray-800 font-medium">Penn State Smeal College of Business</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</div>
              <div className="text-gray-800 font-medium">In Progress (started 2023)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Research Focus</div>
              <div className="text-gray-800 font-medium">Technology adoption barriers in organizations</div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The eDBA is a practice-focused doctoral degree designed for senior executives and researchers. Unlike a
            traditional PhD, the eDBA emphasizes applied research — translating rigorous scholarship directly into
            organizational practice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The program includes intensive in-person residencies in State College, PA. Clarke has completed 7 residencies
            as of 2025 and participated in the Spisak Endowed Lecture Series in March 2026.
          </p>
        </div>
      </section>

      {/* Doctoral Research callout */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎓</span>
              <h3 className="text-lg font-bold text-purple-900">Doctoral Research</h3>
            </div>
            <p className="text-purple-800 leading-relaxed mb-3">
              Clarke&rsquo;s research focuses on <strong>technology adoption barriers</strong> — the organizational, cultural,
              and technical factors that prevent successful technology implementation.
            </p>
            <p className="text-purple-800 leading-relaxed mb-4">
              He runs the <strong>TABS (Technology Adoption Barriers Study)</strong> research platform as part of this work:
            </p>
            <a
              href="https://technologyadoptionbarriers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 text-white font-semibold px-5 py-2.5 rounded hover:bg-purple-800 transition-colors text-sm tracking-wider"
            >
              VISIT TECHNOLOGYADOPTIONBARRIERS.ORG →
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/professional-development/"
              className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm tracking-wider"
            >
              SEE CLARKE&rsquo;S DBA RESIDENCY SCHEDULE →
            </Link>
            <Link
              href="/walk-and-talk/"
              className="inline-block bg-white border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm tracking-wider"
            >
              WALK &amp; TALK CONSULTING →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
