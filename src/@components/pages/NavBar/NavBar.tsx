"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "My Skills", href: "#skills" },
  { name: "What I Do", href: "#whatIdo" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 relative backdrop-blur-xl bg-black/30 border-b border-white/10">
      <nav className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            A
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              Arjun Chandra Das
            </h1>
            <p className="text-xs font-medium text-gray-400">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1tsRNbVZbQhrMV90MlpzYOjSVDtzEYbgi/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 lg:hidden"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-2 px-5 py-5 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <a
            href="https://drive.google.com/file/d/1tsRNbVZbQhrMV90MlpzYOjSVDtzEYbgi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-500"
          >
            Resume ↗
          </a>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;