"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react";

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I want to talk to a counsellor about my eligibility. Please help me.");

const ELIGIBILITY = [
  { qual: "10th Pass",        desc: "Eligible for diploma, vocational, and certificate-level courses." },
  { qual: "12th Pass",        desc: "Eligible for UG degrees like BA, B.Com, BCA, B.Sc, and more." },
  { qual: "Diploma Holders",  desc: "Eligible for lateral entry into B.Tech and equivalent programmes." },
  { qual: "Graduates",        desc: "Eligible for PG courses like MBA, MCA, M.Com, MA, M.Sc, and more." },
  { qual: "Post Graduates",   desc: "Eligible for PhD, M.Phil, and advanced specialisation programmes." },
];

const FAQS = [
  {
    q: "Who can apply through Smart Edge?",
    a: "Anyone who has completed 10th, 12th, a diploma, graduation, or post-graduation can apply. We offer courses across all qualification levels.",
  },
  {
    q: "Is counselling really free?",
    a: "Yes, 100%. Our counsellors provide personalised guidance at no cost. We earn only when you get admitted — your interest aligns with ours.",
  },
  {
    q: "Are the admissions genuine and recognised?",
    a: "All colleges we work with are approved by UGC, AICTE, or NCTE. Your degree will be fully valid for employment and further studies.",
  },
  {
    q: "Can I apply completely online?",
    a: "Yes. The entire process — application, counselling, document submission, and fee payment — can be completed online from anywhere in India.",
  },
  {
    q: "Which documents are required?",
    a: "Requirements vary by qualification. Generally you'll need your previous marksheets, Aadhaar card, and passport-size photos. Check the documents page for the full list.",
  },
  {
    q: "How long does the admission process take?",
    a: "Most admissions are confirmed within 3 to 7 working days after document verification and fee payment.",
  },
  {
    q: "Are distance learning / online courses available?",
    a: "Yes. We offer both regular and distance/online modes for many programmes, giving you flexibility to study alongside work or family commitments.",
  },
];

export default function EligibilityFaqsPage(): React.JSX.Element {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((p) => (p === i ? null : i));

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
        .ef-page {
          min-height: 100vh; background: var(--c-bg);
          font-family: var(--f-body); padding-top: 100px; overflow-x: hidden; position: relative;
        }
        .ef-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .ef-blob-1 { width: 420px; height: 420px; top: -110px; right: -110px; background: radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.45; }
        .ef-blob-2 { width: 300px; height: 300px; bottom: 10%; left: -80px; background: radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.4; }
        .ef-dotgrid { position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size: 28px 28px; opacity:.22; }

        .ef-wrap { position: relative; z-index: 5; max-width: 820px; margin: 0 auto; padding: 0 40px 80px; }

        .ef-back {
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; color: var(--c-muted); font-size: 13px; font-weight: 600;
          margin-bottom: 36px; margin-top: 8px; transition: color .15s;
        }
        .ef-back:hover { color: #1D4ED8; }

        .ef-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px; border-radius: var(--radius-full);
          background: linear-gradient(135deg,#EDE9FE,#F5F3FF);
          border: 1px solid #C4B5FD; color: #5B21B6;
          font-size: 11px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
          font-family: var(--f-display); margin-bottom: 16px;
        }
        .ef-h1 {
          font-family: var(--f-display); font-size: clamp(24px,4vw,42px);
          font-weight: 800; line-height: 1.1; letter-spacing: -.025em; color: var(--c-text); margin-bottom: 12px;
        }
        .ef-sub { font-size: 15px; color: var(--c-muted); line-height: 1.7; max-width: 540px; margin-bottom: 48px; }

        /* ELIGIBILITY */
        .ef-section-title { font-family: var(--f-display); font-size: 19px; font-weight: 800; color: var(--c-text); margin-bottom: 18px; }
        .ef-elig-grid { display: flex; flex-direction: column; gap: 10px; margin-bottom: 52px; }
        .ef-elig-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 18px; border-radius: var(--radius-md);
          background: var(--c-surface); border: 1.5px solid var(--c-border); box-shadow: var(--shadow-sm);
          transition: box-shadow .2s, border-color .2s;
        }
        .ef-elig-row:hover { box-shadow: var(--shadow-md); border-color: #A5B4FC; }
        .ef-elig-qual { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); margin-bottom: 3px; }
        .ef-elig-desc { font-size: 13px; color: var(--c-muted); line-height: 1.55; }

        /* FAQS */
        .ef-faq-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 44px; }
        .ef-faq-item {
          background: var(--c-surface); border: 1.5px solid var(--c-border);
          border-radius: var(--radius-md); overflow: hidden;
          box-shadow: var(--shadow-sm); transition: border-color .15s;
        }
        .ef-faq-item.open { border-color: #A5B4FC; }
        .ef-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; cursor: pointer; user-select: none; gap: 12px;
        }
        .ef-faq-q-text { font-family: var(--f-display); font-size: 14px; font-weight: 700; color: var(--c-text); }
        .ef-faq-chevron { flex-shrink: 0; transition: transform .25s; color: var(--c-muted); }
        .ef-faq-chevron.open { transform: rotate(180deg); }
        .ef-faq-body { overflow: hidden; max-height: 0; transition: max-height .3s ease; }
        .ef-faq-body.open { max-height: 200px; }
        .ef-faq-a {
          padding: 0 20px 16px; font-size: 13.5px; color: var(--c-muted); line-height: 1.7;
          border-top: 1px solid var(--c-border); padding-top: 14px;
        }

        /* CTA */
        .ef-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: var(--radius-md);
          background: linear-gradient(135deg,#047857,#059669);
          color: #fff; font-family: var(--f-display); font-size: 14px; font-weight: 700;
          text-decoration: none; box-shadow: 0 4px 14px rgba(5,150,105,.28);
          transition: transform .15s, box-shadow .15s;
        }
        .ef-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(5,150,105,.36); }

        @media (max-width: 640px) {
          .ef-wrap { padding: 0 16px 60px; }
          .ef-blob { display: none; }
        }
      `}</style>

      <div className="ef-page">
        <div className="ef-blob ef-blob-1" />
        <div className="ef-blob ef-blob-2" />
        <div className="ef-dotgrid" />

        <div className="ef-wrap">
          <Link href="/admission-process" className="ef-back">
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to Admission Process
          </Link>

          <span className="ef-eyebrow">Eligibility &amp; FAQs</span>
          <h1 className="ef-h1">Who Can Apply &amp;<br />Common Questions</h1>
          <p className="ef-sub">Check your eligibility and find answers to the most common admission queries before you apply.</p>

          {/* Eligibility */}
          <h2 className="ef-section-title">Eligibility Criteria</h2>
          <div className="ef-elig-grid">
            {ELIGIBILITY.map((e) => (
              <div className="ef-elig-row" key={e.qual}>
                <CheckCircle2 size={18} color="#1D4ED8" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="ef-elig-qual">{e.qual}</p>
                  <p className="ef-elig-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h2 className="ef-section-title">Frequently Asked Questions</h2>
          <div className="ef-faq-list">
            {FAQS.map((faq, i) => (
              <div className={`ef-faq-item${open === i ? " open" : ""}`} key={i}>
                <div className="ef-faq-q" onClick={() => toggle(i)}>
                  <span className="ef-faq-q-text">{faq.q}</span>
                  <ChevronDown size={17} strokeWidth={2} className={`ef-faq-chevron${open === i ? " open" : ""}`} />
                </div>
                <div className={`ef-faq-body${open === i ? " open" : ""}`}>
                  <p className="ef-faq-a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="ef-cta"
          >
            <MessageCircle size={15} strokeWidth={2} /> Talk to a Counsellor
          </a>
        </div>
      </div>
    </>
  );
}