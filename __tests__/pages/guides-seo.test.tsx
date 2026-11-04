import fs from 'fs'
import path from 'path'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import RelatedGuides from '../../src/components/RelatedGuides'
import { GUIDES, guideMetadata } from '../../src/lib/guides'
import { guideArticleSchema } from '../../src/lib/schema'

expect.extend(toHaveNoViolations)

const root = path.join(__dirname, '..', '..')
const guideDirs = fs
  .readdirSync(path.join(root, 'src', 'app'))
  .filter((d) => /^clarke-moyer-.*-passing-guide$/.test(d))
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8')
const slugs = new Set(GUIDES.map((g) => g.slug))

describe('certification guide SEO registry', () => {
  test('every passing guide route has exactly one registry entry', () => {
    expect([...slugs].sort()).toEqual([...guideDirs].sort())
    expect(slugs.size).toBe(GUIDES.length)
  })

  test.each(GUIDES.map((g) => [g.slug, g] as const))(
    '%s has search-friendly metadata',
    (_, guide) => {
      expect(guide.title.length).toBeLessThanOrEqual(50)
      expect(guide.title).not.toMatch(/Clarke Moyer/)
      expect(guide.description.length).toBeGreaterThanOrEqual(110)
      expect(guide.description.length).toBeLessThanOrEqual(160)
      expect(guide.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/)

      const meta = guideMetadata(guide.slug)
      expect(meta.alternates?.canonical).toBe(`/${guide.slug}/`)
      expect(meta.openGraph).toMatchObject({
        url: `/${guide.slug}/`,
        description: guide.description,
      })
    }
  )

  test.each(GUIDES.map((g) => [g.slug, g] as const))(
    '%s links to valid related guides',
    (_, guide) => {
      expect(guide.related.length).toBeGreaterThanOrEqual(2)
      for (const rel of guide.related) {
        expect(slugs.has(rel)).toBe(true)
        expect(rel).not.toBe(guide.slug)
      }
    }
  )

  test.each(GUIDES.map((g) => [g.slug, g] as const))(
    '%s sitemap lastmod matches dateModified',
    (_, guide) => {
      const entry = new RegExp(
        `<loc>https://clarkemoyer.com/${guide.slug}/</loc>\\s*<lastmod>${guide.dateModified}</lastmod>`
      )
      expect(sitemap).toMatch(entry)
    }
  )

  test('every guide is linked from at least one other guide', () => {
    const linked = new Set(GUIDES.flatMap((g) => g.related))
    for (const slug of slugs) expect(linked.has(slug)).toBe(true)
  })

  test('article schema names the author, date and credential', () => {
    const schema = guideArticleSchema(GUIDES[0])
    expect(schema['@type']).toBe('Article')
    expect(schema.author.name).toBe('Clarke Moyer')
    expect(schema.dateModified).toBe(GUIDES[0].dateModified)
    expect(schema.about['@type']).toBe('EducationalOccupationalCredential')
  })
})

describe('RelatedGuides', () => {
  test('renders links to related guides and the hub, accessibly', async () => {
    const guide = GUIDES[0]
    const { container } = render(<RelatedGuides slug={guide.slug} />)
    for (const rel of guide.related) {
      expect(container.querySelector(`a[href^="/${rel}"]`)).not.toBeNull()
    }
    expect(screen.getByRole('link', { name: /browse all certification guides/i })).toHaveAttribute(
      'href',
      expect.stringMatching(/^\/certification\/?$/)
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
