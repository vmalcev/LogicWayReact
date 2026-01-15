"use client";

import Vimeo from "@u-wave/react-vimeo";
import { useState } from "react";

export default function VimeoWrapper({ videoId }) {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <div className="vimeo-wrapper">

{/* {Immagine visibile fino a quando il video non è pronto }
      <img
        src="images/sfondo-immagine.webp"
        alt="Placeholder"
        className={`absolute top-0 left-0 w-full h-full object-cover  ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
*/}
      <style jsx global>{`
     
        .vimeo-wrapper iframe {
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.77vh;
         
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          pointer-events: none;
        }
      `}</style>

      <Vimeo video={videoId} autoplay loop muted controls={false} background  />
    </div>
  );
}
//
//         width: 100vw;
//         height: 56.25vw;
//         min-width: 177.77vh;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 100%;
//         height: 100%;
//         object-fit: cover;

//           width: 100%;
// height: 100%;
// object-fit: cover;
