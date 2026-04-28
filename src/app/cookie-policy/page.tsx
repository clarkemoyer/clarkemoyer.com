import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for clarkemoyer.com',
}

const LAST_UPDATED = 'April 2026'

export default function CookiePolicy() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16 mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          <em>Last Updated: {LAST_UPDATED}</em>
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900">1. What Are Cookies?</h2>
            <p className="text-gray-700">
              Cookies are small text files placed on your device when you visit a website. They help
              the site remember your preferences and understand how you use it. Cookies can be
              &quot;persistent&quot; (remain until they expire or are deleted) or &quot;session&quot;
              (deleted when you close your browser).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. How This Site Uses Cookies</h2>
            <p className="text-gray-700">
              This site uses cookies to store your cookie consent preferences, and optionally to
              analyze traffic — only with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. Types of Cookies</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Necessary:</strong> Required for the site to function (e.g. storing your
                consent choice). Always active.
              </li>
              <li>
                <strong>Analytics:</strong> Help understand how visitors use the site (e.g. Google
                Analytics, Microsoft Clarity). Opt-in only.
              </li>

            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. Managing Your Preferences</h2>
            <p className="text-gray-700">
              You can update your cookie preferences at any time using the &quot;Cookie
              Preferences&quot; link in the footer. You can also clear your browser&apos;s local
              storage and cookies to reset your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. Contact</h2>
            <p className="text-gray-700">
              Questions? Contact Clarke Moyer via{' '}
              <a
                href="https://www.linkedin.com/in/clarkemoyer"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
