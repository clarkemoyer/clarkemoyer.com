'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })
  const [savedPreferencesBackup, setSavedPreferencesBackup] = useState<CookiePreferences>(preferences)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const applyConsent = useCallback((prefs: CookiePreferences) => {
    const cookieValue = JSON.stringify(prefs)
    const secureFlag = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `cookie-consent=${encodeURIComponent(cookieValue)}; path=/; max-age=31536000; SameSite=Lax${secureFlag}`
    // Future: load analytics here if prefs.analytics === true
  }, [])

  const loadPreferencesFromLocalStorage = useCallback((showBannerIfMissing = true) => {
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        if (showBannerIfMissing) setShowBanner(true)
        return
      }
      let saved: CookiePreferences
      try { saved = JSON.parse(consent) } catch { if (showBannerIfMissing) setShowBanner(true); return }
      if (typeof saved === 'object' && saved !== null && typeof saved.necessary === 'boolean' && typeof saved.analytics === 'boolean' && typeof saved.marketing === 'boolean') {
        setPreferences(saved)
        setSavedPreferencesBackup(saved)
        applyConsent(saved)
      } else {
        if (showBannerIfMissing) setShowBanner(true)
      }
    } catch {
      if (showBannerIfMissing) setShowBanner(true)
    }
  }, [applyConsent])

  const handleCancelPreferences = useCallback(() => {
    setPreferences(savedPreferencesBackup)
    setShowPreferences(false)
  }, [savedPreferencesBackup])

  useEffect(() => {
    window.openCookiePreferences = () => {
      setShowBanner(true)
      setShowPreferences(true)
      loadPreferencesFromLocalStorage(false)
    }
    loadPreferencesFromLocalStorage(true)
    return () => { delete window.openCookiePreferences }
  }, [loadPreferencesFromLocalStorage])

  useEffect(() => {
    if (showPreferences && modalRef.current) {
      previousFocusRef.current = document.activeElement as HTMLElement
      const focusable = modalRef.current.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])')
      if (focusable.length > 0) focusable[0].focus()
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') { handleCancelPreferences(); return }
        if (e.key === 'Tab' && modalRef.current) {
          const focusableEls = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])'))
          const first = focusableEls[0]
          const last = focusableEls[focusableEls.length - 1]
          if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last?.focus() }
          } else {
            if (document.activeElement === last) { e.preventDefault(); first?.focus() }
          }
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        previousFocusRef.current?.focus()
      }
    }
  }, [showPreferences, handleCancelPreferences])

  const saveAndClose = (prefs: CookiePreferences) => {
    try { localStorage.setItem('cookie-consent', JSON.stringify(prefs)) } catch { /* ignore */ }
    applyConsent(prefs)
    setSavedPreferencesBackup(prefs)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => saveAndClose({ necessary: true, analytics: true, marketing: true })
  const handleDeclineAll = () => saveAndClose({ necessary: true, analytics: false, marketing: false })
  const handleSavePreferences = () => saveAndClose(preferences)

  if (!showBanner) return null

  if (showPreferences) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-prefs-title" onClick={(e) => { if (e.target === e.currentTarget) handleCancelPreferences() }}>
        <div ref={modalRef} className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <h2 id="cookie-prefs-title" className="text-2xl font-bold text-gray-900 mb-4">Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">Choose which cookies you allow. Necessary cookies cannot be disabled.</p>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Necessary Cookies</h3>
                <span className="text-sm text-gray-500">Always Active</span>
              </div>
              <p className="text-sm text-gray-600">Essential for the site to function. Includes your cookie preference storage.</p>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} className="sr-only peer" aria-label="Enable analytics cookies" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">Help understand how visitors use the site (e.g. Google Analytics, Microsoft Clarity).</p>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} className="sr-only peer" aria-label="Enable marketing cookies" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">Used for retargeting and advertising (e.g. Meta Pixel).</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button onClick={handleSavePreferences} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Save Preferences</button>
              <button onClick={handleCancelPreferences} className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl" role="region" aria-label="Cookie consent notice">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-gray-600 mb-3">We use cookies to improve your experience and analyze traffic. You can accept all, decline non-essential cookies, or customize your preferences.</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button onClick={handleDeclineAll} className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm whitespace-nowrap">Decline All</button>
            <button onClick={() => { setSavedPreferencesBackup(preferences); setShowPreferences(true) }} className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm whitespace-nowrap">Customize</button>
            <button onClick={handleAcceptAll} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
