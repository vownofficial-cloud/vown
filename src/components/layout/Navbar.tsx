"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["hero", "services", "approach", "ventures", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-nav py-3.5 shadow-xs"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Logo variant="wordmark" size="md" showDomainBadge />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#E2E8F0]/80 shadow-2xs backdrop-blur-md">
              {siteConfig.navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full",
                      isActive
                        ? "text-[#0F172A] bg-slate-100/90 font-semibold"
                        : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50/70"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="text-xs px-2.5 py-1.5"
              >
                Talk
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#334155] hover:bg-slate-100 transition-colors border border-[#E2E8F0]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#F8FAFC]/98 backdrop-blur-xl pt-24 px-6 pb-8 md:hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] px-2 mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-2">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] text-base font-semibold text-[#0F172A] active:bg-slate-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#E2E8F0]">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
                icon={<MessageSquare className="w-4 h-4" />}
                iconPosition="left"
              >
                Start a Conversation
              </Button>
              <div className="text-center text-xs text-[#64748B]">
                Direct inquiry: <a href="mailto:admin@vown.site" className="text-[#0F172A] font-mono hover:underline">admin@vown.site</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
