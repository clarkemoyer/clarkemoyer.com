import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'About moved to Who I Am',
  robots: { index: false, follow: true },
  alternates: { canonical: '/who-i-am/' },
}

export default function AboutRedirect() {
  return <SeoAliasRedirect destination="/who-i-am/" destinationLabel="/who-i-am/" />
}
