"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ArrowLeft, Compass, CheckCircle2, Clock, Star, Heart, Brain, Award } from "lucide-react";

const WA_NUMBER = "919576461623";
const WA_MSG = encodeURIComponent("Hi, I want to book a free career counselling session.");

const BENEFITS = [
  { icon: Brain, title: "Aptitude Assessment", desc: "Understand your natural strengths and abilities through structured assessments." },
  { icon: Heart, title: "Interest Mapping", desc: "Identify what you're genuinely passionate about and align it with a viable career." },
  { icon: Star, title: "Expert Matching", desc: "Get matched with counsellors who specialise in your field of interest." },
  { icon: Award, title: "Goal Setting", desc: "Define short-term and long-term goals with a clear action plan." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book sessions at a time that suits you — online or in-person." },
  { icon: CheckCircle2, title: "Follow-up Support", desc: "We follow up after every session to ensure you're on the right track." },
];

export default function CareerCounsellingPage(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --c-bg:#F8FAFF; --c-surface:#FFFFFF; --c-border:#E4E7F0;
          --c-text:#0F1628; --c-muted:#64748B;
          --f-display:'Plus Jakarta Sans',sans-serif; --f-body:'Inter',sans-serif;
          --radius-md:12px; --radius-lg:16px; --radius-xl:24px; --radius-full:9999px;
          --shadow-sm:0 1px 3px rgba(15,22,40,.06),0 1px 2px rgba(15,22,40,.04);
          --shadow-md:0 4px 16px rgba(15,22,40,.08),0 2px 6px rgba(15,22,40,.04);
        }
        .sp-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding-top:100px; }
        .sp-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .sp-blob-1 { width:400px; height:400px; top:-100px; right:-80px; background:radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .sp-blob-2 { width:300px; height:300px; bottom:20%; left:-60px; background:radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .sp-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.25; }

        .sp-inner { position:relative; z-index:5; max-width:900px; margin:0 auto; padding:0 40px; }
        .sp-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#64748B; text-decoration:none; margin-bottom:24px; transition:color .15s; }
        .sp-back:hover { color:#1D4ED8; }

        .sp-eyebrow {
          display:inline-flex; align-items:center; gap:7px;
          padding:5px 14px; border-radius:var(--radius-full);
          background:linear-gradient(135deg,#DBEAFE,#EFF6FF);
          border:1px solid #BFDBFE; color:#1D4ED8;
          font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase;
          font-family:var(--f-display); margin-bottom:16px;
        }
        .sp-h1 {
          font-family:var(--f-display); font-size:clamp(26px,4vw,48px);
          font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--c-text);
          margin-bottom:16px;
        }
        .sp-h1-grad { background:linear-gradient(120deg,#1D4ED8,#7C3AED); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sp-sub { font-size:16px; color:var(--c-muted); line-height:1.75; max-width:620px; margin-bottom:28px; }

        .sp-hero-btns { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:48px; }
        .sp-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 24px; border-radius:var(--radius-md);
          font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s;
        }
        .sp-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .sp-btn:hover { transform:translateY(-2px); }
        .sp-btn-blue { background:linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow:0 4px 14px rgba(37,99,235,.32); }
        .sp-btn-blue:hover { box-shadow:0 8px 22px rgba(37,99,235,.4); }

        .sp-divider { width:100%; height:1px; background:var(--c-border); margin:8px 0 40px; }

        .sp-section-heading { font-family:var(--f-display); font-size:20px; font-weight:800; color:var(--c-text); margin-bottom:24px; }
        .sp-benefits-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:48px; }
        .sp-benefit-card {
          background:var(--c-surface); border:1.5px solid var(--c-border);
          border-radius:var(--radius-lg); padding:22px 20px;
          box-shadow:var(--shadow-sm); transition:box-shadow .2s,transform .2s;
        }
        .sp-benefit-card:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); }
        .sp-benefit-icon { width:44px; height:44px; border-radius:12px; background:#DBEAFE; display:flex; align-items:center; justify-content:center; margin-bottom:14px; }
        .sp-benefit-title { font-family:var(--f-display); font-size:14px; font-weight:700; color:var(--c-text); margin-bottom:6px; }
        .sp-benefit-desc { font-size:13px; color:var(--c-muted); line-height:1.65; }

        .sp-cta {
          background:linear-gradient(135deg,#1D4ED8,#3B82F6);
          border-radius:var(--radius-xl); padding:36px 40px;
          display:flex; align-items:center; justify-content:space-between; gap:20px;
          position:relative; overflow:hidden; margin-bottom:80px;
        }
        .sp-cta::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .sp-cta-title { font-family:var(--f-display); font-size:clamp(16px,2vw,22px); font-weight:800; color:#fff; line-height:1.35; }
        .sp-cta-btn {
          position:relative; flex-shrink:0;
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 22px; border-radius:var(--radius-md);
          background:#fff; color:#1D4ED8;
          font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; white-space:nowrap;
          box-shadow:0 4px 16px rgba(0,0,0,.12); transition:transform .15s,box-shadow .15s;
        }
        .sp-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.18); }

        @media (max-width:1024px) { .sp-inner { padding-left:24px; padding-right:24px; } }
        @media (max-width:640px) {
          .sp-inner { padding-left:16px; padding-right:16px; }
          .sp-benefits-grid { grid-template-columns:1fr; }
          .sp-hero-btns { flex-direction:column; }
          .sp-btn { justify-content:center; }
          .sp-cta { flex-direction:column; padding:28px 24px; }
          .sp-blob { display:none; }
        }
      `}</style>

      <div className="sp-page">
        <div className="sp-blob sp-blob-1" />
        <div className="sp-blob sp-blob-2" />
        <div className="sp-dotgrid" />

        <div className="sp-inner">
          <Link href="/career-guidance" className="sp-back">
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to Career Guidance
          </Link>

          <div className="sp-eyebrow">Career Guidance · Counselling</div>
          <h1 className="sp-h1">
            One-on-One<br />
            <span className="sp-h1-grad">Career Counselling</span>
          </h1>
          <p className="sp-sub">
            Our expert counsellors work with you personally to understand your background, interests, and goals —
            then chart a clear career path that's right for you. No generic advice. Just real, personalised guidance.
          </p>
          <div className="sp-hero-btns">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="sp-btn sp-btn-blue"
            >
              <MessageCircle size={15} strokeWidth={2} /> Book Free Session
            </a>
          </div>

          <div className="sp-divider" />

          <h2 className="sp-section-heading">What You Get from Every Session</h2>
          <div className="sp-benefits-grid">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div className="sp-benefit-card" key={b.title}>
                  <div className="sp-benefit-icon">
                    <Icon size={20} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <p className="sp-benefit-title">{b.title}</p>
                  <p className="sp-benefit-desc">{b.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="sp-cta">
            <p className="sp-cta-title">Ready to discover your best career path?<br />Book your free counselling session now.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="sp-cta-btn"
            >
              <MessageCircle size={15} strokeWidth={2} /> Get Started Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}