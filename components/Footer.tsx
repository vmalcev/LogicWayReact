import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f6de34]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">

        {/* ── Mobile layout (< md) ── */}
        <div className="md:hidden flex flex-col items-center text-center space-y-6">
          <Image src="/Logicway_logo.svg" alt="LogicWay Logo" width={120} height={32} className="h-8 w-auto" style={{ width: 'auto', height: 'auto' }} />

          {/* Navigation links row */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-black/80">
            <Link href="/#vantaggi" className="hover:text-black">Vantaggi</Link>
            <Link href="/#caratteristiche" className="hover:text-black">Caratteristiche</Link>
            <Link href="/moduli" className="hover:text-black font-semibold">Moduli</Link>
          </div>

          {/* Module links as compact row */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-black/70">
            <Link href="/ricevimento" className="hover:text-black">Ricevimento</Link>
            <span className="text-black/30">·</span>
            <Link href="/movimenti_interni" className="hover:text-black">Movimenti interni</Link>
            <span className="text-black/30">·</span>
            <Link href="/inventario" className="hover:text-black">Inventario</Link>
            <span className="text-black/30">·</span>
            <Link href="/monitoraggio" className="hover:text-black">Monitoraggio</Link>
            <span className="text-black/30">·</span>
            <Link href="/spedizioni" className="hover:text-black">Spedizioni</Link>
          </div>

          {/* Divider */}
          <div className="w-16 border-t border-black/20" />

          {/* Contact info */}
          <div className="space-y-1.5 text-xs text-black/70">
            <p className="font-medium text-black/90">Sistemi Tre s.r.l.</p>
            <p>C.so Canale, 52 - 12051 Alba (CN)</p>
            <div className="flex items-center justify-center gap-4 pt-1">
              <Link href="tel:+390173444111" className="flex items-center gap-1 hover:text-black">
                <Phone className="h-3.5 w-3.5" />+39 0173444111
              </Link>
              <Link href="mailto:info@sistemitre.it" className="flex items-center gap-1 hover:text-black">
                <Mail className="h-3.5 w-3.5" />info@sistemitre.it
              </Link>
            </div>
            <Link href="https://www.sistemitre.it" target="_blank" className="inline-block pt-0.5 hover:text-black">
              www.sistemitre.it
            </Link>
          </div>

          {/* Bottom bar */}
          <div className="w-full pt-4 border-t border-black/20 space-y-2 text-[11px] text-black/50">
            <p>P.IVA 01764450043 - CF: 04457820019</p>
            <div className="flex justify-center gap-6">
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>

        {/* ── Desktop layout (md+) ── */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo */}
            <div>
              <Image src="/Logicway_logo.svg" alt="LogicWay Logo" width={140} height={38} className="h-10 w-auto" style={{ width: 'auto', height: 'auto' }} />
            </div>

            {/* Links */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/#vantaggi" className="text-black/80 hover:text-black">Vantaggi</Link>
                </li>
                <li>
                  <Link href="/#caratteristiche" className="text-black/80 hover:text-black">Caratteristiche</Link>
                </li>
              </ul>
            </div>

            {/* Moduli */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Moduli</h3>
              <ul className="space-y-2 text-black/80">
                <li><Link href="/ricevimento" className="hover:text-black">Ricevimento</Link></li>
                <li><Link href="/movimenti_interni" className="hover:text-black">Movimenti interni</Link></li>
                <li><Link href="/inventario" className="hover:text-black">Inventario</Link></li>
                <li><Link href="/monitoraggio" className="hover:text-black">Monitoraggio</Link></li>
                <li><Link href="/spedizioni" className="hover:text-black">Spedizioni</Link></li>
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <div className="space-y-3 text-black/80">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                  <div>
                    <div>Sistemi Tre s.r.l.</div>
                    <div>C.so Canale, 52 - 12051 Alba (CN)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <Link href="tel:+390173444111" className="hover:text-black">+39 0173444111</Link>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <Link href="mailto:info@sistemitre.it" className="hover:text-black">info@sistemitre.it</Link>
                </div>
                <Link href="https://www.sistemitre.it" target="_blank" className="block hover:text-black">
                  www.sistemitre.it
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-black/20">
            <div className="flex justify-between items-center text-black/60 text-sm">
              <div>P.IVA 01764450043 - CF: 04457820019</div>
              <div className="flex space-x-6">
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
