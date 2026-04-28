import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WGU — BS-IT & MBA-ITM | Clarke Moyer',
  description: 'Clarke Moyer earned both a BS in Information Technology and an MBA in IT Management from Western Governors University — a competency-based program that integrates industry cert prep.',
  openGraph: {
    title: 'WGU — BS-IT & MBA-ITM | Clarke Moyer',
    description: 'Clarke Moyer earned both a BS in Information Technology and an MBA in IT Management from Western Governors University.',
    type: 'website',
    url: '/education/wgu/',
  },
};

export default function WGUPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/education/" className="hover:underline text-gray-300">Education</Link>{' '}
            / Western Governors University
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Western Governors University</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            BS in Information Technology (2009) &amp; MBA in IT Management (2010)
          </p>
        </div>
      </section>

      {/* BS-IT */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-3">
            <span className="inline-block bg-green-700 text-white text-xs font-bold tracking-wider px-3 py-1 rounded">COMPLETED 2009</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">BS in Information Technology</h2>
          <p className="text-gray-500 text-sm mb-6">Bachelor of Science — Competency-Based Online Program</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Clarke earned his BS in Information Technology through WGU&rsquo;s competency-based model — a program where
            mastery of the material, not seat time, determines progress. If you already know the content, you move faster.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            WGU&rsquo;s BS-IT integrates industry certification preparation directly into the curriculum. As part of completing
            this degree, Clarke earned the following credentials:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1 ml-4">
            <li>CompTIA A+</li>
            <li>CompTIA Network+</li>
            <li>CompTIA Security+</li>
            <li>CompTIA Project+</li>
            <li>CIW (Certified Internet Webmaster)</li>
          </ul>
          <Link
            href="/certification/"
            className="inline-block bg-white border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm tracking-wider"
          >
            SEE CLARKE&rsquo;S FULL CERT GUIDES →
          </Link>
        </div>
      </section>

      {/* MBA-ITM */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-3">
            <span className="inline-block bg-green-700 text-white text-xs font-bold tracking-wider px-3 py-1 rounded">COMPLETED 2010</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">MBA in Information Technology Management</h2>
          <p className="text-gray-500 text-sm mb-6">Master of Business Administration — IT Management Track</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            One year after completing the BS-IT, Clarke earned his MBA in IT Management from WGU. The program focused on
            IT management, business strategy, and organizational leadership — bridging deep technical expertise with
            executive-level business acumen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Focus Area</div>
              <div className="text-gray-800 font-medium">IT Management</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Focus Area</div>
              <div className="text-gray-800 font-medium">Business Strategy</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Focus Area</div>
              <div className="text-gray-800 font-medium">Organizational Leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clarke's Recommendation callout */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✅</span>
              <h3 className="text-lg font-bold text-blue-900">Clarke&rsquo;s Recommendation</h3>
            </div>
            <p className="text-blue-800 leading-relaxed">
              &ldquo;WGU is one of the best-value degrees in tech. Competency-based means you move at your own pace —
              if you already know the material, you can accelerate. The built-in cert prep means you leave with both
              a degree and industry credentials. Clarke recommends WGU for working professionals.&rdquo;
            </p>
          </div>
          <Link
            href="/wgu-referral/"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm tracking-wider"
          >
            SEE CLARKE&rsquo;S WGU REFERRAL PAGE →
          </Link>
        </div>
      </section>
    </>
  );
}
