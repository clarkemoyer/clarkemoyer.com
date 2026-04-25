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
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>2.5 Gallon fridge dispenser</li>
              <li>Large pot (at least 2 quart capacity)</li>
              <li>Long stirring spoon</li>
              <li>Measuring cups: 1 Cup, ½ Cup</li>
              <li>Measuring spoons: 1 TSP</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Ingredients</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>16 Lipton Family-Size Tea Bags <span className="text-gray-500">(or 32 regular size)</span></li>
              <li>2½ Cups Granulated Sugar <span className="text-gray-500">(adjust to taste)</span></li>
              <li>2 Quarts Boiling Water <span className="text-gray-500">(for the concentrate)</span></li>
              <li>Cold Water to fill <span className="text-gray-500">(approximately 6 quarts)</span></li>
              <li>Optional: 1 TSP Baking Soda <span className="text-gray-500">(takes the bitterness out)</span></li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Directions</h2>
            <ol className="list-decimal ml-6 space-y-4 text-gray-700">
              <li>Bring 2 quarts of water to a rolling boil in a large pot.</li>
              <li>Remove from heat. Add all 16 family-size tea bags. If using baking soda, add it now — it neutralizes tannins and keeps the tea from going bitter or cloudy. Steep for <strong>15 minutes</strong>. Do not squeeze the bags when removing — it makes the tea bitter.</li>
              <li>Remove tea bags without squeezing. While the tea is still hot, add 2½ cups of sugar and stir until completely dissolved.</li>
              <li>Pour the sweet tea concentrate into your 2.5 gallon dispenser.</li>
              <li>Fill the rest of the dispenser with cold water, leaving a little room at the top. Stir gently to combine.</li>
              <li>Refrigerate for at least 2 hours before serving. <strong>Best served over ice.</strong> 🍋</li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-amber-900 mb-2">💡 Notes</h3>
            <ul className="list-disc ml-5 space-y-1 text-amber-800 text-sm">
              <li>Sugar dissolves much better in hot tea — always sweeten before adding cold water.</li>
              <li>For a stronger brew, steep up to 20 minutes but no longer.</li>
              <li>Add lemon slices to the dispenser for a classic touch.</li>
              <li>This recipe produces a classic Southern sweet tea — strong and sweet. Cut sugar to 2 cups for a lighter version.</li>
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
