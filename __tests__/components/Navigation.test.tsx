import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../src/components/Navigation'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navigation', () => {
  it('renders the nav landmark', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders a home link with href="/"', () => {
    render(<Navigation />)
    const homeLinks = screen.getAllByRole('link').filter(
      el => el.getAttribute('href') === '/'
    )
    expect(homeLinks.length).toBeGreaterThan(0)
    // At least one must have text matching the brand
    const brandLink = homeLinks.find(el =>
      el.textContent?.match(/clarke moyer/i)
    )
    expect(brandLink).toBeTruthy()
  })

  it('renders a DuckDuckGo search link or Search button', () => {
    render(<Navigation />)
    const searchLink = screen.queryByRole('link', { name: /search/i })
    const searchBtn = screen.queryByRole('button', { name: /search/i })
    const control = searchLink || searchBtn
    expect(control).toBeTruthy()
    // If it's a link, it should point to DuckDuckGo
    if (searchLink) {
      expect(searchLink.getAttribute('href')).toContain('duckduckgo.com')
    }
  })

  it('renders a menu toggle button', () => {
    render(<Navigation />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })
})
