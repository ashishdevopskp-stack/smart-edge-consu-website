"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search, ChevronDown, ArrowRight, Phone, MessageCircle, X,
  Cpu, Briefcase, Code2, Stethoscope, Sprout, BookOpen,
  Palette, GraduationCap, Scale, FlaskConical, HeartPulse,
  Film, Library, Dumbbell, BookMarked, Shield,
} from "lucide-react";
import { CATEGORIES, type CategoryDetail } from "@/app/courses/data/CoursesData";

/* ── Icon map ─────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ElementType> = {
  Cpu, Briefcase, Code2, Stethoscope, Sprout, BookOpen,
  Palette, GraduationCap, Scale, FlaskConical, HeartPulse,
  Film, Library, Dumbbell, BookMarked, Shield,
};

/* ── Constants ────────────────────────────────────────────────────────── */
const PHONE     = "9576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I want admission guidance.");

const ALL_STREAMS = ["All Streams",   ...Array.from(new Set(CATEGORIES.map((c) => c.stream)))];
const ALL_QUALS   = ["All Qualifications", "10th", "12th", "Graduation", "Post Graduation"];
const ALL_TYPES   = ["All Types", "Regular", "Distance", "Both"];

/* ════════════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════════ */
export default function CoursesPage(): React.JSX.Element {
  const [search,     setSearch]     = useState("");
  const [stream,     setStream]     = useState("All Streams");
  const [qual,       setQual]       = useState("All Qualifications");
  const [courseType, setCourseType] = useState("All Types");
  const [expanded,   setExpanded]   = useState<string | null>(null);

  const toggle     = (id: string) => setExpanded((prev) => (prev === id ? null : id));
  const clearAll   = () => { setSearch(""); setStream("All Streams"); setQual("All Qualifications"); setCourseType("All Types"); };
  const hasFilters = search || stream !== "All Streams" || qual !== "All Qualifications" || courseType !== "All Types";

  const filtered = useMemo<CategoryDetail[]>(() => {
    return CATEGORIES.map((cat) => {
      if (stream !== "All Streams" && cat.stream !== stream) return null;
      const courses = cat.courses.filter((c) => {
        if (search &&
          !c.name.toLowerCase().includes(search.toLowerCase()) &&
          !cat.label.toLowerCase().includes(search.toLowerCase())) return false;
        if (qual !== "All Qualifications" && c.qualification !== qual) return false;
        if (courseType !== "All Types" && c.type !== courseType && c.type !== "Both") return false;
        return true;
      });
      if (!courses.length) return null;
      return { ...cat, courses };
    }).filter(Boolean) as CategoryDetail[];
  }, [search, stream, qual, courseType]);

  const totalCourses = filtered.reduce((a, c) => a + c.courses.length, 0);

  /* ── JSX ── */
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
          --rsm:   8px;
          --rmd:   12px;
          --rlg:   16px;
          --rxl:   24px;
          --rfull: 9999px;
          --shsm: 0 1px 3px rgba(15,22,40,.06);
          --shmd: 0 4px 16px rgba(15,22,40,.08);
          --shlg: 0 12px 40px rgba(15,22,40,.10);
        }

        /* ── PAGE ──
           NOTE: no top padding here — the global layout.tsx <main> already
           offsets content by var(--nav-h) to clear the fixed navbar.
           Adding padding-top here too caused a large double-gap. */
        .cp { position:relative; min-height:100vh; background:var(--bg); font-family:var(--fb); overflow-x:hidden; }
        .blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .blob1 { width:520px; height:520px; top:-140px; right:-140px; background:radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.55; }
        .blob2 { width:380px; height:380px; top:60%; left:-100px; background:radial-gradient(circle,#D1FAE5,transparent 70%); opacity:.45; }
        .dots  { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.28; }
        .wrap  { position:relative; z-index:5; max-width:1160px; margin:0 auto; padding:0 40px; }

        /* ── HERO ── (top padding now supplies the section's own breathing room) */
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

        .h1 { font-family:var(--fd); font-size:clamp(28px,4vw,52px); font-weight:800; line-height:1.08; letter-spacing:-.025em; color:var(--txt); }
        .grad { background:linear-gradient(120deg,#1D4ED8,#3B82F6,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sub { font-size:16px; color:var(--muted); line-height:1.7; max-width:600px; }

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

        /* Search */
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

        /* Dropdown group */
        .sel-group { display:flex; flex-direction:column; gap:4px; min-width:148px; flex:1; }
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

        /* Active filter chips */
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

        /* ── STATS BAR ── */
        .stats { margin:28px auto 0; display:flex; align-items:center; gap:20px; }
        .stats-txt { font-size:13.5px; color:var(--muted); white-space:nowrap; }
        .stats-txt strong { color:var(--txt); font-weight:700; }
        .divider { flex:1; height:1px; background:var(--bdr); }

        /* ── GRID ── */
        .grid-wrap { margin:24px auto 0; padding-bottom:40px; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }

        /* ── CATEGORY CARD ── */
        .cat-card {
          border-radius:var(--rlg); background:var(--surf);
          border:1.5px solid var(--bdr);
          box-shadow:var(--shsm); overflow:hidden;
          transition:box-shadow .2s, transform .2s;
        }
        .cat-card:hover { box-shadow:var(--shmd); transform:translateY(-2px); }
        .cat-card.is-open { box-shadow:var(--shmd); }

        .cat-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:18px 20px; cursor:pointer; user-select:none; gap:12px;
        }
        .cat-left { display:flex; align-items:center; gap:13px; }
        .cat-icon { width:42px; height:42px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .cat-name { font-family:var(--fd); font-size:14px; font-weight:700; color:var(--txt); line-height:1.25; }
        .cat-count { font-size:12px; color:var(--muted); margin-top:2px; }

        .cat-chevron { flex-shrink:0; transition:transform .25s; color:var(--muted); }
        .cat-chevron.open { transform:rotate(180deg); }

        /* Accordion */
        .acc-body { overflow:hidden; max-height:0; transition:max-height .32s ease; }
        .acc-body.open { max-height:700px; }
        .acc-inner { border-top:1px solid var(--bdr); padding:12px 20px 16px; display:flex; flex-direction:column; gap:8px; }

        /* Tagline */
        .cat-tagline { font-size:12px; color:var(--muted); line-height:1.6; padding:0 2px 4px; }

        /* Course rows */
        .course-row {
          display:flex; align-items:center; justify-content:space-between;
          padding:10px 12px; border-radius:var(--rmd);
          background:var(--bg); border:1px solid var(--bdr);
          gap:8px; flex-wrap:wrap; transition:background .15s;
        }
        .course-row:hover { background:#F1F5FE; }
        .course-name { font-size:13.5px; font-weight:600; color:var(--txt); flex:1; min-width:100px; }
        .course-meta { display:flex; gap:6px; flex-wrap:wrap; }

        .badge { padding:2px 9px; border-radius:var(--rfull); font-size:11px; font-weight:600; }
        .bdur  { background:#F1F5F9; color:#475569; }
        .breg  { background:#DBEAFE; color:#1D4ED8; }
        .bdist { background:#F5F3FF; color:#6D28D9; }
        .bboth { background:#ECFDF5; color:#047857; }
        .bqual { background:#FEF3C7; color:#92400E; }

        /* CTA row */
        .acc-cta { margin-top:8px; padding-top:12px; border-top:1px solid var(--bdr); display:flex; gap:8px; flex-wrap:wrap; }
        .acc-btn {
          flex:1; display:inline-flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 14px; border-radius:var(--rmd);
          font-family:var(--fd); font-size:12.5px; font-weight:700;
          text-decoration:none; color:#fff; border:none; cursor:pointer;
          transition:transform .15s, box-shadow .15s; min-width:100px;
        }
        .acc-btn:hover { transform:translateY(-1px); }
        .acc-btn-blue  { background:linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow:0 3px 10px rgba(37,99,235,.28); }
        .acc-btn-green { background:linear-gradient(135deg,#047857,#059669); box-shadow:0 3px 10px rgba(5,150,105,.24); }
        .acc-btn-out   { background:var(--surf); color:var(--txt); border:1.5px solid var(--bdr); box-shadow:none; }

        /* ── EMPTY STATE ── */
        .empty {
          grid-column:1/-1; text-align:center; padding:64px 24px;
          display:flex; flex-direction:column; align-items:center; gap:14px;
        }
        .empty-ring { width:60px; height:60px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; }
        .empty-title { font-family:var(--fd); font-size:18px; font-weight:700; color:var(--txt); }
        .empty-sub   { font-size:14px; color:var(--muted); }

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
        }
      `}</style>

      <div className="cp">
        <div className="blob blob1" /><div className="blob blob2" /><div className="dots" />

        {/* ── HERO ── */}
        <div className="hero">
          <span className="eyebrow"><span className="edot" /> UGC · AICTE · NCTE Approved</span>
          <h1 className="h1">
            Explore Our Courses &amp;<br />
            <span className="grad">Build a Successful Career</span>
          </h1>
          <p className="sub">
            Choose from UGC, AICTE and NCTE approved courses across multiple streams.
            Find the right program based on your interests, qualifications, and career goals.
          </p>
          <div className="hero-btns">
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-blue">
              <MessageCircle size={15} strokeWidth={2} /> Get Free Counselling
            </a>
            <a href={`tel:${PHONE}`} className="btn btn-green">
              <Phone size={15} strokeWidth={2} /> Apply Now
            </a>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="wrap filter-wrap">
          <div className="filter-card">
            <div className="filter-row">
              {/* Search */}
              <div className="search-box" style={{ flex: "2", minWidth: "220px" }}>
                <Search size={16} color="#94A3B8" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search course or stream…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button onClick={() => setSearch("")} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center" }}>
                    <X size={14} color="#94A3B8" strokeWidth={2} />
                  </button>
                )}
              </div>

              {/* Stream */}
              <div className="sel-group">
                <label className="sel-label">Stream</label>
                <select className="sel" value={stream} onChange={(e) => setStream(e.target.value)}>
                  {ALL_STREAMS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Qualification */}
              <div className="sel-group">
                <label className="sel-label">Qualification</label>
                <select className="sel" value={qual} onChange={(e) => setQual(e.target.value)}>
                  {ALL_QUALS.map((q) => <option key={q}>{q}</option>)}
                </select>
              </div>

              {/* Course Type */}
              <div className="sel-group">
                <label className="sel-label">Course Type</label>
                <select className="sel" value={courseType} onChange={(e) => setCourseType(e.target.value)}>
                  {ALL_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="chip-row">
                {search && (
                  <span className="chip">
                    "{search}"
                    <button onClick={() => setSearch("")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                {stream !== "All Streams" && (
                  <span className="chip">
                    {stream}
                    <button onClick={() => setStream("All Streams")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                {qual !== "All Qualifications" && (
                  <span className="chip">
                    {qual}
                    <button onClick={() => setQual("All Qualifications")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                {courseType !== "All Types" && (
                  <span className="chip">
                    {courseType}
                    <button onClick={() => setCourseType("All Types")}><X size={11} strokeWidth={2.5} /></button>
                  </span>
                )}
                <button className="clear-all" onClick={clearAll}>
                  <X size={11} strokeWidth={2.5} /> Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="wrap stats">
          <p className="stats-txt">
            Showing <strong>{filtered.length}</strong> categor{filtered.length === 1 ? "y" : "ies"} ·{" "}
            <strong>{totalCourses}</strong> course{totalCourses !== 1 ? "s" : ""}
          </p>
          <div className="divider" />
        </div>

        {/* ── GRID ── */}
        <div className="wrap grid-wrap">
          <div className="grid">
            {filtered.length === 0 ? (
              <div className="empty">
                <div className="empty-ring"><Search size={22} color="#94A3B8" strokeWidth={2} /></div>
                <p className="empty-title">No courses found</p>
                <p className="empty-sub">Try adjusting your filters or search term.</p>
                <button className="clear-all" onClick={clearAll} style={{ marginTop: 4 }}>
                  <X size={11} strokeWidth={2.5} /> Clear all filters
                </button>
              </div>
            ) : (
              filtered.map((cat) => {
                const Icon   = ICON_MAP[cat.icon] ?? BookOpen;
                const isOpen = expanded === cat.id;
                return (
                  <div
                    className={`cat-card${isOpen ? " is-open" : ""}`}
                    key={cat.id}
                    style={{ borderColor: isOpen ? cat.border : undefined }}
                  >
                    {/* Header */}
                    <div className="cat-header" onClick={() => toggle(cat.id)}>
                      <div className="cat-left">
                        <div className="cat-icon" style={{ background: cat.bg }}>
                          <Icon size={20} color={cat.color} strokeWidth={2} />
                        </div>
                        <div>
                          <p className="cat-name">{cat.label}</p>
                          <p className="cat-count">{cat.courses.length} Course{cat.courses.length !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                      <ChevronDown size={18} strokeWidth={2} className={`cat-chevron${isOpen ? " open" : ""}`} />
                    </div>

                    {/* Accordion body */}
                    <div className={`acc-body${isOpen ? " open" : ""}`}>
                      <div className="acc-inner">
                        <p className="cat-tagline">{cat.tagline}</p>

                        {cat.courses.map((course) => (
                          <div className="course-row" key={course.name}>
                            <span className="course-name">{course.name}</span>
                            <div className="course-meta">
                              <span className="badge bdur">{course.duration}</span>
                              <span className={`badge ${
                                course.type === "Regular"  ? "breg"  :
                                course.type === "Distance" ? "bdist" : "bboth"
                              }`}>{course.type}</span>
                              <span className="badge bqual">{course.qualification}+</span>
                            </div>
                          </div>
                        ))}

                        <div className="acc-cta">
                          
                          <a
                            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I want guidance for ${cat.label} courses.`)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="acc-btn acc-btn-green"
                          >
                            <MessageCircle size={13} strokeWidth={2} /> Counselling
                          </a>
                          <a href={`tel:${PHONE}`} className="acc-btn acc-btn-blue">
                            <Phone size={13} strokeWidth={2} /> Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="wrap cta-wrap">
          <div className="cta-inner">
            <div>
              <p className="cta-label">Not sure which course to pick?</p>
              <p className="cta-title">
                Talk to our counsellors — free, honest guidance to help you choose
                the right course and college for your future.
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