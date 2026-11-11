export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  x?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

const team: readonly TeamMember[] = [
  // TODO: replace names/roles/links, and drop portraits into /public/team (e.g. "/team/founder-one.jpg")
  {
    name: "Abasikponke Dennis",
    role: "Founder & CEO",
    photo: "/team/abasikponke-dennis.jpeg",
    x: "#",
    linkedin: "#",
  },
  {
    name: "Samuel Ntekim",
    role: "Software Engineer",
    photo: "/team/samuel-ntekim.png",
    // x: "https://x.com/theoremjupeb",
    // linkedin: "https://linkedin.com",
    website: "https://lockscodes.xyz",
    github: "https://github.com/NextRatedNtekim",
  },
];
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
    socials: [
    { id: "facebook", label: "Facebook", handle: "Theorem Academia", url: "https://www.facebook.com/profile.php?id=61594375624723" },  
    { id: "whatsapp", label: "WhatsApp channel", handle: "Official updates", url: "https://whatsapp.com/channel/0029VbCtoHc1HspqMuBxcT1t" },
    { id: "instagram", label: "Instagram", handle: "@theorem_academia", url: "https://www.instagram.com/theoremacademia?stkn=ZjdlcHYyZGxmYmhh" },
    { id: "x", label: "X (Twitter)", handle: "@theorem_academia", url: "https://x.com/TheoremAcademia" },
    { id: "youtube", label: "YouTube", handle: "Theorem Academia", url: "https://www.youtube.com/@TheoremAcademia" },
     { id: "telegram", label: "Telegram", handle: "Theorem Academia", url: "https://t.me/theoremacademia" },
  ],

  playStoreUrl: "#", // TODO: replace with the live Google Play listing on launch
  launchDate: "2026-11-05",
  launchDateLabel: "15 November 2026",
  price: {
    amount: "\u20a64,500",
    period: "9 months",
    provider: "Paystack",
  },
  email: "theoremacademia@gmail.com", // TODO: confirm support email
   team,
  
  social: {
    twitter: "https://x.com/theoremjupeb", // TODO: confirm handle
  },
} as const;

export type SiteConfig = typeof siteConfig;
