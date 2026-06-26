"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft, CheckCircle2, AlertCircle, Upload } from "lucide-react";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";

const DOC_GROUPS = [
  {
    id: "10th",
    label: "10th Pass",
    color: "#1D4ED8", bg: "#DBEAFE", border: "#BFDBFE",
    docs: ["10th Marksheet", "Aadhaar Card", "Passport Size Photos (4 copies)"],
  },
  {
    id: "12th",
    label: "12th Pass",
    color: "#7C3AED", bg: "#EDE9FE", border: "#C4B5FD",
    docs: ["10th Marksheet", "12th Marksheet", "Aadhaar Card", "Passport Size Photos (4 copies)"],
  },
  {
    id: "grad",
    label: "Graduation",
    color: "#047857", bg: "#D1FAE5", border: "#A7F3D0",
    docs: ["Graduation Certificate / Degree", "All Previous Year Marksheets", "ID Proof (Aadhaar / PAN)", "Passport Size Photos (4 copies)"],
  },
];

const NOTES = [
  "Original documents may be required during verification.",
  "Ensure all uploaded scans are clear, legible, and valid.",
  "Aadhaar card must match the name on your marksheets.",
];

export default function RequiredDocumentsPage(): React.JSX.Element {
  const [active, setActive] = useState("10th");
  const current = DOC_GROUPS.find((g) => g.id === active)!;

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
          --shadow-sm: 0 1px 3px rgba(15,22,40,.06); --shadow-md: 0 4px 16px rgba(15,22,40,.08);
        }
        .rd-page {
          min-height: 100vh; background: var(--c-bg);
          font-family: var(--f-body); padding-top: 100px; overflow-x: hidden;
          position: relative;
        }
        .rd-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .rd-blob-1 { width: 400px; height: 400px; top: -100px; right: -100px; background: radial-gradient(circle,#D1FAE5,transparent 70%); opacity:.45; }
        .rd-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size: 28px 28px; opacity:.22; }

        .rd-wrap { position: relative; z-index: 5; max-width: 820px; margin: 0 auto; padding: 0 40px 80px; }

        .rd-back {
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; color: var(--c-muted); font-size: 13px; font-weight: 600;
          margin-bottom: 36px; margin-top: 8px;
          transition: color .15s;
        }
        .rd-back:hover { color: #1D4ED8; }

        .rd-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg,#D1FAE5,#ECFDF5);
          border: 1px solid #A7F3D0; color: #047857;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); margin-bottom: 16px;
        }
        .rd-h1 {
          font-family: var(--f-display); font-size: clamp(24px,4vw,44px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--c-text); margin-bottom: 12px;
        }
        .rd-sub { font-size: 15px; color: var(--c-muted); line-height: 1.7; max-width: 540px; margin-bottom: 40px; }

        /* TABS */
        .rd-tabs { display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap; }
        .rd-tab {
          padding: 9px 20px; border-radius: var(--radius-full);
          font-family: var(--f-display); font-size: 13px; font-weight: 700;
          border: 1.5px solid var(--c-border); background: var(--c-surface);
          color: var(--c-muted); cursor: pointer; transition: all .15s;
        }
        .rd-tab.active { color: #fff; border-color: transparent; }
        .rd-tab:hover:not(.active) { border-color: #3B82F6; color: #1D4ED8; }

        /* DOC LIST */
        .rd-card {
          background: var(--c-surface); border: 1.5px solid;
          border-radius: var(--radius-xl); padding: 28px 32px;
          box-shadow: var(--shadow-md); margin-bottom: 24px;
        }
        .rd-card-title { font-family: var(--f-display); font-size: 18px; font-weight: 800; color: var(--c-text); margin-bottom: 20px; }
        .rd-doc-list { display: flex; flex-direction: column; gap: 10px; }
        .rd-doc-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px; border-radius: var(--radius-md);
          background: var(--c-bg); border: 1px solid var(--c-border);
        }
        .rd-doc-name { font-size: 14px; font-weight: 600; color: var(--c-text); }

        /* NOTES */
        .rd-notes-card {
          background: #FFFBEB; border: 1.5px solid #FDE68A;
          border-radius: var(--radius-lg); padding: 20px 24px;
          display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px;
        }
        .rd-notes-head { display: flex; align-items: center; gap: 8px; font-family: var(--f-display); font-size: 14px; font-weight: 700; color: #92400E; }
        .rd-note-item { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; color: #78350F; line-height: 1.55; }

        /* CTA */
        .rd-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: var(--radius-md);
          background: linear-gradient(135deg,#047857,#059669);
          color: #fff; font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; box-shadow: 0 4px 14px rgba(5,150,105,.28);
          transition: transform .15s, box-shadow .15s;
        }
        .rd-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        @media (max-width: 640px) {
          .rd-wrap { padding: 0 16px 60px; }
          .rd-card { padding: 20px 18px; }
          .rd-blob { display: none; }
        }
      `}</style>

      <div className="rd-page">
        <div className="rd-blob rd-blob-1" />
        <div className="rd-dotgrid" />

        <div className="rd-wrap">
          <Link href="/admission-process" className="rd-back">
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to Admission Process
          </Link>

          <span className="rd-eyebrow">Document Checklist</span>
          <h1 className="rd-h1">Required Documents<br />for Admission</h1>
          <p className="rd-sub">Prepare your documents in advance for a smooth and hassle-free admission experience.</p>

          {/* Tabs */}
          <div className="rd-tabs">
            {DOC_GROUPS.map((g) => (
              <button
                key={g.id}
                className={`rd-tab${active === g.id ? " active" : ""}`}
                style={active === g.id ? { background: `linear-gradient(135deg,${g.color},${g.color}CC)` } : {}}
                onClick={() => setActive(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Doc list card */}
          <div className="rd-card" style={{ borderColor: current.border, background: current.bg + "55" }}>
            <p className="rd-card-title">Documents for {current.label}</p>
            <div className="rd-doc-list">
              {current.docs.map((doc) => (
                <div className="rd-doc-item" key={doc}>
                  <CheckCircle2 size={18} color={current.color} strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span className="rd-doc-name">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="rd-notes-card">
            <div className="rd-notes-head">
              <AlertCircle size={16} strokeWidth={2} color="#B45309" />
              Important Notes
            </div>
            {NOTES.map((n) => (
              <div className="rd-note-item" key={n}>
                <span style={{ flexShrink: 0, marginTop: 2 }}>•</span> {n}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I want to submit my documents for admission. Please guide me.")}`}
            target="_blank" rel="noopener noreferrer"
            className="rd-cta"
          >
            <Upload size={15} strokeWidth={2} /> Upload Documents via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}