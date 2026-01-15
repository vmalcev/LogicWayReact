"use client";
import Header from "@/components/Header";
import { Check, Barcode, Box, ClipboardCheck, Warehouse } from "lucide-react";
import Link from "next/link";
import { Truck, Move, ClipboardList, LineChart } from "lucide-react";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react"; 
import VimeoInventario from "@/components/VimeoRicevimento";
import VimeoInventarioMobile from "@/components/VimeoRicevimentoMobile";
import Elenco from "@/components/Elenco";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
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
      className="timeline-item relative pl-16 mb-12 flex items-center"
    >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#f6de34] flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
      </div>
    </motion.div>
  );
}

export default function Ricevimento() {

  return (
    <div>
      <Header />
      {/* solo pc */}
      <div className="hidden md:block">
        <div className="bg-black">
          <video src="video/ricevimento.mp4" autoPlay loop muted controls={false} />
           <ScrollDownArrow targetId="contenuto-ricevimento" />
        </div>


        <div id="contenuto-ricevimento" className="relative top-20 pt-[10vh]">
          <h2 className="text-black text-[35px] font-bold w-11/12 mx-auto text-center">
            RICEVIMENTO
          </h2>
          <p
            className="text-black text-[27px] font-normal leading-31px mx-auto w-11/12 text-center"
          >
            Tutto sotto controllo, da subito
          </p>
          <br />
          <br />
          <p
            className="w-11/12 mx-auto text-black text-[16px] font-normal leading-[31px]"
          >
            Stampare barcode, evadere un ordine di acquisto esistente o
            registrare un documento di carico ex novo. LogicWay guida
            l'operatore al posizionamento della merce nel magazzino ed
            effettua controlli di quadratura. In questa fase si possono anche
            battezzare i lotti, le scadenze e le matricole.
          </p>
        </div>
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
        <div className="absolute inset-0 w-full h-full z-[-1] pointer-events-none">
          <video src="video/ricevimento_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto object-cover" />
        </div>
        <div >
          <h2 className="w-[90%] mx-auto text-black text-2xl font-bold pt-16 leading-snug">
            RICEVIMENTO
          </h2>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
            Tutto sotto controllo, da subito
          </p>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
            Stampare barcode, evadere un ordine di acquisto esistente o
            registrare un documento di carico ex novo. LogicWay guida
            l'operatore al posizionamento della merce nel magazzino ed
            effettua controlli di quadratura. In questa fase si possono anche
            battezzare i lotti, le scadenze e le matricole.
          </p>
        </div>
      </div>

      {/* solo pc */}
      <div className="py-16 bg-white hidden md:block">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Processo di Ricevimento
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <AnimatedTimelineItem
                icon={<Check />}
                text="Creo un nuovo inventario che può essere globale o settoriale"
              />

              {/* <!-- Timeline Item 2 --> */}
              <AnimatedTimelineItem
                icon={<Barcode />}
                text="Creo un nuovo inventario che può essere globale o settoriale"
              />

              {/* <!-- Timeline Item 3 --> */}
              <AnimatedTimelineItem
                icon={<Box />}
                text="Creo un nuovo inventario che può essere globale o settoriale"
              />

              {/* <!-- Timeline Item 4 --> */}
              <AnimatedTimelineItem
                icon={<ClipboardCheck />}
                text="Creo un nuovo inventario che può essere globale o settoriale"
              />

              {/* <!-- Timeline Item 5 --> */}
              <AnimatedTimelineItem
                icon={<Warehouse />}
                text="Creo un nuovo inventario che può essere globale o settoriale"
              />
            </div>
          </div>
        </section>
      </div>

      {/*solo mobile  */}
      <div className="block md:hidden">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Processo di Ricevimento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <Card>
                <CardHeader className="flex items-center justify-center">
                  <Check className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 2 --> */}
              <Card>
                <CardHeader className="flex items-center justify-center">
                  <Barcode className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 3 --> */}
              <Card>
                <CardHeader className="flex items-center justify-center">
                  <Box className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 4 --> */}
              <Card>
                <CardHeader className="flex items-center justify-center">
                  <ClipboardCheck className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Creo un nuovo inventario che può essere globale o settoriale
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 5 --> */}
              <Card>
                <CardHeader className="flex items-center justify-center">
                  <Warehouse className="text-[#f6de34] h-8 w-8" />
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

