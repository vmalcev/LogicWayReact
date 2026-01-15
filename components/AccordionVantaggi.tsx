"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Zap, Shield, TrendingUp } from "lucide-react";

export default function AccordionVantaggi() {
  return (
    <div id="vantaggi" className="px-[10vw] md:px-[30vw] py-[10vh]">
      <h1 className="text-center font-bold text-2xl mb-12" style={{ fontWeight: "bold", fontSize: "24px" }}>Perché scegliere LogicWay</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Zap className="text-[#f6de34] text-[24px]" />
            EFFICIENZA
          </AccordionTrigger>
          <AccordionContent>
            Il rischio di errori è praticamente azzerato: la procedura guidata
            suggerisce all’operatore le operazioni da effettuare e ogni funzione è
            studiata per essere intuitiva e semplice da effettuare L’interfaccia
            ha tutte le informazioni che servono sempre in primo piano, in modo da
            guidare e ottimizzare la durata delle operazioni.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Shield className="text-[#f6de34] text-[24px]" />
            CONTROLLO
          </AccordionTrigger>
          <AccordionContent>
            Ogni evento registrato è verificabile in tempo reale tramite i vari
            monitor di controllo. Si può consultare lo storico delle operazioni in
            qualsiasi momento, grazie ai vari strumenti di storicizzazione delle
            informazioni. La tracciabilità della merce movimentata è quindi
            completamente garantita.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <TrendingUp className="text-[#f6de34] text-[24px]" />
            PERFORMANCE
          </AccordionTrigger>
          <AccordionContent>
            L’interfaccia di LogicWay è web based e si adatta a tutti i
            dispositivi. Grazie all’accesso diretto al gestionale si possono
            consultare in tempo reale dati di giacenza e documenti: la
            sincronizzazione è automatica e senza attese.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}