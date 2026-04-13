'use client';

import Vimeo from '@u-wave/react-vimeo';
import { useState } from "react";


export default function VimeoRicevimentoMobile({ videoId }) {
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
    <div className="vimeo-mobile">
           {/* Immagine visibile fino a quando il video non è pronto */}
      <img
        src={foto}
        alt="Anteprima video modulo"
        className={`w-full h-[37vh] absolute top-0 left-0 object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      <Vimeo
        video={videoId}
        autoplay
        loop
        muted
        controls={false}
        background
        onReady={() => setVideoReady(true)}
      />
    </div>
    
  );
}