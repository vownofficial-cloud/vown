"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ViewportEdgeBlur } from "@/components/motion/ScrollMotion";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main id="admin-root">{children}</main>;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ViewportEdgeBlur />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
