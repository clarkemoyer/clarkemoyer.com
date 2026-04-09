'use client'

interface CookiePreferencesButtonProps {
  className?: string
}

export default function CookiePreferencesButton({ className }: CookiePreferencesButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.openCookiePreferences?.()}
      className={className ?? 'text-gray-500 hover:text-gray-700 text-sm underline'}
    >
      Cookie Preferences
    </button>
  )
}
