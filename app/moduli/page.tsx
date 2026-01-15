import React from "react";
import Header from "@/components/Header";
import {
  Package,
  Truck,
  PackageOpen,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from 'next/dynamic'

const AccordionModuli = dynamic(() => import('@/components/AccordionModuli'))
import Footer from "@/components/Footer";
import Link from "next/link";
import "../../styles/animations.css";

export default function ModuliPage() {
  return (
    <div className="bg-white">
      <Header />

      {/* DESKTOP SECTION */}
      <div className="hidden md:block">
        <div
          className="relative animate-fade-in"
          style={{
            backgroundImage: "url('/images/header-moduli.webp')",
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="w-[78%] mx-auto text-white text-4xl font-bold relative top-[70px] animate-slide-in-down">
              Software modulare <br /> che cresce con le tue esigenze
            </h2>
            <p className="w-[78%] mx-auto text-white text-2xl relative top-[90px] animate-fade-in delay-300">
              Per una logistica ottimizzata <br /> con tempi e costi ridotti al
              minimo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 px-6 animate-fade-in">
          {[
            {
              title: "Ricevimento",
              icon: <Package className="w-8 h-8" />,
              desc: "Il Modulo Ricevimento gestisce la fase di accettazione della merce in arrivo e l’emissione del DDT. LogicWay confronta la merce in entrata con le voci dell’ordine presente nel gestionlale, segnalando eventuali discordanze. LogicWay legge le principali etichette internazionali, e in caso di necessità può generare etichette e barcode. In qualsiasi momento puoi consultare lo storico delle operazioni effettuate, filtrandole per operatore, tipologia, periodo, ed elaborare i dati per statistiche e miglioramenti operativi.",
              href: "/ricevimento",
            },
            {
              title: "Movimenti interni",
              icon: <Truck className="w-8 h-8" />,
              desc: "Con questo modulo puoi configurare le operazioni collegate allo spostamento di merce tra collocazioni o tra magazzini, sia fisici che virtuali: assegnare parametri alle collocazioni (ad esempio volume ammissibile, portata, numero di pallet), ordinarle, gestire il flusso. I parametri assegnati permetteranno di indirizzare la merce alle collocazioni più appropriate senza perdite di tempo. Con LogicWay puoi creare automaticamente una mappa del magazzino secondo la schema corsie-scaffali-piani, oppure puoi caricare la planimetria effettiva del tuo magazzino, per avere un colpo d’occhio reale sulla situazione.",
              href: "/movimenti_interni",
            },
            {
              title: "Inventario",
              icon: <PackageOpen className="w-8 h-8" />,
              desc: "Il Modulo consente di gestire l’inventario del magazzino: globale, o soltanto una parte, o filtrato per classe merceologica, serie prodotti, data… è sufficiente impostare i filtri necessari e LogicWay con un click procede a inventariare la merce. Durante l’elaborazione dell’inventario le movimentazioni possono essere bloccate, sia in entrata che in uscita. Un sistema visivo “a semaforo” indica lo stato di ogni articolo, se ancora da inventariare, se non corrispondente alla giacenza o se il dato della giacenza e quello dell’inventario coincidono. Tutti i dati possono essere estratti e rielaborati in statistiche, calcolo dei costi, delle perdite ecc.",
              href: "/inventario",
            },
            {
              title: "Monitoraggio",
              icon: <BarChart3 className="w-8 h-8" />,
              desc: "Grazie a questo modulo tutto ciò che è registrato in LogicWay può essere filtrato in base ai parametri desiderati, estratto ed elaborato in grafici o tabelle, per una semplice consultazione, un controllo o per trarne dati statistici. Dal semplice storico delle movimentazioni, al filtro per operatore, per ordine o addirittura per bancale, fino alle operazioni effettuate in un lasso di tempo: tutto è monitoratile, in modo da fornire dati utili per correttivi e ottimizzazioni.",
              href: "/monitoraggio",
            },
            {
              title: "Spedizioni",
              icon: <CheckCircle className="w-8 h-8" />,
              desc: "Il Modulo Spedizioni è una parte fondamentale del sistema LogicWay, studiato per ottimizzare e rendere davvero efficaci tutte le operazioni. Totalmente configurabile, per prelievi picking o a bancale, con lettura di codice a barre o etichette e controllo in tempo reale. Sulla base del layout di magazzino e su parametri impostati (data del lotto, FIFO/LIFO ecc.) il sistema indica agli operatori il percorso di prelievo ottimizzato. Possono essere generate etichette per carico, per corriere, per destinazione, come anche documenti di trasporto, per un completo controllo sui carichi. Anche il modulo spedizioni può generare report statistici per monitoraggi e successive ottimizzazioni.",
              href: "/spedizioni",
            },
          ].map((modulo, idx) => (
            <Link key={idx} href={modulo.href}>
              <Card
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 my-6 cursor-pointer animate-left h-full"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="bg-[#f6de34] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    {modulo.icon}
                  </div>
                  <CardTitle className="text-lg font-bold mb-2 text-center">
                    {modulo.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-center">
                    {modulo.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="bg-gray-100 py-16 px-[15vw] mt-[4vh]">
          <div className="text-center animate-fade-in">
            <h2 className="text-[24px]">Moduli Extra</h2>
            <p className="mt-4 text-gray-600">
              L’obiettivo di LogicWay è quello di ottimizzare...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex-1 animate-right">
              <CardHeader>
                <CardTitle className="text-[18px]">Vendita banco</CardTitle>
                <CardDescription className="text-[16px]">
                  Collegamento della gestione del magazzino con le vendite al
                  banco: prelievo merce senza ordine e generazione del DDT.
                  Possibilità di configurare un device per il prelievo in
                  autonomia da parte del cliente e conseguente creazione di
                  ordine e DDT.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex-1 animate-left">
              <CardHeader>
                <CardTitle className="text-[18px]">Produzione</CardTitle>
                <CardDescription className="text-[16px]">
                  Movimentazione delle materie prime verso le linee di
                  produzione, monitoraggio bancali dalla produzione al
                  magazzino. Integrazione con sistemi “industria 4.0” presenti
                  in azienda.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <AccordionModuli />
      </div>

      {/* MOBILE SECTION */}
      <div className="block md:hidden">
        <div className="relative h-[250px]">
          <img
            src="/images/header-moduli.webp"
            className="w-full h-full object-cover"
            alt="background"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">
              Software modulare <br /> che cresce con le tue esigenze
            </h2>
          </div>
        </div>

        <div className="px-6">
          {[
            {
              title: "Ricevimento",
              icon: <Package className="w-8 h-8" />,
              desc: "Il Modulo Ricevimento gestisce la fase di accettazione della merce in arrivo e l’emissione del DDT. LogicWay confronta la merce in entrata con le voci dell’ordine presente nel gestionlale, segnalando eventuali discordanze. LogicWay legge le principali etichette internazionali, e in caso di necessità può generare etichette e barcode. In qualsiasi momento puoi consultare lo storico delle operazioni effettuate, filtrandole per operatore, tipologia, periodo, ed elaborare i dati per statistiche e miglioramenti operativi.",
              href: "/ricevimento",
            },
            {
              title: "Movimenti interni",
              icon: <Truck className="w-8 h-8" />,
              desc: "Con questo modulo puoi configurare le operazioni collegate allo spostamento di merce tra collocazioni o tra magazzini, sia fisici che virtuali: assegnare parametri alle collocazioni (ad esempio volume ammissibile, portata, numero di pallet), ordinarle, gestire il flusso. I parametri assegnati permetteranno di indirizzare la merce alle collocazioni più appropriate senza perdite di tempo. Con LogicWay puoi creare automaticamente una mappa del magazzino secondo la schema corsie-scaffali-piani, oppure puoi caricare la planimetria effettiva del tuo magazzino, per avere un colpo d’occhio reale sulla situazione.",
              href: "/movimenti_interni",
            },
            {
              title: "Inventario",
              icon: <PackageOpen className="w-8 h-8" />,
              desc: "Il Modulo consente di gestire l’inventario del magazzino: globale, o soltanto una parte, o filtrato per classe merceologica, serie prodotti, data… è sufficiente impostare i filtri necessari e LogicWay con un click procede a inventariare la merce. Durante l’elaborazione dell’inventario le movimentazioni possono essere bloccate, sia in entrata che in uscita. Un sistema visivo “a semaforo” indica lo stato di ogni articolo, se ancora da inventariare, se non corrispondente alla giacenza o se il dato della giacenza e quello dell’inventario coincidono. Tutti i dati possono essere estratti e rielaborati in statistiche, calcolo dei costi, delle perdite ecc.",
              href: "/inventario",
            },
            {
              title: "Monitoraggio",
              icon: <BarChart3 className="w-8 h-8" />,
              desc: "Grazie a questo modulo tutto ciò che è registrato in LogicWay può essere filtrato in base ai parametri desiderati, estratto ed elaborato in grafici o tabelle, per una semplice consultazione, un controllo o per trarne dati statistici. Dal semplice storico delle movimentazioni, al filtro per operatore, per ordine o addirittura per bancale, fino alle operazioni effettuate in un lasso di tempo: tutto è monitoratile, in modo da fornire dati utili per correttivi e ottimizzazioni.",
              href: "/monitoraggio",
            },
            {
              title: "Spedizioni",
              icon: <CheckCircle className="w-8 h-8" />,
              desc: "Il Modulo Spedizioni è una parte fondamentale del sistema LogicWay, studiato per ottimizzare e rendere davvero efficaci tutte le operazioni. Totalmente configurabile, per prelievi picking o a bancale, con lettura di codice a barre o etichette e controllo in tempo reale. Sulla base del layout di magazzino e su parametri impostati (data del lotto, FIFO/LIFO ecc.) il sistema indica agli operatori il percorso di prelievo ottimizzato. Possono essere generate etichette per carico, per corriere, per destinazione, come anche documenti di trasporto, per un completo controllo sui carichi. Anche il modulo spedizioni può generare report statistici per monitoraggi e successive ottimizzazioni.",
              href: "/spedizioni",
            },
          ].map((modulo, idx) => (
            <Link key={modulo.title} href={modulo.href}>
              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 my-6">
                <CardHeader className="flex flex-col items-center">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    {modulo.icon}
                  </div>
                  <CardTitle className="text-lg font-bold mb-2 text-center">
                    {modulo.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-center">
                    {modulo.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-gray-100 py-16 px-6">
          <div className="text-center animate-fade-in">
            <h2 className="text-lg font-bold">Moduli Extra</h2>
            <p className="mt-4 text-gray-600">
              L’obiettivo di LogicWay è quello di ottimizzare...
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle>Vendita banco</CardTitle>
                <CardDescription>
                  Collegamento della gestione del magazzino con le vendite al
                  banco: prelievo merce senza ordine e generazione del DDT.
                  Possibilità di configurare un device per il prelievo in
                  autonomia da parte del cliente e conseguente creazione di
                  ordine e DDT.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle>Produzione</CardTitle>
                <CardDescription>
                  Movimentazione delle materie prime verso le linee di
                  produzione, monitoraggio bancali dalla produzione al
                  magazzino. Integrazione con sistemi “industria 4.0” presenti
                  in azienda.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <AccordionModuli />
      </div>

      <Footer />
    </div>
  );
}
