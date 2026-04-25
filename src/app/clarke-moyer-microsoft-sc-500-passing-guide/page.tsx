import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft SC-500 Cloud AI Security Engineer Passing Guide',
  description: "Clarke Moyer's guide to the Microsoft SC-500 Cloud and AI Security Engineer Associate certification — Azure security for enterprise and DoD environments.",
  openGraph: {
    title: 'Clarke Moyer Microsoft SC-500 Cloud AI Security Engineer Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the Microsoft SC-500 Cloud and AI Security Engineer Associate certification.",
    type: 'article',
    url: '/clarke-moyer-microsoft-sc-500-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';
function amzn(asin: string, label: string) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

function amznSearch(query: string, label: string) {
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function SC500GuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / SC-500 Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft SC-500 Cloud &amp; AI Security Engineer Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8">
            <p className="font-bold text-green-900">✅ Currently Recommended by Clarke</p>
            <p className="text-green-800 text-sm mt-1">
              The SC-500 is a newer Microsoft certification focused specifically on securing cloud and AI workloads.
              For anyone in the DoD or enterprise space working with Azure-hosted systems and AI services, this is
              a high-value credential that complements the CISSP. Clarke recommends this as part of a modern
              cloud security certification track.
            </p>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the SC-500, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with another person to complete your SC-500 before they complete a similar educational objective. Accountability is the best study tool.</li>
              <li>Start with Microsoft Learn — the free SC-500 learning path is excellent and maps directly to the exam objectives. Link it to your phone and use it on the go.</li>
              <li>Buy a practice test book primarily to access the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then restart with real exam-length mixed sets until you&rsquo;re consistently over 90%.</li>
              <li>Don&rsquo;t over-study. Test when you&rsquo;re over 80% on official practice. The re-take is your safety net.</li>
            </ol>
          </div>

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
            <p className="font-bold text-amber-900">📋 A Note on Clarke&rsquo;s Version</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke completed an earlier version of this certification track when it was more heavily focused on
              core Azure security and Microsoft 365 security administration. The exam has since evolved toward
              Cloud and AI Security Engineering. The fundamentals and study methodology remain the same, but
              be aware that current exam objectives place greater emphasis on AI workload security than the
              version Clarke sat. Always verify current exam objectives at{' '}
              <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Learn</a>{' '}
              before purchasing study materials.
            </p>
          </div>

          <h2>About the SC-500 Exam</h2>
          <p>
            The Microsoft SC-500 (Cloud and AI Security Engineer Associate) certification validates skills in securing
            cloud environments and AI workloads on Microsoft Azure. It covers:
          </p>
          <ul>
            <li>Planning and implementing security for cloud infrastructure</li>
            <li>Securing AI services, data, and applications on Azure</li>
            <li>Managing identity, governance, and compliance in cloud environments</li>
            <li>Implementing threat protection and security operations</li>
          </ul>
          <p>
            This cert sits above SC-900 in the Microsoft security track and is particularly relevant for roles
            involving AI security — a fast-growing requirement in DoD and enterprise settings.
          </p>

          <div className="not-prose bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8">
            <h3 className="font-bold text-yellow-900 mb-1">📋 Recommended Prerequisites</h3>
            <p className="text-yellow-800 text-sm">
              Complete <Link href="/clarke-moyer-microsoft-sc-900-passing-guide" className="underline">SC-900</Link> and{' '}
              <Link href="/clarke-moyer-microsoft-az-900-passing-guide" className="underline">AZ-900</Link> first.
              Familiarity with Microsoft Defender, Purview, and Entra ID is helpful before sitting this exam.
            </p>
          </div>

          <h2>Study Resources</h2>

          <h3>Microsoft Learn (Free — Start Here)</h3>
          <p>
            Microsoft&rsquo;s official free learning path for SC-500 is comprehensive and directly mapped to exam objectives.
            Use it on your phone.{' '}
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/" target="_blank" rel="noopener noreferrer">
              Microsoft SC-500 Learning Path ↗
            </a>
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">SC-500 Study Guide</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Buy primarily to access the digital practice test bank. The online test portal is the real value.
          </p>
          <p className="not-prose">
            {amznSearch('Microsoft SC-500 Cloud AI Security Engineer study guide exam prep', 'Microsoft SC-500 Cloud & AI Security Engineer Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">SC-500 Practice Tests</h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Audio content for the SC series for studying on the go.
          </p>
          <p className="not-prose">
            {amznSearch('Microsoft SC-500 practice exam questions test prep', 'SC-500 Practice Exam Questions')}
          </p>

          <h2>Study Method</h2>
          <p>
            Clarke&rsquo;s approach to all Microsoft certification exams:
          </p>
          <ol>
            <li><strong>Microsoft Learn first</strong> — work through the entire free path before buying anything.</li>
            <li><strong>Audio content</strong> — find a podcast or audiobook on Azure security concepts to reinforce while commuting, walking, or at the gym.</li>
            <li><strong>Practice test grind</strong> — all questions once through, then wrong-answers-only loop until clean, then full mock exams at real test length and domain mix until 90%+.</li>
            <li><strong>Hands-on labs</strong> — Microsoft Learn includes free sandbox labs. Do them. Azure security is a hands-on exam.</li>
          </ol>

          <p className="not-prose text-xs text-gray-400 mt-12">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you.{' '}
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
