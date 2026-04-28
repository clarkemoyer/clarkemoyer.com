import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UMUC — Graduate Certificate in Project Management | Clarke Moyer',
  description: 'Clarke Moyer earned a Graduate Certificate in Project Management from the University of Maryland University College (UMUC/UMGC) in 2012.',
  openGraph: {
    title: 'UMUC — Graduate Certificate in Project Management | Clarke Moyer',
    description: 'Clarke Moyer earned a Graduate Certificate in Project Management from UMUC in 2012.',
    type: 'website',
    url: '/education/umuc/',
  },
};

export default function UMUCPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/education/" className="hover:underline text-gray-300">Education</Link>{' '}
            / University of Maryland University College
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">UMUC</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Graduate Certificate in Project Management — 2012
          </p>
        </div>
      </section>

      {/* Credential details */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-3">
            <span className="inline-block bg-green-700 text-white text-xs font-bold tracking-wider px-3 py-1 rounded">COMPLETED 2012</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Graduate Certificate in Project Management</h2>
          <p className="text-gray-500 text-sm mb-6">
            University of Maryland University College (UMUC) — now UMGC (University of Maryland Global Campus)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Credential</div>
              <div className="text-gray-800 font-medium">Graduate Certificate — Project Management</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Level</div>
              <div className="text-gray-800 font-medium">Graduate-level (post-MBA)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Institution</div>
              <div className="text-gray-800 font-medium">UMUC (now UMGC)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Year</div>
              <div className="text-gray-800 font-medium">2012</div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Completed after the WGU MBA, this graduate certificate deepened Clarke&rsquo;s formal project management
            education at the graduate level. UMUC (now rebranded as UMGC — University of Maryland Global Campus)
            specializes in serving working professionals and military-affiliated students — a natural fit given
            Clarke&rsquo;s background.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This credential, combined with the PMP certification also obtained in 2012, established Clarke&rsquo;s formal
            project management credentials at both the academic and professional levels.
          </p>
          <p className="text-gray-500 text-sm italic mb-8">
            Note: UMUC has since rebranded as UMGC (University of Maryland Global Campus).
          </p>

          <Link
            href="/clarke-moyer-pmp-certification-passing-guide/"
            className="inline-block bg-white border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm tracking-wider"
          >
            CLARKE ALSO HOLDS THE PMP →
          </Link>
        </div>
      </section>
    </>
  );
}
