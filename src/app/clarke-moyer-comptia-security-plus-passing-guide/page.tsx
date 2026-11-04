import type { Metadata } from 'next'
import Link from 'next/link'
import GuideConsultCta from '@/components/GuideConsultCta'
import { amznSearch } from '@/lib/amazon'
import { breadcrumbSchema, faqSchema, SchemaScript } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'CompTIA Security+ Passing Guide: SY0-801 (V8) vs SY0-701',
  description:
    'How to pass CompTIA Security+ in 2026–2027: SY0-801 (V8, launching Nov 17, 2026) vs SY0-701 (retires June 11, 2027), which version to take, study guides, and test strategy.',
  openGraph: {
    title: 'CompTIA Security+ Passing Guide: SY0-801 (V8) vs SY0-701 | Clarke Moyer',
    description:
      'How to pass CompTIA Security+ in 2026–2027: SY0-801 (V8, launching Nov 17, 2026) vs SY0-701 (retires June 11, 2027), which version to take, study guides, and test strategy.',
    type: 'article',
    url: '/clarke-moyer-comptia-security-plus-passing-guide/',
  },
}

const FAQS = [
  {
    question: 'When does Security+ SY0-801 (V8) launch?',
    answer:
      'CompTIA expects Security+ V8, exam code SY0-801, to launch on or around November 17, 2026.',
  },
  {
    question: 'When does Security+ SY0-701 retire?',
    answer:
      'The English SY0-701 exam retires June 11, 2027. The Japanese, Portuguese, Spanish and Thai versions retire August 13, 2027.',
  },
  {
    question: 'Should I take SY0-701 or SY0-801?',
    answer:
      'If you are already studying for SY0-701 and can test before June 11, 2027, finish and take SY0-701. If you are starting from scratch in 2027 or later, study for SY0-801. Both earn the same CompTIA Security+ certification.',
  },
  {
    question: 'What is the format of the Security+ exam?',
    answer:
      'Both SY0-701 and SY0-801 have a maximum of 90 multiple-choice and performance-based questions, a 90-minute time limit, and a passing score of 750 on a 100 to 900 scale.',
  },
  {
    question: 'What is new in Security+ SY0-801?',
    answer:
      'SY0-801 has five domains: General Security Concepts (16%), Threats, Vulnerabilities, and Attacks (24%), Security Architecture (19%), Security Operations (27%), and Security Program Management and Oversight (14%). It adds objectives on AI-related security risks and AI-assisted automation in security operations.',
  },
]

function amzn(url: string, label: string) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="text-blue-600 hover:underline font-medium"
    >
      {label} ↗
    </a>
  )
}

export default function SecurityPlusGuidePage() {
  return (
    <>
      <SchemaScript schema={faqSchema(FAQS)} />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Certification Guides', url: '/certification/' },
          { name: 'Security+ Guide', url: '/clarke-moyer-comptia-security-plus-passing-guide/' },
        ])}
      />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/certification" className="hover:underline text-gray-300">
              Certification Guides
            </Link>{' '}
            / Security+ Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Clarke Moyer CompTIA Security+ Certification Passing Guide
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          {/* Version quick answer */}
          <div className="not-prose bg-green-50 border-l-4 border-green-600 p-5 mb-8">
            <p className="font-bold text-green-900">
              Updated November 2026: SY0-801 (V8) vs SY0-701 (V7)
            </p>
            <ul className="text-green-900 text-sm mt-2 space-y-1 list-disc ml-5">
              <li>
                <strong>SY0-801 (V8)</strong> launches on or around{' '}
                <strong>November 17, 2026</strong>.
              </li>
              <li>
                <strong>SY0-701 (V7)</strong> retires <strong>June 11, 2027</strong> in English
                (August 13, 2027 in Japanese, Portuguese, Spanish and Thai).
              </li>
              <li>
                Both earn the same Security+ certification.{' '}
                <a href="#which-version" className="underline font-semibold">
                  Which one should you take?
                </a>
              </li>
            </ul>
          </div>

          {/* WGU context banner */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 mb-8">
            <p className="font-bold text-blue-900">🎓 WGU Degree Program Context</p>
            <p className="text-blue-800 text-sm mt-1">
              Clarke obtained this certification as part of completing his{' '}
              <strong>BS-IT (Bachelor of Science in Information Technology)</strong> at{' '}
              <a href="/wgu-referral" className="underline">
                Western Governors University (WGU)
              </a>
              . WGU&apos;s IT degree program integrates industry certification preparation directly
              into the curriculum — students can earn both the degree and the certifications
              simultaneously. This is why Clarke holds multiple foundational certifications from the
              same 2008–2009 period. If you&apos;re considering WGU, the built-in cert prep is a
              significant part of the value.
            </p>
          </div>

          {/* Warning callout */}
          <div className="not-prose bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
            <p className="text-orange-900 font-semibold text-base leading-relaxed">
              ⚠️ <strong>A Note From Clarke:</strong> I no longer recommend pursuing CompTIA
              certifications as a primary certification track. If your goal is DoD 8570/NICE
              compliance or a career in cybersecurity, go directly to the CISSP track — it carries
              significantly more weight and longevity. CompTIA certs are accepted as DoD 8570
              baseline qualifiers but the CISSP supersedes them.{' '}
              <Link
                href="/clarke-moyer-cissp-certification-passing-guide"
                className="text-orange-800 underline font-bold hover:text-orange-600"
              >
                See the CISSP Passing Guide
              </Link>{' '}
              to start there instead. This guide remains here for those already committed to the
              CompTIA path.
            </p>
          </div>

          {/* CE Renewal callout */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
            <p className="font-bold text-amber-900">📋 Active CE Renewal</p>
            <p className="text-amber-800 text-sm mt-1">
              Clarke actively maintains this certification through CompTIA&apos;s Continuing
              Education (CE) program — which is why you&apos;ll see the &quot;ce&quot; suffix (e.g.,
              Security+<strong>ce</strong>) in his credentials. While Clarke no longer recommends
              this as a starting path, he keeps it current as part of his professional maintenance
              discipline. An active CE certification requires ongoing education and renewal —
              it&apos;s not a one-time achievement left to expire.
            </p>
          </div>

          {/* BLUF */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              BLUF: To pass the Security+, do 4 things
            </h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>
                Create a public contest with another person — compete to finish before they do. The
                accountability accelerates everything.
              </li>
              <li>
                Go audio-first: get the audiobook version and study while walking, driving, or doing
                household tasks. Passive absorption adds up.
              </li>
              <li>
                Practice tests are the core. Buy the book primarily for access to the digital test
                bank — that&rsquo;s the real product.
              </li>
              <li>
                Don&rsquo;t over-study. Run all questions once, rerun wrong ones until zero, then
                restart with a real-test mix until you hit 90%+. Test at 80% — the re-take voucher
                is your safety net.
              </li>
            </ol>
          </div>

          <p>
            I passed the CompTIA Security+ in November 2008, early in my IT career. At the time it
            was a solid foundational security credential — and it served me well as a DoD 8570
            baseline qualifier. The method below reflects how I studied for most of my early CompTIA
            certifications.
          </p>

          <p>
            <strong>Obtained:</strong> November 19, 2008 &nbsp;|&nbsp; <strong>License:</strong>{' '}
            COMP001007606759
          </p>

          <h2>Study Method</h2>

          <h3>1. Create Competition</h3>
          <p>
            Find someone — a colleague, study buddy, anyone — and make it a race. Announce it
            publicly if possible. The social pressure of a competition is more powerful than any
            study schedule. Even if you lose the race, you both pass. That happened to me with the
            CISSP and it still worked.
          </p>

          <h3>2. Audio First</h3>
          <p>
            Don&rsquo;t sit down and read when you can be absorbing material while doing something
            else. Security+ is dense with vocabulary and concepts that benefit from repeated passive
            exposure. Audiobooks, commutes, walks — this is where the time comes from when you have
            a full-time job.
          </p>

          <h3>3. Practice Tests Are the Core</h3>
          <p>
            Buy the study guide primarily for the digital test prep access that comes with it. The
            book itself is secondary — the online test bank is what you&rsquo;re really purchasing.
            Spend your hours there.
          </p>

          <h3>4. Don&rsquo;t Over-Study</h3>
          <p>
            Run all questions once. Rerun the ones you got wrong until you score zero wrong. Then
            switch to a real-test mix (random questions, timed) and keep going until you
            consistently hit 90%+. Schedule your test when you hit 80% — not when you feel
            &ldquo;ready.&rdquo; You have a re-take if needed. Over-studying wastes time and
            increases anxiety.
          </p>

          <h2 id="which-version">SY0-701 or SY0-801: Which Version Should You Take?</h2>
          <p>
            CompTIA expects Security+ V8 (exam code SY0-801) to launch on or around November 17,
            2026. The English SY0-701 exam stays available until June 11, 2027. Both versions earn
            the same Security+ certification, so pick the one that matches where you are today:
          </p>
          <ul>
            <li>
              <strong>Already studying for SY0-701 and can test by spring 2027?</strong> Finish and
              take SY0-701. Its study guides and practice test banks are mature, and you lose
              nothing by certifying on the outgoing version.
            </li>
            <li>
              <strong>Starting from scratch, or testing after June 2027?</strong> Study for SY0-801.
              Expect a thin field of books and practice tests for the first few months after launch,
              and check the publication date and exam code on anything you buy.
            </li>
            <li>
              <strong>Using an employer voucher?</strong> Check which version it covers before you
              schedule, and use it before it expires.
            </li>
          </ul>
          <p>
            Dates come from CompTIA&rsquo;s{' '}
            <a
              href="https://www.comptia.org/en-us/certifications/security/v8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Security+ V8 page
            </a>{' '}
            and{' '}
            <a
              href="https://www.comptia.org/en-us/certifications/security/v7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Security+ V7 page
            </a>{' '}
            (checked November 2026). CompTIA can move these dates, so confirm before you book.
          </p>

          <h3>What&rsquo;s on SY0-801</h3>
          <div className="not-prose overflow-x-auto mb-6">
            <table className="min-w-full text-sm border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2 border-b">SY0-801 domain</th>
                  <th className="text-right p-2 border-b">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">General Security Concepts</td>
                  <td className="p-2 border-b text-right">16%</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Threats, Vulnerabilities, and Attacks</td>
                  <td className="p-2 border-b text-right">24%</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Security Architecture</td>
                  <td className="p-2 border-b text-right">19%</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Security Operations</td>
                  <td className="p-2 border-b text-right">27%</td>
                </tr>
                <tr>
                  <td className="p-2">Security Program Management and Oversight</td>
                  <td className="p-2 text-right">14%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Security Operations is the biggest domain, so weight your practice questions toward it.
            V8 also adds objectives on AI-related security risks and AI-assisted automation in
            security operations, which older study material won&rsquo;t cover.
          </p>

          <h2>Books / Materials</h2>

          <h3>For SY0-801 (V8)</h3>
          <p>
            New editions usually trail an exam launch by a few months. These searches pull up the
            SY0-801 editions as publishers release them; make sure the cover says SY0-801 before you
            buy.
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            CompTIA Security+ Get Certified Get Ahead (SY0-801 edition){' '}
            <span className="text-green-700 text-base font-semibold ml-2">← Must Buy</span>
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The Get Certified Get Ahead series has been the go-to for Security+ for years. Buy it
            for the online practice test access. That&rsquo;s the real value.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('CompTIA Security+ Get Certified Get Ahead SY0-801'),
              'Get Certified Get Ahead SY0-801'
            )}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Sybex CompTIA Security+ Study Guide (SY0-801)
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Mike Chapple and David Seidl&rsquo;s Sybex guide comes with an online test bank and
            flashcards. A solid second source of practice questions.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('Sybex CompTIA Security+ Study Guide SY0-801'),
              'Sybex Security+ Study Guide SY0-801'
            )}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Mike Meyers CompTIA Security+ Guide (SY0-801)
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Mike Meyers is one of the most recognized names in CompTIA prep. Good alternative if you
            prefer his teaching style. Also includes online test access.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('Mike Meyers CompTIA Security+ SY0-801'),
              'Mike Meyers CompTIA Security+ SY0-801'
            )}
          </p>

          <h3>For SY0-701 (V7, retiring June 2027)</h3>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            CompTIA Security+ Get Certified Get Ahead: SY0-701 Study Guide
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            The mature choice if you&rsquo;re testing on SY0-701 before it retires.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('CompTIA Security+ Get Certified Get Ahead SY0-701'),
              'Get Certified Get Ahead SY0-701'
            )}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            Sybex CompTIA Security+ Study Guide (SY0-701)
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            Second source of SY0-701 practice questions with an online test bank.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('Sybex CompTIA Security+ Study Guide SY0-701'),
              'Sybex Security+ Study Guide SY0-701'
            )}
          </p>

          <h3 className="not-prose mt-8 text-xl font-bold text-gray-900">
            CompTIA Security+ Audiobook / Audio Study Guide
          </h3>
          <p className="not-prose text-gray-700 mt-2 mb-3">
            For the audio-first method, on either version. Use during commutes, workouts, or any
            time you&rsquo;re not sitting at a desk. Security+ vocabulary especially benefits from
            repeated audio exposure.
          </p>
          <p className="not-prose">
            {amzn(
              amznSearch('CompTIA Security+ audiobook study guide'),
              'CompTIA Security+ Audiobook Study Guide'
            )}
          </p>

          <h2>Test Strategy</h2>
          <p>
            Both SY0-701 and SY0-801 have a maximum of 90 questions, a 90-minute limit, and a
            passing score of 750 (on a 100–900 scale). It includes multiple choice and
            performance-based questions (PBQs). PBQs appear first — don&rsquo;t get stuck on them.
            Flag them and move on, come back at the end.
          </p>
          <p>
            If you&rsquo;re targeting DoD 8570 compliance (now DoD 8140), Security+ (CE) satisfies
            IAT Level II and IAM Level I under the 8570 baseline. But if you&rsquo;re planning to
            pursue CISSP eventually, know that CISSP supersedes Security+ for all those same
            categories and more.
          </p>

          <h2>Security+ FAQ</h2>
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying
            purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <div className="mt-8 text-center not-prose">
            <GuideConsultCta />
            <Link href="/certification" className="text-blue-600 hover:underline font-medium">
              ← Back to Certification Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
