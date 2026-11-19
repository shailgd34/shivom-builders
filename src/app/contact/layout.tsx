import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Request Free Site Visit & Cost Estimate | Shivom Builders Indore",
  description:
    "Get in touch with Shivom Builders & Developers in Indore. Free on-site inspection, 100% locked-cost BOQ estimate, and direct consultation with senior civil engineers.",
  alternates: {
    canonical: "https://shivombuilder.com/contact",
  },
  openGraph: {
    title: "Contact Us — Request Free Site Visit & Cost Estimate | Shivom Builders Indore",
    description:
      "Get in touch with Shivom Builders & Developers in Indore. Free on-site inspection, 100% locked-cost BOQ estimate, and direct consultation with senior civil engineers.",
    url: "https://shivombuilder.com/contact",
    siteName: "Shivom Builders & Developers",
    images: [{ url: "/images/hero/villa-exterior.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
