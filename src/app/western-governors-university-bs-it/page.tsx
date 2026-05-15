import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'Western Governors University BS-IT moved to Education',
  robots: { index: false, follow: true },
  alternates: { canonical: '/education/' },
}

export default function WesternGovernorsUniversityBsItPage() {
  return <SeoAliasRedirect destination="/education/" destinationLabel="/education/" />
}
