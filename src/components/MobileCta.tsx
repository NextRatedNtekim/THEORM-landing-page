"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DownloadButton } from "./DownloadButton";

// Sticky thumb-reach CTA on phones, shown once the hero has scrolled away
export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 md:hidden"
        >
          {/* Solid background so text stays readable over any content */}
          <DownloadButton className="focus-ring block w-full rounded-full bg-primary-dark px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(26,33,19,0.55)] active:scale-[0.98]">
            Get the app on Android
          </DownloadButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}