import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import CookieConsent from '../../src/components/cookie-consent'

expect.extend(toHaveNoViolations)

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = String(value) },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

// Clear document.cookie before each test to avoid cross-test contamination
beforeEach(() => {
  localStorageMock.clear()
  document.cookie.split(';').forEach(c => {
    document.cookie = c.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
  })
})

describe('CookieConsent', () => {
  it('shows banner on first visit', async () => {
    render(<CookieConsent />)
    await waitFor(() => expect(screen.queryByText(/we value your privacy/i)).toBeInTheDocument(), { timeout: 2000 })
  })

  it('does not show banner if consent already saved', () => {
    localStorageMock.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }))
    render(<CookieConsent />)
    expect(screen.queryByText(/we value your privacy/i)).not.toBeInTheDocument()
  })

  it('hides banner after Accept All', async () => {
    render(<CookieConsent />)
    await waitFor(() => expect(screen.getByText('Accept All')).toBeInTheDocument(), { timeout: 2000 })
    fireEvent.click(screen.getByText('Accept All'))
    await waitFor(() => expect(screen.queryByText(/we value your privacy/i)).not.toBeInTheDocument())
  })

  it('hides banner after Decline All', async () => {
    render(<CookieConsent />)
    await waitFor(() => expect(screen.getByText('Decline All')).toBeInTheDocument(), { timeout: 2000 })
    fireEvent.click(screen.getByText('Decline All'))
    await waitFor(() => expect(screen.queryByText(/we value your privacy/i)).not.toBeInTheDocument())
  })

  it('has links to privacy policy and cookie policy', async () => {
    render(<CookieConsent />)
    await waitFor(() => {
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
      expect(screen.getByText('Cookie Policy')).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('has no accessibility violations when banner is visible', async () => {
    const { container } = render(<CookieConsent />)
    // First confirm the banner actually renders before running axe
    await waitFor(() => expect(screen.queryByText(/we value your privacy/i)).toBeInTheDocument(), { timeout: 2000 })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
