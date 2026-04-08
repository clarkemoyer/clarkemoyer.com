import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../src/components/Navigation'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the site title / brand', () => {
    render(<Navigation />)
    expect(screen.getByText(/clarke moyer/i)).toBeInTheDocument()
  })

  it('renders a search control', () => {
    render(<Navigation />)
    // Search is a button (will become a link after feat/a11y-nav-fixes merges)
    const searchEl = screen.queryByRole('button', { name: /search/i })
      || screen.queryByRole('link', { name: /search/i })
    expect(searchEl).toBeTruthy()
  })
})
