import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Education | Clarke Moyer',
  description: 'Clarke Moyer\'s academic journey: Penn State Smeal eDBA (in progress), WGU BS-IT, MBA-ITM, UMUC graduate certificate, and ongoing professional certifications.',
  openGraph: {
    title: 'Education | Clarke Moyer',
    description: 'Clarke Moyer\'s academic journey: Penn State Smeal eDBA (in progress), WGU BS-IT, MBA-ITM, and ongoing professional certifications.',
    type: 'website',
    url: '/education/',
  },
};

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Education
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Education</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            A lifelong commitment to formal education, professional credentials, and doctoral research.
          </p>
        </div>
      </section>

      {/* Section 1: Penn State Smeal eDBA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-6">
            <div>
              <span className="inline-block bg-blue-800 text-white text-xs font-bold tracking-wider px-3 py-1 rounded mb-3">IN PROGRESS</span>
              <h2 className="text-3xl font-bold text-gray-900">Penn State Smeal College of Business — eDBA</h2>
              <p className="text-gray-500 text-sm mt-1">Executive Doctor of Business Administration</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Clarke is currently pursuing a Doctor of Business Administration (eDBA) at Penn State&rsquo;s Smeal College of
            Business, with research focused on technology adoption barriers in organizations.
          </p>
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
          <p className="text-gray-700 leading-relaxed mb-6">
            Clarke runs the <strong>TABS (Technology Adoption Barriers Study)</strong> research platform at{' '}
            <a
              href="https://technologyadoptionbarriers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              technologyadoptionbarriers.org
            </a>{' '}
            as part of his doctoral research.
          </p>
          <Link
            href="/professional-development/"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm tracking-wider"
          >
            VIEW DBA RESIDENCY DATES →
          </Link>
        </div>
      </section>

      {/* Section 2: WGU BS-IT */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Western Governors University — BS-IT</h2>
          <p className="text-gray-500 text-sm mb-6">Bachelor of Science in Information Technology</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Clarke earned his Bachelor of Science in Information Technology from Western Governors University (WGU).
            WGU&rsquo;s competency-based program integrates industry certification preparation directly into the curriculum —
            Clarke earned CompTIA A+, Network+, Security+, Project+, and CIW certifications as part of completing the degree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/wgu-referral/"
              className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm tracking-wider"
            >
              CLARKE RECOMMENDS WGU — SEE HIS REFERRAL PAGE →
            </Link>
            <Link
              href="/certification/"
              className="inline-block bg-white border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm tracking-wider"
            >
              SEE CLARKE&rsquo;S CERT GUIDES →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Additional Credentials */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Credentials</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Clarke also holds a <strong>Graduate Certificate in Project Management</strong> from the University of
            Maryland University College (UMUC) and an <strong>MBA in IT Management (MBA-ITM)</strong> from Western
            Governors University.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Together these credentials reflect a deliberate academic path from technical practitioner to executive-level
            research, spanning IT operations, business strategy, and organizational behavior.
          </p>
        </div>
      </section>

      {/* Section 4: Continuing Education */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuing Education</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Clarke maintains active professional certifications through ongoing continuing education programs, including
            CompTIA CE credits, CISSP CPE hours, SAFe renewal requirements, and PMP PDU reporting. Staying current is
            not a checkbox — it&rsquo;s how he keeps his advice grounded in real, working knowledge.
          </p>
          <Link
            href="/certification/"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors text-sm tracking-wider"
          >
            VIEW CERTIFICATION GUIDES →
          </Link>
        </div>
      </section>
    </>
  );
}
