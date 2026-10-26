import Link from "next/link";
import { legalDocs } from "@/lib/legal";
import { siteConfig } from "@/lib/site-config";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { DownloadButton } from "./DownloadButton";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <span className="font-display text-lg font-medium text-ink">{siteConfig.name}</span>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{siteConfig.description}</p>

            <DownloadButton className="focus-ring mt-6 inline-block rounded-lg">
              <ImagePlaceholder
                label="Get it on Google Play badge (official Play Store asset)"
                className="h-14 w-48 justify-center"
              />
            </DownloadButton>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:flex sm:gap-16" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-ink">Product</span>
              <Link href="#features" className="focus-ring rounded-md text-ink-soft hover:text-ink">Features</Link>
              <Link href="#how-it-works" className="focus-ring rounded-md text-ink-soft hover:text-ink">How it works</Link>
              <Link href="#showcase" className="focus-ring rounded-md text-ink-soft hover:text-ink">Showcase</Link>
              <Link href="#pricing" className="focus-ring rounded-md text-ink-soft hover:text-ink">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-ink">Support</span>
              <Link href="#faq" className="focus-ring rounded-md text-ink-soft hover:text-ink">FAQ</Link>
              <Link href="#team" className="focus-ring rounded-md text-ink-soft hover:text-ink">Team</Link>
              <Link href={`mailto:${siteConfig.email}`} className="focus-ring rounded-md text-ink-soft hover:text-ink">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-ink">Legal</span>
              {legalDocs.filter((d) => !["cookie-policy", "support-contact-page-copy"].includes(d.slug)).map((d) => (
                <Link key={d.slug} href={`/legal/${d.slug}`} className="focus-ring rounded-md text-ink-soft hover:text-ink">{d.title}</Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Not affiliated with JUPEB or any university admissions board.</p>
        </div>
      </div>
    </footer>
  );
}
