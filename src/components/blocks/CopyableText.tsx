"use client";

import { useState, type ReactNode } from "react";

type CopyableTextProps = {
  value: string;
  href: string;
  children: ReactNode;
};

export default function CopyableText({
  value,
  href,
  children,
}: CopyableTextProps) {
  const [copied, setCopied] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
  
      setTimeout(() => {
        setCopied(false);
        setShowCopy(false);
      }, 1000);
  
    } catch (error) {
      console.error("failed to copy text", error);
    }
  };

  return (
    <span className="group relative inline-flex items-center gap-3">
      <a
        href={href}
        onClick={(e) => {
          if (window.matchMedia("(hover: none)").matches) {
            e.preventDefault();
            setShowCopy((prev) => !prev);
          }
        }}
      >
        {children}
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={`
          absolute right-full top-1/2 -translate-y-1/2 mr-2
          whitespace-nowrap p-2 text-sm
          hover:underline hover:text-blue-500
          transition-opacity duration-300 ease-in-out
          ${showCopy ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:opacity-0 md:pointer-events-none
          md:group-hover:opacity-100 md:group-hover:pointer-events-auto
        `}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </span>
  );
}