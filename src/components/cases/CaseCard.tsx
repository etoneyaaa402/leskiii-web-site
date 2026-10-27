import Image from "next/image";
import type { DesignCase } from "@/data/cases";

type CaseProps = {
  project: DesignCase;
};

export default function CaseCard({ project }: CaseProps) {
  return (
    <article className="w-full py-6 md:px-6 md:py-6">
      <div className="grid w-full grid-cols-[1fr_auto] px-12 items-start gap-x-4 gap-y-5 md:grid-cols-[1fr_1fr_1fr] md:items-center md:gap-6">
        <div className="min-w-0">
          <p className="mb-3 text-sm text-neutral-500 md:mb-5">
            {project.category}
          </p>

          <h2 className="text-3xl tracking-tight md:text-4xl">
            {project.title}
          </h2>

          <p className="text-sm leading-relaxed text-neutral-600 md:mt-0 md:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex w-full items-center justify-center md:col-auto md:row-auto">
          <Image
            src={project.cover}
            alt={project.title}
            width={400}
            height={250}
            className="h-auto w-full max-w-[360px] object-cover md:max-w-[200px]"
          />
        </div>

        <div className="col-start-2 row-start-1 flex justify-end md:col-auto md:row-auto">
          <Image
            src="/icons/Property 1=RIGHT-UP.svg"
            alt="View project"
            width={75}
            height={75}
            className="h-auto w-8 md:w-[75px]"
          />
        </div>
      </div>
    </article>
  );
}