import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Education | Clarke Moyer',
  description: "Clarke Moyer's academic journey: Penn State Smeal eDBA (in progress), WGU BS-IT, MBA-ITM, UMUC graduate certificate, and Cochise College AAS in Electronics Technology.",
  openGraph: {
    title: 'Education | Clarke Moyer',
    description: "Clarke Moyer's academic journey from electronics fundamentals to doctoral research.",
    type: 'website',
    url: '/education/',
  },
};

const degrees = [
  {
    href: '/education/cochise-college/',
    institution: 'Cochise College',
    credential: 'AAS in Electronics Technology',
    year: 'With Honors',
    description: 'Completed during US Army service at Fort Huachuca — the foundation of a technical career.',
  },
  {
    href: '/education/wgu/',
    institution: 'Western Governors University',
    credential: 'BS in Information Technology',
    year: '2009',
    description: 'Competency-based degree with integrated industry cert prep (A+, Network+, Security+, and more).',
  },
  {
    href: '/education/wgu/',
    institution: 'Western Governors University',
    credential: 'MBA in IT Management',
    year: '2010',
    description: 'IT management, business strategy, and organizational leadership — one year after the BS-IT.',
  },
  {
    href: '/education/umuc/',
    institution: 'University of Maryland University College',
    credential: 'Graduate Certificate — Project Management',
    year: '2012',
    description: 'Graduate-level PM credential paired with PMP certification to establish formal PM credentials.',
  },
  {
    href: '/education/smeal-dba/',
    institution: 'Penn State Smeal College of Business',
    credential: 'Executive DBA (eDBA)',
    year: 'In Progress',
    description: 'Doctoral research on technology adoption barriers — TABS platform at technologyadoptionbarriers.org.',
    inProgress: true,
  },
];

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

      {/* Degree cards */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {degrees.map((d, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{d.institution}</p>
                    <h2 className="text-xl font-bold text-gray-900">{d.credential}</h2>
                  </div>
                  <div className="shrink-0">
                    {d.inProgress ? (
                      <span className="inline-block bg-amber-500 text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full">IN PROGRESS</span>
                    ) : (
                      <span className="inline-block bg-green-700 text-white text-xs font-bold tracking-wider px-3 py-1 rounded">{d.year}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{d.description}</p>
                <Link
                  href={d.href}
                  className="inline-block text-blue-700 font-semibold text-sm hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuing Education */}
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
