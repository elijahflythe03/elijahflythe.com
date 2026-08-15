"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/writeups", label: "Write-ups" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

const socials = [
  { href: "https://github.com/elijahflythe03", label: "GitHub" },
  { href: "https://www.linkedin.com/in/emflythe03/", label: "LinkedIn" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center text-lg font-bold text-heading"
          onClick={() => setOpen(false)}
        >
          Elijah Flythe
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-ink transition-colors hover:bg-accent/15 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-ink transition-colors hover:bg-accent/15 hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-heading md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-4 pb-3 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-2 text-base font-medium text-ink hover:bg-accent/15 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-2 text-base font-medium text-ink hover:bg-accent/15 hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
