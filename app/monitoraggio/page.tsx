import { Bolt, History, CheckCircle, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import Elenco from "@/components/Elenco";
import VimeoInventario from "@/components/VimeoRicevimento";
import VimeoInventarioMobile from "@/components/VimeoRicevimentoMobile";
import ScrollDownArrow from "@/components/ScrollDownArrow";

export default function Monitoraggio() {
  return (
    <>
      {/* solo pc */}
      <div className="hidden md:block">
        <div className="bg-black">
           <video src="/video/monitoraggio.mp4" autoPlay loop muted controls={false} />
           <ScrollDownArrow targetId="contenuto-monitoraggio" />
           </div>
          
          <main id="contenuto-monitoraggio" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-[35px] font-bold text-center" >
              MONITORAGGIO
            </h2>
            <p className="mt-5 text-[27px] font-normal text-center">
              Situazione magazzino in tempo reale e in qualsiasi momento
            </p>
            <p className="mt-5 text-[16px] font-normal " >
              Sono molteplici gli strumenti a disposizione per monitorare lo
              stato del magazzino. È possibile monitorare la situazione in tempo
              reale controllando la merce in corso di movimentazione e i picking
              attivi, analizzare le giacenze e i documenti generati, oltre che
              consultare lo storico dei movimenti e l’efficienza degli
              operatori.
            </p>
          </main>
        
      </div>

      {/* solo pc */}
      <div className="hidden md:block">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
            <div
              className="feature-icon w-10 bg-blue-100 text-blue-600 mb-4 rounded-md p-2 "
              style={{ marginRight: "21vw" }}
            >
              <Bolt className="text-2xl w-6 h-6" />
            </div>

            <CardTitle className="text-xl font-bold mb-4 text-gray-800 text-[24px]">
              MONITORAGGI REAL-TIME
            </CardTitle>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[2.5rem] h-5" />
                <p>
                  Operazioni in corso: posso consultare tutte le operazioni in
                  corso d'opera nel magazzino.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[3.8rem] h-5" />
                <p>
                  Dashboard spedizioni: posso consultare lo stato di avanzamento
                  delle spedizioni anche con l'ausilio di grafici.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-10 h-5" />
                <p>
                  Situazione giacenze: posso consultare il dettaglio delle
                  giacenze di ogni articolo o pallet.
                </p>
              </li>
            </ul>
          </Card>

          <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
            <div
              className="feature-icon w-10 bg-purple-100 text-purple-600 mb-4 rounded-md p-2 "
              style={{ marginRight: "21vw" }}
            >
              <History className="text-2xl w-6 h-6" />
            </div>

            <CardTitle className="text-xl font-bold mb-4 text-gray-800 text-[24px]">
              STORICO
            </CardTitle>
            <CardDescription className="mb-4 text-gray-700">
              Ogni evento registrato è verificabile in tempo reale tramite i
              vari monitor di controllo.
            </CardDescription>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[2.6rem] h-8" />
                <p>
                  Archivio documenti: posso consultare lo storico di tutti i
                  documenti generati da LogicWay.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[4rem] h-8" />
                <p>
                  Storico movimenti: posso consultare tutti i movimenti
                  riguardanti uno specifico articolo, lotto o bancale ai fini
                  della tracciabilità.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[2.6rem] h-8" />
                <p>
                  Statistiche operatori: posso verificare le performance degli
                  operatori nel tempo.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-[3.5rem] h-8" />
                <p>
                  Situazione giacenze alla data: posso consultare la giacenza
                  dei prodotti in un certo momento storico.
                </p>
              </li>
            </ul>
          </Card>

          <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
            <div
              className="feature-icon w-10 bg-green-100 text-green-600 mb-4 rounded-md p-2 "
              style={{ marginRight: "21vw" }}
            >
              <BarChart className="text-2xl w-6 h-6" />
            </div>
            <CardTitle className="text-xl font-bold mb-4 text-gray-800 text-[24px]">
              REPORT
            </CardTitle>
            <CardDescription className="mb-4 text-gray-700 text-[14px] leading-[1.8]">
              <p>LogicWay dispone di report standard per controllare la salute del
              magazzino, come ad esempio visualizzare la merce in scadenza.</p>
            </CardDescription>
            <CardDescription className="text-gray-700 text-[14px] leading-[1.8]">
                <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 h-[17px] w-[2.5rem]" />
                <p>
                  È possibile creare semplici report personalizzati per analisi
              specifiche.
                </p>
              </li>
              
            </CardDescription>
          </Card>
        </div>
      </div>

      {/* solo mobile */}
      <div className="block md:hidden">
         <div className="w-full h-auto z-[-1] pointer-events-none">
          <video src="/video/monitoraggio_mobile.mp4" autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto object-cover" />
        </div>
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-black text-2xl font-bold pt-16 leading-snug">
            MONITORAGGIO
          </h2>
          <p className="text-black text-base pt-4 leading-snug">
            Situazione magazzino in tempo reale e in qualsiasi momento
          </p>
          <p className="text-black text-base pt-4 leading-snug">
            Sono molteplici gli strumenti a disposizione per monitorare lo stato
            del magazzino. È possibile monitorare la situazione in tempo reale
            controllando la merce in corso di movimentazione e i picking attivi,
            analizzare le giacenze e i documenti generati, oltre che consultare
            lo storico dei movimenti e l’efficienza degli
            operatori.
          </p>
        </main>
      </div>

      <div>
        {/* solo mobile */}
        <div className="block md:hidden">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
              <div
                className="feature-icon w-10 bg-blue-100 text-blue-600 mb-4 rounded-md p-2 "
                style={{ marginRight: "63vw" }}
              >
                <Bolt className="text-2xl w-6 h-6" />
              </div>

              <CardTitle className="text-xl font-bold mb-4 text-gray-800">
                MONITORAGGI REAL-TIME
              </CardTitle>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-[2rem] h-5" />
                  <span>
                    Operazioni in corso: posso consultare tutte le operazioni in
                    corso d'opera nel magazzino.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-[2.5rem] h-5" />
                  <span>
                    Dashboard spedizioni: posso consultare lo stato di
                    avanzamento delle spedizioni anche con l'ausilio di grafici.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-[2rem] h-5" />
                  <span>
                    Situazione giacenze: posso consultare il dettaglio delle
                    giacenze di ogni articolo o pallet.
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
              <div
                className="feature-icon w-10 bg-purple-100 text-purple-600 mb-4 rounded-md p-2 "
                style={{ marginRight: "63vw" }}
              >
                <History className="text-2xl w-6 h-6" />
              </div>

              <CardTitle className="text-xl font-bold mb-4 text-gray-800">
                STORICO
              </CardTitle>
              <CardDescription className="mb-4 text-gray-700">
                Ogni evento registrato è verificabile in tempo reale tramite i
                vari monitor di controllo.
              </CardDescription>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-8 h-8" />
                  <span>
                    Archivio documenti: posso consultare lo storico di tutti i
                    documenti generati da LogicWay.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-12 h-8" />
                  <span>
                    Storico movimenti: posso consultare tutti i movimenti
                    riguardanti uno specifico articolo, lotto o bancale ai fini
                    della tracciabilità.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-8 h-8" />
                  <span>
                    Statistiche operatori: posso verificare le performance degli
                    operatori nel tempo.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 w-10 h-8" />
                  <span>
                    Situazione giacenze alla data: posso consultare la giacenza
                    dei prodotti in un certo momento storico.
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="rounded-xl shadow-md overflow-hidden p-6 transition duration-300 card-hover">
              <div
                className="feature-icon w-10 bg-green-100 text-green-600 mb-4 rounded-md p-2 "
                style={{ marginRight: "63vw" }}
              >
                <BarChart className="text-2xl w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-4 text-gray-800">
                REPORT
              </CardTitle>
              <CardDescription className="mb-4 text-gray-700">
                LogicWay dispone di report standard per controllare la salute
                del magazzino, come ad esempio visualizzare la merce in
                scadenza.
              </CardDescription>
              <CardDescription className="text-gray-700">
                  <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-2 w-0.5rem h-0.5rem" />
                <span>
                   È possibile creare semplici report personalizzati per analisi
                specifiche.
                </span>
              </li>
               
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>

      <Elenco />
    </>
  );
}
