'use client'

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.openCookiePreferences?.()}
      className="text-white/70 hover:text-white text-sm underline"
    >
      Cookie Preferences
    </button>
  )
}
