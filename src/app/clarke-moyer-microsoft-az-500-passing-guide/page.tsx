import type { Metadata } from 'next';
import Link from 'next/link';
import GuideConsultCta from '@/components/GuideConsultCta';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Clarke Moyer AZ-500 Microsoft Azure Security Technologies Passing Guide',
  description: "Clarke Moyer's guide to the AZ-500 Microsoft Azure Security Technologies exam, retired August 31, 2026, and the SC-500 Cloud and AI Security Engineer exam that is now the closest current option.",
  openGraph: {
    title: 'Clarke Moyer AZ-500 Microsoft Azure Security Technologies Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the AZ-500 Microsoft Azure Security Technologies certification — Azure security operations, identity, network security, and data protection.",
    type: 'article',
    url: '/clarke-moyer-microsoft-az-500-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';

export default function AZ500GuidePage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Certification Guides', url: '/certification/' },
        { name: 'AZ-500 Azure Security Technologies', url: '/clarke-moyer-microsoft-az-500-passing-guide/' },
      ])} />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}AZ-500 Azure Security Technologies
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer AZ-500 Microsoft Azure Security Technologies Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-gray-100 border-l-4 border-gray-500 p-5 mb-6">
            <p className="font-bold text-gray-900">🗂 Retired by Microsoft on August 31, 2026</p>
            <p className="text-gray-700 text-sm mt-1">
              Microsoft retired the AZ-500 exam, the Azure Security Engineer Associate certification and its renewal
              assessment. Clarke earned the certification through AZ-500, but nobody can earn or renew it now. This
              guide stays up for historical context.
            </p>
          </div>

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">✅ Take SC-500 instead</p>
            <p className="text-green-700 mt-1">
              The closest current exam is{' '}
              <a href="https://learn.microsoft.com/en-us/credentials/certifications/cloud-and-ai-security-engineer-associate/" target="_blank" rel="noopener noreferrer" className="underline">
                SC-500: Microsoft Certified: Cloud and AI Security Engineer Associate
              </a>
              , which Clarke also holds. It covers much of the same ground as AZ-500: identity and access, securing
              storage, databases and networking, securing compute, and managing security posture. Clarke recommends it for anyone with 1&ndash;2 years of
              Azure experience who wants to specialize in cloud security, and it still pairs well with the CISSP.
              Read{' '}
              <Link href="/clarke-moyer-microsoft-sc-500-passing-guide/" className="underline">Clarke&rsquo;s SC-500 guide</Link>.
            </p>
            <p className="text-sm mt-3">
              <a
                href={`https://www.amazon.com/s?k=SC-500+Cloud+and+AI+Security+Engineer+study+guide&tag=${AMZN_TAG}`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-blue-600 hover:underline font-medium"
              >
                SC-500 Study Guides on Amazon ↗
              </a>
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: What Is AZ-500?</h2>
            <p className="text-blue-800">
              AZ-500 (Microsoft Azure Security Technologies) is an Associate-level Azure certification for security
              engineers who implement security controls, maintain security posture, and manage identity and access.
              Clarke holds this certification and maintains it as the Azure security landscape evolves. This is one
              of the highest-value Azure certifications for anyone in a cloud security or DevSecOps role.
            </p>
          </div>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mb-4 mt-10 border-l-4 border-blue-500 pl-4">About AZ-500</h2>
          <p>
            The <strong>AZ-500: Microsoft Azure Security Technologies</strong> exam validates your ability to
            implement platform protections, manage security operations, and secure data and applications in Azure.
            Unlike the fundamentals-level AZ-900 or SC-900, this is an Associate-level credential requiring hands-on
            security experience with the Azure platform.
          </p>
          <p>
            Key domains covered by the AZ-500:
          </p>
          <ul>
            <li><strong>Azure Active Directory / Microsoft Entra ID</strong> — identity governance, conditional access, Privileged Identity Management (PIM)</li>
            <li><strong>Network security</strong> — Network Security Groups (NSGs), Azure Firewall, Azure DDoS Protection, Virtual Network segmentation</li>
            <li><strong>Azure Security Center / Microsoft Defender for Cloud</strong> — security posture management, threat detection, regulatory compliance</li>
            <li><strong>Azure Key Vault</strong> — secrets management, certificate lifecycle, HSM-backed keys</li>
            <li><strong>Storage security</strong> — SAS tokens, storage account firewalls, encryption at rest and in transit</li>
            <li><strong>Monitoring and incident response</strong> — Azure Monitor, Microsoft Sentinel, Log Analytics</li>
          </ul>

          <h2>Who It&rsquo;s For</h2>
          <p>
            The AZ-500 is the right cert for:
          </p>
          <ul>
            <li>Security engineers responsible for Azure workload security</li>
            <li>Cloud architects moving into a security specialization</li>
            <li>Anyone holding the CISSP who wants Azure-specific security validation</li>
            <li>DoD and enterprise professionals working in Azure-hosted or Azure-connected environments</li>
            <li>Security analysts who need to speak credibly about cloud-native security controls</li>
          </ul>

          <h2>Study Approach (Clarke&rsquo;s Method)</h2>
          <ol>
            <li><strong>Competition first.</strong> Create a public contest with another person to complete your AZ-500 before they complete a comparable certification. Accountability is the best study plan.</li>
            <li><strong>Audio-first.</strong> Security concepts absorb well during commutes and walks. Get the domain structure in your head before opening practice questions.</li>
            <li><strong>Microsoft Learn paths.</strong> Microsoft&rsquo;s free AZ-500 learning path maps directly to exam objectives and is the single best free resource available. Use it first.</li>
            <li><strong>Practice exams.</strong> Buy a study guide primarily to get the digital test bank. Run all questions once, rerun only wrong answers until zero remain, then simulate full exam-length mixed sets.</li>
            <li><strong>Grind wrong answers only.</strong> Don&rsquo;t re-study everything — focus exclusively on the domains where you&rsquo;re missing questions.</li>
            <li><strong>Mock at 90%+.</strong> Schedule and sit when you&rsquo;re consistently clearing 90% on mock exams. Don&rsquo;t over-study — the re-take is your safety net.</li>
          </ol>

          <p>
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Microsoft Learn — Azure Security Engineer Associate (retired) ↗
            </a>
          </p>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mb-4 mt-10 border-l-4 border-blue-500 pl-4">Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AZ-500 Study Guides <span className="text-green-700 text-base font-semibold ml-2">← Search for Current Edition</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Microsoft updates AZ-500 objectives regularly. Search for the most current study guide rather than
            a specific edition — match the publication date to the current exam objectives on Microsoft Learn.
          </p>
          <p className="not-prose">
            <a
              href={`https://www.amazon.com/s?k=AZ-500+study+guide&tag=${AMZN_TAG}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-blue-600 hover:underline font-medium"
            >
              Search Amazon: AZ-500 Azure Security Technologies Study Guides ↗
            </a>
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AZ-500 Practice Tests
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Practice test access is the core of the study method. Additional practice question sources
            beyond the study guide improve exam readiness.
          </p>
          <p className="not-prose">
            <a
              href={`https://www.amazon.com/s?k=AZ-500+practice+tests+Azure+security&tag=${AMZN_TAG}`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-blue-600 hover:underline font-medium"
            >
              Search Amazon: AZ-500 Practice Tests ↗
            </a>
          </p>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mb-4 mt-10 border-l-4 border-blue-500 pl-4">See Also</h2>
          <ul>
            <li><Link href="/clarke-moyer-cissp-certification-passing-guide/" className="text-blue-600 hover:underline">CISSP Certification Passing Guide</Link> — pairs well with AZ-500 for a complete security credentials stack</li>
            <li><Link href="/clarke-moyer-microsoft-az-900-passing-guide/" className="text-blue-600 hover:underline">AZ-900 Azure Fundamentals Guide</Link> — start here if you&rsquo;re new to Azure</li>
            <li><Link href="/clarke-moyer-microsoft-sc-500-passing-guide/" className="text-blue-600 hover:underline">SC-500 Cloud &amp; AI Security Engineer Guide</Link> — the closest current Microsoft security engineer exam</li>
            <li><Link href="/industry-conferences/" className="text-blue-600 hover:underline">Industry Conferences</Link> — conferences Clarke attends for learning and certification</li>
          </ul>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <div className="mt-8 text-center not-prose">
            <GuideConsultCta />
            <Link href="/certification" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
