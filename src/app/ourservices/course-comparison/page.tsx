"use client";
// ─────────────────────────────────────────────────
//  COURSE COMPARISON PAGE
// ─────────────────────────────────────────────────
import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft, BarChart2, Building2, Map, CheckCircle2, XCircle, ChevronRight, Clock, IndianRupee, TrendingUp, MapPin, Award } from "lucide-react";

const WA_NUMBER = "919576461623";
const WA_COMPARE = encodeURIComponent("Hi, I want to compare courses before choosing. Please guide me.");
const WA_COLLEGE = encodeURIComponent("Hi, I want college recommendations based on my profile. Please guide me.");
const WA_ROADMAP = encodeURIComponent("Hi, I want a personalised career roadmap. Please guide me.");

/* ─── COURSE COMPARISON ─── */
const COURSES = [
  {
    name: "B.Tech / BE", duration: "4 Years", fee: "₹80K–₹3L/yr", scope: "Very High",
    pros: ["Highest salary potential", "Global opportunities", "Multiple specialisations"],
    cons: ["Competitive entrance (JEE)", "Long duration"],
    color: "#1D4ED8", bg: "#DBEAFE",
  },
  {
    name: "BBA / MBA", duration: "3+2 Years", fee: "₹40K–₹2L/yr", scope: "High",
    pros: ["Business leadership roles", "Entrepreneurship", "Fast career growth"],
    cons: ["MBA requires work experience ideally", "Management skills needed"],
    color: "#047857", bg: "#D1FAE5",
  },
  {
    name: "B.Sc", duration: "3 Years", fee: "₹10K–₹80K/yr", scope: "Moderate–High",
    pros: ["Affordable", "Research & teaching options", "Short duration"],
    cons: ["Lower starting salary vs B.Tech", "Limited core job roles"],
    color: "#7C3AED", bg: "#EDE9FE",
  },
  {
    name: "B.Com / CA", duration: "3 Yrs + CA", fee: "₹5K–₹50K/yr", scope: "High",
    pros: ["Strong finance career", "CA is highly respected", "Low course fees"],
    cons: ["CA exams are tough", "Multiple exam stages"],
    color: "#B45309", bg: "#FEF3C7",
  },
  {
    name: "BCA / MCA", duration: "3+2 Years", fee: "₹30K–₹1.5L/yr", scope: "Very High",
    pros: ["High IT demand", "Good for coding lovers", "MCA boosts salary"],
    cons: ["Math-heavy", "Competitive industry"],
    color: "#0369A1", bg: "#E0F2FE",
  },
  {
    name: "Diploma / ITI", duration: "1–3 Years", fee: "₹5K–₹30K/yr", scope: "Moderate",
    pros: ["Fastest to employment", "Government job eligibility", "Low cost"],
    cons: ["Limited management growth", "Sector-specific"],
    color: "#6D28D9", bg: "#F5F3FF",
  },
];

export function CourseComparisonPage(): React.JSX.Element {
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
        .cc-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding-top:100px; }
        .cc-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .cc-blob-1 { width:400px; height:400px; top:-100px; right:-80px; background:radial-gradient(circle,#E0F2FE,transparent 70%); opacity:.5; }
        .cc-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.25; }
        .cc-inner { position:relative; z-index:5; max-width:1080px; margin:0 auto; padding:0 40px; }
        .cc-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#64748B; text-decoration:none; margin-bottom:24px; transition:color .15s; }
        .cc-back:hover { color:#1D4ED8; }
        .cc-eyebrow { display:inline-flex; padding:5px 14px; border-radius:9999px; background:linear-gradient(135deg,#E0F2FE,#EFF6FF); border:1px solid #BAE6FD; color:#0369A1; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; font-family:var(--f-display); margin-bottom:16px; }
        .cc-h1 { font-family:var(--f-display); font-size:clamp(26px,4vw,48px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--c-text); margin-bottom:16px; }
        .cc-h1-grad { background:linear-gradient(120deg,#0369A1,#1D4ED8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .cc-sub { font-size:16px; color:var(--c-muted); line-height:1.75; max-width:640px; margin-bottom:28px; }
        .cc-btn {
          display:inline-flex; align-items:center; gap:8px; padding:13px 24px;
          border-radius:var(--radius-md); font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; background:linear-gradient(135deg,#0369A1,#1D4ED8);
          box-shadow:0 4px 14px rgba(3,105,161,.32); position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s; margin-bottom:48px;
        }
        .cc-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .cc-btn:hover { transform:translateY(-2px); }

        .cc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-bottom:80px; }
        .cc-card { background:var(--c-surface); border:1.5px solid var(--c-border); border-radius:var(--radius-lg); padding:24px 22px; box-shadow:var(--shadow-sm); transition:box-shadow .2s,transform .2s; }
        .cc-card:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); }
        .cc-card-name { font-family:var(--f-display); font-size:17px; font-weight:800; color:var(--c-text); margin-bottom:12px; padding-bottom:12px; border-bottom:1.5px solid var(--c-border); }
        .cc-meta-row { display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--c-muted); margin-bottom:6px; }
        .cc-meta-row strong { color:var(--c-text); }
        .cc-divider { height:1px; background:var(--c-border); margin:12px 0; }
        .cc-pro-con-label { font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#94A3B8; margin-bottom:7px; }
        .cc-list-item { display:flex; align-items:flex-start; gap:6px; font-size:12.5px; color:var(--c-muted); margin-bottom:5px; line-height:1.5; }

        @media (max-width:1024px) { .cc-inner { padding-left:24px; padding-right:24px; } .cc-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px) { .cc-inner { padding-left:16px; padding-right:16px; } .cc-grid { grid-template-columns:1fr; } .cc-blob { display:none; } }
      `}</style>
      <div className="cc-page">
        <div className="cc-blob cc-blob-1" />
        <div className="cc-dotgrid" />
        <div className="cc-inner">
          <Link href="/career-guidance" className="cc-back"><ArrowLeft size={14} strokeWidth={2.5} /> Back to Career Guidance</Link>
          <div className="cc-eyebrow">Career Guidance · Course Comparison</div>
          <h1 className="cc-h1">Compare Courses<br /><span className="cc-h1-grad">Side by Side</span></h1>
          <p className="cc-sub">Compare the most popular courses across fees, duration, scope, and career outcomes — so you choose with confidence.</p>
          <a href={`https://wa.me/${WA_NUMBER}?text=${WA_COMPARE}`} target="_blank" rel="noopener noreferrer" className="cc-btn">
            <MessageCircle size={15} strokeWidth={2} /> Get Personalised Recommendation
          </a>
          <div className="cc-grid">
            {COURSES.map((c) => (
              <div className="cc-card" key={c.name} style={{ borderTop: `3px solid ${c.color}` }}>
                <p className="cc-card-name" style={{ color: c.color }}>{c.name}</p>
                <div className="cc-meta-row"><Clock size={13} strokeWidth={2} /><strong>Duration:</strong> {c.duration}</div>
                <div className="cc-meta-row"><IndianRupee size={13} strokeWidth={2} /><strong>Fee:</strong> {c.fee}</div>
                <div className="cc-meta-row"><TrendingUp size={13} strokeWidth={2} /><strong>Scope:</strong> {c.scope}</div>
                <div className="cc-divider" />
                <p className="cc-pro-con-label">Pros</p>
                {c.pros.map((p) => <div className="cc-list-item" key={p}><CheckCircle2 size={12} color="#047857" strokeWidth={2.5} style={{ flexShrink:0, marginTop:2 }} />{p}</div>)}
                <div className="cc-divider" />
                <p className="cc-pro-con-label">Cons</p>
                {c.cons.map((con) => <div className="cc-list-item" key={con}><XCircle size={12} color="#DC2626" strokeWidth={2.5} style={{ flexShrink:0, marginTop:2 }} />{con}</div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── COLLEGE RECOMMENDATION ─── */
const FACTORS = [
  { icon: Award, title: "Accreditation & Rankings", desc: "We check NAAC, NBA, and NIRF rankings to ensure quality education." },
  { icon: IndianRupee, title: "Budget & Scholarships", desc: "We match colleges to your fee budget and available scholarship options." },
  { icon: MapPin, title: "Preferred Location", desc: "Choose from colleges in your city, state, or across India." },
  { icon: TrendingUp, title: "Placement Records", desc: "We review real placement data before recommending any college." },
  { icon: Building2, title: "Infrastructure & Facilities", desc: "Campus quality, labs, hostels, and amenities are all considered." },
  { icon: CheckCircle2, title: "Eligibility Match", desc: "Recommendations are filtered to colleges you actually qualify for." },
];

export function CollegeRecommendationPage(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --c-bg:#F8FAFF; --c-surface:#FFFFFF; --c-border:#E4E7F0; --c-text:#0F1628; --c-muted:#64748B;
          --f-display:'Plus Jakarta Sans',sans-serif; --f-body:'Inter',sans-serif;
          --radius-md:12px; --radius-lg:16px; --radius-xl:24px; --radius-full:9999px;
          --shadow-sm:0 1px 3px rgba(15,22,40,.06); --shadow-md:0 4px 16px rgba(15,22,40,.08);
        }
        .cr-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding-top:100px; }
        .cr-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .cr-blob-1 { width:420px; height:420px; top:-100px; right:-80px; background:radial-gradient(circle,#D1FAE5,transparent 70%); opacity:.5; }
        .cr-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.25; }
        .cr-inner { position:relative; z-index:5; max-width:960px; margin:0 auto; padding:0 40px; }
        .cr-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#64748B; text-decoration:none; margin-bottom:24px; transition:color .15s; }
        .cr-back:hover { color:#047857; }
        .cr-eyebrow { display:inline-flex; padding:5px 14px; border-radius:9999px; background:linear-gradient(135deg,#D1FAE5,#ECFDF5); border:1px solid #A7F3D0; color:#047857; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; font-family:var(--f-display); margin-bottom:16px; }
        .cr-h1 { font-family:var(--f-display); font-size:clamp(26px,4vw,48px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--c-text); margin-bottom:16px; }
        .cr-h1-grad { background:linear-gradient(120deg,#047857,#059669); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .cr-sub { font-size:16px; color:var(--c-muted); line-height:1.75; max-width:640px; margin-bottom:28px; }
        .cr-btn {
          display:inline-flex; align-items:center; gap:8px; padding:13px 24px;
          border-radius:var(--radius-md); font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; background:linear-gradient(135deg,#047857,#059669);
          box-shadow:0 4px 14px rgba(5,150,105,.3); position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s; margin-bottom:48px;
        }
        .cr-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .cr-btn:hover { transform:translateY(-2px); }
        .cr-section-heading { font-family:var(--f-display); font-size:20px; font-weight:800; color:var(--c-text); margin-bottom:24px; }
        .cr-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:80px; }
        .cr-card { background:var(--c-surface); border:1.5px solid var(--c-border); border-radius:var(--radius-lg); padding:22px 20px; box-shadow:var(--shadow-sm); transition:box-shadow .2s,transform .2s; }
        .cr-card:hover { box-shadow:var(--shadow-md); transform:translateY(-3px); }
        .cr-card-icon { width:44px; height:44px; border-radius:12px; background:#D1FAE5; display:flex; align-items:center; justify-content:center; margin-bottom:14px; }
        .cr-card-title { font-family:var(--f-display); font-size:14px; font-weight:700; color:var(--c-text); margin-bottom:6px; }
        .cr-card-desc { font-size:13px; color:var(--c-muted); line-height:1.65; }
        @media (max-width:1024px) { .cr-inner { padding-left:24px; padding-right:24px; } }
        @media (max-width:640px) { .cr-inner { padding-left:16px; padding-right:16px; } .cr-grid { grid-template-columns:1fr; } .cr-blob { display:none; } }
      `}</style>
      <div className="cr-page">
        <div className="cr-blob cr-blob-1" />
        <div className="cr-dotgrid" />
        <div className="cr-inner">
          <Link href="/career-guidance" className="cr-back"><ArrowLeft size={14} strokeWidth={2.5} /> Back to Career Guidance</Link>
          <div className="cr-eyebrow">Career Guidance · College Recommendation</div>
          <h1 className="cr-h1">Find Your Best-Fit<br /><span className="cr-h1-grad">College</span></h1>
          <p className="cr-sub">We curate a personalised list of colleges that match your eligibility, budget, location preference, and career goals — saving you hours of research.</p>
          <a href={`https://wa.me/${WA_NUMBER}?text=${WA_COLLEGE}`} target="_blank" rel="noopener noreferrer" className="cr-btn">
            <MessageCircle size={15} strokeWidth={2} /> Get My College List
          </a>
          <h2 className="cr-section-heading">What We Consider Before Recommending</h2>
          <div className="cr-grid">
            {FACTORS.map((f) => {
              const Icon = f.icon;
              return (
                <div className="cr-card" key={f.title}>
                  <div className="cr-card-icon"><Icon size={20} color="#047857" strokeWidth={2} /></div>
                  <p className="cr-card-title">{f.title}</p>
                  <p className="cr-card-desc">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── CAREER ROADMAP ─── */
const ROADMAP_STEPS = [
  { phase: "Now", title: "Profile Assessment", desc: "Share your marks, interests, and goals with our counsellors." },
  { phase: "Week 1", title: "Career Shortlisting", desc: "We present 3 top career paths that match your profile." },
  { phase: "Week 2", title: "Course & College Plan", desc: "Get a list of recommended courses and target colleges." },
  { phase: "Week 3", title: "Admission Roadmap", desc: "We create a month-by-month action plan for applications." },
  { phase: "Ongoing", title: "Milestone Tracking", desc: "We check in regularly to ensure you're on track and update the plan as needed." },
];

export function CareerRoadmapPage(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --c-bg:#F8FAFF; --c-surface:#FFFFFF; --c-border:#E4E7F0; --c-text:#0F1628; --c-muted:#64748B;
          --f-display:'Plus Jakarta Sans',sans-serif; --f-body:'Inter',sans-serif;
          --radius-md:12px; --radius-lg:16px; --radius-xl:24px; --radius-full:9999px;
          --shadow-sm:0 1px 3px rgba(15,22,40,.06); --shadow-md:0 4px 16px rgba(15,22,40,.08);
        }
        .rm-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding-top:100px; }
        .rm-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .rm-blob-1 { width:420px; height:420px; top:-100px; right:-80px; background:radial-gradient(circle,#FEF3C7,transparent 70%); opacity:.5; }
        .rm-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.25; }
        .rm-inner { position:relative; z-index:5; max-width:760px; margin:0 auto; padding:0 40px; }
        .rm-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#64748B; text-decoration:none; margin-bottom:24px; transition:color .15s; }
        .rm-back:hover { color:#B45309; }
        .rm-eyebrow { display:inline-flex; padding:5px 14px; border-radius:9999px; background:linear-gradient(135deg,#FEF3C7,#FFFBEB); border:1px solid #FDE68A; color:#B45309; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; font-family:var(--f-display); margin-bottom:16px; }
        .rm-h1 { font-family:var(--f-display); font-size:clamp(26px,4vw,48px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--c-text); margin-bottom:16px; }
        .rm-h1-grad { background:linear-gradient(120deg,#B45309,#D97706); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .rm-sub { font-size:16px; color:var(--c-muted); line-height:1.75; max-width:580px; margin-bottom:28px; }
        .rm-btn {
          display:inline-flex; align-items:center; gap:8px; padding:13px 24px;
          border-radius:var(--radius-md); font-family:var(--f-display); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; background:linear-gradient(135deg,#B45309,#D97706);
          box-shadow:0 4px 14px rgba(180,83,9,.3); position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s; margin-bottom:48px;
        }
        .rm-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .rm-btn:hover { transform:translateY(-2px); }
        .rm-section-heading { font-family:var(--f-display); font-size:20px; font-weight:800; color:var(--c-text); margin-bottom:32px; }
        .rm-tl { position:relative; display:flex; flex-direction:column; gap:0; margin-bottom:80px; }
        .rm-tl-line { position:absolute; left:24px; top:0; bottom:0; width:2px; background:linear-gradient(to bottom,#FDE68A,#FEF3C7); z-index:0; }
        .rm-step { display:flex; gap:20px; position:relative; z-index:1; padding-bottom:28px; }
        .rm-step:last-child { padding-bottom:0; }
        .rm-step-dot { width:48px; height:48px; border-radius:50%; background:#FEF3C7; border:2px solid #FDE68A; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:var(--shadow-sm); position:relative; z-index:2; }
        .rm-step-dot-inner { width:12px; height:12px; border-radius:50%; background:#B45309; }
        .rm-step-content { flex:1; background:var(--c-surface); border:1.5px solid var(--c-border); border-radius:var(--radius-lg); padding:16px 20px; box-shadow:var(--shadow-sm); transition:box-shadow .2s,transform .2s; }
        .rm-step-content:hover { box-shadow:var(--shadow-md); transform:translateX(4px); }
        .rm-step-phase { font-size:11px; font-weight:700; letter-spacing:.08em; color:#B45309; text-transform:uppercase; margin-bottom:4px; }
        .rm-step-title { font-family:var(--f-display); font-size:15px; font-weight:700; color:var(--c-text); margin-bottom:5px; }
        .rm-step-desc { font-size:13px; color:var(--c-muted); line-height:1.65; }
        @media (max-width:1024px) { .rm-inner { padding-left:24px; padding-right:24px; } }
        @media (max-width:640px) { .rm-inner { padding-left:16px; padding-right:16px; } .rm-blob { display:none; } }
      `}</style>
      <div className="rm-page">
        <div className="rm-blob rm-blob-1" />
        <div className="rm-dotgrid" />
        <div className="rm-inner">
          <Link href="/career-guidance" className="rm-back"><ArrowLeft size={14} strokeWidth={2.5} /> Back to Career Guidance</Link>
          <div className="rm-eyebrow">Career Guidance · Career Roadmap</div>
          <h1 className="rm-h1">Your Personalised<br /><span className="rm-h1-grad">Career Roadmap</span></h1>
          <p className="rm-sub">A step-by-step plan built around your profile — showing exactly what to do, when to do it, and how we'll help you get there.</p>
          <a href={`https://wa.me/${WA_NUMBER}?text=${WA_ROADMAP}`} target="_blank" rel="noopener noreferrer" className="rm-btn">
            <MessageCircle size={15} strokeWidth={2} /> Get My Roadmap
          </a>
          <h2 className="rm-section-heading">How Your Roadmap is Built</h2>
          <div className="rm-tl">
            <div className="rm-tl-line" />
            {ROADMAP_STEPS.map((s) => (
              <div className="rm-step" key={s.phase}>
                <div className="rm-step-dot"><div className="rm-step-dot-inner" /></div>
                <div className="rm-step-content">
                  <p className="rm-step-phase">{s.phase}</p>
                  <p className="rm-step-title">{s.title}</p>
                  <p className="rm-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Default export — Course Comparison
export default CourseComparisonPage;