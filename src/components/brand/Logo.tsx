import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "wordmark" | "primary" | "lockup";
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  showDomainBadge?: boolean;
}

export function Logo({
  variant = "wordmark",
  className,
  size = "md",
  href = "#hero",
  showDomainBadge = false,
}: LogoProps) {
  // Dimension mappings keeping exact native proportions
  // Wordmark native: 1159 x 387 (~ 2.99:1)
  // Primary logo: 1254 x 1254 (1:1)
  
  const sizes = {
    sm: {
      wordmark: { width: 90, height: 30 },
      primary: { width: 32, height: 32 },
    },
    md: {
      wordmark: { width: 114, height: 38 },
      primary: { width: 40, height: 40 },
    },
    lg: {
      wordmark: { width: 150, height: 50 },
      primary: { width: 56, height: 56 },
    },
  };

  const currentSize = sizes[size];

  const content = (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {variant === "primary" ? (
        <div className="relative flex items-center justify-center">
          <Image
            src="/brand/vown-primary-logo.png"
            alt="VOwn Logo"
            width={currentSize.primary.width}
            height={currentSize.primary.height}
            className="w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </div>
      ) : variant === "lockup" ? (
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs p-1">
            <Image
              src="/brand/vown-primary-logo.png"
              alt="VOwn Mark"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <Image
            src="/brand/vown-wordmark.png"
            alt="VOwn"
            width={currentSize.wordmark.width * 0.85}
            height={currentSize.wordmark.height * 0.85}
            className="w-auto h-auto object-contain"
            priority
          />
        </div>
      ) : (
        <div className="relative flex items-center">
          <Image
            src="/brand/vown-wordmark.png"
            alt="VOwn"
            width={currentSize.wordmark.width}
            height={currentSize.wordmark.height}
            className="w-auto h-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
            priority
          />
        </div>
      )}

      {showDomainBadge && (
        <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-tight bg-[#E2E8F0]/70 text-[#475569] border border-[#CBD5E1]/60">
          .site
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#334155] rounded-md transition-opacity"
        aria-label="VOwn Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
