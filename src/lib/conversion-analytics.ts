export const CONVERSION_EVENT_NAME = 'conversion_click' as const

export type ConversionPath =
  | 'professional_consulting'
  | 'psu_arl_referral'
  | 'wgu_referral'
  | 'certification_reader'
  | 'free_for_charity'

export interface ConversionEvent {
  path: ConversionPath
  action: string
  location: string
  destination: string
}

function normalizeDestination(destination: string): string {
  if (/^(mailto|sms|tel):/i.test(destination)) return destination.split(':', 1)[0].toLowerCase()

  try {
    const url = new URL(destination, window.location.origin)
    if (url.origin !== window.location.origin) return url.hostname.toLowerCase()
    return `${url.pathname}${url.hash}`
  } catch {
    return 'unknown'
  }
}

interface CookiePreferences {
  analytics?: boolean
}

function analyticsConsentGranted(): boolean {
  if (typeof window === 'undefined') return false

  try {
    const stored = window.localStorage.getItem('cookie-consent')
    if (stored) return (JSON.parse(stored) as CookiePreferences).analytics === true
  } catch {
    // Fall through to the cookie copy when localStorage is unavailable or malformed.
  }

  try {
    const match = document.cookie.match(/(?:^|;\s*)cookie-consent=([^;]+)/)
    if (!match) return false
    return (JSON.parse(decodeURIComponent(match[1])) as CookiePreferences).analytics === true
  } catch {
    return false
  }
}

/**
 * Record a conversion intent without PII. Events are emitted only after the visitor
 * has explicitly granted analytics consent through the existing cookie controls.
 */
export function trackConversion({ path, action, location, destination }: ConversionEvent): void {
  if (!analyticsConsentGranted()) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: CONVERSION_EVENT_NAME,
    conversion_path: path,
    conversion_action: action,
    conversion_location: location,
    conversion_destination: normalizeDestination(destination),
  })
}
