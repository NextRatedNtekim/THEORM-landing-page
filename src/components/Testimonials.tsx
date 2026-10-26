"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// Placeholder quotes from the private beta cohort -- swap in real
// screenshots/quotes (with permission) once you have them post-launch.
const testimonials: Testimonial[] = [
  {
    quote:
      "Practicing in actual CBT format took the fear out of exam day. I knew exactly what to expect before I sat down.",
    name: "Amaka O.",
    role: "JUPEB candidate, Biology track",
    initials: "AO",
  },
  {
    quote:
      "Being able to download a subject and practice on the bus with no data was the whole reason I kept using it.",
    name: "Tunde A.",
    role: "JUPEB candidate, Physics track",
    initials: "TA",
  },
  {
    quote:
      "The analytics tab showed me exactly which subject was dragging my average down. I fixed it two weeks before exams.",
    name: "Chiamaka N.",
    role: "JUPEB candidate, Chemistry track",
    initials: "CN",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            From our private beta cohort.
          </h2>
          <p className="mt-4 text-ink-soft">
            A small group of JUPEB candidates tested Theorem before launch. Here&apos;s what stuck with them.
          </p>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={rise}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl border border-line bg-surface p-7"
            >
              <Quote className="h-6 w-6 text-primary-light" strokeWidth={1.5} aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light/40 text-sm font-semibold text-primary-dark">
                  {t.initials}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-medium text-ink">{t.name}</span>
                  <span className="block text-xs text-ink-faint">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
