/**
 * Conversion tracking for clarkemoyer.com.
 *
 * Events are pushed to the GTM dataLayer only after the visitor has granted
 * analytics consent through the cookie banner. GTM forwards them to GA4
 * (see docs/ANALYTICS_EVENTS.md for the GTM and GA4 setup).
 */

export type TrackedEventName =
  | 'walk_and_talk_booking_click'
  | 'contact_click'
  | 'walk_and_talk_cta_click'
  | 'affiliate_click'
  | 'referral_click'

export interface TrackedEvent {
  event: TrackedEventName
  params: Record<string, string>
}

const SITE_HOSTS = new Set(['clarkemoyer.com', 'www.clarkemoyer.com'])

const REFERRAL_HOSTS: Array<{ match: (host: string) => boolean; program: string }> = [
  { match: (h) => h === 'wgu.edu' || h.endsWith('.wgu.edu'), program: 'wgu' },
  { match: (h) => h.endsWith('.myworkdayjobs.com') && h.startsWith('psu.'), program: 'psu_arl' },
  { match: (h) => h === 'arl.army.mil' || h.endsWith('.arl.army.mil'), program: 'psu_arl' },
]

function isAmazonHost(host: string): boolean {
  return /(^|\.)amazon\.[a-z.]+$/.test(host) || host === 'amzn.to' || host === 'a.co'
}

/** Strip a trailing slash so "/contact/" and "/contact" compare equal. */
function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

function bookingType(url: URL): string {
  const m = url.pathname.match(/\/meetingtype\/([^/]+)/)
  return m ? m[1] : 'booking_page'
}

/**
 * Decide whether a link click is a conversion worth tracking.
 * Pure function: no DOM or consent checks, so it is easy to test.
 */
export function classifyLink(
  href: string,
  pagePath: string,
  linkText = '',
  origin = 'https://clarkemoyer.com'
): TrackedEvent | null {
  if (!href) return null
  let url: URL
  try {
    url = new URL(href, origin)
  } catch {
    return null
  }

  const base = {
    link_url: url.href,
    link_text: linkText.trim().replace(/\s+/g, ' ').slice(0, 100),
    page_path: pagePath,
  }

  const protocol = url.protocol
  if (protocol === 'mailto:' || protocol === 'sms:' || protocol === 'tel:') {
    // Drop the address itself from link_url; GA4 must not receive contact details.
    return {
      event: 'contact_click',
      params: { ...base, link_url: protocol, contact_method: protocol.replace(':', '') },
    }
  }
  if (protocol !== 'http:' && protocol !== 'https:') return null

  const host = url.hostname.toLowerCase()

  if (host === 'outlook.office.com' && url.pathname.startsWith('/bookwithme/')) {
    return {
      event: 'walk_and_talk_booking_click',
      // The Bookings URL embeds a mailbox address; send only the meeting type.
      params: {
        ...base,
        link_url: 'https://outlook.office.com/bookwithme/',
        booking_type: bookingType(url),
      },
    }
  }

  if (isAmazonHost(host)) {
    const asin = url.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i)?.[1] ?? ''
    return {
      event: 'affiliate_click',
      params: {
        ...base,
        affiliate_network: 'amazon',
        affiliate_tag: url.searchParams.get('tag') ?? '',
        ...(asin ? { asin } : {}),
      },
    }
  }

  const referral = REFERRAL_HOSTS.find((r) => r.match(host))
  if (referral) {
    return { event: 'referral_click', params: { ...base, referral_program: referral.program } }
  }

  if (host === 'linkedin.com' || host.endsWith('.linkedin.com')) {
    if (url.pathname.toLowerCase().startsWith('/in/clarkemoyer')) {
      return { event: 'contact_click', params: { ...base, contact_method: 'linkedin' } }
    }
    return null
  }

  const originHost = new URL(origin).hostname
  if (SITE_HOSTS.has(host) || host === originHost) {
    const target = normalizePath(url.pathname)
    const current = normalizePath(pagePath)
    if ((target === '/walk-and-talk' || target === '/contact') && target !== current) {
      return {
        event: 'walk_and_talk_cta_click',
        params: { ...base, cta_destination: target },
      }
    }
  }

  return null
}

/** True only when the visitor has saved consent with analytics enabled. */
export function hasAnalyticsConsent(): boolean {
  const parse = (raw: string | null | undefined): boolean => {
    if (!raw) return false
    try {
      const v = JSON.parse(raw)
      return typeof v === 'object' && v !== null && v.analytics === true
    } catch {
      return false
    }
  }
  try {
    const ls = localStorage.getItem('cookie-consent')
    if (ls) return parse(ls)
  } catch {
    /* storage blocked */
  }
  try {
    const match = document.cookie.match(/(?:^|;\s*)cookie-consent=([^;]+)/)
    if (match) return parse(decodeURIComponent(match[1]))
  } catch {
    /* ignore */
  }
  return false
}

/** Push an event to the dataLayer, but only with analytics consent. */
export function trackEvent(evt: TrackedEvent): boolean {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return false
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: evt.event, ...evt.params })
  return true
}
