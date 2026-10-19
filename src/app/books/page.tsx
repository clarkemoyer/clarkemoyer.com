import type { Metadata } from 'next';
import Link from 'next/link';
import { amznSearch } from '@/lib/amazon';

export const metadata: Metadata = {
  title: 'Books & Reading',
  description: 'Books Clarke Moyer has read, from leadership and psychology to cartoon histories and certification guides.',
  openGraph: {
    title: 'Books & Reading | Clarke Moyer',
    description: 'Books Clarke Moyer has read, from leadership and psychology to cartoon histories and certification guides.',
    type: 'website',
    url: '/books/',
  },
};

type Book = {
  title: string;
  author: string;
  href?: string;
};

const shelves: { name: string; emoji: string; books: Book[] }[] = [
  {
    name: 'Leadership & Work',
    emoji: '🧭',
    books: [
      { title: 'The Speed of Trust', author: 'Stephen M.R. Covey' },
      { title: 'The Servant Leader', author: 'Ken Blanchard & Phil Hodges' },
      { title: 'Getting Things Done', author: 'David Allen' },
      { title: 'Do Better Work', author: 'Max Yoder' },
    ],
  },
  {
    name: 'People & Psychology',
    emoji: '🧠',
    books: [
      { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
      { title: 'Talking to Strangers', author: 'Malcolm Gladwell' },
      { title: 'Emotional Intelligence 2.0', author: 'Travis Bradberry & Jean Greaves' },
      { title: 'Assholes: A Theory', author: 'Aaron James' },
      { title: 'Esquire Poker as Life', author: 'Esquire' },
    ],
  },
  {
    name: 'Money & Economics',
    emoji: '💵',
    books: [
      { title: 'Mind Over Money', author: 'Brad Klontz & Ted Klontz' },
      {
        title: 'The Cartoon Introduction to Economics, Volume One: Microeconomics',
        author: 'Yoram Bauman & Grady Klein',
      },
      {
        title: 'The Cartoon Introduction to Economics, Volume Two: Macroeconomics',
        author: 'Yoram Bauman & Grady Klein',
      },
    ],
  },
  {
    name: 'Cartoon History',
    emoji: '🌍',
    books: [
      { title: 'The Cartoon History of the Universe', author: 'Larry Gonick' },
      { title: 'The Cartoon History of the Universe III', author: 'Larry Gonick' },
      { title: 'The Cartoon History of the Modern World, Part II', author: 'Larry Gonick' },
    ],
  },
  {
    name: 'Certification',
    emoji: '🎓',
    books: [
      {
        title: 'Microsoft 365 Certified Fundamentals MS-900 Exam Guide (3rd Edition)',
        author: 'Aaron Guilmette, Yura Lee & Marcos Zanre',
        href: '/clarke-moyer-microsoft-ms-900-passing-guide/',
      },
    ],
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/fun" className="hover:underline text-gray-300">Fun</Link>
            {' / '}Books &amp; Reading
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Books &amp; Reading</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            I don&rsquo;t read many books but when I do I sometimes add them here.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {shelves.map((shelf) => (
              <div
                key={shelf.name}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{shelf.emoji}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{shelf.name}</h2>
                <ul className="space-y-3">
                  {shelf.books.map((book) => (
                    <li key={book.title}>
                      <a
                        href={amznSearch(`${book.title} ${book.author}`)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="font-semibold text-blue-600 hover:underline"
                      >
                        {book.title}
                      </a>
                      <span className="block text-gray-600 text-sm">{book.author}</span>
                      {book.href && (
                        <Link href={book.href} className="text-blue-600 hover:underline text-sm">
                          Read my passing guide →
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-gray-500 text-center">
            As an Amazon Associate I earn from qualifying purchases. Book links help support this site at no extra cost to you. See <a href="/affiliate-disclosure" className="underline hover:text-gray-600">Affiliate Disclosure</a>.
          </p>
        </div>
      </section>
    </>
  );
}
