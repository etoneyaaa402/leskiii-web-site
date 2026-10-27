"use client"
import CaseCard from "./CaseCard";
import { useState } from "react";
import { cases } from "@/data/cases";
import Link from "next/link";

export default function CaseGallery() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  return (
    <section
      className="my-6"
      onMouseLeave={() => setActiveSlug(null)}
    >
      {cases.map((project) => {
        const isActive = activeSlug === project.slug;
        const hasActive = activeSlug !== null;
    
        return (
          <div key={project.slug} className="relative">
            <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t md:border-t-2 border-black" />
    
            <Link
              href={`/cases/${project.slug}`}
              onMouseEnter={() => setActiveSlug(project.slug)}
              className={`
                block min-w-0 origin-center
                transition-transform duration-500 ease-in-out
                ${isActive ? "scale-[1.02]" : ""}
                ${hasActive && !isActive ? "scale-[0.98]" : ""}
              `}
            >
              <CaseCard project={project} />
            </Link>
          </div>
        );
      })}
    </section>
  );
}