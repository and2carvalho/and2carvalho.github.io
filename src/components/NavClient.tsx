"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeClient } from "@/components/ThemeClient";

type NavItem = { id: "research" | "experience" | "skills" | "contact"; label: string; href: string; hideOnMobile?: boolean };
type Labels = Record<NavItem["id"], string>;

export function NavClient({
  alternateHref,
  brand,
  labels,
  languageLabel,
  locale,
}: {
  alternateHref: string;
  brand: string;
  labels: Labels;
  languageLabel: string;
  locale: "pt" | "en";
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const navItems: NavItem[] = [
    { id: "research", label: labels.research, href: "#research" },
    { id: "experience", label: labels.experience, href: "#experience", hideOnMobile: true },
    { id: "skills", label: labels.skills, href: "#skills", hideOnMobile: true },
    { id: "contact", label: labels.contact, href: "#contact" },
  ];
  const navClass = useMemo(() => (open ? "nav-right open" : "nav-right"), [open]);

  useEffect(() => {
    const onHashOrScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      let current = "";
      for (const section of sections) if (window.scrollY >= section.offsetTop - 100) current = section.id;
      setActive(current);
    };
    window.addEventListener("scroll", onHashOrScroll, { passive: true });
    window.addEventListener("hashchange", onHashOrScroll);
    onHashOrScroll();
    return () => {
      window.removeEventListener("scroll", onHashOrScroll);
      window.removeEventListener("hashchange", onHashOrScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav aria-label={locale === "pt" ? "Navegação principal" : "Primary navigation"}>
      <div className="nav-inner">
        <a className="nav-brand" href={locale === "pt" ? "/" : "/en/"} onClick={closeMenu}>{brand}</a>
        <div className={navClass} id="navLinks">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={item.hideOnMobile ? "nav-hide" : undefined} onClick={closeMenu} aria-current={item.id === active ? "page" : undefined}>
              {item.label}
            </a>
          ))}
          <a className="language-switch" href={alternateHref} onClick={closeMenu} lang={languageLabel === "EN" ? "en" : "pt-BR"}>{languageLabel}</a>
          <ThemeClient locale={locale} />
        </div>
        <button className="hamburger" type="button" aria-label={open ? (locale === "pt" ? "Fechar navegação" : "Close navigation") : (locale === "pt" ? "Abrir navegação" : "Open navigation")} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

