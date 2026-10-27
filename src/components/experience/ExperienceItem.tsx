import type { Experience } from "@/data/experience";
import TechBadge from "../blocks/TechBadge";

type ExpProps = {
  experience: Experience;
};

export default function ExperienceItem({ experience }: ExpProps) {
  return (
    <article className="my-5">
      <div className="mx-auto w-full">
        <p className=" flex justify-between text-3xl md:text-4xl mb-3 underline decoration-1 md:decoretion-4">{experience.title}</p>
        <div className="flex flex-row justify-between text-xs md:text-base mb-2 px-1">
          <h2>{experience.role}</h2>
          <h2>{experience.period}</h2>
        </div>
        <div>
          {experience.technologies.map((technology) => (
            <TechBadge key={technology} text={technology}/>
          ))}
        </div>
      </div>
    </article>
  );
}