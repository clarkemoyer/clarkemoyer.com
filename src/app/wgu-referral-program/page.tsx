import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'WGU Referral Program moved to WGU Referral',
  robots: { index: false, follow: true },
  alternates: { canonical: '/wgu-referral/' },
}

export default function WguReferralProgramPage() {
  return <SeoAliasRedirect destination="/wgu-referral/" destinationLabel="/wgu-referral/" />
}
