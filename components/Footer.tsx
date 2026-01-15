import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f6de34]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <img src="Logicway_logo.svg" alt="" />
          </div>

          {/* Vantaggi */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="//#vantaggi"
                  className="text-black/80 hover:text-black"
                >
                  Vantaggi
                </Link>{" "}
                <br />
                <Link
                  href="//#caratteristiche"
                  className="text-black/80 hover:text-black"
                >
                  Caratteristiche
                </Link>
              </li>
            </ul>
          </div>

          {/* Moduli */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Moduli</h3>
            <ul className="space-y-2 text-black/80">
              <li>
                <Link href="ricevimento" className="hover:text-black">
                  Ricevimento
                </Link>
              </li>
              <li>
                <Link href="/movimenti_interni" className="hover:text-black">
                  Movimenti interni
                </Link>
              </li>
              <li>
                <Link href="/inventario" className="hover:text-black">
                  Inventario
                </Link>
              </li>
              <li>
                <Link href="/monitoraggio" className="hover:text-black">
                  Monitoraggio
                </Link>
              </li>
              <li>
                <Link href="/spedizioni" className="hover:text-black">
                  Spedizioni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <div className="space-y-3 text-black/80">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <div>
                  <div>Sistemi Tre s.r.l.</div>
                  <div>C.so Canale, 52</div>
                  <div>12051 Alba (CN) Italy</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+39 0173444111</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <Link
                  href="mailto:info@sistemire.it"
                  className="hover:text-black"
                >
                  info@sistemire.it
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.sistemitre.it"
                  target="_blank"
                  className="hover:text-black"
                >
                  www.sistemire.it
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-black/60 text-sm">
            <div>P.IVA 01796450043 - CF: 04437800019</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/cookie" className="hover:text-black">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
