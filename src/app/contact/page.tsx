import type { Metadata } from 'next'
import Link from 'next/link'
import { breadcrumbSchema, SchemaScript } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Clarke Moyer for Walk and Talk consulting sessions, speaking engagements, or Free For Charity nonprofit assistance.',
  openGraph: {
    title: 'Contact | Clarke Moyer',
    description:
      'Get in touch with Clarke Moyer for Walk and Talk consulting, speaking engagements, or Free For Charity inquiries.',
    type: 'website',
    url: '/contact/',
  },
}

const BOOK_MAIN =
  'https://outlook.office.com/bookwithme/user/6a2b9209a2654d8e9f83499a2218eec3@moyermanagement.com?anonymous&ismsaljsauthenabled&ep=plink'

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact/' },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-gray-900 flex items-center justify-center pt-24 pb-12 px-4 md:min-h-[40vh] md:pt-28 md:pb-16">
        <div className="text-center text-white max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-4">
            <Link href="/" className="hover:underline text-gray-300">
              Home
            </Link>
            {' / '}
            <span className="text-gray-400">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            Two ways to reach Clarke — direct and no friction.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 pb-32 md:pb-0">
          {/* Book directly */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-6 text-white flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl" aria-hidden="true">
              📅
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Book a Walk and Talk</h2>
              <p className="text-gray-300 mb-4">
                Clarke&apos;s favorite way to connect: a focused conversation while walking through
                the issue together.
              </p>
              <a
                href={BOOK_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Book a Walk and Talk →
              </a>
            </div>
          </div>

          {/* Text */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="text-5xl" aria-hidden="true">
              💬
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Text</h2>
              <p className="text-gray-700 mb-4">
                Need a quick note first? Text Clarke directly — no voicemail, no gatekeeper.
              </p>
              <a
                href="sms:5202228104"
                className="inline-block border border-gray-900 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors text-lg"
              >
                Text (520) 222-8104 →
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl" aria-hidden="true">
              🔗
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Connect on LinkedIn</h2>
              <p className="text-blue-800 mb-4">
                Send a connection request or message Clarke directly on LinkedIn.
              </p>
              <a
                href="https://www.linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Clarke Moyer on LinkedIn"
                className="inline-block border border-blue-700 text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition-colors text-lg"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Nonprofit callout */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-10">
            <p className="font-bold text-amber-900">🎁 Nonprofit? Walk and Talk is free.</p>
            <p className="text-amber-800 text-sm mt-1">
              Registered 501(c)(3) nonprofits receive Walk and Talk at no cost through{' '}
              <a
                href="https://freeforcharity.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Free For Charity
              </a>
              .
            </p>
          </div>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
