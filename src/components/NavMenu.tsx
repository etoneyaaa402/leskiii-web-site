"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "home", path: "/" },
  { label: "cases", path: "/cases" },
  { label: "experience", path: "/experience" },
]

export default function NavMenu() {
  const pathname = usePathname();
  
  return (
    <nav>
      <ul className="flex flex-row gap-6 justify-center m-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.path  || (link.path !== "/" && pathname.startsWith(`${link.path}/`));
          return (
            <li key={link.path}>
              <Link href={link.path}
                className={`
                  relative inline-block pb-1
                  text-m md:text-lg
                  transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0
                  after:h-0.5 after:w-full after:bg-black
                  after:origin-left after:transition-transform
                  after:duration-300 after:ease-in-out
                  ${isActive
                    ? "text-black after:scale-x-100"
                    : "text-neutral-500 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          )
        }
        )}
      </ul>
  </nav>
  )
}