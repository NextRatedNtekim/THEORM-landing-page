"use client";

import { motion } from "framer-motion";
import { WifiOff, ListChecks, GraduationCap, Sparkles, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { DownloadButton } from "./DownloadButton";

const quickFacts = [
  { icon: WifiOff, label: "Works fully offline" },
  { icon: ListChecks, label: "Real CBT-style format" },
  { icon: GraduationCap, label: "All JUPEB subjects" },
];

const column = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="ruled-bg relative overflow-hidden pt-14 sm:pt-20">
      {/* Ambient decorative accents -- echoes the loose ink-swirl motifs on
          Lunes / Daylo without competing with the ruled-paper texture */}
      <motion.svg
        className="pointer-events-none absolute left-[6%] top-24 -z-10 h-12 w-12 text-primary/50 sm:h-16 sm:w-16"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        initial={{ opacity: 0, rotate: -12 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <path
          d="M6 34C6 34 16 12 28 14C40 16 24 30 30 38C36 46 52 30 56 18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>
      <div
        className="pointer-events-none absolute -left-24 top-1/3 -z-20 h-72 w-72 rounded-full bg-primary-light/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        <motion.div variants={column} initial="hidden" animate="show">
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/70 px-3 py-1 text-sm text-ink-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} aria-hidden="true" />
            Launching for Android &middot; {siteConfig.launchDateLabel}
          </motion.span>

          <motion.h1
            variants={rise}
            className="mt-6 max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Walk into your JUPEB exam already knowing the room.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            Theorem turns years of JUPEB past questions into focused, offline
            practice. Sit mock exams in the exact CBT format you&apos;ll face
            on the day, then see exactly where to study next.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DownloadButton className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98]">
              Get Theorem for Android
            </DownloadButton>
            <a
              href="#how-it-works"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary-dark active:scale-[0.98]"
            >
              See how it works
            </a>
          </motion.div>

          <motion.dl variants={rise} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {quickFacts.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-ink-soft">
                <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <dt className="sr-only">Highlight</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
          {/* Primary phone -- main CBT practice screen */}
          <motion.div
            className="glass relative z-10 mx-auto w-[62%] rounded-[2.5rem] p-3 shadow-[0_30px_60px_-30px_rgba(26,33,19,0.35)]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
              scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            <div className="overflow-hidden rounded-[2rem] bg-surface">
              <ImagePlaceholder
                label="App screenshot: CBT practice screen (portrait, 9:19.5)"
                className="aspect-[9/19.5] w-full rounded-none border-0"
              />
            </div>
          </motion.div>

          {/* Secondary phone -- analytics / progress, offset behind-right,
              mirroring the layered two-device hero on the reference sites */}
          <motion.div
            className="glass absolute right-0 top-16 z-0 w-[52%] rounded-[2.25rem] p-2.5 shadow-[0_24px_48px_-24px_rgba(26,33,19,0.3)]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
              scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
          >
            <div className="overflow-hidden rounded-[1.85rem] bg-surface">
              <ImagePlaceholder
                label="App screenshot: analytics / progress tab (portrait, 9:19.5)"
                className="aspect-[9/19.5] w-full rounded-none border-0"
              />
            </div>
          </motion.div>

          {/* Floating accuracy chip -- small proof-point that sells the
              analytics feature at a glance, animated in after the phones */}
          <motion.div
            className="glass absolute -left-4 bottom-10 z-20 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-[0_18px_36px_-20px_rgba(26,33,19,0.4)] sm:-left-8"
            initial={{ opacity: 0, x: -16, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/40 text-primary-dark">
              <TrendingUp className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Accuracy +18%</p>
              <p className="text-xs text-ink-faint">since last attempt</p>
            </div>
          </motion.div>

          <div
            className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary-light/40 blur-3xl sm:h-56 sm:w-56"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
