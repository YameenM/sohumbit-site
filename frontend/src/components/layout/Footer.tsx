import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <Container>
        <div className="py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500">
          {/* Left */}
          <div>
            <p className="font-medium text-slate-700">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="mt-1">{site.location}</p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/products" className="hover:text-slate-700">
              Products
            </Link>
            <Link href="/services" className="hover:text-slate-700">
              Services
            </Link>
            <Link href="/how-we-work" className="hover:text-slate-700">
              How We Work
            </Link>
            <Link href="/contact" className="hover:text-slate-700">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
