"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function HskCookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("hsk-cookie-consent")
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hsk-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("hsk-cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-white rounded-xl shadow-2xl border-2 border-[var(--sport-light-grey)] overflow-hidden">
        <div className="bg-gradient-to-r from-[var(--sport-blue)] to-[#2d5aa0] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Cookie className="w-5 h-5" />
              <h3 className="font-bold">Kolačići i Privatnost</h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-[var(--sport-grey)] text-sm leading-relaxed mb-4">
            Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj web stranici. Prihvaćanjem dopuštate
            korištenje kolačića u skladu s našom{" "}
            <Link href="/cookie-policy" className="text-[var(--sport-blue)] hover:underline font-semibold">
              Politikom kolačića
            </Link>
            .
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[var(--sport-blue)] hover:bg-[var(--sport-orange)] text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
            >
              Prihvati
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-[var(--sport-light-grey)] hover:bg-gray-300 text-[var(--sport-grey)] font-bold py-3 px-4 rounded-lg transition-colors text-sm"
            >
              Odbij
            </button>
          </div>

          <div className="mt-3">
            <Link
              href="/cookie-policy"
              className="text-xs text-[var(--sport-grey)] hover:text-[var(--sport-blue)] transition-colors block text-center"
            >
              Saznajte više o našim kolačićima →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
