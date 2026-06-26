"use client";

import React from "react";
import { ArrowRight, Phone, MessageCircle, Globe, Star, TrendingUp } from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

interface Goal {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  note: string;
}

const GOALS: Goal[] = [
  { icon: Globe,      color: "#2563EB", bg: "#EFF6FF", title: "Pan-India Reach",        note: "Connecting students in every corner of India to the right opportunities." },
  { icon: Star,       color: "#D97706", bg: "#FEF3C7", title: "Excellence in Guidance",  note: "Raising the standard of counselling beyond brochures and cold calls." },
  { icon: TrendingUp, color: "#059669", bg: "#ECFDF5", title: "Student Success Rate",    note: "Measured by admissions secured, careers launched, and goals achieved." },
];

export default function VisionPage(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --c-bg: #F8FAFF; --c-surface: #FFFFFF; --c-border: #E4E7F0;
          --c-text: #0F1628; --c-muted: #64748B;
          --f-display: 'Plus Jakarta Sans', sans-serif; --f-body: 'Inter', sans-serif;
          --radius-md: 12px; --radius-lg: 16px; --radius-xl: 24px; --radius-full: 9999px;
          --shadow-sm: 0 1px 3px rgba(15,22,40,.06), 0 1px 2px rgba(15,22,40,.04);
          --shadow-md: 0 4px 16px rgba(15,22,40,.08), 0 2px 6px rgba(15,22,40,.04);
          --shadow-lg: 0 12px 40px rgba(15,22,40,.10), 0 4px 12px rgba(15,22,40,.06);
        }

        .vs-page { position: relative; min-height: 100vh; background: var(--c-bg); font-family: var(--f-body); overflow: hidden; padding-top: 100px; }
        .vs-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .vs-blob-1 { width: 480px; height: 480px; top: -100px; right: -120px; background: radial-gradient(circle, #EDE9FE, transparent 70%); opacity: .6; }
        .vs-blob-2 { width: 360px; height: 360px; bottom: 10%; left: -80px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .55; }
        .vs-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        .vs-hero { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 40px 40px 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .vs-img-side  { position: relative; display: flex; align-items: center; justify-content: center; order: 1; }
        .vs-text-side { display: flex; flex-direction: column; gap: 20px; order: 2; }
        .vs-ring  { position: absolute; width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: vsSpin 30s linear infinite; }
        .vs-ring2 { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes vsSpin { to { transform: rotate(360deg); } }

        .vs-eyebrow {
          display: inline-flex; align-items: center; gap: 7px; padding: 5px 14px;
          border-radius: var(--radius-full); background: linear-gradient(135deg,#F5F3FF,#EDE9FE);
          border: 1px solid #DDD6FE; color: #6D28D9;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); width: fit-content;
        }
        .vs-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #7C3AED; animation: vsPulse 1.4s ease-in-out infinite; }
        @keyframes vsPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .vs-h1 { font-family: var(--f-display); font-size: clamp(28px,3.2vw,44px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: var(--c-text); }
        .vs-h1-grad { background: linear-gradient(120deg,#6D28D9,#8B5CF6,#A78BFA); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .vs-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }
        .vs-statement { padding: 16px 20px; border-radius: var(--radius-lg); background: linear-gradient(135deg,#F5F3FF,#EDE9FE); border-left: 3px solid #7C3AED; font-family: var(--f-display); font-size: 15px; font-weight: 600; color: #3B0764; line-height: 1.6; }

        .vs-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .vs-btn { display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px; border-radius: var(--radius-md); font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: #fff; border: none; cursor: pointer; text-decoration: none; position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
        .vs-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .vs-btn:hover { transform: translateY(-2px); } .vs-btn:active { transform: translateY(0) scale(.98); }
        .vs-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .vs-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .vs-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .vs-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        .vs-goals-wrap { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 0 40px 80px; }
        .vs-goals-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .vs-goal-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 20px; border-radius: var(--radius-lg); background: var(--c-surface); border: 1px solid var(--c-border); box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s; }
        .vs-goal-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .vs-goal-icon  { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .vs-goal-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .vs-goal-note  { font-size: 13px; color: var(--c-muted); line-height: 1.55; }

        .vs-cta-strip { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto 80px; padding: 0 40px; }
        .vs-cta-inner { background: linear-gradient(135deg,#5B21B6 0%,#7C3AED 50%,#8B5CF6 100%); border-radius: var(--radius-xl); padding: 36px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px; position: relative; overflow: hidden; }
        .vs-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .vs-cta-text  { position: relative; }
        .vs-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .vs-cta-quote { font-family: var(--f-display); font-size: clamp(16px,2vw,22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .vs-cta-btn { position: relative; flex-shrink: 0; display: inline-flex; align-items: center; gap: 7px; padding: 12px 22px; border-radius: var(--radius-md); background: #fff; color: #6D28D9; font-family: var(--f-display); font-size: 13.5px; font-weight: 700; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s; }
        .vs-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .vs-hero { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .vs-img-side { order: 2; } .vs-text-side { order: 1; }
          .vs-goals-grid { grid-template-columns: 1fr 1fr; }
          .vs-goals-wrap { padding: 0 24px 56px; } .vs-cta-strip { padding: 0 24px; margin-bottom: 56px; }
          .vs-ring { width: 300px; height: 300px; } .vs-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .vs-hero { padding: 16px 16px 48px; } .vs-goals-wrap { padding: 0 16px 48px; }
          .vs-cta-strip { padding: 0 16px; margin-bottom: 48px; }
          .vs-cta-inner { flex-direction: column; padding: 28px 24px; }
          .vs-ctas { flex-direction: column; } .vs-btn { justify-content: center; } .vs-blob { display: none; }
        }
        @media (max-width: 480px) { .vs-goals-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="vs-page">
        <div className="vs-blob vs-blob-1" /><div className="vs-blob vs-blob-2" /><div className="vs-dotgrid" />

        <div className="vs-hero">
          <div className="vs-img-side">
            <div className="vs-ring" /><div className="vs-ring2" />
            <CurvedImage src="/vision.png" alt="Our Vision" size="lg" />
          </div>
          <div className="vs-text-side">
            <span className="vs-eyebrow"><span className="vs-eyebrow-dot" />Our Vision</span>
            <h1 className="vs-h1">A Future Where<br /><span className="vs-h1-grad">Every Student Succeeds</span></h1>
            <p className="vs-body">
              We envision a world where no student is left behind due to lack of information, wrong advice,
              or systemic barriers. Smart Edge aims to be India's most trusted education guidance partner —
              known for integrity, accuracy, and results.
            </p>
            <div className="vs-statement">
              "To build a future where every student — regardless of location or background — has access to
              honest, expert guidance that unlocks their true potential."
            </div>
            <p className="vs-body">
              Our long-term vision is to scale counselling access across Tier 2 and Tier 3 cities in India,
              ensuring that quality admission support is not limited to metro students alone.
            </p>
            <div className="vs-ctas">
              <a href={`tel:${PHONE}`} className="vs-btn vs-btn-blue"><Phone size={14} strokeWidth={2} /> Call Us Now</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="vs-btn vs-btn-green"><MessageCircle size={14} strokeWidth={2} /> WhatsApp Us</a>
            </div>
          </div>
        </div>

        <div className="vs-goals-wrap">
          <div className="vs-goals-grid">
            {GOALS.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="vs-goal-card" key={title}>
                <div className="vs-goal-icon" style={{ background: bg }}><Icon size={18} color={color} strokeWidth={2} /></div>
                <p className="vs-goal-title">{title}</p>
                <p className="vs-goal-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="vs-cta-strip">
          <div className="vs-cta-inner">
            <div className="vs-cta-text">
              <p className="vs-cta-label">Be Part of the Vision</p>
              <p className="vs-cta-quote">Join thousands of students who trusted Smart Edge to help shape their future — and achieved it.</p>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="vs-cta-btn">
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}