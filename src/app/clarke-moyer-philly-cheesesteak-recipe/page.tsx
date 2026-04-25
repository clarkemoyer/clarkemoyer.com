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
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Large cast iron skillet or flat-top griddle</li>
              <li>Sharp chef&rsquo;s knife or meat slicer</li>
              <li>Spatulas (2 — for chopping and moving meat)</li>
              <li>Measuring spoons: 1 TBSP, 1 TSP</li>
              <li>Aluminum foil (for steaming the cheese)</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Ingredients</h2>
            <p className="text-sm text-gray-500 mb-4">Makes 4 sandwiches</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Steak</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>2 lbs Ribeye steak, shaved thin <span className="text-gray-500">(freeze 30 min for easier slicing)</span></li>
                  <li>1 TBSP Vegetable oil</li>
                  <li>1 TSP Kosher salt</li>
                  <li>½ TSP Black pepper</li>
                  <li>½ TSP Garlic powder</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Rest</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>4 Amoroso rolls <span className="text-gray-500">(or any soft hoagie roll)</span></li>
                  <li>1 large White onion, thinly sliced</li>
                  <li>1 Green bell pepper, thinly sliced</li>
                  <li>8 oz Cheez Whiz <span className="text-gray-500">(the authentic choice)</span></li>
                  <li>4 slices Provolone <span className="text-gray-500">(optional, for extra richness)</span></li>
                  <li>2 TBSP Unsalted butter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Directions</h2>
            <ol className="list-decimal ml-6 space-y-4 text-gray-700">
              <li><strong>Prep the steak.</strong> Place the ribeye in the freezer for 30 minutes. Remove and slice paper-thin against the grain using a sharp knife. Season with salt, pepper, and garlic powder.</li>
              <li><strong>Cook the vegetables.</strong> Heat butter in the skillet over medium-high heat. Add onions and cook, stirring occasionally, for 8–10 minutes until soft and golden. Add bell peppers and cook another 5 minutes. Push to the side of the pan.</li>
              <li><strong>Cook the meat.</strong> Increase heat to high. Add the oil to the empty side of the skillet. Add the shaved steak in a single layer — do not stir immediately. Let it sear for 1–2 minutes, then chop and flip with the spatulas. Mix with the onions and peppers.</li>
              <li><strong>Add the cheese.</strong> Warm the Cheez Whiz in a small pot or microwave until pourable. Divide the meat mixture into 4 portions in the pan. Ladle Whiz over each portion. If using provolone, lay slices on top and cover with foil for 30 seconds to melt.</li>
              <li><strong>Build the sandwich.</strong> Open the rolls and scoop each meat portion directly into the roll. Serve immediately — the roll softens fast. <strong>Do not let it sit.</strong> 🥩</li>
            </ol>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-red-900 mb-2">🔥 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-red-800 text-sm">
              <li>Heat is everything — a cast iron on high or a flat-top griddle is the right tool. A regular non-stick pan won&rsquo;t get hot enough for the right crust on the meat.</li>
              <li>The Whiz vs. provolone debate is real. Whiz wins for authenticity. Provolone wins for texture. Do both.</li>
              <li>Do not use a baguette or a hard roll. The roll should be soft enough to compress when you squeeze the sandwich.</li>
              <li>Mushrooms are a valid add. Ketchup is not.</li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Link href="/cooking" className="text-blue-600 hover:underline font-medium">← Back to Cooking</Link>
          </div>
        </div>
      </section>
    </>
  );
}
