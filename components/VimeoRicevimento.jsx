"use client";

import { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";

export default function VimeoRicevimento({ videoId }) {
  const [videoReady, setVideoReady] = useState(false);

  const thumbnailMap = {
    "545034458": "/images/ricevimento-anteprima.webp",
    "545039657": "/images/movimenti-interni-anteprima.webp",
    "545041158": "/images/inventario-anteprima.webp",
    "545040477": "/images/monitoraggio-anteprima.webp",
    "545038959": "/images/spedizioni-anteprima.webp",
  };
  const foto = thumbnailMap[videoId] || "/images/ricevimento-anteprima.webp";
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      {/* Immagine visibile fino a quando il video non è pronto */}
      <img
        src={foto}
        alt="Anteprima video modulo"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="video absolute top-0 left-0 z-10 w-full h-full">
        <Vimeo
          video={videoId}
          autoplay
          loop
          muted
          background
          controls={false}
          onReady={() => setVideoReady(true)}
        />
      </div>
    </div>
  );
}
