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
    default: "Shivom Builders & Developers — Best Builder & Construction Work in Indore",
    template: "%s | Shivom Builders — Best Builder in Indore",
  },
  description:
    "Shivom Builders & Developers is recognized as the best builder in Indore and top developers for luxury villas, independent duplexes, and best construction work in Indore. 10+ years of certified civil engineering, locked-cost BOQ, and 100% on-time handover.",
  keywords: [
    "best builder in indore",
    "best construction work in indore",
    "best developers near indore",
    "top builders in indore",
    "best work in indore",
    "top 10 builders in indore",
    "best construction company in indore",
    "best civil contractor in indore",
    "top builders near indore",
    "shivom builders",
    "shivom builders indore",
    "shivom builder",
    "luxury villa construction indore",
    "turnkey house construction indore",
    "duplex construction indore",
    "building contractors in indore",
    "commercial builders in indore",
    "best home builders indore",
    "nipania builders indore",
    "bypass road builders indore",
    "super corridor villa builders indore",
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
    siteName: "Shivom Builders & Developers — Best Builder in Indore",
    title: "Shivom Builders & Developers — Best Builder & Construction Work in Indore",
    description:
      "Ranked #1 best builder in Indore and top developers for luxury residential villas, independent duplexes, and best construction work in Indore. 10+ years of engineering excellence.",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 800,
        alt: "Shivom Builders — Best Builder in Indore Logo",
      },
      {
        url: "/images/hero/after.png",
        width: 1200,
        height: 630,
        alt: "Shivom Builders — Luxury Residential Architecture in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivom Builders & Developers — Best Builder & Construction Work in Indore",
    description:
      "Ranked #1 best builder in Indore and top developers for luxury residential villas, independent duplexes, and best construction work in Indore.",
    images: ["/images/logo.webp", "/images/hero/after.png"],
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
  verification: {
    google: "8Iq6AHeRkc-qpZ82MWKapxl5ouslEejoXOpS-gpV8SM",
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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://shivombuilder.com/#website",
        "url": "https://shivombuilder.com",
        "name": "Shivom Builders & Developers",
        "alternateName": ["Shivom Builder", "Shivom Builders Indore", "Shivom Construction Indore"],
        "description": "Ranked Best Builder in Indore for Luxury Residential Villas, Independent Duplexes & Turnkey Civil Construction.",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://shivombuilder.com/#organization"
        }
      },
      {
        "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": "https://shivombuilder.com/#organization",
        "name": "Shivom Builders & Developers",
        "alternateName": ["Shivom Builder", "Shivom Builders Indore"],
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
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://shivombuilder.com/#nav-about",
        "name": "About Us",
        "description": "Over 10 years of trusted civil engineering and architecture excellence in Indore. Meet our leadership and engineering team.",
        "url": "https://shivombuilder.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://shivombuilder.com/#nav-services",
        "name": "Our Services",
        "description": "Turnkey luxury villa construction, 3D architectural elevations, structural drawings, and civil contracting in Indore.",
        "url": "https://shivombuilder.com/services"
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://shivombuilder.com/#nav-projects",
        "name": "Our Projects",
        "description": "Explore completed luxury villas, contemporary duplexes, and commercial landmarks built by Shivom Builders in Indore.",
        "url": "https://shivombuilder.com/projects"
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://shivombuilder.com/#nav-contact",
        "name": "Contact Us",
        "description": "Get a free on-site consultation and line-item BOQ cost estimate with our lead civil engineering team.",
        "url": "https://shivombuilder.com/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://shivombuilder.com/#nav-reviews",
        "name": "Client Reviews",
        "description": "Read verified 5-star homeowner reviews and testimonials from luxury villa clients across Indore.",
        "url": "https://shivombuilder.com/testimonials"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8Iq6AHeRkc-qpZ82MWKapxl5ouslEejoXOpS-gpV8SM" />
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
