import type { Metadata } from 'next';
import Link from 'next/link';

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

const AMZN_TAG = 'clarkemoyer-20';
function amzn(asin: string, label: string) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline">
      {label} ↗
    </a>
  );
}

export default function PhillyCheesesteakPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking" className="hover:underline text-gray-300">Cooking</Link> / Philly Cheesesteak
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s Philly Cheesesteak Recipe</h1>
          <p className="mt-4 text-gray-300 text-lg">The Central PA interpretation — built for 4 sandwiches</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Tools</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B00006JSUA', 'Lodge 12-Inch Cast Iron Skillet')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07B94SYCZ', "8-Inch Chef's Knife")}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07H4TDDX7', 'Stainless Steel Griddle Spatula / Hamburger Turner (2 needed)')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07JNLLNF9', 'Measuring Cup & Spoon Set')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                <span>Aluminum foil <span className="text-gray-500">(for steaming the cheese onto the meat)</span></span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Ingredients</h2>
            <p className="text-sm text-gray-500 mb-4">Makes 4 sandwiches</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Steak</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>2 lbs Ribeye steak, shaved thin <span className="text-gray-500">(freeze 30 min for easier slicing)</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 TBSP Vegetable oil</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 TSP {amzn('B00KFPR2H4', 'Kosher Salt')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>½ TSP Black pepper</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>½ TSP Garlic powder</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Rest</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>4 Amoroso rolls <span className="text-gray-500">(or any soft hoagie roll)</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 large White onion, thinly sliced</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 Green bell pepper, thinly sliced</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>{amzn('B00HKNOAUC', 'Cheez Whiz (15 oz jar)')} <span className="text-gray-500">— the authentic choice</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>4 slices Provolone <span className="text-gray-500">(optional, for extra richness)</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>2 TBSP {amzn('B07T9BQB19', 'Unsalted Butter')}</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Directions</h2>
            <ol className="list-decimal ml-6 space-y-4 text-gray-700">
              <li><strong>Prep the steak.</strong> Place the ribeye in the freezer for 30 minutes. Remove and slice paper-thin against the grain using a sharp knife. Season with salt, pepper, and garlic powder.</li>
              <li><strong>Cook the vegetables.</strong> Heat butter in the cast iron over medium-high heat. Add onions and cook, stirring occasionally, for 8–10 minutes until soft and golden. Add bell peppers and cook another 5 minutes. Push to the side of the pan.</li>
              <li><strong>Cook the meat.</strong> Increase heat to high. Add the oil to the empty side of the skillet. Add the shaved steak in a single layer — do not stir immediately. Let it sear for 1–2 minutes, then chop and flip with the spatulas. Mix with the onions and peppers.</li>
              <li><strong>Add the cheese.</strong> Warm the Cheez Whiz until pourable. Divide the meat mixture into 4 portions in the pan. Ladle Whiz over each portion. If using provolone, lay slices on top and cover loosely with foil for 30 seconds to melt.</li>
              <li><strong>Build the sandwich.</strong> Open the rolls and scoop each meat portion directly into the roll. Serve immediately — the roll softens fast. <strong>Do not let it sit.</strong> 🥩</li>
            </ol>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-red-900 mb-2">🔥 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-red-800 text-sm">
              <li>Heat is everything — cast iron on high or a flat-top griddle is the right tool. A non-stick pan won&rsquo;t get hot enough for the right crust on the meat.</li>
              <li>The Whiz vs. provolone debate is real. Whiz wins for authenticity. Provolone wins for texture. Do both.</li>
              <li>The roll must be soft enough to compress when you squeeze the sandwich. No hard rolls.</li>
              <li>Mushrooms are a valid add. Ketchup is not.</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mb-10">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. See <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="mt-4 text-center">
            <Link href="/cooking" className="text-blue-600 hover:underline font-medium">← Back to Cooking</Link>
          </div>
        </div>
      </section>
    </>
  );
}
