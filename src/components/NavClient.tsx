"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeClient } from "@/components/ThemeClient";

type NavItem = { label: string; href: string; hideOnMobile?: boolean };

const navItems: NavItem[] = [
  { label: "Experience", href: "#experience", hideOnMobile: true },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications", hideOnMobile: true },
  { label: "Education", href: "#education", hideOnMobile: true },
  { label: "Skills", href: "#skills", hideOnMobile: true },
  { label: "Contact", href: "#contact" },
];

export function NavClient({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const navClass = useMemo(() => (open ? "nav-right open" : "nav-right"), [open]);

  useEffect(() => {
    const onHashOrScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      let cur = "";
      for (const s of sections) {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      }
      setActive(cur);
    };

    window.addEventListener("scroll", onHashOrScroll, { passive: true });
    window.addEventListener("hashchange", onHashOrScroll);
    onHashOrScroll();
    return () => {
      window.removeEventListener("scroll", onHashOrScroll);
      window.removeEventListener("hashchange", onHashOrScroll);
    };
  }, []);

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-brand">{brand}</div>

        <div className={navClass} id="navLinks">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.hideOnMobile ? "nav-hide" : undefined}
              onClick={() => setOpen(false)}
              style={{
                color: item.href === `#${active}` ? "var(--primary)" : undefined,
              }}
            >
              {item.label}
            </a>
          ))}
          <ThemeClient />
        </div>

        <button
          className="hamburger"
          id="hamburger"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

