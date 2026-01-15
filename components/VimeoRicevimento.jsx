"use client";

import { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";

export default function VimeoRicevimento({ videoId }) {
  const [videoReady, setVideoReady] = useState(false);

  var foto;
  switch (videoId) {
    // ricevimento
    case "545034458":
      foto = "images/ricevimento-anteprima.webp";
      break;

    // movimenti interni
    case "545039657":
      foto ="images/movimenti-interni-anteprima.webp"
      break;

    // inventario
    case "545041158":
      foto = "images/inventario-anteprima.webp"
      break;

    // monitoraggio
    case "545040477":
      foto ="images/monitoraggio-anteprima.webp"
      break;

    // spedizioni
    case "545038959":
      foto ="images/spedizioni-anteprima.webp"
      break;
  }
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      {/* Immagine visibile fino a quando il video non è pronto */}
      <img
        src={foto}
        alt="Placeholder"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      <style jsx global>{`
        .video iframe {
          width: 99vw;
          height: 91vh;
        }
      `}</style>

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
