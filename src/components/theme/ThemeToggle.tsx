"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-xl transition-all duration-200 border cursor-pointer select-none",
        "bg-white border-[#E2E8F0] text-[#334155] hover:bg-slate-100 hover:text-[#0F172A]",
        "dark:bg-[#1E293B] dark:border-slate-700/80 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#334155] dark:focus-visible:ring-slate-400",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {mounted ? (
          isDark ? (
            <Sun className="w-4 h-4 transition-transform duration-200 rotate-0 scale-100 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 transition-transform duration-200 rotate-0 scale-100 text-[#334155]" />
          )
        ) : (
          <div className="w-4 h-4" />
        )}
      </div>
    </button>
  );
}
