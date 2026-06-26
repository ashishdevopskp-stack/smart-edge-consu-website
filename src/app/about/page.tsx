"use client";

import React from "react";
import {
  ShieldCheck, BadgeCheck, Users,
  BookOpen, Phone, MessageCircle, ArrowRight,
} from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

const STREAMS = [
  "Engineering", "Medical", "Management", "Law",
  "Commerce", "Arts", "Science", "Education",
];

const VALUES = [
  { icon: ShieldCheck, color: "#2563EB", bg: "#EFF6FF", title: "100% Genuine",     note: "Transparent counselling, no hidden fees" },
  { icon: BadgeCheck,  color: "#059669", bg: "#ECFDF5", title: "Verified Colleges", note: "UGC · AICTE · NCTE approved only"        },
  { icon: Users,       color: "#D97706", bg: "#FEF3C7", title: "Student First",     note: "Every decision guided by your goals"     },
  { icon: BookOpen,    color: "#7C3AED", bg: "#F5F3FF", title: "All Streams",       note: "Regular & Distance Education covered"    },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --c-bg:        #F8FAFF;
          --c-surface:   #FFFFFF;
          --c-border:    #E4E7F0;
          --c-text:      #0F1628;
          --c-muted:     #64748B;
          --c-subtle:    #94A3B8;
          --c-blue:      #2563EB;
          --c-green:     #059669;
          --f-display:   'Plus Jakarta Sans', sans-serif;
          --f-body:      'Inter', sans-serif;
          --radius-md:   12px;
          --radius-lg:   16px;
          --radius-xl:   24px;
          --radius-full: 9999px;
          --shadow-sm:   0 1px 3px rgba(15,22,40,.06), 0 1px 2px rgba(15,22,40,.04);
          --shadow-md:   0 4px 16px rgba(15,22,40,.08), 0 2px 6px rgba(15,22,40,.04);
          --shadow-lg:   0 12px 40px rgba(15,22,40,.10), 0 4px 12px rgba(15,22,40,.06);
          --shadow-xl:   0 24px 64px rgba(15,22,40,.12), 0 8px 24px rgba(15,22,40,.06);
        }

        .ab-page {
          position: relative;
          min-height: 100vh;
          background: var(--c-bg);
          font-family: var(--f-body);
          overflow: hidden;
          padding-top: 100px;
        }

        /* blobs */
        .ab-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .ab-blob-1 { width: 480px; height: 480px; top: -100px; right: -120px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .6; }
        .ab-blob-2 { width: 360px; height: 360px; bottom: 10%; left: -80px;   background: radial-gradient(circle, #D1FAE5, transparent 70%); opacity: .55; }
        .ab-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        /* ── hero ── */
        .ab-hero {
          position: relative; z-index: 5;
          max-width: 1160px; margin: 0 auto;
          padding: 40px 40px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        /* image — LEFT */
        .ab-img-side {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          order: 1;
        }
        .ab-ring  { position: absolute; width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: abSpin 30s linear infinite; }
        .ab-ring2 { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes abSpin { to { transform: rotate(360deg); } }
        .ab-img-wrap { position: relative; z-index: 2; }

        .ab-badge {
          position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: var(--radius-full);
          background: var(--c-surface); border: 1.5px solid #DBEAFE;
          box-shadow: var(--shadow-lg); white-space: nowrap;
          font-family: var(--f-display); font-size: 12px; font-weight: 700; color: #1D4ED8;
        }
        .ab-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #059669; box-shadow: 0 0 0 2px #D1FAE5; }

        /* text — RIGHT */
        .ab-text-side {
          display: flex; flex-direction: column; gap: 20px;
          order: 2;
        }

        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg, #FEF3C7, #FFFBEB);
          border: 1px solid #FDE68A; color: #92400E;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); width: fit-content;
        }
        .ab-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #F59E0B; animation: abPulse 1.4s ease-in-out infinite; }
        @keyframes abPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .ab-h1 {
          font-family: var(--f-display);
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.022em;
          color: var(--c-text);
        }
        .ab-h1-grad { background: linear-gradient(120deg, #1D4ED8, #3B82F6, #0EA5E9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .ab-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }

        .ab-streams { display: flex; flex-wrap: wrap; gap: 7px; }
        .ab-stream {
          padding: 4px 12px; border-radius: var(--radius-full);
          background: var(--c-surface); border: 1px solid var(--c-border);
          font-size: 12px; font-weight: 500; color: var(--c-muted);
          box-shadow: var(--shadow-sm);
        }

        .ab-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .ab-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 20px; border-radius: var(--radius-md);
          font-family: var(--f-display); font-size: 13.5px; font-weight: 700;
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .15s;
        }
        .ab-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .ab-btn:hover  { transform: translateY(-2px); }
        .ab-btn:active { transform: translateY(0) scale(.98); }
        .ab-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .ab-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .ab-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .ab-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        /* ── value cards ── */
        .ab-values-wrap {
          position: relative; z-index: 5;
          max-width: 1160px; margin: 0 auto;
          padding: 0 40px 80px;
        }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .ab-value-card {
          display: flex; flex-direction: column; gap: 10px;
          padding: 20px 18px; border-radius: var(--radius-lg);
          background: var(--c-surface); border: 1px solid var(--c-border);
          box-shadow: var(--shadow-sm);
          transition: box-shadow .2s, transform .2s;
        }
        .ab-value-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .ab-value-icon  { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .ab-value-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .ab-value-note  { font-size: 12px; color: var(--c-muted); line-height: 1.5; }

        /* ── mission strip ── */
        .ab-mission {
          position: relative; z-index: 5;
          max-width: 1160px; margin: 0 auto 80px;
          padding: 0 40px;
        }
        .ab-mission-inner {
          background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%);
          border-radius: var(--radius-xl);
          padding: 36px 40px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          position: relative; overflow: hidden;
        }
        .ab-mission-inner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(255,255,255,.12), transparent 60%);
        }
        .ab-mission-text  { position: relative; }
        .ab-mission-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .ab-mission-quote { font-family: var(--f-display); font-size: clamp(16px, 2vw, 22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .ab-mission-cta {
          position: relative; flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 12px 22px; border-radius: var(--radius-md);
          background: #fff; color: #1D4ED8;
          font-family: var(--f-display); font-size: 13.5px; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,.12);
          transition: transform .15s, box-shadow .15s;
        }
        .ab-mission-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        /* ── responsive ── */
        @media (max-width: 1024px) {
          .ab-hero        { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .ab-img-side    { order: 2; }   /* image goes BELOW on mobile */
          .ab-text-side   { order: 1; }   /* text stays on TOP on mobile */
          .ab-values-grid { grid-template-columns: 1fr 1fr; }
          .ab-values-wrap { padding: 0 24px 56px; }
          .ab-mission     { padding: 0 24px; margin-bottom: 56px; }
          .ab-ring  { width: 300px; height: 300px; }
          .ab-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .ab-hero          { padding: 16px 16px 48px; }
          .ab-values-wrap   { padding: 0 16px 48px; }
          .ab-mission       { padding: 0 16px; margin-bottom: 48px; }
          .ab-mission-inner { flex-direction: column; padding: 28px 24px; }
          .ab-ctas          { flex-direction: column; }
          .ab-btn           { justify-content: center; }
          .ab-blob          { display: none; }
        }
        @media (max-width: 420px) {
          .ab-values-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ab-page">
        <div className="ab-blob ab-blob-1" />
        <div className="ab-blob ab-blob-2" />
        <div className="ab-dotgrid" />

        {/* ── HERO ── */}
        <div className="ab-hero">

          {/* IMAGE — left on desktop, bottom on mobile */}
          <div className="ab-img-side">
            <div className="ab-ring" />
            <div className="ab-ring2" />
     
              <CurvedImage
                src="/logo.png"
                alt="Smart Edge Education Consultancy"
                size="lg"
              />
             
            
          </div>

          {/* TEXT — right on desktop, top on mobile */}
          <div className="ab-text-side">
            <span className="ab-eyebrow">
              <span className="ab-eyebrow-dot" />
              About Us
            </span>

            <h1 className="ab-h1">
              Smart Edge<br />
              <span className="ab-h1-grad">Education Consultancy</span>
            </h1>

            <p className="ab-body">
              A trusted admission and career guidance platform dedicated to helping
              students achieve their academic and professional goals. We specialize in
              admission support for <strong>UGC</strong>, <strong>AICTE</strong>, and{" "}
              <strong>NCTE</strong> approved colleges and universities across India.
            </p>

            <p className="ab-body">
              Our services cover both <strong>Regular</strong> and{" "}
              <strong>Distance Education</strong>, with guidance across a wide range of streams:
            </p>

            <div className="ab-streams">
              {STREAMS.map((s) => (
                <span className="ab-stream" key={s}>{s}</span>
              ))}
            </div>

            <div className="ab-ctas">
              <a href={`tel:${PHONE}`} className="ab-btn ab-btn-blue">
                <Phone size={14} strokeWidth={2} />
                Call Us Now
              </a>
                <a
              
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn ab-btn-green"
              >
                <MessageCircle size={14} strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>{/* end ab-hero */}

        {/* ── VALUE CARDS ── */}
        <div className="ab-values-wrap">
          <div className="ab-values-grid">
            {VALUES.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="ab-value-card" key={title}>
                <div className="ab-value-icon" style={{ background: bg }}>
                  <Icon size={18} color={color} strokeWidth={2} />
                </div>
                <p className="ab-value-title">{title}</p>
                <p className="ab-value-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MISSION STRIP ── */}
        <div className="ab-mission">
          <div className="ab-mission-inner">
            <div className="ab-mission-text">
              <p className="ab-mission-label">Our Mission</p>
              <p className="ab-mission-quote">
                Simplify the admission process with genuine, transparent, and reliable
                counselling — supporting every student from course selection to final admission.
              </p>
            </div>
            <a
            
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ab-mission-cta"
            >
              Get Free Guidance
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

      </div>
    </>
  );
}