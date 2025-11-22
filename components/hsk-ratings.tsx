"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types/betting-types"
import Link from "next/link"

interface HskRatingsProps {
  sites: BettingSite[]
}

export function HskRatings({ sites }: HskRatingsProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = (rating / 2) % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-gray-300" />
            <div className="absolute overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />)
      }
    }

    return stars
  }

  const getBadgeColor = (index: number) => {
    if (index === 0) return "bg-yellow-400 text-slate-900 shadow-lg font-extrabold"
    return "bg-blue-600 text-white shadow-lg"
  }

  const getCardAccent = (index: number) => {
    if (index === 0) return "border-t-4 border-yellow-400"
    return "border-t-4 border-blue-600"
  }

  const getButtonColor = (index: number) => {
    if (index === 0) return "bg-yellow-400 hover:bg-yellow-500 text-slate-900"
    return "bg-blue-600 hover:bg-blue-700 text-white"
  }

  return (
    <section id="ratings" className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-[1100px]">
        

        <div className="space-y-5">
          {sites.map((site, index) => (
            <div
              key={site.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${getCardAccent(index)} overflow-visible border border-slate-200 relative`}
            >
              {index < 3 && site.badges.length > 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeColor(index)}`}
                  >
                    <span>{site.badges[0]}</span>
                  </div>
                </div>
              )}

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-[180px_1fr_160px_200px] items-center gap-8 px-6 pt-4 relative">
                <div className="flex items-center justify-center bg-slate-50 rounded-xl p-5 h-28 border border-slate-100">
                  <div className="relative w-full h-full">
                    <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                    Bonus Dobrodošlice
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{site.bonus}</h3>
                  {site.dopBonus && <p className="text-base font-medium text-slate-600">{site.dopBonus}</p>}
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{site.rating.toFixed(1)}</div>
                  <div className="flex items-center justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                  <p className="text-xs text-slate-500">({formatNumber(site.reviews)} recenzija)</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getButtonColor(index)} font-bold py-3.5 px-6 rounded-xl text-center transition-all hover:scale-105 uppercase text-sm shadow-md hover:shadow-lg`}
                  >
                    Registriraj se
                  </Link>
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${index === 0 ? "text-yellow-600 hover:text-yellow-700" : "text-blue-600 hover:text-blue-700"} font-semibold text-sm text-center transition-colors`}
                  >
                    Posjeti stranicu →
                  </Link>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden grid grid-cols-[120px_1fr] gap-4 p-5 relative">
                {/* Logo + Rating */}
                <div className="flex flex-col items-center justify-between">
                  <div className="bg-slate-50 rounded-xl p-3 w-full mb-3 border border-slate-100">
                    <div className="relative w-full h-14">
                      <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{site.rating.toFixed(1)}</div>
                    <div className="flex gap-0.5 mt-1">{renderStars(site.rating)}</div>
                  </div>
                </div>

                {/* Bonus + CTA */}
                <div className="flex flex-col justify-between">
                  <div className="mb-3">
                    <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">Bonus</p>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{site.bonus}</h3>
                    {site.dopBonus && <p className="text-xs font-medium text-slate-600">{site.dopBonus}</p>}
                  </div>
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getButtonColor(index)} font-bold py-2.5 px-4 rounded-xl text-center transition-all uppercase text-xs shadow-md`}
                  >
                    Registriraj se
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 px-2 py-1 border-t border-slate-100 rounded-b-2xl">
                <p className="text-xs text-slate-500 text-center leading-relaxed">{site.terms}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
