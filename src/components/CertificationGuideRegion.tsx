'use client'

import type { MouseEvent, ReactNode } from 'react'
import { trackConversion } from '@/lib/conversion-analytics'

export default function CertificationGuideRegion({ children }: { children: ReactNode }) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const link = target.closest<HTMLAnchorElement>('a[href^="/clarke-moyer-"]')
    if (!link) return

    trackConversion({
      path: 'certification_reader',
      action: 'open_certification_guide',
      location: 'certification_guide_index',
      destination: link.getAttribute('href') || '',
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 prose prose-lg" onClick={handleClick}>
      {children}
    </div>
  )
}
