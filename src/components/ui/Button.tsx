import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "subtle" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-xl focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

  const variants = {
    primary:
      "bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100 shadow-2xs hover:shadow-md hover:shadow-slate-900/10 dark:hover:shadow-black/30 focus-visible:ring-[#0F172A] dark:focus-visible:ring-white",
    secondary:
      "bg-white dark:bg-[#111827] text-[#0F172A] dark:text-slate-100 border border-[#E2E8F0] dark:border-slate-700 hover:bg-[#F8FAFC] dark:hover:bg-slate-800 hover:border-[#CBD5E1] dark:hover:border-slate-600 shadow-2xs hover:shadow-sm focus-visible:ring-[#334155] dark:focus-visible:ring-slate-400",
    subtle:
      "bg-[#F1F5F9] dark:bg-slate-800 text-[#334155] dark:text-slate-200 hover:bg-[#E2E8F0] dark:hover:bg-slate-700 hover:text-[#0F172A] dark:hover:text-white focus-visible:ring-[#334155] dark:focus-visible:ring-slate-400",
    outline:
      "border border-[#E2E8F0] dark:border-slate-700 text-[#334155] dark:text-slate-300 hover:border-[#334155] dark:hover:border-slate-400 hover:text-[#0F172A] dark:hover:text-white bg-transparent focus-visible:ring-[#334155] dark:focus-visible:ring-slate-400",
    white:
      "bg-white text-[#0F172A] hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-sm border border-slate-200/80 dark:border-slate-700 focus-visible:ring-white",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
