
import { Suspense } from "react";
import NavMenuContent from "./NavMenuContent";

export default function NavMenu() {
  return (
    <Suspense fallback={<div className="h-16" />}>
      <NavMenuContent />
    </Suspense>
  );
}
