"use client";

import React, { useState, useMemo } from "react";
import {
  Search, X, MapPin, Phone, MessageCircle, ArrowRight,
  GraduationCap, BadgeCheck,
} from "lucide-react";

/* ── Constants ────────────────────────────────────────────────────────── */
const PHONE      = "9576461623";
const WA_NUMBER  = "919576461623";
const CONTACT    = "Sonu Sharma";
const WA_MSG     = encodeURIComponent("Hi Sonu, I want more information about your tie-up universities.");

/* ── Data ─────────────────────────────────────────────────────────────── */
type University = {
  id: number;
  name: string;
  place: string;
  state: string;
};

const UNIVERSITIES: University[] = [
  { id: 1,  name: "Swami Vivekanand Subharti University",      place: "Meerut",        state: "Uttar Pradesh" },
  { id: 2,  name: "Manglayatan University",                    place: "Aligarh",       state: "Uttar Pradesh" },
  { id: 3,  name: "Mata Tripura Sundari Open University",       place: "Tripura",       state: "Tripura" },
  { id: 4,  name: "Sikkim Skill University",                    place: "Sikkim",        state: "Sikkim" },
  { id: 5,  name: "Sikkim Global Technical University",         place: "Sikkim",        state: "Sikkim" },
  { id: 6,  name: "Asian International University",             place: "Imphal West",  state: "Manipur" },
  { id: 7,  name: "Aisect University",                          place: "Hazaribagh",   state: "Jharkhand" },
  { id: 8,  name: "Sabarmati University",                       place: "Gujarat",      state: "Gujarat" },
  { id: 9,  name: "F.S University",                             place: "Shikohabad",   state: "Uttar Pradesh" },
  { id: 10, name: "Board Of Open Schooling & Skill Education",  place: "Sikkim",       state: "Sikkim" },
  { id: 11, name: "Radha Govind University",                    place: "Jharkhand",    state: "Jharkhand" },
];

const ALL_STATES = ["All States", ...Array.from(new Set(UNIVERSITIES.map((u) => u.state)))];

/* ════════════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════════ */
export default function TieUpCollegePage(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [state,  setState]  = useState("All States");

  const clearAll   = () => { setSearch(""); setState("All States"); };
  const hasFilters = search || state !== "All States";

  const filtered = useMemo(() => {
    return UNIVERSITIES.filter((u) => {
      if (state !== "All States" && u.state !== state) return false;
      if (search &&
        !u.name.toLowerCase().includes(search.toLowerCase()) &&
        !u.place.toLowerCase().includes(search.toLowerCase()) &&
        !u.state.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, state]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:     #F8FAFF;
          --surf:   #FFFFFF;
          --bdr:    #E4E7F0;
          --txt:    #0F1628;
          --muted:  #64748B;
          --fd: 'Plus Jakarta Sans', sans-serif;
          --fb: 'Inter', sans-serif;
          --rmd:   12px;
          --rlg:   16px;
          --rxl:   24px;
          --rfull: 9999px;
          --shsm: 0 1px 3px rgba(15,22,40,.06);
          --shmd: 0 4px 16px rgba(15,22,40,.08);
          --shlg: 0 12px 40px rgba(15,22,40,.10);
        }

        /* No top padding — global layout.tsx <main> already offsets for the fixed navbar */
        .tc { position:relative; min-height:100vh; background:var(--bg); font-family:var(--fb); overflow-x:hidden; }
        .blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .blob1 { width:520px; height:520px; top:-140px; right:-140px; background:radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.55; }
        .blob2 { width:380px; height:380px; top:60%; left:-100px; background:radial-gradient(circle,#D1FAE5,transparent 70%); opacity:.45; }
        .dots  { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.28; }
        .wrap  { position:relative; z-index:5; max-width:1160px; margin:0 auto; padding:0 40px; }

        /* ── HERO ── */
        .hero {
          position:relative; z-index:5;
          max-width:860px; margin:0 auto;
          padding:56px 40px 0;
          text-align:center;
          display:flex; flex-direction:column; align-items:center; gap:20px;
        }
        .eyebrow {
          display:inline-flex; align-items:center; gap:7px;
          padding:5px 14px; border-radius:var(--rfull);
          background:linear-gradient(135deg,#FEF3C7,#FFFBEB);
          border:1px solid #FDE68A; color:#92400E;
          font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase;
          font-family:var(--fd);
        }
        .edot { width:6px; height:6px; border-radius:50%; background:#F59E0B; animation:ep 1.4s ease-in-out infinite; }
        @keyframes ep { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .h1 { font-family:var(--fd); font-size:clamp(28px,4vw,50px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--txt); }
        .grad { background:linear-gradient(120deg,#1D4ED8,#3B82F6,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sub { font-size:16px; color:var(--muted); line-height:1.7; max-width:620px; }

        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:4px; }
        .btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 22px; border-radius:var(--rmd);
          font-family:var(--fd); font-size:14px; font-weight:700;
          text-decoration:none; color:#fff; border:none; cursor:pointer;
          position:relative; overflow:hidden; transition:transform .15s,box-shadow .15s;
        }
        .btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.18),transparent 60%); }
        .btn:hover { transform:translateY(-2px); }
        .btn-blue  { background:linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow:0 4px 14px rgba(37,99,235,.32); }
        .btn-blue:hover  { box-shadow:0 8px 22px rgba(37,99,235,.40); }
        .btn-green { background:linear-gradient(135deg,#047857,#059669); box-shadow:0 4px 14px rgba(5,150,105,.28); }
        .btn-green:hover { box-shadow:0 8px 22px rgba(5,150,105,.36); }

        /* ── FILTER CARD ── */
        .filter-wrap { margin:44px auto 0; }
        .filter-card {
          background:var(--surf); border:1px solid var(--bdr);
          border-radius:var(--rxl); padding:22px 24px;
          box-shadow:var(--shmd);
        }
        .filter-row { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-end; }

        .search-box {
          flex:2; min-width:220px;
          display:flex; align-items:center; gap:9px;
          padding:11px 14px; border-radius:var(--rmd);
          border:1.5px solid var(--bdr); background:var(--bg);
          transition:border-color .15s, box-shadow .15s;
        }
        .search-box:focus-within { border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,.10); }
        .search-box input {
          border:none; background:none; outline:none; width:100%;
          font-family:var(--fb); font-size:14px; color:var(--txt);
        }
        .search-box input::placeholder { color:var(--muted); }

        .sel-group { display:flex; flex-direction:column; gap:4px; min-width:180px; flex:1; }
        .sel-label { font-size:11px; font-weight:600; color:var(--muted); letter-spacing:.06em; text-transform:uppercase; }
        .sel {
          padding:10px 12px; border-radius:var(--rmd);
          border:1.5px solid var(--bdr); background:var(--bg);
          font-family:var(--fb); font-size:13.5px; color:var(--txt);
          outline:none; cursor:pointer; transition:border-color .15s, box-shadow .15s;
          appearance:none; -webkit-appearance:none;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat:no-repeat; background-position:right 10px center; padding-right:30px;
        }
        .sel:focus { border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,.10); }

        .chip-row { display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; }
        .chip {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 10px 4px 12px; border-radius:var(--rfull);
          background:#EFF6FF; border:1px solid #BFDBFE; color:#1D4ED8;
          font-size:12px; font-weight:600; font-family:var(--fd);
        }
        .chip button { background:none; border:none; cursor:pointer; display:flex; align-items:center; color:#3B82F6; padding:0; margin:0; }
        .clear-all {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 12px; border-radius:var(--rfull);
          background:#FFF1F2; border:1px solid #FECDD3; color:#BE123C;
          font-size:12px; font-weight:700; font-family:var(--fd);
          cursor:pointer; transition:background .15s;
        }
        .clear-all:hover { background:#FFE4E6; }

        /* ── STATS ── */
        .stats { margin:28px auto 0; display:flex; align-items:center; gap:20px; }
        .stats-txt { font-size:13.5px; color:var(--muted); white-space:nowrap; }
        .stats-txt strong { color:var(--txt); font-weight:700; }
        .divider { flex:1; height:1px; background:var(--bdr); }

        /* ── GRID ── */
        .grid-wrap { margin:24px auto 0; padding-bottom:40px; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }

        /* ── UNIVERSITY CARD ── */
        .u-card {
          border-radius:var(--rlg); background:var(--surf);
          border:1.5px solid var(--bdr);
          box-shadow:var(--shsm); overflow:hidden;
          padding:20px; display:flex; flex-direction:column; gap:14px;
          transition:box-shadow .2s, transform .2s, border-color .2s;
        }
        .u-card:hover { box-shadow:var(--shmd); transform:translateY(-2px); border-color:#BFDBFE; }

        .u-top { display:flex; align-items:flex-start; gap:13px; }
        .u-icon {
          width:42px; height:42px; border-radius:11px; flex-shrink:0;
          background:#EFF6FF; display:flex; align-items:center; justify-content:center;
        }
        .u-id { font-size:11px; font-weight:700; color:#94A3B8; font-family:var(--fd); }
        .u-name { font-family:var(--fd); font-size:14.5px; font-weight:700; color:var(--txt); line-height:1.3; margin-top:2px; }

        .u-meta { display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--muted); }
        .u-meta svg { flex-shrink:0; color:#94A3B8; }

        .u-state-badge {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 10px; border-radius:var(--rfull);
          background:#ECFDF5; color:#047857; font-size:11.5px; font-weight:700;
          font-family:var(--fd); align-self:flex-start;
        }

        .u-cta { margin-top:auto; padding-top:12px; border-top:1px solid var(--bdr); display:flex; gap:8px; }
        .u-btn {
          flex:1; display:inline-flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 12px; border-radius:var(--rmd);
          font-family:var(--fd); font-size:12.5px; font-weight:700;
          text-decoration:none; color:#fff; border:none; cursor:pointer;
          transition:transform .15s, box-shadow .15s;
        }
        .u-btn:hover { transform:translateY(-1px); }
        .u-btn-green { background:linear-gradient(135deg,#047857,#059669); box-shadow:0 3px 10px rgba(5,150,105,.24); }
        .u-btn-blue  { background:linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow:0 3px 10px rgba(37,99,235,.28); }

        /* ── EMPTY STATE ── */
        .empty {
          grid-column:1/-1; text-align:center; padding:64px 24px;
          display:flex; flex-direction:column; align-items:center; gap:14px;
        }
        .empty-ring { width:60px; height:60px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; }
        .empty-title { font-family:var(--fd); font-size:18px; font-weight:700; color:var(--txt); }
        .empty-sub   { font-size:14px; color:var(--muted); }

        /* ── CONTACT STRIP ── */
        .contact-strip {
          margin:0 auto 24px; background:var(--surf); border:1px solid var(--bdr);
          border-radius:var(--rxl); padding:16px 24px; box-shadow:var(--shsm);
          display:flex; align-items:center; gap:12px; justify-content:center;
        }
        .contact-strip p { font-size:13.5px; color:var(--muted); }
        .contact-strip strong { color:var(--txt); font-weight:700; }

        /* ── BOTTOM CTA ── */
        .cta-wrap { margin:8px auto 80px; }
        .cta-inner {
          background:linear-gradient(135deg,#1D4ED8,#2563EB 50%,#3B82F6);
          border-radius:var(--rxl); padding:36px 40px;
          display:flex; align-items:center; justify-content:space-between; gap:24px;
          position:relative; overflow:hidden;
          box-shadow:var(--shlg);
        }
        .cta-inner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.12),transparent 60%); }
        .cta-label { font-size:11px; font-weight:700; color:rgba(255,255,255,.65); letter-spacing:.1em; text-transform:uppercase; margin-bottom:8px; }
        .cta-title { font-family:var(--fd); font-size:clamp(16px,2vw,22px); font-weight:700; color:#fff; line-height:1.4; max-width:580px; }
        .cta-btn {
          position:relative; flex-shrink:0;
          display:inline-flex; align-items:center; gap:7px;
          padding:12px 22px; border-radius:var(--rmd);
          background:#fff; color:#1D4ED8;
          font-family:var(--fd); font-size:13.5px; font-weight:700;
          text-decoration:none; white-space:nowrap;
          box-shadow:0 4px 16px rgba(0,0,0,.12);
          transition:transform .15s, box-shadow .15s;
        }
        .cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.18); }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px) {
          .grid { grid-template-columns:1fr 1fr; }
          .wrap { padding:0 24px; }
        }
        @media (max-width:640px) {
          .grid { grid-template-columns:1fr; }
          .hero { padding:32px 16px 0; }
          .wrap { padding:0 16px; }
          .filter-row { flex-direction:column; }
          .search-box { min-width:unset; }
          .sel-group { min-width:unset; width:100%; }
          .cta-inner { flex-direction:column; padding:28px 22px; }
          .hero-btns { flex-direction:column; align-items:stretch; }
          .btn { justify-content:center; }
          .blob { display:none; }
          .contact-strip { flex-direction:column; text-align:center; }
        }
      `}</style>

      <div className="tc">
        <div className="blob blob1" /><div className="blob blob2" /><div className="dots" />

        {/* ── HERO ── */}
        <div className="hero">
          <span className="eyebrow"><span className="edot" /> Trusted University Partners</span>
          <h1 className="h1">
            Our Tie-Up<br />
            <span className="grad">Universities &amp; Boards</span>
          </h1>
          <p className="sub">
            We work with leading UGC, AICTE and NCTE approved universities across India, offering
            Online &amp; Online Distance, Traditional and Vocational learning programs.
          </p>
          <div className="hero-btns">
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-blue">
              <MessageCircle size={15} strokeWidth={2} /> Ask {CONTACT} on WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="btn btn-green">
              <Phone size={15} strokeWidth={2} /> Call {PHONE}
            </a>
          </div>
        </div>
        <br />

        {/* ── FILTERS ── */}
        <div className="wrap filter-wrap">
          <div className="filter-card">
            <div className="filter-row">
              <div className="search-box" style={{ flex: "2", minWidth: "220px" }}>
                <Search size={16} color="#94A3B8" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search university, place or state…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button onClick={() => setSearch("")} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center" }}>
                    <X size={14} color="#94A3B8" strokeWidth={2} />
                  </button>
                )}
              </div>

              <div className="sel-group">
                <label className="sel-label">State</label>
                <select className="sel" value={state} onChange={(e) => setState(e.target.value)}>
                  {ALL_STATES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {hasFilters && (
              <div className="chip-row">
                {search && (
                  <span className="chip">
                    "{search}"
                    <button onClick={() => setSearch("")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                {state !== "All States" && (
                  <span className="chip">
                    {state}
                    <button onClick={() => setState("All States")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                <button className="clear-all" onClick={clearAll}>
                  <X size={11} strokeWidth={2.5} /> Clear all
                </button>
              </div>
            )}
          </div>
        </div>
        <br />

        {/* ── STATS ── */}
        <div className="wrap stats">
          <p className="stats-txt">
            Showing <strong>{filtered.length}</strong> universit{filtered.length === 1 ? "y" : "ies"} of <strong>{UNIVERSITIES.length}</strong> partners
          </p>
          <div className="divider" />
        </div>

        {/* ── GRID ── */}
        <div className="wrap grid-wrap">
          <div className="grid">
            {filtered.length === 0 ? (
              <div className="empty">
                <div className="empty-ring"><Search size={22} color="#94A3B8" strokeWidth={2} /></div>
                <p className="empty-title">No universities found</p>
                <p className="empty-sub">Try adjusting your search or state filter.</p>
                <button className="clear-all" onClick={clearAll} style={{ marginTop: 4 }}>
                  <X size={11} strokeWidth={2.5} /> Clear all filters
                </button>
              </div>
            ) : (
              filtered.map((u) => (
                <div className="u-card" key={u.id}>
                  <div className="u-top">
                    <div className="u-icon">
                      <GraduationCap size={20} color="#1D4ED8" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="u-id">PARTNER #{String(u.id).padStart(2, "0")}</p>
                      <p className="u-name">{u.name}</p>
                    </div>
                  </div>

                  <div className="u-meta">
                    <MapPin size={13} strokeWidth={2} /> {u.place}
                  </div>

                  <span className="u-state-badge">
                    <BadgeCheck size={12} strokeWidth={2.5} /> {u.state}
                  </span>

                 
                </div>
              ))
            )}
          </div>
        </div>
        <br />
        <br />


        {/* ── BOTTOM CTA ── */}
        <div className="wrap cta-wrap">
          <div className="cta-inner">
            <div>
              <p className="cta-label">Not sure which university fits you?</p>
              <p className="cta-title">
                Talk to {CONTACT} — free, honest guidance to help you pick the right
                university and program for your career goals.
              </p>
            </div>
            <a
            
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="cta-btn"
            >
              Get Free Guidance <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}