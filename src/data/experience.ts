
export type Experience = {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    id: "corporate-website",
    title: "Corporate Website: Headless CMS",
    role: "Frontend Developer",
    period: "06.2026 – 10.2026",
    description:
      "Rebuilt a company's public website using WordPress as a headless CMS and Next.js as the frontend.",
    responsibilities: [
      "Built 10+ service landing pages with Next.js, React, and Tailwind CSS.",
      "Created 20+ reusable page sections, including FAQ blocks, tabs, case cards, and blog listings.",
      "Implemented incremental static regeneration triggered by WordPress webhooks.",
      "Developed custom Gutenberg blocks with ACF, including a case-study block with a metrics table.",
      "Connected contact and subscription forms using Cloudflare Turnstile and Nodemailer.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "WordPress",
      "ACF",
      "Gutenberg",
      "PHP",
      "Docker",
    ],
  },
  {
    id: "ai-candidate-evaluation",
    title: "HR Tech: AI-Assisted Candidate Evaluation",
    role: "Full Stack Developer",
    period: "02.2026 – 09.2026",
    description:
      "Built a system that analyzes interview transcripts and CVs, evaluates candidates against requirements, and returns reports to the hiring workflow.",
    responsibilities: [
      "Built the Fastify API, background workers, and React frontend as the main developer.",
      "Implemented CV parsing, work-history extraction, interview consistency checks, and LLM-based candidate scoring.",
      "Added a RAG pipeline using Qdrant and OpenAI embeddings to retrieve similar historical candidates.",
      "Integrated Linear SDK and webhooks to trigger analysis and post reports to tickets.",
      "Moved long-running tasks to BullMQ and Redis workers.",
      "Built dashboards and report-editing interfaces using TanStack, shadcn/ui, Recharts, and Tiptap.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "React",
      "OpenAI API",
      "Qdrant",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "TanStack",
      "Docker",
    ],
  },
  {
    id: "meeting-recorder",
    title: "Productivity Software: AI Meeting Recorder",
    role: "Frontend Developer",
    period: "07.2026 – 09.2026",
    description:
      "Developed the interface for a desktop meeting recorder that supports natural-language questions and source-linked answers.",
    responsibilities: [
      "Built the meeting page, transcript tab, interaction statistics, audio player with waveform, and export interface.",
      "Implemented settings for privacy, notifications, personal mentions, profile management, and password changes.",
      "Created the first-run setup wizard.",
      "Worked with a local search system combining full-text and vector search over transcripts.",
      "Managed application state with Zustand and added English and Russian localization.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tauri",
      "Zustand",
      "Radix UI",
      "React Hook Form",
      "react-i18next",
      "SQLite",
      "sqlite-vec",
    ],
  },
  {
    id: "3d-printing-saas",
    title: "E-commerce SaaS: Tools for 3D-Printing Sellers",
    role: "Full Stack Developer",
    period: "04.2026 – 07.2026",
    description:
      "Worked on a subscription platform for 3D-printing sellers with browser-based model configurators and AI-assisted marketplace content generation.",
    responsibilities: [
      "Built five 3D model configurators with real-time previews using Three.js and React Three Fiber.",
      "Moved computationally intensive geometry operations into Web Workers using WebAssembly.",
      "Developed utilities for STL parsing, text-to-cross-section generation, and multi-part 3MF assembly.",
      "Built NestJS endpoints for server-side model assembly and S3 storage.",
      "Implemented AI-assisted marketplace listing and mockup generation.",
      "Built landing and pricing pages and integrated subscription checkout with Stripe and PayPal.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Three.js",
      "React Three Fiber",
      "WebAssembly",
      "Web Workers",
      "NestJS",
      "AWS S3",
      "OpenAI API",
      "Stripe",
      "PayPal",
    ],
  },
];
