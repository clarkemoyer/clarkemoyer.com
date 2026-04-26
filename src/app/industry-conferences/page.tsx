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
        <div className="max-w-4xl mx-auto px-4">

          {/* Cross-link to Professional Development */}
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-10 text-sm text-blue-800">
            For the complete record of all professional development events including academic residencies
            and chapter meetings, see the{' '}
            <Link href="/professional-development/" className="font-medium text-blue-700 hover:underline">
              Professional Development page
            </Link>
            .
          </div>

          {/* Why Conferences Matter */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">Why Conferences Matter</h2>
          <p className="text-gray-700 mb-10 leading-relaxed">
            Conferences aren&rsquo;t just networking events &mdash; they&rsquo;re the highest-density learning
            environments in the industry. You get the talks, the hallway conversations, the vendor demos, and
            often the certification testing all in one place. Clarke has used conferences to earn certifications
            on-site, meet the people building the tools he uses, and calibrate his sense of where the industry
            is heading. There is no substitute for being in the room.
          </p>

          {/* Conferences Attended */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-500 pl-4">Conferences Attended</h2>

          {/* KubeCon — Featured Hero Card */}
          <div className="bg-blue-900 text-white rounded-2xl p-8 mb-10 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">☸️</span>
              <div>
                <h3 className="text-2xl font-bold mb-1">KubeCon + CloudNativeCon North America</h3>
                <p className="text-blue-300 text-sm font-medium">November 10–13, 2025 · Atlanta, GA</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              The CNCF&rsquo;s flagship annual conference. Clarke attended in 2025 in Atlanta.{' '}
              <strong>KubeCon + CloudNativeCon</strong> is co-located with <strong>CNCFCon</strong> &mdash; both run
              simultaneously at the same venue. KubeCon is the Kubernetes-focused track; CNCFCon covers the
              broader CNCF project ecosystem. Clarke recommends attending both.
            </p>
            <ul className="space-y-1 text-blue-200 text-sm mb-6">
              <li>▸ The single best signal of where cloud-native infrastructure is heading</li>
              <li>▸ Co-located with CNCFCon — broader CNCF project ecosystem coverage</li>
              <li>▸ Recommended for anyone in cloud-native, containers, Kubernetes, or platform engineering</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition-colors"
              >
                KubeCon + CloudNativeCon →
              </a>
              <a
                href="https://events.linuxfoundation.org/cncf-con/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                CNCFCon →
              </a>
            </div>
          </div>

          {/* VMworld Era */}
          <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8 border-l-4 border-gray-400 pl-4">🖥️ VMworld Era</h3>
          <p className="text-gray-600 text-sm mb-6">
            VMware&rsquo;s annual conference &mdash; now rebranded as <strong>VMware Explore</strong>. Clarke attended
            multiple years during the DCGS private cloud era, when VMware was the dominant enterprise
            virtualization platform and the conference was the center of gravity for anyone working in
            data center operations.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { year: '2017', loc: 'Las Vegas, NV', note: '40 Hours CPE. In-person attendance — Clarke\'s highest-CPE VMworld year. On-site Pearson VUE testing centers allowed same-week certification.' },
              { year: '2020', loc: 'Virtual', note: '20 Hours CPE. Virtual edition during the pandemic year.' },
              { year: '2021 (Americas)', loc: 'Virtual', note: '30 Hours CPE. Attended the virtual Americas edition during the private cloud era of DCGS operations.' },
            ].map((entry) => (
              <div key={entry.year} className="bg-gray-50 border-l-4 border-gray-300 rounded-r-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <p className="font-bold text-gray-900">🖥️ VMworld {entry.year}</p>
                  <p className="text-sm text-gray-500">{entry.loc}</p>
                </div>
                <p className="text-gray-700 text-sm mb-2">{entry.note}</p>
                <p className="text-gray-500 text-xs">
                  See VMware certs →{' '}
                  <Link href="/clarke-moyer-vcp4-dcv-passing-guide" className="text-blue-600 hover:underline">VCP4</Link>
                  {', '}
                  <Link href="/clarke-moyer-vcp5-dcv-passing-guide" className="text-blue-600 hover:underline">VCP5</Link>
                  {', '}
                  <Link href="/clarke-moyer-vcp6-cma-passing-guide" className="text-blue-600 hover:underline">VCP6-CMA</Link>
                </p>
              </div>
            ))}

            <div className="bg-gray-50 border-l-4 border-gray-300 rounded-r-lg p-5">
              <p className="text-gray-700 text-sm mb-1">
                <strong>On-site Pearson VUE testing centers</strong> allowed same-week certification
              </p>
              <p className="text-gray-700 text-sm mb-1">Conference tickets historically included exam vouchers</p>
              <p className="text-gray-700 text-sm">Clarke completed multiple VMware certifications at VMworld testing centers</p>
            </div>
          </div>

          {/* Philosophy */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">Clarke&rsquo;s Conference Philosophy</h2>
          <div className="space-y-3 mb-10">
            {[
              'Conferences that bundle certification vouchers with attendance are the highest ROI model — you learn and certify in the same week.',
              'The hallway track (unscheduled conversations) is often more valuable than the sessions. The people in the hallway are the ones building the things.',
              'Attending a conference is a commitment signal — it tells your team and your employer you\'re invested in staying current.',
              'If you can only attend one conference per year, Clarke recommends KubeCon + CNCFCon for anyone in cloud, DevOps, or platform engineering roles.',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start text-gray-700 text-sm">
                <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8 rounded-r-lg">
            <p className="font-semibold text-amber-900">📅 Coming Soon</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke plans to document additional conference experiences here as they happen.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
