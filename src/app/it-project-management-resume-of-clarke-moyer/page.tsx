import type { Metadata } from 'next'
import SeoAliasRedirect from '@/components/SeoAliasRedirect'

export const metadata: Metadata = {
  title: 'IT Project Management Resume moved to Resume',
  robots: { index: false, follow: true },
  alternates: { canonical: '/resume/' },
}

export default function ItProjectManagementResumeOfClarkeMoyerPage() {
  return <SeoAliasRedirect destination="/resume/" destinationLabel="/resume/" />
}
