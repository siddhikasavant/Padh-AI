"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Syllabus",
    href: "/syllabus",
  },
  {
    name: "Notes",
    href: "/notes",
  },
  {
    name: "PYQs",
    href: "/pyqs",
  },
  {
    name: "Contributors",
    href: "/contributors",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >

          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/assets/images/app_logo.png"
              alt="Padh AI"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Padh{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="text-xs text-zinc-400">
              Learn Smarter. Search Less.
            </p>
          </div>

        </Link>


        {/* Navigation */}
        <nav className="flex items-center gap-1 lg:gap-2">

          {links.map((link) => {

            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );

          })}

        </nav>

      </div>
    </header>
  );
}