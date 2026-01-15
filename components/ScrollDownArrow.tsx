"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollDownArrow({ targetId }: { targetId: string }) {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
