export type DesignCase = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
};

export const cases: DesignCase[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Branding",
    description: "A visual identity for a new brand.",
    cover: "/images/cat.jpg",
  },
  {
    slug: "social-media",
    title: "Social Media Design",
    category: "Digital Design",
    description: "Visual content for social media.",
    cover: "/images/smoke.jpg",
  },
  {
    slug: "campaign",
    title: "Advertising Campaign",
    category: "Advertising",
    description: "A visual concept for an advertising campaign.",
    cover: "/images/monkey.jpg",
  },
];