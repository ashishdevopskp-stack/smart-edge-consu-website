"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Clock,
  GraduationCap,
  Utensils,
  Building2,
} from "lucide-react";
import CurvedImage from "@/app/CurvedImage";

/* ─── count-up hook ─────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(p * target));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration]);
  return value;
}

/* ─── data ──────────────────────────────────────────────────────────────── */
const APPROVAL_BODIES = ["UGC", "AICTE", "NCTE", "PCI", "BCI"];
const MODES = [
  { label: "Regular",  icon: Building2 },
  { label: "Distance", icon: GraduationCap },
  { label: "Online",   icon: MessageCircle },
];
const PERKS = [
  { icon: GraduationCap, label: "Free Education",   note: "Selected Courses" },
  { icon: Building2,     label: "Hostel Available", note: "Selected Courses" },
  { icon: Utensils,      label: "Food Provided",    note: "Selected Courses" },
];
const TRUST = [
  { icon: ShieldCheck, label: "100% Genuine Admission" },
  { icon: BadgeCheck,  label: "Verified Universities"  },
  { icon: Clock,       label: "Limited Seats"          },
];
const STATS = [
  { value: 500, suffix: "+",  label: "Universities"    },
  { value: 20,  suffix: "K+", label: "Students Placed" },
  { value: 98,  suffix: "%",  label: "Success Rate"    },
];

const PHONE     = "+919576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent(
  "Hi, I am interested in admission guidance. Please help me."
);

/* ─── component ─────────────────────────────────────────────────────────── */
export default function HeroSection() {
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
          --c-subtle:   #94A3B8;
          --c-blue:     #2563EB;
          --c-blue-lt:  #EFF4FF;
          --c-amber:    #F59E0B;
          --c-green:    #059669;
          --c-red:      #DC2626;
          --c-sky:      #0EA5E9;
          --f-display:  'Plus Jakarta Sans', sans-serif;
          --f-body:     'Inter', sans-serif;
          --radius-sm:  8px;
          --radius-md:  12px;
          --radius-lg:  16px;
          --radius-xl:  24px;
          --radius-full:9999px;
          --shadow-sm:  0 1px 3px rgba(15,22,40,.06),0 1px 2px rgba(15,22,40,.04);
          --shadow-md:  0 4px 16px rgba(15,22,40,.08),0 2px 6px rgba(15,22,40,.04);
          --shadow-lg:  0 12px 40px rgba(15,22,40,.10),0 4px 12px rgba(15,22,40,.06);
          --shadow-xl:  0 24px 64px rgba(15,22,40,.12),0 8px 24px rgba(15,22,40,.06);
        }

        .hs-section {
        padding-top: 20px;
          position: relative;
          min-height: 100vh;
          background: var(--c-bg);
          font-family: var(--f-body);
          overflow: hidden;
        }

        /* blobs */
        .hs-blob { position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px); }
        .hs-blob-blue  { width:560px;height:560px;top:-120px;left:-160px;background:radial-gradient(circle,#DBEAFE 0%,transparent 70%);opacity:.7; }
        .hs-blob-amber { width:480px;height:480px;top:10%;right:-120px;background:radial-gradient(circle,#FEF3C7 0%,transparent 70%);opacity:.8; }
        .hs-blob-green { width:320px;height:320px;bottom:5%;left:30%;background:radial-gradient(circle,#D1FAE5 0%,transparent 70%);opacity:.6; }
        .hs-dotgrid { position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px);background-size:28px 28px;opacity:.35; }

        /* grid */
        .hs-grid {
          position:relative;z-index:5;
          max-width:1200px;margin:0 auto;
          padding:40px 40px 80px;
          display:grid;grid-template-columns:1fr 1fr;
          gap:48px;align-items:center;
          min-height:100vh;
        }

        /* left */
        .hs-left { display:flex;flex-direction:column;gap:24px;padding-right:24px; }

        .hs-eyebrow {
          display:inline-flex;align-items:center;gap:8px;
          padding:6px 16px;border-radius:var(--radius-full);
          background:linear-gradient(135deg,#FEF3C7,#FFFBEB);
          border:1px solid #FDE68A;color:#92400E;
          font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          font-family:var(--f-display);width:fit-content;
          box-shadow:0 2px 8px rgba(245,158,11,.15);
        }
        .hs-eyebrow-dot {
          width:6px;height:6px;border-radius:50%;background:#F59E0B;
          animation:hsPulse 1.4s ease-in-out infinite;
        }
        @keyframes hsPulse { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)} }

        .hs-h1 {
          font-family:var(--f-display);font-size:clamp(36px,4vw,58px);
          font-weight:800;line-height:1.07;letter-spacing:-.025em;color:var(--c-text);
        }
        .hs-h1-grad  { background:linear-gradient(120deg,#1D4ED8 0%,#2563EB 40%,#0EA5E9 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .hs-h1-grad2 { background:linear-gradient(120deg,#F59E0B 0%,#FBBF24 50%,#F97316 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }

        .hs-sub { color:var(--c-muted);font-size:15px;line-height:1.7;max-width:420px; }
        .hs-sub b { color:var(--c-text);font-weight:600; }

        .hs-pills { display:flex;flex-wrap:wrap;gap:8px; }
        .hs-pill {
          display:inline-flex;align-items:center;gap:6px;
          padding:6px 14px;border-radius:var(--radius-full);
          background:var(--c-surface);border:1px solid var(--c-border);
          color:var(--c-text);font-size:12px;font-weight:500;box-shadow:var(--shadow-sm);
        }

        .hs-perks { display:flex;gap:10px; }
        .hs-perk {
          flex:1;display:flex;align-items:center;gap:10px;
          padding:12px 14px;border-radius:var(--radius-md);
          background:var(--c-surface);border:1px solid var(--c-border);box-shadow:var(--shadow-sm);
        }
        .hs-perk-icon { width:34px;height:34px;border-radius:var(--radius-sm);flex-shrink:0;display:flex;align-items:center;justify-content:center; }
        .hs-perk-label { font-family:var(--f-display);font-size:11px;font-weight:700;color:var(--c-text);line-height:1;margin-bottom:3px; }
        .hs-perk-note { font-size:10px;color:var(--c-subtle);line-height:1; }

        /* buttons */
        .hs-ctas { display:flex;flex-wrap:wrap;gap:10px; }

        .hs-btn {
          display:inline-flex;align-items:center;gap:8px;
          border:none;cursor:pointer;font-family:var(--f-display);font-size:14px;font-weight:700;
          border-radius:var(--radius-md);padding:13px 24px;color:#fff;
          position:relative;overflow:hidden;
          transition:transform .15s,box-shadow .15s;
          text-decoration:none;
        }
        .hs-btn::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,.18) 0%,transparent 60%);
        }
        .hs-btn:hover  { transform:translateY(-2px); }
        .hs-btn:active { transform:translateY(0) scale(.98); }

        .hs-btn-primary { background:linear-gradient(135deg,#1D4ED8,#2563EB,#3B82F6);box-shadow:0 4px 16px rgba(37,99,235,.35); }
        .hs-btn-primary:hover { box-shadow:0 8px 24px rgba(37,99,235,.42); }
        .hs-btn-amber   { background:linear-gradient(135deg,#D97706,#F59E0B,#FBBF24);box-shadow:0 4px 16px rgba(245,158,11,.35); }
        .hs-btn-amber:hover   { box-shadow:0 8px 24px rgba(245,158,11,.42); }
        .hs-btn-wa      { background:linear-gradient(135deg,#047857,#059669,#10B981);box-shadow:0 4px 16px rgba(5,150,105,.30); }
        .hs-btn-wa:hover      { box-shadow:0 8px 24px rgba(5,150,105,.40); }

        .hs-trust { display:flex;flex-wrap:wrap;gap:20px;padding-top:12px;border-top:1px solid var(--c-border); }
        .hs-trust-item { display:flex;align-items:center;gap:6px;color:var(--c-muted);font-size:12px; }

        /* right */
        .hs-right { position:relative;display:flex;align-items:center;justify-content:center; }
        .hs-ring  { position:absolute;width:420px;height:420px;border-radius:50%;border:1.5px dashed #CBD5E1;animation:hsSpin 30s linear infinite; }
        .hs-ring2 { position:absolute;width:340px;height:340px;border-radius:50%;border:1px solid #E2E8F0; }
        @keyframes hsSpin { to{transform:rotate(360deg)} }
        .hs-img-wrap { position:relative;z-index:2; }

        /* floating cards */
        .hs-float {
          position:absolute;z-index:10;
          background:var(--c-surface);border:1px solid var(--c-border);
          border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);
          display:flex;align-items:center;
        }
        .hs-float-courses { top:20px;left:-64px;gap:10px;padding:12px 16px;min-width:168px; }
        .hs-float-seats   { bottom:80px;right:-52px;gap:8px;padding:10px 14px; }
        .hs-float-verify  { bottom:24px;left:-52px;gap:7px;padding:9px 13px; }
        .hs-float-icon  { width:36px;height:36px;border-radius:var(--radius-sm);flex-shrink:0;display:flex;align-items:center;justify-content:center; }
        .hs-float-title { font-family:var(--f-display);font-size:13px;font-weight:700;color:var(--c-text);line-height:1;margin-bottom:3px; }
        .hs-float-sub   { font-size:10px;color:var(--c-subtle); }
        .hs-float-tag   { font-size:11px;font-weight:600;white-space:nowrap; }

        .hs-ping-wrap { position:relative;width:8px;height:8px;flex-shrink:0; }
        .hs-ping-dot  { position:absolute;inset:0;border-radius:50%;background:var(--c-red); }
        .hs-ping-ring { position:absolute;inset:-3px;border-radius:50%;background:rgba(220,38,38,.35);animation:hsPingR 1.2s ease-out infinite; }
        @keyframes hsPingR { 0%{opacity:.8;transform:scale(.6)}100%{opacity:0;transform:scale(1.8)} }

        /* stats bar */
        .hs-stats {
          position:absolute;bottom:-100px;left:50%;transform:translateX(-50%);
          display:flex;align-items:center;
          background:var(--c-surface);border:1px solid var(--c-border);
          border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);
          padding:14px 28px;white-space:nowrap;z-index:10;
        }
        .hs-stat     { display:flex;flex-direction:column;align-items:center;gap:2px;padding:0 20px; }
        .hs-stat-num { font-family:var(--f-display);font-size:26px;font-weight:800;color:var(--c-text);line-height:1;letter-spacing:-.02em; }
        .hs-stat-acc { color:var(--c-blue); }
        .hs-stat-lbl { font-size:10px;color:var(--c-subtle);text-transform:uppercase;letter-spacing:.08em; }
        .hs-stat-div { width:1px;height:36px;background:var(--c-border); }

        /* responsive */
        @media (max-width: 1024px) {
          .hs-grid { grid-template-columns:1fr;padding:24px 24px 100px;gap:0; }
          .hs-left { padding-right:0;order:1; }
          .hs-right { order:2;min-height:480px;margin-top:48px; }
          .hs-float-courses { left:0; }
          .hs-float-seats   { right:0; }
          .hs-float-verify  { left:0; }
        }
        @media (max-width: 640px) {
          .hs-perks    { flex-direction:column; }
          .hs-stats    { padding:12px 16px; }
          .hs-stat     { padding:0 12px; }
          .hs-stat-num { font-size:20px; }
          .hs-blob     { display:none; }
          .hs-ctas     { flex-direction:column; }
          .hs-btn      { justify-content:center; }
        }
      `}</style>

      <section className="hs-section">
        <div className="hs-blob hs-blob-blue" />
        <div className="hs-blob hs-blob-amber" />
        <div className="hs-blob hs-blob-green" />
        <div className="hs-dotgrid" />

        <div className="hs-grid">

          {/* ══ LEFT ══ */}
          <div className="hs-left">

            

            <h1 className="hs-h1">
              Your Complete<br />
              <span className="hs-h1-grad">Admission</span>{" "}
              <span style={{ color: "var(--c-text)" }}>&amp;</span><br />
              <span className="hs-h1-grad2">Career</span> Solution
            </h1>

            <p className="hs-sub">
              Admissions for{" "}
              {APPROVAL_BODIES.map((b, i) => (
                <React.Fragment key={b}>
                  <b>{b}</b>
                  {i < APPROVAL_BODIES.length - 1 && (
                    <span style={{ color: "var(--c-border)", margin: "0 2px" }}> · </span>
                  )}
                </React.Fragment>
              ))}{" "}
              approved institutions across India.
            </p>

            <div className="hs-pills">
              {MODES.map(({ label, icon: Icon }) => (
                <span className="hs-pill" key={label}>
                  <Icon size={13} color="var(--c-sky)" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            <div className="hs-perks">
              {PERKS.map(({ icon: Icon, label, note }, i) => {
                const colors = [
                  { bg: "#EFF6FF", ic: "#2563EB" },
                  { bg: "#FEF3C7", ic: "#D97706" },
                  { bg: "#ECFDF5", ic: "#059669" },
                ];
                const c = colors[i % colors.length];
                return (
                  <div className="hs-perk" key={label}>
                    <div className="hs-perk-icon" style={{ background: c.bg }}>
                      <Icon size={16} color={c.ic} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="hs-perk-label">{label}</p>
                      <p className="hs-perk-note">{note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hs-ctas">
              <a href={`tel:${PHONE}`} className="hs-btn hs-btn-primary">
                Apply Now
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a href={`tel:${PHONE}`} className="hs-btn hs-btn-amber">
                <Phone size={14} strokeWidth={2} />
                Free Counselling
              </a>
                <a
              
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hs-btn hs-btn-wa"
              >
                <MessageCircle size={14} strokeWidth={2} />
                WhatsApp Now
              </a>
            </div>

            <div className="hs-trust">
              {TRUST.map(({ icon: Icon, label }) => (
                <div className="hs-trust-item" key={label}>
                  <Icon size={14} color="var(--c-green)" strokeWidth={2} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT ══ */}
          <div className="hs-right">
            <div className="hs-ring" />
            <div className="hs-ring2" />

        
               <CurvedImage
      src="/herobg.png"
      alt="Smart Edge Education Consultancy"
      size="lg"
    />

              


            

              {/* stats bar */}
              <div className="hs-stats">
                {STATS.map((s, i) => (
                  <React.Fragment key={s.label}>
                    {i > 0 && <div className="hs-stat-div" />}
                    <StatItem {...s} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>


      </section>
    </>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCountUp(value);
  return (
    <div className="hs-stat">
      <span className="hs-stat-num">
        {count}<span className="hs-stat-acc">{suffix}</span>
      </span>
      <span className="hs-stat-lbl">{label}</span>
    </div>
  );
}