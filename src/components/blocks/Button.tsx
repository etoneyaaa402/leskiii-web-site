import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  text: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({text, href, variant="primary"}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 transition-colors";
  const variantStyles = {
      primary: "bg-black text-white hover:bg-neutral-300",
      secondary: "border border-black text-black hover:bg-black hover:text-white",
    };
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {text}
    </Link>
  );
}