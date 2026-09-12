import TrackedLink from '@/components/TrackedLink'
import type { ConversionPath } from '@/lib/conversion-analytics'

interface ConversionAction {
  label: string
  href: string
  action: string
  external?: boolean
}

interface ConversionPanelProps {
  eyebrow: string
  title: string
  description: string
  path: ConversionPath
  location: string
  primary: ConversionAction
  secondary?: ConversionAction
}

export default function ConversionPanel({
  eyebrow,
  title,
  description,
  path,
  location,
  primary,
  secondary,
}: ConversionPanelProps) {
  const externalProps = (external?: boolean) =>
    external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <aside
      aria-labelledby={`${location}-conversion-title`}
      className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 id={`${location}-conversion-title`} className="text-2xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">{description}</p>
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <TrackedLink
          href={primary.href}
          conversionPath={path}
          conversionAction={primary.action}
          conversionLocation={location}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          {...externalProps(primary.external)}
        >
          {primary.label}
        </TrackedLink>
        {secondary && (
          <TrackedLink
            href={secondary.href}
            conversionPath={path}
            conversionAction={secondary.action}
            conversionLocation={location}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-800 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            {...externalProps(secondary.external)}
          >
            {secondary.label}
          </TrackedLink>
        )}
      </div>
    </aside>
  )
}
