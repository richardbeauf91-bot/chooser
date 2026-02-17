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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl text-slate-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              BC
            </div>
            <span className="hidden sm:inline">Broker Chooser</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="/chooser"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Find My Broker
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="/chooser"
                className="block w-full text-center px-4 py-3 text-base font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                Find My Broker
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}