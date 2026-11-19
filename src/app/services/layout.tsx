import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Architectural Design, Turnkey Villas & Civil Contracting | Shivom Builders",
  description:
    "End-to-end building lifecycle in-house: 2D/3D Architectural Floor Plans, Elevation Design, RCC Structural Engineering, and Snag-free Luxury Villa Handover in Indore.",
  alternates: {
    canonical: "https://shivombuilder.com/services",
  },
  openGraph: {
    title: "Our Services — Architectural Design, Turnkey Villas & Civil Contracting | Shivom Builders",
    description:
      "End-to-end building lifecycle in-house: 2D/3D Architectural Floor Plans, Elevation Design, RCC Structural Engineering, and Snag-free Luxury Villa Handover in Indore.",
    url: "https://shivombuilder.com/services",
    siteName: "Shivom Builders & Developers",
    images: [{ url: "/images/hero/hero-reveal-base.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
