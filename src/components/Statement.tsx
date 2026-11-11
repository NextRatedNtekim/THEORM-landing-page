"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Big scroll-driven type band (the "WE INVEST. GROW" moment on Vaynex).
 * The line slides sideways as the section crosses the viewport.
 */
export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const x = useTransform(p, [0, 1], ["18%", "-38%"]);

  return (
    <section ref={ref} aria-labelledby="statement-title" className="px-4 py-10 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-mint-soft py-14 sm:py-20">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-light/40 blur-3xl"
          aria-hidden="true"
        />
        <h2 id="statement-title" className="sr-only">
          Practise, review, improve
        </h2>
        <motion.p
          aria-hidden="true"
          style={reduce ? undefined : { x }}
          className="relative whitespace-nowrap text-[clamp(3.5rem,13vw,10rem)] font-extrabold leading-none tracking-[-0.05em] text-forest"
        >
          Practise. Review.{" "}
          <span className="font-display font-light italic tracking-[-0.03em] text-primary">Improve.</span> Practise.
          Review. <span className="font-display font-light italic tracking-[-0.03em] text-primary">Improve.</span>
        </motion.p>
      </div>
    </section>
  );
}
