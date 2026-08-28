"use client";

import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  // Matches whatever the inline script in layout.tsx already applied to <html>,
  // so there's no mismatch between this button's icon and the actual theme.
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme()
  );

  // React's Strict Mode remounts on every dev load, which clears the
  // data-theme attribute the inline script set. Re-apply it here so dev
  // stays in sync with prod (see the Next.js "preventing flash" guide).
  useLayoutEffect(() => {
    const stored = getStoredTheme();
    if (stored) document.documentElement.setAttribute("data-theme", stored);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
