"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-lg tracking-[0.05em]"
          >
            {site.shortName}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/how-we-work">How We Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl leading-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <Container>
            <nav className="flex flex-col py-4 space-y-4 text-sm">
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/how-we-work" onClick={() => setOpen(false)}>How We Work</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
