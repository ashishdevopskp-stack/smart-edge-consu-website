import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./footer/page";
import FloatingButtons from "./FloatingButtons";
import TopBanner from "./TopBanner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const siteUrl = "https://smartedgeeducationconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Smart Edge Education Consultancy | Admission & Career Guidance",
    template: "%s | Smart Edge Education Consultancy",
  },

  description:
    "Smart Edge Education Consultancy provides trusted admission guidance for Engineering, Medical, Management, Pharmacy, Nursing, Law, Polytechnic, ITI, Distance & Online Education. Free career counselling, verified colleges, scholarship guidance, and complete admission support.",

  applicationName: "Smart Edge Education Consultancy",

  keywords: [
    "Smart Edge Education Consultancy",
    "Education Consultancy",
    "Admission Consultancy",
    "College Admission",
    "Career Counselling",
    "Engineering Admission",
    "Medical Admission",
    "B.Tech Admission",
    "MBA Admission",
    "BCA Admission",
    "MCA Admission",
    "BBA Admission",
    "Nursing Admission",
    "Pharmacy Admission",
    "Law Admission",
    "Distance Education",
    "Online Education",
    "UGC Approved Colleges",
    "AICTE Approved Colleges",
    "NCTE Approved Colleges",
    "PCI Approved Colleges",
    "Admission Guidance India",
    "Scholarship Guidance",
    "Education Consultant India",
  ],

  authors: [
    {
      name: "Smart Edge Education Consultancy",
    },
  ],

  creator: "Smart Edge Education Consultancy",

  publisher: "Smart Edge Education Consultancy",

  category: "Education",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Smart Edge Education Consultancy",

    title:
      "Smart Edge Education Consultancy | Admission & Career Guidance",

    description:
      "Get expert admission guidance for Engineering, Medical, Management, Nursing, Pharmacy, Law, Distance & Online Education. Free career counselling with complete admission support.",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Smart Edge Education Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Smart Edge Education Consultancy | Admission & Career Guidance",

    description:
      "Expert admission counselling for top colleges across India.",

    images: ["/logo.png"],
  },

  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "google-site-verification=kna-PyIBUI9imLZAp8HtMyLYR49Gi7buBKO4oThri2s",
   
  },
};

export const viewport: Viewport = {
  themeColor: "#1565C0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable}`}
    >
      <body>
        <TopBanner />
        <Navbar />

        <main
          style={{
            paddingTop: "var(--nav-h,68px)",
            minHeight: "60vh",
          }}
        >
          {children}
        </main>

        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}