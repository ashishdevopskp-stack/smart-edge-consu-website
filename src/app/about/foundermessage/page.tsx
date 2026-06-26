"use client";

import React from "react";
import { ArrowRight, Phone, MessageCircle, Quote, Award, Users, Heart } from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "10+",   label: "Years of Experience" },
  { value: "5000+", label: "Students Guided"     },
  { value: "200+",  label: "Partner Colleges"    },
];

interface Value {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  note: string;
}

const VALUES: Value[] = [
  { icon: Award,  color: "#2563EB", bg: "#EFF6FF", title: "Integrity First",   note: "Every student gets honest advice — even when the truth is hard to hear." },
  { icon: Users,  color: "#D97706", bg: "#FEF3C7", title: "Personal Attention", note: "No bulk counselling. Every student gets direct, one-on-one guidance." },
  { icon: Heart,  color: "#E11D48", bg: "#FFF1F2", title: "Passion for Impact", note: "We measure success by the futures we help build, not the fees we collect." },
];

export default function FounderPage(): React.JSX.Element {
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

        .fm-page { position: relative; min-height: 100vh; background: var(--c-bg); font-family: var(--f-body); overflow: hidden; padding-top: 100px; }
        .fm-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .fm-blob-1 { width: 480px; height: 480px; top: -100px; left: -120px; background: radial-gradient(circle, #FCE7F3, transparent 70%); opacity: .6; }
        .fm-blob-2 { width: 360px; height: 360px; bottom: 10%; right: -80px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .55; }
        .fm-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        .fm-hero { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 40px 40px 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .fm-img-side  { position: relative; display: flex; flex-direction: column; align-items: center; gap: 28px; order: 1; }
        .fm-text-side { display: flex; flex-direction: column; gap: 20px; order: 2; }
        .fm-ring  { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: fmSpin 30s linear infinite; }
        .fm-ring2 { position: absolute; top: 40px; left: 50%; transform: translateX(-50%); width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes fmSpin { to { transform: translateX(-50%) rotate(360deg); } }

        /* founder stats bar */
        .fm-stats {
          position: relative; z-index: 2; display: flex; gap: 0;
          background: var(--c-surface); border: 1px solid var(--c-border);
          border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
          overflow: hidden; width: 100%; max-width: 380px;
        }
        .fm-stat { flex: 1; padding: 14px 12px; text-align: center; }
        .fm-stat + .fm-stat { border-left: 1px solid var(--c-border); }
        .fm-stat-val { font-family: var(--f-display); font-size: 20px; font-weight: 800; color: #1D4ED8; }
        .fm-stat-lbl { font-size: 11px; color: var(--c-muted); margin-top: 2px; line-height: 1.3; }

        .fm-eyebrow { display: inline-flex; align-items: center; gap: 7px; padding: 5px 14px; border-radius: var(--radius-full); background: linear-gradient(135deg,#FFF1F2,#FFE4E6); border: 1px solid #FECDD3; color: #BE123C; font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; font-family: var(--f-display); width: fit-content; }
        .fm-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #E11D48; animation: fmPulse 1.4s ease-in-out infinite; }
        @keyframes fmPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .fm-h1 { font-family: var(--f-display); font-size: clamp(28px,3.2vw,44px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: var(--c-text); }
        .fm-h1-grad { background: linear-gradient(120deg,#BE123C,#E11D48,#F43F5E); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .fm-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }

        /* quote block */
        .fm-quote-block {
          position: relative; padding: 20px 20px 20px 52px;
          border-radius: var(--radius-lg); background: linear-gradient(135deg,#FFF1F2,#FFF5F5);
          border: 1px solid #FECDD3;
        }
        .fm-quote-icon { position: absolute; top: 18px; left: 18px; color: #E11D48; opacity: .5; }
        .fm-quote-text { font-family: var(--f-display); font-size: 15px; font-weight: 600; color: #881337; line-height: 1.65; font-style: italic; }
        .fm-quote-author { margin-top: 10px; font-size: 12px; font-weight: 700; color: var(--c-muted); letter-spacing: .05em; }

        .fm-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .fm-btn { display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px; border-radius: var(--radius-md); font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: #fff; border: none; cursor: pointer; text-decoration: none; position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
        .fm-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .fm-btn:hover { transform: translateY(-2px); } .fm-btn:active { transform: translateY(0) scale(.98); }
        .fm-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .fm-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .fm-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .fm-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        .fm-values-wrap { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 0 40px 80px; }
        .fm-values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .fm-value-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 20px; border-radius: var(--radius-lg); background: var(--c-surface); border: 1px solid var(--c-border); box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s; }
        .fm-value-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .fm-value-icon  { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .fm-value-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .fm-value-note  { font-size: 13px; color: var(--c-muted); line-height: 1.55; }

        .fm-cta-strip { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto 80px; padding: 0 40px; }
        .fm-cta-inner { background: linear-gradient(135deg,#9F1239 0%,#BE123C 50%,#E11D48 100%); border-radius: var(--radius-xl); padding: 36px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px; position: relative; overflow: hidden; }
        .fm-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .fm-cta-text  { position: relative; }
        .fm-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .fm-cta-quote { font-family: var(--f-display); font-size: clamp(16px,2vw,22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .fm-cta-btn { position: relative; flex-shrink: 0; display: inline-flex; align-items: center; gap: 7px; padding: 12px 22px; border-radius: var(--radius-md); background: #fff; color: #BE123C; font-family: var(--f-display); font-size: 13.5px; font-weight: 700; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s; }
        .fm-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .fm-hero { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .fm-img-side { order: 2; } .fm-text-side { order: 1; }
          .fm-values-grid { grid-template-columns: 1fr 1fr; }
          .fm-values-wrap { padding: 0 24px 56px; } .fm-cta-strip { padding: 0 24px; margin-bottom: 56px; }
          .fm-ring { width: 300px; height: 300px; } .fm-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .fm-hero { padding: 16px 16px 48px; } .fm-values-wrap { padding: 0 16px 48px; }
          .fm-cta-strip { padding: 0 16px; margin-bottom: 48px; }
          .fm-cta-inner { flex-direction: column; padding: 28px 24px; }
          .fm-ctas { flex-direction: column; } .fm-btn { justify-content: center; } .fm-blob { display: none; }
        }
        @media (max-width: 480px) { .fm-values-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="fm-page">
        <div className="fm-blob fm-blob-1" /><div className="fm-blob fm-blob-2" /><div className="fm-dotgrid" />

        <div className="fm-hero">
          <div className="fm-img-side">
            <div className="fm-ring" /><div className="fm-ring2" />
            <CurvedImage src="/founder.png" alt="Founder - Smart Edge" size="lg" />
            <div className="fm-stats">
              {STATS.map(({ value, label }) => (
                <div className="fm-stat" key={label}>
                  <p className="fm-stat-val">{value}</p>
                  <p className="fm-stat-lbl">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fm-text-side">
            <span className="fm-eyebrow"><span className="fm-eyebrow-dot" />Founder Message</span>
            <h1 className="fm-h1">A Word From<br /><span className="fm-h1-grad">Our Founder</span></h1>
            <p className="fm-body">
              Smart Edge Education Consultancy was born from a simple frustration — watching talented
              students choose the wrong course simply because no one gave them honest guidance.
              I started this journey with one goal: to be the counsellor I wish I had.
            </p>
            <div className="fm-quote-block">
              <Quote size={20} className="fm-quote-icon" />
              <p className="fm-quote-text">
                Every student who walks through our door carries a dream. Our job is not to sell them
                a seat — it is to help them find the right door that leads to their future.
              </p>
              <p className="fm-quote-author">— Founder, Smart Edge Education Consultancy</p>
            </div>
            <p className="fm-body">
              Over the past decade, we have guided more than 5,000 students into the right colleges
              and careers. We've built relationships with 200+ verified institutions and have never
              compromised on transparency. That promise remains unchanged.
            </p>
            <div className="fm-ctas">
              <a href={`tel:${PHONE}`} className="fm-btn fm-btn-blue"><Phone size={14} strokeWidth={2} /> Call Us Now</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="fm-btn fm-btn-green"><MessageCircle size={14} strokeWidth={2} /> WhatsApp Us</a>
            </div>
          </div>
        </div>

        <div className="fm-values-wrap">
          <div className="fm-values-grid">
            {VALUES.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="fm-value-card" key={title}>
                <div className="fm-value-icon" style={{ background: bg }}><Icon size={18} color={color} strokeWidth={2} /></div>
                <p className="fm-value-title">{title}</p>
                <p className="fm-value-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fm-cta-strip">
          <div className="fm-cta-inner">
            <div className="fm-cta-text">
              <p className="fm-cta-label">Talk to Us</p>
              <p className="fm-cta-quote">Meet the team behind Smart Edge — get personalised guidance directly from our counsellors today.</p>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="fm-cta-btn">
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}