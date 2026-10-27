export const siteConfig = {
  name: "Theorem",
  tagline: "JUPEB past questions and CBT practice for Android",
  description:
    "Theorem is the offline-capable JUPEB study app: practice real past questions by subject and year, sit full CBT-style mock exams, and track your progress -- all on Android, all in one place.",
  url: "https://theoremacademia.com", // TODO: replace with the production domain before launch
  ogImage: "/og-image.svg",
  keywords: [
    "JUPEB app",
    "JUPEB past questions",
    "JUPEB CBT practice",
    "JUPEB study app",
    "JUPEB exam prep Android",
    "JUPEB mock exam",
    "computer based test practice Nigeria",
  ],
  playStoreUrl: "#", // TODO: replace with the live Google Play listing on launch
  launchDate: "2026-11-05",
  launchDateLabel: "15 November 2026",
  price: {
    amount: "\u20a64,000",
    period: "9 months",
    provider: "Paystack",
  },
  email: "theoremacademia@gmail.com", // TODO: confirm support email
  team: [
    // TODO: replace names/roles/links, and drop portraits into /public/team (e.g. "/team/founder-one.jpg")
    { name: "Abasiponke Dennis", role: "Founder & CEO", photo: "", x: "https://x.com/theoremjupeb", linkedin: "https://linkedin.com" },
    { name: "Samuel Ntekim", role: "Software Engineer", photo: "", x: "https://x.com/theoremjupeb", linkedin: "https://linkedin.com" },
  ],
  social: {
    twitter: "https://x.com/theoremjupeb", // TODO: confirm handle
  },
} as const;

export type SiteConfig = typeof siteConfig;
