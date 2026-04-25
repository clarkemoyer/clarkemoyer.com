import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cooking',
  description: "Clarke Moyer's cooking page — recipes from a household where the wife is a trained chef.",
  openGraph: {
    title: 'Cooking | Clarke Moyer',
    description: "Clarke Moyer's cooking page — recipes from a household where the wife is a trained chef.",
    type: 'website',
    url: '/cooking/',
  },
};

const recipes = [
  {
    title: "Clarke Moyer's World Famous Apple Crisp Recipe",
    description:
      'A family favorite featuring Granny Smith and Golden Delicious apples with a buttery oat crumble topping. Serve hot with ice cream.',
    href: '/clarke-moyer-world-famous-apple-crisp-recipe/',
    emoji: '🍎',
  },
  {
    title: "Clarke Moyer's Sweet Tea Recipe",
    description:
      'Sized for a 2.5 gallon fridge dispenser. Strong, sweet, and Southern. The secret is dissolving the sugar while the tea is still hot.',
    href: '/clarke-moyer-sweet-tea-recipe/',
    emoji: '🍋',
  },
  {
    title: "Clarke Moyer's Philly Cheesesteak Recipe",
    description:
      'Shaved ribeye, caramelized onions, peppers, and Cheez Whiz on a soft roll. High heat and good meat are the whole game.',
    href: '/clarke-moyer-philly-cheesesteak-recipe/',
    emoji: '🥩',
  },
];

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
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            My wife is a trained chef but she does not have a website. This is where I keep my &lsquo;World Famous&rsquo; recipes.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <div
                key={recipe.href}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-3">{recipe.emoji}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{recipe.description}</p>
                <Link
                  href={recipe.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors text-center"
                >
                  View Recipe →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
