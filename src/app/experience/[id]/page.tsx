
import { Suspense } from "react";
import ExperienceContent from "./ExperienceContent";
import Loading from "@/app/loading";


type ExpPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ExpPage({ params }: ExpPageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <ExperienceContent params={params} />
    </Suspense>
  );
}
