import Link from "next/link";
import { WifiOff, ListChecks, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ImagePlaceholder } from "./ImagePlaceholder";

const quickFacts = [
  { icon: WifiOff, label: "Works fully offline" },
  { icon: ListChecks, label: "Real CBT-style format" },
  { icon: GraduationCap, label: "All JUPEB subjects" },
];

export function Hero() {
  return (
    <section id="top" className="ruled-bg relative overflow-hidden pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-line-strong bg-surface/70 px-3 py-1 text-sm text-ink-soft">
            Launching for Android &middot; November 2026
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Walk into your JUPEB exam already knowing the room.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Theorem turns years of JUPEB past questions into focused, offline
            practice. Sit mock exams in the exact CBT format you&apos;ll face
            on the day, then see exactly where to study next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.playStoreUrl}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get Theorem for Android
            </Link>
            <Link
              href="#how-it-works"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary-dark"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {quickFacts.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-ink-soft">
                <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <dt className="sr-only">Highlight</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[320px]">
          <div className="glass rounded-[2.5rem] p-3 shadow-[0_30px_60px_-30px_rgba(26,33,19,0.35)]">
            <div className="overflow-hidden rounded-[2rem] bg-surface">
              <ImagePlaceholder
                label="App screenshot: CBT practice screen (portrait, 9:19.5)"
                className="aspect-[9/19.5] w-full rounded-none border-0"
              />
            </div>
          </div>
          <div
            className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary-light/40 blur-3xl sm:h-56 sm:w-56"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
