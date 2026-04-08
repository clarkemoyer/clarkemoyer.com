'use client'

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.openCookiePreferences?.()}
      className="text-gray-500 hover:text-gray-700 text-sm underline mt-2"
    >
      Cookie Preferences
    </button>
  )
}
