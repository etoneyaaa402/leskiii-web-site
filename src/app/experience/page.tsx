import ExperienceGallery from "@/components/experience/ExperienceGallery"

export default function Experience() {
  return (
    <div >
      <section className="px-12 py-5 md:px-5 md:py-20 w-full border-b md:border-b-2 border-b-black">
        <p className="mb-2 md:mb-6 text-sm tracking-widest text-neutral-500">
          Experience / Selected work
        </p>
      
        <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl lg:text-7xl">
          Building things for the <i className="underline decoretion-1 md-decoration-4">web.</i>
        </h1>
      
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-lg">
          A collection of projects and experience showcasing my work
          with modern web technologies, from responsive interfaces
          to functional applications.
        </p>
      </section>
      <ExperienceGallery />
    </div>
  )
}