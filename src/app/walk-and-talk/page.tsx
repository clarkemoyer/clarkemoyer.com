import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Walk and Talk Consulting | Clarke Moyer',
  description:
    'Walk and Talk — premium technology consulting with Clarke Moyer. No laptops, no slides. Just a focused conversation on a walk, with an AI-generated summary delivered within 24 hours. $750/hour, 4-hour minimum.',
  openGraph: {
    title: 'Walk and Talk Consulting | Clarke Moyer',
    description:
      'Walk and Talk — premium technology consulting with Clarke Moyer. No laptops, no slides. Just a focused conversation on a walk, with an AI-generated summary delivered within 24 hours. $750/hour, 4-hour minimum.',
    type: 'website',
    url: '/walk-and-talk/',
  },
};

const BOOK_MAIN = 'https://outlook.office.com/bookwithme/user/6a2b9209a2654d8e9f83499a2218eec3@moyermanagement.com?anonymous&ismsaljsauthenabled&ep=plink';
const BOOK_45  = 'https://outlook.office.com/bookwithme/user/6a2b9209a2654d8e9f83499a2218eec3@moyermanagement.com/meetingtype/_nIXzgFu8kOM6hivevxXOQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile';
const BOOK_60  = 'https://outlook.office.com/bookwithme/user/6a2b9209a2654d8e9f83499a2218eec3@moyermanagement.com/meetingtype/iidM9O3-JkOFO5c_F3ZpVg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile';

export default function WalkAndTalkPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] bg-gray-900 flex items-center justify-center pt-36 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-4 text-gray-400">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}Walk and Talk
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Walk and Talk Consulting</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            No laptops. No decks. Just a walk, a conversation, and a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOK_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Book a Session
            </a>
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Nonprofit? It&rsquo;s Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── The Pitch ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg">
          <h2>The Pitch</h2>
          <p>
            Most technology consultants will sell you a PowerPoint and a Zoom call.
          </p>
          <p>
            Clarke Moyer offers something different: a real conversation, on a walk, with no screens between you.
          </p>
          <p>
            Walk and Talk is a premium consulting format built for senior leaders and business owners who need honest,
            expert perspective on their hardest technology problems — without the theater of a formal engagement.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>
          <ol className="space-y-8">
            {[
              {
                n: '01',
                title: 'Book a session',
                body: 'Select your preferred time via Microsoft Bookings. You'll receive a calendar invite and a brief intake form. No prep required.',
              },
              {
                n: '02',
                title: 'Step outside',
                body: 'At the scheduled time, both of you step outside and call in. No laptop needed. No slides to follow.',
              },
              {
                n: '03',
                title: 'Talk through your problem',
                body: 'Clarke asks hard questions and gives direct answers. The conversation goes where it needs to go.',
              },
              {
                n: '04',
                title: 'Receive your summary',
                body: 'Within 24 hours, you receive a full AI-generated summary of the conversation including key insights, decisions discussed, and recommended next steps. Delivered via Microsoft Teams.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-6">
                <span className="text-4xl font-black text-gray-200 leading-none select-none w-12 shrink-0 pt-1">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── What Clarke Advises On ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Clarke Advises On</h2>
          <p className="text-gray-700 text-lg mb-8">
            Clarke specializes in <strong>strategic technology adoption</strong> — specifically the barriers that
            prevent organizations from successfully adopting new technology.
          </p>

          {/* Blue callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
            <p className="text-blue-900 leading-relaxed">
              Clarke runs the{' '}
              <strong>TABS (Technology Adoption Barriers Study)</strong> research platform at{' '}
              <a
                href="https://technologyadoptionbarriers.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                technologyadoptionbarriers.org
              </a>{' '}
              and is completing a <strong>Doctor of Business Administration</strong> at Penn State&rsquo;s Smeal
              College of Business. Walk and Talk isn&rsquo;t a call with a generalist — it&rsquo;s executive access
              to someone actively researching the problems you&rsquo;re trying to solve.
            </p>
          </div>

          {/* Topics grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Technology adoption barriers and implementation failures',
              'AI strategy: what to actually implement vs. what to ignore',
              'Cloud and infrastructure modernization',
              'Security posture and compliance in regulated environments',
              'DoD, government contractor, and public sector technology challenges',
              'Program and portfolio management for technology organizations',
              'Building internal technology capability vs. buying it',
              'Any strategic technology problem',
            ].map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 mt-1 shrink-0">▸</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Pricing</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* 45-min card */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-1">45-Minute Walk and Talk</h3>
              <p className="text-sm text-amber-700 font-medium mb-4">Available once daily — lunch hour (EST)</p>
              <p className="text-4xl font-black text-gray-900 mb-1">$562.50</p>
              <p className="text-gray-500 text-sm mb-6">per session</p>
              <a
                href={BOOK_45}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition-colors"
              >
                Book 45-Minute Session →
              </a>
            </div>

            {/* 1-hour card */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 flex flex-col shadow-sm">
              <h3 className="text-xl font-bold text-white mb-1">1-Hour Walk and Talk</h3>
              <p className="text-sm text-amber-300 font-medium mb-4">Available once daily — after hours (EST)</p>
              <p className="text-4xl font-black text-white mb-1">$750</p>
              <p className="text-gray-400 text-sm mb-6">per session</p>
              <a
                href={BOOK_60}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Book 1-Hour Session →
              </a>
            </div>
          </div>

          {/* Scarcity note */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Clarke limits Walk and Talk to two sessions per day by design — one at lunch, one after hours. This keeps
            the quality of conversation high and ensures he is fully present for each call. Availability is limited;
            book in advance.
          </p>

          {/* Minimum engagement */}
          <p className="text-gray-900 font-bold">
            Minimum engagement: 4 hours ($3,000).
          </p>
          <p className="text-gray-600 mt-1">
            Sessions may be scheduled individually or as a block. Most clients begin with a single session and return
            for ongoing advisory work.
          </p>
        </div>
      </section>

      {/* ── Nonprofit Callout ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <p className="text-2xl font-bold text-green-900 mb-4">🎁 Registered 501(c)(3)? Walk and Talk is free.</p>
            <p className="text-green-800 mb-4 leading-relaxed">
              Clarke believes every organization deserves access to good technology advice — regardless of budget.
            </p>
            <p className="text-green-800 mb-6 leading-relaxed">
              Registered nonprofits receive Walk and Talk consulting at no cost through{' '}
              <strong>Free For Charity</strong>, Clarke&rsquo;s initiative dedicated to providing free IT and business
              services to charitable organizations.
            </p>
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Request a Free Session at freeforcharity.org →
            </a>
          </div>
        </div>
      </section>

      {/* ── Speaking Engagements ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Speaking Engagements</h2>
          <p className="text-gray-700 text-lg mb-6">
            Clarke is available for keynote presentations and sessions at industry events and executive retreats.
          </p>
          <p className="text-gray-700 font-semibold mb-3">Preferred formats:</p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">•</span>Industry conference keynotes and breakout sessions</li>
            <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">•</span>Company and executive offsite retreats</li>
            <li className="flex items-start gap-2"><span className="text-gray-400 mt-1">•</span>Leadership team workshops</li>
          </ul>
          <p className="text-gray-600 mb-8 leading-relaxed">
            <strong>A note on retreats:</strong> Clarke&rsquo;s preference is to work with leadership teams he has an
            existing relationship with. If your team has done a Walk and Talk session, a retreat engagement is a
            natural next step.
          </p>
          <a
            href="mailto:clarke@moyermanagement.com"
            className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Inquire About Speaking →
          </a>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-gray-900 py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Talk?</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Book a Walk and Talk session and get expert perspective on your hardest technology problem — delivered on
            a walk, with no screens required.
          </p>
          <a
            href={BOOK_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Now →
          </a>
        </div>
      </section>
    </>
  );
}
