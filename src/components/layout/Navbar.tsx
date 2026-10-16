"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setOpen(false);
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="shell header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={(e) => handleNavClick(item.href, e)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/contact">
          Say hello <ArrowUpRight size={17} />
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={(e) => handleNavClick(item.href, e)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
