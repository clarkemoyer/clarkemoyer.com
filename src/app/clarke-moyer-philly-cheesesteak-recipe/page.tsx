import type { Metadata } from 'next';
import Link from 'next/link';
import { amznUrl } from '@/lib/amazon';

export const metadata: Metadata = {
  title: "Clarke Moyer's Philly Cheesesteak Recipe",
  description: "Clarke Moyer's Philly Cheesesteak Recipe — thinly shaved ribeye, caramelized onions, peppers, and Whiz on an Amoroso roll.",
  openGraph: {
    title: "Clarke Moyer's Philly Cheesesteak Recipe | Clarke Moyer",
    description: "Clarke Moyer's Philly Cheesesteak Recipe — thinly shaved ribeye, caramelized onions, peppers, and Whiz on an Amoroso roll.",
    type: 'article',
    url: '/clarke-moyer-philly-cheesesteak-recipe/',
  },
};

function amzn(asin: string, label: string) {
  return (
    <a href={amznUrl(asin)} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline">
      {label} ↗
    </a>
  );
}

const tools: { asin?: string; label: string; desc?: string }[] = [
  { asin: 'B00006JSUA', label: 'Lodge 12-Inch Cast Iron Skillet' },
  { asin: 'B07B94SYCZ', label: "8-Inch Chef's Knife" },
  { asin: 'B07H4TDDX7', label: 'Stainless Steel Griddle Spatula / Hamburger Turner (2 needed)' },
  { asin: 'B07JNLLNF9', label: 'Measuring Cup & Spoon Set' },
  { label: 'Aluminum foil', desc: 'for steaming the cheese onto the meat' },
];

const directions = [
  { title: 'Prep the steak.', body: 'Place the ribeye in the freezer for 30 minutes. Remove and slice paper-thin against the grain using a sharp knife. Season with salt, pepper, and garlic powder.' },
  { title: 'Cook the vegetables.', body: 'Heat butter in the cast iron over medium-high heat. Add onions and cook, stirring occasionally, for 8–10 minutes until soft and golden. Add bell peppers and cook another 5 minutes. Push to the side of the pan.' },
  { title: 'Cook the meat.', body: 'Increase heat to high. Add the oil to the empty side of the skillet. Add the shaved steak in a single layer — do not stir immediately. Let it sear for 1–2 minutes, then chop and flip with the spatulas. Mix with the onions and peppers.' },
  { title: 'Add the cheese.', body: 'Warm the Cheez Whiz until pourable. Divide the meat mixture into 4 portions in the pan. Ladle Whiz over each portion. If using provolone, lay slices on top and cover loosely with foil for 30 seconds to melt.' },
];

export default function PhillyCheesesteakPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun/" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking/" className="hover:underline text-gray-300">Cooking</Link> / Philly Cheesesteak
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s Philly Cheesesteak Recipe</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Clarke&rsquo;s griddle method — shaved ribeye, Cheez Whiz, and a proper Amoroso roll. No shortcuts.
          </p>
        </div>
      </section>

      {/* ── Metadata Strip ── */}
      <div className="bg-gray-800 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium">
          <span>🥩 Serves 2</span>
          <span className="text-gray-400">|</span>
          <span>⏱ Prep: 10 min</span>
          <span className="text-gray-400">|</span>
          <span>🔥 Cook: 15 min</span>
          <span className="text-gray-400">|</span>
          <span>🌶️ Difficulty: Medium</span>
        </div>
      </div>

      {/* ── Tools ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-red-400 pl-4">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((t) => (
              <div key={t.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col gap-2">
                <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                {t.desc && <p className="text-xs text-gray-500">{t.desc}</p>}
                {t.asin && (
                  <a
                    href={amznUrl(t.asin)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-xs text-blue-600 hover:underline font-medium"
                  >
                    View on Amazon →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-red-400 pl-4">Ingredients</h2>
          <p className="text-sm text-gray-500 mb-6 ml-5">Makes 4 sandwiches</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Steak</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="py-1 border-b border-gray-100">2 lbs Ribeye steak, shaved thin <span className="text-gray-500">(freeze 30 min for easier slicing)</span></div>
                <div className="py-1 border-b border-gray-100">1 TBSP Vegetable oil</div>
                <div className="py-1 border-b border-gray-100">1 TSP {amzn('B00KFPR2H4', 'Kosher Salt')}</div>
                <div className="py-1 border-b border-gray-100">½ TSP Black pepper</div>
                <div className="py-1">½ TSP Garlic powder</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Rest</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="py-1 border-b border-gray-100">4 Amoroso rolls <span className="text-gray-500">(or any soft hoagie roll)</span></div>
                <div className="py-1 border-b border-gray-100">1 large White onion, thinly sliced</div>
                <div className="py-1 border-b border-gray-100">1 Green bell pepper, thinly sliced</div>
                <div className="py-1 border-b border-gray-100">{amzn('B00HKNOAUC', 'Cheez Whiz (15 oz jar)')} <span className="text-gray-500">— the authentic choice</span></div>
                <div className="py-1 border-b border-gray-100">4 slices Provolone <span className="text-gray-500">(optional, for extra richness)</span></div>
                <div className="py-1">2 TBSP {amzn('B07T9BQB19', 'Unsalted Butter')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Directions ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-red-400 pl-4">Directions</h2>
          <div className="space-y-4">
            {directions.map((step, i) => (
              <div key={i} className="relative bg-white border border-gray-100 rounded-lg p-4 pl-16 mb-3 shadow-sm">
                <span className="absolute left-3 top-3 text-6xl font-bold text-gray-100 leading-none select-none">{i + 1}</span>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                  <strong>{step.title}</strong> {step.body}
                </p>
              </div>
            ))}
            {/* Final step */}
            <div className="relative bg-amber-50 border border-amber-200 rounded-lg p-4 pl-16 shadow-sm">
              <span className="absolute left-3 top-3 text-6xl font-bold text-amber-100 leading-none select-none">5</span>
              <p className="text-amber-800 text-sm leading-relaxed relative z-10">
                <strong>Build the sandwich.</strong> Open the rolls and scoop each meat portion directly into the roll. Serve immediately — the roll softens fast. <strong>Do not let it sit.</strong> 🥩
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notes ── */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-400 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-amber-900 mb-2">🔥 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-800 text-sm">
              <li>Heat is everything — cast iron on high or a flat-top griddle is the right tool. A non-stick pan won&rsquo;t get hot enough for the right crust on the meat.</li>
              <li>The Whiz vs. provolone debate is real. Whiz wins for authenticity. Provolone wins for texture. Do both.</li>
              <li>The roll must be soft enough to compress when you squeeze the sandwich. No hard rolls.</li>
              <li>Mushrooms are a valid add. Ketchup is not.</li>
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
