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
    <main>
      <Link href="/cases">← Back to cases</Link>

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