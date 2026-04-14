"use client";

import { useState, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";

export default function VimeoWrapper({ videoId }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer Vimeo iframe until the browser is idle to reduce TBT
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return <div className="vimeo-wrapper" />;

  return (
    <div className="vimeo-wrapper">
      <Vimeo video={videoId} autoplay loop muted controls={false} background />
    </div>
  );
}
