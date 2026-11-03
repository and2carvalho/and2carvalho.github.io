"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia?.("(prefers-color-scheme:dark)").matches ? "dark" : "light";
}

export function ThemeClient({ locale }: { locale: "pt" | "en" }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const label = useMemo(() => {
    if (locale === "pt") return theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro";
    return theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }, [locale, theme]);
  const glyph = theme === "dark" ? "☀" : "☾";

  return <button className="theme-toggle" aria-label={label} title={label} type="button" onClick={() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }}>{glyph}</button>;
}

