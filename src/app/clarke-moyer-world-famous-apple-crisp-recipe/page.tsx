import type { Metadata } from 'next';
import Link from 'next/link';
import { amznUrl } from '@/lib/amazon';

export const metadata: Metadata = {
  title: "Clarke Moyer's World Famous Apple Crisp Recipe",
  description: "Clarke Moyer's World Famous Apple Crisp Recipe — a family favorite with Granny Smith and Golden Delicious apples.",
  openGraph: {
    title: "Clarke Moyer's World Famous Apple Crisp Recipe | Clarke Moyer",
    description: "Clarke Moyer's World Famous Apple Crisp Recipe — a family favorite with Granny Smith and Golden Delicious apples.",
    type: 'article',
    url: '/clarke-moyer-world-famous-apple-crisp-recipe/',
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
  { asin: 'B000YEP7AK', label: 'Apple Peeler, Cutter & Corer (Victorio)' },
  { asin: 'B00BPNQ46C', label: 'Pyrex 8×8 inch Glass Baking Dish' },
  { asin: 'B00LGLHUA0', label: 'Pyrex 4 Quart Glass Mixing Bowl' },
  { asin: 'B07JNLLNF9', label: 'Measuring Cup & Spoon Set' },
  { asin: 'B07B94SYCZ', label: "6-Inch Chef's Knife" },
];

export default function AppleCrispPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun/" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking/" className="hover:underline text-gray-300">Cooking</Link> / Apple Crisp
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s World Famous Apple Crisp Recipe</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            A family recipe — Granny Smith + Golden Delicious with a buttery oat crumble. Serve hot with ice cream.
          </p>
        </div>
      </section>

      {/* ── Metadata Strip ── */}
      <div className="bg-gray-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
          <span>🍎 Serves 6–8</span>
          <span className="text-gray-400">|</span>
          <span>⏱ Prep: 20 min</span>
          <span className="text-gray-400">|</span>
          <span>🔥 Bake: 50–60 min</span>
          <span className="text-gray-400">|</span>
          <span>⭐ Difficulty: Easy</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Filling</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="py-1 border-b border-gray-100">3 Granny Smith Apples</div>
                <div className="py-1 border-b border-gray-100">3 Golden Delicious Apples</div>
                <div className="py-1 border-b border-gray-100">3 TBSP {amzn('B07QG14XBS', 'Granulated Sugar')}</div>
                <div className="py-1 border-b border-gray-100">1 TSP {amzn('B00NYDYQ2C', 'Ground Cinnamon')}</div>
                <div className="py-1">1/8th TSP Fine Salt</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Crumble</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="py-1 border-b border-gray-100">1 Cup {amzn('B00032GKQO', 'Quaker Old Fashioned Oats')}</div>
                <div className="py-1 border-b border-gray-100">1 Cup Compacted {amzn('B07QKP99GD', 'Light Brown Sugar')}</div>
                <div className="py-1 border-b border-gray-100">2/3rd Cup {amzn('B000YI0LC8', 'All-purpose Flour')}</div>
                <div className="py-1 border-b border-gray-100">1 Stick {amzn('B07T9BQB19', 'Unsalted Butter')}</div>
                <div className="py-1">1/4th TSP Fine Salt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Directions ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-amber-400 pl-4">Directions</h2>
          <div className="space-y-4">
            {[
              { n: 1, text: 'Pre-Heat the oven to 350°F and arrange a rack in the middle.' },
              { n: 2, text: 'Peel, Core and Cut Apples. Combine the apples, 3 TBSP granulated sugar, 1 TSP ground cinnamon, and 1/8 TSP salt in 4 quart Pyrex mixing bowl and toss to coat.' },
              { n: 3, text: 'Lightly coat 8-by-8-inch Pyrex baking dish with butter. Place the apple mixture in the baking dish and set aside.' },
              { n: 4, text: 'Using the same mixing bowl, mix together 1 Cup brown sugar, 1 Cup old fashioned oats, 2/3rd Cup all-purpose flour, and 1/4th TSP salt until evenly combined.' },
              { n: 5, text: 'Cut stick of cold butter into small cubes. With your hands, blend in the butter pieces into the crumble mix until small clumps form and the butter is well incorporated, about 2 minutes.' },
              { n: 6, text: 'Sprinkle the topping evenly over the apples and bake until the streusel is crispy and the apples are tender, about 50 to 60 minutes. Let cool on a rack at least 20 minutes before serving.' },
            ].map((step) => (
              <div key={step.n} className="relative bg-white border border-gray-100 rounded-lg p-4 pl-16 mb-3 shadow-sm">
                <span className="absolute left-3 top-3 text-6xl font-bold text-gray-100 leading-none select-none">{step.n}</span>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10">{step.text}</p>
              </div>
            ))}
            {/* Final step — green highlight */}
            <div className="relative bg-green-50 border border-green-200 rounded-lg p-4 pl-16 shadow-sm">
              <span className="absolute left-3 top-3 text-6xl font-bold text-green-100 leading-none select-none">7</span>
              <p className="text-green-800 font-semibold text-sm leading-relaxed relative z-10">
                <strong>Serve with ice cream in a bowl while still hot.</strong> 🍦
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
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
