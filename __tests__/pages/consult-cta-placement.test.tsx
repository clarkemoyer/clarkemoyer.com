import React from 'react'
import { render, screen, within } from '@testing-library/react'
import ResumePage from '../../src/app/resume/page'
import EducationPage from '../../src/app/education/page'
import ProfessionalDevelopmentPage from '../../src/app/professional-development/page'
import IndustryConferencesPage from '../../src/app/industry-conferences/page'
import BooksPage from '../../src/app/books/page'
import GuideConsultCta from '../../src/components/GuideConsultCta'

const pages: Array<[string, React.ComponentType, string, boolean]> = [
  ['resume', ResumePage, 'resume-consult-cta', true],
  ['education', EducationPage, 'education-consult-cta', true],
  [
    'professional development',
    ProfessionalDevelopmentPage,
    'professional-development-consult-cta',
    false,
  ],
  ['industry conferences', IndustryConferencesPage, 'industry-conferences-consult-cta', false],
  ['books', BooksPage, 'books-consult-cta', false],
]

describe('Walk and Talk calls to action on high-traffic pages', () => {
  it.each(pages)('%s page links to the canonical Walk and Talk URL', (_, Page, testId, contact) => {
    render(<Page />)
    const cta = screen.getByTestId(testId)
    expect(within(cta).getByRole('link', { name: /Book a Walk and Talk/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/^\/walk-and-talk\/?$/)
    )
    const contactLink = within(cta).queryByRole('link', { name: /Contact Clarke/i })
    if (contact) {
      expect(contactLink).toHaveAttribute('href', expect.stringMatching(/^\/contact\/?$/))
    } else {
      expect(contactLink).not.toBeInTheDocument()
    }
  })

  it('keeps the passing-guide CTA copy and link', () => {
    render(<GuideConsultCta />)
    expect(screen.getByText(/Want help planning your study path\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book a Walk and Talk/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/^\/walk-and-talk\/?$/)
    )
  })
})
