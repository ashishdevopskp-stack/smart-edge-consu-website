import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 800,
            fontSize: "clamp(64px, 12vw, 120px)",
            lineHeight: 1,
            color: "#1565C0",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 700,
            fontSize: "clamp(22px, 4vw, 28px)",
            margin: "12px 0 8px",
            color: "#0F172A",
          }}
        >
          This page took a different admission route.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#475569",
            margin: "0 0 32px",
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Let&rsquo;s get you back on track to find the right college
          and course guidance.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 8,
              background: "#1565C0",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Go to Homepage
          </Link>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 8,
              background: "transparent",
              color: "#1565C0",
              border: "1px solid #CBD5E1",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}