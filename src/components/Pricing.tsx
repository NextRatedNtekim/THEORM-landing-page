"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { DownloadButton } from "./DownloadButton";

const freeIncludes = [
  "A sample of past questions per subject",
  "Standard practice mode",
  "Basic progress overview",
];

const premiumIncludes = [
  "Full past-question library, every subject and year",
  "Unlimited CBT-style mock exams",
  "Detailed analytics across all attempts",
  "Full offline access",
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Try it free. Upgrade when you&apos;re ready to go all in.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-3xl border border-line bg-surface p-8"
        >
          <h3 className="font-display text-xl font-medium text-ink">Free</h3>
          <p className="mt-1 text-sm text-ink-soft">Enough to see how Theorem works.</p>
          <p className="mt-6 font-display text-3xl font-medium text-ink">&#8358;0</p>
          <ul className="mt-6 flex flex-col gap-3">
            {freeIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="relative rounded-3xl border border-primary/40 bg-surface p-8 shadow-[0_20px_50px_-25px_rgba(92,125,38,0.45)]"
        >
          <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Full access
          </span>
          <h3 className="font-display text-xl font-medium text-ink">Premium</h3>
          <p className="mt-1 text-sm text-ink-soft">Everything you need through to results day.</p>
          <p className="mt-6 flex items-baseline gap-2 font-display text-3xl font-medium text-ink">
            {siteConfig.price.amount}
            <span className="font-body text-base font-normal text-ink-soft">
              / {siteConfig.price.period}
            </span>
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {premiumIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <DownloadButton className="focus-ring mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98]">
            Get Theorem for Android
          </DownloadButton>
          <p className="mt-3 text-center text-xs text-ink-faint">
            Secure checkout via {siteConfig.price.provider}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
