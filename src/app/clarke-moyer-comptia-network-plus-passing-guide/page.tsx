import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer CompTIA Network+ Certification Passing Guide',
  description: 'Clarke Moyer\'s guide to passing the CompTIA Network+ certification exam — study materials, practice tests, and test strategies.',
  openGraph: {
    title: 'Clarke Moyer CompTIA Network+ Certification Passing Guide | Clarke Moyer',
    description: 'Clarke Moyer\'s guide to passing the CompTIA Network+ certification exam — study materials, practice tests, and test strategies.',
    type: 'article',
    url: '/clarke-moyer-comptia-network-plus-passing-guide/',
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

export default function NetworkPlusGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>{' '}
            /{' '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>{' '}
            / Network+ Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer CompTIA Network+ Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* WGU context banner */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 mb-8">
            <p className="font-bold text-blue-900">🎓 WGU Degree Program Context</p>
            <p className="text-blue-800 text-sm mt-1">
              Clarke obtained this certification as part of completing his{' '}
              <strong>BS-IT (Bachelor of Science in Information Technology)</strong> at{' '}
              <a href="/wgu-referral-program" className="underline">Western Governors University (WGU)</a>.
              WGU&apos;s IT degree program integrates industry certification preparation directly into the curriculum —{' '}
              students can earn both the degree and the certifications simultaneously. This is why Clarke holds
              multiple foundational certifications from the same 2008–2009 period. If you&apos;re considering WGU,
              the built-in cert prep is a significant part of the value.
            </p>
          </div>

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

          {/* CE Renewal callout */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
            <p className="font-bold text-amber-900">📋 Active CE Renewal</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke actively maintains this certification through CompTIA&apos;s Continuing Education (CE) program —
              which is why you&apos;ll see the &quot;ce&quot; suffix (e.g., Network+<strong>ce</strong>) in his credentials.
              While Clarke no longer recommends this as a starting path, he keeps it current as part of
              his professional maintenance discipline. An active CE certification requires ongoing education
              and renewal — it&apos;s not a one-time achievement left to expire.
            </p>
          </div>

          {/* BLUF */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF: To pass the Network+, do 4 things</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>Create a public contest with another person — compete to finish before they do. The accountability accelerates everything.</li>
              <li>Go audio-first: get the audiobook version and study while walking, driving, or doing household tasks. Passive absorption adds up.</li>
              <li>Practice tests are the core. Buy the book primarily for access to the digital test bank — that&rsquo;s the real product.</li>
              <li>Don&rsquo;t over-study. Run all questions once, rerun wrong ones until zero, then restart with a real-test mix until you hit 90%+. Test at 80% — the re-take voucher is your safety net.</li>
            </ol>
          </div>

          <p>
            I passed the CompTIA Network+ in October 2008 — just weeks before earning my Security+.
            Network+ was actually my second CompTIA cert, right after A+. The networking fundamentals you
            build here carry forward through everything: Security+, CISSP, and beyond.
          </p>

          <p>
            <strong>Obtained:</strong> October 8, 2008 &nbsp;|&nbsp; <strong>License:</strong> COMP001007606759
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
            Network+ covers a lot of vocabulary — protocols, ports, topologies, OSI layers. This is exactly
            the kind of material that benefits from repeated audio exposure. Listen while commuting, walking,
            doing dishes. By the time you sit down to practice tests, the terminology will already feel familiar.
          </p>

          <h3>3. Practice Tests Are the Core</h3>
          <p>
            Buy the study guide primarily for the digital test prep access that comes with it. The book is
            secondary — the online test bank is what you&rsquo;re really purchasing. Spend your hours there.
          </p>

          <h3>4. Don&rsquo;t Over-Study</h3>
          <p>
            Run all questions once. Rerun the ones you got wrong until you score zero wrong. Then switch to
            a real-test mix (random questions, timed) and keep going until you consistently hit 90%+.
            Schedule your test when you hit 80% — you have a re-take if needed. Over-studying wastes time
            and increases anxiety without improving your score.
          </p>

          <h2>Books / Materials</h2>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Mike Meyers CompTIA Network+ Guide{' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Mike Meyers is arguably the most recognized name in Network+ prep. Comprehensive coverage
            with online test access included. The practice tests are the real reason to buy it.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=Mike+Meyers+CompTIA+Network+Plus+study+guide&tag=${AMZN_TAG}`, 'Mike Meyers CompTIA Network+ Study Guide')}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            CompTIA Network+ Audiobook / Audio Study Guide
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            For the audio-first method. Network+ has a large vocabulary load — ports, protocols, subnetting,
            topologies. Repeated passive listening while commuting or exercising accelerates retention.
          </p>
          <p className="not-prose">
            {amzn(`https://www.amazon.com/s?k=CompTIA+Network+Plus+audiobook&tag=${AMZN_TAG}`, 'CompTIA Network+ Audiobook Study Guide')}
          </p>

          <h2>Test Strategy</h2>
          <p>
            The Network+ N10-009 exam is 90 questions, maximum 90 minutes, passing score of 720 (on a 100–900 scale).
            It includes multiple choice and performance-based questions. Like Security+, flag PBQs and return to
            them at the end — don&rsquo;t let them consume time upfront.
          </p>
          <p>
            Network+ satisfies DoD 8570 IAT Level I and is a solid stepping stone. But if you&rsquo;re planning
            to go further in cybersecurity or DoD work, treat it as a foundation — not a destination.
            CISSP is where the real career leverage is.
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</Link>.
          </p>

          <div className="mt-8 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
