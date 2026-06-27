"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Star, Quote, Filter } from "lucide-react";

const STUDENTS = [
  { id: 1,  name: "Sonu Kumar",      course: " Bachelor of Library & Information Science",      college: "Swami Vivekanand Subharti University , UP", imageSrc: "/sonu-kumar.png", year: "2024" },
  { id: 2,  name: "Rani Kumari",      course: "ANM",               college: " Baidhnath College of Education ",              imageSrc: "/rani-kumari.png", year: "2024" },
  { id: 3,  name: "Saurav Kumar",      course: "PGDCA",               college: "Mangalayatan University, UP ",             imageSrc: "/saurav-kumar.png", year: "2024" },
  { id: 4,  name: "Afreen Karim",       course: "D.EI.Ed",    college: " K.K.Teacher Training College, Dhanbad",      imageSrc: "/afreen-karim.png", year: "2024" },
  { id: 5,  name: "Vikas Kumar",     course: "MA",             college: "Aisect University, Hazaribagh, JH",                   imageSrc: "/vikas-kumar.png", year: "2024" },
  { id: 6,  name: "Chhotu Kumar",    course: "BSC", college: "Asian International University, Manipur ",           imageSrc: "/chootu-kumar.png", year: "2024" },
  { id: 7,  name: "Monu kumar ",    course: " OT TECHNICAL",      college: "Sikkim Skill University, Sikkim ",  imageSrc: "/monu-kumar.png", year: "2024" },

];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sonu Kumar",
    course: "Bachelor of Library & Information Science",
    college: "Swami Vivekanand Subharti University, UP ",
    text: "Smart Edge helped me secure admission in my dream course. Sonu sir guided me through every step — from selecting the right college to completing all formalities. I am very grateful!",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Kumari",
    course: "MBA, 2024",
    college: "Manglayatan University",
    text: "I was confused about which MBA college to choose. Smart Edge counsellors explained everything clearly and helped me get admission at the best fee. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sanjay Yadav",
    course: "BBA, 2023",
    college: "Sikkim Skill University",
    text: "Excellent service! They followed up with me throughout the admission process and even helped with hostel arrangements. The team is very professional and caring.",
    rating: 5,
  },
  {
    id: 4,
    name: "Meena Devi",
    course: "B.Sc, 2024",
    college: "Asian International University",
    text: "Free counselling and honest advice — that is what makes Smart Edge different. They never pressured me and gave me all the information I needed to make the right choice.",
    rating: 5,
  },
];

const ALL_COURSES = ["All", "B.Tech / B.E.", "MBA / PGDM", "BBA", "B.Com", "B.Sc", "BA", "LLB", "BCA / MCA", "Diploma"];

/* ════════════════════════════════════════════════════════════════════ */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? STUDENTS
    : STUDENTS.filter(s => s.course.toLowerCase().includes(activeFilter.split(" / ")[0].toLowerCase()));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; background: #F8FAFF; }

        /* ── HERO ── */
        .gl-hero {
          background: linear-gradient(135deg, #0F1628 0%, #1e2d5a 100%);
          padding: 96px 40px 64px; position: relative; overflow: hidden;
        }
        .gl-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(59,130,246,.18), transparent 60%);
          pointer-events: none;
        }
        .gl-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .gl-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,.15); border: 1px solid rgba(59,130,246,.3);
          color: #93C5FD; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
          padding: 6px 14px; border-radius: 999px; margin-bottom: 20px;
        }
        .gl-hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: #fff;
          line-height: 1.15; margin: 0 0 16px;
        }
        .gl-hero p {
          font-family: 'Inter', sans-serif; font-size: 15px; color: rgba(255,255,255,.6);
          line-height: 1.7; margin: 0; max-width: 520px;
        }

        /* Stats strip */
        .gl-stats {
          background: #1D4ED8; padding: 20px 40px;
        }
        .gl-stats-inner {
          max-width: 900px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 16px;
        }
        .gl-stat {
          text-align: center;
        }
        .gl-stat-val {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 22px; font-weight: 800; color: #fff;
        }
        .gl-stat-label { font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(255,255,255,.7); margin-top: 2px; }

        /* ── CONTENT WRAPPER ── */
        .gl-wrap { max-width: 900px; margin: 0 auto; padding: 56px 40px 80px; }

        /* Breadcrumb */
        .gl-breadcrumb {
          max-width: 900px; margin: 0 auto; padding: 20px 40px 0;
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #94A3B8;
        }
        .gl-breadcrumb a { color: #94A3B8; text-decoration: none; }
        .gl-breadcrumb a:hover { color: #1D4ED8; }

        /* Section title */
        .gl-sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 800;
          color: #0F1628; margin: 0 0 8px;
        }
        .gl-sec-sub {
          font-family: 'Inter', sans-serif; font-size: 14px; color: #64748B; margin: 0 0 28px;
        }

        /* Filter bar */
        .gl-filters {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; align-items: center;
        }
        .gl-filter-label {
          display: flex; align-items: center; gap: 5px;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #94A3B8;
          margin-right: 4px;
        }
        .gl-filter-btn {
          padding: 6px 14px; border-radius: 999px;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 700;
          border: 1.5px solid #E4E7F0; background: #fff; color: #64748B;
          cursor: pointer; transition: all .15s;
        }
        .gl-filter-btn.active, .gl-filter-btn:hover {
          background: #1D4ED8; border-color: #1D4ED8; color: #fff;
        }

        /* ── STUDENT CARDS GRID ── */
        .gl-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 72px;
        }
        .gl-card {
          background: #fff; border-radius: 16px; overflow: hidden;
          border: 1px solid #E4E7F0;
          transition: transform .2s, box-shadow .2s;
        }
        .gl-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(15,22,40,.1); }

        .gl-card-img {
          width: 100%; aspect-ratio: 1; object-fit: cover; background: #EFF6FF;
          display: block; position: relative;
        }
        .gl-card-placeholder {
          width: 100%; aspect-ratio: 1; background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px;
        }
        .gl-card-placeholder-icon {
          width: 52px; height: 52px; border-radius: 50%; background: rgba(29,78,216,.15);
          display: flex; align-items: center; justify-content: center;
        }
        .gl-card-placeholder-text {
          font-family: 'Inter', sans-serif; font-size: 10px; color: #93C5FD; font-weight: 600;
          letter-spacing: .05em; text-transform: uppercase;
        }

        .gl-card-body { padding: 14px; }
        .gl-card-name {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 800;
          color: #0F1628; margin: 0 0 4px;
        }
        .gl-card-course {
          font-family: 'Inter', sans-serif; font-size: 11.5px; font-weight: 600;
          color: #1D4ED8; margin: 0 0 4px;
        }
        .gl-card-college {
          font-family: 'Inter', sans-serif; font-size: 11px; color: #94A3B8; line-height: 1.45; margin: 0;
        }
        .gl-card-year {
          display: inline-block; background: #EFF6FF; color: #1D4ED8;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 700;
          padding: 2px 8px; border-radius: 999px; margin-top: 8px;
        }

        /* ── TESTIMONIALS ── */
        .gl-testimonials { margin-bottom: 16px; }
        .gl-test-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .gl-test-card {
          background: #fff; border: 1px solid #E4E7F0; border-radius: 16px; padding: 24px;
          position: relative; transition: box-shadow .2s;
        }
        .gl-test-card:hover { box-shadow: 0 8px 24px rgba(15,22,40,.07); }
        .gl-test-quote {
          position: absolute; top: 20px; right: 20px;
          color: #DBEAFE;
        }
        .gl-stars { display: flex; gap: 3px; margin-bottom: 12px; }
        .gl-test-text {
          font-family: 'Inter', sans-serif; font-size: 13.5px; color: #475569;
          line-height: 1.75; margin: 0 0 18px;
        }
        .gl-test-footer { display: flex; align-items: center; gap: 12px; }
        .gl-test-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #1D4ED8, #3B82F6);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 800;
          color: #fff; flex-shrink: 0;
        }
        .gl-test-name {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 800;
          color: #0F1628; margin: 0 0 2px;
        }
        .gl-test-meta {
          font-family: 'Inter', sans-serif; font-size: 11.5px; color: #94A3B8; margin: 0;
        }

        /* ── CTA SECTION ── */
        .gl-cta {
          background: linear-gradient(135deg, #1D4ED8, #3B82F6); border-radius: 20px;
          padding: 40px; text-align: center; margin-top: 56px; position: relative; overflow: hidden;
        }
        .gl-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(255,255,255,.12), transparent 60%);
          pointer-events: none;
        }
        .gl-cta h2 {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 800;
          color: #fff; margin: 0 0 10px; position: relative; z-index: 1;
        }
        .gl-cta p {
          font-family: 'Inter', sans-serif; font-size: 14px; color: rgba(255,255,255,.75);
          margin: 0 0 24px; position: relative; z-index: 1;
        }
        .gl-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
        .gl-cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 12px 24px; border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 700;
          text-decoration: none; transition: transform .15s;
        }
        .gl-cta-btn:hover { transform: translateY(-2px); }
        .gl-cta-btn-w { background: #fff; color: #1D4ED8; }
        .gl-cta-btn-g { background: linear-gradient(135deg,#047857,#059669); color: #fff; }

        .gl-divider { height: 1px; background: #E4E7F0; margin: 48px 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .gl-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .gl-hero     { padding: 80px 20px 48px; }
          .gl-wrap     { padding: 40px 20px 60px; }
          .gl-stats    { padding: 16px 20px; }
          .gl-grid     { grid-template-columns: repeat(2, 1fr); }
          .gl-test-grid{ grid-template-columns: 1fr; }
          .gl-breadcrumb { padding: 16px 20px 0; }
        }
        @media (max-width: 400px) {
          .gl-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
        }
      `}</style>

      {/* HERO */}
      <section className="gl-hero">
        <div className="gl-hero-inner">
          <div className="gl-hero-badge">
            <GraduationCap size={13} strokeWidth={2} /> Success Stories
          </div>
          <h1>Our Students, Our Pride</h1>
          <p>
            Over 1000 students have successfully secured admission through Smart Edge Education
            Consultancy. Here are some of their stories.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div className="gl-stats">
        <div className="gl-stats-inner">
          {[
            { val: "1000+", label: "Successful Admissions" },
            { val: "50+",   label: "Partner Colleges" },
            { val: "4.8★",  label: "Student Rating" },
            { val: "100%",  label: "Free Counselling" },
          ].map(s => (
            <div className="gl-stat" key={s.val}>
              <div className="gl-stat-val">{s.val}</div>
              <div className="gl-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="gl-breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>Gallery &amp; Testimonials</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="gl-wrap">

        {/* Student admissions */}
        <h2 className="gl-sec-title">🎓 Student Admission Gallery</h2>
        <p className="gl-sec-sub">Real students who got admitted through Smart Edge Education Consultancy.</p>

        {/* Filters */}
        <div className="gl-filters">
          <span className="gl-filter-label"><Filter size={12} strokeWidth={2} /> Filter:</span>
          {ALL_COURSES.map(c => (
            <button
              key={c}
              className={`gl-filter-btn${activeFilter === c ? " active" : ""}`}
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Student Grid */}
        <div className="gl-grid">
          {filtered.map(s => (
            <div className="gl-card" key={s.id}>
              {/* Image — replace placeholder.jpg with actual student photo */}
              <div className="gl-card-placeholder">
                
               <Image src={s.imageSrc} alt={s.name} width={300} height={300} className="gl-card-img" />
              </div>
              {/* Uncomment below and remove placeholder above once real images are added:
              <Image src={s.imageSrc} alt={s.name} width={300} height={300} className="gl-card-img" /> */}
             
              <div className="gl-card-body">
                <p className="gl-card-name">{s.name}</p>
                <p className="gl-card-course">{s.course}</p>
                <p className="gl-card-college">{s.college}</p>
               
              </div>
            </div>
          ))}
        </div>

        <div className="gl-divider" />

        {/* TESTIMONIALS */}
        <div className="gl-testimonials">
          <h2 className="gl-sec-title">⭐ What Students Say</h2>
          <p className="gl-sec-sub">Real feedback from students and families who chose Smart Edge.</p>

          <div className="gl-test-grid">
            {TESTIMONIALS.map(t => (
              <div className="gl-test-card" key={t.id}>
                <Quote size={32} strokeWidth={1.5} className="gl-test-quote" />
                <div className="gl-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
                  ))}
                </div>
                <p className="gl-test-text">{t.text}</p>
                <div className="gl-test-footer">
                  <div className="gl-test-avatar">{t.name[0]}</div>
                  <div>
                    <p className="gl-test-name">{t.name}</p>
                    <p className="gl-test-meta">{t.course} · {t.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gl-cta">
          <h2>Be Our Next Success Story</h2>
          <p>Free counselling, honest guidance, and complete admission support — that is the Smart Edge promise.</p>
          <div className="gl-cta-btns">
            <a href="/admission-process" className="gl-cta-btn gl-cta-btn-w">Get Free Counselling</a>
            <a href={`https://wa.me/919576461623?text=${encodeURIComponent("Hi, I want admission guidance.")}`}
              target="_blank" rel="noopener noreferrer" className="gl-cta-btn gl-cta-btn-g">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}