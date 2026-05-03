import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Clarke Moyer VMware VCP-AM Application Modernization Passing Guide',
  description: "Clarke Moyer's guide to the VMware VCP-AM (Application Modernization) certification — containers, Kubernetes, and modern app delivery on VMware.",
  openGraph: {
    title: 'Clarke Moyer VMware VCP-AM Application Modernization Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the VMware VCP-AM (Application Modernization) certification — containers, Kubernetes, and modern app delivery on VMware.",
    type: 'article',
    url: '/clarke-moyer-vcp-am-passing-guide/',
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

export default function VCPAMGuidePage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Certification Guides', url: '/certification/' },
        { name: 'VCP-AM Guide', url: '/clarke-moyer-vcp-am-passing-guide/' },
      ])} />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}VCP-AM Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer VMware VCP-AM Application Modernization Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <p className="text-amber-800 font-semibold">⚠️ VMware Training Prerequisite</p>
            <p className="text-amber-700 text-sm mt-1">VMware certs require attending an official VMware training course to be eligible for the exam. This is a hard requirement — no workaround exists.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the VCP-AM, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a contest publicly with another person to complete your certification before they complete a similar or identical educational objective.</li>
              <li>Go audio-first — find audiobooks or lecture recordings and consume them on your phone while walking, driving, or commuting.</li>
              <li>Practice tests are the core of passing. Buy the book primarily to get the digital test prep access that comes with it.</li>
              <li>Test methodology: run all questions once, then rerun only the ones you got wrong until you hit zero wrong, then restart with a real-test mix until you&rsquo;re scoring 90%+. Don&rsquo;t over-study — test when you hit 80% and use the re-take as your safety net.</li>
            </ol>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
            <p className="text-blue-800 font-semibold">🔀 The Bridge Cert</p>
            <p className="text-blue-700 text-sm mt-1">VCP-AM sits at the intersection of the VMware era and the cloud-native era. VMware Tanzu is essentially Kubernetes with VMware&rsquo;s enterprise wrapper — containers, application modernization, and the Kubernetes primitives that the CNCF defines. This cert acknowledged that the future was cloud-native even while the VMware ecosystem was the delivery vehicle.</p>
          </div>

          <h2>About VCP-AM</h2>
          <p>
            The VMware Certified Professional – Application Modernization (VCP-AM) is a more modern credential than the
            VCP6-CMA, focused on containerization, Kubernetes, and modern application delivery on the VMware platform.
            It validates skills in VMware Tanzu — VMware&rsquo;s portfolio for Kubernetes and cloud-native application workloads.
          </p>
          <p>
            Clarke holds this certification under license <strong>VMW-02637767W</strong> (VCP-AM 2021/2022).
            As the DoD and enterprise environments shift toward cloud-native architectures, container orchestration knowledge
            has become increasingly important for IT professionals operating in those environments.
          </p>

          <h2>Key Topics Covered</h2>
          <ul>
            <li>VMware Tanzu portfolio — Tanzu Kubernetes Grid (TKG), Tanzu Application Platform (TAP)</li>
            <li>Kubernetes fundamentals — pods, deployments, services, ingress</li>
            <li>Container orchestration and lifecycle management</li>
            <li>Application modernization patterns — lift-and-shift vs. re-platform vs. re-architect</li>
            <li>vSphere with Tanzu (Supervisor clusters)</li>
            <li>Harbor container registry</li>
            <li>NSX-T networking for containerized workloads</li>
          </ul>

          <h2>How VCP-AM Differs from VCP6-CMA</h2>
          <p>
            Where VCP6-CMA focused on VMware&rsquo;s traditional cloud management stack (vRealize Automation, vRealize Operations),
            VCP-AM focuses on the modern Kubernetes and container-native layer. If you&rsquo;re operating in an environment
            moving toward DevSecOps pipelines, containerized microservices, or Kubernetes-based platforms, VCP-AM is the
            more current and relevant credential.
          </p>

          <h2>Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">VMware Tanzu &amp; Kubernetes Study Guides</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Search for current Tanzu and Kubernetes study materials — the platform evolves quickly, so match your materials
            to the current exam blueprint version.
          </p>
          <p className="not-prose">
            {amznSearch(`https://www.amazon.com/s?k=VMware+Tanzu+Kubernetes+study+guide&tag=${AMZN_TAG}`, 'Search: VMware Tanzu Kubernetes Study Guides')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">VCP Application Modernization Exam Prep</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Practice test books and exam prep for the VCP-AM track.
          </p>
          <p className="not-prose">
            {amznSearch(`https://www.amazon.com/s?k=VMware+VCP+application+modernization+exam&tag=${AMZN_TAG}`, 'Search: VMware VCP Application Modernization Exam Prep')}
          </p>

          <h2>Training Options</h2>
          <p>
            As with all VMware certifications, an authorized training course is required before sitting for the exam:
          </p>
          <ul>
            <li><strong>VMware Education Services</strong> — courses like &ldquo;Kubernetes Fundamentals&rdquo; and &ldquo;VMware Tanzu Kubernetes Grid: Deploy, Configure, Manage&rdquo;</li>
            <li><strong>VMware Authorized Training Centers (VATCs)</strong></li>
            <li>Pluralsight VMware learning paths (for supplemental study, not exam eligibility)</li>
          </ul>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <p className="not-prose text-sm text-gray-500 mt-2">
            📅 See also: <a href="/industry-conferences/" className="underline hover:text-gray-700">Industry Conferences</a>
          </p>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded">
            <p className="text-amber-800 font-bold text-lg mb-3">🚀 What Comes Next</p>
            <p className="text-amber-700 mb-3">The VMware cloud management era is over. The industry has moved decisively to cloud-native architecture under the CNCF. Clarke&rsquo;s recommendation for anyone entering cloud today:</p>
            <ul className="list-disc ml-6 space-y-2 text-amber-700 mb-4">
              <li>Focus on application and network service delivery, not underlying infrastructure components</li>
              <li>The underlying cloud is now commoditized — AWS, Azure, GCP, and private clouds built on OpenStack/Kubernetes are fungible</li>
              <li>Certify on what runs ON the cloud, not what the cloud runs on</li>
              <li><strong>KubeCon + CloudNativeCon</strong> (commonly called KubeCon) is co-located with <strong>CNCFCon</strong> &mdash; both run simultaneously at the same venue. Clarke recommends attending both. KubeCon is the Kubernetes-focused track; CNCFCon covers the broader CNCF project ecosystem. Clarke attended last year in Atlanta.</li>
            </ul>
            <p className="text-amber-700">
              <a href="https://www.cncf.io" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Cloud Native Computing Foundation &rarr;</a>
              {' | '}
              <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">KubeCon + CloudNativeCon &rarr;</a>
              {' | '}
              <a href="https://events.linuxfoundation.org/cncf-con/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">CNCFCon &rarr;</a>
            </p>
          </div>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
