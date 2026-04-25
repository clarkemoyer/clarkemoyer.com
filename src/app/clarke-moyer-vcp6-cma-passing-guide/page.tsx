import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer VMware VCP6-CMA Certification Passing Guide',
  description: "Clarke Moyer's guide to the VMware VCP6-CMA (Cloud Management and Automation) certification.",
  openGraph: {
    title: 'Clarke Moyer VMware VCP6-CMA Certification Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the VMware VCP6-CMA (Cloud Management and Automation) certification.",
    type: 'article',
    url: '/clarke-moyer-vcp6-cma-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';
function amznSearch(url: string, label: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function VCP6CMAGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}VCP6-CMA Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer VMware VCP6-CMA Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <p className="text-amber-800 font-semibold">⚠️ VMware Training Prerequisite</p>
            <p className="text-amber-700 text-sm mt-1">VMware certs require attending an official VMware training course to be eligible for the exam. This is a hard requirement — no workaround exists.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the VCP6-CMA, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.</li>
              <li>Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.</li>
              <li>Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.</li>
              <li>Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you&rsquo;re scoring 90%+. Don&rsquo;t over-study — test when you hit 80% and use the re-take as your safety net.</li>
            </ol>
          </div>

          <h2>About VCP6-CMA</h2>
          <p>
            The VMware Certified Professional 6 – Cloud Management and Automation (VCP6-CMA) validates skills
            in vRealize Automation, vRealize Operations Manager, and cloud management at the vSphere 6 level.
            It demonstrates you can deploy and manage VMware&rsquo;s cloud management stack in enterprise environments —
            a credential that was particularly relevant for DoD and large enterprise VMware shops in the 2016–2020 timeframe.
          </p>
          <p>
            Clarke obtained this certification on <strong>May 15, 2018</strong> as part of his DoD 8570 Computing Environment
            certification track.
          </p>

          <h2>Key Topics Covered</h2>
          <ul>
            <li>vRealize Automation (vRA) — blueprint design, tenant management, and catalog services</li>
            <li>vRealize Operations Manager (vROps) — performance analytics, capacity planning, and compliance</li>
            <li>vRealize Orchestrator — workflow automation and integration</li>
            <li>NSX integration for cloud networking</li>
            <li>Identity management and multi-tenancy</li>
          </ul>

          <h2>Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">VMware vRealize Automation Study Guide</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Search Amazon for current vRealize Automation study guides — the landscape changes with VMware product versions.
            Focus on the version that matches your exam blueprint.
          </p>
          <p className="not-prose">
            {amznSearch(`https://www.amazon.com/s?k=VMware+vRealize+Automation+study+guide&tag=${AMZN_TAG}`, 'Search: VMware vRealize Automation Study Guides')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">VMware VCP Cloud Management Exam Prep</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Practice test books and exam prep materials for the VCP cloud management track.
          </p>
          <p className="not-prose">
            {amznSearch(`https://www.amazon.com/s?k=VMware+VCP+cloud+management+exam+prep&tag=${AMZN_TAG}`, 'Search: VMware VCP Cloud Management Exam Prep')}
          </p>

          <h2>Training Options</h2>
          <p>
            VMware requires completing an authorized training course before you can sit for the exam.
            Options include:
          </p>
          <ul>
            <li><strong>VMware Education Services</strong> — official in-person and online courses at mylearn.vmware.com</li>
            <li><strong>VMware Authorized Training Centers (VATCs)</strong> — third-party authorized training providers</li>
            <li>Some courses are available via government training channels (e.g., Army ATIS, DISA training programs)</li>
          </ul>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
