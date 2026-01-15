"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function AccordionModuli() {
  return (
    <div style={{ padding: "10vh 4vw" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center" }}>FAQ</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Perché dovrei usare un software di gestione del magazzino (WMS)?
          </AccordionTrigger>
          <AccordionContent>
            Perché è uno strumento in grado di rendere più efficiente la gestione
            del magazzino. La possibilità di sapere in ogni momento dove si trova
            la merce, e le funzioni di controllo che riducono i rischi di errore
            umano consentono di avere minori problemi inventariali e tempi di
            movimentazioni ridotti, aumentando così la produttività e la
            soddisfazione del cliente finale.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            LogicWay è compatibile con la mia stampante?
          </AccordionTrigger>
          <AccordionContent>
            LogicWay utilizza come strumento di stampa Seagull Bartender, che
            offre un parco di driver decisamente esteso e può anche utilizzare i
            driver di Windows. La compatibilità della stampante può essere
            verificata al seguente indirizzo:
            https://www.seagullscientific.com/support/downloads/drivers/
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Devo rietichettare tutta la merce ricevuta da fornitori per poterla
            movimentare?
          </AccordionTrigger>
          <AccordionContent>
            No. LogicWay è in grado di leggere i più comuni tipi di codici a
            barre: EAN-13, EAN-8, EAN-14, GS1-128, ecc. Tali formati possono
            essere decodificati in qualsiasi modulo di LogicWay.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            LogicWay gestisce i pallet multilotto?
          </AccordionTrigger>
          <AccordionContent>
            Si. LogicWay è in grado di gestire in ogni suo modulo la
            movimentazione di pallet multilotto e anche multiarticolo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            LogicWay gestisce gli RFID?
          </AccordionTrigger>
          <AccordionContent>
            Si. È possibile integrare oltre alla lettura dei classici barcode 1D /
            2D anche i tag RFID. Oltretutto è integrabile con postazioni di
            lettura fissa come varchi e portali.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}