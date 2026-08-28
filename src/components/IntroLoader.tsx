"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";

// A short, interactive intro: name types on letter by letter over a black
// screen with a loading bar underneath, then two "doors" slide apart to
// reveal the site — rather than a plain fade. Always black regardless of
// light/dark theme, since that's the requested effect, not the page bg.
const LETTER_DELAY = 0.2; // when the first letter starts
const LETTER_STAGGER = 0.035; // gap between each letter
const HOLD_MS = 2000; // total time before the exit/door-open begins
const TEXT_FADE_S = 0.3; // how long the name + loading bar take to fade out
const DOOR_DELAY_S = TEXT_FADE_S + 0.05; // let the text clear before the doors move
const EXIT_MS = 900; // how long the door-open slide itself takes

const DOOR_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function IntroLoader() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");
  const letters = [...profile.name];
  const nameSettledAt = LETTER_DELAY + letters.length * LETTER_STAGGER + 0.4;

  useEffect(() => {
    const toExit = setTimeout(() => setPhase("exit"), HOLD_MS);
    const toDone = setTimeout(
      () => setPhase("done"),
      HOLD_MS + DOOR_DELAY_S * 1000 + EXIT_MS
    );
    return () => {
      clearTimeout(toExit);
      clearTimeout(toDone);
    };
  }, []);

  // Lock scrolling until the doors start opening, then let the page breathe.
  useEffect(() => {
    if (phase === "done") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div className="fixed inset-0 z-100" aria-hidden="true">
          {/* Two door panels that split apart on exit instead of a flat fade */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: phase === "exit" ? "-100%" : "0%" }}
            transition={{ duration: EXIT_MS / 1000, delay: DOOR_DELAY_S, ease: DOOR_EASE }}
            className="absolute inset-y-0 left-0 w-1/2 bg-black"
          />
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: phase === "exit" ? "100%" : "0%" }}
            transition={{ duration: EXIT_MS / 1000, delay: DOOR_DELAY_S, ease: DOOR_EASE }}
            className="absolute inset-y-0 right-0 w-1/2 bg-black"
          />

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            <motion.div
              animate={{ opacity: phase === "exit" ? 0 : 1, y: phase === "exit" ? -16 : 0 }}
              transition={{ duration: TEXT_FADE_S }}
              className="flex flex-wrap justify-center"
            >
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: LETTER_DELAY + i * LETTER_STAGGER,
                    ease: "easeOut",
                  }}
                  className="font-heading text-3xl font-semibold tracking-wide text-white sm:text-5xl"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </motion.div>

            {/* Loading bar — fills over the hold time for a genuine "loading" feel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "exit" ? 0 : 1 }}
              transition={{ duration: TEXT_FADE_S, delay: phase === "exit" ? 0 : nameSettledAt }}
              className="mt-8 h-px w-40 overflow-hidden bg-white/20"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: HOLD_MS / 1000 - nameSettledAt,
                  delay: nameSettledAt,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-white"
              />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
