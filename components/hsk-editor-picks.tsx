"use client"

import Image from "next/image"
import type { BettingSite } from "@/types/betting-types"
import Link from "next/link"

interface HskEditorPicksProps {
  sites: BettingSite[]
}

export function HskEditorPicks({ sites }: HskEditorPicksProps) {
  const topPicks = sites.slice(0, 3)

  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6">Izdvajamo iz Ponude</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tri platforme koje su se posebno istaknule u našoj analizi i koje preporučujemo ovog mjeseca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topPicks.map((site, index) => {
            const isFirst = index === 0
            const borderColor = isFirst ? "border-yellow-400" : "border-blue-600"
            const badgeColor = isFirst ? "bg-yellow-400" : "bg-blue-600"
            const buttonColor = isFirst ? "bg-yellow-400 hover:bg-yellow-500" : "bg-blue-600 hover:bg-blue-700"

            return (
              <div
                key={site.id}
                className={`bg-white rounded-2xl border-2 ${borderColor} shadow-lg hover:shadow-xl transition-all overflow-hidden`}
              >
                {/* Badge */}
                <div className="flex justify-center -mb-4 relative z-10">
                  <div className={`${badgeColor} text-white text-sm font-bold px-4 py-1 rounded-full`}>
                    TOP {index + 1}
                  </div>
                </div>

                {/* Logo */}
                <div className="p-6 pt-8 bg-slate-50 flex items-center justify-center">
                  <div className="relative w-full h-24">
                    <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">BONUS DOBRODOŠLICE</p>
                    <h4 className="text-2xl font-bold text-slate-800 mb-1">{site.bonus}</h4>
                    {site.dopBonus && <p className="text-sm font-semibold text-slate-600">{site.dopBonus}</p>}
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-3xl font-bold text-slate-800">{site.rating.toFixed(1)}</span>
                    <span className="text-slate-500">/ 10</span>
                  </div>

                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold py-4 px-6 rounded-lg transition-all uppercase text-sm text-white ${buttonColor}`}
                  >
                    Pogledaj Ponudu
                  </Link>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-gray-200 rounded-b-2xl">
                  <p className="text-xs text-slate-500 text-center">{site.terms}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
