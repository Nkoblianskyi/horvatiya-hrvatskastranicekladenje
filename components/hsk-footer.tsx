"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Shield } from "lucide-react"

export function HskFooter() {
  return (
    <footer className="bg-[var(--sport-blue)] text-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[var(--sport-blue)] font-bold text-xl">HSK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Hrvatska Stranica</span>
                <span className="text-sm text-white/80 leading-tight">Klađenje</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Vaš pouzdani vodič kroz svijet online klađenja u Hrvatskoj. Objektivne recenzije i stručni savjeti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" className="hover:text-white transition-colors">
                  Odgovorno Klađenje
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pravne Informacije</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-5 h-5" />
                <p className="hover:text-white transition-colors">info@hrvatskastranicekladenje.com</p>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Licencirano i regulirano</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Partners */}
        <div className="border-t border-white/20 py-6">
          <p className="text-center text-white/60 text-sm mb-4">Partneri za odgovorno klađenje:</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>
           

            <Link
              href="https://www.pbsvi.hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[90px] h-[36px] md:w-[110px] md:h-[44px] p-2 rounded bg-gray-50 hover:bg-gray-100">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 Hrvatskastranicekladenje.com - Sva prava pridržana</p>
            <p className="text-center">18+ | Kockanje može uzrokovati ovisnost | Igrajte odgovorno</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
