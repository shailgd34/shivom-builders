import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CinematicLoader from "@/components/CinematicLoader";
import { PageMotionProvider } from "@/components/motion/StruktMotion";
import companyData from "@/data/company.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivombuilder.com"),
  title: {
    default: "Best Builder in Indore — Shivom Builder | Luxury Villas & Construction",
    template: "%s | Best Builder in Indore — Shivom Builder",
  },
  description:
    "Shivom Builder is ranked the best builder in Indore for luxury residential villas, independent duplexes, and commercial landmark construction. Over 10 years of ISO 9001 certified civil engineering excellence with locked budgets and 100% on-time handover.",
  keywords: [
    "best builder in indore",
    "top builder in indore",
    "best construction company in indore",
    "top 10 builders in indore",
    "shivom builders",
    "shivom builders indore",
    "luxury villa construction indore",
    "turnkey house construction indore",
    "civil contractors in indore",
    "building contractors in indore",
    "duplex construction indore",
    "commercial builders in indore",
    "home construction cost indore",
    "nipania builders indore",
    "bypass road builders indore",
    "super corridor villa builders indore",
    "architects and builders in indore",
  ],
  authors: [{ name: "Shivom Builders & Developers" }],
  creator: "Shivom Builders & Developers",
  publisher: "Shivom Builders & Developers",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/images/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.webp",
    apple: [
      { url: "/images/logo.webp", type: "image/webp" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shivombuilder.com",
    siteName: "Shivom Builder — Best Builder in Indore",
    title: "Best Builder in Indore — Shivom Builder | Luxury Villas & Construction",
    description:
      "Premier residential construction, bespoke luxury villas, and commercial landmark engineering in Indore, Madhya Pradesh. Over 10 years of certified civil craftsmanship.",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 800,
        alt: "Shivom Builder — Best Builder in Indore Logo",
      },
      {
        url: "/images/hero/strukt-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shivom Builders — Luxury Residential Architecture in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Builder in Indore — Shivom Builder | Luxury Villas & Construction",
    description:
      "Premier residential construction, bespoke luxury villas, and commercial landmark engineering in Indore, Madhya Pradesh.",
    images: ["/images/logo.webp", "/images/hero/strukt-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shivombuilder.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://shivombuilder.com/#organization",
    "name": "Shivom Builder — Best Builder in Indore",
    "alternateName": ["Shivom Builders", "Shivom Builders Indore", "Shivom Builders & Developers"],
    "url": "https://shivombuilder.com",
    "logo": "https://shivombuilder.com/images/logo.webp",
    "image": "https://shivombuilder.com/images/hero/strukt-hero.jpg",
    "description": "Recognized as the best builder in Indore for luxury residential villas, independent duplexes, turnkey home construction, and commercial landmarks.",
    "telephone": companyData.contact.phone,
    "email": companyData.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "77, behind BCM Height, opposite Chinmay Sagar Gurukul, Suman Nagar",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452010",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7533",
      "longitude": "75.8937",
    },
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "AdministrativeArea", "name": "Madhya Pradesh" },
    ],
    "priceRange": "₹₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction & Civil Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Residential Villa Construction",
            "description": "Bespoke architectural villas and duplex bungalows in prime Indore locations.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey General Contracting",
            "description": "Single-accountability structural construction with 100% locked BOQ.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Complex Civil Construction",
            "description": "Engineered commercial towers and retail arcades delivered on strict timelines.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/logo.webp" />
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-PT56QQCW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#131313] antialiased selection:bg-[#ff2600] selection:text-white">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT56QQCW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CinematicLoader />
        <PageMotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PageMotionProvider>
        <BackToTop />
      </body>
    </html>
  );
}
