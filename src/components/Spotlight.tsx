"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { TrendingDown, Target, MessageSquareText, Sparkles } from "lucide-react";
import AnalyticsPhone from "@/asserts/phone/21-analytics-topics.png";
import { DownloadButton } from "./DownloadButton";

const ease = [0.22, 1, 0.36, 1] as const;

const rows = [
  {
    icon: TrendingDown,
    title: "Weak topics, ranked",
    description: "See which topics cost you the most marks, so your next session starts where it counts.",
  },
  {
    icon: Target,
    title: "Accuracy by subject",
    description: "Track attempts and accuracy across every subject as your practice adds up.",
  },
  {
    icon: MessageSquareText,
    title: "Explanations after every answer",
    description: "Answer first, then see the correct option and why it is right.",
  },
];

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const phoneY = useTransform(p, [0, 0.5, 1], [90, 0, -40]);
  const chipY = useTransform(p, [0, 1], [30, -50]);

  return (
    <section ref={ref} id="analytics" aria-labelledby="spotlight-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        {/* Phone stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="panel-forest relative h-[440px] overflow-hidden rounded-[2.25rem] sm:h-[520px] lg:h-auto lg:min-h-[520px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-light/40 blur-3xl"
          />
          <motion.span
            style={reduce ? undefined : { y: chipY }}
            className="glass-card absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-ink"
          >
            <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.9} aria-hidden="true" />
            Weak topics found
          </motion.span>
          <motion.div
            style={reduce ? undefined : { y: phoneY }}
            className="absolute inset-x-0 top-24 mx-auto w-[240px] sm:w-[270px]"
          >
            <Image
              src={AnalyticsPhone}
              alt="Theorem analytics screen with the weakest and strongest topics"
              sizes="270px"
              className="h-auto w-full drop-shadow-[0_30px_40px_rgba(8,14,3,0.55)]"
            />
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="flex flex-col justify-center rounded-[2.25rem] border border-line bg-surface p-7 shadow-[0_30px_60px_-40px_rgba(63,90,25,0.5)] sm:p-10"
        >
          <h2 id="spotlight-title" className="text-3xl font-bold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
            Know where you stand,{" "}
            <span className="font-display font-light italic text-primary-dark">before the exam does.</span>
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Every attempt feeds your analytics, so you always know what to revise next.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {rows.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 4 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-mint-soft p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary-dark shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <DownloadButton className="focus-ring mt-8 inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98]">
            Start practising
          </DownloadButton>
        </motion.div>
      </div>
    </section>
  );
}
