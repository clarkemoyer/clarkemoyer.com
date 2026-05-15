import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'Free For Charity moved to Charity',
  robots: { index: false, follow: true },
  alternates: { canonical: '/charity/' },
}

export default function FreeForCharityPage() {
  return <SeoAliasRedirect destination="/charity/" destinationLabel="/charity/" />
}
