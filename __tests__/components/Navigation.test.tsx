import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../src/components/Navigation'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the brand link', () => {
    render(<Navigation />)
    // Brand link is the h1/site title anchor
    const brandLinks = screen.getAllByText(/clarke moyer/i)
    expect(brandLinks.length).toBeGreaterThan(0)
  })

  it('renders a search control', () => {
    render(<Navigation />)
    // Search may be a button or anchor depending on branch
    const searchEl =
      screen.queryByRole('link', { name: /search/i }) ||
      screen.queryByRole('button', { name: /search/i })
    expect(searchEl).toBeTruthy()
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    // At least one nav link should be present
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
