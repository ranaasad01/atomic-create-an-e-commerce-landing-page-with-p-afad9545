"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Zap, Camera as Instagram, MessageCircle as Twitter } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const footerItems = t.raw("footer") as {
    heading: string;
    body: string;
    links: { label: string; href: string; key: string }[];
  };
  const pathname = usePathname();

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function getLinkHref(href: string) {
    if (href.startsWith("#") && pathname !== "/") {
      return "/" + href;
    }
    return href;
  }

  const shopLinks = [
    { label: "New Arrivals", href: "#product-grid" },
    { label: "Best Sellers", href: "#product-grid" },
    { label: "Sale", href: "#category-filter" },
  ];

  const helpLinks = [
    { label: "Track My Order", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Sizing Guide", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const companyLinks = [
    { label: "About Nova Shop", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "Twitter / X", href: "#", icon: Twitter },
  ];

  return (
    <footer className="bg-[var(--surface-alt)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center shadow-[0_0_12px_rgba(233,69,96,0.4)] group-hover:shadow-[0_0_20px_rgba(233,69,96,0.6)] transition-all duration-300">
                <Zap className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span
                className="text-lg font-bold text-[var(--foreground)]"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                {BRAND.name}
              </span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs mb-6">
              Bold style for bold people. Nova Shop is your destination for contemporary fashion that does not compromise on quality or attitude.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3
              className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3
              className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)]">
            © 2024 Nova Shop. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Bold style for bold people.
          </p>
        </div>
      </div>
    </footer>
  );
}