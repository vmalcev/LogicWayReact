import type { Metadata } from "next";
import Hero from "@/components/Hero";
import dynamic from 'next/dynamic'
 
const ModulesSection = dynamic(() => import('@/components/ModulesSection'))
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import AccordionVantaggi from "@/components/AccordionVantaggi";
import Caratteristiche from "@/components/Caratteristiche";

export const metadata: Metadata = {
  title: "LogicWay - Software Gestionale per Magazzino e Logistica",
  description:
    "Vuoi una logistica efficiente, controllata, tracciabile? LogicWay è il software di gestione del magazzino che cresce con le tue esigenze.",
};

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* <CursorLine /> */}
      <Hero />
      <ModulesSection />
      <AccordionVantaggi />
      <Caratteristiche />
      <IntegrationsSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
