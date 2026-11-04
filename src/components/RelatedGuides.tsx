import Link from 'next/link'
import { getGuide, guidePath } from '@/lib/guides'
import { guideArticleSchema, SchemaScript } from '@/lib/schema'

/** Article structured data for a passing guide. */
export function GuideArticleSchema({ slug }: { slug: string }) {
  return <SchemaScript schema={guideArticleSchema(getGuide(slug))} />
}

/** Cards linking a passing guide to two or three related guides, plus the hub. */
export default function RelatedGuides({ slug }: { slug: string }) {
  const related = getGuide(slug).related.map(getGuide)
  return (
    <nav aria-labelledby="related-guides-heading" className="mb-8 text-left">
      <h2 id="related-guides-heading" className="text-2xl font-bold text-gray-900 mb-4">
        Related certification guides
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {related.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={guidePath(guide.slug)}
              className="block h-full rounded-lg border border-gray-200 p-4 hover:border-blue-400 hover:shadow-md transition"
            >
              <span className="block font-semibold text-blue-700">
                {guide.shortName}
                {guide.status === 'retired' && (
                  <span className="ml-2 text-xs font-medium text-gray-600">(retired)</span>
                )}
              </span>
              <span className="mt-1 block text-sm text-gray-700">{guide.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href="/certification/" className="text-blue-700 hover:underline font-medium">
          Browse all certification guides
        </Link>
      </p>
    </nav>
  )
}
