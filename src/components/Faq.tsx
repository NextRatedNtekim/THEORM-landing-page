import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "What is JUPEB, and who is Theorem for?",
    answer:
      "JUPEB (the Joint Universities Preliminary Examinations Board) runs a one-year programme that leads into direct entry admission at Nigerian universities. Theorem is built for students on that programme who need focused, exam-accurate practice.",
  },
  {
    question: "Does Theorem really work without internet?",
    answer:
      "Yes. Once you download a subject's question bank, you can practice, sit CBT mock exams, and review answers without spending mobile data or needing a connection.",
  },
  {
    question: "How does the quiz mode work?",
    answer:
      "You answer each question first. The correct answer and a short explanation are only revealed afterward, so practice sessions test recall the same way the real exam will.",
  },
  {
    question: "Is Theorem available on iPhone?",
    answer:
      "Theorem is launching on Android first. An iOS version isn't ruled out, but there's no confirmed date yet.",
  },
  {
    question: "When does Theorem launch?",
    answer: "Theorem is on track for release on the Google Play Store in November 2026.",
  },
  {
    question: "How does the premium subscription work?",
    answer: `Premium unlocks the full past-question library and unlimited CBT mock exams for ${siteConfig.price.amount} across ${siteConfig.price.period}, paid securely through ${siteConfig.price.provider}.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-paper-deep/50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Questions, answered.
        </h2>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-left font-display text-lg font-medium text-ink marker:content-none">
                {faq.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
