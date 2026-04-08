import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Clarke Moyer',
  description: 'Privacy Policy for clarkemoyer.com',
}

const EFFECTIVE_DATE = 'April 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16 mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8"><em>Effective Date: {EFFECTIVE_DATE}</em></p>

        <section className="prose prose-gray max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
            <p className="text-gray-700">This site is the personal website of Clarke Moyer at <a href="https://clarkemoyer.com" className="text-blue-600 hover:underline">clarkemoyer.com</a>. Your privacy is important. This policy explains what data is collected and how it is used.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">2. Information Collected</h2>
            <p className="text-gray-700">This site does not collect personal information directly. If you have consented to analytics cookies, aggregated, anonymized traffic data may be collected via Google Analytics and/or Microsoft Clarity. No personally identifiable information is stored by this site.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">3. Cookies</h2>
            <p className="text-gray-700">See the <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> for full details on how cookies are used.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">4. Third-Party Services</h2>
            <p className="text-gray-700">With your consent, this site may use Google Analytics, Microsoft Clarity, and/or Meta Pixel. Each of these services has its own privacy policy. This site embeds YouTube videos via youtube-nocookie.com which does not set tracking cookies without consent.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">5. Your Rights</h2>
            <p className="text-gray-700">You can withdraw or change your cookie consent at any time using the Cookie Preferences link in the footer. You may also clear your browser data to remove any stored preferences.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">6. Contact</h2>
            <p className="text-gray-700">Questions? Contact Clarke Moyer via <a href="https://www.linkedin.com/in/clarkemoyer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </div>
        </section>
      </main>
    </>
  )
}
