import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-cycle product engineering: web apps, backend systems, UI/UX, integrations, and product & project management.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Container>
      <div className="py-16 sm:py-20 max-w-4xl">
        {/* Page header */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
          Services
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          In addition to building our own software products, SOHUMBIT provides
          software development and consulting services for organizations that
          require reliable, production-ready systems built for long-term use.
        </p>

        {/* Service 1 */}
        <div className="mt-10 rounded-2xl border p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            Custom Software Development
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We design and build custom software systems tailored to real business
            operations not demos or throwaway prototypes.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Web-based business and operational applications</li>
            <li>• Internal dashboards, admin panels, and portals</li>
            <li>• API-first backend systems and integrations</li>
            <li>• Maintainable, documented, and scalable architectures</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="mt-8 rounded-2xl border p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            SaaS Product Development
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We help founders and organizations build scalable SaaS products from
            early-stage MVPs to stable, production-grade platforms.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Product architecture and technical planning</li>
            <li>• Frontend and backend implementation</li>
            <li>• Authentication, roles, and access control</li>
            <li>• Performance, security, and operational readiness</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="mt-8 rounded-2xl border p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            IT Consulting & System Design
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We provide technical consulting to help organizations plan, review,
            and improve their software systems and internal workflows.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• System analysis and technical audits</li>
            <li>• Architecture and technology selection</li>
            <li>• Process automation and workflow optimization</li>
            <li>• Operations-focused and domain-specific consulting</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="mt-8 rounded-2xl border p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            Product & Project Management
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We offer structured product and project management for teams building
            complex software systems, ensuring clarity, alignment, and predictable
            delivery.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Product discovery and requirements definition</li>
            <li>• Roadmap planning and priority management</li>
            <li>• Agile execution and delivery tracking</li>
            <li>• Stakeholder coordination and delivery oversight</li>
          </ul>
        </div>

        <div className="mt-12 text-sm text-slate-500 max-w-2xl">
          For service inquiries or partnership discussions, please contact us via
          email.
        </div>
      </div>
    </Container>
  );
}
