import Link from 'next/link'

export default function GuideConsultCta() {
  return (
    <div className="mb-8 rounded-lg bg-gray-100 p-6 text-center">
      <p className="text-lg font-semibold text-gray-900 mb-2">Want help planning your study path?</p>
      <p className="text-gray-700 mb-4">
        Book a Walk and Talk with Clarke to map out your next certification or a training plan for your team.
      </p>
      <Link
        href="/walk-and-talk/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Book a Walk and Talk
      </Link>
    </div>
  )
}
