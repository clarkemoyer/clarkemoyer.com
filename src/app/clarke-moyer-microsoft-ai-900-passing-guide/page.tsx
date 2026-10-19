import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft AI-900 Azure AI Fundamentals Passing Guide',
  description: "Clarke Moyer's guide to the Microsoft Azure AI Fundamentals certification, now earned through exam AI-901 (formerly AI-900) — study materials, practice tests, and why Clarke recommends this cert.",
  openGraph: {
    title: 'Clarke Moyer Microsoft AI-900 Azure AI Fundamentals Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the Microsoft Azure AI Fundamentals certification, now earned through exam AI-901 (formerly AI-900) — study materials, practice tests, and why Clarke recommends this cert.",
    type: 'article',
    url: '/clarke-moyer-microsoft-ai-900-passing-guide/',
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

export default function AI900GuidePage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Certification Guides', url: '/certification/' },
        { name: 'AI-900 Guide', url: '/clarke-moyer-microsoft-ai-900-passing-guide/' },
      ])} />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}AI-900 Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft AI-900 Azure AI Fundamentals Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-6">
            <p className="text-amber-800 text-sm">
              Clarke holds this certification and maintains Microsoft credentials as the platform evolves.
              The exam content and objectives are updated regularly by Microsoft — always verify current
              objectives at <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Learn</a> before purchasing study materials.
            </p>
          </div>

          <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-5 mb-6">
            <p className="font-bold text-blue-900">🔄 AI-900 is now AI-901</p>
            <p className="text-blue-800 text-sm mt-1">
              Microsoft retired exam AI-900 on June 30, 2026. The Azure AI Fundamentals certification is now earned
              through{' '}
              <a href="https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" target="_blank" rel="noopener noreferrer" className="underline">
                AI-901: Microsoft Azure AI Fundamentals
              </a>
              . It covers the same AI concepts plus generative AI and building solutions in Microsoft Foundry. Clarke
              earned the certification through AI-900, and the study approach below works the same for AI-901.
            </p>
          </div>

          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8 rounded-r-lg">
            <p className="text-green-800 font-semibold text-lg">✅ Currently Recommended by Clarke</p>
            <p className="text-green-700 mt-1">Clarke actively recommends Azure AI Fundamentals (now AI-901) to colleagues and recommends it as a starting point for understanding AI in the enterprise.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the AI-900, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with someone else to finish before they complete a similar educational objective — accountability accelerates everything.</li>
              <li>Go audio-first where you can: listen while commuting, walking, or doing chores. The concepts here are approachable and absorb well on the move.</li>
              <li>Practice tests are the core — buy the study guide for the digital test prep portal access, and run questions until you hit 90%+.</li>
              <li>Don&rsquo;t over-study. When you&rsquo;re scoring above 80% consistently, schedule the exam. That&rsquo;s what retakes are for.</li>
            </ol>
          </div>

          <h2>What Is the AI-900?</h2>
          <p>
            The <strong>Microsoft Azure AI Fundamentals (AI-900)</strong> is Microsoft&rsquo;s entry-level certification for
            AI on the Azure platform. It&rsquo;s not a developer exam — it&rsquo;s a conceptual foundations exam designed
            for anyone who wants to understand how AI workloads work in an enterprise cloud environment.
          </p>
          <p>
            The original AI-900 covered five main areas: AI workloads and considerations, fundamental principles of machine
            learning, computer vision workloads on Azure, natural language processing (NLP) workloads, and conversational AI
            workloads. None of this requires a coding background. The current AI-901 splits into identifying AI concepts and
            capabilities (40&ndash;45%) and implementing AI solutions with Microsoft Foundry (55&ndash;60%), with generative AI
            added throughout.
          </p>

          <h2>Why Clarke Recommends It</h2>
          <p>
            AI-900 is genuinely useful before you can honestly advise on AI procurement, policy, or integration in a DoD
            or enterprise environment. The vocabulary alone — knowing the difference between ML, deep learning, computer
            vision, and NLP in context — makes you a more credible voice in those conversations. It&rsquo;s a low-cost,
            low-time-investment cert with disproportionate relevance right now.
          </p>
          <p>
            If you already hold a CISSP or similar security cert, AI-900 fills in a gap that security-focused study
            almost never touches: understanding the AI services that are now being layered into every enterprise
            platform you&rsquo;ll be asked to secure.
          </p>

          <h2>Free Resource: Microsoft Learn</h2>
          <p>
            Microsoft&rsquo;s own free learning path, now for AI-901, is excellent and should be your starting point.
            It&rsquo;s well-structured, maps directly to exam objectives, and costs nothing.
          </p>
          <p>
            <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Microsoft Learn — Azure AI Fundamentals (AI-901) ↗
            </a>
          </p>

          <h2>Books / Study Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AI-900 Azure AI Fundamentals Study Guide <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The practice tests bundled with this guide are the core of the study method. Run all questions once,
            re-run wrong ones until zero, then restart with a mixed set until you&rsquo;re clearing 90%+.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=AI-901+Azure+AI+Fundamentals+study+guide&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search Amazon: AI-901 Azure AI Fundamentals Study Guides ↗
            </a>
          </p>
          <p className="not-prose text-gray-700 text-sm mt-2">
            The AI-900 edition Clarke used, still useful for the core concepts:{' '}
            {amzn('B0CLRN4Y8G', 'Microsoft Azure AI Fundamentals AI-900 Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            AI-900 Audio / Audiobook Options
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Audio-first is the method. AI fundamentals concepts translate well to audio — great for commutes and walks.
          </p>
          <p className="not-prose">
            <a href={`https://www.amazon.com/s?k=Azure+AI+Fundamentals+AI-901+exam+prep&tag=${AMZN_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
              Search Amazon: Azure AI Fundamentals AI-901 Exam Prep ↗
            </a>
          </p>

          <h2>Test Methodology</h2>
          <ol>
            <li>Start with Microsoft Learn — complete the free learning path end to end.</li>
            <li>Buy the study guide for digital practice test access.</li>
            <li>Run all practice questions once, flagging every wrong answer.</li>
            <li>Re-run only wrong questions until you hit zero wrong.</li>
            <li>Restart with a full mixed-question simulation until you&rsquo;re consistently above 90%.</li>
            <li>When you break 80% on real-test mixes, schedule the exam — don&rsquo;t wait for 100%.</li>
          </ol>

          <h2>Where It Fits in the Azure Path</h2>
          <p>
            AI-900 sits alongside AZ-900 (Azure Fundamentals) as a peer entry-point, not a prerequisite to it.
            Many people take both. If you&rsquo;re heading toward cloud architecture or security roles, AZ-900 first
            makes more sense — but if AI is your primary interest, AI-900 is the right on-ramp.
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <p className="not-prose text-sm text-gray-500 mt-2">
            📅 See also: <a href="/industry-conferences/" className="underline hover:text-gray-700">Industry Conferences</a>
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
