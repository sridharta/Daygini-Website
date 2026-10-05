"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { nav } from "@/content/site";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-line">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-semibold text-muted hover:text-ink">
              {item.label}
            </a>
          ))}
          <ButtonLink href="/#download" className="min-h-10 px-4 text-[15px]">
            Get the App
          </ButtonLink>
        </nav>
        <button
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-button md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-base font-semibold">
                {item.label}
              </a>
            ))}
            <ButtonLink href="/#download" onClick={() => setOpen(false)} className="my-3">
              Get the App
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
