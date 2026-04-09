import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../src/components/Navigation'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the brand as a link to home', () => {
    render(<Navigation />)
    // Brand link goes to '/'
    const homeLinks = screen.getAllByRole('link').filter(
      el => el.getAttribute('href') === '/'
    )
    expect(homeLinks.length).toBeGreaterThan(0)
  })

  it('renders a search control linking to DuckDuckGo or labelled Search', () => {
    render(<Navigation />)
    const searchLink = screen.queryByRole('link', { name: /search/i })
    const searchBtn = screen.queryByRole('button', { name: /search/i })
    expect(searchLink || searchBtn).toBeTruthy()
  })

  it('renders the toggle menu button on mobile', () => {
    render(<Navigation />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })
})
