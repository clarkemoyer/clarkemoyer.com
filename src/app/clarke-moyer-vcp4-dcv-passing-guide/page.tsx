import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer VMware VCP4-DCV Certification Passing Guide',
  description: "Clarke Moyer's guide to the VMware VCP4-DCV (vSphere 4 Data Center Virtualization) certification — the original DCV credential.",
  openGraph: {
    title: 'Clarke Moyer VMware VCP4-DCV Certification Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the VMware VCP4-DCV (vSphere 4 Data Center Virtualization) certification — the original DCV credential.",
    type: 'article',
    url: '/clarke-moyer-vcp4-dcv-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';

export default function VCP4DCVGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}VCP4-DCV Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer VMware VCP4-DCV Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded">
            <p className="text-amber-800 font-semibold">📋 Historical / Legacy Certification</p>
            <p className="text-amber-700 text-sm mt-1">
              The VCP4-DCV is a historical credential based on vSphere 4 — a version of VMware&rsquo;s platform
              that has been end-of-lifed for over a decade. This cert is no longer available. Clarke holds it as
              part of his DoD 8570 Computing Environment track and as the foundation on which his VCP5-DCV and
              later VMware credentials were built.
            </p>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <p className="text-amber-800 font-semibold">⚠️ VMware Training Prerequisite</p>
            <p className="text-amber-700 text-sm mt-1">All VMware certifications require attending an official VMware authorized training course to be eligible for the exam.</p>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
            <p className="text-blue-800 font-semibold">🖥️ The VMware Story Begins</p>
            <p className="text-blue-700 text-sm mt-1">Clarke started his VMware journey with hands-on training before VMware even had a formal certification program (VMware 3 era). This VCP4-DCV represents the formal beginning of a certification track that would span over a decade, driven by real-world work building private clouds and dark clouds on the DCGS program. This cert is the foundation of that story.</p>
          </div>

          <h2>About VCP4-DCV</h2>
          <p>
            The VMware Certified Professional 4 – Data Center Virtualization (VCP4-DCV) was the original DCV
            credential — the predecessor to the VCP5-DCV and the start of Clarke&rsquo;s VMware certification track.
            Clarke obtained this certification in <strong>November 2010</strong> (License: VMW-00546448G-00080093).
          </p>
          <p>
            vSphere 4 was a significant moment in enterprise virtualization history. It was the first version to
            ship as a combined ESX and ESXi platform, introduced vSphere as a brand name (replacing VI3), and
            brought features like VMware vShield Zones for VM-level security. At the time, virtualization was
            rapidly shifting from &ldquo;interesting technology&rdquo; to &ldquo;standard data center practice.&rdquo;
          </p>
          <p>
            The VCP4 was Clarke&rsquo;s starting point on the VMware track, followed by the VCP5-DCV in 2012,
            VCP6-CMA in 2018, and ultimately the VCP-AM in 2021/2022. Each credential built on the foundational
            understanding established here.
          </p>

          <h2>Key Topics (Historical)</h2>
          <ul>
            <li>ESX 4 and ESXi 4 hypervisor architecture</li>
            <li>vCenter Server 4 — centralized management and orchestration</li>
            <li>vSphere HA and DRS — availability and workload balancing</li>
            <li>vMotion — live VM migration between hosts</li>
            <li>vSphere Standard and Distributed Switches</li>
            <li>VMFS datastores, NAS, and iSCSI storage</li>
            <li>VM lifecycle management — templates, clones, snapshots</li>
          </ul>

          <h2>If You&rsquo;re Looking to Learn VMware Today</h2>
          <p>
            vSphere 4 content is purely of historical interest. If you&rsquo;re building VMware skills today,
            focus on vSphere 8 and VMware&rsquo;s Tanzu/Kubernetes portfolio. See the{' '}
            <Link href="/clarke-moyer-vcp5-dcv-passing-guide/">VCP5-DCV guide</Link> for the next step in the
            historical progression, or jump to the{' '}
            <Link href="/clarke-moyer-vcp-am-passing-guide/">VCP-AM guide</Link> for the current
            cloud-native VMware track.
          </p>

          <h2>Study Materials</h2>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            For anyone building current VMware skills, search for modern vSphere study guides:
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
