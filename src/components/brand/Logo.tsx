"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo({
  size = "md",
  href = "/",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  variant?: string;
  showDomainBadge?: boolean;
}) {
  const pathname = usePathname();
  const width = size === "lg" ? 150 : size === "sm" ? 90 : 112;

  const handleClick = (e: React.MouseEvent) => {
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <Link
      href={href}
      scroll={true}
      onClick={handleClick}
      aria-label="VOwn home"
      className={`brand-logo ${className}`}
    >
      <Image
        src="/brand/vown-wordmark.png"
        width={width}
        height={Math.round((width * 387) / 1159)}
        alt="VOwn"
        priority
      />
    </Link>
  );
}
