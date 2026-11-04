import type { Metadata } from 'next'
import Link from 'next/link'
import GuideConsultCta from '@/components/GuideConsultCta'
import { amznSearch } from '@/lib/amazon'
import { breadcrumbSchema, SchemaScript } from '@/lib/schema'

const description =
  'CompTIA Project+ moved from Good for Life to Continuing Education on October 1, 2025. How Project+ CE works, and how to manage CEUs, fees and renewal stacking across A+, Network+, Security+ and the rest of the CompTIA family.'

export const metadata: Metadata = {
  title: 'Project+ CE Requirements and Managing CompTIA Continuing Education',
  description,
  openGraph: {
    title: 'Project+ CE Requirements and Managing CompTIA Continuing Education | Clarke Moyer',
    description,
    type: 'article',
    url: '/comptia-ce/',
  },
}

const SOURCES = {
  transition:
    'https://help.comptia.org/hc/en-us/articles/40383243876500-Server-and-Project-Transition-to-CE-Certifications',
  faq: 'https://www.comptia.org/en-us/resources/ce/learn/comptia-continuing-education-program-faq/',
  ceus: 'https://www.comptia.org/en-us/resources/ce/learn/earn-continuing-education-units-ceus/',
  fees: 'https://www.comptia.org/en-us/resources/ce/learn/continuing-education-renewal-fees/',
  single:
    'https://help.comptia.org/hc/en-us/articles/13923673767444-What-Are-the-Single-Activity-Renewal-Options',
  nonComptia:
    'https://www.comptia.org/en-us/resources/ce/choose/renew-with-a-single-activity/earn-non-comptia-it-industry-certification/',
}

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      {children}
    </a>
  )
}

const ceTable: { cert: string; ceus: string; fee: string; renews: string; guide?: string }[] = [
  {
    cert: 'A+',
    ceus: '20',
    fee: '$75',
    renews: 'Nothing below it',
    guide: '/clarke-moyer-comptia-a-plus-passing-guide/',
  },
  {
    cert: 'Network+',
    ceus: '30',
    fee: '$150',
    renews: 'A+',
    guide: '/clarke-moyer-comptia-network-plus-passing-guide/',
  },
  {
    cert: 'Security+',
    ceus: '50',
    fee: '$150',
    renews: 'Network+, A+',
    guide: '/clarke-moyer-comptia-security-plus-passing-guide/',
  },
  { cert: 'CySA+ / PenTest+', ceus: '60', fee: '$150', renews: 'Security+, Network+, A+' },
  {
    cert: 'SecurityX',
    ceus: '75',
    fee: '$150',
    renews: 'CySA+, PenTest+, Security+, Network+, A+',
  },
  { cert: 'Linux+', ceus: '50', fee: '$150', renews: 'A+ only' },
  { cert: 'Cloud+', ceus: '50', fee: '$150', renews: 'A+, Network+, Linux+' },
  {
    cert: 'Project+',
    ceus: '30',
    fee: '$150',
    renews: 'No other certification',
    guide: '/clarke-moyer-comptia-project-plus-passing-guide/',
  },
  { cert: 'Server+', ceus: '30', fee: '$150', renews: 'No other certification' },
  { cert: 'Data+', ceus: '20', fee: '$75', renews: 'No other certification' },
]

export default function ComptiaCePage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Certification Guides', url: '/certification/' },
          { name: 'CompTIA CE', url: '/comptia-ce/' },
        ])}
      />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/certification/" className="hover:underline text-gray-300">
              Certification Guides
            </Link>{' '}
            / CompTIA CE
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Project+ Now Expires: Managing CE Across the CompTIA Family
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">BLUF</h2>
            <ol className="list-decimal ml-6 space-y-2 text-blue-800">
              <li>
                Since October 1, 2025, a newly earned Project+ is no longer good for life. It joins
                CompTIA&apos;s Continuing Education (CE) program: 30 CEUs and a $150 fee every three
                years.
              </li>
              <li>
                Project+ sits outside CompTIA&apos;s renewal hierarchy. Renewing Security+ does not
                renew it, and renewing it does not renew anything else.
              </li>
              <li>
                Plan CE as stacks, not as individual certs. Renew the top cert in each stack and the
                certs below it ride along for one fee.
              </li>
              <li>
                Log CEUs as you earn them, keep the documentation, and put every expiration date on
                your calendar. CompTIA accepts CEUs on submission and audits at random.
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-500">
            Facts on this page were checked against CompTIA&apos;s own CE pages in November 2026.
            CompTIA changes CE rules and fees from time to time, so confirm against the linked
            sources before you pay or submit anything.
          </p>

          <h2>What changed for Project+</h2>
          <p>
            For years, CompTIA Project+ was a &quot;Good for Life&quot; certification: pass the exam
            once and you held it forever. That ended on October 1, 2025. CompTIA moved both Project+
            and Server+ into its CE program, and anyone who earns either certification after that
            date has to renew it through CE (
            <Src href={SOURCES.transition}>CompTIA: Server+ and Project+ Transition to CE</Src>).
          </p>
          <p>
            If you already held Project+ before the change, your original certification stays good
            for life. CompTIA lets existing holders earn the Project+ <strong>ce</strong>{' '}
            designation by completing CEUs. The &quot;ce&quot; suffix tells an employer or
            contracting officer that the credential is current, not a test you passed in a different
            decade.
          </p>
          <p>Here is what Project+ CE asks for, per CompTIA&apos;s published requirements:</p>
          <ul>
            <li>
              <strong>30 CEUs</strong> within each three-year cycle (
              <Src href={SOURCES.ceus}>Earn CEUs</Src>).
            </li>
            <li>
              <strong>$150 in CE fees</strong> per three-year cycle, due by the expiration date. You
              can pay it in pieces or all at once (<Src href={SOURCES.fees}>CE Renewal Fees</Src>).
            </li>
            <li>
              At least half of each activity&apos;s content has to relate to the Project+ exam
              objectives. A security course will not count toward Project+, even if it counts toward
              Security+.
            </li>
          </ul>

          <h2>How renewal stacking works</h2>
          <p>
            CompTIA ranks its certifications in a hierarchy. When you renew the highest one, the
            lower ones in the same line renew with it, and you only pay the CE fee for the highest
            one (<Src href={SOURCES.faq}>CompTIA CE Program FAQ</Src>). The main line runs from
            SecurityX down through CySA+ and PenTest+, then Security+, Network+ and A+. Linux+ and
            Cloud+ branch off it.
          </p>
          <p>
            Project+, Server+, Data+, DataSys+, DataAI and CloudNetX do not renew any other
            certification, and nothing in the hierarchy renews them. Each one is its own island with
            its own CEUs and its own fee.
          </p>

          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border border-gray-200">
              <caption className="text-left text-gray-600 mb-2">
                Three-year CE requirements for common CompTIA certifications
              </caption>
              <thead className="bg-gray-100 text-gray-900">
                <tr>
                  <th scope="col" className="text-left p-3">
                    Certification
                  </th>
                  <th scope="col" className="text-left p-3">
                    CEUs
                  </th>
                  <th scope="col" className="text-left p-3">
                    CE fee
                  </th>
                  <th scope="col" className="text-left p-3">
                    Also renews
                  </th>
                </tr>
              </thead>
              <tbody>
                {ceTable.map((row) => (
                  <tr key={row.cert} className="border-t border-gray-200">
                    <th scope="row" className="text-left p-3 font-semibold text-gray-900">
                      {row.guide ? (
                        <Link href={row.guide} className="text-blue-600 hover:underline">
                          {row.cert}
                        </Link>
                      ) : (
                        row.cert
                      )}
                    </th>
                    <td className="p-3 text-gray-700">{row.ceus}</td>
                    <td className="p-3 text-gray-700">{row.fee}</td>
                    <td className="p-3 text-gray-700">{row.renews}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              Sources: <Src href={SOURCES.ceus}>CEU requirements</Src>,{' '}
              <Src href={SOURCES.fees}>CE fees</Src> and the renewal hierarchy in the{' '}
              <Src href={SOURCES.faq}>CE Program FAQ</Src>.
            </p>
          </div>

          <h2>What this means if you hold several CompTIA certs</h2>
          <p>
            Take my own set as an example: A+, Network+, Security+ and Project+, all kept current
            under CE. Before the change, renewing Security+ was enough to keep my CompTIA
            credentials in order. Now there are two separate renewals to manage:
          </p>
          <ul>
            <li>
              <strong>The security stack.</strong> 50 CEUs and $150 for Security+ every three years.
              That renews Network+ and A+ along with it.
            </li>
            <li>
              <strong>Project+.</strong> 30 CEUs and $150 on its own cycle, which almost certainly
              has a different expiration date from Security+.
            </li>
          </ul>
          <p>
            That is $300 in CE fees and 80 CEUs every three years instead of $150 and 50. It is
            worth deciding on purpose whether a credential still earns its keep. If you do not need
            Project+ for a contract or a job posting, letting a new one lapse can be a reasonable
            call. On the{' '}
            <Link href="/clarke-moyer-comptia-project-plus-passing-guide/">Project+ guide</Link> I
            already recommend going to the{' '}
            <Link href="/clarke-moyer-pmp-certification-passing-guide/">PMP</Link> or{' '}
            <Link href="/clarke-moyer-safe-spc-certification-passing-guide/">SAFe SPC</Link> instead
            for most people.
          </p>

          <h2>Ways to renew</h2>
          <p>
            CompTIA offers two kinds of renewal. You can renew with a single activity, or you can
            add up CEUs from several activities (
            <Src href={SOURCES.single}>Single Activity Renewal Options</Src>).
          </p>
          <h3>Single activity</h3>
          <ul>
            <li>
              <strong>Pass the latest exam version.</strong> No CE fee, only the exam fee. For
              Project+ the current exam is PK0-005.
            </li>
            <li>
              <strong>Earn a higher CompTIA certification</strong> in the same line. No CE fee. This
              does not help Project+, because nothing sits above it.
            </li>
            <li>
              <strong>CertMaster CE.</strong> A self-paced course with no CE fee beyond the course
              price, but CompTIA only offers it for A+, Network+ and Security+.
            </li>
            <li>
              <strong>Earn a qualifying non-CompTIA certification.</strong> CE fees still apply (
              <Src href={SOURCES.nonComptia}>Earn a Non-CompTIA IT Industry Certification</Src>).
              CompTIA does not publish which certifications qualify for Project+ on that page, so
              check its listings or ask its help center before counting on one.
            </li>
          </ul>
          <h3>Multiple activities</h3>
          <p>
            CEUs can come from training and higher education, IT industry activities like
            conferences and webinars, publishing an article or blog post, related work experience,
            and other IT certifications. Each has its own documentation rules, and CompTIA&apos;s
            CEU assessment tool will tell you whether an activity qualifies before you submit it (
            <Src href={SOURCES.ceus}>Earn CEUs</Src>).
          </p>
          <p>
            For a working project manager, the overlap with PMI is the useful part. Training you
            take to earn PMP PDUs often covers the same ground as the Project+ objectives, so one
            course can count toward both, provided it meets CompTIA&apos;s 50% rule and you keep the
            certificate. That is my reading of the rules, not a CompTIA statement, so run each
            course through the assessment tool.
          </p>

          <h2>A simple system for managing CompTIA CE</h2>
          <ol>
            <li>
              <strong>List every certification with its expiration date.</strong> Your CompTIA
              certification account shows them. Put each date on your calendar with a reminder six
              months out.
            </li>
            <li>
              <strong>Group them into stacks.</strong> Find the highest cert in each line, and treat
              Project+, Server+ and the data certs as stacks of one.
            </li>
            <li>
              <strong>Log CEUs as you earn them.</strong> Upload the activity and its proof to your
              certification account right away. CompTIA accepts CEUs automatically on submission and
              audits at random, so the documentation has to exist when they ask (
              <Src href={SOURCES.faq}>CE Program FAQ</Src>).
            </li>
            <li>
              <strong>Pay fees early or in pieces.</strong> Fees are not billed annually. They are
              due in full by the expiration date, and paying the fee without the CEUs does not renew
              anything. If your employer covers CE, ask about CE tokens, which CompTIA sells in $25
              and $50 amounts and which do not expire (
              <Src href={SOURCES.fees}>CE Renewal Fees</Src>).
            </li>
            <li>
              <strong>Pick your highest-leverage activity.</strong> If a new exam version is coming
              out anyway, passing it renews the cert with no CE fee. Otherwise, pick training that
              you would take for your job regardless and that maps to the objectives.
            </li>
          </ol>
          <p>
            If you work on a DoD contract, the stakes are higher. CompTIA notes that the DoD stopped
            recognizing Good for Life certifications for its workforce requirements in 2011, so a
            lapsed cert can affect whether you can stay in your role (
            <Src href={SOURCES.faq}>CE Program FAQ</Src>).
          </p>

          <h2>Study material if you retest</h2>
          <p>
            If you would rather renew Project+ by passing the current PK0-005 exam than track CEUs,
            the same approach from my{' '}
            <Link href="/clarke-moyer-comptia-project-plus-passing-guide/">
              Project+ passing guide
            </Link>{' '}
            applies: buy the study guide for its practice test bank and spend your time there.
          </p>
          <p className="not-prose">
            <a
              href={amznSearch('CompTIA Project+ PK0-005 study guide')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-blue-600 hover:underline font-medium"
            >
              CompTIA Project+ PK0-005 Study Guide ↗
            </a>
          </p>

          <p className="not-prose text-xs text-gray-400 mt-12">
            This page contains affiliate links. As an Amazon Associate I earn from qualifying
            purchases. Product links help support this site at no extra cost to you. See{' '}
            <Link href="/affiliate-disclosure/" className="underline hover:text-gray-600">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <div className="mt-8 text-center not-prose">
            <GuideConsultCta />
            <Link href="/certification/" className="text-blue-600 hover:underline font-medium">
              ← Back to Certification Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
