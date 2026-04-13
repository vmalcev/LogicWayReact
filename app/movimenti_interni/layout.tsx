import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movimenti Interni Magazzino - Modulo WMS",
  description:
    "Modulo Movimenti Interni di LogicWay: organizzazione e ottimizzazione dello spostamento merce tra magazzini e collocazioni. Mappatura con planimetria reale e parametri personalizzabili.",
  keywords: [
    "movimenti interni magazzino",
    "spostamento merce",
    "mappatura magazzino",
    "planimetria magazzino",
    "collocazioni magazzino",
    "WMS movimenti interni",
    "trasferimento merce",
    "ubicazioni magazzino",
  ],
  alternates: {
    canonical: "https://logic-way.it/movimenti_interni",
  },
  openGraph: {
    title: "Movimenti Interni Magazzino - LogicWay WMS",
    description:
      "Gestione flussi di spostamento merce tra magazzini e collocazioni con mappatura e parametri personalizzabili.",
    url: "https://logic-way.it/movimenti_interni",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "LogicWay - Modulo Movimenti Interni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movimenti Interni Magazzino - LogicWay WMS",
    description: "Gestione flussi di spostamento merce tra magazzini e collocazioni.",
    images: ["/og-image.webp"],
  },
};

export default function MovimentiInterniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
