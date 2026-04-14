"use client";
import { Database, UserCog, Settings } from "lucide-react";
import Elenco from "@/components/Elenco";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import AnimatedTimelineItem from "@/components/AnimatedTimelineItem";
export default function Movimenti_interni() {
  return (
    <>
      <h1 className="sr-only">Movimenti Interni Magazzino - Modulo LogicWay WMS</h1>
      {/* desktop 545039657*/}
      <div className="hidden md:block">
        <div className="bg-black ">
     <video
  src="/video/movimenti_interni.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  controls={false}
/>
           <ScrollDownArrow targetId="contenuto-movimento-interno" />

          </div>
        <div id="contenuto-movimento-interno" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          
          <h2 className="text-black text-[35px] font-bold relative text-center mt-[4vh]">
              MOVIMENTI INTERNI{" "}
            </h2>
            <p className="text-black text-[27px] font-normal text-center">
              Organizzazione e ottimizzazione
            </p>
            
            <br />
            <p className="text-black text-[16px] font-normal">
              All’interno del capannone la merce può essere spostata tra diversi
              magazzini o diverse collocazioni per questioni organizzative.
              LogicWay dispone di un modulo altamente configurabile per poter
              creare flussi di spostamento in autonomia.
            </p>
          
        </div>
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
        <div className="w-full h-auto z-[-1] pointer-events-none">
  <video
    src="/video/movimenti_interni_mobile.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="w-full h-auto object-cover"
  />
</div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-black text-2xl font-bold pt-16 leading-snug">
            MOVIMENTI INTERNI
          </h2>
          <p className="text-black text-base pt-4 leading-snug">
            Organizzazione e ottimizzazione
          </p>
          <p className="text-black text-base pt-4 leading-snug">
            All’interno del capannone la merce può essere spostata tra diversi
            magazzini o diverse collocazioni per questioni organizzative.
            LogicWay dispone di un modulo altamente configurabile per poter
            creare flussi di spostamento in autonomia.
          </p>
        </div>
      </div>

      {/* solo pc */}
      <div className="hidden md:block">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Movimenti interni
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <AnimatedTimelineItem
                icon={<Settings />}
                text="Configurare il flusso di movimentazione interna specificando varie opzioni tra cui il tipo di movimentazione (entra, uscita o trasferimento), sorgente e destinazione"
              />

              {/* <!-- Timeline Item 2 --> */}
              <AnimatedTimelineItem
                icon={<UserCog />}
                text="L’operatore gestisce il flusso in maniera guidata grazie al modulo attivo sul terminale basato sui parametri stabiliti in precedenza"
              />

              {/* <!-- Timeline Item 3 --> */}
              <AnimatedTimelineItem
                icon={<Database />}
                text="All’atto della convalida il movimento viene registrato su ERP"
              />
            </div>
          </div>
        </section>
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Movimenti Interni
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <Card>
                <CardHeader >
                  <Settings className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Configurare il flusso di movimentazione interna specificando
                    varie opzioni tra cui il tipo di movimentazione (entra,
                    uscita o trasferimento), sorgente e destinazione
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 2 --> */}
              <Card>
                <CardHeader >
                  <UserCog className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    L’operatore gestisce il flusso in maniera guidata grazie al
                    modulo attivo sul terminale basato sui parametri stabiliti
                    in precedenza
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 3 --> */}
              <Card>
                <CardHeader >
                  <Database className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    All’atto della convalida il movimento viene registrato su
                    ERP
                  </CardTitle>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Elenco />
    </>
  );
}
