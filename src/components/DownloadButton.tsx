"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Rocket, Bell, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type DownloadButtonProps = {
  className: string;
  children: ReactNode;
  icon?: boolean;
};

/**
 * Drop-in replacement for a raw "Get the app" link. Renders the same way
 * everywhere it's used (Navbar, Hero, Pricing, Footer, final CTA) and opens
 * a shared "coming soon" modal instead of following a dead Play Store URL
 * until siteConfig.playStoreUrl is live.
 */
export function DownloadButton({ className, children, icon = false }: DownloadButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {icon && <Smartphone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />}
        {children}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="download-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative w-full max-w-sm rounded-[2rem] bg-surface p-8 text-center shadow-[0_40px_80px_-30px_rgba(26,33,19,0.45)]"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="focus-ring absolute right-4 top-4 rounded-full p-1.5 text-ink-faint transition-colors hover:bg-paper-deep hover:text-ink"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>

              <motion.div
                initial={{ scale: 0.6, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white"
              >
                <Rocket className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </motion.div>

              <h3 id="download-modal-title" className="mt-5 font-display text-xl font-medium text-ink">
                Almost there
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {siteConfig.name} lands on the Google Play Store on{" "}
                <span className="font-semibold text-primary-dark">{siteConfig.launchDateLabel}</span>.
                Check back then, or drop your email so we can ping you the moment it&apos;s live.
              </p>

              <form
                className="mt-6 flex flex-col gap-2 sm:flex-row"
                onSubmit={(event) => event.preventDefault()}
              >
                <label htmlFor="notify-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="notify-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-full border border-line-strong bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                />
                <button
                  type="submit"
                  className="focus-ring inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98]"
                >
                  <Bell className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                  Notify me
                </button>
              </form>

              <p className="mt-4 text-xs text-ink-faint">Android first. No spam, just a launch-day ping.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
