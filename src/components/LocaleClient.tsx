"use client";

import { useEffect } from "react";

export function LocaleClient({ locale }: { locale: "pt" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  return null;
}
