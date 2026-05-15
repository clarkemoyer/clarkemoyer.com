import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'PSU-ARL Referral Program moved to PSU-ARL Referral',
  robots: { index: false, follow: true },
  alternates: { canonical: '/psu-arl-referral/' },
}

export default function PsuArlReferralProgramPage() {
  return <SeoAliasRedirect destination="/psu-arl-referral/" destinationLabel="/psu-arl-referral/" />
}
