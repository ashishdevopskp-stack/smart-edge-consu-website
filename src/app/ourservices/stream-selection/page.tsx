"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft, GitBranch, FlaskConical, TrendingUp, Palette, Scale, ChevronRight } from "lucide-react";

const WA_NUMBER = "919576461623";
const WA_MSG = encodeURIComponent("Hi, I need help with stream selection after 10th. Please guide me.");

const STREAMS = [
  {
    icon: FlaskConical, color: "#1D4ED8", bg: "#DBEAFE", border: "#BFDBFE",
    stream: "Science",
    tagline: "Engineering, Medicine, Research & Technology",
    subjects: ["Physics", "Chemistry", "Biology / Maths", "English", "Optional Subject"],
    careers: ["Doctor", "Engineer", "Researcher", "Data Scientist", "Architect"],
    suits: "Students with logical thinking, problem-solving ability, and interest in how things work.",
  },
  {
    icon: TrendingUp, color: "#047857", bg: "#D1FAE5", border: "#A7F3D0",
    stream: "Commerce",
    tagline: "Business, Finance, Accounting & Management",
    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Maths (Optional)"],
    careers: ["CA / CMA", "MBA", "Banker", "Entrepreneur", "Financial Analyst"],
    suits: "Students interested in business, money management, markets, and entrepreneurship.",
  },
  {
    icon: Palette, color: "#7C3AED", bg: "#EDE9FE", border: "#C4B5FD",
    stream: "Arts / Humanities",
    tagline: "Law, Design, Media, Education & Social Sciences",
    subjects: ["History", "Political Science", "Sociology", "Geography", "Psychology"],
    careers: ["Lawyer", "Journalist", "Designer", "Educator", "Civil Servant (IAS/IPS)"],
    suits: "Students with strong communication, creativity, and interest in society and culture.",
  },
  {
    icon: Scale, color: "#B45309", bg: "#FEF3C7", border: "#FDE68A",
    stream: "Vocational / Diploma",
    tagline: "Skill-based, job-ready programmes",
    subjects: ["ITI Trades", "Polytechnic Courses", "Hotel Management", "Fashion Tech", "Nursing"],
    careers: ["Technician", "Chef", "Fashion Designer", "Nurse", "IT Professional"],
    suits: "Students who prefer hands-on learning and want to enter the workforce sooner.",
  },
];

export default function StreamSelectionPage(): React.JSX.Element {
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
          --shadow-sm:0 1px 3px rgba(15,22,40,.06); --shadow-md:0 4px 16px rgba(15,22,40,.08);
        }
        .ss-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding-top:100px; }
        .ss-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .ss-blob-1 { width:420px; height:420px; top:-100px; right:-80px; background:radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.5; }
        .ss-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.25; }

        .ss-inner { position:relative; z-index:5; max-width:960px; margin:0 auto; padding:0 40px; }
        .ss-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#64748B; text-decoration:none; margin-bottom:24px; transition:color .15s; }
        .ss-back:hover { color:#1D4ED8; }
        .ss-eyebrow {
          display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px;
          background:linear-gradient(135deg,#EDE9FE,#F5F3FF); border:1px solid #C4B5FD; color:#5B21B6;
          font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase;
          font-family:var(--f-display); margin-bottom:16px;
        }
        .ss-h1 { font-family:var(--f-display); font-size:clamp(26px,4vw,48px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--c-text); margin-bottom:16px; }
        .ss-h1-grad { background:linear-gradient(120deg,#7C3AED,#1D4ED8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ss-sub { font-size:16px; color:var(--c-muted); line-height:1.75; max-width:640px; margin-bottom:28px; }
        .ss-btn {
          display:inline-flex; align-items:center; gap:8px; padding:13px 24px;
          border-radius:var(--radius-md); font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; background:linear-gradient(135deg,#7C3AED,#6D28D9);
          box-shadow:0 4px 14px rgba(124,58,237,.32); position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s; margin-bottom:48px;
        }
        .ss-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .ss-btn:hover { transform:translateY(-2px); box-shadow:0 8px 22px rgba(124,58,237,.4); }

        .ss-section-heading { font-family:var(--f-display); font-size:20px; font-weight:800; color:var(--c-text); margin-bottom:24px; }
        .ss-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-bottom:80px; }
        .ss-card {
          background:var(--c-surface); border:1.5px solid var(--c-border);
          border-radius:var(--radius-xl); padding:28px 26px;
          box-shadow:var(--shadow-sm); transition:box-shadow .2s,transform .2s;
        }
        .ss-card:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); }
        .ss-card-head { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
        .ss-card-icon { width:48px; height:48px; border-radius:13px; border:1.5px solid; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ss-card-stream { font-family:var(--f-display); font-size:18px; font-weight:800; color:var(--c-text); }
        .ss-card-tagline { font-size:12px; color:var(--c-muted); margin-top:2px; }

        .ss-label { font-size:11px; font-weight:700; letter-spacing:.08em; color:#94A3B8; text-transform:uppercase; margin-bottom:8px; margin-top:16px; }
        .ss-pill-row { display:flex; flex-wrap:wrap; gap:6px; }
        .ss-pill {
          padding:4px 10px; border-radius:9999px; font-size:11.5px; font-weight:600;
          background:#F1F5F9; color:var(--c-text); border:1px solid var(--c-border);
        }
        .ss-career-row { display:flex; flex-direction:column; gap:5px; }
        .ss-career-item { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--c-muted); }
        .ss-suits { font-size:13px; color:var(--c-muted); line-height:1.65; margin-top:16px; padding-top:16px; border-top:1px solid var(--c-border); }

        @media (max-width:1024px) { .ss-inner { padding-left:24px; padding-right:24px; } }
        @media (max-width:640px) {
          .ss-inner { padding-left:16px; padding-right:16px; }
          .ss-grid { grid-template-columns:1fr; }
          .ss-blob { display:none; }
        }
      `}</style>

      <div className="ss-page">
        <div className="ss-blob ss-blob-1" />
        <div className="ss-dotgrid" />

        <div className="ss-inner">
          <Link href="/career-guidance" className="ss-back">
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to Career Guidance
          </Link>

          <div className="ss-eyebrow">Career Guidance · Stream Selection</div>
          <h1 className="ss-h1">
            Choose the Right Stream<br />
            <span className="ss-h1-grad">After Class 10</span>
          </h1>
          <p className="ss-sub">
            The stream you choose after 10th shapes your entire career. Compare Science, Commerce,
            Arts, and Vocational options to find what truly fits you.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="ss-btn"
          >
            <MessageCircle size={15} strokeWidth={2} /> Get Stream Guidance
          </a>

          <h2 className="ss-section-heading">Explore All Streams</h2>
          <div className="ss-grid">
            {STREAMS.map((s) => {
              const Icon = s.icon;
              return (
                <div className="ss-card" key={s.stream}>
                  <div className="ss-card-head">
                    <div className="ss-card-icon" style={{ background: s.bg, borderColor: s.border }}>
                      <Icon size={22} color={s.color} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="ss-card-stream">{s.stream}</p>
                      <p className="ss-card-tagline">{s.tagline}</p>
                    </div>
                  </div>
                  <p className="ss-label">Key Subjects</p>
                  <div className="ss-pill-row">
                    {s.subjects.map((sub) => <span className="ss-pill" key={sub}>{sub}</span>)}
                  </div>
                  <p className="ss-label">Career Options</p>
                  <div className="ss-career-row">
                    {s.careers.map((c) => (
                      <span className="ss-career-item" key={c}>
                        <ChevronRight size={12} color={s.color} strokeWidth={2.5} /> {c}
                      </span>
                    ))}
                  </div>
                  <p className="ss-suits"><strong>Best suits:</strong> {s.suits}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}