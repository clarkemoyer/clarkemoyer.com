import { CONVERSION_EVENT_NAME, trackConversion } from '@/lib/conversion-analytics'

describe('conversion analytics', () => {
  beforeEach(() => {
    localStorage.clear()
    document.cookie = 'cookie-consent=; Max-Age=0; path=/'
    window.dataLayer = []
  })

  const event = {
    path: 'professional_consulting' as const,
    action: 'open_booking',
    location: 'contact_primary',
    destination: 'https://example.com/booking',
  }

  it('does not emit before analytics consent', () => {
    trackConversion(event)
    expect(window.dataLayer).toEqual([])
  })

  it('does not emit after analytics is declined', () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    )
    trackConversion(event)
    expect(window.dataLayer).toEqual([])
  })

  it('emits the stable, non-PII event contract after consent', () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, analytics: true, marketing: false })
    )
    trackConversion(event)

    expect(window.dataLayer).toEqual([
      {
        event: CONVERSION_EVENT_NAME,
        conversion_path: 'professional_consulting',
        conversion_action: 'open_booking',
        conversion_location: 'contact_primary',
        conversion_destination: 'example.com',
      },
    ])
  })
})
