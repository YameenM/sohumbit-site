import { Container } from "@/components/layout/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A calm, structured delivery process: discovery, design, build, launch, and iteration. Clear timelines, clean execution.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <Container>
      <div className="py-20 max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          How We Work
        </h1>

        <p className="mt-4 text-slate-600 leading-relaxed">
          SOHUMBIT approaches software development as a long-term partnership.
          We focus on clarity, ownership, and building systems that remain
          reliable well beyond their initial launch.
        </p>

        {/* Step 1 */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">
            1. Understanding the Problem
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We begin by understanding the business problem, operational context,
            and constraints not just feature requests. This ensures we build
            the right solution, not unnecessary complexity.
          </p>
        </div>

        {/* Step 2 */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">
            2. System Design & Planning
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Before writing code, we define system architecture, data models,
            workflows, and responsibilities. This phase reduces risk and
            prevents costly rework later.
          </p>
        </div>

        {/* Step 3 */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">
            3. Iterative Development
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Development is done in clear, manageable iterations. Progress is
            visible, priorities are controlled, and changes are handled
            deliberately not reactively.
          </p>
        </div>

        {/* Step 4 */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">
            4. Quality, Stability & Review
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We emphasize code quality, testing, and system stability. Every
            feature is reviewed in the context of maintainability and future
            growth.
          </p>
        </div>

        {/* Step 5 */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">
            5. Long-Term Ownership
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our work does not end at delivery. We build systems that can evolve,
            be extended, and be confidently operated over time whether by us
            or internal teams.
          </p>
        </div>

        {/* Closing */}
        <div className="mt-14 text-sm text-slate-500 leading-relaxed">
          We prioritize long-term value, clear communication, and responsible
          engineering decisions over short-term shortcuts.
        </div>
      </div>
    </Container>
  );
}
