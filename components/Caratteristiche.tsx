import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Paintbrush, AppWindow, TabletSmartphone } from "lucide-react";

export default function Caratteristiche() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[10vh]">
      <div
        id="caratteristiche"
        className="flex items-center justify-center mt-4"
      >
        <h2 className="text-2xl font-bold mb-4 py-12">Caratteristiche</h2>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4">
        <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
          <div className="p-6 flex items-center gap-2">
            <AppWindow className="h-6 w-6 shrink-0 text-[#f6de34] group-hover:text-black" />
            <CardTitle>Webapp</CardTitle>
          </div>
          <CardContent>
            <p>
              LogicWay ha un&apos;interfaccia moderna e intuitiva perché
              sviluppato utilizzando tecnologie web responsive. Viene installato
              unicamente sul server del cliente, questo rende facili e rapidi gli
              aggiornamenti e anche la manutenzione dei dispositivi è
              semplificata.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
          <div className="p-6 flex items-center gap-2">
            <Paintbrush className="h-6 w-6 shrink-0 text-[#f6de34] group-hover:text-black" />
            <CardTitle>Personalizzazione</CardTitle>
          </div>
          <CardContent>
            <p>
              LogicWay è scalabile e facilmente espandibile: nel caso in cui le
              funzionalità standard di LogicWay non fossero in grado di coprire
              esigenze specifiche possiamo sviluppare personalizzazioni e moduli
              ad hoc.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
          <div className="p-6 flex items-center gap-2">
            <TabletSmartphone className="h-6 w-6 shrink-0 text-[#f6de34] group-hover:text-black" />
            <CardTitle>Multidevice</CardTitle>
          </div>
          <CardContent>
            <p>
              LogicWay è compatibile con qualsiasi dispositivo che possieda un
              browser e la possibilità di connettersi alla rete aziendale su cui
              verrà installato il software. Per ottenere le migliori performance
              è comunque consigliabile utilizzare device con browser moderni come
              i terminali industriali con sistema operativo Android.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
