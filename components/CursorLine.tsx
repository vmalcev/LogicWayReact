"use client";

import { useState, useEffect } from "react";

type Point = { x: number; y: number; timestamp: number };

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const cleanOldPoints = () => {
      const now = Date.now();
      setPoints((prevPoints) =>
        prevPoints.filter((p) => now - p.timestamp < 1500)
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      setPoints((prevPoints) => {
        const newPoints = [
          ...prevPoints,
          { x: e.clientX, y: e.clientY, timestamp: now },
        ];
        // Mantieni i punti solo degli ultimi 1.5s (1500ms)
        return newPoints.filter((p) => now - p.timestamp < 1500);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Pulizia continua ogni 50ms per far sparire la linea anche se il mouse è fermo
    const interval = setInterval(cleanOldPoints, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Costruisci la path svg
  const pathData = points
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(" ");

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <path
        d={pathData}
        stroke="rgb(247, 243, 6)"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        // aggiungi la proprietà per rendere la linea un po arrotondata
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
