import { ScreenshotFrame } from "./ScreenshotFrame";
import S0 from "@/asserts/showcase/01-home-tab.webp";
import S1 from "@/asserts/showcase/02-library-overview.webp";
import S2 from "@/asserts/showcase/04-possible-questions-list.webp";
import S3 from "@/asserts/showcase/06-study-notes-topic-content.webp";
import S4 from "@/asserts/showcase/07-pdf-resources.webp";
import S5 from "@/asserts/showcase/15-cbt-setup.webp";
import S6 from "@/asserts/showcase/16-cbt-active-question.webp";
import S7 from "@/asserts/showcase/17-cbt-results.webp";
import S8 from "@/asserts/showcase/19-exam-simulation.webp";
import S9 from "@/asserts/showcase/20-analytics-overview.webp";
import S10 from "@/asserts/showcase/21-analytics-topics.webp";
import S11 from "@/asserts/showcase/09-premium-upgrade.webp";
import S12 from "@/asserts/showcase/14-community.webp";
import S13 from "@/asserts/showcase/22-profile.webp";

const shots = [
  { src: S0, caption: "Home", alt: "Theorem home tab with study streak and quick access" },
  { src: S1, caption: "Library", alt: "Library hub for notes, questions and resources" },
  { src: S2, caption: "Possible questions", alt: "Topic question list with favourites" },
  { src: S3, caption: "Study notes", alt: "Study notes topic checklist with read progress" },
  { src: S4, caption: "PDF resources", alt: "Downloadable PDF notes by subject" },
  { src: S5, caption: "CBT setup", alt: "Practice CBT setup with subjects and timer" },
  { src: S6, caption: "CBT mode", alt: "Active CBT question with live timer" },
  { src: S7, caption: "Results", alt: "CBT results with score ring and stats" },
  { src: S8, caption: "Exam simulation", alt: "Full JUPEB exam simulation setup" },
  { src: S9, caption: "Analytics", alt: "Analytics overview with accuracy and highlights" },
  { src: S10, caption: "Weak topics", alt: "Weakest and strongest topic breakdown" },
  { src: S11, caption: "Premium", alt: "Premium upgrade screen" },
  { src: S12, caption: "Community", alt: "University WhatsApp groups and social links" },
  { src: S13, caption: "Profile", alt: "Profile with premium status and settings" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-5 pr-5" aria-hidden={hidden || undefined}>
      {shots.map(({ src, alt, caption }) => (
        <li key={caption} className="w-[220px] shrink-0 sm:w-[250px]">
          <ScreenshotFrame
            src={src}
            alt={hidden ? "" : alt}
            sizes="250px"
            className="aspect-[9/19.5] w-full"
          />
          <p className="mt-3 text-center text-sm font-medium text-ink-soft">{caption}</p>
        </li>
      ))}
    </ul>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            A closer look inside the app.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every screen is built around one goal: get you from &ldquo;studying&rdquo; to
            &ldquo;exam-ready&rdquo; as fast as possible.
          </p>
        </div>
      </div>

      {/* Infinite marquee: two identical rows, track slides by exactly one row's
          width then loops. Pauses on hover/focus; static for reduced motion. */}
      <div
        className="group mt-14 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        tabIndex={0}
        aria-label="Scrolling gallery of Theorem app screens"
      >
        <div className="marquee-track flex w-max group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] group-focus:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
