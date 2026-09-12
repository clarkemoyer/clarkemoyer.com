import type { Metadata } from 'next'
import { getContentFile } from '@/lib/content'
import Link from 'next/link'
import ConversionPanel from '@/components/ConversionPanel'
import './psu-arl-referral.css'

export const metadata: Metadata = {
  title: 'PSU-ARL Employee Referral Program',
  description:
    'Please connect with me for referrals to open positions at the Penn State Applied Research Laboratory.',
  openGraph: {
    title: 'PSU-ARL Employee Referral Program | Clarke Moyer',
    description:
      'Please connect with me for referrals to open positions at the Penn State Applied Research Laboratory.',
    type: 'website',
    url: '/psu-arl-referral/',
  },
}

export default async function PSUARLReferralPage() {
  const content = await getContentFile('psu-arl-referral')

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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">PSU-ARL Referral Program</h1>

          {content ? (
            <div
              className="prose prose-lg max-w-none text-gray-700 psu-arl-content"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <p className="text-gray-600">Content coming soon...</p>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <ConversionPanel
              eyebrow="PSU-ARL candidates"
              title="Start with a LinkedIn message"
              description="Referral requests begin on LinkedIn and are limited to candidates whose experience Clarke can personally validate. You can also apply directly without a referral."
              path="psu_arl_referral"
              location="psu_arl_next_step"
              primary={{
                label: 'Connect with Clarke on LinkedIn',
                href: 'https://www.linkedin.com/in/clarkemoyer/',
                action: 'open_linkedin_referral',
                external: true,
              }}
              secondary={{
                label: 'View open PSU-ARL roles',
                href: 'https://psu.wd1.myworkdayjobs.com/PSU_Staff?q=ARL&locations=b0858b72065c0154f935e400c501ef12',
                action: 'open_arl_jobs',
                external: true,
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}
