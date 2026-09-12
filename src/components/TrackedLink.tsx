'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackConversion, type ConversionPath } from '@/lib/conversion-analytics'

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  conversionPath: ConversionPath
  conversionAction: string
  conversionLocation: string
  children: ReactNode
}

export default function TrackedLink({
  href,
  conversionPath,
  conversionAction,
  conversionLocation,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        trackConversion({
          path: conversionPath,
          action: conversionAction,
          location: conversionLocation,
          destination: href,
        })
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
