"use client";

import Header from "@/components/Header";
import { Check, Barcode, Box, ClipboardCheck, Warehouse } from "lucide-react";
import Link from "next/link";
import { Truck, Move, ClipboardList, LineChart, Plus, FileText, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VimeoInventario from "@/components/VimeoRicevimento";
import VimeoInventarioMobile from "@/components/VimeoRicevimentoMobile";
import Elenco from "@/components/Elenco";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";

import Player from '@vimeo/player';
function AnimatedTimelineItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="timeline-item relative pl-16 mb-12"
    >
      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#f6de34] flex items-center justify-center text-white mt-[2.8vh]">
        {icon}
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
      </div>
    </motion.div>
  );
}

export default function Inventario() {
  return (
    <div>
      <Header />

      {/* solo pc */}

      <div className="hidden md:block">

        <div className="bg-black">
           <video src="video/inventario.mp4" autoPlay loop muted controls={false} />
            <ScrollDownArrow targetId="contenuto-inventario" />
           
          </div>
            <div id="contenuto-inventario" className="pt-[10vh]">
          
            <h2 className="w-[78%] mx-auto text-black text-center text-[35px] font-bold mt-8 ">
              INVENTARIO
            </h2>
            <p className="w-[78%] mx-auto text-black text-[27px] text-center font-normal ">
              Conteggi globali o parziali e monitoraggio
            </p>
            <br />
            <br />
            <p className="w-[78%] mx-auto text-black text-[16px] font-normal ">
            
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
          <video src="video/inventario_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto object-cover" />

        </div>

        <div className="">
          <h2 className="w-[90%] mx-auto text-black text-2xl font-bold pt-16 leading-snug">
            INVENTARIO
          </h2>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
            Conteggi globali o parziali e monitoraggio
          </p>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
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
            Processo di Ricevimento
          </h2>

          <div className="max-w-4xl mx-auto">
            <AnimatedTimelineItem
              icon={<Plus />}
              text="Evadere un ordine a fornitore o fare un ricevimento ex-novo"
            />
            <AnimatedTimelineItem
              icon={<ClipboardCheck />}
              text="Stampa barcode da affiggere sulla merce senza etichetta o fuori dagli standard di mercato"
            />
            <AnimatedTimelineItem
              icon={<LineChart />}
              text="Leggere tutta la merce ricevuta e battezzo eventuali lotti, scadenze e matricole"
            />
            <AnimatedTimelineItem
              icon={<FileText />}
              text="Effettuare il controllo quadratura e convalidare il carico, generando il flusso di movimentazione su ERP"
            />
            <AnimatedTimelineItem
              icon={<CheckCircle />}
              text="Procedere con lo stoccaggio della merce nel posizionamento ottimale"
            />
          </div>
        </div>
      </section>

      {/* solo mobile */}
      <div className="block md:hidden">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Processo di Ricevimento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <Card>
                <CardHeader className=" ">
                  <Plus className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Evadere un ordine a fornitore o fare un ricevimento ex-novo
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
                    Stampa barcode da affiggere sulla merce senza etichetta o
                    fuori dagli standard di mercato
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
                    Leggere tutta la merce ricevuta e battezzo eventuali lotti,
                    scadenze e matricole
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
                    Procedere con lo stoccaggio della merce nel posizionamento
                    ottimale
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
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Elenco />

      <Footer />
    </div>
  );
}
