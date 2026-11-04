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
      "What I love about THEOREM is how it brings different learning resources together in one place. As a JUPEB student, finding the right materials and past questions wasn't always easy. Sometimes, you have to visit several or use different AI platforms before getting what you need. Having an app that makes these resources more accessible is definitely a great initiative. I believe it will make learning easier and save students a lot of time.",
    name: "Favour Etim.",
    role: "Medicine and Surgery, UNICAL",
    initials: "FE",
  },
  {
    quote:
      "One thing I have realised about JUPEB is that preparation goes beyond just attending lectures. You need consistent practice, access to good study materials and exposure to different questions. THEOREM provides an opportunity to have these resources readily available. I particularly like the idea of practising questions and testing my understanding before examinations. It is definitely something that can improve how students prepare.",
    name: "David Akpan",
    role: "Medicine and Surgery, UNIUYO",
    initials: "DA",
  },
  {
    quote:
      "THEOREM is na better idea, especially for guys wey dey prepare for JUPEB. Sometimes, e dey tire person because say you go dey go through different materials wey don scatter for your phone sef. E better pass all those other apps wey dey and e cheap sef. I think this one go help students become dey more consistent with their studies",
    name: "Miracle James",
    role: "Lakode Akintola University of Technology, MECHANICAL ENGINEERING ",
    initials: "MA",
  },
  {
    quote:
      "I think THEOREM will expose students to a lot of information they might not ordinarily come across. Not every student knows where to find resources or how to prepare adequately for JUPEB examinations. With the right materials and enough practice, students can identify their weaknesses and work on them. I believe this initiative has the potential to make a meaningful difference.",
 
    name: " Samuel David",
    role: "RADIOGRAPHY, Delta State University.",
    initials: "SD",
  },
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
