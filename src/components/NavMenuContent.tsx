"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "home", path: "/" },
  { label: "cases", path: "/cases" },
  { label: "experience", path: "/experience" },
];

export default function NavMenuContent() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 ">
      <ul className="flex flex-row gap-6 justify-center m-6">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.path ||
            (link.path !== "/" &&
              pathname.startsWith(`${link.path}/`));

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`
                  relative inline-block pb-1
                  text-m md:text-lg
                  transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0
                  after:h-0.5 after:w-full after:bg-black
                  after:origin-left after:transition-transform
                  after:duration-300 after:ease-in-out
                  ${
                    isActive
                      ? "text-black after:scale-x-100"
                      : "text-neutral-600 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
