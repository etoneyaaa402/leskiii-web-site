import Image from "next/image";
import Link from "next/link";
import type { DesignCase } from "@/data/cases";

type CaseDetailsProps = {
  project: DesignCase;
};

export default function CaseDetails({ project }: CaseDetailsProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:px-12">
      <Link
        href="/cases"
        className="group inline-flex items-center gap-2 text-base text-neutral-500 transition-colors duration-300 hover:text-black"
      >
        <Image
          src="/icons/Property 1=LEFT-UP.svg"
          alt="arrow"
          width={20}
          height={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back to cases
      </Link>

      <header className="md:mt-10 md:mb-10 mt-8 mb-6">
        <p className="mb-6 text-sm text-neutral-500">
          {project.category}
        </p>

        <h1 className="mb-2 text-4xl font-medium tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="max-w-2xl text-lg text-neutral-600 md:text-xl">
          {project.description}
        </p>
      </header>

      <div className="mb-20 overflow-hidden rounded-b-xl">
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          width={1600}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <section className="mb-24">
        <h2 className="md:mb-10 mb-8 text-3xl font-medium md:text-4xl">
          About the project
        </h2>

        <div className="grid grid-cols-1 md:gap-12 gap-10 md:grid-cols-2">
          <div>
            <p className="md:mb-6 mb-4 text-sm text-neutral-500">
              Main goal
            </p>

            <h3 className="mb-2 text-2xl font-medium">
              {project.goal.name}
            </h3>

            <p className="leading-relaxed text-neutral-600">
              {project.goal.description}
            </p>
          </div>
          <div>
            <p className="md:mb-6 mb-4 text-sm text-neutral-500">
              Target audience
            </p>

            <h3 className="mb-2 text-2xl font-medium">
              {project.users.name}
            </h3>

            <p className="leading-relaxed text-neutral-600">
              {project.users.description}
            </p>
          </div>

        </div>
      </section>

      <section className="mb-24">
        <h2 className="md:mb-10 mb-8 text-3xl font-medium md:text-4xl">
          Visual direction
        </h2>

        <div className="grid grid-cols-1 md:gap-12 gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-b-xl">
            <p className="md:mb-6 mb-4 text-sm text-neutral-500">
              Color palette
            </p>

            <h3 className="mb-2 text-2xl font-medium">
              {project.colorPalette.name}
            </h3>

            <p className="leading-relaxed text-neutral-600">
              {project.colorPalette.description}
            </p>
            <Image src={project.colorPalette.image.src} alt={project.colorPalette.image.alt}
              width={1600}
              height={1200}
              className="mt-1.5 h-auto w-full transition-transform duration-500 hover:scale-[1.02]"/>
          </div>

          <div className="overflow-hidden rounded-b-xl">
            <p className="md:mb-6 mb-4 text-sm text-neutral-500">
              Typography
            </p>

            <h3 className="mb-2 text-2xl font-medium">
              {project.typography.name}
            </h3>

            <p className="leading-relaxed text-neutral-600">
              {project.typography.description}
            </p>
            <Image src={project.typography.image.src} alt={project.typography.image.alt}
              width={1600}
              height={1200}
              className="mt-1.5 h-auto w-full transition-transform duration-500 hover:scale-[1.02]"/>
          </div>

        </div>
      </section>

      <section className="md:mb-20 mb-10">
        <h2 className="mb-10 text-3xl font-medium md:text-4xl">
          Final designs
        </h2>
      
        <div className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide
          pb-4 
          md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
        ">
          {project.images.map((image, index) => (
            <figure
              key={image.src}
              className="
                w-[85%] shrink-0 snap-center
                overflow-hidden rounded-xl
                md:w-full
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1200}
                className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
              />
      
              <figcaption className="mt-3 text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
