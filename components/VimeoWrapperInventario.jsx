"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoInventario({ videoId }) {
  return (
    <div className="video-inv">
      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
