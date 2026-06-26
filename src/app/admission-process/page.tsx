"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle, Phone, ArrowRight, CheckCircle2,
  ClipboardList, UserCheck, BookOpen, FileCheck, BadgeCheck,
  Zap, Star, Eye, ShieldCheck, Timer,
} from "lucide-react";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I want to start my admission process. Please guide me.");

const STEPS = [
  {
    num: "01", icon: ClipboardList, color: "#1D4ED8", bg: "#DBEAFE", border: "#BFDBFE",
    title: "Fill Application",
    desc: "Complete our quick online application form with your basic details and course preference.",
  },
  {
    num: "02", icon: UserCheck, color: "#7C3AED", bg: "#EDE9FE", border: "#C4B5FD",
    title: "Free Counselling",
    desc: "Our expert counsellors will call you within 24 hours to understand your goals and guide you.",
  },
  {
    num: "03", icon: BookOpen, color: "#0369A1", bg: "#E0F2FE", border: "#BAE6FD",
    title: "Course & College Selection",
    desc: "We shortlist the best-fit courses and colleges based on your eligibility and career goals.",
  },
  {
    num: "04", icon: FileCheck, color: "#047857", bg: "#D1FAE5", border: "#A7F3D0",
    title: "Document Verification",
    desc: "Submit your documents securely. Our team verifies everything for a smooth process.",
  },
  {
    num: "05", icon: BadgeCheck, color: "#B45309", bg: "#FEF3C7", border: "#FDE68A",
    title: "Admission Confirmation",
    desc: "Receive your official admission letter and complete fee payment to confirm your seat.",
  },
];

const WHY = [
  { icon: Zap,        label: "Simple & Easy",        desc: "Minimal paperwork, maximum clarity at every step." },
  { icon: Star,       label: "Expert Guidance",       desc: "Real counsellors — not bots — guide your journey." },
  { icon: Eye,        label: "Transparent Process",   desc: "You always know what's happening and what's next." },
  { icon: ShieldCheck,label: "No Hidden Charges",     desc: "What we quote is what you pay. Always." },
  { icon: Timer,      label: "Fast Admission",        desc: "Most admissions confirmed within 3–7 working days." },
];

export default function AdmissionProcessPage(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --c-bg:      #F8FAFF;
          --c-surface: #FFFFFF;
          --c-border:  #E4E7F0;
          --c-text:    #0F1628;
          --c-muted:   #64748B;
          --f-display: 'Plus Jakarta Sans', sans-serif;
          --f-body:    'Inter', sans-serif;
          --radius-md:   12px;
          --radius-lg:   16px;
          --radius-xl:   24px;
          --radius-full: 9999px;
          --shadow-sm: 0 1px 3px rgba(15,22,40,.06), 0 1px 2px rgba(15,22,40,.04);
          --shadow-md: 0 4px 16px rgba(15,22,40,.08), 0 2px 6px rgba(15,22,40,.04);
        }

        .ap-page {
          position: relative; min-height: 100vh;
          background: var(--c-bg); font-family: var(--f-body);
          overflow-x: hidden; padding-top: 100px;
        }
        .ap-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .ap-blob-1 { width: 480px; height: 480px; top: -120px; right: -120px; background: radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .ap-blob-2 { width: 340px; height: 340px; top: 55%; left: -80px; background: radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .ap-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size: 28px 28px; opacity:.25; }

        /* ── HERO ── */
        .ap-hero {
          position: relative; z-index: 5;
          max-width: 780px; margin: 0 auto;
          padding: 48px 40px 0; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
        }
        .ap-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg,#EDE9FE,#F5F3FF);
          border: 1px solid #C4B5FD; color: #5B21B6;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display);
        }
        .ap-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #7C3AED; animation: apPulse 1.4s ease-in-out infinite; }
        @keyframes apPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .ap-h1 {
          font-family: var(--f-display); font-size: clamp(26px,4vw,50px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--c-text);
        }
        .ap-h1-grad { background: linear-gradient(120deg,#1D4ED8,#7C3AED,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ap-sub { font-size: 16px; color: var(--c-muted); line-height: 1.7; max-width: 580px; }

        .ap-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 4px; }
        .ap-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: var(--radius-md);
          font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; color: #fff; border: none; cursor: pointer;
          position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s;
        }
        .ap-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .ap-btn:hover { transform: translateY(-2px); }
        .ap-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .ap-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .ap-btn-green { background: linear-gradient(135deg,#047857,#059669); box-shadow: 0 4px 14px rgba(5,150,105,.28); }
        .ap-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        /* ── INTRO STRIP ── */
        .ap-intro { position: relative; z-index: 5; max-width: 900px; margin: 52px auto 0; padding: 0 40px; }
        .ap-intro-card {
          background: var(--c-surface); border: 1px solid var(--c-border);
          border-radius: var(--radius-xl); padding: 28px 36px;
          box-shadow: var(--shadow-sm); text-align: center;
        }
        .ap-intro-card p { font-size: 15px; color: var(--c-muted); line-height: 1.75; }
        .ap-intro-card strong { color: var(--c-text); }

        /* ── TIMELINE ── */
        .ap-tl-wrap { position: relative; z-index: 5; max-width: 760px; margin: 52px auto 0; padding: 0 40px; }
        .ap-tl-heading { font-family: var(--f-display); font-size: 22px; font-weight: 800; color: var(--c-text); margin-bottom: 36px; text-align: center; }

        .ap-tl { position: relative; display: flex; flex-direction: column; gap: 0; }
        .ap-tl-line {
          position: absolute; left: 28px; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, #DBEAFE, #EDE9FE, #D1FAE5); z-index: 0;
        }

        .ap-step { display: flex; gap: 20px; position: relative; z-index: 1; padding-bottom: 32px; }
        .ap-step:last-child { padding-bottom: 0; }

        .ap-step-icon-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .ap-step-circle {
          width: 56px; height: 56px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid; position: relative; z-index: 2; flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .ap-step-content {
          flex: 1; background: var(--c-surface);
          border: 1.5px solid var(--c-border); border-radius: var(--radius-lg);
          padding: 18px 22px; box-shadow: var(--shadow-sm);
          transition: box-shadow .2s, transform .2s;
        }
        .ap-step-content:hover { box-shadow: var(--shadow-md); transform: translateX(4px); }

        .ap-step-num { font-size: 11px; font-weight: 700; letter-spacing: .1em; color: var(--c-muted); margin-bottom: 4px; }
        .ap-step-title { font-family: var(--f-display); font-size: 16px; font-weight: 700; color: var(--c-text); margin-bottom: 6px; }
        .ap-step-desc { font-size: 13.5px; color: var(--c-muted); line-height: 1.65; }

        /* ── WHY ── */
        .ap-why-wrap { position: relative; z-index: 5; max-width: 1100px; margin: 64px auto 0; padding: 0 40px; }
        .ap-why-heading { font-family: var(--f-display); font-size: 22px; font-weight: 800; color: var(--c-text); margin-bottom: 28px; text-align: center; }
        .ap-why-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }

        .ap-why-card {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-lg); padding: 22px 18px;
          text-align: center; box-shadow: var(--shadow-sm);
          transition: box-shadow .2s, transform .2s;
        }
        .ap-why-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
        .ap-why-icon { width: 44px; height: 44px; border-radius: 11px; background: #F1F5FE; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .ap-why-label { font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: var(--c-text); margin-bottom: 6px; }
        .ap-why-desc { font-size: 12px; color: var(--c-muted); line-height: 1.6; }

        /* ── SUB-PAGE NAV ── */
        .ap-nav-wrap { position: relative; z-index: 5; max-width: 900px; margin: 64px auto 0; padding: 0 40px; }
        .ap-nav-heading { font-family: var(--f-display); font-size: 18px; font-weight: 700; color: var(--c-text); margin-bottom: 16px; }
        .ap-nav-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .ap-nav-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; border-radius: var(--radius-lg);
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          text-decoration: none; color: var(--c-text); box-shadow: var(--shadow-sm);
          transition: box-shadow .2s, transform .2s, border-color .2s;
        }
        .ap-nav-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: #3B82F6; }
        .ap-nav-card-label { font-family: var(--f-display); font-size: 14px; font-weight: 700; }
        .ap-nav-card-sub { font-size: 12px; color: var(--c-muted); margin-top: 3px; }

        /* ── CTA ── */
        .ap-cta-wrap { position: relative; z-index: 5; max-width: 1100px; margin: 64px auto 80px; padding: 0 40px; }
        .ap-cta-inner {
          background: linear-gradient(135deg,#1D4ED8 0%,#3B82F6 100%);
          border-radius: var(--radius-xl); padding: 40px 44px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          position: relative; overflow: hidden;
        }
        .ap-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .ap-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .ap-cta-title { font-family: var(--f-display); font-size: clamp(17px,2vw,24px); font-weight: 800; color: #fff; line-height: 1.35; max-width: 520px; }
        .ap-cta-btn {
          position: relative; flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: var(--radius-md);
          background: #fff; color: #1D4ED8;
          font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,.12);
          transition: transform .15s, box-shadow .15s;
        }
        .ap-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }

        @media (max-width: 1024px) {
          .ap-why-grid { grid-template-columns: repeat(3, 1fr); }
          .ap-hero, .ap-intro, .ap-tl-wrap, .ap-why-wrap, .ap-nav-wrap, .ap-cta-wrap { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 640px) {
          .ap-hero, .ap-intro, .ap-tl-wrap, .ap-why-wrap, .ap-nav-wrap, .ap-cta-wrap { padding-left: 16px; padding-right: 16px; }
          .ap-why-grid { grid-template-columns: 1fr 1fr; }
          .ap-nav-grid { grid-template-columns: 1fr; }
          .ap-hero-btns { flex-direction: column; align-items: stretch; }
          .ap-btn { justify-content: center; }
          .ap-cta-inner { flex-direction: column; padding: 28px 24px; }
          .ap-tl-line { left: 26px; }
          .ap-blob { display: none; }
        }
      `}</style>

      <div className="ap-page">
        <div className="ap-blob ap-blob-1" />
        <div className="ap-blob ap-blob-2" />
        <div className="ap-dotgrid" />

        {/* HERO */}
        <div className="ap-hero">
          <span className="ap-eyebrow">
            <span className="ap-eyebrow-dot" />
            Step-by-Step Guidance
          </span>
          <h1 className="ap-h1">
            Simple &amp; Hassle-Free<br />
            <span className="ap-h1-grad">Admission Process</span>
          </h1>
          <p className="ap-sub">
            Get admission in top colleges in just a few easy steps with expert guidance — no confusion, no hidden steps.
          </p>
          <div className="ap-hero-btns">
            <Link href="/admission-process/apply-now" className="ap-btn ap-btn-blue">
              <ClipboardList size={15} strokeWidth={2} /> Start Your Application
            </Link>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ap-btn ap-btn-green">
              <MessageCircle size={15} strokeWidth={2} /> Get Free Counselling
            </a>
          </div>
        </div>

        {/* INTRO */}
        <div className="ap-intro">
          <div className="ap-intro-card">
            <p>
              At <strong>Smart Edge</strong>, we've simplified college admissions into a clear 5-step process.
              Whether you're applying for the first time or looking to upgrade your qualification,
              our expert team handles everything — from course selection to final confirmation.
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="ap-tl-wrap">
          <h2 className="ap-tl-heading">Your 5-Step Journey to Admission</h2>
          <div className="ap-tl">
            <div className="ap-tl-line" />
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div className="ap-step" key={step.num}>
                  <div className="ap-step-icon-col">
                    <div
                      className="ap-step-circle"
                      style={{ background: step.bg, borderColor: step.border }}
                    >
                      <Icon size={22} color={step.color} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="ap-step-content">
                    <p className="ap-step-num">STEP {step.num}</p>
                    <p className="ap-step-title">{step.title}</p>
                    <p className="ap-step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY */}
        <div className="ap-why-wrap">
          <h2 className="ap-why-heading">Why Choose Our Process</h2>
          <div className="ap-why-grid">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div className="ap-why-card" key={w.label}>
                  <div className="ap-why-icon">
                    <Icon size={20} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <p className="ap-why-label">{w.label}</p>
                  <p className="ap-why-desc">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      {/* SUB-PAGE QUICK NAV */}
<div className="ap-nav-wrap">
  <h3 className="ap-nav-heading">Explore More</h3>

  <div className="ap-nav-grid">
    <Link
      href="/admission-process/required-documents"
      className="ap-nav-card"
    >
      <div>
        <p className="ap-nav-card-label">Required Documents</p>
        <p className="ap-nav-card-sub">See what to prepare</p>
      </div>
      <ArrowRight size={16} color="#94A3B8" strokeWidth={2} />
    </Link>

    <Link
      href="/admission-process/eligibility-faqs"
      className="ap-nav-card"
    >
      <div>
        <p className="ap-nav-card-label">Eligibility & FAQs</p>
        <p className="ap-nav-card-sub">Check your eligibility</p>
      </div>
      <ArrowRight size={16} color="#94A3B8" strokeWidth={2} />
    </Link>

    <Link
      href="/admissionprocess/applynow"
      className="ap-nav-card"
    >
      <div>
        <p className="ap-nav-card-label">Apply Now</p>
        <p className="ap-nav-card-sub">Start your application</p>
      </div>
      <ArrowRight size={16} color="#94A3B8" strokeWidth={2} />
    </Link>
  </div>
</div>

        {/* CTA */}
        <div className="ap-cta-wrap">
          <div className="ap-cta-inner">
            <div>
              <p className="ap-cta-label">Ready to begin?</p>
              <p className="ap-cta-title">Start Your Admission Journey Today</p>
            </div>
            <Link href="/admission-process/apply-now" className="ap-cta-btn">
              Apply Now <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}