"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { DownloadButton } from "./DownloadButton";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#showcase", label: "Showcase" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="focus-ring rounded-md font-display text-lg font-medium tracking-tight text-ink"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring group relative rounded-md text-sm text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <DownloadButton className="focus-ring rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98] sm:px-5">
          Get the app
        </DownloadButton>
      </div>
    </motion.header>
  );
}
