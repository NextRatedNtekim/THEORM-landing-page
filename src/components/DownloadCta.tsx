"use client";

import { motion } from "motion/react";
import { CalendarClock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { DownloadButton } from "./DownloadButton";
import Image from "next/image";
import Googlebatch from "@/asserts/googlebatch.png"
import PhoneSetup from "@/asserts/phone/15-cbt-setup.png";
import PhoneResults from "@/asserts/phone/17-cbt-results.png";

export function DownloadCta() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden panel-forest rounded-[2.5rem] px-6 py-14 text-center sm:px-16 sm:py-16"
      >
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary-light/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 80, rotate: -14 }}
          whileInView={{ opacity: 1, y: 0, rotate: -8 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="pointer-events-none absolute -bottom-36 left-4 hidden w-[190px] xl:block xl:left-10"
        >
          <Image src={PhoneSetup} alt="" sizes="190px" className="h-auto w-full drop-shadow-[0_30px_40px_rgba(8,14,3,0.55)]" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 80, rotate: 14 }}
          whileInView={{ opacity: 1, y: 0, rotate: 8 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="pointer-events-none absolute -bottom-36 right-4 hidden w-[190px] xl:block xl:right-10"
        >
          <Image src={PhoneResults} alt="" sizes="190px" className="h-auto w-full drop-shadow-[0_30px_40px_rgba(8,14,3,0.55)]" />
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm text-white">
            <CalendarClock className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            Launching {siteConfig.launchDateLabel}
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">
            Start practicing before the room fills up.
          </h2>
          <p className="mt-4 text-white/85">
            Reserve your spot now and we&apos;ll notify you the moment {siteConfig.name} is live on
            the Play Store.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <DownloadButton className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-primary-dark transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Get Theorem for Android
            </DownloadButton>
            <div className="w-40 opacity-90">
              {/* <ImagePlaceholder
                label="Get it on Google Play badge (official Play Store asset)"
                tone="inverted"
                className="h-12 w-full"
              /> */}
              <Image src={Googlebatch} alt="Google Batch" />
              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
