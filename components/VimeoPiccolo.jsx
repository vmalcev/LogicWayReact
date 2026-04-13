"use client";

import Vimeo from "@u-wave/react-vimeo";

export default function VimeoPiccolo({ videoId }) {
  return (
    <div className="vimeo-wrapper">
      <Vimeo video={videoId} autoplay loop muted controls={false} dnt={true} />
    </div>
  );
}

