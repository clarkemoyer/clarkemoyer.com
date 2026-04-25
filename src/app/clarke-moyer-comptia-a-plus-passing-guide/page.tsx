import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer CompTIA A+ Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the CompTIA A+ certification exam — study materials, practice tests, and test strategies.',
  openGraph: {
    title: 'Clarke Moyer CompTIA A+ Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the CompTIA A+ certification exam — study materials, practice tests, and test strategies.',
    type: 'article',
    url: '/clarke-moyer-comptia-a-plus-passing-guide/',
  },
};

const AMZN_TAG = 'clarkemoyer-20';
function amzn(url: string, label: string) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline font-medium">
      {label} ↗
    </a>
  );
}

export default function APlusGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / A+ Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer CompTIA A+ Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* Warning callout */}
          <div className="not-prose bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
            <p className="text-orange-900 font-semibold text-base leading-relaxed">
              ⚠️ <strong>A Note From Clarke:</strong> I no longer recommend pursuing CompTIA certifications as a primary
              certification track. If your goal is DoD 8570/NICE compliance or a career in cybersecurity, go directly
              to the CISSP track — it carries significantly more weight and longevity. CompTIA certs are accepted as
              DoD 8570 baseline qualifiers but the CISSP supersedes them.{' '}
              <Link href="/clarke-moyer-cissp-certification-passing-guide" className="text-orange-800 underline font-bold hover:text-orange-600">
                See the CISSP Passing Guide
              </Link>{' '}
              to start there instead. This guide remains here for those already committed to the CompTIA path.
            </p>
          </div>

          {/* BLUF */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the A+, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.</li>
              <li>Go audio-first: get the audiobook version and study while walking, driving, or doing household tasks. Passive absorption adds up.</li>
              <li>Practice tests are the core. Buy the book primarily for access to the digital test bank — that&rsquo;s the real product.</li>
              <li>Don&rsquo;t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take voucher is your safety net.</li>
            </ol>
          </div>

          <p>
            I passed the CompTIA A+ in August 2008 — it was my first CompTIA certification and the starting point
            of a run that included Network+ and Security+ within the same year. A+ is two exams (Core 1 and Core 2),
            which makes the test strategy below even more important: don&rsquo;t over-prepare for either one.
          </p>

          <p>
            <strong>Obtained:</strong> August 15, 2008 &nbsp;|&nbsp; <strong>License:</strong> COMP001007606759
          </p>

          <h2>Study Method</h2>

          <h3>1. Create Competition</h3>
          <p>
            Find someone — a colleague, study buddy, anyone — and make it a race. Announce it publicly if possible.
            The social pressure of a competition is more powerful than any study schedule. Even if you lose the race,
            you both pass. That happened to me with the CISSP and it still worked.
          </p>

          <h3>2. Audio First</h3>
          <p>
            A+ covers an enormous breadth of hardware, software, networking, and troubleshooting topics.
            Audio study is ideal for the vocabulary-heavy portions — component names, connector types,
            OS features. Use your commute and downtime. By the time you hit the practice tests, the
            terminology should feel second nature.
          </p>

          <h3>3. Practice Tests Are the Core</h3>
          <p>
            Buy the study guide primarily for the digital test prep access that comes with it. Mike Meyers
            publishes separate Core 1 and Core 2 guides — each includes online test access. That test bank
            is the real product. The book is a reference.
          </p>

          <h3>4. Don&rsquo;t Over-Study</h3>
          <p>
            Run all questions once. Rerun the ones you got wrong until you score zero wrong. Then switch to
            a real-test mix (random, timed) and keep going until you hit 90%+. Schedule when you&rsquo;re
            at 80% — you have a re-take available. Repeat for both Core 1 and Core 2 independently.
          </p>

          <h2>Books / Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Mike Meyers CompTIA A+ Core 1 (220-1101){' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Covers hardware, networking, mobile devices, virtualization, and cloud computing. Buy for the
            online practice test access included with the book.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=Mike+Meyers+CompTIA+A+Plus+Core+1&tag=${AMZN_TAG}`, 'Mike Meyers CompTIA A+ Core 1 (220-1101)')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Mike Meyers CompTIA A+ Core 2 (220-1102){' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Covers operating systems, security, software troubleshooting, and operational procedures.
            Same approach — buy it for the online test bank.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=Mike+Meyers+CompTIA+A+Plus+Core+2&tag=${AMZN_TAG}`, 'Mike Meyers CompTIA A+ Core 2 (220-1102)')}
          </p>

          <h2>Test Strategy</h2>
          <p>
            A+ is two separate exams: Core 1 (220-1101) and Core 2 (220-1102). Each is 90 questions,
            90 minutes, with a passing score of 675 and 700 respectively (on a 100–900 scale). Both
            include performance-based questions — flag them and return at the end.
          </p>
          <p>
            You can take them in any order. Some people knock out Core 1 first since it&rsquo;s hardware-heavy
            and tends to feel more concrete. Either way, apply the same practice-test methodology to each
            exam independently. Don&rsquo;t blur the two objectives together while studying.
          </p>
          <p>
            A+ satisfies DoD 8570 IAT Level I (along with Network+ and a CE designation). If you&rsquo;re
            on a DoD contract that requires it, earn it and move on. Long-term, the CISSP is the credential
            with the most leverage.
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
