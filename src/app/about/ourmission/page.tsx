"use client";

import React from "react";
import { Target, ArrowRight, Phone, MessageCircle, Compass, Lightbulb, HeartHandshake } from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

interface Pillar {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  note: string;
}

const PILLARS: Pillar[] = [
  { icon: Compass,        color: "#2563EB", bg: "#EFF6FF", title: "Clear Direction",    note: "We map every student's unique academic path from day one." },
  { icon: Lightbulb,      color: "#D97706", bg: "#FEF3C7", title: "Informed Choices",   note: "Data-backed guidance so students pick the right course and college." },
  { icon: HeartHandshake, color: "#059669", bg: "#ECFDF5", title: "End-to-End Support", note: "We stay with you from shortlisting colleges to securing admission." },
];

export default function MissionPage(): React.JSX.Element {
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
          --f-display:   'Plus Jakarta Sans', sans-serif;
          --f-body:      'Inter', sans-serif;
          --radius-md:   12px;
          --radius-lg:   16px;
          --radius-xl:   24px;
          --radius-full: 9999px;
          --shadow-sm:   0 1px 3px rgba(15,22,40,.06), 0 1px 2px rgba(15,22,40,.04);
          --shadow-md:   0 4px 16px rgba(15,22,40,.08), 0 2px 6px rgba(15,22,40,.04);
          --shadow-lg:   0 12px 40px rgba(15,22,40,.10), 0 4px 12px rgba(15,22,40,.06);
        }

        .ms-page {
          position: relative; min-height: 100vh;
          background: var(--c-bg); font-family: var(--f-body);
          overflow: hidden; padding-top: 100px;
        }
        .ms-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .ms-blob-1 { width: 480px; height: 480px; top: -100px; left: -120px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .6; }
        .ms-blob-2 { width: 360px; height: 360px; bottom: 10%; right: -80px; background: radial-gradient(circle, #D1FAE5, transparent 70%); opacity: .55; }
        .ms-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        .ms-hero {
          position: relative; z-index: 5; max-width: 1160px; margin: 0 auto;
          padding: 40px 40px 72px; display: grid; grid-template-columns: 1fr 1fr;
          gap: 56px; align-items: center;
        }
        .ms-text-side { display: flex; flex-direction: column; gap: 20px; order: 1; }
        .ms-img-side  { position: relative; display: flex; align-items: center; justify-content: center; order: 2; }
        .ms-ring  { position: absolute; width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: msSpin 30s linear infinite; }
        .ms-ring2 { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes msSpin { to { transform: rotate(360deg); } }

        .ms-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          border: 1px solid #BFDBFE; color: #1D4ED8;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); width: fit-content;
        }
        .ms-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563EB; animation: msPulse 1.4s ease-in-out infinite; }
        @keyframes msPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .ms-h1 { font-family: var(--f-display); font-size: clamp(28px,3.2vw,44px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: var(--c-text); }
        .ms-h1-grad { background: linear-gradient(120deg,#1D4ED8,#3B82F6,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ms-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }
        .ms-statement {
          padding: 16px 20px; border-radius: var(--radius-lg);
          background: linear-gradient(135deg,#EFF6FF,#F0FDF4); border-left: 3px solid #2563EB;
          font-family: var(--f-display); font-size: 15px; font-weight: 600; color: #1E3A5F; line-height: 1.6;
        }

        .ms-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .ms-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 20px; border-radius: var(--radius-md);
          font-family: var(--f-display); font-size: 13.5px; font-weight: 700;
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s;
        }
        .ms-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .ms-btn:hover { transform: translateY(-2px); }
        .ms-btn:active { transform: translateY(0) scale(.98); }
        .ms-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .ms-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .ms-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .ms-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        .ms-pillars-wrap { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 0 40px 80px; }
        .ms-pillars-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .ms-pillar-card {
          display: flex; flex-direction: column; gap: 10px;
          padding: 22px 20px; border-radius: var(--radius-lg);
          background: var(--c-surface); border: 1px solid var(--c-border);
          box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s;
        }
        .ms-pillar-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .ms-pillar-icon  { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .ms-pillar-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .ms-pillar-note  { font-size: 13px; color: var(--c-muted); line-height: 1.55; }

        .ms-cta-strip { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto 80px; padding: 0 40px; }
        .ms-cta-inner {
          background: linear-gradient(135deg,#1D4ED8 0%,#2563EB 50%,#3B82F6 100%);
          border-radius: var(--radius-xl); padding: 36px 40px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          position: relative; overflow: hidden;
        }
        .ms-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .ms-cta-text  { position: relative; }
        .ms-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .ms-cta-quote { font-family: var(--f-display); font-size: clamp(16px,2vw,22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .ms-cta-btn {
          position: relative; flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 12px 22px; border-radius: var(--radius-md);
          background: #fff; color: #1D4ED8;
          font-family: var(--f-display); font-size: 13.5px; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s;
        }
        .ms-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .ms-hero { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .ms-img-side { order: 2; } .ms-text-side { order: 1; }
          .ms-pillars-grid { grid-template-columns: 1fr 1fr; }
          .ms-pillars-wrap { padding: 0 24px 56px; } .ms-cta-strip { padding: 0 24px; margin-bottom: 56px; }
          .ms-ring { width: 300px; height: 300px; } .ms-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .ms-hero { padding: 16px 16px 48px; } .ms-pillars-wrap { padding: 0 16px 48px; }
          .ms-cta-strip { padding: 0 16px; margin-bottom: 48px; }
          .ms-cta-inner { flex-direction: column; padding: 28px 24px; }
          .ms-ctas { flex-direction: column; } .ms-btn { justify-content: center; } .ms-blob { display: none; }
        }
        @media (max-width: 480px) { .ms-pillars-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="ms-page">
        <div className="ms-blob ms-blob-1" />
        <div className="ms-blob ms-blob-2" />
        <div className="ms-dotgrid" />

        <div className="ms-hero">
          <div className="ms-text-side">
            <span className="ms-eyebrow"><span className="ms-eyebrow-dot" />Our Mission</span>
            <h1 className="ms-h1">Simplifying<br /><span className="ms-h1-grad">Every Admission Journey</span></h1>
            <p className="ms-body">
              At Smart Edge Education Consultancy, our mission is to remove the confusion and stress surrounding
              college admissions. We believe every student deserves clear, honest, and personalised guidance —
              regardless of their background or stream.
            </p>
            <div className="ms-statement">
              "To simplify the admission process with genuine, transparent, and reliable counselling —
              supporting every student from course selection to final admission."
            </div>
            <p className="ms-body">
              We partner with <strong>UGC</strong>, <strong>AICTE</strong>, and <strong>NCTE</strong> approved
              institutions across India, ensuring every recommendation we make is verified, legitimate, and in
              the student's best interest.
            </p>
            <div className="ms-ctas">
              <a href={`tel:${PHONE}`} className="ms-btn ms-btn-blue">
                <Phone size={14} strokeWidth={2} /> Call Us Now
              </a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ms-btn ms-btn-green">
                <MessageCircle size={14} strokeWidth={2} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="ms-img-side">
            <div className="ms-ring" />
            <div className="ms-ring2" />
            <CurvedImage src="/mission.png" alt="Our Mission" size="lg" />
          </div>
        </div>

        <div className="ms-pillars-wrap">
          <div className="ms-pillars-grid">
            {PILLARS.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="ms-pillar-card" key={title}>
                <div className="ms-pillar-icon" style={{ background: bg }}>
                  <Icon size={18} color={color} strokeWidth={2} />
                </div>
                <p className="ms-pillar-title">{title}</p>
                <p className="ms-pillar-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ms-cta-strip">
          <div className="ms-cta-inner">
            <div className="ms-cta-text">
              <p className="ms-cta-label">Start Today</p>
              <p className="ms-cta-quote">
                Let our mission guide your future — get free, no-obligation counselling from our expert team right now.
              </p>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ms-cta-btn">
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}