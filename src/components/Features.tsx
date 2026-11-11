"use client";

import { motion } from "motion/react";
import {
  MonitorCheck,
  Layers,
  WifiOff,
  LineChart,
  BellRing,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: MonitorCheck,
    title: "Real CBT simulation",
    description:
      "Timed, computer-based practice that mirrors the actual JUPEB exam interface, so exam day feels familiar instead of foreign.",
  },
  {
    icon: Layers,
    title: "Past questions by subject and year",
    description:
      "Pick a subject, then a year, then work through that paper -- answer first, and Theorem reveals the correct answer and explanation after.",
  },
  {
    icon: WifiOff,
    title: "Learn offline, anywhere",
    description:
      "Download a subject once and practice without spending data -- on a bus, in a hostel with no signal, or anywhere study happens.",
  },
  {
    icon: LineChart,
    title: "Track your progress",
    description:
      "An analytics view of your accuracy and attempts across subjects, so you can see which papers still need work before you sit the real thing.",
  },
  {
    icon: BellRing,
    title: "Organized notifications",
    description:
      "Updates are grouped by category -- new past questions, exam reminders, account -- instead of one long, noisy feed.",
  },
  {
    icon: GraduationCap,
    title: "Built for the JUPEB syllabus",
    description:
      "Every question set is scoped to the JUPEB curriculum, not a generic bank of unrelated exam content.",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cell = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl">
          Everything you need between now and results day.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Theorem replaces scattered PDFs and photocopied past questions with
          one focused app built around how JUPEB is actually examined.
        </p>
      </div>

      <motion.div
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {features.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={cell}
            whileHover={{ y: -6 }}
            className="flex flex-col gap-4 rounded-[1.75rem] border border-line bg-surface p-8 shadow-[0_24px_44px_-34px_rgba(63,90,25,0.5)] transition-shadow duration-300 hover:shadow-[0_34px_54px_-30px_rgba(63,90,25,0.6)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-primary-light/60 text-primary-dark">
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
