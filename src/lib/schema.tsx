// Base Person schema for Clarke Moyer — include on every page
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Clarke Moyer',
    url: 'https://clarkemoyer.com',
    jobTitle: 'DoD R&D Program Manager & Technology Adoption Researcher',
    description:
      'Clarke Moyer is a DoD contractor at PSU-ARL, DBA candidate at Penn State Smeal College of Business, and founder of Free For Charity. Specializes in technology adoption barriers.',
    sameAs: ['https://www.linkedin.com/in/clarkemoyer'],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Western Governors University' },
      { '@type': 'CollegeOrUniversity', name: 'Penn State Smeal College of Business' },
    ],
    knowsAbout: [
      'Technology Adoption',
      'Cloud Architecture',
      'Cybersecurity',
      'Program Management',
      'AI Strategy',
    ],
  }
}

// Walk and Talk consulting service schema
export function walkAndTalkServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Walk and Talk Consulting',
    description:
      'Premium technology consulting with Clarke Moyer. No laptops, no slides — a focused conversation on a walk with an AI-generated summary delivered within 24 hours.',
    url: 'https://clarkemoyer.com/walk-and-talk/',
    provider: {
      '@type': 'Person',
      name: 'Clarke Moyer',
      url: 'https://clarkemoyer.com',
    },
    serviceType: 'Technology Consulting',
    areaServed: 'Worldwide',
    offers: [
      {
        '@type': 'Offer',
        name: '45-Minute Walk and Talk',
        price: '562.50',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Available Monday–Friday, 1:30–2:30 PM EST',
      },
      {
        '@type': 'Offer',
        name: '1-Hour Walk and Talk',
        price: '750.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Available Monday–Friday, 5:30–7:00 PM EST',
      },
    ],
  }
}

// Breadcrumb schema — pass array of {name, url} items
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://clarkemoyer.com${item.url}`,
    })),
  }
}

// Helper to render schema as <script> tag
export function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
