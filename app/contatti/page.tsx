
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contatti - LogicWay",
  description:
    "Contatta LogicWay per informazioni sui nostri software di gestione magazzino. Sistemi Tre s.r.l. - Alba (CN)",
};

export default function ContactPage() {
  return (
    <>
      <MapSection />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </>
  );
}
