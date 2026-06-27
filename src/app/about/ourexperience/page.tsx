"use client";

import React from "react";
import { ArrowRight, Phone, MessageCircle, Briefcase, Building2, BookOpen, Trophy } from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I am interested in admission guidance. Please help me.");

interface Metric {
  value: string;
  label: string;
  color: string;
  bg: string;
}

const METRICS: Metric[] = [
  { value: "10+",   label: "Years of Experience",   color: "#2563EB", bg: "#EFF6FF" },
  { value: "5000+", label: "Students Successfully Guided", color: "#059669", bg: "#ECFDF5" },
  { value: "200+",  label: "Partner Colleges",       color: "#D97706", bg: "#FEF3C7" },
  { value: "98%",   label: "Student Satisfaction",   color: "#7C3AED", bg: "#F5F3FF" },
];

interface Domain {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  note: string;
}

const DOMAINS: Domain[] = [
  { icon: Briefcase, color: "#2563EB", bg: "#EFF6FF", title: "Admission Counselling",     note: "10+ years guiding students into the right colleges for their goals and budget." },
  { icon: Building2, color: "#059669", bg: "#ECFDF5", title: "College Tie-Ups",           note: "Direct relationships with 200+ UGC, AICTE & NCTE approved institutions." },
  { icon: BookOpen,  color: "#D97706", bg: "#FEF3C7", title: "Distance Education",        note: "Specialised expertise in Distance & Online Education across all streams." },
  { icon: Trophy,    color: "#7C3AED", bg: "#F5F3FF", title: "Career Outcome Focus",      note: "Guidance aligned to real career paths, not just open seats." },
];

export default function ExperiencePage(): React.JSX.Element {
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

        .ex-page { position: relative; min-height: 100vh; background: var(--c-bg); font-family: var(--f-body); overflow: hidden; padding-top: 100px; }
        .ex-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .ex-blob-1 { width: 480px; height: 480px; top: -100px; left: -120px; background: radial-gradient(circle, #FEF3C7, transparent 70%); opacity: .6; }
        .ex-blob-2 { width: 360px; height: 360px; bottom: 10%; right: -80px; background: radial-gradient(circle, #DBEAFE, transparent 70%); opacity: .55; }
        .ex-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px); background-size: 28px 28px; opacity: .3; }

        .ex-hero { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 40px 40px 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .ex-text-side { display: flex; flex-direction: column; gap: 20px; order: 1; }
        .ex-img-side  { position: relative; display: flex; flex-direction: column; align-items: center; gap: 28px; order: 2; }
        .ex-ring  { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; border-radius: 50%; border: 1.5px dashed #CBD5E1; animation: exSpin 30s linear infinite; }
        .ex-ring2 { position: absolute; top: 40px; left: 50%; transform: translateX(-50%); width: 320px; height: 320px; border-radius: 50%; border: 1px solid #E2E8F0; }
        @keyframes exSpin { to { transform: translateX(-50%) rotate(360deg); } }

        /* metrics grid inside image col */
        .ex-metrics { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 380px; }
        .ex-metric-card { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 18px 14px; border-radius: var(--radius-lg); background: var(--c-surface); border: 1px solid var(--c-border); box-shadow: var(--shadow-sm); text-align: center; }
        .ex-metric-val { font-family: var(--f-display); font-size: 22px; font-weight: 800; }
        .ex-metric-lbl { font-size: 11px; color: var(--c-muted); line-height: 1.3; }

        .ex-eyebrow { display: inline-flex; align-items: center; gap: 7px; padding: 5px 14px; border-radius: var(--radius-full); background: linear-gradient(135deg,#FEF3C7,#FFFBEB); border: 1px solid #FDE68A; color: #92400E; font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; font-family: var(--f-display); width: fit-content; }
        .ex-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #F59E0B; animation: exPulse 1.4s ease-in-out infinite; }
        @keyframes exPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .ex-h1 { font-family: var(--f-display); font-size: clamp(28px,3.2vw,44px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: var(--c-text); }
        .ex-h1-grad { background: linear-gradient(120deg,#B45309,#D97706,#F59E0B); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ex-body { color: var(--c-muted); font-size: 15px; line-height: 1.75; }

        .ex-timeline { display: flex; flex-direction: column; gap: 0; border-left: 2px solid #E4E7F0; padding-left: 20px; margin-left: 8px; }
        .ex-tl-item { position: relative; padding-bottom: 18px; }
        .ex-tl-item:last-child { padding-bottom: 0; }
        .ex-tl-dot { position: absolute; left: -28px; top: 3px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #D97706; background: #FEF3C7; }
        .ex-tl-year { font-family: var(--f-display); font-size: 11px; font-weight: 700; color: #D97706; letter-spacing: .07em; margin-bottom: 2px; }
        .ex-tl-text { font-size: 13.5px; color: var(--c-text); font-weight: 500; line-height: 1.5; }

        .ex-ctas { display: flex; flex-wrap: wrap; gap: 10px; }
        .ex-btn { display: inline-flex; align-items: center; gap: 7px; padding: 11px 20px; border-radius: var(--radius-md); font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: #fff; border: none; cursor: pointer; text-decoration: none; position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s; }
        .ex-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .ex-btn:hover { transform: translateY(-2px); } .ex-btn:active { transform: translateY(0) scale(.98); }
        .ex-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .ex-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .ex-btn-green { background: linear-gradient(135deg,#047857,#059669,#10B981); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .ex-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        .ex-domains-wrap { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto; padding: 0 40px 80px; }
        .ex-domains-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        .ex-domain-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 18px; border-radius: var(--radius-lg); background: var(--c-surface); border: 1px solid var(--c-border); box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s; }
        .ex-domain-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .ex-domain-icon  { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .ex-domain-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .ex-domain-note  { font-size: 12.5px; color: var(--c-muted); line-height: 1.55; }

        .ex-cta-strip { position: relative; z-index: 5; max-width: 1160px; margin: 0 auto 80px; padding: 0 40px; }
        .ex-cta-inner { background: linear-gradient(135deg,#1D4ED8 0%,#2563EB 50%,#3B82F6 100%); border-radius: var(--radius-xl); padding: 36px 40px; display: flex; align-items: center; justify-content: space-between; gap: 24px; position: relative; overflow: hidden; }
        .ex-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .ex-cta-text  { position: relative; }
        .ex-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .ex-cta-quote { font-family: var(--f-display); font-size: clamp(16px,2vw,22px); font-weight: 700; color: #fff; line-height: 1.4; max-width: 620px; }
        .ex-cta-btn { position: relative; flex-shrink: 0; display: inline-flex; align-items: center; gap: 7px; padding: 12px 22px; border-radius: var(--radius-md); background: #fff; color: #1D4ED8; font-family: var(--f-display); font-size: 13.5px; font-weight: 700; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s; }
        .ex-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .ex-hero { grid-template-columns: 1fr; padding: 24px 24px 56px; gap: 48px; }
          .ex-img-side { order: 2; } .ex-text-side { order: 1; }
          .ex-domains-grid { grid-template-columns: 1fr 1fr; }
          .ex-domains-wrap { padding: 0 24px 56px; } .ex-cta-strip { padding: 0 24px; margin-bottom: 56px; }
          .ex-ring { width: 300px; height: 300px; } .ex-ring2 { width: 240px; height: 240px; }
        }
        @media (max-width: 640px) {
          .ex-hero { padding: 16px 16px 48px; } .ex-domains-wrap { padding: 0 16px 48px; }
          .ex-cta-strip { padding: 0 16px; margin-bottom: 48px; }
          .ex-cta-inner { flex-direction: column; padding: 28px 24px; }
          .ex-ctas { flex-direction: column; } .ex-btn { justify-content: center; } .ex-blob { display: none; }
        }
        @media (max-width: 480px) { .ex-domains-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="ex-page">
        <div className="ex-blob ex-blob-1" /><div className="ex-blob ex-blob-2" /><div className="ex-dotgrid" />

        <div className="ex-hero">
          <div className="ex-text-side">
            <span className="ex-eyebrow"><span className="ex-eyebrow-dot" />Our Experience</span>
            <h1 className="ex-h1">A Decade of<br /><span className="ex-h1-grad">Trusted Guidance</span></h1>
            <p className="ex-body">
              Since our founding, Smart Edge has built a reputation on results. Every year we refine
              our processes, deepen our college network, and train our counsellors to stay ahead of
              India's ever-changing higher education landscape.
            </p>

            {/* Timeline */}
            <div className="ex-timeline">
              {[
                { year: "2014", text: "Founded Smart Edge with a small team and big conviction." },
                { year: "2017", text: "Expanded to Distance Education counselling — reached 1,000+ students." },
                { year: "2020", text: "Built a network of 100+ verified colleges across 15 states." },
                { year: "2023", text: "Crossed 5,000 successful admissions and 200+ partner institutions." },
              ].map(({ year, text }) => (
                <div className="ex-tl-item" key={year}>
                  <span className="ex-tl-dot" />
                  <p className="ex-tl-year">{year}</p>
                  <p className="ex-tl-text">{text}</p>
                </div>
              ))}
            </div>

            <div className="ex-ctas">
              <a href={`tel:${PHONE}`} className="ex-btn ex-btn-blue"><Phone size={14} strokeWidth={2} /> Call Us Now</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ex-btn ex-btn-green"><MessageCircle size={14} strokeWidth={2} /> WhatsApp Us</a>
            </div>
          </div>

          <div className="ex-img-side">
            <div className="ex-ring" /><div className="ex-ring2" />
            <CurvedImage src="/our-experience.png" alt="Our Experience" size="lg" />
            <div className="ex-metrics">
              {METRICS.map(({ value, label, color, bg }) => (
                <div className="ex-metric-card" key={label} style={{ borderTopColor: color }}>
                  <p className="ex-metric-val" style={{ color }}>{value}</p>
                  <p className="ex-metric-lbl">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ex-domains-wrap">
          <div className="ex-domains-grid">
            {DOMAINS.map(({ icon: Icon, color, bg, title, note }) => (
              <div className="ex-domain-card" key={title}>
                <div className="ex-domain-icon" style={{ background: bg }}><Icon size={18} color={color} strokeWidth={2} /></div>
                <p className="ex-domain-title">{title}</p>
                <p className="ex-domain-note">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ex-cta-strip">
          <div className="ex-cta-inner">
            <div className="ex-cta-text">
              <p className="ex-cta-label">10 Years Strong</p>
              <p className="ex-cta-quote">Put a decade of expertise to work for your future — get free guidance from our experienced counselling team.</p>
            </div>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ex-cta-btn">
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}