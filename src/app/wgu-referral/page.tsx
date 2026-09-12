import type { Metadata } from 'next'
import ConversionPanel from '@/components/ConversionPanel'
import { getContentFile } from '@/lib/content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WGU Referral Program',
  description:
    'Absolutely free, alumni referral program for Western Governors University. Start your degree today.',
  openGraph: {
    title: 'WGU Referral Program | Clarke Moyer',
    description:
      'Absolutely free, alumni referral program for Western Governors University. Start your degree today.',
    type: 'website',
    url: '/wgu-referral/',
  },
}

export default async function WGUReferralPage() {
  const content = await getContentFile('wgu-referral')

  return (
    <>
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-brand hover:text-brand-hover font-medium mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">WGU Referral Program</h1>

          {content ? (
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <p className="text-gray-600">Content coming soon...</p>
          )}

          <div className="mt-12 pt-8 border-t">
            <ConversionPanel
              eyebrow="Prospective WGU students"
              title="Use Clarke’s alumni referral details"
              description="The referral instructions and referrer information are on this page. No separate form is collected by clarkemoyer.com."
              path="wgu_referral"
              location="wgu_next_step"
              primary={{
                label: 'Message Clarke on LinkedIn',
                href: 'https://www.linkedin.com/in/clarkemoyer/',
                action: 'open_linkedin_referral',
                external: true,
              }}
              secondary={{
                label: 'Review referral instructions',
                href: '#referral-information',
                action: 'view_referral_instructions',
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}
