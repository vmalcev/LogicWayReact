"use client";
import { ClipboardList, Route, Tags, Search, CheckCircle } from "lucide-react";
import Elenco from "@/components/Elenco";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import AnimatedTimelineItem from "@/components/AnimatedTimelineItem";

export default function Spedizioni() {
  return (
    <>
      <h1 className="sr-only">Spedizioni e Picking Ottimizzato - Modulo LogicWay WMS</h1>
      {/* solo pc */}
      <div className="hidden md:block">
        <div className="bg-black">
            <video src="/video/spedizioni.mp4" autoPlay loop muted controls={false} preload="metadata" />
            <ScrollDownArrow targetId="contenuto-ricevimento" />
          </div>
          <div id="contenuto-ricevimento" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
        <div className="w-full h-auto z-[-1] pointer-events-none relative">
          <video src="/video/spedizioni_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="w-full h-auto object-cover" ></video>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-[35px] font-bold mb-4 text-center">
            SPEDIZIONI
          </h2>
          <p className="text-lg sm:text-[27px] font-normal mb-8 text-center">
            Flussi controllati e ottimizzati
          </p>
          <p className="text-base sm:text-[16px] font-normal mb-8">
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
              Processo di Spedizioni
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
    </>
  );
}
