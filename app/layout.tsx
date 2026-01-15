import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LogicWay - Software Gestionale per Magazzino e Logistica",
    template: "%s | LogicWay",
  },
  description:
    "LogicWay è il software di gestione del magazzino che cresce con le tue esigenze. Soluzioni per ricevimento, inventario, movimenti interni e spedizioni.",
  keywords: ["software magazzino", "gestione logistica", "WMS", "inventario", "ricevimento merci", "spedizioni"],
  authors: [{ name: "Sistemi Tre s.r.l." }],
  creator: "Sistemi Tre s.r.l.",
  publisher: "LogicWay",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://logic-way.it",
    siteName: "LogicWay",
    title: "LogicWay - Software Gestionale per Magazzino e Logistica",
    description: "Software modulare per la gestione ottimizzata di magazzino e logistica",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "LogicWay Software Gestionale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicWay - Software Gestionale per Magazzino",
    description: "Software modulare per la gestione ottimizzata di magazzino e logistica",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://logic-way.it",
  },
  icons: {
  icon: "/Logicway_logo.svg",
},
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
