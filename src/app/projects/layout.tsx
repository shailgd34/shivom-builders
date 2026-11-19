import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Projects — Luxury Residential Villas & Bungalows in Indore | Shivom Builders",
  description:
    "Explore luxury residential villas, independent duplex bungalows, and commercial landmarks constructed by Shivom Builders across prime locations in Indore.",
  alternates: {
    canonical: "https://shivombuilder.com/projects",
  },
  openGraph: {
    title: "Completed Projects — Luxury Residential Villas & Bungalows in Indore | Shivom Builders",
    description:
      "Explore luxury residential villas, independent duplex bungalows, and commercial landmarks constructed by Shivom Builders across prime locations in Indore.",
    url: "https://shivombuilder.com/projects",
    siteName: "Shivom Builders & Developers",
    images: [{ url: "/images/hero/after.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
