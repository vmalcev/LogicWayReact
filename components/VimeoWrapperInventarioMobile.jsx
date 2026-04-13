"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoInventarioMobile({ videoId }) {
  return (
    <div className="video-inv-mobile">
      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
