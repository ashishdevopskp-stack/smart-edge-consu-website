"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";

/* ── Constants ──────────────────────────────────────────────────────── */
const PHONE       = "9576461623";
const WA_NUMBER   = "919576461623";
const WA_MSG      = encodeURIComponent("Hi, I want admission guidance.");
const FB_LINK     = "https://www.facebook.com/share/197eiV4i4F/"; // ← update to real FB URL

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission",       href: "/about/ourmission"     },
      { label: "Our Vision",        href: "/about/ourvision"      },
      { label: "Why Choose Us",     href: "/about/whychooseus"    },
      { label: "Our Experience",    href: "/about/ourexperience"  },
      { label: "Founder's Message", href: "/about/foundermessage" },
    ],
  },
  { label: "Courses",   href: "/courses"           },
  { label: "Services",  href: "/ourservices"        },
  { label: "Admission", href: "/admission-process"  },
  { label: "Gallery",   href: "/galary"            },
  { label: "Contact",   href: "/contact"            },
];

/* ── Facebook SVG icon (brand glyph, not a lucide icon) ───────────────── */
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.86h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════════ */
export default function Navbar(): React.JSX.Element {
  const pathname                  = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown]   = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --fd: 'Plus Jakarta Sans', sans-serif;
          --fb: 'Inter', sans-serif;
          --nav-h: 68px;
          --rmd: 10px;
          --rlg: 14px;
          --rfull: 9999px;
        }

        /* ── NAVBAR SHELL ── */
        .nb {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: var(--nav-h);
          background: rgba(255,255,255,0.92);
          -webkit-backdrop-filter: saturate(180%) blur(18px);
          backdrop-filter: saturate(180%) blur(18px);
          border-bottom: 1px solid rgba(228,231,240,0);
          transition: border-color .25s, box-shadow .25s;
        }
        .nb.scrolled {
          border-bottom-color: #E4E7F0;
          box-shadow: 0 2px 20px rgba(15,22,40,.07);
        }

        .nb-inner {
          max-width: 1200px; margin: 0 auto;
          height: var(--nav-h);
          display: flex; align-items: center;
          padding: 0 32px; gap: 0;
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
          margin-right: 28px;
        }
        .nb-logo-img { width: auto; height: 40px; object-fit: contain; }

        /* ── DESKTOP NAV ── */
        .nb-links {
          display: flex; align-items: center; gap: 2px;
          flex: 1; list-style: none; margin: 0; padding: 0;
        }
        .nb-item { position: relative; }

        .nb-link {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 8px 12px; border-radius: var(--rmd);
          font-family: var(--fd); font-size: 13px; font-weight: 600;
          color: #475569; text-decoration: none;
          transition: color .15s, background .15s;
          white-space: nowrap; cursor: pointer;
          background: none; border: none; position: relative;
        }
        .nb-link:hover     { color: #0F1628; background: #F1F5F9; }
        .nb-link.active    { color: #1D4ED8; background: #EFF6FF; }
        .nb-link svg       { opacity: .6; transition: transform .2s; }
        .nb-link:hover svg { opacity: 1; }
        .nb-link.dd-open svg { transform: rotate(180deg); opacity: 1; }
        .nb-link.active::after {
          content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%; background: #1D4ED8;
        }

        /* ── DROPDOWN ── */
        .nb-drop {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #fff; border: 1px solid #E4E7F0;
          border-radius: var(--rlg); min-width: 220px;
          box-shadow: 0 12px 40px rgba(15,22,40,.12), 0 2px 8px rgba(15,22,40,.06);
          padding: 6px; opacity: 0; pointer-events: none;
          transition: opacity .18s, transform .18s; list-style: none;
        }
        .nb-drop.open {
          opacity: 1; pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .nb-drop::before {
          content: ''; position: absolute; top: -6px; left: 50%; transform: translateX(-50%);
          width: 12px; height: 6px; background: #fff;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .nb-drop-item a {
          display: block; padding: 9px 13px; border-radius: 8px;
          font-family: var(--fd); font-size: 13px; font-weight: 600;
          color: #475569; text-decoration: none;
          transition: color .12s, background .12s;
        }
        .nb-drop-item a:hover { color: #1D4ED8; background: #EFF6FF; }

        /* ── FB ICON (desktop) ── */
        .nb-fb {
          display: inline-flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 8px;
          background: #EFF6FF; color: #1D4ED8;
          text-decoration: none; margin-left: 6px; flex-shrink: 0;
          transition: background .15s, transform .15s;
        }
        .nb-fb:hover { background: #1D4ED8; color: #fff; transform: translateY(-1px); }

        /* ── CTA BUTTONS ── */
        .nb-ctas {
          display: flex; align-items: center; gap: 8px;
          margin-left: 12px; flex-shrink: 0;
        }
        .nb-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: var(--rfull);
          font-family: var(--fd); font-size: 13px; font-weight: 700;
          text-decoration: none; transition: transform .15s, box-shadow .15s;
          position: relative; overflow: hidden; white-space: nowrap;
        }
        .nb-cta::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .nb-cta:hover { transform: translateY(-1px); }
        .nb-cta-call {
          background: linear-gradient(135deg,#1D4ED8,#3B82F6);
          color: #fff; box-shadow: 0 3px 10px rgba(37,99,235,.28);
        }
        .nb-cta-call:hover { box-shadow: 0 6px 18px rgba(37,99,235,.38); }
        .nb-cta-wa {
          background: linear-gradient(135deg,#047857,#059669);
          color: #fff; box-shadow: 0 3px 10px rgba(5,150,105,.24);
        }
        .nb-cta-wa:hover { box-shadow: 0 6px 18px rgba(5,150,105,.32); }

        /* ── MOBILE BRAND NAME ── */
        .nb-mobile-brand {
          display: none;
          flex: 1;
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #0F1628;
          letter-spacing: -0.02em;
          line-height: 1.15;
          padding: 0 8px;
        }
        .nb-mobile-brand span { color: #1D4ED8; }

        /* ── HAMBURGER ── */
        .nb-burger {
          display: none; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: var(--rmd);
          background: none; border: 1.5px solid #E4E7F0;
          cursor: pointer; color: #0F1628;
          transition: background .15s, border-color .15s;
          flex-shrink: 0;
        }
        .nb-burger:hover { background: #F1F5F9; border-color: #CBD5E1; }

        /* ── MOBILE OVERLAY ── */
        .nb-overlay {
          display: none; position: fixed; inset: 0; z-index: 999;
          background: rgba(15,22,40,.45);
          -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);
          opacity: 0; pointer-events: none; transition: opacity .25s;
        }
        .nb-overlay.open { opacity: 1; pointer-events: auto; }

        /* ── MOBILE DRAWER ── */
        .nb-drawer {
          display: none; position: fixed; top: 0; right: 0; bottom: 0; z-index: 1001;
          width: min(320px, 88vw); background: #fff;
          box-shadow: -8px 0 40px rgba(15,22,40,.14);
          transform: translateX(100%); transition: transform .28s cubic-bezier(.4,0,.2,1);
          flex-direction: column; overflow-y: auto;
        }
        .nb-drawer.open { transform: translateX(0); }

        .nb-drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; border-bottom: 1px solid #F1F5F9;
          position: sticky; top: 0; background: #fff; z-index: 1;
        }
        .nb-drawer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .nb-drawer-close {
          width: 36px; height: 36px; border-radius: 8px;
          background: #F1F5F9; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #475569; transition: background .15s;
        }
        .nb-drawer-close:hover { background: #E2E8F0; }

        .nb-drawer-body { padding: 12px 12px 24px; flex: 1; }

        .nb-m-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 12px; border-radius: 10px;
          font-family: var(--fd); font-size: 14px; font-weight: 600;
          color: #334155; text-decoration: none;
          transition: color .15s, background .15s;
          cursor: pointer; background: none; border: none; width: 100%; text-align: left;
        }
        .nb-m-link:hover  { color: #1D4ED8; background: #EFF6FF; }
        .nb-m-link.active { color: #1D4ED8; background: #EFF6FF; font-weight: 700; }
        .nb-m-link svg    { transition: transform .2s; flex-shrink: 0; }
        .nb-m-link.dd-open svg { transform: rotate(180deg); }

        .nb-m-sub {
          overflow: hidden; max-height: 0; transition: max-height .28s ease; margin: 0 4px;
        }
        .nb-m-sub.open { max-height: 400px; }
        .nb-m-sub-item a {
          display: block; padding: 9px 16px; border-radius: 8px;
          font-family: var(--fd); font-size: 13px; font-weight: 500;
          color: #64748B; text-decoration: none; transition: color .12s, background .12s;
        }
        .nb-m-sub-item a:hover { color: #1D4ED8; background: #F8FAFF; }

        /* mobile FB row */
        .nb-m-fb {
          display: flex; align-items: center; gap: 8px;
          padding: 11px 12px; border-radius: 10px;
          font-family: var(--fd); font-size: 14px; font-weight: 600;
          color: #1D4ED8; text-decoration: none;
          transition: background .15s;
        }
        .nb-m-fb:hover { background: #EFF6FF; }

        .nb-drawer-ctas {
          padding: 16px 12px; border-top: 1px solid #F1F5F9;
          display: flex; flex-direction: column; gap: 10px;
          position: sticky; bottom: 0; background: #fff;
        }
        .nb-drawer-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px; border-radius: 10px;
          font-family: var(--fd); font-size: 14px; font-weight: 700;
          text-decoration: none; color: #fff;
          transition: transform .15s, box-shadow .15s;
          position: relative; overflow: hidden;
        }
        .nb-drawer-cta::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.16),transparent 60%); }
        .nb-drawer-cta:hover { transform: translateY(-1px); }
        .nb-drawer-cta-call { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.28); }
        .nb-drawer-cta-wa   { background: linear-gradient(135deg,#047857,#059669); box-shadow: 0 4px 14px rgba(5,150,105,.24); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nb-ctas .nb-cta-call { display: none; }
        }
        @media (max-width: 860px) {
          .nb-links, .nb-ctas, .nb-fb { display: none; }
          .nb-burger           { display: flex; }
          .nb-overlay, .nb-drawer { display: flex; }
          .nb-logo             { margin-right: 0; }
          .nb-mobile-brand     { display: block; }
        }
        @media (max-width: 400px) {
          .nb-inner { padding: 0 16px; }
          .nb-mobile-brand { font-size: 11.5px; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nb${scrolled ? " scrolled" : ""}`}>
        <div className="nb-inner" ref={dropRef}>

          {/* Logo */}
          <Link href="/" className="nb-logo">
            <Image
              src="/logo.png"
              alt="Smart Edge Education Consultancy"
              width={140} height={40}
              className="nb-logo-img"
              priority
            />
          </Link>

          {/* Mobile brand name — between logo and hamburger */}
          <div className="nb-mobile-brand">
            Smart Edge<br />
            <span>Education Consultancy</span>
          </div>

          {/* Desktop links */}
          <ul className="nb-links">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li className="nb-item" key={link.label}>
                  <button
                    className={`nb-link${isActive(link.href) ? " active" : ""}${dropdown === link.label ? " dd-open" : ""}`}
                    onClick={() => setDropdown((p) => (p === link.label ? null : link.label))}
                    aria-expanded={dropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown size={13} strokeWidth={2.5} />
                  </button>
                  <ul className={`nb-drop${dropdown === link.label ? " open" : ""}`} role="menu">
                    {link.children.map((child) => (
                      <li className="nb-drop-item" key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nb-item" key={link.label}>
                  <Link href={link.href} className={`nb-link${isActive(link.href) ? " active" : ""}`}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Facebook icon (desktop) */}
          <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="nb-fb" aria-label="Facebook">
            <FacebookIcon size={16} />
          </a>

          {/* Desktop CTAs */}
          <div className="nb-ctas">
            <a href={`tel:${PHONE}`} className="nb-cta nb-cta-call">
              <Phone size={13} strokeWidth={2} /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="nb-cta nb-cta-wa"
            >
              <MessageCircle size={13} strokeWidth={2} /> WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button className="nb-burger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div className={`nb-overlay${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen(false)} aria-hidden="true" />

      {/* ── MOBILE DRAWER ── */}
      <div className={`nb-drawer${mobileOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation">

        <div className="nb-drawer-head">
          <Link href="/" className="nb-drawer-logo">
            <Image src="/logo.png" alt="Smart Edge" width={120} height={36}
              style={{ height: 36, width: "auto", objectFit: "contain" }} priority />
          </Link>
          <button className="nb-drawer-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <nav className="nb-drawer-body">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className={`nb-m-link${isActive(link.href) ? " active" : ""}${dropdown === link.label ? " dd-open" : ""}`}
                  onClick={() => setDropdown((p) => (p === link.label ? null : link.label))}
                >
                  {link.label}
                  <ChevronDown size={14} strokeWidth={2} />
                </button>
                <div className={`nb-m-sub${dropdown === link.label ? " open" : ""}`}>
                  {link.children.map((child) => (
                    <div className="nb-m-sub-item" key={child.href}>
                      <Link href={child.href}>{child.label}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}
                className={`nb-m-link${isActive(link.href) ? " active" : ""}`}>
                {link.label}
              </Link>
            )
          )}
          {/* Facebook in drawer */}
          <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="nb-m-fb">
            <FacebookIcon size={16} /> Follow us on Facebook
          </a>
        </nav>

        <div className="nb-drawer-ctas">
          <a href={`tel:${PHONE}`} className="nb-drawer-cta nb-drawer-cta-call">
            <Phone size={15} strokeWidth={2} /> Call {PHONE}
          </a>
          <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="nb-drawer-cta nb-drawer-cta-wa">
            <MessageCircle size={15} strokeWidth={2} /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}