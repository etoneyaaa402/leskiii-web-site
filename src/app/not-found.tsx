import Link from "next/link";
import Button from "@/components/blocks/Button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-medium tracking-tight">
        404
      </span>

      <h1 className="mt-6 text-2xl font-medium">
        Oops! Nothing here.
      </h1>

      <p className="mt-3 text-neutral-500">
        The page you're looking for doesn't exist
        or has been moved.
      </p>

      <div className="mt-6">
        <Button text="Back to homepage" href="/" variant="primary" />
      </div>
    </main>
  );
}