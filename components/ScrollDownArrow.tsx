"use client";
import { useEffect, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollDownArrow({ targetId }: { targetId: string }) {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setShowArrow(window.scrollY < 10);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = useCallback(() => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [targetId]);

  return (
    showArrow && (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToTarget}
          aria-label="Scorri giù"
          className="animate-bounce"
        >
          <ChevronDown size={40} className="text-white" />
        </button>
      </div>
    )
  );
}
