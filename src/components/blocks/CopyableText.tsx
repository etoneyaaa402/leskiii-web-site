"use client"
import { useState, type ReactNode } from "react";

type CopyableTextProps = {
  value: string;
  href: string;
  children: ReactNode;
};

export default function CopyableText({value, href, children}:CopyableTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => (setCopied(false)), 1500);
    }
    catch (error) {
      console.error("failed to copy text", error);
    }
  };
  return (
    <span className="group relative inline-flex items-center gap-3">
      <a href={href}>{children}</a>

      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-2 
                  text-sm hover:underline hover:text-blue-500 p-2
                  opacity-100 transition-opacity duration-200 
                  md:opacity-0 md:group-hover:opacity-100"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </span>
  )
}