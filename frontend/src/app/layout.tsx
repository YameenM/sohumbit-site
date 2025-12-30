import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";


const siteName = "SohumBit";
const siteUrl = "https://sohumbit.com"; // change if different
const siteDescription =
  "Karachi-based software company building scalable products: QAYAM, QAYAM HMS, and business platforms for hospitality & operations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Software Products & Engineering`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "SohumBit",
    "Karachi software company",
    "product engineering",
    "web development",
    "Next.js",
    "Django",
    "hospitality software",
    "hotel management system",
    "booking platform",
    "Travel software",
    "HR Finance Software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Software Products & Engineering`,
    description: siteDescription,
    images: [
      {
        url: "/og.png", // add later
        width: 1200,
        height: 630,
        alt: `${siteName} — Software Products & Engineering`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Software Products & Engineering`,
    description: siteDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
