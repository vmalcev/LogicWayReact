import {Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import {Paintbrush , AppWindow, TabletSmartphone } from "lucide-react";

export default function Caratteristiche(){
    return(
      <div>
        <div id="caratteristiche" className="flex items-center justify-center mt-4">
          <h2 className="text-2xl font-bold mb-4 py-12 text-blue">Caratteristiche</h2>
        </div>

        <div  className="flex flex-col md:flex-row items-stretch justify-center gap-4 px-4">
          <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
            <CardHeader>
              <CardHeader className="flex items-center">
                <AppWindow  className="h-6 w-6 mr-2 text-[#f6de34] group-hover:text-black " />
                <CardTitle>Webapp</CardTitle>
              </CardHeader>
            </CardHeader>
            <CardContent>
              <p>
                LogicWay ha un’interfaccia moderna e intuitiva perché sviluppato utilizzando tecnologie web responsive. Viene installato unicamente sul server del cliente, questo rende facili e rapidi gli aggiornamenti e anche la manutenzione dei dispositivi è semplificata.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
            <CardHeader>
              <CardHeader className="flex items-center">
                <Paintbrush  className="h-6 w-6 mr-2 text-[#f6de34] group-hover:text-black " />
                <CardTitle>Personalizzazione</CardTitle>
              </CardHeader>
            </CardHeader>
            <CardContent>
              <p>
LogicWay è scalabile e facilmente espandibile: nel caso in cui le funzionalità standard di LogicWay non fossero in grado di coprire esigenze specifiche possiamo sviluppare personalizzazioni e moduli ad hoc.
              </p>
            </CardContent>
          </Card>

         <Card className="w-full md:w-1/3 group hover:bg-[#f6de34] hover:text-black">
            <CardHeader>
              <CardHeader className="flex items-center">
                <TabletSmartphone  className="h-6 w-6 mr-2 text-[#f6de34] group-hover:text-black  " />
                <CardTitle>Mutlidevice</CardTitle>
              </CardHeader>
            </CardHeader>
            <CardContent>
              <p>
LogicWay è compatibile con qualsiasi dispositivo che possieda un browser e la possibilità di connettersi alla rete aziendale su cui verrà installato il software. Per ottenere le migliori performance è comunque consigliabile utilizzare device con browser moderni come i terminali industriali con sistema operativo Android.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}
