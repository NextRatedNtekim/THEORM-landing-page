"use client";

import { motion } from "framer-motion";
import { ShieldCheck, WifiOff, Timer, BookOpenCheck, type LucideIcon } from "lucide-react";

type Point = {
  icon: LucideIcon;
  label: string;
};

const points: Point[] = [
  { icon: BookOpenCheck, label: "Real JUPEB past questions" },
  { icon: Timer, label: "Timed CBT-style mock exams" },
  { icon: WifiOff, label: "No data needed once downloaded" },
  { icon: ShieldCheck, label: "Secure checkout via Paystack" },
];

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function TrustBar() {
  return (
    <section aria-label="Why students trust Theorem" className="border-y border-line bg-surface/60">
      <motion.div
        variants={row}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 sm:px-6"
      >
        {points.map(({ icon: Icon, label }) => (
          <motion.div key={label} variants={item} className="flex items-center gap-2 text-sm text-ink-soft">
            <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
