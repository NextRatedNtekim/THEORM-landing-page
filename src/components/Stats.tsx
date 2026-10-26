"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, motion } from "motion/react";

// TODO: swap these for verified numbers before launch -- they describe the content library, not user counts
const stats = [
  { value: 10, suffix: "+", label: "JUPEB subjects covered" },
  { value: 5000, suffix: "+", label: "Past questions to practise", format: true },
  { value: 100, suffix: "%", label: "Of core practice works offline" },
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
    <section aria-labelledby="stats-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 id="stats-title" className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Built for students who practise before they sit.
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface p-8"
          >
            <p className="font-display text-5xl font-medium tracking-tight text-primary-dark tabular-nums">
              <Counter to={s.value} suffix={s.suffix} format={s.format} />
            </p>
            <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
