import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "@/components/brand/Logo";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Logo size="lg" />
            <p>
              Websites, connected tools,
              <br />
              and a little less manual work.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="footer-email"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            {siteConfig.contactEmail}
            <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VOwn</span>
          <span>Built with a reason.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
