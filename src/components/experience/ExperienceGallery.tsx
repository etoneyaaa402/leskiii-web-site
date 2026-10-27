"use client"

import { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { experience } from "@/data/experience";
import Link from "next/link";

export default function ExperienceGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mx-auto my-8 px-12" onMouseLeave={() => setActiveId(null)}>
      {
        experience.map((exp) => {
          const isActive = activeId === exp.id;
          const hasActive = activeId !== null;
          return (
            <Link
              href={`/experience/${exp.id}`}
              key={exp.id}
              onMouseEnter={() => setActiveId(exp.id)}
              className={`
                        min-w-0 rounded-xl
                        transition-all duration-500 ease-in-out
                        ${isActive ? "scale-[1.02]" : ""}
                        ${hasActive && !isActive ? "scale-[0.97] " : ""}
                      `}
            >
              <ExperienceItem experience={exp} />
            </Link>
          );
        }
        )}
    </section>
  );
}