import { Suspense } from "react";
import CaseContent from "./CaseContent";
import Loading from "@/app/loading";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function CasePage({ params }: CasePageProps) {
  return (
    <Suspense fallback={<Loading/ >}>
      <CaseContent params={params} />
    </Suspense>
  );
}