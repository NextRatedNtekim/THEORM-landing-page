import raw from "./legal.json";

export type LegalBlock = { t: "p"; x: string } | { t: "ul"; x: string[] };
export type LegalDoc = {
  slug: string;
  title: string;
  meta: string[];
  sections: { h: string; blocks: LegalBlock[] }[];
};

const hidden = new Set(["publishing-checklist"]);
export const legalDocs = (raw as LegalDoc[]).filter((d) => !hidden.has(d.slug));
export const getDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
// The four documents surfaced on the landing page
export const featuredSlugs = ["privacy-policy", "terms-of-service", "refund-cancellation-policy", "educational-disclaimer"];
