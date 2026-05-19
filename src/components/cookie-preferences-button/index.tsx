'use client'

import { useEffect, useState } from 'react'

interface CookiePreferencesButtonProps {
  className?: string
}

function hasStoredConsent() {
  try {
    if (localStorage.getItem('cookie-consent')) return true
  } catch { /* ignore */ }

  return /(?:^|;\s*)cookie-consent=/.test(document.cookie)
}

export default function CookiePreferencesButton({ className }: CookiePreferencesButtonProps) {
  const [canOpenPreferences, setCanOpenPreferences] = useState(false)

  useEffect(() => {
    const refreshVisibility = () => setCanOpenPreferences(hasStoredConsent())

    refreshVisibility()
    window.addEventListener('cookie-consent-updated', refreshVisibility)
    window.addEventListener('storage', refreshVisibility)

    return () => {
      window.removeEventListener('cookie-consent-updated', refreshVisibility)
      window.removeEventListener('storage', refreshVisibility)
    }
  }, [])

  if (!canOpenPreferences) return null

  return (
    <button
      type="button"
      onClick={() => window.openCookiePreferences?.()}
      className={className ?? 'text-gray-500 hover:text-gray-700 text-sm underline'}
    >
      Cookie Preferences
    </button>
  )
}
