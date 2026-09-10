import {
  MonitorCheck,
  Layers,
  WifiOff,
  LineChart,
  BellRing,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: MonitorCheck,
    title: "Real CBT simulation",
    description:
      "Timed, computer-based practice that mirrors the actual JUPEB exam interface, so exam day feels familiar instead of foreign.",
  },
  {
    icon: Layers,
    title: "Past questions by subject and year",
    description:
      "Pick a subject, then a year, then work through that paper -- answer first, and Theorem reveals the correct answer and explanation after.",
  },
  {
    icon: WifiOff,
    title: "Learn offline, anywhere",
    description:
      "Download a subject once and practice without spending data -- on a bus, in a hostel with no signal, or anywhere study happens.",
  },
  {
    icon: LineChart,
    title: "Track your progress",
    description:
      "An analytics view of your accuracy and attempts across subjects, so you can see which papers still need work before you sit the real thing.",
  },
  {
    icon: BellRing,
    title: "Organized notifications",
    description:
      "Updates are grouped by category -- new past questions, exam reminders, account -- instead of one long, noisy feed.",
  },
  {
    icon: GraduationCap,
    title: "Built for the JUPEB syllabus",
    description:
      "Every question set is scoped to the JUPEB curriculum, not a generic bank of unrelated exam content.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Everything you need between now and results day.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Theorem replaces scattered PDFs and photocopied past questions with
          one focused app built around how JUPEB is actually examined.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-4 bg-surface p-8">
            <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
