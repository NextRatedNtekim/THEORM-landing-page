import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getDoc, legalDocs } from "@/lib/legal";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getDoc((await params).slug);
  return doc ? { title: doc.title, alternates: { canonical: `/legal/${doc.slug}` } } : {};
}

export default async function LegalPage({ params }: Props) {
  const doc = getDoc((await params).slug);
  if (!doc) notFound();
  const others = legalDocs.filter((d) => d.slug !== doc.slug);

  return (
    <div className="ruled-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-ink-soft hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to {siteConfig.name}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-medium text-ink">Legal</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Legal documents">
              {others.map((d) => (
                <Link key={d.slug} href={`/legal/${d.slug}`} className="focus-ring rounded-md text-ink-soft hover:text-primary-dark">
                  {d.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="max-w-2xl rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <h1 className="font-display text-4xl font-medium tracking-tight text-ink">{doc.title}</h1>
            <div className="mt-4 space-y-1 text-sm text-ink-faint">
              {doc.meta.map((m) => <p key={m}>{m}</p>)}
            </div>
            {doc.sections.map((s) => (
              <section key={s.h} className="mt-10">
                <h2 className="font-display text-xl font-medium text-ink">{s.h}</h2>
                {s.blocks.map((b, i) =>
                  b.t === "p" ? (
                    <p key={i} className="mt-3 leading-[1.75] text-ink-soft">{b.x}</p>
                  ) : (
                    <ul key={i} className="mt-3 list-disc space-y-2 pl-5 leading-[1.7] text-ink-soft marker:text-primary">
                      {b.x.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
