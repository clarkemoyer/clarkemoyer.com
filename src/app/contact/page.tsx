import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

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
};

const BOOK_MAIN =
  'https://outlook.office.com/bookwithme/user/6a2b9209a2654d8e9f83499a2218eec3@moyermanagement.com?anonymous&ismsaljsauthenabled&ep=plink';

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
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-4">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
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
        <div className="max-w-3xl mx-auto px-4">

          {/* Text */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-6 text-white flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl" aria-hidden="true">💬</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Send a Text</h2>
              <p className="text-gray-300 mb-4">
                The fastest way to reach Clarke. Text him directly — no voicemail, no gatekeeper.
              </p>
              <a
                href="sms:5202228104"
                className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Text (520) 222-8104 →
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-6 flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl" aria-hidden="true">🔗</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Connect on LinkedIn</h2>
              <p className="text-blue-800 mb-4">
                Send a connection request or message Clarke directly on LinkedIn.
              </p>
              <a
                href="https://www.linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg"
              >
                LinkedIn: Clarke Moyer →
              </a>
            </div>
          </div>

          {/* Book directly */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl" aria-hidden="true">📅</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-green-900 mb-2">Ready to Book?</h2>
              <p className="text-green-800 mb-4">
                Skip the back-and-forth — book a Walk and Talk session directly via Microsoft Bookings.
              </p>
              <a
                href={BOOK_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg"
              >
                Book a Walk and Talk →
              </a>
            </div>
          </div>

          {/* Nonprofit callout */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-10">
            <p className="font-bold text-amber-900">🎁 Nonprofit? Walk and Talk is free.</p>
            <p className="text-amber-800 text-sm mt-1">
              Registered 501(c)(3) nonprofits receive Walk and Talk at no cost through{' '}
              <a href="https://freeforcharity.org" target="_blank" rel="noopener noreferrer" className="underline">
                Free For Charity
              </a>.
            </p>
          </div>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
