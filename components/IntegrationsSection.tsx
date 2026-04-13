import Image from "next/image";

export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-gray-50" aria-label="Integrazioni ERP">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
         <h2 className="text-2xl font-semibold">
           Integrazioni ERP
         </h2>
         <p className="mt-2 text-gray-600">LogicWay si integra nativamente con i principali gestionali</p>
        </div>
    <div className="flex justify-center mt-8 gap-8 sm:gap-12 flex-wrap">
        <div className="flex justify-center items-center">
          <Image src="/jgalileo.png" alt="Integrazione ERP J-Galileo - software gestionale" width={200} height={80} className="h-16 w-auto sm:h-20" style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/eSOLVER.png" alt="Integrazione ERP eSolver - software gestionale" width={200} height={80} className="h-16 w-auto sm:h-20" style={{ width: 'auto', height: 'auto' }} />
        </div>
        </div>
      </div>
    </section>
  );
}
