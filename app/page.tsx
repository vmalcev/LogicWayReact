import type { Metadata } from "next";
import Hero from "@/components/Hero";
import dynamic from 'next/dynamic'
 
const ModulesSection = dynamic(() => import('@/components/ModulesSection'))
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactCTA from "@/components/ContactCTA";



import AccordionVantaggi from "@/components/AccordionVantaggi";
import Caratteristiche from "@/components/Caratteristiche";

export const metadata: Metadata = {
  title: "LogicWay - Software WMS per Gestione Magazzino e Logistica | Sistemi Tre",
  description:
    "LogicWay è il software WMS modulare che cresce con le tue esigenze. Ricevimento, inventario, movimenti interni, spedizioni e monitoraggio real-time. Integrazione ERP J-Galileo e eSolver. Richiedi una demo gratuita.",
  keywords: [
    "software magazzino",
    "WMS Italia",
    "gestione logistica",
    "warehouse management system",
    "software gestionale magazzino",
    "LogicWay",
    "Sistemi Tre",
    "demo software magazzino",
  ],
  alternates: {
    canonical: "https://logic-way.it",
  },
  openGraph: {
    title: "LogicWay - Software WMS Modulare per Magazzino e Logistica",
    description:
      "Vuoi una logistica efficiente, controllata, tracciabile? LogicWay è il software WMS che cresce con le tue esigenze.",
    url: "https://logic-way.it",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "LogicWay - Software WMS per Gestione Magazzino" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicWay - Software WMS Modulare per Magazzino e Logistica",
    description: "Software WMS modulare che cresce con le tue esigenze. Richiedi una demo gratuita.",
    images: ["/og-image.webp"],
  },
};

export default function Home() {
  return (
    <>
      
      {/* <CursorLine /> */}
      <Hero />
      <ModulesSection />
      <AccordionVantaggi />
      <Caratteristiche />
      <IntegrationsSection />
      <ContactCTA />
      
    </>
  );
}
