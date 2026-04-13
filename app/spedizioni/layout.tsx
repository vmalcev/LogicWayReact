import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spedizioni e Picking Ottimizzato - Modulo WMS",
  description:
    "Modulo Spedizioni di LogicWay: picking ottimizzato con percorso calcolato, generazione etichette per carico e corriere, controllo prelievi in tempo reale e report statistici.",
  keywords: [
    "spedizioni magazzino",
    "picking ottimizzato",
    "percorso picking",
    "etichette spedizione",
    "controllo prelievi",
    "WMS spedizioni",
    "software spedizioni",
    "FIFO LIFO magazzino",
  ],
  alternates: {
    canonical: "https://logic-way.it/spedizioni",
  },
  openGraph: {
    title: "Spedizioni e Picking Ottimizzato - LogicWay WMS",
    description:
      "Picking ottimizzato con percorso calcolato, controllo real-time dei prelievi e generazione automatica etichette.",
    url: "https://logic-way.it/spedizioni",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "LogicWay - Modulo Spedizioni e Picking" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spedizioni e Picking Ottimizzato - LogicWay WMS",
    description: "Picking ottimizzato con percorso calcolato e controllo real-time dei prelievi.",
    images: ["/api/og"],
  },
};

export default function SpedizioniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
