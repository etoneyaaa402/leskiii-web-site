import Image from "next/image";
import Link from "next/link";
import type { DesignCase } from "@/data/cases";

type CaseDetailsProps = {
  project: DesignCase;
};

export default function CaseDetails({
  project,
}: CaseDetailsProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-6 md:px-12">
      <Link
        href="/experience"
        className="inline-flex items-center gap-2 text-sm text-black transition-[font-size,color] duration-300 ease-in-out hover:text-xl"
      >
        <Image src="/icons/Property 1=LEFT-UP.svg" alt="arrow" width={20} height={20}/>
        Back to experience
      </Link>

      <header>
        <p>{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      <Image
        src={project.cover}
        alt={project.title}
        width={120}
        height={80}
        className="h-auto"
      />

      <section>
        <h2>About the project</h2>
        <p>{project.description}</p>
      </section>
    </main>
  );
}