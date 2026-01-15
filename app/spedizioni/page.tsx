"use client";
import Header from "@/components/Header";
import { Check, Barcode, Box, ClipboardCheck, Warehouse } from "lucide-react";
import Link from "next/link";
import { Truck, Move, ClipboardList, LineChart, Route, Tags, Search, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      className="timeline-item relative pl-16 mb-12"
    >
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#f6de34] flex items-center justify-center text-white mt-[2.8vh]  ">
        {icon}
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
      </div>
    </motion.div>
  );
}

export default function Spedizioni() {
  return (
    <div>
      <Header />
      {/* solo pc */}
      <div className="hidden md:block">
        <div className="bg-black">
            <video src="video/spedizioni.mp4" autoPlay loop muted controls={false} />
            <ScrollDownArrow targetId="contenuto-ricevimento" />
          </div>
          <div id="contenuto-ricevimento" className="pt-[10vh] text-black mt-8">
            <h2
              className="text-[35px] font-bold mb-4 text-center">
              SPEDIZIONI
            </h2>
            <p
              className="text-[27px] font-normal mb-8 text-center">
              Flussi controllati e ottimizzati
            </p>
            <p
              className="text-[16px] font-normal mb-8 ">
              LogicWay consente di gestire i flussi di uscita della merce.
              Dispone di strumenti per calcolare il percorso di picking migliore
              per ottimizzare i tempi di preparazione, consente di etichettare i
              colli preparati e di controllare in real time la correttezza dei
              prelievi. È oltretutto effettuare un ulteriore controllo in fase
              di carico del camion per accertarsi che venga consegnata la merce
              corretta.
            </p>
          </div>
        
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
        <div className="absolute inset-0 w-full h-full z-[-1] pointere-events-none">
          <video src="video/spedizioni_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto object-cover" ></video>
        </div>
        <div >
          <h2 className="w-[90%] mx-auto text-black text-2xl font-bold pt-16 leading-snug">
            SPEDIZIONI
          </h2>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
            Flussi controllati e ottimizzati
          </p>
          <p className="w-[90%] mx-auto text-black text-base pt-4 leading-snug">
            LogicWay consente di gestire i flussi di uscita della merce. Dispone
            di strumenti per calcolare il percorso di picking migliore per
            ottimizzare i tempi di preparazione, consente di etichettare i colli
            preparati e di controllare in real time la correttezza dei prelievi.
            È oltretutto effettuare un ulteriore controllo in fase di carico del
            camion per accertarsi che venga consegnata la merce corretta.
          </p>
        </div>
      </div>

      {/* solo pc */}
      <div className="hidden md:block">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Processo di Spedizioni
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* <!-- Timeline Item 1 --> */}
              <AnimatedTimelineItem
                icon={<ClipboardList />}
                text="Seleziono l’ordine di vendita o di spedizione da evadere"
              />

              {/* <!-- Timeline Item 2 --> */}
              <AnimatedTimelineItem
                icon={<Route />}
                text="Prelevo la merce seguendo un percorso di picking ottimizzato da LogicWay al fine di ridurre gli spostamenti e quindi il tempo di preparazione"
              />

              {/* <!-- Timeline Item 3 --> */}
              <AnimatedTimelineItem
                icon={<Tags />}
                text="Genero all’occorrenza le etichette da affiggere ai colli preparati"
              />

              {/* <!-- Timeline Item 4 --> */}
              <AnimatedTimelineItem
                icon={<Search />}
                text="Controllo eventuali mancanze rispetto alla richiesta"
              />

              {/* <!-- Timeline Item 5 --> */}
              <AnimatedTimelineItem
                icon={<CheckCircle />}
                text="Convalido la spedizione trasmettendo i prelievi all’ERP o generando il documento di trasferimento"
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
                <CardHeader >
                  <ClipboardList className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Seleziono l’ordine di vendita o di spedizione da evadere
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 2 --> */}
              <Card>
                <CardHeader >
                  <Route className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Prelevo la merce seguendo un percorso di picking ottimizzato
                    da LogicWay al fine di ridurre gli spostamenti e quindi il
                    tempo di preparazione
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 3 --> */}
              <Card>
                <CardHeader >
                  <Tags className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Genero all’occorrenza le etichette da affiggere ai colli
                    preparati
                  </CardTitle>
                </CardContent>
              </Card>

              {/* <!-- Timeline Item 4 --> */}
              <Card>
                <CardHeader >
                  <Search className="text-[#f6de34] h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Controllo eventuali mancanze rispetto alla richiesta
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
                    Convalido la spedizione trasmettendo i prelievi all’ERP o
                    generando il documento di trasferimento
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
