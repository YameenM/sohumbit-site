import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/Services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karachi Product Engineering Studio",
  description:
    "SohumBit builds serious software products and scalable systems. Makers of QAYAM (booking marketplace) and QAYAM HMS (hotel management).",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Container>
        <ProductsSection />
        <ServicesSection />

        {/* How We Work */}
        <section className="mt-4 border-t pt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            How We Work
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            We approach software development as a long-term partnership.
            Our focus is on clarity, system design, and building products
            that remain reliable well beyond their initial launch.
          </p>

          <div className="mt-6">
            <Link
              href="/how-we-work"
              className="inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
            >
              Learn how we work →
            </Link>
          </div>
        </section>
      </Container>
      </main>
  );
}
