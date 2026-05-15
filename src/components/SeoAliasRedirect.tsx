'use client'

import { useEffect } from 'react'
import Link from 'next/link'

type SeoAliasRedirectProps = {
  destination: string
  destinationLabel: string
}

export default function SeoAliasRedirect({ destination, destinationLabel }: SeoAliasRedirectProps) {
  useEffect(() => {
    window.location.replace(destination)
  }, [destination])

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-24">
      <section className="max-w-xl text-center space-y-6">
        <p className="uppercase tracking-[0.35em] text-sm text-blue-300">Page moved</p>
        <h1 className="text-3xl md:text-4xl font-bold">This page now lives at {destinationLabel}.</h1>
        <p className="text-slate-300">
          You should be redirected automatically. If not, use the canonical link below.
        </p>
        <Link
          href={destination}
          className="inline-flex rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          Go to {destinationLabel}
        </Link>
      </section>
    </main>
  )
}
