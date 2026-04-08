import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Clarke Moyer',
  description: 'Cookie Policy for clarkemoyer.com',
}

const LAST_UPDATED = 'April 2026'

export default function CookiePolicy() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16 mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8"><em>Last Updated: {LAST_UPDATED}</em></p>

        <section className="prose prose-gray max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">1. What Are Cookies?</h2>
            <p className="text-gray-700">Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">2. How This Site Uses Cookies</h2>
            <p className="text-gray-700">This site uses cookies to store your cookie consent preferences, and optionally to analyze traffic (Google Analytics, Microsoft Clarity) and support marketing (Meta Pixel) — only with your consent.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">3. Types of Cookies</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Necessary:</strong> Required for the site to function. Always active.</li>
              <li><strong>Analytics:</strong> Help understand how visitors use the site. Opt-in only.</li>
              <li><strong>Marketing:</strong> Used for retargeting and advertising. Opt-in only.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">4. Managing Your Preferences</h2>
            <p className="text-gray-700">You can update your cookie preferences at any time using the &ldquo;Customize&rdquo; option in the cookie consent banner. To remove stored preferences, clear your browser&apos;s cookies and localStorage and reload the page.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">5. Contact</h2>
            <p className="text-gray-700">Questions? Contact Clarke Moyer via <a href="https://www.linkedin.com/in/clarkemoyer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </div>
        </section>
      </main>
    </>
  )
}
