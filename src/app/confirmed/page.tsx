import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Landing spot for Supabase email-confirmation links. Not meant to be found
// via search, so it is noindex and left out of the sitemap.
export const metadata: Metadata = {
  title: "Email confirmed",
  robots: { index: false, follow: false },
  alternates: { canonical: "/confirmed" },
};

export default function ConfirmedPage() {
  return (
    <main className="ruled-bg flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
          <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
        </div>

        <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink">
          Email confirmed
        </h1>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Your {siteConfig.name} account is ready. Open the app and sign in with
          your email and password.
        </p>

        {/* Plain <a>: next/link is for web routes, this is an app deep link */}
        <a
          href="theorem://"
          className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98]"
        >
          <Smartphone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          Open {siteConfig.name.toUpperCase()}
        </a>

        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          Button not opening the app? Make sure {siteConfig.name} is installed
          on this phone, or open it manually from your home screen. If you
          confirmed on a computer, just open the app on your phone.
        </p>

        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm text-ink-soft hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to{" "}
          {siteConfig.name}
        </Link>
      </div>
    </main>
  );
}
