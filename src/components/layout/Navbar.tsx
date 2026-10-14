"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
          isScrolled
            ? "glass-nav py-3.5 shadow-xs"
            : "bg-[#F8FAFC]/90 dark:bg-[#090D16]/90 backdrop-blur-xs py-4 sm:py-5 border-b border-[#E2E8F0]/50 dark:border-slate-800/60"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Logo variant="wordmark" size="md" href="/" showDomainBadge />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs">
              {siteConfig.navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full",
                      active
                        ? "text-[#0F172A] dark:text-white bg-slate-100 dark:bg-slate-800 font-semibold"
                        : "text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side CTAs: Theme Toggle + Let's Talk Button */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Talk
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#334155] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-[#E2E8F0] dark:border-slate-700"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress bar fixed directly below navigation bar */}
        <ScrollProgress />
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#F8FAFC]/98 dark:bg-[#090D16]/98 backdrop-blur-xl pt-24 px-6 pb-8 md:hidden flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] uppercase font-mono tracking-wider text-[#94A3B8] px-1 mb-2">
                <span>Menu</span>
                <span>vown.site</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                {siteConfig.navItems.map((item) => {
                  const active = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3.5 rounded-xl border text-base transition-colors",
                        active
                          ? "bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] border-[#0F172A] dark:border-white font-semibold"
                          : "bg-white dark:bg-[#111827] text-[#0F172A] dark:text-slate-200 border-[#E2E8F0] dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={cn("w-4 h-4", active ? "opacity-80" : "text-[#64748B] dark:text-slate-400")}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="space-y-3 pt-6 border-t border-[#E2E8F0] dark:border-slate-800">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Conversation
              </Button>
              <div className="text-center text-xs text-[#64748B] dark:text-slate-400">
                Direct email:{" "}
                <a
                  href="mailto:admin@vown.site"
                  className="text-[#0F172A] dark:text-white font-mono hover:underline"
                >
                  admin@vown.site
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
