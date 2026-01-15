'use client';

import Vimeo from '@u-wave/react-vimeo';
import { useState } from "react";


export default function VimeoRicevimentoMobile({ videoId }) {
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
         <div className="viideo">
           {/* Immagine visibile fino a quando il video non è pronto */}
      <img
      style={{width:"100%", height:"37vh"}}
        src={foto}
        alt="Placeholder"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
   <style jsx global>{`
        .viideo iframe {
         width: 100vw;
    `
   }
   </style>

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