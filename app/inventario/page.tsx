"use client";

import { ClipboardCheck, Plus, FileText, CheckCircle, LineChart } from "lucide-react";
import Elenco from "@/components/Elenco";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import AnimatedTimelineItem from "@/components/AnimatedTimelineItem";
export default function Inventario() {
  return (
    <>
      <h1 className="sr-only">Inventario Magazzino - Modulo LogicWay WMS</h1>
      {/* solo pc */}

      <div className="hidden md:block">

        <div className="bg-black">
           <video src="/video/inventario.mp4" autoPlay loop muted controls={false} preload="metadata" />
            <ScrollDownArrow targetId="contenuto-inventario" />
           
          </div>
            <div id="contenuto-inventario" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          
            <h2 className="text-black text-center text-[35px] font-bold mt-8 ">
              INVENTARIO
            </h2>
            <p className="text-black text-[27px] text-center font-normal ">
              Conteggi globali o parziali e monitoraggio
            </p>
            <br />
            <br />
            <p className="text-black text-[16px] font-normal ">
            
              LogicWay per essere efficiente necessita che le giacenze di
              magazzino siano coerenti ai dati caricati a sistema. Con la
              procedura di inventario è possibile conteggiare i prodotti a
              magazzino procedendo in maniera globale o settoriale. LogicWay
              offre una dashboard di controllo per monitorare lo stato
              avanzamento lavori e dei report per calcolare il costo delle
              rettifiche.
            </p>
          
        </div>
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
        
        
        <div>
          <video src="/video/inventario_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="w-full h-auto object-cover" />

        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-black text-2xl font-bold pt-16 leading-snug">
            INVENTARIO
          </h2>
          <p className="text-black text-base pt-4 leading-snug">
            Conteggi globali o parziali e monitoraggio
          </p>
          <p className="text-black text-base pt-4 leading-snug">
            LogicWay per essere efficiente necessita che le giacenze di
            magazzino siano coerenti ai dati caricati a sistema. Con la
            procedura di inventario è possibile conteggiare i prodotti a
            magazzino procedendo in maniera globale o settoriale. LogicWay offre
            una dashboard di controllo per monitorare lo stato avanzamento
            lavori e dei report per calcolare il costo delle rettifiche.
          </p>
        </div>
      </div>

      {/* solo pc */}
      <section
        className="py-16 bg-white hidden md:block"
        style={{ zIndex: "999" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Processo di Inventario
          </h2>

          <div className="max-w-4xl mx-auto">
            <AnimatedTimelineItem
              icon={<Plus />}
              text="Creo un nuovo inventario che può essere globale o settoriale"
            />
            <AnimatedTimelineItem
              icon={<ClipboardCheck />}
              text="Procedo con il conteggio fisico della merce tramite terminale"
            />
            <AnimatedTimelineItem
              icon={<LineChart />}
              text="Monitoro lo stato avanzamento dell'inventario dalla dashboard di controllo"
            />
            <AnimatedTimelineItem
              icon={<FileText />}
              text="Confronto le giacenze conteggiate con quelle presenti a sistema"
            />
            <AnimatedTimelineItem
              icon={<CheckCircle />}
              text="Convalido l'inventario e genero il report delle rettifiche"
            />
          </div>
        </div>
      </section>

      {/* solo mobile */}
      <div className="block md:hidden">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Processo di Inventario
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <Card>
                <CardHeader className=" ">
                  <Plus className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 2 --> */}
              <Card>
                <CardHeader >
                  <ClipboardCheck className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Procedo con il conteggio fisico della merce tramite terminale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 3 --> */}
              <Card>
                <CardHeader >
                  <LineChart className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Monitoro lo stato avanzamento dell'inventario dalla dashboard di controllo
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 4 --> */}
              <Card>
                <CardHeader >
                  <FileText className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Confronto le giacenze conteggiate con quelle presenti a sistema
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 5 --> */}
              <Card>
                <CardHeader >
                  <CheckCircle className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Convalido l'inventario e genero il report delle rettifiche
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
