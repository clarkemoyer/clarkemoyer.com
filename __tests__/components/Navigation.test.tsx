import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../src/components/Navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navigation', () => {
  it('renders the site title', () => {
    render(<Navigation />)
    expect(screen.getAllByText(/clarke moyer/i).length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders home link', () => {
    render(<Navigation />)
    const homeLinks = screen.getAllByRole('link', { name: /home/i })
    expect(homeLinks.length).toBeGreaterThan(0)
  })

  it('renders search button', () => {
    render(<Navigation />)
    const searchBtn = screen.getByRole('button', { name: /search/i })
    expect(searchBtn).toBeInTheDocument()
  })
})
