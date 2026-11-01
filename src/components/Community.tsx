"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const icons: Record<string, ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
      <path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.4L3 21z" />
      <path d="M9.2 8.6c.4 2.4 2.600 4.700 5.300 5.400l1.200-1.200-1.900-1-.9.7c-.9-.4-1.700-1.200-2.100-2.100l.7-.9-1-1.900-1.300 1z" />
    </svg>
  ),
  facebook: (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4.5" />
      <path d="M10 9.4v5.200l4.500-2.600z" fill="currentColor" />
    </svg>
  ),
  telegram: (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
    <path d="M21.5 3.2 2.9 10.4a.9.9 0 0 0 .05 1.7l4.6 1.6 1.8 5.7a.9.9 0 0 0 1.5.4l2.6-2.5 4.8 3.5a.9.9 0 0 0 1.4-.6l3.2-15.2a.9.9 0 0 0-1.4-1z" />
    <path d="m7.6 13.7 9.6-6.1" />
  </svg>
),
};

export function Community() {
  return (
    <section id="community" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Join the Theorem community.
        </h2>
        <p className="mt-4 text-ink-soft">Study tips, exam updates and announcements, wherever you already hang out.</p>
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-8">
        {siteConfig.socials.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label}: ${s.handle}`}
              className="focus-ring group flex w-28 flex-col items-center gap-3 rounded-2xl text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface text-primary-dark transition-[transform,background-color,color,box-shadow] duration-300 group-hover:-translate-y-1.5 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_14px_26px_-12px_rgba(63,90,25,0.6)]">
                {icons[s.id]}
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{s.label}</span>
                <span className="block text-xs text-ink-faint">{s.handle}</span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
