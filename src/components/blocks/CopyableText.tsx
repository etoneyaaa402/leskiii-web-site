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
      }, 1500);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <span className="group inline-flex items-center gap-2">
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
          text-sm whitespace-nowrap transition-all duration-300
        
          ${
            showCopy
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        
          md:group-hover:opacity-100
          md:group-hover:pointer-events-auto
          md:focus-visible:opacity-100
          md:focus-visible:pointer-events-auto
        
          max-md:rounded-full
          max-md:bg-gray-100
          max-md:px-3
          max-md:py-1.5
          max-md:text-gray-500
          max-md:active:bg-gray-200
        `}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </span>
  );
}
