import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer VMware VCP5-DCV Certification Passing Guide',
  description: "Clarke Moyer's guide to the VMware VCP5-DCV (vSphere 5 Data Center Virtualization) certification.",
  openGraph: {
    title: 'Clarke Moyer VMware VCP5-DCV Certification Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the VMware VCP5-DCV (vSphere 5 Data Center Virtualization) certification.",
    type: 'article',
    url: '/clarke-moyer-vcp5-dcv-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';

export default function VCP5DCVGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}VCP5-DCV Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer VMware VCP5-DCV Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded">
            <p className="text-amber-800 font-semibold">📋 Legacy Certification Note</p>
            <p className="text-amber-700 text-sm mt-1">
              The VCP5-DCV is a legacy credential based on vSphere 5, which has been end-of-lifed by VMware.
              It is no longer available as a new certification. Clarke holds this credential as part of his DoD 8570
              Computing Environment track history. It demonstrates foundational data center virtualization knowledge
              that carries forward to modern vSphere versions.
            </p>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <p className="text-amber-800 font-semibold">⚠️ VMware Training Prerequisite</p>
            <p className="text-amber-700 text-sm mt-1">All VMware certifications require attending an official VMware authorized training course to be eligible for the exam.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass VCP exams, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.</li>
              <li>Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.</li>
              <li>Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.</li>
              <li>Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you&rsquo;re scoring 90%+. Don&rsquo;t over-study — test when you hit 80% and use the re-take as your safety net.</li>
            </ol>
          </div>

          <h2>About VCP5-DCV</h2>
          <p>
            The VMware Certified Professional 5 – Data Center Virtualization (VCP5-DCV) validates core vSphere 5
            administration skills — the foundational building block of enterprise VMware environments. Clarke obtained
            this certification in <strong>February 2012</strong> (License: VMW-00546448G-00080093) as part of his
            DoD 8570 Computing Environment certification track.
          </p>
          <p>
            At the time, vSphere 5 represented a major leap in enterprise virtualization — ESXi became the only
            hypervisor (ESX console-based was retired), vCenter 5 brought enhanced cluster management, and features
            like Storage DRS and Profile-Driven Storage were introduced. A VCP5-DCV meant you could design, deploy,
            and manage a production VMware data center.
          </p>

          <h2>Key Topics Covered</h2>
          <ul>
            <li>ESXi 5 architecture — hypervisor, kernel, and management interfaces</li>
            <li>vCenter Server 5 — deployment, configuration, and management</li>
            <li>vSphere HA (High Availability) and Fault Tolerance</li>
            <li>vSphere DRS (Distributed Resource Scheduler)</li>
            <li>vMotion and Storage vMotion — live migration of VMs and storage</li>
            <li>vSphere Distributed Switch (vDS) — enterprise virtual networking</li>
            <li>Storage: VMFS, NFS, iSCSI, FCoE, and Storage DRS</li>
            <li>VM templates, snapshots, and cloning</li>
            <li>vSphere Update Manager</li>
            <li>Resource pools and performance monitoring</li>
          </ul>

          <h2>Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">VMware vSphere Study Guides</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Search for current VMware vSphere study guides. While vSphere 5 materials are primarily of historical
            interest, the core DCV concepts carry forward through vSphere 6, 7, and 8.
          </p>
          <p className="not-prose">
            <a
              href={`https://www.amazon.com/s?k=VMware+vSphere+study+guide+VCP&tag=${AMZN_TAG}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-blue-600 hover:underline font-medium"
            >
              Search: VMware vSphere VCP Study Guides ↗
            </a>
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
