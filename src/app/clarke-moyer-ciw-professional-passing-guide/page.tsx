import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer CIW Professional Certification Passing Guide',
  description: "Clarke Moyer's guide to the CIW Professional and CIW Database Design Specialist certifications — foundational web technology credentials.",
  openGraph: {
    title: 'Clarke Moyer CIW Professional Certification Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the CIW Professional and CIW Database Design Specialist certifications — foundational web technology credentials.",
    type: 'article',
    url: '/clarke-moyer-ciw-professional-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';

export default function CIWProfessionalGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}CIW Professional Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer CIW Professional Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* WGU context banner */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 mb-8">
            <p className="font-bold text-blue-900">🎓 WGU Degree Program Context</p>
            <p className="text-blue-800 text-sm mt-1">
              Clarke obtained this certification as part of completing his{' '}
              <strong>BS-IT (Bachelor of Science in Information Technology)</strong> at{' '}
              <a href="/wgu-referral-program" className="underline">Western Governors University (WGU)</a>.
              WGU&apos;s IT degree program integrates industry certification preparation directly into the curriculum —{' '}
              students can earn both the degree and the certifications simultaneously. This is why Clarke holds
              multiple foundational certifications from the same 2008–2009 period. If you&apos;re considering WGU,
              the built-in cert prep is a significant part of the value.
            </p>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <p className="text-amber-800 font-semibold">📋 Market Recognition Note</p>
            <p className="text-amber-700 text-sm mt-1">
              The CIW certification program has limited current market recognition compared to modern cloud certifications.
              Clarke recommends pursuing Microsoft or CompTIA certifications instead for current market value.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass CIW exams, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.</li>
              <li>Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.</li>
              <li>Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.</li>
              <li>Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you&rsquo;re scoring 90%+. Don&rsquo;t over-study — test when you hit 80% and use the re-take as your safety net.</li>
            </ol>
          </div>

          <h2>About CIW Professional</h2>
          <p>
            CIW (Certified Internet Webmaster) Professional is a foundational web technology credential covering internet
            fundamentals, web design, and network technology. Clarke obtained his CIW Professional on{' '}
            <strong>April 22, 2009</strong>, alongside the CIW Database Design Specialist — a companion certification
            focused on relational database design, SQL, and data modeling for web applications.
          </p>
          <p>
            These credentials were earned during Clarke&rsquo;s intensive 2008–2009 certification sprint, which also included
            CompTIA A+, Network+, Security+, Project+, and Microsoft MCP. They represent the foundational web and data
            technology knowledge that supported his early IT career.
          </p>

          <h2>CIW Database Design Specialist</h2>
          <p>
            The CIW Database Design Specialist companion certification validates skills in:
          </p>
          <ul>
            <li>Relational database concepts and normalization</li>
            <li>SQL queries — SELECT, JOIN, subqueries, aggregation</li>
            <li>Database design and entity-relationship modeling</li>
            <li>Web database integration basics</li>
          </ul>

          <h2>Historical Context</h2>
          <p>
            In 2009, CIW was a recognized vendor-neutral web technology credential. The program has since lost significant
            market traction as the industry moved toward cloud platforms, role-based Microsoft certifications, and
            CompTIA&rsquo;s expanding catalog. While these certs served a legitimate purpose at the time, Clarke would
            direct someone building credentials today toward Microsoft Azure or CompTIA tracks instead.
          </p>

          <h2>Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">CIW Professional Study Guides</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            If you&rsquo;re pursuing CIW for a specific contract requirement, search for current study guides below.
            Materials are sparse — most preparation will come from official CIW courseware.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=CIW+Professional+study+guide&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search: CIW Professional Study Guides ↗
            </a>
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
