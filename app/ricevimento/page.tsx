"use client";
import { Check, Barcode, Box, ClipboardCheck, Warehouse } from "lucide-react";
import Elenco from "@/components/Elenco";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import AnimatedTimelineItem from "@/components/AnimatedTimelineItem";

export default function Ricevimento() {

  return (
    <>
      <h1 className="sr-only">Ricevimento Merci - Modulo LogicWay WMS</h1>
      {/* solo pc */}
      <div className="hidden md:block">
        <div className="bg-black">
          <video src="/video/ricevimento.mp4" autoPlay loop muted controls={false} preload="metadata" />
           <ScrollDownArrow targetId="contenuto-ricevimento" />
        </div>


        <div id="contenuto-ricevimento" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-black text-[35px] font-bold text-center">
            RICEVIMENTO
          </h2>
          <p
            className="text-black text-[27px] font-normal leading-31px text-center"
          >
            Tutto sotto controllo, da subito
          </p>
          <br />
          <br />
          <p
            className="text-black text-[16px] font-normal leading-[31px]"
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
        <div className="w-full h-auto z-[-1] pointer-events-none relative">
  <video
    src="/video/ricevimento_mobile.mp4"
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
            RICEVIMENTO
          </h2>
          <p className="text-black text-base pt-4 leading-snug">
            Tutto sotto controllo, da subito
          </p>
          <p className="text-black text-base pt-4 leading-snug">
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
                text="Evadere un ordine a fornitore o registrare un ricevimento ex-novo"
              />

              {/* <!-- Timeline Item 2 --> */}
              <AnimatedTimelineItem
                icon={<Barcode />}
                text="Stampare barcode da affiggere sulla merce senza etichetta o fuori dagli standard"
              />

              {/* <!-- Timeline Item 3 --> */}
              <AnimatedTimelineItem
                icon={<Box />}
                text="Leggere la merce ricevuta e battezzare eventuali lotti, scadenze e matricole"
              />

              {/* <!-- Timeline Item 4 --> */}
              <AnimatedTimelineItem
                icon={<ClipboardCheck />}
                text="Effettuare il controllo quadratura e convalidare il carico generando il flusso su ERP"
              />

              {/* <!-- Timeline Item 5 --> */}
              <AnimatedTimelineItem
                icon={<Warehouse />}
                text="Procedere con lo stoccaggio della merce nel posizionamento ottimale"
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
                    Evadere un ordine a fornitore o registrare un ricevimento ex-novo
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
                    Stampare barcode da affiggere sulla merce senza etichetta o fuori dagli standard
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
                    Leggere la merce ricevuta e battezzare eventuali lotti, scadenze e matricole
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
                    Effettuare il controllo quadratura e convalidare il carico generando il flusso su ERP
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
                    Procedere con lo stoccaggio della merce nel posizionamento ottimale
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

