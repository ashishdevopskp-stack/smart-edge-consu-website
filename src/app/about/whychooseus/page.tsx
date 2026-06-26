"use client";

import React from "react";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, BadgeCheck, Clock, ThumbsUp, MapPin, GraduationCap } from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

interface Reason {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  note: string;
}

const REASONS: Reason[] = [
  { icon: ShieldCheck,    color: "#2563EB", bg: "#EFF6FF", title: "100% Genuine Counselling",   note: "No fake promises. We share only verified facts about colleges and programmes." },
  { icon: BadgeCheck,     color: "#059669", bg: "#ECFDF5", title: "UGC · AICTE · NCTE Verified", note: "Every institution we recommend is fully approved by the relevant authority." },
  { icon: Clock,          color: "#D97706", bg: "#FEF3C7", title: "Fast Admission Process",      note: "We cut through the paperwork and help you secure admission without delays." },
  { icon: ThumbsUp,       color: "#7C3AED", bg: "#F5F3FF", title: "No Hidden Charges",           note: "Complete transparency on fees — what you see is exactly what you pay." },
  { icon: MapPin,         color: "#E11D48", bg: "#FFF1F2", title: "Pan-India College Network",   note: "Access to 200+ partner colleges across all major states in India." },
  { icon: GraduationCap,  color: "#0891B2", bg: "#F0F9FF", title: "All Streams Covered",         note: "Engineering, Medical, Management, Law, Arts, Commerce, Distance & more." },
];

export default function WhyChooseUsPage(): React.JSX.Element {
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

        .wc-page { position: relative; min-height: 100vh; background: var(--c-bg); font-family: var(--f-body); overflow: hidden; padding-top: 100px; }
        .wc-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .wc-blob-1 { width: 480px; height: 480px; top: -100px; right: -120px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .6; }
        .wc-blob-2 { width: 360px; height: 360px; bottom: 10%; left: -80px; background: radial-gradient(circle, #D1FAE5, transparent 70%); opacity: .55; }
        .wc-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        .wc-hero { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 40px 40px 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .wc-img-side  { position: relative; display: flex; align-items: center; justify-content: center; order: 1; }
        .wc-text-side { display: flex; flex-direction: column; gap: 20px; order: 2; }
        .wc-ring  { position: absolute; width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: wcSpin 30s linear infinite; }
        .wc-ring2 { position: absolute; width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes wcSpin { to { transform: rotate(360deg); } }

        .wc-eyebrow { display: inline-flex; align-items: center; gap: 7px; padding: 5px 14px; border-radius: var(--radius-full); background: linear-gradient(135deg,#ECFDF5,#D1FAE5); border: 1px solid #A7F3D0; color: #047857; font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; font-family: var(--f-display); width: fit-content; }
        .wc-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #059669; animation: wcPulse 1.4s ease-in-out infinite; }
        @keyframes wcPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .wc-h1 { font-family: var(--f-display); font-size: clamp(28px,3.2vw,44px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: var(--c-text); }
        .wc-h1-grad { background: linear-gradient(120deg,#047857,#059669,#10B981); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .wc-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }

        /* checklist */
        .wc-checklist { display: flex; flex-direction: column; gap: 10px; }
        .wc-check-item { display: flex; align-items: flex-start; gap: 10px; }
        .wc-check-dot { flex-shrink: 0; margin-top: 4px; width: 18px; height: 18px; border-radius: 50%; background: linear-gradient(135deg,#059669,#10B981); display: flex; align-items: center; justify-content: center; }
        .wc-check-dot::after { content: ''; width: 6px; height: 4px; border-left: 1.5px solid #fff; border-bottom: 1.5px solid #fff; transform: rotate(-45deg) translateY(-1px); display: block; }
        .wc-check-text { font-size: 14px; color: var(--c-text); font-weight: 500; line-height: 1.5; }

        .wc-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .wc-btn { display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px; border-radius: var(--radius-md); font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: #fff; border: none; cursor: pointer; text-decoration: none; position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
        .wc-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .wc-btn:hover { transform: translateY(-2px); } .wc-btn:active { transform: translateY(0) scale(.98); }
        .wc-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .wc-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .wc-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .wc-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        .wc-reasons-wrap { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 0 40px 80px; }
        .wc-reasons-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .wc-reason-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 20px; border-radius: var(--radius-lg); background: var(--c-surface); border: 1px solid var(--c-border); box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s; }
        .wc-reason-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .wc-reason-icon  { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .wc-reason-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .wc-reason-note  { font-size: 13px; color: var(--c-muted); line-height: 1.55; }

        .wc-cta-strip { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto 80px; padding: 0 40px; }
        .wc-cta-inner { background: linear-gradient(135deg,#047857 0%,#059669 50%,#10B981 100%); border-radius: var(--radius-xl); padding: 36px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px; position: relative; overflow: hidden; }
        .wc-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .wc-cta-text  { position: relative; }
        .wc-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .wc-cta-quote { font-family: var(--f-display); font-size: clamp(16px,2vw,22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .wc-cta-btn { position: relative; flex-shrink: 0; display: inline-flex; align-items: center; gap: 7px; padding: 12px 22px; border-radius: var(--radius-md); background: #fff; color: #047857; font-family: var(--f-display); font-size: 13.5px; font-weight: 700; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s; }
        .wc-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .wc-hero { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .wc-img-side { order: 2; } .wc-text-side { order: 1; }
          .wc-reasons-grid { grid-template-columns: 1fr 1fr; }
          .wc-reasons-wrap { padding: 0 24px 56px; } .wc-cta-strip { padding: 0 24px; margin-bottom: 56px; }
          .wc-ring { width: 300px; height: 300px; } .wc-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .wc-hero { padding: 16px 16px 48px; } .wc-reasons-wrap { padding: 0 16px 48px; }
          .wc-cta-strip { padding: 0 16px; margin-bottom: 48px; }
          .wc-cta-inner { flex-direction: column; padding: 28px 24px; }
          .wc-ctas { flex-direction: column; } .wc-btn { justify-content: center; } .wc-blob { display: none; }
        }
        @media (max-width: 480px) { .wc-reasons-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="wc-page">
        <div className="wc-blob wc-blob-1" /><div className="wc-blob wc-blob-2" /><div className="wc-dotgrid" />

        <div className="wc-hero">
          <div className="wc-img-side">
            <div className="wc-ring" /><div className="wc-ring2" />
            <CurvedImage src="/whychooseus.png" alt="Why Choose Smart Edge" size="lg" />
          </div>

          <div className="wc-text-side">
            <span className="wc-eyebrow"><span className="wc-eyebrow-dot" />Why Choose Us</span>
            <h1 className="wc-h1">The Smart Edge<br /><span className="wc-h1-grad">Difference</span></h1>
            <p className="wc-body">
              In a market full of commission-driven agents, Smart Edge stands apart. We are not a
              college broker — we are a student-first counselling service built on trust, transparency,
              and genuine expertise.
            </p>
            <div className="wc-checklist">
              {["No college pays us to recommend them", "We show you all options — including ones that may not benefit us", "Students and parents involved at every step", "Follow-up until admission is confirmed"].map((item) => (
                <div className="wc-check-item" key={item}>
                  <span className="wc-check-dot" />
                  <span className="wc-check-text">{item}</span>
                </div>
              ))}
            </div>
            <div className="wc-ctas">
              <a href={`tel:${PHONE}`} className="wc-btn wc-btn-blue"><Phone size={14} strokeWidth={2} /> Call Us Now</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="wc-btn wc-btn-green"><MessageCircle size={14} strokeWidth={2} /> WhatsApp Us</a>
            </div>
          </div>
        </div>

        <div className="wc-reasons-wrap">
          <div className="wc-reasons-grid">
            {REASONS.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="wc-reason-card" key={title}>
                <div className="wc-reason-icon" style={{ background: bg }}><Icon size={18} color={color} strokeWidth={2} /></div>
                <p className="wc-reason-title">{title}</p>
                <p className="wc-reason-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wc-cta-strip">
          <div className="wc-cta-inner">
            <div className="wc-cta-text">
              <p className="wc-cta-label">Make the Right Choice</p>
              <p className="wc-cta-quote">Experience the Smart Edge difference — speak to a real counsellor and get guidance you can actually trust.</p>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="wc-cta-btn">
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}