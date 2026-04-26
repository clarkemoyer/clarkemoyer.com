import type { Metadata } from 'next';
import Link from 'next/link';
import { amznUrl } from '@/lib/amazon';

export const metadata: Metadata = {
  title: "Clarke Moyer's Sweet Tea Recipe",
  description: "Clarke Moyer's Sweet Tea Recipe — scaled for a 2.5 gallon fridge dispenser. Strong, sweet, and Southern.",
  openGraph: {
    title: "Clarke Moyer's Sweet Tea Recipe | Clarke Moyer",
    description: "Clarke Moyer's Sweet Tea Recipe — scaled for a 2.5 gallon fridge dispenser. Strong, sweet, and Southern.",
    type: 'article',
    url: '/clarke-moyer-sweet-tea-recipe/',
  },
};

function amzn(asin: string, label: string) {
  return (
    <a href={amznUrl(asin)} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline">
      {label} ↗
    </a>
  );
}

const tools: { asin: string; label: string; desc?: string }[] = [
  { asin: 'B07G3LFMBS', label: '3 Gallon Stainless Steel Brew Pot', desc: 'the entire recipe is made in this single pot' },
  { asin: 'B005S4LOYY', label: 'Arrow Home Products 3 Gallon Drink Dispenser (BPA Free)', desc: 'we fill it to 2.5 gallons' },
  { asin: 'B0CN73MHZ8', label: 'Duckbill Silicone Pot Pour Spout', desc: 'fits over the pot lip for clean pouring' },
  { asin: 'B0BQMTMV2Z', label: 'Flat Wooden Spatula for Stirring' },
  { asin: 'B07JNLLNF9', label: 'Liquid Measuring Cup (1 Gallon marked)' },
];

const phases = [
  {
    num: 1,
    color: 'blue',
    title: 'Make the Simple Syrup',
    borderClass: 'border-blue-500',
    bgClass: 'bg-blue-50',
    numClass: 'text-blue-100',
    titleClass: 'text-blue-900',
    textClass: 'text-blue-800',
    steps: [
      'Pour 1 gallon of water into the 3-gallon stainless steel pot.',
      'Add 3 cups of granulated sugar.',
      "Heat over medium-high, stirring until the sugar is completely dissolved. You're making a simple syrup — it does not need to boil, just fully dissolve.",
      'Remove from heat and set aside in the pot.',
    ],
  },
  {
    num: 2,
    color: 'amber',
    title: 'Brew the Tea',
    borderClass: 'border-amber-500',
    bgClass: 'bg-amber-50',
    numClass: 'text-amber-100',
    titleClass: 'text-amber-900',
    textClass: 'text-amber-800',
    steps: [
      'Add the second gallon of water directly to the same pot with the syrup.',
      'Bring to a boil, then remove from heat.',
      'Add both Lipton 2-Gallon rectangle tea bags. Steep for 15 minutes. Do not squeeze the bags when removing — it makes the tea bitter and cloudy.',
      'Remove both bags without squeezing and discard.',
    ],
  },
  {
    num: 3,
    color: 'teal',
    title: 'Cool Down',
    borderClass: 'border-teal-500',
    bgClass: 'bg-teal-50',
    numClass: 'text-teal-100',
    titleClass: 'text-teal-900',
    textClass: 'text-teal-800',
    steps: [
      'Add ½ gallon of cold or iced water directly to the pot. Stir to combine.',
      'Allow the tea to cool further until it is no longer steaming. The goal is a temperature safe to pour into the plastic dispenser.',
    ],
  },
];

export default function SweetTeaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun/" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking/" className="hover:underline text-gray-300">Cooking</Link> / Sweet Tea
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s Sweet Tea Recipe</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Clarke&rsquo;s 3-phase Southern sweet tea method — brewed strong, sweetened hot, chilled cold. Makes 2.5 gallons.
          </p>
        </div>
      </section>

      {/* ── Metadata Strip ── */}
      <div className="bg-gray-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
          <span>🫖 Makes 2.5 gal</span>
          <span className="text-gray-400">|</span>
          <span>⏱ Active: 30 min</span>
          <span className="text-gray-400">|</span>
          <span>❄️ Chill: 2+ hrs</span>
          <span className="text-gray-400">|</span>
          <span>🥄 Difficulty: Easy</span>
        </div>
      </div>

      {/* ── Tools ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-400 pl-4">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((t) => (
              <div key={t.asin} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col gap-2">
                <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                {t.desc && <p className="text-xs text-gray-500">{t.desc}</p>}
                <a
                  href={amznUrl(t.asin)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  View on Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-amber-400 pl-4">Ingredients</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3 text-gray-700 text-sm">
            <div className="py-1 border-b border-gray-100">
              {amzn('B004G60HHU', 'Lipton Black Tea, 2-Gallon Iced Tea Bags (rectangle family size)')} — 2 bags
            </div>
            <div className="py-1 border-b border-gray-100">
              {amzn('B07QG14XBS', 'Domino Pure Cane Granulated Sugar')} — 3 cups
            </div>
            <div className="py-1">
              2.5 gallons water total: 1 gallon for simple syrup, 1 gallon for tea, ½ gallon cold/iced for cooling
            </div>
          </div>
        </div>
      </section>

      {/* ── Method: Phases ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-amber-400 pl-4">Method</h2>

          <div className="space-y-6">
            {phases.map((phase) => (
              <div key={phase.num} className={`relative ${phase.bgClass} border-l-4 ${phase.borderClass} rounded-r-xl p-6 overflow-hidden`}>
                <span className={`absolute right-4 top-2 text-8xl font-black ${phase.numClass} select-none leading-none`}>
                  {phase.num}
                </span>
                <h3 className={`text-lg font-bold ${phase.titleClass} mb-4`}>
                  Phase {phase.num} — {phase.title}
                </h3>
                <ol className="space-y-2 relative z-10">
                  {phase.steps.map((step, i) => (
                    <li key={i} className={`flex gap-3 text-sm ${phase.textClass}`}>
                      <span className="font-bold shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Warning box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5 mt-6 mb-6">
            <h3 className="font-bold text-yellow-900 mb-2">⚠️ Do Not Skip the Cool-Down Step</h3>
            <p className="text-yellow-800 text-sm">
              The 2.5 gallon fridge dispenser is thinner plastic and <strong>will warp or melt</strong> if you pour boiling or near-boiling liquid into it.
              Always add the ½ gallon of cold water and wait until the tea has cooled to a safe pouring temperature before transferring.
              The stainless steel pot can hold hot liquid — the dispenser cannot.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="relative bg-gray-50 border-l-4 border-gray-400 rounded-r-xl p-6 overflow-hidden">
            <span className="absolute right-4 top-2 text-8xl font-black text-gray-200 select-none leading-none">4</span>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Phase 4 — Transfer &amp; Serve</h3>
            <ol className="space-y-2 relative z-10">
              <li className="flex gap-3 text-sm text-gray-700"><span className="font-bold shrink-0">1.</span><span>Attach the pouring spout/strainer assistant to the lip of the pot. This lets you cleanly pour into the smaller opening of the dispenser without spilling.</span></li>
              <li className="flex gap-3 text-sm text-gray-700"><span className="font-bold shrink-0">2.</span><span>Pour the cooled tea from the pot into the 2.5 gallon dispenser.</span></li>
              <li className="flex gap-3 text-sm text-gray-700"><span className="font-bold shrink-0">3.</span><span>Refrigerate for at least 2 hours. <strong>Serve over ice.</strong> 🍋</span></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── Notes ── */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-amber-900 mb-2">💡 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-800 text-sm">
              <li>This recipe uses 3-gallon sugar ratios but only 2 gallons of tea — intentionally lighter on the tea and heavier on the sweet. Classic Sweet Tea, not watered-down iced tea.</li>
              <li>The simple syrup method ensures the sugar is fully dissolved before the tea is added. You will never get grainy Sweet Tea this way.</li>
              <li>The two Lipton 2-gallon rectangle bags are sized to brew exactly 2 gallons — perfect for this method.</li>
              <li>Add lemon slices to the dispenser for a classic finish.</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mb-8">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="text-center">
            <Link
              href="/cooking/"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              ← Back to Cooking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
