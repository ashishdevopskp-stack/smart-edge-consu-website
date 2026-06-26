"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle, ArrowRight, Compass, GitBranch,
  BarChart2, Building2, Map, Sparkles, Target, Users, TrendingUp, BookOpen,
} from "lucide-react";
import CurvedImage from "../CurvedImage";

const WA_NUMBER = "919576461623";
const WA_MSG = encodeURIComponent("Hi, I need career guidance. Please help me choose the right course.");
const SERVICES = [
  {
    icon: Compass,
    color: "#1D4ED8",
    bg: "#DBEAFE",
    border: "#BFDBFE",
    title: "Career Counselling",
    desc: "One-on-one sessions with experienced counsellors who help you discover your strengths and map the best career path.",
    link: "/ourservices/career-counselling",
  },
  {
    icon: GitBranch,
    color: "#7C3AED",
    bg: "#EDE9FE",
    border: "#C4B5FD",
    title: "Stream Selection",
    desc: "Confused between Science, Commerce, and Arts? We help you pick the right stream based on your interests and goals.",
    link: "/ourservices/stream-selection",
  },
  {
    icon: BarChart2,
    color: "#0369A1",
    bg: "#E0F2FE",
    border: "#BAE6FD",
    title: "Course Comparison",
    desc: "Compare courses side-by-side — fees, duration, career scope, and more — so you make an informed decision.",
    link: "/ourservices/course-comparison",
  },
  {
    icon: Building2,
    color: "#047857",
    bg: "#D1FAE5",
    border: "#A7F3D0",
    title: "College Recommendation",
    desc: "Get a curated list of the best colleges matching your eligibility, budget, and preferred location.",
    link: "/ourservices/college-recommendation",
  },
  {
    icon: Map,
    color: "#B45309",
    bg: "#FEF3C7",
    border: "#FDE68A",
    title: "Career Roadmap",
    desc: "Receive a personalised step-by-step roadmap from today's enrolment to your dream career destination.",
    link: "/ourservices/career-roadmap",
  },
];
const STATS = [
  { value: "10,000+", label: "Students Guided" },
  { value: "500+",    label: "Colleges Listed" },
  { value: "95%",     label: "Satisfaction Rate" },
  { value: "Free",    label: "First Counselling" },
];

const HOW = [
  { num: "01", icon: Users,      title: "Share Your Profile",    desc: "Tell us your educational background, interests, and career aspirations." },
  { num: "02", icon: Target,     title: "Get Matched",           desc: "Our counsellors analyse your profile and shortlist the best-fit options." },
  { num: "03", icon: TrendingUp, title: "Receive Your Roadmap",  desc: "Get a clear, personalised plan with courses, colleges, and next steps." },
  { num: "04", icon: BookOpen,   title: "Start Your Journey",    desc: "Begin with confidence — we stay with you throughout the process." },
];

export default function CareerGuidancePage(): React.JSX.Element {
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

        .cg-page {
          position: relative; min-height: 100vh;
          background: var(--c-bg); font-family: var(--f-body);
          overflow-x: hidden; padding-top: 100px;
        }
        .cg-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .cg-blob-1 { width: 520px; height: 520px; top: -140px; right: -100px; background: radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .cg-blob-2 { width: 360px; height: 360px; top: 60%; left: -90px; background: radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .cg-blob-3 { width: 300px; height: 300px; bottom: 10%; right: 5%; background: radial-gradient(circle,#D1FAE5,transparent 70%); opacity:.35; }
        .cg-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size: 28px 28px; opacity:.25; }

        /* HERO */
        .cg-hero {
          position: relative; z-index: 5;
          max-width: 820px; margin: 0 auto;
          padding: 48px 40px 0; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
          padding-bottom: 60px;
        }
        .cg-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg,#EDE9FE,#F5F3FF);
          border: 1px solid #C4B5FD; color: #5B21B6;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display);
        }
        .cg-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #7C3AED; animation: cgPulse 1.4s ease-in-out infinite; }
        @keyframes cgPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .cg-h1 {
          font-family: var(--f-display); font-size: clamp(28px,4.5vw,54px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--c-text);
        }
        .cg-h1-grad { background: linear-gradient(120deg,#1D4ED8,#7C3AED,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .cg-sub { font-size: 16px; color: var(--c-muted); line-height: 1.75; max-width: 600px; }

        .cg-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 4px; }
        .cg-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: var(--radius-md);
          font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; color: #fff; border: none; cursor: pointer;
          position: relative; overflow: hidden; transition: transform .15s, box-shadow .15s;
        }
        .cg-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .cg-btn:hover { transform: translateY(-2px); }
        .cg-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.32); }
        .cg-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.40); }
        .cg-btn-purple { background: linear-gradient(135deg,#5B21B6,#7C3AED); box-shadow: 0 4px 14px rgba(124,58,237,.28); }
        .cg-btn-purple:hover { box-shadow: 0 8px 22px rgba(124,58,237,.36); }

        /* ILLUSTRATION */
        .cg-illustration-wrap {
          position: relative; z-index: 5;
          max-width: 900px; margin: 44px auto 0; padding: 0 40px;
        }
        .cg-illustration-card {
          background: var(--c-surface); border: 1px solid var(--c-border);
          border-radius: var(--radius-xl); overflow: hidden;
          box-shadow: var(--shadow-md);
          aspect-ratio: 16/7;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#EEF2FF 0%,#F5F3FF 50%,#E0F2FE 100%);
          position: relative;
        }
        .cg-illustration-placeholder {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          color: #93C5FD; font-family: var(--f-display); font-size: 13px;
          font-weight: 600; color: #6366F1; opacity: .5;
        }

        /* STATS */
        .cg-stats-wrap { position: relative; z-index: 5; max-width: 900px; margin: 44px auto 0; padding: 0 40px; }
        .cg-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        .cg-stat-card {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-lg); padding: 22px 18px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .cg-stat-value { font-family: var(--f-display); font-size: 28px; font-weight: 800; color: #1D4ED8; }
        .cg-stat-label { font-size: 12px; color: var(--c-muted); margin-top: 4px; }

        /* SERVICES */
        .cg-services-wrap { position: relative; z-index: 5; max-width: 1100px; margin: 64px auto 0; padding: 0 40px; }
        .cg-section-heading {
          font-family: var(--f-display); font-size: 22px; font-weight: 800;
          color: var(--c-text); margin-bottom: 8px; text-align: center;
        }
        .cg-section-sub { font-size: 14px; color: var(--c-muted); text-align: center; margin-bottom: 32px; }
        .cg-services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .cg-service-card {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-lg); padding: 24px 22px;
          box-shadow: var(--shadow-sm); text-decoration: none; color: inherit;
          transition: box-shadow .2s, transform .2s, border-color .2s;
          display: flex; flex-direction: column; gap: 12px;
        }
        .cg-service-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: #BFDBFE; }
        .cg-service-icon { width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center; border: 1.5px solid; }
        .cg-service-title { font-family: var(--f-display); font-size: 15px; font-weight: 700; color: var(--c-text); }
        .cg-service-desc { font-size: 13px; color: var(--c-muted); line-height: 1.65; flex: 1; }
        .cg-service-link { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; color: #1D4ED8; margin-top: 4px; }

        /* HOW IT WORKS */
        .cg-how-wrap { position: relative; z-index: 5; max-width: 960px; margin: 64px auto 0; padding: 0 40px; }
        .cg-how-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .cg-how-card {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-lg); padding: 22px 18px; text-align: center;
          box-shadow: var(--shadow-sm); transition: box-shadow .2s, transform .2s;
        }
        .cg-how-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
        .cg-how-num { font-family: var(--f-display); font-size: 11px; font-weight: 700; color: #94A3B8; letter-spacing: .1em; margin-bottom: 10px; }
        .cg-how-icon { width: 44px; height: 44px; border-radius: 12px; background: #EEF2FF; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .cg-how-title { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); margin-bottom: 6px; }
        .cg-how-desc { font-size: 12.5px; color: var(--c-muted); line-height: 1.6; }

        /* CTA */
        .cg-cta-wrap { position: relative; z-index: 5; max-width: 1100px; margin: 64px auto 80px; padding: 0 40px; }
        .cg-cta-inner {
          background: linear-gradient(135deg,#1D4ED8 0%,#7C3AED 100%);
          border-radius: var(--radius-xl); padding: 44px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          position: relative; overflow: hidden;
        }
        .cg-cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .cg-cta-inner::after { content:''; position:absolute; bottom:-40px; left:-40px; width:200px; height:200px; border-radius:50%; background:rgba(255,255,255,.05); }
        .cg-cta-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px; }
        .cg-cta-title { font-family: var(--f-display); font-size: clamp(18px,2.5vw,26px); font-weight: 800; color: #fff; line-height: 1.3; max-width: 520px; }
        .cg-cta-btns { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }
        .cg-cta-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: var(--radius-md);
          background: #fff; color: #1D4ED8;
          font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,.12); transition: transform .15s, box-shadow .15s; position: relative;
        }
        .cg-cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.18); }
        .cg-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; border-radius: var(--radius-md);
          background: rgba(255,255,255,.12); color: #fff; border: 1.5px solid rgba(255,255,255,.3);
          font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: background .15s;
        }
        .cg-cta-btn-ghost:hover { background: rgba(255,255,255,.2); }

        @media (max-width: 1024px) {
          .cg-services-grid { grid-template-columns: repeat(2,1fr); }
          .cg-how-grid { grid-template-columns: repeat(2,1fr); }
          .cg-stats-grid { grid-template-columns: repeat(2,1fr); }
          .cg-hero,.cg-illustration-wrap,.cg-stats-wrap,.cg-services-wrap,.cg-how-wrap,.cg-cta-wrap { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 640px) {
          .cg-hero,.cg-illustration-wrap,.cg-stats-wrap,.cg-services-wrap,.cg-how-wrap,.cg-cta-wrap { padding-left: 16px; padding-right: 16px; }
          .cg-services-grid,.cg-how-grid { grid-template-columns: 1fr; }
          .cg-stats-grid { grid-template-columns: repeat(2,1fr); }
          .cg-hero-btns { flex-direction: column; align-items: stretch; }
          .cg-btn { justify-content: center; }
          .cg-cta-inner { flex-direction: column; padding: 28px 24px; }
          .cg-blob { display: none; }
        }
      `}</style>

      <div className="cg-page">
        <div className="cg-blob cg-blob-1" />
        <div className="cg-blob cg-blob-2" />
        <div className="cg-blob cg-blob-3" />
        <div className="cg-dotgrid" />

        {/* HERO */}
        <div className="cg-hero">
          <span className="cg-eyebrow">
            <span className="cg-eyebrow-dot" />
            Personalised Career Guidance
          </span>
          <h1 className="cg-h1">
            Find the Right Career Path<br />
            <span className="cg-h1-grad">with Expert Guidance</span>
          </h1>
          <p className="cg-sub">
            Get personalised counselling to choose the best course and college based on your interests,
            qualifications, and future goals — all for free.
          </p>
          <div className="cg-hero-btns">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="cg-btn cg-btn-blue"
            >
              <MessageCircle size={15} strokeWidth={2} /> Get Free Counselling
            </a>
            <Link href="/courses" className="cg-btn cg-btn-purple">
              <Sparkles size={15} strokeWidth={2} /> Explore Courses
            </Link>
          </div>
        </div>

        {/* ILLUSTRATION PLACEHOLDER */}
       <CurvedImage 
       src="/image.png"
         alt="Career Guidance Illustration"
         
       
       />

        {/* STATS */}
        <div className="cg-stats-wrap">
          <div className="cg-stats-grid">
            {STATS.map((s) => (
              <div className="cg-stat-card" key={s.label}>
                <p className="cg-stat-value">{s.value}</p>
                <p className="cg-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="cg-services-wrap">
          <h2 className="cg-section-heading">Our Career Guidance Services</h2>
          <p className="cg-section-sub">Everything you need to make the right academic and career decision.</p>
          <div className="cg-services-grid">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link href={svc.link} className="cg-service-card" key={svc.title}>
                  <div
                    className="cg-service-icon"
                    style={{ background: svc.bg, borderColor: svc.border }}
                  >
                    <Icon size={22} color={svc.color} strokeWidth={2} />
                  </div>
                  <p className="cg-service-title">{svc.title}</p>
                  <p className="cg-service-desc">{svc.desc}</p>
                  <span className="cg-service-link">
                    Learn more <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="cg-how-wrap">
          <h2 className="cg-section-heading">How It Works</h2>
          <p className="cg-section-sub">Four simple steps to discover your perfect career path.</p>
          <div className="cg-how-grid">
            {HOW.map((h) => {
              const Icon = h.icon;
              return (
                <div className="cg-how-card" key={h.num}>
                  <p className="cg-how-num">STEP {h.num}</p>
                  <div className="cg-how-icon">
                    <Icon size={20} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <p className="cg-how-title">{h.title}</p>
                  <p className="cg-how-desc">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="cg-cta-wrap">
          <div className="cg-cta-inner">
            <div>
              <p className="cg-cta-label">Free &amp; Personalised</p>
              <p className="cg-cta-title">
                Not sure which career to pursue?<br />
                Talk to an expert — it's completely free.
              </p>
            </div>
            <div className="cg-cta-btns">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="cg-cta-btn-white"
              >
                <MessageCircle size={15} strokeWidth={2} /> Get Free Counselling
              </a>
              <Link href="/courses" className="cg-cta-btn-ghost">
                Explore Courses <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}