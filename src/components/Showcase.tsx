"use client";

import { motion } from "framer-motion";
import { ScreenshotFrame } from "./ScreenshotFrame";
import Step1 from "@/asserts/step-01-home-tab.png";
import Step2 from "@/asserts/step-02-study-notes-subjects.png";
import Step3 from "@/asserts/step-03-cbt-active-question.png";
import Step4 from "@/asserts/step-04-analytics-overview.png";
import Extra from "@/asserts/extra-cbt-practice-portrait-screenonly.png";

const shots = [
  { src: Step1, alt: "Theorem home tab", caption: "Home" },
  { src: Step2, alt: "Study notes by subject", caption: "Study notes" },
  { src: Step3, alt: "Active CBT question screen", caption: "CBT mode" },
  { src: Extra, alt: "Extra CBT practice screen", caption: "Practice" },
  { src: Step4, alt: "Analytics overview screen", caption: "Analytics" },
];

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          A closer look inside the app.
        </h2>
        <p className="mt-4 text-ink-soft">
          Every screen is built around one goal: get you from &ldquo;studying&rdquo; to
          &ldquo;exam-ready&rdquo; as fast as possible.
        </p>
      </div>

      <motion.div
        variants={row}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map(({ src, alt, caption }, i) => (
          <motion.figure
            key={caption}
            variants={rise}
            className="w-[62%] shrink-0 sm:w-[32%] lg:w-[19%]"
            whileHover={{ y: -6 }}
          >
            <ScreenshotFrame
              src={src}
              alt={alt}
              className="aspect-[9/19.5] w-full"
              priority={i === 0}
            />
            <figcaption className="mt-3 text-center text-sm font-medium text-ink-soft">
              {caption}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
