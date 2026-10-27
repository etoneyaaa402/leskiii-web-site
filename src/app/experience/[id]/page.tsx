import { Suspense } from "react";
import ExperienceContent from "./ExperienceContent";
import { experience } from "@/data/experience";

type ExpPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  const params = experience.map((item) => ({
    id: item.id,
  }));

  console.log("Generated experience routes:", params);

  return params;
}

export default function ExpPage({ params }: ExpPageProps) {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <ExperienceContent params={params} />
    </Suspense>
  );
}