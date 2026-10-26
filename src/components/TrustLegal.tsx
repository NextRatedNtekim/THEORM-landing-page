"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, FileText, RotateCcw, BookOpenCheck, ArrowUpRight, type LucideIcon } from "lucide-react";
import { getDoc, featuredSlugs } from "@/lib/legal";

const meta: Record<string, { icon: LucideIcon; blurb: string }> = {
  "privacy-policy": { icon: ShieldCheck, blurb: "What we collect, why, and how to ask us to delete it." },
  "terms-of-service": { icon: FileText, blurb: "The ground rules for using Theorem and premium access." },
  "refund-cancellation-policy": { icon: RotateCcw, blurb: "How premium payments, expiry and refund requests work." },
  "educational-disclaimer": { icon: BookOpenCheck, blurb: "Theorem is a study aid. Here is what that means for results." },
};

export function TrustLegal() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Clear about your data, your money and our limits.
        </h2>
        <p className="mt-4 text-ink-soft">
          Payments run through Paystack, and you can delete your account from inside the app. Read the full policies below.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {featuredSlugs.map((slug, i) => {
          const doc = getDoc(slug);
          if (!doc) return null;
          const { icon: Icon, blurb } = meta[slug];
          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/legal/${slug}`}
                className="focus-ring group flex h-full items-start gap-5 rounded-3xl border border-line bg-surface p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(63,90,25,0.45)]"
              >
                <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium text-ink">{doc.title}</span>
                  <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-soft">{blurb}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
