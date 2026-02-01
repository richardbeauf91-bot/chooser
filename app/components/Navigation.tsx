"use client";

import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/brokers", label: "Brokers" },
    { href: "/best", label: "Best Brokers" },
    { href: "/compare", label: "Compare" },
    { href: "/chooser", label: "Broker Chooser" },
    { href: "/reviews", label: "Reviews" },
    { href: "/learn", label: "Learn" },
    { href: "/glossary", label: "Glossary" }
  ];

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-lg">
          Broker Chooser
        </a>

        <nav className="hidden md:flex gap-6">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t">
          <ul className="flex flex-col">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 border-b"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}