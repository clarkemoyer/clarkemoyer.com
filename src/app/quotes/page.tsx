import type { Metadata } from 'next';
import { YoutubeEmbed } from './YoutubeEmbed';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Famous Business Quotes',
  description: 'Popular song lyrics reframed as business philosophy and technology adoption insights.',
  openGraph: {
    title: 'Famous Business Quotes | Clarke Moyer',
    description: 'Popular song lyrics reframed as business philosophy and technology adoption insights.',
    type: 'website',
    url: '/quotes/',
  },
};

type Quote = {
  lyric: string;
  song: string;
  artist: string;
  youtubeId: string;
  youtubeTitle: string;
  insight: React.ReactNode;
};

function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{quote.song}</h2>
        <p className="text-gray-500 text-sm mb-4">
          <em>{quote.artist}</em>
        </p>

        <blockquote className="text-2xl md:text-3xl italic text-gray-800 font-serif mb-3 leading-snug">
          &ldquo;{quote.lyric}&rdquo;
        </blockquote>

        {/* YouTube Embed */}
        <div className="relative w-full mb-8" style={{ paddingTop: '56.25%' }}>
          <YoutubeEmbed youtubeId={quote.youtubeId} title={quote.youtubeTitle} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">The Business Angle</h3>
        <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
          {quote.insight}
        </div>
      </div>
    </div>
  );
}

const quotes: Quote[] = [
  {
    lyric: "You can be addicted to a certain kind of sadness.",
    song: "Somebody That I Used to Know",
    artist: "Gotye (feat. Kimbra)",
    youtubeId: "8UVNT4wvIGY",
    youtubeTitle: "Gotye - Somebody That I Used to Know (feat. Kimbra)",
    insight: (
      <>
        <p>
          Organizations and individuals become attached to legacy systems, processes, and ways of working — even when they cause friction. The familiar discomfort of the old beats the uncertainty of the new. It&apos;s a strange comfort, choosing the devil you know over the one you don&apos;t.
        </p>
        <p>
          This maps directly to status quo bias, sunk cost fallacy, and resistance to digital transformation. Teams defend aging infrastructure not because it&apos;s better, but because it&apos;s known. Processes persist not because they work, but because rebuilding them feels riskier than tolerating them.
        </p>
        <p>
          Change management isn&apos;t just about deploying new technology — it&apos;s about breaking the emotional dependency on legacy ways of doing things. Acknowledge the grief. Name the attachment. Then move forward anyway.
        </p>
      </>
    ),
  },
  {
    lyric: "People who say money can\u2019t solve their problems must not have had enough money to solve them.",
    song: "7 Rings",
    artist: "Ariana Grande",
    youtubeId: "QYh6mYIJG2Y",
    youtubeTitle: "Ariana Grande - 7 rings",
    insight: (
      <>
        <p>
          Underfunded IT teams often treat tool selection, infrastructure upgrades, and talent acquisition as unsolvable problems — when the real constraint is budget. &quot;We can&apos;t fix that&quot; frequently translates to &quot;we haven&apos;t allocated what it would cost to fix that.&quot; Adequate investment unlocks options that didn&apos;t exist before.
        </p>
        <p>
          This speaks directly to IT budget advocacy and the hidden cost of technical debt. Every year an aging system isn&apos;t replaced, the organization pays in productivity loss, security exposure, and engineer burnout. The &quot;savings&quot; from not upgrading are often illusory — they&apos;re just future costs in disguise.
        </p>
        <p>
          Chronically understaffed engineering organizations stay stuck in cycles of firefighting instead of building. You can&apos;t innovate when your whole team is on-call for a system that should have been retired three budget cycles ago. Sometimes the most strategic thing a technology leader can do is make the business case — clearly, loudly, and with data — for simply spending the money.
        </p>
      </>
    ),
  },
];

export default function QuotesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link>
            {' / '}Quotes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Famous Business Quotes</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Popular culture distills hard truths. Here are some lyrics that hit differently when you&apos;re thinking about technology, organizations, and change.
          </p>
        </div>
      </section>

      {/* Quote Cards */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {quotes.map((quote) => (
            <QuoteCard key={quote.youtubeId} quote={quote} />
          ))}
        </div>
      </section>
    </>
  );
}
