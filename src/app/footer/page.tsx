"use client";

import React from "react";
import Link from "next/link";
import {
  Phone, MessageCircle, Mail, MapPin,
  ArrowRight, Shield, Award, Users, BookOpen,
} from "lucide-react";

const PHONE     = "9576461623";
const WA_NUMBER = "919576461623";
const EMAIL     = "info@smartedge.in";
const WA_MSG    = encodeURIComponent("Hi, I want admission guidance.");
const YEAR      = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "Home",               href: "/" },
  { label: "About Us",           href: "/about" },
  { label: "Our Services",       href: "/our-services" },
  { label: "Admission Process",  href: "/admission-process" },
  { label: "Apply Now",          href: "/admission-process/apply-now" },
  { label: "Free Counselling",   href: "/admission-process/get-free-counselling" },
  { label: "Contact Us",         href: "/contact" },
];

const COURSES = [
  "B.Tech / B.E.", "MBA / PGDM", "BBA", "B.Com",
  "B.Sc", "BA", "LLB", "MBBS / BDS", "BCA / MCA", "Diploma",
];

const TRUST = [
  { icon: Users,    label: "1000+",       sub: "Students Admitted"  },
  { icon: Award,    label: "UGC / AICTE", sub: "Approved Colleges"  },
  { icon: BookOpen, label: "50+ Courses", sub: "Across Disciplines" },
  { icon: Shield,   label: "100% Free",   sub: "Counselling"        },
];

export default function Footer(): React.JSX.Element {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --fd: 'Plus Jakarta Sans', sans-serif;
          --fb: 'Inter', sans-serif;
          --rmd: 12px; --rlg: 16px; --rfull: 9999px;
        }

        /* ── PRE-FOOTER CTA STRIP ── */
        .pf-strip {
          background: linear-gradient(135deg, #1D4ED8, #3B82F6);
          padding: 36px 40px;
          position: relative;
          overflow: hidden;
        }
        .pf-strip::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(255,255,255,.12), transparent 60%);
          pointer-events: none;
        }
        .pf-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: relative;
          z-index: 1;
        }
        .pf-text p:first-child {
          font-family: var(--fd);
          font-size: clamp(15px, 2vw, 20px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }
        .pf-text p:last-child {
          font-size: 13px;
          color: rgba(255,255,255,.75);
        }
        .pf-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
        .pf-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: var(--rmd);
          font-family: var(--fd); font-size: 13px; font-weight: 700;
          text-decoration: none; transition: transform .15s;
        }
        .pf-btn:hover { transform: translateY(-2px); }
        .pf-btn-w { background: #fff; color: #1D4ED8; box-shadow: 0 4px 14px rgba(0,0,0,.14); }
        .pf-btn-g { background: linear-gradient(135deg,#047857,#059669); color: #fff; box-shadow: 0 4px 14px rgba(5,150,105,.28); }

        /* ── TRUST BAR ── */
        .trust-bar {
          background: #0F1628;
          border-top: 1px solid rgba(255,255,255,.06);
          border-bottom: 1px solid rgba(255,255,255,.06);
          padding: 20px 40px;
        }
        .trust-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .trust-item {
          display: flex; align-items: center; gap: 12px;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,.07);
        }
        .trust-item:first-child { padding-left: 0; }
        .trust-item:last-child  { border-right: none; }
        .trust-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: rgba(59,130,246,.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .trust-label {
          font-family: var(--fd); font-size: 14px; font-weight: 800; color: #fff;
          line-height: 1.2;
        }
        .trust-sub { font-size: 11px; color: rgba(255,255,255,.45); margin-top: 2px; }

        /* ── MAIN FOOTER ── */
        .ft {
          background: #0A0F1E;
          padding: 56px 40px 0;
          color: rgba(255,255,255,.7);
          font-family: var(--fb);
        }
        .ft-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }

        /* Brand col */
        .ft-brand-name {
          font-family: var(--fd); font-size: 22px; font-weight: 800;
          color: #fff; letter-spacing: -.02em; margin-bottom: 4px;
        }
        .ft-brand-name span { color: #3B82F6; }
        .ft-tagline {
          font-size: 12px; font-weight: 600; letter-spacing: .06em;
          text-transform: uppercase; color: rgba(255,255,255,.35);
          margin-bottom: 16px;
        }
        .ft-desc {
          font-size: 13px; line-height: 1.75;
          color: rgba(255,255,255,.5);
          margin-bottom: 22px;
        }
        .ft-contact-list { display: flex; flex-direction: column; gap: 10px; }
        .ft-contact-item {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 12.5px; color: rgba(255,255,255,.55); line-height: 1.55;
          text-decoration: none; transition: color .15s;
        }
        .ft-contact-item:hover { color: rgba(255,255,255,.9); }
        .ft-contact-item svg { flex-shrink: 0; margin-top: 1px; opacity: .6; }

        /* Link cols */
        .ft-col-title {
          font-family: var(--fd); font-size: 11px; font-weight: 700;
          letter-spacing: .09em; text-transform: uppercase;
          color: rgba(255,255,255,.3); margin-bottom: 18px;
        }
        .ft-links { display: flex; flex-direction: column; gap: 10px; list-style: none; }
        .ft-links a {
          font-size: 13px; color: rgba(255,255,255,.55);
          text-decoration: none; transition: color .15s;
          display: flex; align-items: center; gap: 5px;
        }
        .ft-links a:hover { color: #fff; }
        .ft-links a svg { opacity: 0; transition: opacity .15s, transform .15s; transform: translateX(-4px); }
        .ft-links a:hover svg { opacity: 1; transform: translateX(0); }

        /* CTA col */
        .ft-cta-box {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 14px;
          padding: 20px;
        }
        .ft-cta-title {
          font-family: var(--fd); font-size: 14px; font-weight: 800;
          color: #fff; margin-bottom: 6px;
        }
        .ft-cta-sub {
          font-size: 12px; color: rgba(255,255,255,.45); line-height: 1.6; margin-bottom: 16px;
        }
        .ft-cta-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 10px 16px; border-radius: var(--rmd);
          font-family: var(--fd); font-size: 13px; font-weight: 700;
          text-decoration: none; margin-bottom: 8px;
          transition: transform .15s, box-shadow .15s;
        }
        .ft-cta-btn:hover { transform: translateY(-2px); }
        .ft-cta-phone {
          background: linear-gradient(135deg,#1D4ED8,#3B82F6);
          color: #fff; box-shadow: 0 4px 14px rgba(37,99,235,.28);
        }
        .ft-cta-wa {
          background: linear-gradient(135deg,#047857,#059669);
          color: #fff; box-shadow: 0 4px 14px rgba(5,150,105,.26);
        }
        .ft-hours {
          margin-top: 14px; padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,.07);
          font-size: 11.5px; color: rgba(255,255,255,.35); line-height: 1.8;
        }
        .ft-hours strong { color: rgba(255,255,255,.6); font-weight: 600; }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
          padding: 20px 0 24px;
        }
        .ft-copy {
          font-size: 12px; color: rgba(255,255,255,.28);
        }
        .ft-copy a { color: rgba(255,255,255,.4); text-decoration: none; }
        .ft-copy a:hover { color: rgba(255,255,255,.7); }
        .ft-legal { display: flex; gap: 20px; }
        .ft-legal a {
          font-size: 12px; color: rgba(255,255,255,.28);
          text-decoration: none; transition: color .15s;
        }
        .ft-legal a:hover { color: rgba(255,255,255,.6); }
        .ft-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 11px; color: rgba(255,255,255,.2);
          padding: 3px 10px; border-radius: var(--rfull);
          border: 1px solid rgba(255,255,255,.07);
        }
        .ft-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: #3B82F6; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1.4fr 1fr 1fr; }
          .ft-grid > *:last-child { grid-column: 1 / -1; }
          .ft-cta-box { display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: start; gap: 16px; }
          .ft-cta-title, .ft-cta-sub { grid-column: 1 / -1; margin-bottom: 0; }
          .ft-cta-btn { margin-bottom: 0; }
          .ft-hours { grid-column: 1 / -1; margin-top: 0; padding-top: 10px; }
          .trust-inner { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .trust-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,.07); padding: 12px 0; }
          .trust-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.07); padding-right: 16px; }
          .trust-item:nth-child(3), .trust-item:nth-child(4) { border-bottom: none; }
        }
        @media (max-width: 768px) {
          .pf-strip  { padding: 28px 20px; }
          .pf-inner  { flex-direction: column; align-items: flex-start; }
          .trust-bar { padding: 16px 20px; }
          .ft        { padding: 40px 20px 0; }
          .ft-grid   { grid-template-columns: 1fr; gap: 32px; }
          .ft-grid > *:last-child { grid-column: auto; }
          .ft-cta-box { display: block; }
          .ft-cta-btn { margin-bottom: 8px; }
          .ft-hours { margin-top: 14px; padding-top: 14px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
          .trust-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .trust-inner { grid-template-columns: 1fr; }
          .trust-item { border-right: none !important; padding: 12px 0 !important; }
        }
      `}</style>

      {/* PRE-FOOTER STRIP */}
      <div className="pf-strip">
        <div className="pf-inner">
          <div className="pf-text">
            <p>Not sure which course is right for you?</p>
            <p>Our counsellors will help you choose — completely free, no pressure.</p>
          </div>
          <div className="pf-btns">
            <Link href="/admission-process/get-free-counselling" className="pf-btn pf-btn-w">
              <MessageCircle size={14} strokeWidth={2} /> Free Counselling
            </Link>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-g">
              <MessageCircle size={14} strokeWidth={2} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          {TRUST.map(t => (
            <div className="trust-item" key={t.label}>
              <div className="trust-icon">
                <t.icon size={18} color="#3B82F6" strokeWidth={2} />
              </div>
              <div>
                <p className="trust-label">{t.label}</p>
                <p className="trust-sub">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN FOOTER */}
      <footer className="ft">
        <div className="ft-grid">

          {/* Brand */}
          <div>
            <p className="ft-brand-name">Smart<span>Edge</span></p>
            <p className="ft-tagline">Education Consultancy</p>
            <p className="ft-desc">
              Bihar's trusted admission guidance partner. We connect students with
              UGC, AICTE &amp; NCTE approved colleges — with free counselling,
              hostel support, and honest advice.
            </p>
            <div className="ft-contact-list">
              <a href={`tel:${PHONE}`} className="ft-contact-item">
                <Phone size={13} strokeWidth={2} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="ft-contact-item">
                <Mail size={13} strokeWidth={2} /> {EMAIL}
              </a>
              <span className="ft-contact-item">
                <MapPin size={13} strokeWidth={2} />
                Bhagwat Nagar, New Bypass, Patna – 800026
              </span>
              <span className="ft-contact-item">
                <MapPin size={13} strokeWidth={2} />
                Aditya Chowk, MAFO, Sheikhpura – 811102
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="ft-col-title">Quick Links</p>
            <ul className="ft-links">
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <ArrowRight size={11} strokeWidth={2.5} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <p className="ft-col-title">Courses We Cover</p>
            <ul className="ft-links">
              {COURSES.map(c => (
                <li key={c}>
                  <Link href="/our-services">
                    <ArrowRight size={11} strokeWidth={2.5} />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="ft-col-title">Get in Touch</p>
            <div className="ft-cta-box">
              <p className="ft-cta-title">Talk to a Counsellor</p>
              <p className="ft-cta-sub">
                We reply within 10–15 minutes. Free guidance, no obligations.
              </p>
              <a href={`tel:${PHONE}`} className="ft-cta-btn ft-cta-phone">
                <Phone size={13} strokeWidth={2} /> Call Now
              </a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="ft-cta-btn ft-cta-wa">
                <MessageCircle size={13} strokeWidth={2} /> WhatsApp
              </a>
              <div className="ft-hours">
                <strong>Mon – Sat:</strong> 10:00 AM – 6:00 PM<br />
                <strong>Sunday:</strong> By Appointment
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {YEAR} <a href="/">Smart Edge Education Consultancy</a>. All rights reserved.
          </p>
          <div className="ft-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
          <span className="ft-badge">
            <span className="ft-badge-dot" /> Made in Bihar
          </span>
        </div>
      </footer>
    </>
  );
}