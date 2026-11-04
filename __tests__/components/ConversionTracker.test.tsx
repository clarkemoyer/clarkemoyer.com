import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ConversionTracker from '../../src/components/ConversionTracker'
import { classifyLink, trackEvent } from '../../src/lib/analytics'

const BOOK =
  'https://outlook.office.com/bookwithme/user/abc@moyermanagement.com/meetingtype/iidM9O3-JkOFO5c_F3ZpVg2?anonymous'

function setConsent(analytics: boolean | null) {
  if (analytics === null) localStorage.removeItem('cookie-consent')
  else
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, analytics, marketing: false })
    )
}

beforeEach(() => {
  localStorage.clear()
  document.cookie = 'cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
  window.dataLayer = []
})

describe('classifyLink', () => {
  it('tracks Bookings links without leaking the mailbox address', () => {
    const evt = classifyLink(BOOK, '/walk-and-talk/', 'Book 60 min')
    expect(evt?.event).toBe('walk_and_talk_booking_click')
    expect(evt?.params.booking_type).toBe('iidM9O3-JkOFO5c_F3ZpVg2')
    expect(JSON.stringify(evt)).not.toContain('@')
  })

  it('tracks mailto and sms without the address or number', () => {
    const mail = classifyLink('mailto:clarke@moyermanagement.com', '/contact/')
    expect(mail?.event).toBe('contact_click')
    expect(mail?.params.contact_method).toBe('mailto')
    expect(JSON.stringify(mail)).not.toContain('moyermanagement')
    const sms = classifyLink('sms:+15202228104', '/contact/')
    expect(sms?.params.contact_method).toBe('sms')
    expect(JSON.stringify(sms)).not.toContain('5202228104')
  })

  it('tracks LinkedIn profile links as contact', () => {
    expect(
      classifyLink('https://www.linkedin.com/in/clarkemoyer/', '/')?.params.contact_method
    ).toBe('linkedin')
  })

  it('tracks Amazon affiliate links with ASIN and tag', () => {
    const evt = classifyLink('https://www.amazon.com/dp/1260464016?tag=clarkemoyer-20', '/books/')
    expect(evt?.event).toBe('affiliate_click')
    expect(evt?.params).toMatchObject({ asin: '1260464016', affiliate_tag: 'clarkemoyer-20' })
    expect(classifyLink('https://www.amazon.com/s?k=pmp&tag=clarkemoyer-20', '/')?.event).toBe(
      'affiliate_click'
    )
  })

  it('tracks referral program outbound links', () => {
    expect(
      classifyLink('https://psu.wd1.myworkdayjobs.com/PSU_Staff?q=ARL', '/psu-arl-referral/')
        ?.params.referral_program
    ).toBe('psu_arl')
    expect(classifyLink('https://www.arl.army.mil/careers/', '/')?.params.referral_program).toBe(
      'psu_arl'
    )
    expect(
      classifyLink('https://www.wgu.edu/referral', '/wgu-referral/')?.params.referral_program
    ).toBe('wgu')
  })

  it('tracks internal CTAs to Walk and Talk or Contact, but not self-links', () => {
    expect(classifyLink('/walk-and-talk/', '/certification/')?.event).toBe(
      'walk_and_talk_cta_click'
    )
    expect(classifyLink('/contact', '/')?.params.cta_destination).toBe('/contact')
    expect(classifyLink('/walk-and-talk', '/walk-and-talk/')).toBeNull()
  })

  it('ignores unrelated links', () => {
    expect(classifyLink('/certification/', '/')).toBeNull()
    expect(classifyLink('https://freeforcharity.org', '/')).toBeNull()
    expect(classifyLink('#main-content', '/')).toBeNull()
    expect(classifyLink('javascript:void(0)', '/')).toBeNull()
  })
})

describe('trackEvent consent gate', () => {
  const evt = { event: 'affiliate_click' as const, params: { link_url: 'x' } }

  it('does nothing without stored consent', () => {
    setConsent(null)
    expect(trackEvent(evt)).toBe(false)
    expect(window.dataLayer).toEqual([])
  })

  it('does nothing when analytics was declined', () => {
    setConsent(false)
    expect(trackEvent(evt)).toBe(false)
    expect(window.dataLayer).toEqual([])
  })

  it('pushes when analytics consent is granted', () => {
    setConsent(true)
    expect(trackEvent(evt)).toBe(true)
    expect(window.dataLayer).toEqual([{ event: 'affiliate_click', link_url: 'x' }])
  })

  it('falls back to the consent cookie', () => {
    document.cookie = `cookie-consent=${encodeURIComponent(
      JSON.stringify({ necessary: true, analytics: true, marketing: false })
    )}; path=/`
    expect(trackEvent(evt)).toBe(true)
  })
})

describe('ConversionTracker', () => {
  it('pushes a booking event when a Bookings link is clicked with consent', () => {
    setConsent(true)
    const { getByText } = render(
      <>
        <ConversionTracker />
        <a href={BOOK} onClick={(e) => e.preventDefault()}>
          <span>Book now</span>
        </a>
      </>
    )
    fireEvent.click(getByText('Book now'))
    expect(window.dataLayer).toHaveLength(1)
    expect((window.dataLayer as Array<Record<string, string>>)[0].event).toBe(
      'walk_and_talk_booking_click'
    )
  })

  it('pushes nothing on click without consent', () => {
    const { getByText } = render(
      <>
        <ConversionTracker />
        <a href={BOOK} onClick={(e) => e.preventDefault()}>
          Book now
        </a>
      </>
    )
    fireEvent.click(getByText('Book now'))
    expect(window.dataLayer).toEqual([])
  })
})
