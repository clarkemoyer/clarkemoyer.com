import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Development',
  description:
    'Clarke Moyer\'s complete record of professional development — industry conferences, academic residencies, professional chapter meetings, and technical training events spanning 2015–2026.',
  openGraph: {
    title: 'Professional Development | Clarke Moyer',
    description:
      'Clarke Moyer\'s complete record of professional development — industry conferences, academic residencies, professional chapter meetings, and technical training events spanning 2015–2026.',
    type: 'article',
    url: '/professional-development/',
  },
};

export default function ProfessionalDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Professional Development</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A complete record of professional development events, academic residencies, industry
            conferences, and technical training &mdash; 2015 through present.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Professional Development</span>
          </nav>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Professional development isn&rsquo;t a checkbox &mdash; it&rsquo;s a compounding investment. This page
              documents my complete record of conferences, academic residencies, chapter meetings, and
              training events. I believe showing up in person matters. These entries represent real time,
              real travel, and real learning.
            </p>
          </div>

          {/* ── Section 1: Major Industry Conferences ── */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12 border-l-4 border-blue-500 pl-4">🏟️ Major Conferences &amp; Summits
          </h2>

          <div className="space-y-6 mt-6">

            {/* Smeal AI Day */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <p className="font-bold text-purple-900 text-lg mb-1">Smeal AI Day</p>
              <p className="text-sm text-purple-700 mb-1">Q1 2026 &mdash; Penn State University</p>
              <p className="text-purple-800 text-sm">
                Active preparation and presentation. Clarke is participating in Smeal&rsquo;s AI Day as part
                of his eDBA program engagement.
              </p>
            </div>

            {/* KubeCon 2025 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
              <p className="font-bold text-blue-900 text-lg mb-1">
                ☸️ KubeCon + CloudNativeCon North America
              </p>
              <p className="text-sm text-blue-700 mb-1">
                November 10&ndash;13, 2025 &mdash; Atlanta, GA
              </p>
              <p className="text-blue-800 text-sm mb-2">
                The CNCF&rsquo;s flagship annual conference covering Kubernetes and the broader cloud-native
                ecosystem. Clarke attended in Atlanta and is an advocate for this conference as the highest-signal
                event in cloud-native infrastructure.
              </p>
              <p className="text-blue-700 text-sm">
                <Link href="/industry-conferences/" className="font-medium hover:underline text-blue-600">
                  Full write-up on the Industry Conferences page &rarr;
                </Link>
                {' | '}
                <Link href="/certification" className="font-medium hover:underline text-blue-600">
                  VCP-AM Certification &rarr;
                </Link>
              </p>
            </div>

            {/* HPE Conference */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded">
              <p className="font-bold text-gray-900 text-lg mb-1">HPE Conference</p>
              <p className="text-sm text-gray-600 mb-1">March 6&ndash;10, 2023 &mdash; Houston, TX</p>
              <p className="text-gray-700 text-sm">
                Hewlett Packard Enterprise conference covering infrastructure, HPC, and enterprise
                solutions.
              </p>
            </div>

            {/* VMworld 2021 */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded">
              <p className="font-bold text-gray-900 text-lg mb-1">🖥️ VMworld 2021 (Americas)</p>
              <p className="text-sm text-gray-600 mb-1">October 5, 2021 &mdash; Virtual</p>
              <p className="text-gray-700 text-sm mb-2">
                30 Hours CPE. Attended the virtual Americas edition during the private cloud era of
                DCGS operations.
              </p>
              <p className="text-gray-600 text-sm">
                See VMware certifications &rarr;{' '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP4</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP5</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP6-CMA</Link>
              </p>
            </div>

            {/* VMworld 2020 */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded">
              <p className="font-bold text-gray-900 text-lg mb-1">🖥️ VMworld 2020</p>
              <p className="text-sm text-gray-600 mb-1">2020 &mdash; Virtual</p>
              <p className="text-gray-700 text-sm mb-2">20 Hours CPE. Virtual edition during the pandemic year.</p>
              <p className="text-gray-600 text-sm">
                See VMware certifications &rarr;{' '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP4</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP5</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP6-CMA</Link>
              </p>
            </div>

            {/* Dublin */}
            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
              <p className="font-bold text-green-900 text-lg mb-1">🌍 International Conference (BCD Travel)</p>
              <p className="text-sm text-green-700 mb-1">January 18&ndash;22, 2020 &mdash; Dublin, Ireland</p>
              <p className="text-green-800 text-sm">
                International conference travel via BCD Travel. Dublin, Ireland.
              </p>
            </div>

            {/* VMworld 2017 */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded">
              <p className="font-bold text-gray-900 text-lg mb-1">🖥️ VMworld 2017</p>
              <p className="text-sm text-gray-600 mb-1">2017 &mdash; Las Vegas, NV</p>
              <p className="text-gray-700 text-sm mb-2">
                40 Hours CPE. In-person attendance in Las Vegas &mdash; Clarke&rsquo;s highest-CPE VMworld year.
                On-site Pearson VUE testing centers allowed same-week certification.
              </p>
              <p className="text-gray-600 text-sm">
                See VMware certifications &rarr;{' '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP4</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP5</Link>
                {', '}
                <Link href="/certification" className="text-blue-600 hover:underline">VCP6-CMA</Link>
              </p>
            </div>

          </div>

          {/* ── Section 2: Academic Residencies ── */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-16 border-l-4 border-purple-500 pl-4">🎓 Academic Residencies — Penn State Smeal College of Business
          </h2>

          <p className="text-gray-700 mt-4 mb-6">
            Clarke is pursuing a Doctor of Business Administration (eDBA) at Penn State&rsquo;s Smeal
            College of Business. The program includes in-person residencies in State College, PA &mdash;
            intensive multi-day sessions combining coursework, research, and executive peer engagement.
          </p>

          <div className="overflow-x-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { event: 'Spisak Endowed Lecture Series', date: 'March 26–27, 2026', location: 'Nittany Lion Inn, State College, PA' },
                  { event: 'Smeal DBA Residency #7', date: 'August 16–20, 2025', location: 'State College, PA' },
                  { event: 'Smeal DBA Residency #6', date: 'May 15–18, 2025', location: 'State College, PA' },
                  { event: 'Smeal DBA Residency #5', date: 'January 9–12, 2025', location: 'State College, PA' },
                  { event: 'Spisak Executive Speaker Event', date: 'November 7, 2024', location: 'Nittany Lion Inn, State College, PA' },
                  { event: 'Smeal DBA Residency #4', date: 'August 17–21, 2024', location: 'State College, PA' },
                  { event: 'Smeal DBA Residency #3', date: 'May 9–12, 2024', location: 'State College, PA' },
                  { event: 'Smeal DBA Residency #2', date: 'January 10–15, 2024', location: 'State College, PA' },
                  { event: 'Smeal DBA Residency #1', date: 'August 12–20, 2023', location: 'State College, PA' },
                  { event: 'Smeal DBA Orientation', date: 'July 10, 2023', location: 'State College, PA' },
                ].map((row) => (
                  <div key={row.event} className="bg-white border border-blue-100 rounded-lg p-4">
                    <p className="font-semibold text-blue-900 text-sm mb-1">{row.event}</p>
                    <p className="text-blue-700 text-xs">{row.date}</p>
                    <p className="text-blue-600 text-xs">{row.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">
            Clarke&rsquo;s academic background &rarr;{' '}
            <Link href="/resume/" className="text-blue-600 hover:underline font-medium">
              see the PSU Smeal eDBA section on the Resume page
            </Link>
            .
          </p>

          {/* ── Section 3: Professional Chapter Meetings ── */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-16 border-l-4 border-green-500 pl-4">🤝 Professional Chapter Meetings
          </h2>

          <p className="text-gray-700 mt-4 mb-8">
            Clarke has been an active participant in IEEE, PMI, and NCMS chapter events. These aren&rsquo;t
            passive attendances &mdash; several include presenting, volunteering, and executive committee roles.
          </p>

          {/* NCMS */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              🔒 NCMS (National Classification Management Society) — Pikes Peak &amp; Sky Islands Chapters
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">March 10, 2022</span>
                <span>1st Quarter 2022 Meeting <span className="text-gray-500">&mdash; Hybrid</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">December 9, 2021</span>
                <span>4th Quarter 2021 Meeting <span className="text-gray-500">&mdash; Virtual</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">February 4, 2021</span>
                <span>1st Quarter 2021 Meeting <span className="text-gray-500">&mdash; Virtual</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">December 3, 2020</span>
                <span>4th Quarter 2020 Meeting <span className="text-gray-500">&mdash; Virtual</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">Oct 29 &amp; Nov 17, 2020</span>
                <span>NCMS Training Workshops: Insider Threat &amp; Legal Risks <span className="text-gray-500">&mdash; Virtual</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">September 22, 2020</span>
                <span>3rd Quarter 2020 Meeting <span className="text-gray-500">&mdash; Virtual</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">June 20, 2019</span>
                <span>Sky Islands Chapter Meeting <span className="text-gray-500">&mdash; Sierra Vista, AZ</span></span>
              </li>
            </ul>
          </div>

          {/* IEEE */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              ⚡ IEEE — Fort Huachuca / Sierra Vista Section
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">April 23, 2019</span>
                <span>
                  <strong>Talk:</strong> LinkedIn: Effective Use for Professionals
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">March 26, 2019</span>
                <span>
                  <strong>Technical Lecture:</strong>{' '}
                  <Link href="/clarke-moyer-cissp-certification-passing-guide/" className="text-blue-600 hover:underline">
                    Zero Trust Networking
                  </Link>
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">February 26, 2019</span>
                <span>
                  <strong>Technical Lecture:</strong> The Front Lines of Computer Networking
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">January 23, 2019</span>
                <span>
                  <strong>Technical Lecture:</strong> Intro to PNT and Mitigating GPS Vulnerabilities
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">Aug 7, 17; Oct 2, 2015</span>
                <span>
                  Section Meetings (Executive &amp; STEM)
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                </span>
              </li>
            </ul>
          </div>

          {/* PMI */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              📊 PMI (Project Management Institute)
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 w-36 shrink-0">October 15, 2015</span>
                <span>
                  Agile/Scrum Overview
                  <span className="text-gray-500"> &mdash; Sierra Vista, AZ</span>
                  {' | '}
                  <Link href="/clarke-moyer-pmp-certification-passing-guide/" className="text-blue-600 hover:underline">PMP Guide</Link>
                  {' | '}
                  <Link href="/clarke-moyer-safe-spc-certification-passing-guide/" className="text-blue-600 hover:underline">SAFe SPC Guide</Link>
                </span>
              </li>
            </ul>
          </div>

          {/* ── Section 4: Technical Training ── */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-16 border-l-4 border-amber-500 pl-4">🔧 Technical Training
          </h2>

          <p className="text-gray-700 mt-4 mb-6">
            Formal training courses and workshops &mdash; separate from certification exams.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
              <p className="font-semibold text-amber-900 text-sm">SCYIHA Concessions Stand Training</p>
              <p className="text-amber-700 text-xs mt-1">January 14, 2026 · State College, PA</p>
              <p className="text-amber-700 text-xs mt-1">Clarke volunteers with youth hockey in State College.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
              <p className="font-semibold text-amber-900 text-sm">Microsoft: 70-410 Installing &amp; Configuring Windows Server 2012</p>
              <p className="text-amber-700 text-xs mt-1">March 26, 2015</p>
              <p className="text-amber-700 text-xs mt-1">This training directly preceded Clarke&rsquo;s{' '}
                <Link href="/clarke-moyer-mcp-passing-guide/" className="text-blue-600 hover:underline">MCP certification</Link>.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
              <p className="font-semibold text-amber-900 text-sm">Cisco: CCENT (Cisco Certified Entry Networking Technician)</p>
              <p className="text-amber-700 text-xs mt-1">March 25, 2015</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
              <p className="font-semibold text-amber-900 text-sm">Cisco: Interconnecting Cisco Networking Devices Part 1 (ICND1)</p>
              <p className="text-amber-700 text-xs mt-1">March 25, 2015</p>
            </div>
          </div>

          {/* Back links */}
          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">← Back to Home</Link>
          </div>

        </div>
      </section>
    </>
  );
}
