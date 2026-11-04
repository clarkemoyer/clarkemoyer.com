import Link from 'next/link'

interface ConsultCtaProps {
  /** Short lead-in shown in bold. */
  heading: string
  /** One or two sentences tying the page topic to a Walk and Talk. */
  body: string
  /** Show a secondary "Contact Clarke" link to /contact/. */
  showContact?: boolean
  /** Extra classes for the outer wrapper (spacing, width). */
  className?: string
  testId?: string
}

/**
 * Reusable call to action that routes visitors to Walk and Talk consulting.
 * Keep the copy specific to the page it sits on so it reads as a next step,
 * not an ad.
 */
export default function ConsultCta({
  heading,
  body,
  showContact = false,
  className = '',
  testId = 'consult-cta',
}: ConsultCtaProps) {
  return (
    <div data-testid={testId} className={`rounded-lg bg-gray-100 p-6 text-center ${className}`}>
      <p className="mb-2 text-lg font-semibold text-gray-900">{heading}</p>
      <p className="mb-4 text-gray-700">{body}</p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/walk-and-talk/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-blue-700"
        >
          Book a Walk and Talk
        </Link>
        {showContact && (
          <Link
            href="/contact/"
            className="inline-block rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-700 no-underline transition-colors hover:bg-blue-50"
          >
            Contact Clarke
          </Link>
        )}
      </div>
    </div>
  )
}
