"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site-config";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

export function Team() {
  return (
    <section id="team" className="bg-paper-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Meet the people behind Theorem.
          </h2>
          <p className="mt-4 text-ink-soft">
            A small team building the study tool we wished we had before our own JUPEB exams.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {siteConfig.team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="group"
            >
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0 round 28px)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0 round 28px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.12, ease }}
                className="relative aspect-[4/4.5] overflow-hidden rounded-[28px] bg-gradient-to-br from-primary-light/50 via-paper-deep to-primary/30"
              >
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-display text-8xl text-primary-dark/40 transition-transform duration-700 group-hover:scale-110">
                    {m.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                )}
              </motion.div>
              <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink">{m.name}</h3>
              <p className="mt-1 text-lg text-ink-soft">{m.role}</p>
              <div className="mt-4 flex gap-4 text-primary-dark">
                <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on X`} className="focus-ring rounded-md transition-transform hover:-translate-y-0.5 hover:text-primary"><XIcon /></a>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="focus-ring rounded-md transition-transform hover:-translate-y-0.5 hover:text-primary"><InIcon /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
