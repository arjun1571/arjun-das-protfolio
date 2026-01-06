"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur">
      <nav className="w-full mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Arjun Chandra Das <span className="text-primary">Das</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-primary transition ${
                  pathname === item.href ? "text-primary" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href="https://drive.google.com/file/d/1ZBp-vj5eWPix76fftzBXJPEuhPESDvjx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-primary text-white bg-black font-semibold hover:bg-primary/90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white ">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <a
              href="https://drive.google.com/file/d/1F8kuenCQNMxEjTBeeSjG3_EV2xXSoSW6/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center px-5 py-2 rounded-lg bg-black text-white"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
