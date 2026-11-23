"use client";

import { useId, useRef, useState, type ReactNode } from "react";

type Slide = { title: string; content: ReactNode };

export default function Carousel({ items, label }: { items: Slide[]; label: string }) {
  const instructionsId = useId();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [index, setIndex] = useState(0);
  const canBrowse = items.length > 1;
  // With two entries, each needs a copy so it can approach from either edge.
  const stack = items.length === 2 ? [...items, ...items] : items;

  function move(step: number) {
    if (!canBrowse) return;
    setIndex((current) => (current + step + stack.length) % stack.length);
  }

  if (items.length === 0) return null;

  const previousIndex = (index - 1 + stack.length) % stack.length;
  const nextIndex = (index + 1) % stack.length;
  const layers = stack.map((item, itemIndex) => ({
    ...item,
    position: itemIndex === index ? "front" : itemIndex === nextIndex ? "right" : itemIndex === previousIndex ? "left" : "hidden",
  }));

  return (
    <div
      role="region"
      aria-label={label}
      aria-describedby={canBrowse ? instructionsId : undefined}
      aria-roledescription="carousel"
      tabIndex={canBrowse ? 0 : undefined}
      className="rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      onKeyDown={(event) => {
        if (!canBrowse || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
        event.preventDefault();
        event.currentTarget.focus({ preventScroll: true });
        move(event.key === "ArrowLeft" ? -1 : 1);
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        const touch = event.changedTouches[0];
        if (!start || !touch) return;

        const horizontal = touch.clientX - start.x;
        const vertical = touch.clientY - start.y;
        if (Math.abs(horizontal) >= 48 && Math.abs(horizontal) > Math.abs(vertical)) {
          move(horizontal < 0 ? 1 : -1);
        }
      }}
    >
      {canBrowse && (
        <p id={instructionsId} className="sr-only">Use the left and right arrow keys to browse.</p>
      )}
      <div className={`relative isolate grid grid-cols-1 overflow-hidden rounded-2xl px-[var(--peek)] ${canBrowse ? "[--peek:1.25rem] sm:[--peek:3rem] lg:[--peek:4.5rem]" : "[--peek:0px]"}`}>
        {layers.map(({ content, position }, layerIndex) => (
          <div
            key={layerIndex}
            aria-hidden={position !== "front"}
            inert={position !== "front"}
            data-position={position}
            className="relative col-start-1 row-start-1 flex min-h-64 min-w-0 flex-col justify-center rounded-2xl border border-primary/25 bg-background bg-gradient-to-br from-primary/12 via-card to-accent/8 p-5
              transition-[translate,scale,opacity] duration-300 ease-out motion-reduce:transition-none sm:p-8 lg:p-10
              data-[position=front]:z-20 data-[position=front]:hover:border-primary/60
              data-[position=left]:z-10 data-[position=left]:-translate-x-[var(--peek)] data-[position=left]:scale-y-90 data-[position=left]:opacity-65
              data-[position=right]:z-10 data-[position=right]:translate-x-[var(--peek)] data-[position=right]:scale-y-90 data-[position=right]:opacity-65
              data-[position=hidden]:pointer-events-none data-[position=hidden]:opacity-0"
          >
            {content}
          </div>
        ))}
        {canBrowse && [-1, 1].map((step) => (
          <div
            key={step}
            aria-hidden="true"
            className={`absolute inset-y-[5%] z-30 w-[var(--peek)] ${step < 0 ? "left-0" : "right-0"}`}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") move(step); }}
          />
        ))}
      </div>

      {canBrowse && (
        <p aria-live="polite" aria-atomic="true" className="mt-4 text-center font-mono text-sm text-muted">
          {(index % items.length) + 1} of {items.length}
        </p>
      )}
    </div>
  );
}
