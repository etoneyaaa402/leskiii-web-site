import { Suspense } from "react";
import CaseContent from "./CaseContent";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function CasePage({ params }: CasePageProps) {
  return (
    <Suspense fallback={<p>Loading case...</p>}>
      <CaseContent params={params} />
    </Suspense>
  );
}