import { ImagePlaceholder } from "./ImagePlaceholder";

const steps = [
  {
    number: "01",
    title: "Download and set up your profile",
    description: "Install Theorem, tell it which JUPEB subjects you're taking, and you're ready to start.",
    shot: "App screenshot: onboarding / subject selection",
  },
  {
    number: "02",
    title: "Choose a subject and a year",
    description: "Every past question is organized by subject first, then by year -- so you practice full papers, not a random mix.",
    shot: "App screenshot: subject and year picker",
  },
  {
    number: "03",
    title: "Sit the paper in CBT mode",
    description: "Answer under timed, computer-based conditions that match the real JUPEB exam before any answer is revealed.",
    shot: "App screenshot: CBT question screen",
  },
  {
    number: "04",
    title: "Review, then track your progress",
    description: "See the correct answer and explanation for anything you missed, and watch your accuracy improve on the analytics tab.",
    shot: "App screenshot: analytics / progress tab",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            From install to exam-ready, in four steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col">
              <ImagePlaceholder
                label={step.shot}
                className="aspect-[9/16] w-full"
              />
              <span className="mt-6 font-display text-sm text-primary-dark">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
