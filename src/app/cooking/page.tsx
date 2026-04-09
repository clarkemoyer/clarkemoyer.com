import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cooking',
  description: "Clarke Moyer's cooking page — recipes from a household where the wife is a trained chef.",
  openGraph: {
    title: 'Cooking | Clarke Moyer',
    description: "Clarke Moyer's cooking page — recipes from a household where the wife is a trained chef.",
    type: 'website',
    url: 'https://clarkemoyer.com/cooking/',
  },
};

export default function CookingPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link>
            {' / '}Cooking
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Cooking</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-700 mb-10 text-center">
            My wife is a trained chef but she does not have a website! This is where I keep my &lsquo;World Famous&rsquo; recipes.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Apple Crisp Recipe Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Clarke Moyer&apos;s World Famous Apple Crisp Recipe
              </h2>
              <p className="text-gray-600 mb-4">
                A family favorite featuring Granny Smith and Golden Delicious apples with a buttery oat crumble topping.
                Serve hot with ice cream.
              </p>
              <Link
                href="/clarke-moyer-world-famous-apple-crisp-recipe/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
