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
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
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
