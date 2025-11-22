"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BettingSite } from "@/types/betting-types"

interface HskOffersDialogProps {
  sites: BettingSite[]
}

export function HskOffersDialog({ sites }: HskOffersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem("hsk-offers-dialog-seen")
    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("hsk-offers-dialog-seen", "true")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  const topSite = sites[0]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-[var(--sport-orange)] to-[var(--sport-red)] p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Zatvori"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 text-white mb-2">
            <div>
              <h2 className="text-2xl font-bold">Ekskluzivna Ponuda!</h2>
              <p className="text-white/90 text-sm">Ograničeno vrijeme</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Logo */}
          <div className="bg-[var(--sport-light-grey)] rounded-xl p-6 mb-6 flex items-center justify-center">
            <div className="relative w-48 h-24">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
            </div>
          </div>

          {/* Offer Details */}
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-[var(--sport-red)] uppercase tracking-wider mb-2">
              BONUS DOBRODOŠLICE
            </p>
            <h3 className="text-4xl font-bold text-foreground mb-2">{topSite.bonus}</h3>
            {topSite.dopBonus && <p className="text-lg font-semibold text-[var(--sport-grey)]">{topSite.dopBonus}</p>}
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4 mb-6 bg-slate-50 rounded-lg py-4 px-6">
            <span className="text-4xl font-bold text-slate-900">{topSite.rating.toFixed(1)}</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(topSite.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-600">#{1} na našoj listi</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[var(--sport-orange)] hover:bg-[var(--sport-red)] text-white font-bold py-4 px-6 rounded-xl text-center transition-colors uppercase tracking-wide mb-4"
          >
            Preuzmi Bonus Sada
          </Link>

          {/* Terms */}
          <p className="text-xs text-[var(--sport-grey)] text-center leading-relaxed">{topSite.terms}</p>
        </div>
      </div>
    </div>
  )
}
