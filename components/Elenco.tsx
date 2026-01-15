import Link from "next/link";
import { Truck, Move, ClipboardList, LineChart } from "lucide-react";

export default function Elenco() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Altri Moduli
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link
            href="/ricevimento"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all text-center"
          >
            <div className="w-16 h-16 bg-[#f6de34] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ricevimento
            </h3>
            <p className="text-gray-600">
              Gestione completa del ricevimento merci
            </p>
          </Link>

          <Link
            href="movimenti_interni"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all text-center"
          >
            <div className="w-16 h-16 bg-[#f6de34] rounded-full flex items-center justify-center mx-auto mb-4">
              <Move className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Movimenti interni
            </h3>
            <p className="text-gray-600 ">
              Gestione dei movimenti tra reparti
            </p>
          </Link>

          <Link
            href="inventario"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all text-center"
          >
            <div className="w-16 h-16 bg-[#f6de34] rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Inventario
            </h3>
            <p className="text-gray-600 ">
              Gestione e controllo dell'inventario
            </p>
          </Link>

          <Link
            href="monitoraggio"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all text-center"
          >
            <div className="w-16 h-16 bg-[#f6de34] rounded-full flex items-center justify-center mx-auto mb-4">
              <LineChart className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Monitoraggio
            </h3>
            <p className="text-gray-600 ">Monitoraggio in tempo reale</p>
          </Link>

          <Link
            href="spedizioni"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all text-center"
          >
            <div className="w-16 h-16 bg-[#f6de34] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Spedizioni
            </h3>
            <p className="text-gray-600 ">
              Gestione completa delle spedizioni
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
