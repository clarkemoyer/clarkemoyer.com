import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact | Clarke Moyer',
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

      {/* ── Hero ── */}
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-36 pb-16 px-4">
        <div className="text-center text-white max-w-3xl">
          <div className="text-sm mb-4 text-gray-400">
            <Link href="/" className="hover:underline text-gray-300">
              Home
            </Link>
            {' / '}Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Questions about consulting, speaking engagements, or nonprofit help — start here.
          </p>
        </div>
      </section>

      {/* ── Two-Column Info ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Walk and Talk */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Walk and Talk Inquiry</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Interested in a Walk and Talk session? You can book directly via Microsoft Bookings — no
                back-and-forth required. Or send a message below if you have questions first.
              </p>
              <a
                href={BOOK_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Book a Session Now →
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Two sessions available daily · Mon–Fri · Limited availability
              </p>
            </div>

            {/* Speaking */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Speaking Engagements</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Clarke is available for keynote presentations, conference sessions, and executive retreats.
                Fill out the form below to inquire about availability and topics.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>Industry conference keynotes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>Executive offsite retreats
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>Leadership team workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Your information is used only to respond to your inquiry. Clarke does not sell or share
            contact information.
          </p>

          {/* Formspree form — Clarke needs to replace PLACEHOLDER with real endpoint */}
          <form
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Your company or organization"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiry_type" className="block text-sm font-semibold text-gray-700 mb-1">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiry_type"
                name="inquiry_type"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
              >
                <option value="">Select an inquiry type…</option>
                <option value="Walk and Talk Question">Walk and Talk Question</option>
                <option value="Speaking Engagement">Speaking Engagement</option>
                <option value="Free For Charity (Nonprofit)">Free For Charity (Nonprofit)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-y"
                placeholder="Tell Clarke what's on your mind…"
              />
            </div>

            {/* How did you hear */}
            <div>
              <label htmlFor="referral_source" className="block text-sm font-semibold text-gray-700 mb-1">
                How did you hear about Clarke?
              </label>
              <input
                id="referral_source"
                name="referral_source"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="LinkedIn, Google search, colleague, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded transition-colors"
            >
              Send Message →
            </button>
          </form>

          {/* Action note for Clarke */}
          <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 text-sm text-amber-900">
            <strong>Note for Clarke:</strong> Replace <code>PLACEHOLDER</code> in the form action URL with
            your real Formspree endpoint. Create a free account at{' '}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              formspree.io
            </a>{' '}
            and create a new form to get your endpoint.
          </div>
        </div>
      </section>
    </>
  );
}
