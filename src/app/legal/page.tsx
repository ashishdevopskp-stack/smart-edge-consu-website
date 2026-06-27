"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield, Lock, Eye, UserCheck, Bell, Cookie,
  ScrollText, CheckCircle, AlertCircle, Info, Building2,
  AlertTriangle, GraduationCap, Award, Briefcase, BookOpen,
  Star, ChevronRight,
} from "lucide-react";

/* ─── PRIVACY DATA ─── */
const PRIVACY_SECTIONS = [
  {
    icon: Lock,
    title: "Information We Collect",
    points: [
      "Name, phone number, email address, and other contact details submitted through our enquiry or admission forms.",
      "Academic details such as qualifications, preferred courses, and target institutions.",
      "Device and browser information collected automatically when you visit our website.",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    points: [
      "To provide free admission counselling and guidance tailored to your academic profile.",
      "To communicate about courses, admission deadlines, and related services via call, SMS, email, or WhatsApp.",
      "To improve our website experience and understand visitor behaviour using analytics tools.",
    ],
  },
  {
    icon: UserCheck,
    title: "Data Protection & Confidentiality",
    points: [
      "Your personal information is stored securely and treated as strictly confidential.",
      "We do not sell, rent, or share your data with unauthorised third parties.",
      "Data is shared only with partner colleges when necessary for admission processing, with your awareness.",
    ],
  },
  {
    icon: Bell,
    title: "Communications",
    points: [
      "By submitting your information, you consent to receive communications related to our admission assistance services.",
      "You may opt out of promotional communications at any time by contacting us directly.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    points: [
      "Our website may use cookies and third-party analytics tools (such as Google Analytics) to measure traffic and improve user experience.",
      "You can disable cookies through your browser settings; however, this may affect some website functionality.",
    ],
  },
];

/* ─── TERMS DATA ─── */
const TERMS_SECTIONS = [
  {
    icon: CheckCircle,
    title: "Accuracy of Information",
    points: [
      "Users must provide accurate, genuine, and up-to-date information when submitting enquiry or admission forms.",
      "Smart Edge Education Consultancy is not responsible for consequences arising from incorrect or misleading information provided by the user.",
      "Any misrepresentation of academic qualifications or personal details may result in cancellation of admission assistance.",
    ],
  },
  {
    icon: Building2,
    title: "Admission & Eligibility",
    points: [
      "Admission is subject to eligibility criteria set by the respective institution or regulatory authority.",
      "Smart Edge Education Consultancy provides guidance and assistance; final admission approval rests solely with the respective institution.",
      "Seat availability, course offerings, and admission deadlines are determined by the institution and may vary.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Fees & Policy Changes",
    points: [
      "Course fees, admission policies, scholarship availability, and seat counts may change without prior notice.",
      "Smart Edge Education Consultancy will make reasonable efforts to keep users informed of significant changes.",
      "All fees are governed by the respective institution's fee structure and are non-negotiable by Smart Edge.",
    ],
  },
  {
    icon: Info,
    title: "Website Use & Content",
    points: [
      "Website content is provided for informational purposes only and does not constitute a binding offer or guarantee.",
      "Smart Edge Education Consultancy reserves the right to update, modify, or remove content at any time without notice.",
      "Users may not reproduce, distribute, or commercially exploit content from this website without written permission.",
    ],
  },
];

/* ─── DISCLAIMER DATA ─── */
const DISCLAIMER_CARDS = [
  {
    icon: GraduationCap,
    title: "Counselling Role",
    body: "Smart Edge Education Consultancy is an education counselling and admission assistance platform. We do not directly admit students into any college or university; we facilitate and guide the admission process.",
  },
  {
    icon: Award,
    title: "University Approvals & Affiliations",
    body: "University approvals, UGC/AICTE/NCTE recognitions, and institutional affiliations are governed by the respective regulatory authorities. Smart Edge does not influence or guarantee any recognition or approval status.",
  },
  {
    icon: BookOpen,
    title: "Scholarships & Free Schemes",
    body: "Scholarships, free education schemes, hostel facilities, and food support are available only for selected courses and institutions, subject to individual eligibility. These benefits are determined by the institution, not by Smart Edge.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    body: "Placement assistance may be provided where applicable; however, job placement cannot be guaranteed. Outcomes depend on the student's qualifications, the institution's placement cell, and market conditions.",
  },
];

const TRUST_POINTS = [
  "Verified Admission Guidance", "Transparent Process",
  "Student-Centric Support", "Expert Career Counselling",
  "Trusted Educational Network", "Dedicated Assistance Throughout Admission",
];

const PROMISE_POINTS = [
  "Genuine Admission Guidance", "Transparent Information & Fees",
  "Verified College Recommendations", "Complete Admission Assistance",
  "Dedicated Student Support Team", "Secure Handling of Personal Information",
];

const UNIVERSITIES = [
  "Swami Vivekanand Subharti University, Meerut, UP",
  "Manglayatan University, Aligarh, UP",
  "Mata Tripura Sundari Open University, Tripura",
  "Sikkim Skill University, Sikkim",
  "Sikkim Global Technical University, Sikkim",
  "Asian International University, Imphal West, Manipur",
  "Aisect University, Hazaribagh, Jharkhand",
  "Sabarmati University, Gujarat",
  "F.S. University, Shikohabad, UP",
  "Board of Open Schooling & Skill Edu., Sikkim",
  "Radha Govind University, Jharkhand",
];

/* ════════════════════════════════════════════════════════════════════ */
const TABS = [
  { id: "privacy",     label: "Privacy Policy",      icon: Shield      },
  { id: "terms",       label: "Terms & Conditions",  icon: ScrollText  },
  { id: "disclaimer",  label: "Disclaimer",           icon: AlertTriangle },
];

export default function LegalPage() {
  const [active, setActive] = useState("privacy");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; background: #F8FAFF; }

        /* ── HERO ── */
        .lg-hero {
          background: linear-gradient(135deg, #0F1628 0%, #1e2d5a 100%);
          padding: 96px 40px 0; position: relative; overflow: hidden;
        }
        .lg-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(59,130,246,.18), transparent 60%);
          pointer-events: none;
        }
        .lg-hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
        .lg-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,.15); border: 1px solid rgba(59,130,246,.3);
          color: #93C5FD; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
          padding: 5px 13px; border-radius: 999px; margin-bottom: 18px;
        }
        .lg-hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(26px, 4vw, 42px); font-weight: 800; color: #fff;
          line-height: 1.15; margin: 0 0 14px;
        }
        .lg-hero p {
          font-family: 'Inter', sans-serif; font-size: 14.5px; color: rgba(255,255,255,.6);
          line-height: 1.7; margin: 0 0 36px; max-width: 520px;
        }

        /* ── TAB BAR (inside hero, flush bottom) ── */
        .lg-tabbar {
          display: flex; gap: 4px; position: relative; z-index: 1;
        }
        .lg-tab {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 12px 12px 0 0;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,.5); background: rgba(255,255,255,.06);
          border: none; cursor: pointer;
          transition: color .18s, background .18s;
          border-bottom: none;
          position: relative;
        }
        .lg-tab:hover { color: rgba(255,255,255,.85); background: rgba(255,255,255,.1); }
        .lg-tab.active {
          color: #0F1628; background: #F8FAFF;
        }
        .lg-tab svg { opacity: .7; }
        .lg-tab.active svg { opacity: 1; }

        /* ── BREADCRUMB ── */
        .lg-breadcrumb {
          max-width: 860px; margin: 0 auto; padding: 18px 40px 0;
          display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #94A3B8;
        }
        .lg-breadcrumb a { color: #94A3B8; text-decoration: none; }
        .lg-breadcrumb a:hover { color: #1D4ED8; }
        .lg-breadcrumb-active { color: #1D4ED8; font-weight: 600; }

        /* ── TAB QUICK-NAV (below breadcrumb, mobile) ── */
        .lg-mobile-tabs {
          display: none; gap: 8px; padding: 16px 20px 0;
          max-width: 860px; margin: 0 auto; flex-wrap: wrap;
        }
        .lg-mobile-tab {
          padding: 7px 14px; border-radius: 999px;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 700;
          border: 1.5px solid #E4E7F0; background: #fff; color: #64748B;
          cursor: pointer; transition: all .15s;
        }
        .lg-mobile-tab.active { background: #1D4ED8; border-color: #1D4ED8; color: #fff; }

        /* ── CONTENT AREA ── */
        .lg-content { max-width: 860px; margin: 0 auto; padding: 44px 40px 80px; }

        /* Panel fade */
        .lg-panel { animation: lgFadeIn .22s ease; }
        @keyframes lgFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        /* Section */
        .lg-section { margin-bottom: 40px; }
        .lg-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .lg-section-icon {
          width: 40px; height: 40px; border-radius: 10px; background: #EFF6FF;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .lg-section-title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 17px; font-weight: 800;
          color: #0F1628; margin: 0;
        }
        .lg-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px; }
        .lg-list li {
          font-family: 'Inter', sans-serif; font-size: 14px; color: #475569;
          line-height: 1.7; padding-left: 18px; position: relative;
        }
        .lg-list li::before {
          content: ''; position: absolute; left: 0; top: 9px;
          width: 6px; height: 6px; border-radius: 50%; background: #1D4ED8;
        }

        /* Divider */
        .lg-divider { height: 1px; background: #E4E7F0; margin: 36px 0; }

        /* Highlight box */
        .lg-highlight {
          border-radius: 12px; padding: 18px 22px; margin-bottom: 36px;
          font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7;
        }
        .lg-highlight-blue {
          background: #EFF6FF; border: 1px solid #BFDBFE; color: #1E3A8A;
        }
        .lg-highlight-yellow {
          background: #FFFBEB; border-left: 4px solid #F59E0B;
          border-radius: 0 12px 12px 0; color: #78350F;
        }
        .lg-highlight strong { font-weight: 700; }

        /* Disclaimer cards */
        .lg-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 40px; }
        .lg-card {
          background: #fff; border: 1px solid #E4E7F0; border-radius: 14px; padding: 22px;
          transition: box-shadow .2s;
        }
        .lg-card:hover { box-shadow: 0 8px 24px rgba(15,22,40,.08); }
        .lg-card-icon {
          width: 38px; height: 38px; border-radius: 9px; background: #EFF6FF;
          display: flex; align-items: center; justify-content: center; margin-bottom: 12px;
        }
        .lg-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;
          color: #0F1628; margin: 0 0 8px;
        }
        .lg-card p {
          font-family: 'Inter', sans-serif; font-size: 13px; color: #64748B;
          line-height: 1.7; margin: 0;
        }

        /* Two-col boxes */
        .lg-two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
        .lg-box { border-radius: 14px; padding: 24px; }
        .lg-box-blue  { background: #EFF6FF; border: 1px solid #BFDBFE; }
        .lg-box-green { background: #F0FDF4; border: 1px solid #BBF7D0; }
        .lg-box h3 {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;
          color: #0F1628; margin: 0 0 16px; display: flex; align-items: center; gap: 7px;
        }
        .lg-check-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 9px; }
        .lg-check-list li {
          display: flex; align-items: flex-start; gap: 7px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #374151; line-height: 1.55;
        }
        .lg-check-list li svg { flex-shrink: 0; margin-top: 2px; }

        /* Stats */
        .lg-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 40px; }
        .lg-stat {
          background: #0F1628; border-radius: 12px; padding: 20px; text-align: center;
        }
        .lg-stat-val {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 22px; font-weight: 800;
          color: #fff; margin-bottom: 4px;
        }
        .lg-stat-label { font-family: 'Inter', sans-serif; font-size: 11px; color: rgba(255,255,255,.5); line-height: 1.4; }

        /* Universities */
        .lg-uni-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-bottom: 40px; }
        .lg-uni-item {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #E4E7F0; border-radius: 8px;
          padding: 9px 12px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #374151;
        }
        .lg-uni-num {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 800;
          color: #1D4ED8; background: #EFF6FF; border-radius: 4px;
          padding: 2px 6px; flex-shrink: 0;
        }

        /* Contact box */
        .lg-contact {
          background: #F8FAFF; border: 1px solid #DBEAFE; border-radius: 14px; padding: 26px;
        }
        .lg-contact h3 {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;
          color: #0F1628; margin: 0 0 8px;
        }
        .lg-contact p { font-family: 'Inter', sans-serif; font-size: 13.5px; color: #64748B; line-height: 1.7; margin: 0 0 14px; }
        .lg-contact a {
          display: inline-flex; align-items: center; gap: 6px;
          background: #1D4ED8; color: #fff; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 700;
          padding: 10px 20px; border-radius: 8px; transition: background .15s;
        }
        .lg-contact a:hover { background: #1e40af; }

        /* Trust strip at top of privacy */
        .lg-trust-strip {
          background: #1D4ED8; border-radius: 12px;
          padding: 16px 22px; margin-bottom: 36px;
          display: flex; align-items: center; gap: 12px;
        }
        .lg-trust-strip p {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #fff; margin: 0; line-height: 1.5;
        }
        .lg-trust-strip p span { opacity: .75; font-weight: 400; }

        /* ── RESPONSIVE ── */
        @media (max-width: 720px) {
          .lg-hero       { padding: 80px 20px 0; }
          .lg-content    { padding: 32px 20px 60px; }
          .lg-breadcrumb { padding: 14px 20px 0; }
          .lg-tabbar     { display: none; }
          .lg-mobile-tabs { display: flex; }
          .lg-cards      { grid-template-columns: 1fr; }
          .lg-two        { grid-template-columns: 1fr; }
          .lg-stats      { grid-template-columns: 1fr 1fr; }
          .lg-uni-grid   { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .lg-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ── HERO + TABBAR ── */}
      <section className="lg-hero">
        <div className="lg-hero-inner">
          <div className="lg-hero-badge">
            <Shield size={12} strokeWidth={2} />Legal &amp;Trust
          </div>
          <h1>Legal &amp; Trust Information</h1>
          <p>
            Everything you need to know about how Smart Edge Education Consultancy
            handles your data, our service terms, and our commitments to you.
          </p>

          {/* Desktop tab bar */}
          <div className="lg-tabbar">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`lg-tab${active === t.id ? " active" : ""}`}
                onClick={() => setActive(t.id)}
              >
                <t.icon size={14} strokeWidth={2} />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="lg-breadcrumb">
        <a href="/">Home</a>
        <ChevronRight size={12} strokeWidth={2} color="#CBD5E1" />
        <span>Legal</span>
        <ChevronRight size={12} strokeWidth={2} color="#CBD5E1" />
        <span className="lg-breadcrumb-active">
          {TABS.find(t => t.id === active)?.label}
        </span>
      </div>

      {/* Mobile tab switcher */}
      <div className="lg-mobile-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`lg-mobile-tab${active === t.id ? " active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="lg-content">

        {/* ━━━━━ PRIVACY POLICY ━━━━━ */}
        {active === "privacy" && (
          <div className="lg-panel" key="privacy">
            <div className="lg-trust-strip">
              <Shield size={20} color="#fff" strokeWidth={2} style={{ flexShrink: 0 }} />
              <p>
                "Your information is safe, secure, and protected with Smart Edge Education Consultancy."
                {" "}<span>We never sell or misuse your data.</span>
              </p>
            </div>

            {PRIVACY_SECTIONS.map((s, i) => (
              <div className="lg-section" key={i}>
                <div className="lg-section-head">
                  <div className="lg-section-icon">
                    <s.icon size={19} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <h2 className="lg-section-title">{s.title}</h2>
                </div>
                <ul className="lg-list">
                  {s.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                {i < PRIVACY_SECTIONS.length - 1 && <div className="lg-divider" />}
              </div>
            ))}

            <div className="lg-divider" />
            <div className="lg-contact">
              <h3>Questions About Your Privacy?</h3>
              <p>If you have any questions or requests regarding your personal data, please reach out to us directly.</p>
              <a href="tel:9576461623">📞 Call Us: 9576461623</a>
            </div>
          </div>
        )}

        {/* ━━━━━ TERMS & CONDITIONS ━━━━━ */}
        {active === "terms" && (
          <div className="lg-panel" key="terms">
            <div className="lg-highlight lg-highlight-yellow">
              ⚠️ <strong>Please Note:</strong> By accessing our website or engaging with our counselling services, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions.
            </div>

            {TERMS_SECTIONS.map((s, i) => (
              <div className="lg-section" key={i}>
                <div className="lg-section-head">
                  <div className="lg-section-icon">
                    <s.icon size={19} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <h2 className="lg-section-title">{s.title}</h2>
                </div>
                <ul className="lg-list">
                  {s.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                {i < TERMS_SECTIONS.length - 1 && <div className="lg-divider" />}
              </div>
            ))}

            <div className="lg-divider" />
            <div className="lg-contact">
              <h3>Need Clarification?</h3>
              <p>If you have questions about these terms or our admission assistance process, our counselling team is happy to help.</p>
              <a href="tel:9576461623">📞 Call: 9576461623</a>
            </div>
          </div>
        )}

        {/* ━━━━━ DISCLAIMER ━━━━━ */}
        {active === "disclaimer" && (
          <div className="lg-panel" key="disclaimer">
            <div className="lg-highlight lg-highlight-yellow">
              <strong>Important Notice:</strong> "We provide counselling and admission assistance services. Final admission, scholarship approval, placement opportunities, and course availability depend on the policies of the respective institutions."
            </div>

            <div className="lg-cards">
              {DISCLAIMER_CARDS.map((d, i) => (
                <div className="lg-card" key={i}>
                  <div className="lg-card-icon">
                    <d.icon size={19} color="#1D4ED8" strokeWidth={2} />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>

            <div className="lg-stats">
              {[
                { val: "1000+", label: "Successful Admissions"         },
                { val: "50+",   label: "Partner Colleges & Universities" },
                { val: "4.8★",  label: "Student Satisfaction Rating"   },
                { val: "11",    label: "Partner Universities"           },
              ].map(s => (
                <div className="lg-stat" key={s.val}>
                  <div className="lg-stat-val">{s.val}</div>
                  <div className="lg-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="lg-two">
              <div className="lg-box lg-box-blue">
                <h3><Star size={15} color="#1D4ED8" strokeWidth={2} /> Why Students Trust Smart Edge?</h3>
                <ul className="lg-check-list">
                  {TRUST_POINTS.map((t, i) => (
                    <li key={i}><CheckCircle size={14} color="#1D4ED8" strokeWidth={2} />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="lg-box lg-box-green">
                <h3>🛡️ Smart Edge Student Promise</h3>
                <ul className="lg-check-list">
                  {PROMISE_POINTS.map((p, i) => (
                    <li key={i}><CheckCircle size={14} color="#059669" strokeWidth={2} />{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#0F1628", margin: "0 0 16px" }}>
              🎓 Partner Universities We Work With
            </h3>
            <div className="lg-uni-grid">
              {UNIVERSITIES.map((u, i) => (
                <div className="lg-uni-item" key={i}>
                  <span className="lg-uni-num">{String(i + 1).padStart(2, "0")}</span>
                  {u}
                </div>
              ))}
            </div>

            <div className="lg-divider" />
            <div className="lg-contact">
              <h3>For More Information</h3>
              <p>Contact our counselling team for details about specific courses, universities, scholarships, or admission requirements.</p>
              <a href="tel:9576461623">📞 Call Sonu Sharma: 9576461623</a>
            </div>
          </div>
        )}

      </div>
    </>
  );
}