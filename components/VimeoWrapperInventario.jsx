"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoInventario({ videoId }) {
  return (
    <div className="video">
      <style jsx global>
        {`
        .video iframe {
         width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177.77vh;
    position: absolute;`}
      </style>

      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
