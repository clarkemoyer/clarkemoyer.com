import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found | Clarke Moyer',
  description: 'The page you were looking for could not be found.',
}

export default function NotFound() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative min-h-[60vh] bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <div className="text-8xl font-bold text-gray-700 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-300 text-lg mb-8">
            The page you were looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/walk-and-talk/"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Book a Walk and Talk
            </Link>
            <Link
              href="/certification-guides/"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Certification Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
