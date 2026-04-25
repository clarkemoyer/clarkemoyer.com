import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Certification Guides',
  description: 'Clarke Moyer\'s completed management and technical certifications, with guides and methods for passing.',
  openGraph: {
    title: 'Certification Guides | Clarke Moyer',
    description: 'Clarke Moyer\'s completed management and technical certifications, with guides and methods for passing.',
    type: 'website',
    url: '/certification-guides/',
  },
};

export default function CertificationGuidesPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Certification Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Certification Guides</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <p className="text-xl text-gray-600">
            List of completed Management and Technical certifications, some with guides or methods of passing.
          </p>
          <p className="text-gray-500">
            <em>Note: For the most up-to-date listing please go to my{' '}
            <a href="https://linkedin.com/in/clarkemoyer" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</em>
          </p>

          <h2>Microsoft Azure Certifications</h2>
          <p className="text-gray-600 not-prose">Clarke currently recommends these Microsoft Azure certifications — solid entry points for cloud, AI, and security in enterprise and DoD environments.</p>

          <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-green-900">Microsoft AZ-900 Azure Fundamentals Guide</h2>
              <span className="text-green-700 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">✅ Recommended</span>
            </div>
            <p className="text-green-800 mb-4">The entry point for all Azure certifications — establishes the vocabulary and framework everything else builds on.</p>
            <Link href="/clarke-moyer-microsoft-az-900-passing-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the AZ-900 Guide →
            </Link>
          </div>

          <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-green-900">Microsoft AI-900 Azure AI Fundamentals Guide</h2>
              <span className="text-green-700 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">✅ Recommended</span>
            </div>
            <p className="text-green-800 mb-4">Entry-level Azure AI certification — essential for understanding AI workloads in enterprise and DoD environments before anyone can advise on AI policy or procurement.</p>
            <Link href="/clarke-moyer-microsoft-ai-900-passing-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the AI-900 Guide →
            </Link>
          </div>

          <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-green-900">Microsoft SC-900 Security Fundamentals Guide</h2>
              <span className="text-green-700 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">✅ Recommended</span>
            </div>
            <p className="text-green-800 mb-4">Entry point to the Microsoft SC security track — covers security, compliance, and identity (SCI) fundamentals. Especially useful for CISSP holders mapping to Azure.</p>
            <Link href="/clarke-moyer-microsoft-sc-900-passing-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the SC-900 Guide →
            </Link>
          </div>

          <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-green-900">Microsoft SC Series (Security Track) Guide</h2>
              <span className="text-green-700 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">✅ Recommended</span>
            </div>
            <p className="text-green-800 mb-4">Clarke&rsquo;s overview of the full Microsoft SC security certification track — SC-900 through SC-100 — and how each cert maps to DoD and enterprise security roles.</p>
            <Link href="/clarke-moyer-microsoft-sc-500-passing-guide" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the SC Series Guide →
            </Link>
          </div>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">CISSP Certification Passing Guide</h2>
            <p className="text-blue-800 mb-4">I wrote a detailed guide on how I passed the CISSP on my first attempt.</p>
            <Link href="/clarke-moyer-cissp-certification-passing-guide" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the CISSP Guide →
            </Link>
          </div>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">CISSP-ISSEP Certification Passing Guide</h2>
            <p className="text-blue-800 mb-4">The ISSEP concentration — Systems Security Engineering Professional. Requires active CISSP. Earned November 2019.</p>
            <Link href="/clarke-moyer-cissp-issep-certification-passing-guide" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the CISSP-ISSEP Guide →
            </Link>
          </div>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">PMP Certification Passing Guide</h2>
            <p className="text-blue-800 mb-4">PMI&rsquo;s flagship project management credential. Study method, Rita Mulcahy resources, and test strategy. Earned December 2012.</p>
            <Link href="/clarke-moyer-pmp-certification-passing-guide" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the PMP Guide →
            </Link>
          </div>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">SAFe SPC Certification Passing Guide</h2>
            <p className="text-blue-800 mb-4">SAFe Program Consultant — the 4-day instructor-led path to leading enterprise Lean-Agile transformations. Earned October 2020.</p>
            <Link href="/clarke-moyer-safe-spc-certification-passing-guide" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the SAFe SPC Guide →
            </Link>
          </div>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mt-12 mb-4">CompTIA Certifications</h2>
          <p className="not-prose text-sm text-gray-500 mb-6">Legacy path — see the <Link href="/clarke-moyer-cissp-certification-passing-guide" className="text-blue-600 hover:underline">CISSP guide</Link> for the recommended security track and the <Link href="/clarke-moyer-safe-spc-certification-passing-guide" className="text-blue-600 hover:underline">SAFe SPC guide</Link> for the recommended project management track.</p>

          <div className="not-prose bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">CompTIA Security+ Passing Guide</h3>
                  <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">⚠️ Legacy Path</span>
                </div>
                <p className="text-gray-700 mb-4">DoD 8570 IAT Level II baseline qualifier. Earned November 2008. See CISSP guide for the recommended security track.</p>
                <Link href="/clarke-moyer-comptia-security-plus-passing-guide" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
                  Read the Security+ Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="not-prose bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">CompTIA Network+ Passing Guide</h3>
                  <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">⚠️ Legacy Path</span>
                </div>
                <p className="text-gray-700 mb-4">DoD 8570 IAT Level I baseline qualifier. Earned October 2008. Solid networking foundation but superseded by CISSP for career leverage.</p>
                <Link href="/clarke-moyer-comptia-network-plus-passing-guide" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
                  Read the Network+ Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="not-prose bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">CompTIA A+ Passing Guide</h3>
                  <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">⚠️ Legacy Path</span>
                </div>
                <p className="text-gray-700 mb-4">DoD 8570 IAT Level I baseline qualifier. Earned August 2008. Hardware and OS fundamentals — a common career starting point.</p>
                <Link href="/clarke-moyer-comptia-a-plus-passing-guide" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
                  Read the A+ Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="not-prose bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">CompTIA Project+ Passing Guide</h3>
                  <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">⚠️ Legacy Path</span>
                </div>
                <p className="text-gray-700 mb-4">Entry-level project management credential. Earned January 2009. Clarke recommends SAFe SPC instead for enterprise and DoD environments.</p>
                <Link href="/clarke-moyer-comptia-project-plus-passing-guide" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
                  Read the Project+ Guide →
                </Link>
              </div>
            </div>
          </div>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mt-12 mb-4">Service Management Certifications</h2>

          <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-2">ITIL 4 Foundation Passing Guide</h3>
            <p className="text-blue-800 mb-4">Entry-level IT service management credential — required on certain DoD and enterprise contracts. Covers the ITIL service value system, four dimensions model, and guiding principles.</p>
            <Link href="/clarke-moyer-itil-4-foundation-passing-guide" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors no-underline">
              Read the ITIL 4 Foundation Guide →
            </Link>
          </div>

          <h2>Industry Management Certifications (DFARS)</h2>
          <ul>
            <li>
              <strong>Certified SAFe® 5/6 Program Consultant (SPC5)</strong>
              <br />(Obtained: 2020-Oct-18) (License: 00763322-3362)
              <br />A SAFe implementation professional responsible for training leaders and change agents to drive Lean-Agile transformation at enterprise scale.
            </li>
            <li>
              <strong>Project Management Professional (PMP)</strong>
              <br />(Obtained: 2012-Dec-22) (License: 1563680)
              <br />PMI&rsquo;s most important industry-recognized certification for project managers.
            </li>
            <li>
              <strong>CompTIA Project+ (P+)</strong>
              <br />(Obtained: 2009-Jan-14) (License: COMP001007606759)
            </li>
          </ul>

          <h2>Industry Certifications (DoD 8570.1M / DoD NICE Framework IAM III, IAT III, &amp; IASAE III Qualified)</h2>

          <h3>DoD 8570 Baseline Security Certifications</h3>
          <ul>
            <li>
              <strong>CISSP – Information Systems Security Engineering (CISSP-ISSEP)</strong>
              <br />(Obtained: 2019-Nov-6) (License: 393607)
            </li>
            <li>
              <strong>Certified Information Systems Security Professional (CISSP)</strong>
              <br />(Obtained: 2018-Dec-05) (License: 393607)
            </li>
            <li>
              <strong>CompTIA Secure Infrastructure Specialist (CSIS)</strong> — includes S+ce, N+ce, &amp; A+ce
              <br />(Obtained: 2013-Aug-27) (License: COMP001007606759)
            </li>
            <li><strong>CompTIA Security+ (S+ce)</strong> (Obtained: 2008-Nov-19)</li>
            <li><strong>CompTIA Network+ (N+ce)</strong> (Obtained: 2008-Oct-08)</li>
            <li><strong>CompTIA A+ (A+ce)</strong> (Obtained: 2008-Aug-15)</li>
          </ul>

          <h3>DoD 8570 Computing Environment Certifications</h3>
          <ul>
            <li><strong>VMware Certified Professional – Application Modernization 2021/2022 (VCP-AM)</strong> (License: VMW-02637767W)</li>
            <li><strong>VMware Certified Professional 6 – Cloud Management and Automation (VCP6-CMA)</strong> (Obtained: 2018-May-15)</li>
            <li><strong>Microsoft Certified Professional (MCP)</strong> (Obtained: 2009-Mar-21)</li>
            <li><strong>CIW Professional</strong> (Obtained: 2009-Apr-22) including CIW Database Design Specialist</li>
          </ul>

          <h2>Degrees and Graduate Certificates</h2>
          <ul>
            <li>DBA (Focus: IT Management) — Penn State University (In Progress)</li>
            <li>GC-PM (Focus: Project Management) — University of Maryland (Completed 08/30/2012)</li>
            <li>MBA-ITM (Focus: IT Management) — Western Governors University (Completed 6/18/2010)</li>
            <li>BS-IT (Focus: Information Technology) — Western Governors University (Completed 07/16/2009)</li>
            <li>A.A.S. (Focus: Electronics Technology) — Cochise College (Awarded 12/2013)</li>
          </ul>
        </div>
      </section>
    </>
  );
}
