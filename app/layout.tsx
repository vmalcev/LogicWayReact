import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f6de34",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://logic-way.it"),
  title: {
    default: "LogicWay - Software WMS per Gestione Magazzino e Logistica | Sistemi Tre",
    template: "%s | LogicWay - Software Gestione Magazzino",
  },
  description:
    "LogicWay è il software WMS modulare per la gestione del magazzino: ricevimento merci, inventario, movimenti interni, spedizioni e monitoraggio in tempo reale. Integrabile con ERP J-Galileo e eSolver. Sviluppato da Sistemi Tre s.r.l., Alba (CN).",
  keywords: [
    "software magazzino",
    "WMS",
    "gestione magazzino",
    "warehouse management system",
    "software logistica",
    "gestione logistica",
    "inventario magazzino",
    "ricevimento merci",
    "spedizioni magazzino",
    "picking ottimizzato",
    "movimenti interni magazzino",
    "monitoraggio magazzino",
    "barcode magazzino",
    "tracciabilità merce",
    "software gestionale magazzino",
    "ERP integrazione magazzino",
    "J-Galileo",
    "eSolver",
    "Sistemi Tre",
    "Alba Cuneo",
    "logistica Italia",
    "gestione scorte",
    "ottimizzazione magazzino",
  ],
  authors: [{ name: "Sistemi Tre s.r.l.", url: "https://www.sistemitre.it" }],
  creator: "Sistemi Tre s.r.l.",
  publisher: "LogicWay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://logic-way.it",
    siteName: "LogicWay",
    title: "LogicWay - Software WMS per Gestione Magazzino e Logistica",
    description:
      "Software modulare per la gestione ottimizzata di magazzino e logistica. Ricevimento, inventario, movimenti interni, spedizioni e monitoraggio in tempo reale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicWay - Software WMS per Gestione Magazzino",
    description:
      "Software modulare per la gestione ottimizzata di magazzino e logistica. Sviluppato da Sistemi Tre s.r.l.",
  },
  alternates: {
    canonical: "https://logic-way.it",
  },
  icons: {
    icon: "/Logicway_logo.svg",
  },
  category: "software",
}

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "LogicWay",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        description:
          "Software WMS modulare per la gestione del magazzino: ricevimento, inventario, movimenti interni, spedizioni e monitoraggio in tempo reale.",
        url: "https://logic-way.it",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
        },
        featureList: [
          "Ricevimento merci con controllo qualità",
          "Generazione etichette e barcode",
          "Inventario globale e parziale",
          "Movimenti interni configurabili",
          "Picking ottimizzato",
          "Monitoraggio real-time",
          "Report e statistiche avanzate",
          "Integrazione ERP J-Galileo e eSolver",
          "Interfaccia web responsive multidevice",
        ],
        creator: {
          "@type": "Organization",
          name: "Sistemi Tre s.r.l.",
        },
      },
      {
        "@type": "Organization",
        name: "Sistemi Tre s.r.l.",
        url: "https://www.sistemitre.it",
        logo: "https://logic-way.it/Logicway_logo.svg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C.so Canale, 52",
          addressLocality: "Alba",
          addressRegion: "CN",
          postalCode: "12051",
          addressCountry: "IT",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+39-0173-444111",
          contactType: "sales",
          availableLanguage: "Italian",
        },
        sameAs: ["https://www.sistemitre.it"],
      },
      {
        "@type": "WebSite",
        name: "LogicWay",
        url: "https://logic-way.it",
        description:
          "Software WMS per la gestione ottimizzata di magazzino e logistica",
        publisher: {
          "@type": "Organization",
          name: "Sistemi Tre s.r.l.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
