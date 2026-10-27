import { notFound } from "next/navigation";
import CaseDetails from "@/components/cases/CaseDetails";
import { cases } from "@/data/cases";

type CaseContentProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseContent({
  params,
}: CaseContentProps) {
  const { slug } = await params;

  const project = cases.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <CaseDetails project={project} />;
}