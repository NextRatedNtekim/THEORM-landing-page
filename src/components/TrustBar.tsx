"use client";

import { motion } from "motion/react";
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

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {[...points, ...points].map(({ icon: Icon, label }, i) => (
        <li key={`${label}-${i}`} className="flex shrink-0 items-center gap-2.5 text-[0.95rem] font-medium text-ink-soft">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-primary-dark">
            <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export function TrustBar() {
  return (
    <section aria-label="Why students trust Theorem" className="overflow-hidden py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="group [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        <div
          className="marquee-track flex w-max group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "45s" }}
        >
          <Row />
          <Row hidden />
        </div>
      </motion.div>
    </section>
  );
}
