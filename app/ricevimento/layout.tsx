import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ricevimento Merci - Modulo WMS",
  description:
    "Modulo Ricevimento di LogicWay: gestione completa del ricevimento merci con controllo qualità in tempo reale, generazione etichette e barcode, creazione DDT e organizzazione merce in magazzini virtuali.",
  keywords: [
    "ricevimento merci",
    "controllo qualità magazzino",
    "generazione barcode",
    "etichette magazzino",
    "DDT digitale",
    "accettazione merce",
    "WMS ricevimento",
    "software ricevimento merci",
  ],
  alternates: {
    canonical: "https://logic-way.it/ricevimento",
  },
  openGraph: {
    title: "Ricevimento Merci - LogicWay WMS",
    description:
      "Gestione completa del ricevimento merci: controllo qualità, generazione etichette barcode, creazione DDT automatica.",
    url: "https://logic-way.it/ricevimento",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "LogicWay - Modulo Ricevimento Merci" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricevimento Merci - LogicWay WMS",
    description: "Gestione completa del ricevimento merci con controllo qualità e generazione barcode.",
    images: ["/api/og"],
  },
};

export default function RicevimentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
