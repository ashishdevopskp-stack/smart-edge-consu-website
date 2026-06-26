"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle, Phone, ArrowRight, CheckCircle2,
  User, Mail, BookOpen, MapPin, Send, ShieldCheck, Clock,
  GraduationCap, Layers,
} from "lucide-react";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";

const QUALIFICATIONS = [
  "10th Pass", "12th Pass", "Diploma", "Pursuing Graduation",
  "Graduate", "Post Graduate", "Other",
];
const STREAMS = [
  "Science (PCM)", "Science (PCB)", "Commerce", "Arts / Humanities",
  "Engineering", "Management", "Law", "Medical", "Design", "Other",
];
const COURSES = [
  "B.Tech / B.E.", "MBA / PGDM", "BBA", "B.Com", "B.Sc",
  "BA", "LLB", "MBBS / BDS", "B.Pharm", "BCA / MCA",
  "M.Tech", "M.Sc", "MA", "Ph.D", "Diploma", "Other",
];

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  qualification: string;
  stream: string;
  courseInterest: string;
  city: string;
  query: string;
  consent: boolean;
}

export default function GetFreeCounsellingPage(): React.JSX.Element {
  const [form, setForm] = useState<FormData>({
    fullName: "", mobile: "", email: "",
    qualification: "", stream: "", courseInterest: "",
    city: "", query: "", consent: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading]     = useState(false);

  const set = (k: keyof FormData, v: string | boolean) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim())        e.fullName      = "Full name is required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.trim()))
                                      e.mobile        = "Enter a valid 10-digit mobile number";
    if (!form.qualification)          e.qualification = "Please select your qualification";
    if (!form.stream)                 e.stream        = "Please select a stream";
    if (!form.courseInterest)         e.courseInterest= "Please select a course";
    if (!form.city.trim())            e.city          = "City is required";
    if (!form.consent)                e.consent       = "Please give consent to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --c-bg:       #F8FAFF;
          --c-surface:  #FFFFFF;
          --c-border:   #E4E7F0;
          --c-text:     #0F1628;
          --c-muted:    #64748B;
          --c-error:    #DC2626;
          --c-error-bg: #FEF2F2;
          --f-display:  'Plus Jakarta Sans', sans-serif;
          --f-body:     'Inter', sans-serif;
          --radius-sm:   8px;
          --radius-md:   12px;
          --radius-lg:   16px;
          --radius-xl:   24px;
          --radius-full: 9999px;
          --shadow-sm:   0 1px 3px rgba(15,22,40,.06), 0 1px 2px rgba(15,22,40,.04);
          --shadow-md:   0 4px 16px rgba(15,22,40,.08), 0 2px 6px rgba(15,22,40,.04);
          --shadow-lg:   0 12px 40px rgba(15,22,40,.10), 0 4px 12px rgba(15,22,40,.06);
        }

        .cf-page {
          position: relative; min-height: 100vh;
          background: var(--c-bg); font-family: var(--f-body);
          overflow-x: hidden; padding-top: 100px; padding-bottom: 80px;
        }
        .cf-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .cf-blob-1 { width: 500px; height: 500px; top: -100px; right: -140px; background: radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .cf-blob-2 { width: 360px; height: 360px; bottom: 100px; left: -100px; background: radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .cf-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size: 28px 28px; opacity:.22; }

        /* ── LAYOUT ── */
        .cf-layout {
          position: relative; z-index: 5;
          max-width: 1100px; margin: 0 auto; padding: 0 40px;
          display: grid; grid-template-columns: 1fr 440px; gap: 48px; align-items: start;
        }

        /* ── LEFT PANEL ── */
        .cf-left { padding-top: 8px; }
        .cf-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg,#EDE9FE,#F5F3FF);
          border: 1px solid #C4B5FD; color: #5B21B6;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); margin-bottom: 20px;
        }
        .cf-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #7C3AED; animation: cfPulse 1.4s ease-in-out infinite; }
        @keyframes cfPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .cf-h1 {
          font-family: var(--f-display); font-size: clamp(26px,3.2vw,46px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--c-text);
          margin-bottom: 16px;
        }
        .cf-h1-grad {
          background: linear-gradient(120deg,#1D4ED8,#7C3AED,#0EA5E9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cf-sub { font-size: 15px; color: var(--c-muted); line-height: 1.75; margin-bottom: 36px; max-width: 460px; }

        .cf-trust-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .cf-trust-item { display: flex; align-items: flex-start; gap: 12px; }
        .cf-trust-icon {
          width: 36px; height: 36px; border-radius: 9px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .cf-trust-text strong { display: block; font-family: var(--f-display); font-size: 13.5px; font-weight: 700; color: var(--c-text); }
        .cf-trust-text span   { font-size: 12.5px; color: var(--c-muted); }

        .cf-contact-strip {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .cf-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: var(--radius-md);
          font-family: var(--f-display); font-size: 13px; font-weight: 700;
          text-decoration: none; color: #fff; transition: transform .15s, box-shadow .15s;
          position: relative; overflow: hidden;
        }
        .cf-contact-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.15),transparent 60%); }
        .cf-contact-btn:hover { transform: translateY(-2px); }
        .cf-contact-btn-blue  { background: linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow: 0 4px 14px rgba(37,99,235,.28); }
        .cf-contact-btn-blue:hover  { box-shadow: 0 8px 22px rgba(37,99,235,.38); }
        .cf-contact-btn-green { background: linear-gradient(135deg,#047857,#059669); box-shadow: 0 4px 14px rgba(5,150,105,.24); }
        .cf-contact-btn-green:hover { box-shadow: 0 8px 22px rgba(5,150,105,.32); }

        /* ── FORM CARD ── */
        .cf-card {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        .cf-card-header {
          padding: 24px 28px 20px;
          background: linear-gradient(135deg,#1D4ED8 0%,#3B82F6 100%);
          position: relative; overflow: hidden;
        }
        .cf-card-header::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.14),transparent 60%); }
        .cf-card-header-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,.65); letter-spacing:.1em; text-transform:uppercase; margin-bottom: 4px; }
        .cf-card-header-title { font-family: var(--f-display); font-size: 20px; font-weight: 800; color: #fff; line-height: 1.2; }
        .cf-card-header-sub   { font-size: 13px; color: rgba(255,255,255,.75); margin-top: 6px; line-height: 1.5; }

        .cf-card-body { padding: 24px 28px 28px; }

        /* ── FORM ELEMENTS ── */
        .cf-section-label {
          font-size: 10.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          color: var(--c-muted); margin: 20px 0 12px;
        }
        .cf-section-label:first-of-type { margin-top: 0; }

        .cf-field { margin-bottom: 14px; }
        .cf-field-label {
          display: block; font-size: 12.5px; font-weight: 600; color: var(--c-text);
          margin-bottom: 5px; font-family: var(--f-display);
        }
        .cf-field-label span { color: #DC2626; margin-left: 2px; }

        .cf-input, .cf-select, .cf-textarea {
          width: 100%; padding: 10px 13px;
          border: 1.5px solid var(--c-border); border-radius: var(--radius-md);
          font-family: var(--f-body); font-size: 13.5px; color: var(--c-text);
          background: #FAFBFF; outline: none;
          transition: border-color .15s, box-shadow .15s;
          appearance: none; -webkit-appearance: none;
        }
        .cf-input::placeholder, .cf-textarea::placeholder { color: #A0AABF; }
        .cf-input:focus, .cf-select:focus, .cf-textarea:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,.12);
          background: #fff;
        }
        .cf-input.error, .cf-select.error, .cf-textarea.error {
          border-color: var(--c-error);
          box-shadow: 0 0 0 3px rgba(220,38,38,.08);
        }
        .cf-select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; padding-right: 34px; cursor: pointer; }
        .cf-textarea { resize: vertical; min-height: 80px; }

        .cf-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .cf-error-msg { font-size: 11.5px; color: var(--c-error); margin-top: 4px; display: flex; align-items: center; gap: 4px; }

        /* ── CONSENT ── */
        .cf-consent { display: flex; align-items: flex-start; gap: 10px; margin: 18px 0 20px; }
        .cf-consent-check {
          width: 17px; height: 17px; border-radius: 4px; border: 1.5px solid var(--c-border);
          flex-shrink: 0; appearance: none; -webkit-appearance: none; cursor: pointer;
          margin-top: 1px; background: #FAFBFF; transition: all .15s; position: relative;
        }
        .cf-consent-check:checked { background: #1D4ED8; border-color: #1D4ED8; }
        .cf-consent-check:checked::after { content:'✓'; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:700; }
        .cf-consent-text { font-size: 12px; color: var(--c-muted); line-height: 1.6; }

        /* ── SUBMIT BTN ── */
        .cf-submit {
          width: 100%; padding: 13px 20px;
          background: linear-gradient(135deg,#1D4ED8,#3B82F6);
          color: #fff; border: none; border-radius: var(--radius-md); cursor: pointer;
          font-family: var(--f-display); font-size: 15px; font-weight: 800;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          box-shadow: 0 4px 16px rgba(37,99,235,.30);
          transition: transform .15s, box-shadow .15s; position: relative; overflow: hidden;
        }
        .cf-submit::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.15),transparent 60%); }
        .cf-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,.38); }
        .cf-submit:disabled { opacity: .7; cursor: not-allowed; }
        .cf-submit-note { font-size: 11.5px; color: var(--c-muted); text-align: center; margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 5px; }

        /* ── SUCCESS ── */
        .cf-success {
          padding: 40px 28px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .cf-success-ring {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg,#D1FAE5,#A7F3D0);
          border: 2px solid #6EE7B7;
          display: flex; align-items: center; justify-content: center;
          animation: cfScaleIn .4s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes cfScaleIn { from{opacity:0;transform:scale(.5)} to{opacity:1;transform:scale(1)} }
        .cf-success-title { font-family: var(--f-display); font-size: 20px; font-weight: 800; color: var(--c-text); }
        .cf-success-sub   { font-size: 13.5px; color: var(--c-muted); line-height: 1.7; max-width: 300px; }
        .cf-success-wa {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: var(--radius-md);
          background: linear-gradient(135deg,#047857,#059669);
          color: #fff; font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; box-shadow: 0 4px 14px rgba(5,150,105,.28);
          transition: transform .15s; position: relative; overflow: hidden;
        }
        .cf-success-wa::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.15),transparent 60%); }
        .cf-success-wa:hover { transform: translateY(-2px); }

        /* ── SPINNER ── */
        .cf-spinner { width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,.35); border-top-color: #fff; border-radius: 50%; animation: cfSpin .7s linear infinite; }
        @keyframes cfSpin { to { transform: rotate(360deg); } }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .cf-layout { grid-template-columns: 1fr; gap: 36px; }
          .cf-left { padding-top: 0; }
          .cf-page { padding-top: 80px; }
        }
        @media (max-width: 640px) {
          .cf-layout { padding: 0 16px; }
          .cf-field-grid { grid-template-columns: 1fr; }
          .cf-card-body { padding: 20px 18px 24px; }
          .cf-card-header { padding: 20px 18px 18px; }
          .cf-blob { display: none; }
        }
      `}</style>

      <div className="cf-page">
        <div className="cf-blob cf-blob-1" />
        <div className="cf-blob cf-blob-2" />
        <div className="cf-dotgrid" />

        <div className="cf-layout">

          {/* ── LEFT PANEL ── */}
          <div className="cf-left">
            <span className="cf-eyebrow">
              <span className="cf-eyebrow-dot" />
              Free Expert Guidance
            </span>

            <h1 className="cf-h1">
              Get Free<br />
              <span className="cf-h1-grad">Admission Counselling</span>
            </h1>

            <p className="cf-sub">
              Fill in a few details and our expert counsellor will contact you within
              <strong style={{ color: "#1D4ED8" }}> 10–15 minutes</strong>. No spam, just real guidance.
            </p>

            <div className="cf-trust-list">
              {[
                {
                  icon: <Clock size={18} color="#1D4ED8" strokeWidth={2} />,
                  bg: "#DBEAFE", title: "Rapid Response",
                  desc: "Our counsellors call you within 10–15 minutes of form submission.",
                },
                {
                  icon: <ShieldCheck size={18} color="#047857" strokeWidth={2} />,
                  bg: "#D1FAE5", title: "No Hidden Charges",
                  desc: "Counselling is completely free. What we quote is what you pay.",
                },
                {
                  icon: <GraduationCap size={18} color="#7C3AED" strokeWidth={2} />,
                  bg: "#EDE9FE", title: "Expert Counsellors",
                  desc: "Real education experts — not bots — will guide your journey.",
                },
                {
                  icon: <Layers size={18} color="#0369A1" strokeWidth={2} />,
                  bg: "#E0F2FE", title: "1000+ Courses & Colleges",
                  desc: "We match you with the best fit from a vast verified network.",
                },
              ].map(t => (
                <div className="cf-trust-item" key={t.title}>
                  <div className="cf-trust-icon" style={{ background: t.bg }}>
                    {t.icon}
                  </div>
                  <div className="cf-trust-text">
                    <strong>{t.title}</strong>
                    <span>{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cf-contact-strip">
              <a href={`tel:${PHONE}`} className="cf-contact-btn cf-contact-btn-blue">
                <Phone size={14} strokeWidth={2} /> Call Us Now
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I want free admission counselling. Please guide me.")}`}
                target="_blank" rel="noopener noreferrer"
                className="cf-contact-btn cf-contact-btn-green"
              >
                <MessageCircle size={14} strokeWidth={2} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div className="cf-card">
            <div className="cf-card-header">
              <p className="cf-card-header-label">Step 1 of 5 · Application</p>
              <p className="cf-card-header-title">Free Counselling Form</p>
              <p className="cf-card-header-sub">Takes less than 2 minutes to fill.</p>
            </div>

            <div className="cf-card-body">
              {submitted ? (
                <div className="cf-success">
                  <div className="cf-success-ring">
                    <CheckCircle2 size={34} color="#047857" strokeWidth={2} />
                  </div>
                  <p className="cf-success-title">You're all set!</p>
                  <p className="cf-success-sub">
                    Our counsellor will call you at <strong>{form.mobile}</strong> within 10–15 minutes.
                    You can also reach us on WhatsApp.
                  </p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I just submitted a counselling request. Please guide me.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="cf-success-wa"
                  >
                    <MessageCircle size={15} strokeWidth={2} /> Chat on WhatsApp
                  </a>
                  <Link
                    href="/admission-process/apply-now"
                    style={{ fontSize: 13, color: "#1D4ED8", textDecoration: "none", fontWeight: 600 }}
                  >
                    Continue to Full Application →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Personal */}
                  <p className="cf-section-label">Personal Details</p>

                  <div className="cf-field">
                    <label className="cf-field-label">Full Name <span>*</span></label>
                    <input
                      className={`cf-input${errors.fullName ? " error" : ""}`}
                      type="text" placeholder="e.g. Rahul Sharma"
                      value={form.fullName}
                      onChange={e => set("fullName", e.target.value)}
                    />
                    {errors.fullName && <p className="cf-error-msg">⚠ {errors.fullName}</p>}
                  </div>

                  <div className="cf-field-grid">
                    <div className="cf-field">
                      <label className="cf-field-label">Mobile Number <span>*</span></label>
                      <input
                        className={`cf-input${errors.mobile ? " error" : ""}`}
                        type="tel" placeholder="10-digit number"
                        maxLength={10}
                        value={form.mobile}
                        onChange={e => set("mobile", e.target.value.replace(/\D/g, ""))}
                      />
                      {errors.mobile && <p className="cf-error-msg">⚠ {errors.mobile}</p>}
                    </div>
                    <div className="cf-field">
                      <label className="cf-field-label">Email Address</label>
                      <input
                        className="cf-input"
                        type="email" placeholder="Optional"
                        value={form.email}
                        onChange={e => set("email", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <p className="cf-section-label">Education</p>

                  <div className="cf-field-grid">
                    <div className="cf-field">
                      <label className="cf-field-label">Qualification <span>*</span></label>
                      <select
                        className={`cf-select${errors.qualification ? " error" : ""}`}
                        value={form.qualification}
                        onChange={e => set("qualification", e.target.value)}
                      >
                        <option value="">Select</option>
                        {QUALIFICATIONS.map(q => <option key={q}>{q}</option>)}
                      </select>
                      {errors.qualification && <p className="cf-error-msg">⚠ {errors.qualification}</p>}
                    </div>
                    <div className="cf-field">
                      <label className="cf-field-label">Stream <span>*</span></label>
                      <select
                        className={`cf-select${errors.stream ? " error" : ""}`}
                        value={form.stream}
                        onChange={e => set("stream", e.target.value)}
                      >
                        <option value="">Select</option>
                        {STREAMS.map(s => <option key={s}>{s}</option>)}
                      </select>
                      {errors.stream && <p className="cf-error-msg">⚠ {errors.stream}</p>}
                    </div>
                  </div>

                  <div className="cf-field">
                    <label className="cf-field-label">Course Interest <span>*</span></label>
                    <select
                      className={`cf-select${errors.courseInterest ? " error" : ""}`}
                      value={form.courseInterest}
                      onChange={e => set("courseInterest", e.target.value)}
                    >
                      <option value="">Select a course</option>
                      {COURSES.map(c => <option key={c}>{c}</option>)}
                    </select>
                    {errors.courseInterest && <p className="cf-error-msg">⚠ {errors.courseInterest}</p>}
                  </div>

                  {/* Location */}
                  <p className="cf-section-label">Location</p>

                  <div className="cf-field">
                    <label className="cf-field-label">Your City <span>*</span></label>
                    <input
                      className={`cf-input${errors.city ? " error" : ""}`}
                      type="text" placeholder="e.g. Mumbai"
                      value={form.city}
                      onChange={e => set("city", e.target.value)}
                    />
                    {errors.city && <p className="cf-error-msg">⚠ {errors.city}</p>}
                  </div>

                  {/* Query */}
                  <p className="cf-section-label">Message</p>

                  <div className="cf-field">
                    <label className="cf-field-label">Your Query</label>
                    <textarea
                      className="cf-textarea"
                      placeholder="Tell us what you're looking for (optional)"
                      value={form.query}
                      onChange={e => set("query", e.target.value)}
                    />
                  </div>

                  {/* Consent */}
                  <div className="cf-consent">
                    <input
                      type="checkbox"
                      className="cf-consent-check"
                      checked={form.consent}
                      onChange={e => set("consent", e.target.checked)}
                    />
                    <p className="cf-consent-text">
                      I agree to be contacted via Call, WhatsApp, or Email by Smart Edge counsellors.
                      I understand this is free of charge.
                    </p>
                  </div>
                  {errors.consent && <p className="cf-error-msg" style={{ marginTop: -10, marginBottom: 14 }}>⚠ {errors.consent}</p>}

                  <button type="submit" className="cf-submit" disabled={loading}>
                    {loading ? (
                      <><div className="cf-spinner" /> Submitting…</>
                    ) : (
                      <><Send size={15} strokeWidth={2} /> Get Free Counselling</>
                    )}
                  </button>

                  <p className="cf-submit-note">
                    <ShieldCheck size={13} color="#047857" strokeWidth={2} />
                    Your data is safe and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}