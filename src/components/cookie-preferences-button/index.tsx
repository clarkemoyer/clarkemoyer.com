'use client'

export default function CookiePreferencesButton() {
  const handleClick = () => {
    const win = window as Window & { openCookiePreferences?: () => void }
    win.openCookiePreferences?.()
  }

  return (
    <button
      onClick={handleClick}
      className="text-gray-500 hover:text-gray-700 text-sm underline mt-2"
    >
      Cookie Preferences
    </button>
  )
}
