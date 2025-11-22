"use client"

import { CheckCircle } from "lucide-react"

export function HskHero() {
  return (
    <section className="relative max-h-[250px] overflow-hidden bg-black/10">
      {/* Content */}
      <div className="relative container mx-auto px-4 max-w-[1400px] h-[250px] flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-red-600">Najbolje Kladionice</span> <span className="text-white">u Hrvatskoj</span>{" "}
            <span className="text-blue-600">2025</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-2xl">
            Stručne recenzije, detaljne usporedbe i aktualne ocjene svih legalnih kladionica
          </p>

          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--sport-green)]" />
              <span className="text-sm font-medium">100+ Recenzija</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--sport-green)]" />
              <span className="text-sm font-medium">Licencirane Platforme</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--sport-green)]" />
              <span className="text-sm font-medium">Ažurirano Dnevno</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--sport-green)]" />
              <span className="text-sm font-medium">Sigurno Klađenje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
