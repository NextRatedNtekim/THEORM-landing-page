"use client";

import { useRef } from "react";
import Image from "next/image";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import Step1 from "@/asserts/phone/01-home-tab.png";
import Step2 from "@/asserts/phone/08-course-outline.png";
import Step3 from "@/asserts/phone/16-cbt-active-question.png";
import Step4 from "@/asserts/phone/20-analytics-overview.png";

const steps = [
  {
    number: "01",
    title: "Download and set up your profile",
    description: "Install Theorem, tell it which JUPEB subjects you're taking, and you're ready to start.",
    alt: "Theorem home screen with study streak and quick access",
    src: Step1,
  },
  {
    number: "02",
    title: "Choose a subject and a year",
    description:
      "Every past question is organized by subject first, then by year -- so you practice full papers, not a random mix.",
    alt: "Course outline screen for Biology",
    src: Step2,
  },
  {
    number: "03",
    title: "Sit the paper in CBT mode",
    description:
      "Answer under timed, computer-based conditions that match the real JUPEB exam before any answer is revealed.",
    alt: "Timed CBT question screen with four options",
    src: Step3,
  },
  {
    number: "04",
    title: "Review, then track your progress",
    description:
      "See the correct answer and explanation for anything you missed, and watch your accuracy improve on the analytics tab.",
    alt: "Analytics overview with accuracy and attempts",
    src: Step4,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  // Scroll-linked progress for the mobile timeline line
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 70%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.3 });

  return (
    <MotionConfig reducedMotion="user">
      <section id="how-it-works" className="overflow-hidden bg-paper-deep/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="max-w-xl"
          >
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              From install to exam-ready, in four steps.
            </h2>
          </motion.div>

          <ol
            ref={listRef}
            className="relative mt-12 flex flex-col gap-14 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:mt-14 lg:grid-cols-4 lg:gap-x-6"
          >
            {/* Mobile timeline rail + scroll-drawn progress */}
            <span aria-hidden="true" className="absolute bottom-0 left-5 top-2 w-px bg-line-strong sm:hidden" />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: progress }}
              className="absolute bottom-0 left-5 top-2 w-px origin-top bg-primary sm:hidden"
            />

            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: (i % 4) * 0.08, ease }}
                className="group relative flex flex-col pl-14 sm:pl-0"
              >
                {/* Number badge (mobile timeline node) */}
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-surface font-display text-sm text-primary-dark shadow-sm sm:hidden"
                >
                  {step.number}
                </motion.span>

                {/* Text */}
                <div className="order-1 sm:order-2 sm:mt-6">
                  <span className="hidden font-display text-sm text-primary-dark sm:block">{step.number}</span>
                  <h3 className="font-display text-lg font-medium leading-snug text-ink sm:mt-2">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft sm:text-sm">{step.description}</p>
                </div>

                {/* Phone panel: phone rises into a soft card and is cropped at the bottom edge */}
                <div className="relative order-2 mt-6 h-[300px] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-primary-light/30 via-primary-light/10 to-surface sm:order-1 sm:mt-0 sm:h-[360px] lg:h-[380px]">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-light/50 blur-3xl"
                  />
                  <motion.div
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.8, delay: 0.15 + (i % 4) * 0.08, ease }}
                    className="absolute inset-x-0 top-7 mx-auto w-[190px] transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:w-[200px]"
                  >
                    <Image
                      src={step.src}
                      alt={step.alt}
                      sizes="200px"
                      className="h-auto w-full drop-shadow-[0_24px_30px_rgba(26,33,19,0.28)]"
                    />
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </MotionConfig>
  );
}