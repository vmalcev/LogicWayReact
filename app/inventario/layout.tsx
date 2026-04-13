import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventario Magazzino - Modulo WMS",
  description:
    "Modulo Inventario di LogicWay: inventario globale o parziale con filtri avanzati, dashboard di monitoraggio avanzamento, sistema a semaforo e report costi rettifiche.",
  keywords: [
    "inventario magazzino",
    "conteggio giacenze",
    "inventario parziale",
    "software inventario",
    "rettifiche inventariali",
    "WMS inventario",
    "controllo giacenze",
    "dashboard inventario",
  ],
  alternates: {
    canonical: "https://logic-way.it/inventario",
  },
  openGraph: {
    title: "Inventario Magazzino - LogicWay WMS",
    description:
      "Inventario globale o parziale con dashboard real-time, sistema a semaforo e report automatici delle rettifiche.",
    url: "https://logic-way.it/inventario",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "LogicWay - Modulo Inventario Magazzino" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventario Magazzino - LogicWay WMS",
    description: "Inventario globale o parziale con dashboard real-time e report automatici.",
    images: ["/api/og"],
  },
};

export default function InventarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
