import { notFound } from "next/navigation";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import { experience } from "@/data/experience";

type ExperienceContentProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExperienceContent({
  params,
}: ExperienceContentProps) {
  const { id } = await params;

  const project = experience.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return <ExperienceDetails project={project} />;
}