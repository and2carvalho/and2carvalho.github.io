"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia?.("(prefers-color-scheme:dark)").matches ? "dark" : "light";
}

export function ThemeClient() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const init = getInitialTheme();
    setTheme(init);
    document.documentElement.setAttribute("data-theme", init);
  }, []);

  const label = useMemo(() => (theme === "dark" ? "Switch to light theme" : "Switch to dark theme"), [theme]);
  const glyph = useMemo(() => (theme === "dark" ? "☀" : "☾"), [theme]);

  return (
    <button
      className="theme-toggle"
      aria-label={label}
      type="button"
      onClick={() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        window.localStorage.setItem("theme", next);
      }}
    >
      {glyph}
    </button>
  );
}

