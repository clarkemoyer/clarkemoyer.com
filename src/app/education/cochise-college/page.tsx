import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cochise College — AAS Electronics Technology | Clarke Moyer',
  description: 'Clarke Moyer earned an Associate of Applied Science in Electronics Technology (With Honors) from Cochise College during his US Army service at Fort Huachuca.',
  openGraph: {
    title: 'Cochise College — AAS Electronics Technology | Clarke Moyer',
    description: 'Clarke Moyer earned an AAS in Electronics Technology (With Honors) from Cochise College during his US Army service.',
    type: 'website',
    url: '/education/cochise-college/',
  },
};

export default function CochiseCollegePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/education/" className="hover:underline text-gray-300">Education</Link>{' '}
            / Cochise College
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Cochise College</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            AAS in Electronics Technology — With Honors | Sierra Vista, Arizona
          </p>
        </div>
      </section>

      {/* Degree details */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-3">
            <span className="inline-block bg-green-700 text-white text-xs font-bold tracking-wider px-3 py-1 rounded">COMPLETED WITH HONORS</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Associate of Applied Science — Electronics Technology</h2>
          <p className="text-gray-500 text-sm mb-6">Cochise College, Sierra Vista, Arizona</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Degree</div>
              <div className="text-gray-800 font-medium">AAS in Electronics Technology</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Distinction</div>
              <div className="text-gray-800 font-medium">With Honors</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Institution</div>
              <div className="text-gray-800 font-medium">Cochise College, Sierra Vista Campus</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Context</div>
              <div className="text-gray-800 font-medium">Completed in Sierra Vista, AZ</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Started</div>
              <div className="text-gray-800 font-medium">2005</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Conferred</div>
              <div className="text-gray-800 font-medium">December 2013</div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The AAS in Electronics Technology provided the foundational electrical and electronics engineering knowledge
            that underpins Clarke&rsquo;s later work in IT infrastructure and systems integration. From circuit theory and
            signal processing to hands-on systems maintenance — this degree represents the beginning of Clarke&rsquo;s
            formal technical education.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The path from electronics fundamentals to enterprise cloud architecture started here.
          </p>
        </div>
      </section>

      {/* Military Context callout */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎖️</span>
              <h3 className="text-lg font-bold text-amber-900">Military Context</h3>
            </div>
            <p className="text-amber-800 leading-relaxed mb-3">
              Cochise College&rsquo;s Sierra Vista campus is co-located with <strong>Fort Huachuca</strong> — a major US Army
              intelligence installation and home of the Army Intelligence Center.
            </p>
            <p className="text-amber-800 leading-relaxed">
              The AAS was awarded based on Clarke&rsquo;s completed BS and MBA coursework and the core classes from his
              33W (Military Intelligence Systems Maintainer &amp; Integrator) MOS training at Cochise College.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
