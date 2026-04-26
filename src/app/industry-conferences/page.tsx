import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industry Conferences | Clarke Moyer',
  description:
    'Industry conferences Clarke Moyer has attended — VMworld, KubeCon + CloudNativeCon, and others. Clarke is a strong advocate for in-person industry conferences as a learning and certification accelerator.',
  openGraph: {
    title: 'Industry Conferences | Clarke Moyer',
    description:
      'Industry conferences Clarke Moyer has attended — VMworld, KubeCon + CloudNativeCon, and others. Clarke is a strong advocate for in-person industry conferences as a learning and certification accelerator.',
    type: 'article',
    url: '/industry-conferences/',
  },
};

export default function IndustryConferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm mb-4">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' / '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link>{' / '}
            Industry Conferences
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Industry Conferences</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Clarke is a strong advocate for in-person industry conferences &mdash; for learning,
            certification, networking, and staying current with where the industry is actually going.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* Cross-link to Professional Development */}
          <div className="not-prose bg-blue-50 border border-blue-200 rounded p-4 mb-8 text-sm text-blue-800">
            For the complete record of all professional development events including academic residencies
            and chapter meetings, see the{' '}
            <Link href="/professional-development/" className="font-medium text-blue-700 hover:underline">
              Professional Development page
            </Link>
            .
          </div>

          {/* Why Conferences Matter */}
          <h2>Why Conferences Matter</h2>
          <p>
            Conferences aren&rsquo;t just networking events &mdash; they&rsquo;re the highest-density learning
            environments in the industry. You get the talks, the hallway conversations, the vendor demos, and
            often the certification testing all in one place. Clarke has used conferences to earn certifications
            on-site, meet the people building the tools he uses, and calibrate his sense of where the industry
            is heading. There is no substitute for being in the room.
          </p>

          {/* Conferences Attended */}
          <h2>Conferences Attended</h2>

          {/* VMworld */}
          <div className="not-prose bg-gray-50 border-l-4 border-gray-400 p-6 mb-8 rounded">
            <p className="font-bold text-gray-900 text-xl mb-2">🖥️ VMworld (Multiple Years)</p>
            <p className="text-gray-700 text-sm mb-3">
              VMware&rsquo;s annual conference &mdash; now rebranded as <strong>VMware Explore</strong>. Clarke attended
              multiple years during the DCGS private cloud era, when VMware was the dominant enterprise
              virtualization platform and the conference was the center of gravity for anyone working in
              data center operations.
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
              <li>On-site Pearson VUE testing centers allowed same-week certification</li>
              <li>Conference tickets historically included exam vouchers</li>
              <li>Clarke completed multiple VMware certifications at VMworld testing centers</li>
              <li>Recommended for anyone in enterprise virtualization or multi-cloud</li>
            </ul>
          </div>

          {/* KubeCon */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="font-bold text-blue-900 text-xl mb-2">☸️ KubeCon + CloudNativeCon — Atlanta (2025)</p>
            <p className="text-blue-800 text-sm mb-3">
              The CNCF&rsquo;s flagship annual conference. Clarke attended in 2025 in Atlanta.{' '}
              <strong>KubeCon + CloudNativeCon</strong> is co-located with <strong>CNCFCon</strong> &mdash; both run
              simultaneously at the same venue. KubeCon is the Kubernetes-focused track; CNCFCon covers the
              broader CNCF project ecosystem. Clarke recommends attending both.
            </p>
            <ul className="list-disc ml-5 space-y-1 text-blue-800 text-sm mb-4">
              <li>The single best signal of where cloud-native infrastructure is heading</li>
              <li>Co-located with CNCFCon — broader CNCF project ecosystem coverage</li>
              <li>Recommended for anyone in cloud-native, containers, Kubernetes, or platform engineering</li>
            </ul>
            <p className="text-blue-700 text-sm">
              <a
                href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                KubeCon + CloudNativeCon &rarr;
              </a>
              {' | '}
              <a
                href="https://events.linuxfoundation.org/cncf-con/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                CNCFCon &rarr;
              </a>
            </p>
          </div>

          {/* Philosophy */}
          <h2>Clarke&rsquo;s Conference Philosophy</h2>
          <ul>
            <li>Conferences that bundle certification vouchers with attendance are the highest ROI model — you learn and certify in the same week.</li>
            <li>The hallway track (unscheduled conversations) is often more valuable than the sessions. The people in the hallway are the ones building the things.</li>
            <li>Attending a conference is a commitment signal — it tells your team and your employer you&rsquo;re invested in staying current.</li>
            <li>If you can only attend one conference per year, Clarke recommends KubeCon + CNCFCon for anyone in cloud, DevOps, or platform engineering roles.</li>
          </ul>

          {/* Coming Soon */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-400 p-5 mb-8 rounded">
            <p className="font-semibold text-amber-900">📅 Coming Soon</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke plans to document additional conference experiences here as they happen.
            </p>
          </div>

          <div className="mt-8 text-center not-prose">
            <Link href="/fun" className="text-blue-600 hover:underline font-medium">← Back to Fun</Link>
          </div>
        </div>
      </section>
    </>
  );
}
