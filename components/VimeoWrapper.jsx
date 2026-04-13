"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoWrapper({ videoId }) {
  return (
    <div className="vimeo-wrapper">
      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
