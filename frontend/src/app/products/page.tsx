import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore SohumBit products: QAYAM, QAYAM HMS, and HisabKitab (business operations platform). Built for Pakistan-first workflows.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <Container>
      <div className="py-16 sm:py-20 max-w-4xl">
        {/* Page header */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
          Our Products
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
          SOHUMBIT builds focused software products designed for real-world
          business operations in Pakistan, with an emphasis on reliability,
          clarity, and long-term scalability.
        </p>

        {/* QAYAM */}
        <div className="mt-10 rounded-2xl border border-slate-200 p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            QAYAM
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            QAYAM is a booking marketplace for stays across Pakistan, connecting
            travelers with hotels, guest houses, and unique properties through a
            simple and transparent booking experience.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>• Property listings and discovery</li>
            <li>• Real-time availability and booking flow</li>
            <li>• Host dashboards and earnings visibility</li>
            <li>• Guest booking and stay management</li>
          </ul>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Status: In active development
            </p>

            <span className="text-xs sm:text-sm font-medium text-emerald-600">
              Public platform
            </span>
          </div>
        </div>

        {/* HISABKITAB */}
        <div className="mt-8 rounded-2xl border border-slate-200 p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            HisabKitab
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            HisabKitab is a business accounting and operations platform designed
            for small and mid-sized companies in Pakistan, with support for local
            workflows, compliance, and multi-entity operations.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>• General ledger, vouchers, and chart of accounts</li>
            <li>• Accounts receivable and payable (AR/AP)</li>
            <li>• Expense tracking and approvals</li>
            <li>• Payroll, salaries, and staff records</li>
            <li>• Multi-entity and role-based access</li>
          </ul>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs">
            <p className="text-slate-500 text-center">
              Status: In active development
            </p>

            <span className="text-xs sm:text-sm font-medium text-slate-600 text-center">
              Business & finance platform
            </span>
          </div>
        </div>

        {/* QAYAM HMS */}
        <div className="mt-8 rounded-2xl border border-slate-200 p-5 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            QAYAM HMS
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            QAYAM HMS is a hotel management system built for operational control,
            reporting, and scale designed specifically for hospitality
            businesses operating in Pakistan.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>• Front desk operations and reservations</li>
            <li>• Room, stay, and occupancy management</li>
            <li>• Billing, invoicing, and accounting workflows</li>
            <li>• Staff activity and operational reporting</li>
          </ul>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Status: Private beta
            </p>

            <span className="text-xs sm:text-sm font-medium text-slate-600">
              Internal & enterprise use
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
