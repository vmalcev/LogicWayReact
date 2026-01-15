"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoPiccolo({ videoId }) {
  return (
    <div className="vimeo-wrapper">
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

      <Vimeo video={videoId} autoplay loop muted controls={false} dnt={true}/>
    </div>
  );
}

