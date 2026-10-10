"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move handler: divide the container width into equal segments
  // based on the number of items. As the mouse moves across, change the active index.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    
    const segmentWidth = width / items.length;
    let newIndex = Math.floor(x / segmentWidth);
    
    // Clamp between 0 and items.length - 1
    newIndex = Math.max(0, Math.min(newIndex, items.length - 1));
    setActiveIndex(newIndex);
  };

  // For touch devices, allow swiping
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) setActiveIndex(Math.min(activeIndex + 1, items.length - 1));
    if (touchStart - touchEnd < -50) setActiveIndex(Math.max(activeIndex - 1, 0));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full flex items-center justify-center overflow-hidden cursor-crosshair py-10"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => {
        // Optional: snap back to 0 or leave it at current when mouse leaves
      }}
    >
      {/* Invisible static spacer to give the container the exact height of the TALLEST item */}
      <div className="invisible pointer-events-none w-[85%] max-w-[550px] grid">
        {items.map((child, index) => (
          <div key={index} className="col-start-1 row-start-1">
            {child}
          </div>
        ))}
      </div>

      {items.map((child, index) => {
        const offset = index - activeIndex;
        // offset 0 is center
        // offset < 0 is left
        // offset > 0 is right
        
        return (
          <motion.div
            key={index}
            className="absolute w-[85%] max-w-[550px]"
            animate={{
              x: offset * 280, // Spread out by 280px
              scale: offset === 0 ? 1 : 0.85,
              opacity: offset === 0 ? 1 : 0.3,
              zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
              filter: offset === 0 ? "blur(0px)" : "blur(4px)",
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            style={{
              // Only the front card can be interacted with (clicking links etc)
              pointerEvents: offset === 0 ? "auto" : "none",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
