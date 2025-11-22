"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export function HskHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 border-[var(--sport-blue)] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[var(--sport-blue)] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">HSK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[var(--sport-blue)] leading-tight">Hrvatska Stranica</span>
              <span className="text-sm text-[var(--sport-grey)] leading-tight">Klađenje</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/ratings"
              className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium transition-colors"
            >
              Ocjene
            </Link>
            <Link
              href="/about"
              className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium transition-colors"
            >
              O Nama
            </Link>
            <Link
              href="/responsible-gambling"
              className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium transition-colors"
            >
              Odgovorno Klađenje
            </Link>
            <Link
              href="/faq"
              className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium transition-colors"
            >
              Pitanja
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--sport-grey)] hover:text-[var(--sport-blue)]"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--sport-light-grey)]">
            <div className="flex flex-col gap-4">
              <Link
                href="/ratings"
                className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ocjene
              </Link>
              <Link
                href="/about"
                className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                O Nama
              </Link>
              <Link
                href="/responsible-gambling"
                className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Odgovorno Klađenje
              </Link>
              <Link
                href="/faq"
                className="text-[var(--sport-grey)] hover:text-[var(--sport-blue)] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pitanja
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
