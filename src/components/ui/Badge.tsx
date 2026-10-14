import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "status" | "secondary";
  pulse?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  pulse = false,
  className,
  size = "md",
}: BadgeProps) {
  const base = "inline-flex items-center font-medium tracking-tight rounded-full transition-colors";

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  const variants = {
    default:
      "bg-white/90 dark:bg-slate-800 text-[#334155] dark:text-slate-200 border border-[#E2E8F0] dark:border-slate-700 shadow-2xs backdrop-blur-xs",
    outline:
      "bg-transparent text-[#64748B] dark:text-slate-400 border border-[#E2E8F0] dark:border-slate-700",
    secondary:
      "bg-[#F1F5F9] dark:bg-slate-800 text-[#334155] dark:text-slate-200 border border-transparent",
    status:
      "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60",
  };

  return (
    <span className={cn(base, sizeClasses[size], variants[variant], className)}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
