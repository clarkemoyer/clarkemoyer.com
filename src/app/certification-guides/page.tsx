import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'Certification Guides moved to Certification',
  robots: { index: false, follow: true },
  alternates: { canonical: '/certification/' },
}

export default function CertificationGuidesPage() {
  return <SeoAliasRedirect destination="/certification/" destinationLabel="/certification/" />
}
