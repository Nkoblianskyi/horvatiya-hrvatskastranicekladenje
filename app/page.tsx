"use client"

import { bettingSitesHR } from "@/types/betting-types"
import { HskHeader } from "@/components/hsk-header"
import { HskHero } from "@/components/hsk-hero"
import { HskRatings } from "@/components/hsk-ratings"
import { HskAbout } from "@/components/hsk-about"
import { HskResponsible } from "@/components/hsk-responsible"
import { HskMethodology } from "@/components/hsk-methodology"
import { HskEditorPicks } from "@/components/hsk-editor-picks"
import { HskFaq } from "@/components/hsk-faq"
import { HskOffersDialog } from "@/components/hsk-offers-dialog"
import { HskFooter } from "@/components/hsk-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <HskHeader />

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{ backgroundImage: "url('/modern-sports-stadium-aerial-view.jpg')" }}
      />

      {/* Black Semi-Transparent Overlay */}
      <div className="fixed inset-0 bg-black/50 -z-10" />

      <main className="relative">
        <HskHero />
        <HskRatings sites={bettingSitesHR} />
        <HskAbout />
        <HskResponsible />
        <HskMethodology />
        <HskEditorPicks sites={bettingSitesHR} />
        <HskFaq />
      </main>
      <HskOffersDialog sites={bettingSitesHR} />

      <HskFooter />
    </div>
  )
}
