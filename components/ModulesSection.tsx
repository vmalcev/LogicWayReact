"use client";

import { useEffect, useRef } from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import {Package, ArrowRightLeft, ClipboardList, BarChart3, Truck, } from "lucide-react";
import Link from "next/link";
import { useInView } from "framer-motion";

const modules = [
  {
    title: "RICEVIMENTO",
    description:
      "Ricezione merce con controllo in tempo reale dell’ordine, generazione etichette e barcode, generazione DDT, organizzazione della merce in magazzini virtuali",
    icon: Package,
    features: [
      "Controllo qualità",
      "Generazione etichette",
      "Organizzazione della merce",
    ],
    href: "/ricevimento",
  },
  {
    title: "MOVIMENTI INTERNI",
    description:
      "Organizzazione dei movimenti all’interno del magazzino: mappatura, anche con planimetria reale, creazione delle collocazioni con assegnazione di parametri personalizzabili (peso, volume, priorità, ecc.)",
    icon: ArrowRightLeft,
    features: [
      "Mappature magazzino",
      "Assegnazione ubicazioni",
      "Controllo movimenti",
    ],
    href: "/movimenti_interni",
  },
  {
    title: "INVENTARIO",
    description:
      "Inventario totale, ma anche parziale grazie ai filtri avanzati. Segnalazione o blocco delle merci in movimentazione, controllo sulle giacenze tramite sistema visivo di comprensione immediata",
    icon: ClipboardList,
    features: [
      "Inventario per zone",
      "Segnalazione discrepanze",
      "Controllo giacenze",
    ],
    href: "/inventario",
  },
  {
    title: "MONITORAGGIO",
    description:
      "Monitoraggio in tempo reale delle operazioni in corso. Statistiche di giacenza. Storico di tutte le movimentazioni, consultabile per articolo, data, operatore ecc.",
    icon: BarChart3,
    features: [
      "Statistiche real-time",
      "Storico movimentazioni",
      "Report personalizzati",
    ],
    href: "/monitoraggio",
  },
  {
    title: "SPEDIZIONI",
    description:
      "Picking ottimizzato secondo parametri impostati, generazione etichette per carico, corriere, data ecc, controllo ordini, report.",
    icon: Truck,
    features: [
      "Picking ottimizzato",
      "Generazione etichette",
      "Controllo spedizioni",
    ],
    href: "/spedizioni",
  },
];

function AnimatedCard({ module }: { module: (typeof modules)[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Link href={module.href}>
      <Card
        ref={ref}
        className={`h-full hover:shadow-lg transition-shadow cursor-pointer group transform transition duration-700 ease-in-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <module.icon className="h-8 w-8 text-[#f6de34]" />
            </div>
            <CardTitle className="text-xl group-hover:text-[#f6de34] transition-colors">
              {module.title}
            </CardTitle>
          </div>
          <CardDescription className="text-base">
            {module.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {module.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-center text-sm text-gray-600"
              >
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ModulesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Moduli</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Sistema modulare completo per la gestione del tuo magazzino
          </p>
        </div>

        {/* Prima riga: 3 moduli */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.slice(0, 3).map((mod) => (
            <AnimatedCard key={mod.title} module={mod} />
          ))}
        </div>

        {/* Seconda riga: 2 moduli centrati */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8">
          {modules.slice(3, 6).map((mod) => (
            <div key={mod.title} className="w-full sm:w-1/2 lg:w-1/3">
              <AnimatedCard module={mod} />
            </div>
          ))}
        </div>
        
      </div>
      <div className="mt-4 text-center text-[#f6de34] font-bold">
          <Link href={"/moduli"}>Vedi tutte le funzionalità</Link>
        </div>
    </section>
  );
}