import React from 'react'
import { render, screen, within } from '@testing-library/react'
import ContactPage from '../../src/app/contact/page'
import WhoIAmPage from '../../src/app/who-i-am/page'
import CTAButtons from '../../src/components/CTAButtons'

describe('sitewide Walk and Talk CTA hierarchy', () => {
  it('makes Walk and Talk the first and strongest contact option', () => {
    render(<ContactPage />)

    const contactLinks = screen.getAllByRole('link')
    const walkAndTalk = screen.getByRole('link', { name: /Book a Walk and Talk/i })
    const textLink = screen.getByRole('link', { name: /Text/i })
    const linkedIn = screen.getByRole('link', { name: /Connect with Clarke Moyer on LinkedIn/i })

    expect(contactLinks.indexOf(walkAndTalk)).toBeLessThan(contactLinks.indexOf(textLink))
    expect(contactLinks.indexOf(walkAndTalk)).toBeLessThan(contactLinks.indexOf(linkedIn))
    expect(walkAndTalk).toHaveClass('bg-white')
    expect(textLink).toHaveClass('border')
    expect(linkedIn).toHaveClass('border')
  })

  it('gives the Who I Am page a primary Walk and Talk closer before LinkedIn', () => {
    render(<WhoIAmPage />)

    const topCtaRegion = screen.getByTestId('who-i-am-top-cta')
    const topCtaLinks = within(topCtaRegion).getAllByRole('link')
    const topWalkAndTalk = within(topCtaRegion).getByRole('link', {
      name: /Book a Walk and Talk/i,
    })

    expect(topCtaLinks[0]).toBe(topWalkAndTalk)
    expect(topWalkAndTalk).toHaveClass('bg-blue-600')

    const ctaRegion = screen.getByTestId('who-i-am-cta')
    const ctaLinks = within(ctaRegion).getAllByRole('link')
    const walkAndTalk = within(ctaRegion).getByRole('link', { name: /Book a Walk and Talk/i })
    const linkedIn = within(ctaRegion).getByRole('link', { name: /Connect on LinkedIn/i })

    expect(ctaLinks[0]).toBe(walkAndTalk)
    expect(walkAndTalk).toHaveAttribute('href', '/walk-and-talk')
    expect(walkAndTalk).toHaveClass('bg-blue-600')
    expect(linkedIn).toHaveClass('border')
  })

  it('makes shared CTAButtons lead with Walk and Talk', () => {
    render(<CTAButtons />)

    const links = screen.getAllByRole('link')
    const walkAndTalk = screen.getByRole('link', { name: /Book a Walk and Talk/i })

    expect(links[0]).toBe(walkAndTalk)
    expect(walkAndTalk).toHaveAttribute('href', '/walk-and-talk')
    expect(walkAndTalk).toHaveClass('bg-blue-600')
    expect(screen.getByRole('link', { name: /Connect on LinkedIn/i })).toHaveClass('border')
  })
})
