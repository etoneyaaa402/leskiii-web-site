
import Link from "next/link";
import type { Experience } from "@/data/experience";
import Image from "next/image";
import TechBadge from "../blocks/TechBadge";

type ExpDetailsProps = {
  project: Experience;
};

export default function ExperienceDetails({
  project,
}: ExpDetailsProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-6 md:px-12">
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 text-sm text-black transition-[font-size,color] duration-300 ease-in-out hover:text-xl"
      >
        <Image src="/icons/Property 1=LEFT-UP.svg" alt="arrow" width={20} height={20}/>
        Back to experience
      </Link>

      <header className="mt-6 border-b border-neutral-800 pb-6">
        <p className="mb-2 text-sm tracking-[0.2em] text-neutral-500">
          {project.period}
        </p>

        <p className="mb-1 text-neutral-500">{project.role}</p>

        <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800 md:text-xl">
          {project.description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)] md:gap-20">
        <section>
          <h2 className="mb-8 text-2xl font-medium md:text-3xl">
            Key contributions
          </h2>

          <ul className="space-y-6">
            {project.responsibilities.map((responsibility, index) => (
              <li
                key={`${project.id}-${index}`}
                className="flex gap-4 leading-relaxed text-black"
              >
                <span className="mt-0.5 text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-10">
          <section>
            <h2 className="mb-4 text-sm uppercase tracking-[0.15em] text-neutral-400">
              Position
            </h2>

            <p className="text-lg">{project.role}</p>
          </section>

          <section>
            <h2 className="mb-4 text-sm uppercase tracking-[0.15em] text-neutral-400">
              Period
            </h2>

            <p>{project.period}</p>
          </section>

          <section>
            <h2 className="mb-4 text-sm uppercase tracking-[0.15em] text-neutral-400">
              Technologies
            </h2>

            <ul className="flex flex-wrap">
              {project.technologies.map((technology) => (
                <TechBadge key={technology} text={technology}/>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
