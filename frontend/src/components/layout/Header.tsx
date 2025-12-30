import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-[0.05em]"
        >
          {site.shortName}
        </Link>


          <nav className="flex gap-6 text-sm">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/how-we-work" >How We Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
