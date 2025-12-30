import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-20 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          About {site.shortName}
        </h1>

        <p className="mt-6 text-slate-600">
          {site.shortName} is a Pakistan-registered software company based in
          Karachi, focused on building modern, reliable software products for
          hospitality and business operations.
        </p>

        <p className="mt-4 text-slate-600">
          We design and develop systems that solve real operational problems 
          not generic software built for demos or short-term use.
        </p>

        <h2 className="mt-12 text-xl font-semibold">
          What we focus on
        </h2>

        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Product-driven software development</li>
          <li>• Hospitality and booking platforms</li>
          <li>• Business and operations management systems</li>
          <li>• Scalable backend and frontend architecture</li>
        </ul>

        <h2 className="mt-12 text-xl font-semibold">
          Our approach
        </h2>

        <p className="mt-4 text-slate-600">
          We build with a long-term mindset. Our products are designed to scale,
          evolve, and support real businesses as they grow.
        </p>

        <p className="mt-4 text-slate-600">
          From system architecture to user experience, every decision is made
          with reliability, clarity, and maintainability in mind.
        </p>

        <h2 className="mt-12 text-xl font-semibold">
          Location
        </h2>

        <p className="mt-4 text-slate-600">
          Headquartered in {site.location}, serving clients and users across
          Pakistan.
        </p>
      </div>
    </Container>
  );
}
