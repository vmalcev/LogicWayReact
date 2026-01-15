"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoInventarioMobile({ videoId }) {
  return (
    <div className="viideo">
      <style jsx global>
        {`
        .viideo iframe {
         width: 100vw;
    height: 56.25vw;
    min-height: 35vh;
    min-width: 177.77vh;
    position: absolute;
    left: -129vw;`}
      </style>

      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
