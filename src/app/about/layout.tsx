import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Luxury Builders in Indore | Shivom Builders & Developers",
  description:
    "With over 10 years of construction excellence in Indore, Shivom Builders combines ISO 9001 certified engineering, trusted materials, and 100% on-time handover.",
  alternates: {
    canonical: "https://shivombuilder.com/about",
  },
  openGraph: {
    title: "About Us — Luxury Builders in Indore | Shivom Builders & Developers",
    description:
      "With over 10 years of construction excellence in Indore, Shivom Builders combines ISO 9001 certified engineering, trusted materials, and 100% on-time handover.",
    url: "https://shivombuilder.com/about",
    siteName: "Shivom Builders & Developers",
    images: [{ url: "/images/about/welcome-duplex-clean.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
