"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, motion } from "motion/react";

// TODO: swap these for verified numbers before launch -- they describe the content library, not user counts
const stats = [
  { value: 20, suffix: "+", label: "JUPEB subjects covered", tag: "Subjects", tilt: -2.5, dark: false },
  { value: 30000, suffix: "+", label: "Past questions to practise", format: true, tag: "Questions", tilt: 1.5, dark: true },
  { value: 100, suffix: "%", label: "Of core practice works offline", tag: "Offline", tilt: -1.5, dark: false },
];

function Counter({ to, suffix, format }: { to: number; suffix: string; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        el.textContent = (format ? n.toLocaleString("en-NG") : String(n)) + suffix;
      },
    });
    return () => c.stop();
  }, [inView, to, suffix, format]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 id="stats-title" className="max-w-xl text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl">
        Built for students who practise before they sit.
      </h2>
      <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: s.dark ? 18 : 0, rotate: s.tilt }}
            whileHover={{ y: s.dark ? 10 : -8, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={
              s.dark
                ? "panel-forest rounded-[2rem] p-8 text-white shadow-[0_40px_70px_-34px_rgba(21,32,8,0.7)]"
                : "rounded-[2rem] border border-white bg-gradient-to-br from-mint-soft to-surface p-8 shadow-[0_30px_60px_-36px_rgba(63,90,25,0.45)]"
            }
          >
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.68rem] tracking-wide ${
                s.dark ? "bg-white/15 text-white" : "bg-mint text-primary-dark"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${s.dark ? "bg-primary-light" : "bg-primary"}`} aria-hidden="true" />
              {s.tag}
            </span>
            <p
              className={`mt-8 text-6xl font-bold tracking-[-0.04em] tabular-nums ${
                s.dark ? "text-white" : "text-forest"
              }`}
            >
              <Counter to={s.value} suffix={s.suffix} format={s.format} />
            </p>
            <p className={`mt-3 text-sm ${s.dark ? "text-white/80" : "text-ink-soft"}`}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
