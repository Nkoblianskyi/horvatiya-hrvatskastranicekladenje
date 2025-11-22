import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { HskCookieConsent } from "@/components/hsk-cookie-consent"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Hrvatskastranicekladenje.com - Najbolje Kladionice u Hrvatskoj 2025",
  description:
    "Stručne analize i neovisne recenzije vodećih kladionica u Hrvatskoj. Objektivne usporedbe, najpovoljniji bonusi i sigurne platforme za sportsko klađenje. Pronađite najbolju kladionicu danas.",
  keywords: [
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "top kladionice Hrvatska",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
    "najbolje kladionice Hrvatska",
    "sportsko klađenje savjeti",
    "klađenje aplikacije Hrvatska",
    "mobilno klađenje",
    "eSports klađenje",
    "virtualni sportovi klađenje",
    "klađenje na nogometne lige",
    "klađenje na teniske turnire",
    "klađenje na košarkaške utakmice",
    "ekskluzivni bonusi za nove korisnike",
    "promocije kladionica",
    "isplate dobitaka klađenje",
    "korisnička podrška kladionica",
    "zakonski okvir klađenja Hrvatska",
    "porezi na dobitke od klađenja",
    "kladionica",
    "sportska kladionica",
    "online kladionica",
    "klađenje uživo",
    "online klađenje",
    "kladionica uzivo",
    "online casino Hrvatska",
    "najbolji online casino",
    "casino bonusi",
    "casino igre Hrvatska",
    "casino Croatia",
    "online casino games",
    "casino bonuses"
  ],
  authors: [{ name: "Hrvatskastranicekladenje" }],
  openGraph: {
    title: "Hrvatskastranicekladenje.com - Stručne Ocjene Kladionica",
    description:
      "Neovisne i stručne analize najboljih kladionica u Hrvatskoj. Detaljne recenzije, povoljni bonusi i sigurne platforme.",

    url: "https://hrvatskastranicekladenje.com",
    siteName: "Hrvatskastranicekladenje.com",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        {children}
        <HskCookieConsent />
      </body>
    </html>
  )
}
