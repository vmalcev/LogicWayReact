"use client";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dinamici (no SSR)
const MobileVideo = dynamic(() => import('@/components/VimeoPiccolo'), { ssr: false });
const DesktopVideo = dynamic(() => import('@/components/VimeoWrapper'), { ssr: false });



import {Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, TransitionChild} from "@headlessui/react";

const VimeoBackground = dynamic(() => import("@/components/VimeoWrapper"), {
  ssr: false,
});


function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
export default function Hero() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden hero-home">
      <div>
        {isMobile ? <MobileVideo videoId="1098196396" /> : <DesktopVideo videoId="545403553" />}
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

            <Dialog open={open} onClose={setOpen} className="relative z-10">
              <TransitionChild
                as="div"
                className="fixed inset-0 z-[99999] flex p-6"
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <div className="max-w-5xl mx-auto h-full flex items-center">
                  <DialogPanel
                    className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden"
                    style={{ width: "77vw", height: "38.25vw" }}
                  >
                    <DesktopVideo videoId="548403234" />
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </div>
        </div>
      </div>


    </section>
  );
}
