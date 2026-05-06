"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[data-reveal]")) as HTMLElement[];
    if (sections.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        }
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.01 },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return null;
}

