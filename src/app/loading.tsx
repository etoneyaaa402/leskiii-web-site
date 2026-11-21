"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`flex min-h-[70vh] w-full items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center text-sm tracking-[0.12em] text-black">
        <span>LOADING</span>

        <span className="ml-1 flex items-center gap-1">
          <span className="loading-dot text-xl">.</span>
          <span className="loading-dot text-xl">.</span>
          <span className="loading-dot text-xl">.</span>
        </span>
      </div>
    </div>
  );
}
