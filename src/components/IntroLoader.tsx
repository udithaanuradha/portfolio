"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import styles from "./IntroLoader.module.css";

let introPlayed = false;

export default function IntroLoader() {
  const [revealing, setRevealing] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const intro = introRef.current;
    if (intro && (introPlayed || window.location.hash)) {
      intro.dataset.skipped = "true";
    }
  }, []);

  useEffect(() => {
    if (introRef.current?.dataset.skipped === "true") return;

    let minimumElapsed = false;
    let pageLoaded = document.readyState === "complete";

    function reveal() {
      introPlayed = true;
      setRevealing(true);
    }

    function revealIfReady() {
      if (minimumElapsed && pageLoaded) reveal();
    }

    function handleLoad() {
      pageLoaded = true;
      revealIfReady();
    }

    window.addEventListener("load", handleLoad, { once: true });
    const minimum = window.setTimeout(() => {
      minimumElapsed = true;
      revealIfReady();
    }, 1600);
    const maximum = window.setTimeout(reveal, 4500);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(minimum);
      window.clearTimeout(maximum);
    };
  }, []);

  return (
    <div ref={introRef} className={styles.intro} data-revealing={revealing} aria-hidden="true">
      <div className={styles.mark}>
        <span className={styles.name}>{profile.name}</span>
        <div className={styles.loading}>
          <span className={styles.track}>
            <span className={styles.indicator} />
          </span>
          <span>Loading…</span>
        </div>
      </div>
    </div>
  );
}
