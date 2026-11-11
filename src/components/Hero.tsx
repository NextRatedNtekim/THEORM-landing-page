"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
} from "motion/react";
import {
  WifiOff,
  ListChecks,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Flame,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import HeroPhone from "@/asserts/phone/16-cbt-active-question.png";
import { DownloadButton } from "./DownloadButton";

const quickFacts = [
  { icon: WifiOff, label: "Works fully offline" },
  { icon: ListChecks, label: "Real CBT-style format" },
  { icon: GraduationCap, label: "All JUPEB subjects" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const column = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/**
 * Three stacked motion layers so the three kinds of movement never fight over
 * the same transform:
 *   outer  -> entrance (runs once on load)
 *   middle -> scroll-linked drift / tilt (driven by the hero's scroll progress)
 *   inner  -> idle float (loops forever)
 */
function FloatCard({
  className,
  scrollStyle,
  enterFrom,
  enterDelay,
  floatDistance,
  floatDuration,
  children,
}: {
  className: string;
  scrollStyle?: MotionStyle;
  enterFrom: { x: number; y: number };
  enterDelay: number;
  floatDistance: number;
  floatDuration: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: enterFrom.x, y: enterFrom.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, ease, delay: enterDelay }}
    >
      <motion.div style={scrollStyle}>
        <motion.div
          animate={{ y: [0, -floatDistance, 0] }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: enterDelay + 0.9 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Headline block fades and lifts away while the phone climbs into its place
  const textY = useTransform(p, [0, 0.3], [0, -60]);
  const textOpacity = useTransform(p, [0, 0.24], [1, 0]);

  // Phone rises and grows slightly
  const phoneY = useTransform(p, [0, 0.5], [30, -70]);
  const phoneScale = useTransform(p, [0, 0.5], [0.95, 1.04]);

  // Side cards drift outward and tilt further, like the Vaynex reference
  const leftX = useTransform(p, [0, 0.5], [0, -64]);
  const leftRotate = useTransform(p, [0, 0.5], [-7, -13]);
  const rightX = useTransform(p, [0, 0.5], [0, 64]);
  const rightRotate = useTransform(p, [0, 0.5], [6, 12]);

  // Concentric rings breathe outward with scroll
  const ringScale = useTransform(p, [0, 0.6], [1, 1.12]);

  const still = reduce ? true : false;

  return (
    <section
      ref={ref}
      id="top"
      className="hero-bg relative -mt-[76px] overflow-hidden pt-[calc(76px+3.5rem)] sm:pt-[calc(76px+5rem)]"
    >
      {/* Answer-sheet ruling + lime glow keep the original paper motif alive on the dark ground */}
      <div className="ruled-bg-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          variants={column}
          initial="hidden"
          animate="show"
          style={still ? undefined : { y: textY, opacity: textOpacity }}
        >
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wide text-primary-dark shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            Launching for Android &middot; {siteConfig.launchDateLabel}
          </motion.span>

          <motion.h1
            variants={rise}
            className="mx-auto mt-7 max-w-5xl text-[2.5rem] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem]"
          >
            Walk into your JUPEB exam
            <span className="block font-display text-[1.04em] font-light italic tracking-[-0.02em] text-mint">
              already knowing the room.
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Theorem turns years of JUPEB past questions into focused, offline
            practice. Sit mock exams in the exact CBT format you&apos;ll face
            on the day, then see exactly where to study next.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-primary-dark shadow-[0_14px_30px_-12px_rgba(0,0,0,0.55)] transition-transform hover:scale-[1.03] active:scale-[0.98]">
              Get Theorem for Android
            </DownloadButton>
            <a
              href="#how-it-works"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-[0.98]"
            >
              See how it works
            </a>
          </motion.div>

          <motion.dl variants={rise} className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {quickFacts.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon className="h-4 w-4 text-primary-light" strokeWidth={1.75} aria-hidden="true" />
                <dt className="sr-only">Highlight</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Stage: phone + orbiting cards. The section clips the phone at the bottom edge. */}
        <div className="relative mx-auto mt-12 h-[430px] w-full max-w-5xl sm:mt-16 sm:h-[560px]">
          {/* Concentric rings behind the phone */}
          <motion.div
            aria-hidden="true"
            style={still ? undefined : { scale: ringScale }}
            className="pointer-events-none absolute inset-x-0 top-10 mx-auto aspect-square"
          >
            {[
              { size: "w-[820px]", delay: 0.5, opacity: "border-white/20" },
              { size: "w-[1140px]", delay: 0.65, opacity: "border-white/12" },
              { size: "w-[1500px]", delay: 0.8, opacity: "border-white/[0.07]" },
            ].map((ring) => (
              <motion.span
                key={ring.size}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease, delay: ring.delay }}
                className={`absolute left-1/2 top-0 aspect-square -translate-x-1/2 rounded-full border ${ring.size} ${ring.opacity}`}
              />
            ))}
          </motion.div>

          {/* Phone */}
          <motion.div
            className="absolute inset-x-0 top-0 z-10 mx-auto w-[236px] sm:w-[300px]"
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
          >
            <motion.div style={still ? undefined : { y: phoneY, scale: phoneScale }}>
              <Image
                src={HeroPhone}
                alt="Theorem CBT practice screen showing a timed question with four options"
                priority
                sizes="(min-width: 640px) 300px, 236px"
                className="h-auto w-full drop-shadow-[0_40px_60px_rgba(8,14,3,0.55)]"
              />
            </motion.div>
          </motion.div>

          {/* Left card: study streak (matches the Home screen) */}
          <FloatCard
            className="absolute left-0 top-[170px] z-20 hidden w-[230px] sm:block lg:left-[3%]"
            scrollStyle={still ? { rotate: -7 } : { x: leftX, rotate: leftRotate }}
            enterFrom={{ x: -60, y: 40 }}
            enterDelay={0.75}
            floatDistance={10}
            floatDuration={6}
          >
            <div className="glass-card rounded-3xl p-4 text-left">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-light/50 text-primary-dark">
                  <Flame className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-ink-faint">Study streak</p>
                  <p className="font-display text-xl font-medium text-ink">12 days</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1.4, ease, delay: 1.5 }}
                />
              </div>
              <p className="mt-2 text-xs text-ink-soft">Keep it going</p>
            </div>
          </FloatCard>

          {/* Right card: continue learning (matches the Home screen) */}
          <FloatCard
            className="absolute right-0 top-[120px] z-20 hidden w-[250px] sm:block lg:right-[3%]"
            scrollStyle={still ? { rotate: 6 } : { x: rightX, rotate: rightRotate }}
            enterFrom={{ x: 60, y: 40 }}
            enterDelay={0.9}
            floatDistance={8}
            floatDuration={5}
          >
            <div className="glass-card rounded-3xl p-4 text-left">
              <p className="font-mono text-[0.68rem] tracking-wide text-ink-faint">Continue learning</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary text-forest">
                  <BookOpen className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-lg font-medium text-ink">Biology</p>
                  <p className="text-xs text-ink-soft">Functions of nutrients</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                  initial={{ width: 0 }}
                  animate={{ width: "62%" }}
                  transition={{ duration: 1.4, ease, delay: 1.7 }}
                />
              </div>
            </div>
          </FloatCard>

          {/* Accuracy chip: sells analytics at a glance, visible on every screen size */}
          <FloatCard
            className="absolute bottom-24 left-0 z-20 sm:bottom-28 sm:left-[18%]"
            scrollStyle={still ? undefined : { x: leftX }}
            enterFrom={{ x: -24, y: 16 }}
            enterDelay={1.1}
            floatDistance={6}
            floatDuration={4.5}
          >
            <div className="glass-card flex items-center gap-2 rounded-2xl px-3.5 py-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light/40 text-primary-dark">
                <TrendingUp className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-sm font-semibold text-ink">Accuracy +18%</p>
                <p className="text-xs text-ink-faint">since last attempt</p>
              </div>
            </div>
          </FloatCard>
        </div>
      </div>

      {/* Fade the cropped phone into the page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-b from-transparent via-mint/70 to-paper"
        aria-hidden="true"
      />
    </section>
  );
}
