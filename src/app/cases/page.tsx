import CaseGallery from "@/components/cases/CaseGallery";

export default function CasesPage() {
  return (
    <main>
      <section className="px-12 py-5 md:px-5 md:py-20 w-full">
        <p className="mb-2 md:mb-6 text-sm tracking-widest text-neutral-500">
          Design cases / Selected work
        </p>
      
        <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl lg:text-7xl">
          Ideas into <i className="underline decoretion-1 md-decoration-4">identity.</i>
        </h1>
      
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-lg">
          Selected work in branding, digital design, and visual communication — turning concepts into distinctive visual experiences.
        </p>
      </section>

      <CaseGallery />
    </main>
  );
}