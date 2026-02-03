"use client";
import { Check, Barcode, Box, ClipboardCheck, Warehouse } from "lucide-react";
import Link from "next/link";
import { Truck, Move, ClipboardList, LineChart, Database, UserCog, Settings } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VimeoInventario from "@/components/VimeoRicevimento";
import VimeoInventarioMobile from "@/components/VimeoRicevimentoMobile";
import Elenco from "@/components/Elenco";
import {Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";
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
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#f6de34] flex items-center justify-center text-white mt-[2.8vh]">
        {icon}
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
      </div>
    </motion.div>
  );
}

export default function Movimenti_interni() {
  return (
    <>
      {/* desktop 545039657*/}
      <div className="hidden md:block">
        <div className="bg-black ">
     <video
  src="/video/movimenti_interni.mp4"
  autoPlay
  loop
  muted
  playsInline
  webkit-playsinline="true"
  controls={false}
/>
           <ScrollDownArrow targetId="contenuto-movimento-interno" />

          </div>
        <main id="contenuto-movimento-interno" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          
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
          
        </main>
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
    className="w-full h-auto object-cover"
  />
</div>
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
        </main>
      </div>

      {/* solo pc */}
      <div className="hidden md:block">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Movimento Interni
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
              Processo di Ricevimento
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
