import type { Metadata } from 'next';
import Link from 'next/link';

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

const AMZN_TAG = 'clarkemoyer-20';
function amzn(asin: string, label: string) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${AMZN_TAG}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline">
      {label} ↗
    </a>
  );
}

export default function SweetTeaPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking" className="hover:underline text-gray-300">Cooking</Link> / Sweet Tea
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s Sweet Tea Recipe</h1>
          <p className="mt-4 text-gray-300 text-lg">Sized for a 2.5 Gallon Fridge Dispenser</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Tools</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07G3LFMBS', '3 Gallon Stainless Steel Brew Pot')}
                <span className="text-gray-500 text-sm ml-1">— the entire recipe is made in this single pot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B005S4LOYY', 'Arrow Home Products 3 Gallon Drink Dispenser (BPA Free)')}
                <span className="text-gray-500 text-sm ml-1">— the exact dispenser used in this recipe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B0CN73MHZ8', 'Duckbill Silicone Pot Pour Spout')}
                <span className="text-gray-500 text-sm ml-1">— fits over the pot lip for clean pouring into the dispenser</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B0BQMTMV2Z', 'Flat Wooden Spatula for Stirring')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07JNLLNF9', 'Liquid Measuring Cup (1 Gallon marked)')}
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Ingredients</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                <span>
                  {amzn('B004G60HHU', 'Lipton Black Tea, 2-Gallon Iced Tea Bags (rectangle family size)')} — 2 bags
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                <span>
                  {amzn('B07QG14XBS', 'Domino Pure Cane Granulated Sugar')} — 3 cups
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                <span>3 gallons water total: 1 gallon for simple syrup, 1 gallon for tea, ½ gallon cold/iced for cooling</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Method</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 1 — Make the Simple Syrup</h3>
              <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                <li>Pour 1 gallon of water into the 3-gallon stainless steel pot.</li>
                <li>Add 3 cups of granulated sugar.</li>
                <li>Heat over medium-high, stirring until the sugar is completely dissolved. You&rsquo;re making a simple syrup — it does not need to boil, just fully dissolve.</li>
                <li>Remove from heat and set aside in the pot.</li>
              </ol>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 2 — Brew the Tea</h3>
              <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                <li>Add the second gallon of water directly to the same pot with the syrup.</li>
                <li>Bring to a boil, then remove from heat.</li>
                <li>Add both Lipton 2-Gallon rectangle tea bags. Steep for <strong>15 minutes</strong>. Do not squeeze the bags when removing — it makes the tea bitter and cloudy.</li>
                <li>Remove both bags without squeezing and discard.</li>
              </ol>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 3 — Cool Down</h3>
              <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                <li>Add ½ gallon of cold or iced water directly to the pot. Stir to combine.</li>
                <li>Allow the tea to cool further until it is no longer steaming. The goal is a temperature safe to pour into the plastic dispenser.</li>
              </ol>
            </div>

            {/* Warning box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5 mb-6">
              <h3 className="font-bold text-yellow-900 mb-2">⚠️ Do Not Skip the Cool-Down Step</h3>
              <p className="text-yellow-800 text-sm">
                The 2.5 gallon fridge dispenser is thinner plastic and <strong>will warp or melt</strong> if you pour boiling or near-boiling liquid into it.
                Always add the ½ gallon of cold water and wait until the tea has cooled to a safe pouring temperature before transferring.
                The stainless steel pot can hold hot liquid — the dispenser cannot.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 4 — Transfer &amp; Serve</h3>
              <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                <li>Attach the pouring spout/strainer assistant to the lip of the pot. This lets you cleanly pour into the smaller opening of the dispenser without spilling.</li>
                <li>Pour the cooled tea from the pot into the 2.5 gallon dispenser.</li>
                <li>Refrigerate for at least 2 hours. <strong>Serve over ice.</strong> 🍋</li>
              </ol>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-amber-900 mb-2">💡 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-800 text-sm">
              <li>This recipe uses 3-gallon sugar ratios but only 2 gallons of tea — intentionally lighter on the tea and heavier on the sweet. Classic Sweet Tea, not watered-down iced tea.</li>
              <li>The simple syrup method ensures the sugar is fully dissolved before the tea is added. You will never get grainy Sweet Tea this way.</li>
              <li>The two Lipton 2-gallon rectangle bags are sized to brew exactly 2 gallons — perfect for this method.</li>
              <li>Add lemon slices to the dispenser for a classic finish.</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mb-10">
            As an Amazon Associate I earn from qualifying purchases. Product links above help support this site at no extra cost to you.
          </p>

          <div className="mt-4 text-center">
            <Link href="/cooking" className="text-blue-600 hover:underline font-medium">← Back to Cooking</Link>
          </div>
        </div>
      </section>
    </>
  );
}
