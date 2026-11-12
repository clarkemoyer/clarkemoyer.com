'use client'

import { useEffect } from 'react'
import { classifyLink, trackEvent } from '@/lib/analytics'

/**
 * One delegated listener that turns clicks on booking, contact, affiliate and
 * referral links into dataLayer events. Nothing is sent without analytics
 * consent (checked inside trackEvent). Renders nothing.
 */
export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Left click and middle click (open in new tab) both count.
      if (e.type === 'auxclick' && e.button !== 1) return
      const target = e.target as Element | null
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const evt = classifyLink(
        link.getAttribute('href') ?? '',
        window.location.pathname,
        link.textContent ?? '',
        window.location.origin
      )
      if (evt) trackEvent(evt)
    }
    document.addEventListener('click', onClick, true)
    document.addEventListener('auxclick', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('auxclick', onClick, true)
    }
  }, [])

  return null
}
