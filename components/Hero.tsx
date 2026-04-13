"use client";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import dinamici (no SSR)
const MobileVideo = dynamic(() => import('@/components/VimeoPiccolo'), { ssr: false });
const DesktopVideo = dynamic(() => import('@/components/VimeoWrapper'), { ssr: false });

import {Dialog, DialogBackdrop, DialogPanel, TransitionChild} from "@headlessui/react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden hero-home" aria-label="Presentazione LogicWay">
      {/* Mobile video - hidden on md+ */}
      <div className="block md:hidden">
        <MobileVideo videoId="1098196396" />
      </div>
      {/* Desktop video - hidden below md */}
      <div className="hidden md:block">
        <DesktopVideo videoId="545403553" />
      </div>




      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 overlay-sfondo">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Software modulare</span>
              <span className="block" style={{ color: "#f6de34" }}>
                che cresce con le tue esigenze
              </span>
            </h1>
            <p className="mt-6 text-xl max-w-3xl">
              Per una logistica ottimizzata con tempi e costi ridotti al minimo.
              Vuoi una logistica efficiente, controllata, tracciabile?
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/moduli">
                <Button
                  size="lg"
                  className="text-black flex w-full items-center justify-center sm:w-auto"
                  style={{ backgroundColor: "#f6de34" }}
                >
                  Scopri i Moduli
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black flex w-full items-center justify-center sm:w-auto"
                onClick={() => setOpen(true)}
              >
                Guarda il video completo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-[99999]">
              <DialogBackdrop
                className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0"
              />
              <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
                <TransitionChild
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-90"
                >
                  <DialogPanel className="relative w-full max-w-4xl rounded-2xl shadow-2xl bg-black overflow-hidden">
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors"
                      aria-label="Chiudi video"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="aspect-video">
                      {open && (
                        <iframe
                          src="https://player.vimeo.com/video/548403234?autoplay=1&title=0&byline=0&portrait=0"
                          className="w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title="LogicWay - Video completo"
                        />
                      )}
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </div>
        </div>
      </div>


    </section>
  );
}
