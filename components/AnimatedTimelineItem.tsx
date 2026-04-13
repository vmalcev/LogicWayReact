"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedTimelineItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="timeline-item relative pl-16 mb-12 flex items-center"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#f6de34] flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
      </div>
    </motion.div>
  );
}
