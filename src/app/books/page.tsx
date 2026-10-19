import type { Metadata } from 'next'
import Link from 'next/link'
import { amznSearch } from '@/lib/amazon'

export const metadata: Metadata = {
  title: 'Books & Reading',
  description:
    'Books Clarke Moyer has read, from leadership and psychology to cartoon histories and certification guides.',
  openGraph: {
    title: 'Books & Reading | Clarke Moyer',
    description:
      'Books Clarke Moyer has read, from leadership and psychology to cartoon histories and certification guides.',
    type: 'website',
    url: '/books/',
  },
}

type Book = {
  title: string
  author: string
  note: string
  href?: string
  series?: { label: string; query: string }
}

const shelves: { name: string; emoji: string; books: Book[] }[] = [
  {
    name: 'Leadership & Work',
    emoji: '🧭',
    books: [
      {
        title: 'The Speed of Trust',
        author: 'Stephen M.R. Covey',
        note: "A project moves at the speed of its sponsor's trust. When leadership trusts the team, decisions come fast and the work flows; when they don't, every step needs a sign-off. This book showed me the value of gaining that trust.",
      },
      {
        title: 'The Servant Leader',
        author: 'Ken Blanchard & Phil Hodges',
        note: "The best leaders I've worked for saw their job as clearing the path for their team, not the other way around. This book reminded me that leading a project means serving the people doing the work.",
      },
      {
        title: 'Getting Things Done',
        author: 'David Allen',
        note: "GTD is an old book and an older way of working, and I spent years failing to make it stick in Outlook and other task tracking apps. The idea of capturing every commitment and always knowing the next action still holds up, and I'm hopeful AI and newer tools will finally make this style of tracking practical.",
      },
      {
        title: 'Do Better Work',
        author: 'Max Yoder',
        note: "I met Max Yoder at an event and got the book from him. It's an interesting, quick read on finding the value in your work and focusing your energy where it actually matters.",
      },
    ],
  },
  {
    name: 'People & Psychology',
    emoji: '🧠',
    books: [
      {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        note: 'A dense read, but it changed how I look at decisions. Knowing when my gut is taking a shortcut, in estimates, risk calls or first impressions, has made me slow down on the choices that matter.',
      },
      {
        title: 'Talking to Strangers',
        author: 'Malcolm Gladwell',
        note: "Gladwell makes the case that all of us are worse at reading people than we think. I'm still terrible at picking up social cues, but I'm working on it all the time, and this book was a good reminder not to assume I understand someone after one conversation.",
      },
      {
        title: 'Emotional Intelligence 2.0',
        author: 'Travis Bradberry & Jean Greaves',
        note: "I first read this as part of a formal corporate leadership program at Sotera and KeyW. Since reading people doesn't come naturally to me, I like that it treats emotional intelligence as a skill you can practice, with short, concrete strategies I can actually work on.",
      },
      {
        title: 'Assholes: A Theory',
        author: 'Aaron James',
        note: "I got this as a Christmas present, and yes, it's a real philosophy book. It gives an interesting vantage into the mind of an asshole, and it's just as useful as an introspective look at when I might be acting like one myself.",
      },
      {
        title: 'Esquire Poker as Life',
        author: 'Esquire',
        note: "Another Christmas present. It's a fun, quick read built on the idea that poker teaches you about life: reading the table, managing risk, and knowing when to fold. Lighter than most of my shelf, but the lessons carry over to work too.",
      },
    ],
  },
  {
    name: 'Money & Economics',
    emoji: '💵',
    books: [
      {
        title: 'Mind Over Money',
        author: 'Brad Klontz & Ted Klontz',
        note: "Most money problems aren't math problems, they're psychology: beliefs and habits we picked up long before we ever saw a budget. The same instincts show up at work in how people react to cost overruns, funding cuts and risk, and this book helped me recognize them in myself and others.",
      },
      {
        title: 'The Cartoon Introduction to Economics, Volume One: Microeconomics',
        author: 'Yoram Bauman & Grady Klein',
        series: {
          label: 'See the whole Cartoon Introduction series',
          query: 'Cartoon Introduction Yoram Bauman Grady Klein',
        },
        note: 'One of my favorite series and one of the best ways I know to make hard topics fun. Supply, demand and incentives come up in every budget and contract decision, and this makes them stick. I recommend this book and the rest of the series as reading for all ages.',
      },
      {
        title: 'The Cartoon Introduction to Economics, Volume Two: Macroeconomics',
        author: 'Yoram Bauman & Grady Klein',
        note: "The second half of the set takes the same fun approach to the big picture: inflation, unemployment, interest rates and trade. It's the easiest way I know to understand the economic news that ends up shaping budgets and contracts at work.",
      },
    ],
  },
  {
    name: 'Cartoon History',
    emoji: '🌍',
    books: [
      {
        title: 'The Cartoon History of the Universe',
        author: 'Larry Gonick',
        series: {
          label: 'See the whole Cartoon History series',
          query: 'Larry Gonick Cartoon History',
        },
        note: "Larry Gonick covers everything from the Big Bang to ancient history in cartoons, and somehow it's both funny and genuinely educational. It's the book that got me hooked on learning hard subjects through comics.",
      },
      {
        title: 'The Cartoon History of the Universe III',
        author: 'Larry Gonick',
        note: 'The third volume picks up with the rise of Islam, medieval China and India, and the Renaissance, regions and eras my school history classes barely touched. Same humor, and just as easy to learn from.',
      },
      {
        title: 'The Cartoon History of the Modern World, Part II',
        author: 'Larry Gonick',
        note: "Gonick brings the story up through the revolutions, world wars and Cold War that shaped today. It's the most readable modern history I've found, and a great way to understand how we got here.",
      },
    ],
  },
  {
    name: 'Certification',
    emoji: '🎓',
    books: [
      {
        title: 'Microsoft 365 Certified Fundamentals MS-900 Exam Guide (3rd Edition)',
        author: 'Aaron Guilmette, Yura Lee & Marcos Zanre',
        note: 'This was my study guide for the MS-900, mainly for its practice test bank. Microsoft retired the exam in 2026, and AB-900 is now the closest replacement. My passing guide covers the rest of what I used.',
        href: '/clarke-moyer-microsoft-ms-900-passing-guide/',
      },
    ],
  },
]

export default function BooksPage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">
              Home
            </Link>
            {' / '}
            <Link href="/fun" className="hover:underline text-gray-300">
              Fun
            </Link>
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
                <div className="text-4xl mb-3" aria-hidden="true">
                  {shelf.emoji}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{shelf.name}</h2>
                <ul className="space-y-6">
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
                      <p className="text-gray-700 text-sm mt-2">{book.note}</p>
                      {book.series && (
                        <a
                          href={amznSearch(book.series.query)}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="block text-blue-600 hover:underline text-sm mt-1"
                        >
                          {book.series.label} ↗
                        </a>
                      )}
                      {book.href && (
                        <Link
                          href={book.href}
                          className="block text-blue-600 hover:underline text-sm mt-1"
                        >
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
            As an Amazon Associate I earn from qualifying purchases. Book links help support this
            site at no extra cost to you. See{' '}
            <a href="/affiliate-disclosure" className="underline hover:text-gray-600">
              Affiliate Disclosure
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
