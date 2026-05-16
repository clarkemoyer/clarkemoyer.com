import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'

describe('Clarke Moyer homepage visual polish', () => {
  it('uses a clear hero CTA hierarchy and short project-focused introduction', async () => {
    render(await Home())

    expect(
      screen.getByText(/Projects, referrals, certification guides, and community initiatives/i)
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book a Walk and Talk/i })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: /Connect on LinkedIn/i })).toHaveClass('border')
    expect(screen.getByRole('link', { name: /View Projects/i })).toHaveClass('border')
    expect(screen.getByRole('link', { name: /View Projects/i })).toHaveAttribute(
      'href',
      '#projects'
    )
  })

  it('renders standardized project cards with specific CTA labels and no generic learn-more copy', async () => {
    render(await Home())

    const projects = screen.getByTestId('project-grid')
    const expectedCtas = [
      'View PSU-ARL Referral Details',
      'Request a WGU Referral',
      'Read Clarke’s Bio',
      'View Charity Work',
      'View Certification Guides',
    ]

    for (const label of expectedCtas) {
      expect(within(projects).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(within(projects).queryByText(/Learn More/i)).not.toBeInTheDocument()
    expect(within(projects).queryByText(/Continue Reading/i)).not.toBeInTheDocument()
  })
})
