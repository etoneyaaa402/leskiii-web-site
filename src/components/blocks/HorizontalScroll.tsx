
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        direction === "left"
          ? -scrollRef.current.clientWidth
          : scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-neutral-100"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-neutral-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
      >
        {children}
      </div>
    </div>
  );
}
