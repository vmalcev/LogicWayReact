import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#f6de34]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Pronto per ottimizzare la tua logistica?
          </h2>
          <p className="mt-4 text-lg text-black/80">
            Contattaci per una demo personalizzata del software LogicWay
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/contatti" className="flex items-center">
                Richiedi Demo Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              +39 0173444111
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
