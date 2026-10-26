"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

import { EVENTS_URL, INTAKE_URL } from "../_lib/links";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-clay";

const navLinks = [
  { label: "How It Works", href: "#how-it-works", external: false },
  { label: "Upcoming Public Events", href: EVENTS_URL, external: true },
  { label: "For Growth Teams", href: "/growth", external: false },
  { label: "About", href: "/about", external: false },
];

const navLinkClass = `rounded-sm text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal ${focusRing}`;

function NavLink({
  link,
  onClick,
}: {
  link: (typeof navLinks)[number];
  onClick?: () => void;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClass}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }
  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={navLinkClass} onClick={onClick}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={navLinkClass} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export function Topbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-stone">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex items-center gap-2.5 rounded-sm ${focusRing}`}
          onClick={close}
        >
          <Image
            src="/vennway-icon.png"
            alt=""
            width={80}
            height={80}
            preload
            className="h-9 w-9"
          />
          <span className="font-heading text-2xl font-extrabold tracking-tight text-deep-green">
            Vennway
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex"
        >
          {navLinks.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 && (
                <span aria-hidden="true" className="text-charcoal/30">
                  |
                </span>
              )}
              <NavLink link={link} />
            </Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={`hidden rounded-sm border border-charcoal px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-stone lg:inline-block ${focusRing}`}
          >
            Sign In
          </Link>
          <a
            href={INTAKE_URL}
            className={`rounded-sm bg-warm-clay px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-warm-clay/85 ${focusRing}`}
          >
            Join Vennway
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`rounded-sm p-2 text-charcoal lg:hidden ${focusRing}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="flex flex-col gap-4 border-t border-charcoal/10 bg-stone px-4 py-5 sm:px-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} link={link} onClick={close} />
          ))}
          <Link
            href="/login"
            onClick={close}
            className={`self-start rounded-sm border border-charcoal px-4 py-2 text-sm font-medium text-charcoal ${focusRing}`}
          >
            Sign In
          </Link>
        </nav>
      )}
    </header>
  );
}
