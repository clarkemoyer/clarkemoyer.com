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

export default function AppleCrispPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> /{' '}
            <Link href="/fun/" className="hover:underline text-gray-300">Fun</Link> /{' '}
            <Link href="/cooking/" className="hover:underline text-gray-300">Cooking</Link> / Apple Crisp
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer&rsquo;s World Famous Apple Crisp Recipe</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 pb-4 border-b">
            <span><strong>Prep:</strong> 20 min</span>
            <span><strong>Bake:</strong> 50–60 min</span>
            <span><strong>Serves:</strong> 8</span>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Tools</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B000YEP7AK', 'Apple Peeler, Cutter & Corer (Victorio)')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B00BPNQ46C', 'Pyrex 8×8 inch Glass Baking Dish')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B00LGLHUA0', 'Pyrex 4 Quart Glass Mixing Bowl')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07JNLLNF9', 'Measuring Cup & Spoon Set')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-gray-400">▸</span>
                {amzn('B07B94SYCZ', "6-Inch Chef's Knife")}
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Ingredients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Filling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>3 Granny Smith Apples</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>3 Golden Delicious Apples</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>3 TBSP {amzn('B07QG14XBS', 'Granulated Sugar')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 TSP {amzn('B00NYDYQ2C', 'Ground Cinnamon')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1/8th TSP Fine Salt</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Crumble</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 Cup {amzn('B00032GKQO', 'Quaker Old Fashioned Oats')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 Cup Compacted {amzn('B07QKP99GD', 'Light Brown Sugar')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>2/3rd Cup {amzn('B000YI0LC8', 'All-purpose Flour')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1 Stick {amzn('B07T9BQB19', 'Unsalted Butter')}</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-gray-400">▸</span><span>1/4th TSP Fine Salt</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Directions</h2>
            <ol className="list-decimal ml-6 space-y-4 text-gray-700">
              <li>Pre-Heat the oven to 350°F and arrange a rack in the middle.</li>
              <li>Peel, Core and Cut Apples. Combine the apples, 3 TBSP granulated sugar, 1 TSP ground cinnamon, and 1/8 TSP salt in 4 quart Pyrex mixing bowl and toss to coat.</li>
              <li>Lightly coat 8-by-8-inch Pyrex baking dish with butter. Place the apple mixture in the baking dish and set aside.</li>
              <li>Using the same mixing bowl, mix together 1 Cup brown sugar, 1 Cup old fashioned oats, 2/3rd Cup all-purpose flour, and 1/4th TSP salt until evenly combined.</li>
              <li>Cut stick of cold butter into small cubes. With your hands, blend in the butter pieces into the crumble mix until small clumps form and the butter is well incorporated, about 2 minutes.</li>
              <li>Sprinkle the topping evenly over the apples and bake until the streusel is crispy and the apples are tender, about 50 to 60 minutes. Let cool on a rack at least 20 minutes before serving.</li>
              <li><strong>Serve with ice cream in a bowl while still hot.</strong> 🍦</li>
            </ol>
          </div>

          <p className="text-xs text-gray-400 mb-10">
            As an Amazon Associate I earn from qualifying purchases. Product links help support this site at no extra cost to you. This page contains affiliate links. See <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>

          <div className="mt-4 text-center">
            <Link href="/cooking/" className="text-blue-600 hover:underline font-medium">← Back to Cooking</Link>
          </div>
        </div>
      </section>
    </>
  );
}
