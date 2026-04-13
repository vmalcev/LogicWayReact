
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contatti e Richiedi Demo Gratuita",
  description:
    "Contatta LogicWay per una demo gratuita del software WMS. Sistemi Tre s.r.l., C.so Canale 52, 12051 Alba (CN). Tel: +39 0173444111. Email: info@sistemitre.it.",
  keywords: [
    "contatti LogicWay",
    "demo software magazzino",
    "Sistemi Tre contatti",
    "richiedi demo WMS",
    "software magazzino Alba",
    "consulenza logistica",
  ],
  alternates: {
    canonical: "https://logic-way.it/contatti",
  },
  openGraph: {
    title: "Contattaci - Richiedi Demo Gratuita LogicWay",
    description:
      "Richiedi una demo personalizzata di LogicWay. Sistemi Tre s.r.l., Alba (CN) - Tel: +39 0173444111.",
    url: "https://logic-way.it/contatti",
    type: "website",
    siteName: "LogicWay",
    locale: "it_IT",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "LogicWay - Contattaci" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contattaci - Richiedi Demo Gratuita LogicWay",
    description: "Richiedi una demo personalizzata di LogicWay. Sistemi Tre s.r.l., Alba (CN).",
    images: ["/api/og"],
  },
};

export default function ContactPage() {
  return (
    <>
      <MapSection />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-16 sm:px-6 lg:px-8" aria-label="Informazioni di contatto">
        <h1 className="sr-only">Contattaci - LogicWay Software Magazzino</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
