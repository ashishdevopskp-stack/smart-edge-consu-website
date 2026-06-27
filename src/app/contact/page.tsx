"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone, MessageCircle, Mail, MapPin, Clock,
  CheckCircle2, Send, ShieldCheck, ArrowRight,
  Zap, Star, Eye, BadgeCheck, Users,
} from "lucide-react";

const PHONE     = "9576461623";
const WA_NUMBER = "919576461623";
const EMAIL     = "info@smartedge.in";
const WA_MSG    = encodeURIComponent("Hi, I want admission guidance.");

const COURSES = [
  "B.Tech / B.E.", "MBA / PGDM", "BBA", "B.Com", "B.Sc", "BA",
  "LLB", "MBBS / BDS", "BCA / MCA", "Diploma", "Other",
];

const WHY = [
  { icon: Users,      label: "Expert Counsellors",   desc: "Real experts guide every step." },
  { icon: Star,       label: "Genuine Guidance",      desc: "Honest advice, no pressure." },
  { icon: Zap,        label: "Fast Response",         desc: "Reply within 10–15 minutes." },
  { icon: Eye,        label: "Transparent Process",   desc: "No hidden steps or charges." },
  { icon: BadgeCheck, label: "Personalised Support",  desc: "Tailored to your goals." },
];

export default function ContactPage(): React.JSX.Element {
  const [form, setForm]       = useState({ name: "", mobile: "", course: "", city: "" });
  const [errors, setErrors]   = useState<typeof form>({ name: "", mobile: "", course: "", city: "" });
  const [done, setDone]       = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm(p => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = { name: "", mobile: "", course: "", city: "" };
    if (!form.name.trim())                        e2.name   = "Required";
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) e2.mobile = "Valid 10-digit number";
    if (!form.course)                             e2.course = "Required";
    if (!form.city.trim())                        e2.city   = "Required";
    setErrors(e2);
    if (Object.values(e2).some(Boolean)) return;

    setLoading(true);

    // Build a clean, formatted enquiry message and send it straight to WhatsApp.
    const message =
      `Hi, I want admission guidance.\n\n` +
      `*New Enquiry from Website*\n` +
      `Name: ${form.name.trim()}\n` +
      `Mobile: ${form.mobile.trim()}\n` +
      `Course Interest: ${form.course}\n` +
      `City: ${form.city.trim()}`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

    // Small delay so the loading state is visible, then open WhatsApp.
    await new Promise(r => setTimeout(r, 500));
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setLoading(false);
    setDone(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:#F8FAFF; --surf:#FFFFFF; --bdr:#E4E7F0;
          --txt:#0F1628; --muted:#64748B;
          --fd:'Plus Jakarta Sans',sans-serif; --fb:'Inter',sans-serif;
          --rmd:12px; --rlg:16px; --rxl:24px; --rfull:9999px;
          --shsm:0 1px 3px rgba(15,22,40,.06); --shmd:0 4px 16px rgba(15,22,40,.08); --shlg:0 12px 40px rgba(15,22,40,.10);
        }

        .cp { position:relative; min-height:100vh; background:var(--bg); font-family:var(--fb); overflow-x:hidden; padding-top:100px; padding-bottom:80px; }
        .blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .blob1 { width:480px; height:480px; top:-120px; right:-120px; background:radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .blob2 { width:360px; height:360px; bottom:80px; left:-100px; background:radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .dots  { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.22; }

        .wrap  { position:relative; z-index:5; max-width:1100px; margin:0 auto; padding:0 40px; }
        .sec   { margin-bottom:64px; }

        /* HERO */
        .hero { text-align:center; padding:48px 0 0; display:flex; flex-direction:column; align-items:center; gap:18px; }
        .eyebrow { display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:var(--rfull); background:linear-gradient(135deg,#EDE9FE,#F5F3FF); border:1px solid #C4B5FD; color:#5B21B6; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; font-family:var(--fd); }
        .edot { width:6px; height:6px; border-radius:50%; background:#7C3AED; animation:ep 1.4s ease-in-out infinite; }
        @keyframes ep { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        .h1 { font-family:var(--fd); font-size:clamp(26px,4vw,50px); font-weight:800; line-height:1.1; letter-spacing:-.025em; color:var(--txt); }
        .grad { background:linear-gradient(120deg,#1D4ED8,#7C3AED,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sub { font-size:16px; color:var(--muted); line-height:1.75; max-width:560px; }
        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:4px; }
        .btn { display:inline-flex; align-items:center; gap:8px; padding:12px 22px; border-radius:var(--rmd); font-family:var(--fd); font-size:14px; font-weight:700; text-decoration:none; color:#fff; border:none; cursor:pointer; position:relative; overflow:hidden; transition:transform .15s, box-shadow .15s; }
        .btn::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.16),transparent 60%); }
        .btn:hover { transform:translateY(-2px); }
        .btn-blue  { background:linear-gradient(135deg,#1D4ED8,#3B82F6); box-shadow:0 4px 14px rgba(37,99,235,.30); }
        .btn-blue:hover  { box-shadow:0 8px 22px rgba(37,99,235,.40); }
        .btn-green { background:linear-gradient(135deg,#047857,#059669); box-shadow:0 4px 14px rgba(5,150,105,.26); }
        .btn-green:hover { box-shadow:0 8px 22px rgba(5,150,105,.34); }

        /* CONTACT CARDS */
        .cards3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .ccard { background:var(--surf); border:1.5px solid var(--bdr); border-radius:var(--rlg); padding:24px 22px; box-shadow:var(--shsm); transition:box-shadow .2s, transform .2s; text-align:center; display:flex; flex-direction:column; align-items:center; gap:12px; }
        .ccard:hover { box-shadow:var(--shmd); transform:translateY(-3px); }
        .ccard-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; }
        .ccard-label { font-family:var(--fd); font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); }
        .ccard-val { font-family:var(--fd); font-size:17px; font-weight:800; color:var(--txt); }
        .ccard-sub { font-size:13px; color:var(--muted); line-height:1.6; }
        .ccard-btn { margin-top:4px; }

        /* SPLIT LAYOUT */
        .split { display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:start; }

        /* LOCATIONS */
        .loc-card { background:var(--surf); border:1.5px solid var(--bdr); border-radius:var(--rlg); padding:22px 24px; box-shadow:var(--shsm); display:flex; flex-direction:column; gap:10px; }
        .loc-title { font-family:var(--fd); font-size:14px; font-weight:800; color:var(--txt); }
        .loc-addr { font-size:13px; color:var(--muted); line-height:1.65; display:flex; align-items:flex-start; gap:8px; }
        .loc-map { width:100%; height:180px; border:none; border-radius:var(--rmd); margin-top:4px; filter:grayscale(.15); }

        /* FORM */
        .form-card { background:var(--surf); border:1.5px solid var(--bdr); border-radius:var(--rxl); box-shadow:var(--shlg); overflow:hidden; }
        .form-head { padding:20px 24px 16px; background:linear-gradient(135deg,#1D4ED8,#3B82F6); position:relative; overflow:hidden; }
        .form-head::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.13),transparent 60%); }
        .form-head-tag   { font-size:10.5px; font-weight:700; color:rgba(255,255,255,.65); letter-spacing:.09em; text-transform:uppercase; margin-bottom:3px; }
        .form-head-title { font-family:var(--fd); font-size:17px; font-weight:800; color:#fff; }
        .form-body { padding:22px 24px 24px; }
        .ff { margin-bottom:12px; }
        .fl { display:block; font-size:12px; font-weight:700; color:var(--txt); margin-bottom:4px; font-family:var(--fd); }
        .fl span { color:#DC2626; margin-left:2px; }
        .fi, .fs {
          width:100%; padding:9px 12px; border:1.5px solid var(--bdr); border-radius:var(--rmd);
          font-family:var(--fb); font-size:13.5px; color:var(--txt); background:#FAFBFF;
          outline:none; appearance:none; -webkit-appearance:none; transition:border-color .15s,box-shadow .15s;
        }
        .fi::placeholder { color:#A0AABF; }
        .fi:focus, .fs:focus { border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,.12); background:#fff; }
        .fi.err, .fs.err { border-color:#DC2626; }
        .fs { background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; padding-right:34px; cursor:pointer; }
        .ferr { font-size:11px; color:#DC2626; margin-top:3px; }
        .fg2  { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        .fsub { width:100%; padding:12px; background:linear-gradient(135deg,#1D4ED8,#3B82F6); color:#fff; border:none; border-radius:var(--rmd); cursor:pointer; font-family:var(--fd); font-size:14px; font-weight:800; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 14px rgba(37,99,235,.28); transition:transform .15s,box-shadow .15s; margin-top:16px; position:relative; overflow:hidden; }
        .fsub::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.14),transparent 60%); }
        .fsub:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 8px 22px rgba(37,99,235,.38); }
        .fsub:disabled { opacity:.7; cursor:not-allowed; }
        .spin { width:16px; height:16px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:sp .7s linear infinite; }
        @keyframes sp { to { transform:rotate(360deg); } }
        .trust-txt { font-size:11.5px; color:var(--muted); text-align:center; margin-top:10px; display:flex; align-items:center; justify-content:center; gap:5px; }

        /* SUCCESS */
        .fsuccess { padding:32px 24px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:12px; }
        .sring { width:60px; height:60px; border-radius:50%; background:linear-gradient(135deg,#D1FAE5,#A7F3D0); border:2px solid #6EE7B7; display:flex; align-items:center; justify-content:center; animation:si .4s cubic-bezier(.34,1.56,.64,1) both; }
        @keyframes si { from{opacity:0;transform:scale(.5)} to{opacity:1;transform:scale(1)} }
        .stitle { font-family:var(--fd); font-size:17px; font-weight:800; color:var(--txt); }
        .ssub   { font-size:13px; color:var(--muted); line-height:1.7; max-width:280px; }
        .sretry { margin-top:6px; background:none; border:none; color:#1D4ED8; font-family:var(--fd); font-size:12.5px; font-weight:700; cursor:pointer; text-decoration:underline; }

        /* HOURS */
        .hours-card { background:var(--surf); border:1.5px solid var(--bdr); border-radius:var(--rlg); overflow:hidden; box-shadow:var(--shsm); }
        .hours-row { display:flex; align-items:center; justify-content:space-between; padding:13px 20px; font-size:13.5px; color:var(--txt); }
        .hours-row + .hours-row { border-top:1px solid var(--bdr); }
        .hours-day { font-weight:700; font-family:var(--fd); }
        .hours-time { color:var(--muted); }
        .hours-open { background:#D1FAE5; color:#065F46; font-size:10.5px; font-weight:700; padding:3px 9px; border-radius:var(--rfull); }
        .hours-appt { background:#FEF3C7; color:#92400E; font-size:10.5px; font-weight:700; padding:3px 9px; border-radius:var(--rfull); }

        /* BANNER */
        .banner { background:linear-gradient(135deg,#047857,#059669); border-radius:var(--rxl); padding:28px 36px; display:flex; align-items:center; justify-content:space-between; gap:20px; position:relative; overflow:hidden; box-shadow:0 8px 28px rgba(5,150,105,.28); }
        .banner::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at right,rgba(255,255,255,.12),transparent 60%); }
        .banner-tag   { font-size:10.5px; font-weight:700; color:rgba(255,255,255,.7); letter-spacing:.09em; text-transform:uppercase; margin-bottom:5px; }
        .banner-title { font-family:var(--fd); font-size:clamp(16px,2vw,22px); font-weight:800; color:#fff; line-height:1.3; }
        .banner-sub   { font-size:13px; color:rgba(255,255,255,.8); margin-top:4px; }
        .banner-btn   { display:inline-flex; align-items:center; gap:7px; padding:11px 22px; border-radius:var(--rmd); background:#fff; color:#047857; font-family:var(--fd); font-size:14px; font-weight:800; text-decoration:none; flex-shrink:0; box-shadow:0 4px 14px rgba(0,0,0,.12); transition:transform .15s; position:relative; z-index:1; }
        .banner-btn:hover { transform:translateY(-2px); }

        /* WHY GRID */
        .why-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }
        .why-card { background:var(--surf); border:1.5px solid var(--bdr); border-radius:var(--rlg); padding:20px 16px; text-align:center; box-shadow:var(--shsm); transition:box-shadow .2s,transform .2s; }
        .why-card:hover { box-shadow:var(--shmd); transform:translateY(-3px); }
        .why-icon { width:42px; height:42px; border-radius:10px; background:#F1F5FE; display:flex; align-items:center; justify-content:center; margin:0 auto 10px; }
        .why-label { font-family:var(--fd); font-size:13px; font-weight:700; color:var(--txt); margin-bottom:5px; }
        .why-desc  { font-size:11.5px; color:var(--muted); line-height:1.6; }

        /* FINAL CTA */
        .fcta { background:linear-gradient(135deg,#1D4ED8,#3B82F6); border-radius:var(--rxl); padding:40px 44px; text-align:center; position:relative; overflow:hidden; box-shadow:var(--shlg); }
        .fcta::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top,rgba(255,255,255,.12),transparent 60%); }
        .fcta-title { font-family:var(--fd); font-size:clamp(18px,2.5vw,28px); font-weight:800; color:#fff; margin-bottom:8px; }
        .fcta-sub   { font-size:14px; color:rgba(255,255,255,.8); margin-bottom:24px; line-height:1.65; }
        .fcta-btns  { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .fcta-btn-w { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; border-radius:var(--rmd); background:#fff; color:#1D4ED8; font-family:var(--fd); font-size:14px; font-weight:800; text-decoration:none; box-shadow:0 4px 14px rgba(0,0,0,.14); transition:transform .15s; }
        .fcta-btn-w:hover { transform:translateY(-2px); }
        .fcta-btn-o { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; border-radius:var(--rmd); background:rgba(255,255,255,.15); color:#fff; font-family:var(--fd); font-size:14px; font-weight:700; text-decoration:none; border:1.5px solid rgba(255,255,255,.35); transition:transform .15s,background .15s; }
        .fcta-btn-o:hover { transform:translateY(-2px); background:rgba(255,255,255,.22); }

        /* SEC HEADING */
        .sec-h { font-family:var(--fd); font-size:20px; font-weight:800; color:var(--txt); margin-bottom:20px; }
        .sec-h span { display:block; font-size:13px; font-weight:500; color:var(--muted); margin-top:3px; }

        @media(max-width:1024px) {
          .why-grid { grid-template-columns:repeat(3,1fr); }
          .wrap { padding:0 24px; }
        }
        @media(max-width:768px) {
          .cards3 { grid-template-columns:1fr; }
          .split  { grid-template-columns:1fr; }
          .why-grid { grid-template-columns:1fr 1fr; }
          .banner { flex-direction:column; padding:24px 22px; }
          .fcta   { padding:28px 22px; }
          .hero-btns { flex-direction:column; align-items:stretch; }
          .btn { justify-content:center; }
          .blob { display:none; }
        }
        @media(max-width:540px) {
          .wrap { padding:0 16px; }
          .fg2  { grid-template-columns:1fr; }
          .why-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="cp">
        <div className="blob blob1" /><div className="blob blob2" /><div className="dots" />

        {/* 1. HERO */}
        <div className="wrap sec">
          <div className="hero">
            <span className="eyebrow"><span className="edot" /> Expert Guidance</span>
            <h1 className="h1">Contact Us –<br /><span className="grad">Get Expert Admission Guidance</span></h1>
            <p className="sub">Have questions about courses or admissions? Our experienced counsellors are here to help you every step of the way.</p>
            <div className="hero-btns">
              <a href={`tel:${PHONE}`} className="btn btn-blue"><Phone size={15} strokeWidth={2} /> Call Now</a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-green"><MessageCircle size={15} strokeWidth={2} /> WhatsApp Now</a>
            </div>
          </div>
        </div>

        {/* 2. CONTACT CARDS */}
        <div className="wrap sec">
          <div className="cards3">
            {/* Call */}
            <div className="ccard">
              <div className="ccard-icon" style={{ background: "#DBEAFE" }}><Phone size={22} color="#1D4ED8" strokeWidth={2} /></div>
              <p className="ccard-label">Call Us</p>
              <p className="ccard-val">{PHONE}</p>
              <a href={`tel:${PHONE}`} className="btn btn-blue ccard-btn" style={{ fontSize: 13, padding: "9px 18px" }}><Phone size={13} strokeWidth={2} /> Call Now</a>
            </div>
            {/* WhatsApp */}
            <div className="ccard">
              <div className="ccard-icon" style={{ background: "#D1FAE5" }}><MessageCircle size={22} color="#047857" strokeWidth={2} /></div>
              <p className="ccard-label">WhatsApp Support</p>
              <p className="ccard-sub">Get instant answers to your admission questions.</p>
              <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn btn-green ccard-btn" style={{ fontSize: 13, padding: "9px 18px" }}><MessageCircle size={13} strokeWidth={2} /> WhatsApp Now</a>
            </div>
            {/* Email */}
            <div className="ccard">
              <div className="ccard-icon" style={{ background: "#EDE9FE" }}><Mail size={22} color="#7C3AED" strokeWidth={2} /></div>
              <p className="ccard-label">Email</p>
              <p className="ccard-val" style={{ fontSize: 14 }}>{EMAIL}</p>
              <a href={`mailto:${EMAIL}`} className="btn ccard-btn" style={{ background: "linear-gradient(135deg,#7C3AED,#8B5CF6)", boxShadow: "0 4px 14px rgba(124,58,237,.26)", fontSize: 13, padding: "9px 18px" }}><Mail size={13} strokeWidth={2} /> Send Email</a>
            </div>
          </div>
        </div>

        {/* 3 + 4. LOCATIONS + FORM */}
        <div className="wrap sec">
          <div className="split">
            {/* Locations */}
            <div>
              <h2 className="sec-h">Our Offices <span>Visit us at either location</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="loc-card">
                  <p className="loc-title">Patna Office</p>
                  <p className="loc-addr"><MapPin size={15} color="#1D4ED8" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />Bhagwat Nagar, Near NRL Petrol Pump, New Bypass, Patna – 800026</p>
                  <iframe
                    className="loc-map"
                    src="https://www.google.com/maps?q=Bhagwat+Nagar,+Near+NRL+Petrol+Pump,+New+Bypass,+Patna,+Bihar+800026&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Patna Office Location"
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bhagwat+Nagar,+Near+NRL+Petrol+Pump,+New+Bypass,+Patna,+Bihar+800026"
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--fd)", fontSize: 12.5, fontWeight: 700, color: "#1D4ED8", textDecoration: "none", marginTop: 2 }}
                  >
                    Get Directions →
                  </a>
                </div>
                <div className="loc-card">
                  <p className="loc-title">Sheikhpura Office</p>
                  <p className="loc-addr"><MapPin size={15} color="#7C3AED" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />Aditya Chowk, MAFO, Sheikhpura – 811102</p>
                  <iframe
                    className="loc-map"
                    src="https://www.google.com/maps?q=Aditya+Chowk,+MAFO,+Sheikhpura,+Bihar+811102&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sheikhpura Office Location"
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Aditya+Chowk,+MAFO,+Sheikhpura,+Bihar+811102"
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--fd)", fontSize: 12.5, fontWeight: 700, color: "#7C3AED", textDecoration: "none", marginTop: 2 }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Form + Hours stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Quick Form */}
              <div>
                <h2 className="sec-h">Free Counselling <span>We'll WhatsApp you back within 10–15 minutes</span></h2>
                <div className="form-card">
                  <div className="form-head">
                    <p className="form-head-tag">Quick Enquiry</p>
                    <p className="form-head-title">Get Free Admission Counselling</p>
                  </div>
                  <div className="form-body">
                    {done ? (
                      <div className="fsuccess">
                        <div className="sring"><CheckCircle2 size={28} color="#047857" strokeWidth={2} /></div>
                        <p className="stitle">Sent on WhatsApp!</p>
                        <p className="ssub">If a new WhatsApp tab didn't open, your popup blocker may have stopped it — tap the button below to send it manually.</p>
                        <button
                          type="button"
                          className="sretry"
                          onClick={() => {
                            const message =
                              `Hi, I want admission guidance.\n\n` +
                              `*New Enquiry from Website*\n` +
                              `Name: ${form.name.trim()}\n` +
                              `Mobile: ${form.mobile.trim()}\n` +
                              `Course Interest: ${form.course}\n` +
                              `City: ${form.city.trim()}`;
                            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
                          }}
                        >
                          Open WhatsApp again
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={submit} noValidate>
                        <div className="fg2">
                          <div className="ff">
                            <label className="fl">Full Name <span>*</span></label>
                            <input className={`fi${errors.name ? " err" : ""}`} type="text" placeholder="Your name" value={form.name} onChange={e => set("name", e.target.value)} />
                            {errors.name && <p className="ferr">⚠ {errors.name}</p>}
                          </div>
                          <div className="ff">
                            <label className="fl">Mobile Number <span>*</span></label>
                            <input className={`fi${errors.mobile ? " err" : ""}`} type="tel" placeholder="10-digit" maxLength={10} value={form.mobile} onChange={e => set("mobile", e.target.value.replace(/\D/g, ""))} />
                            {errors.mobile && <p className="ferr">⚠ {errors.mobile}</p>}
                          </div>
                        </div>
                        <div className="fg2">
                          <div className="ff">
                            <label className="fl">Course Interest <span>*</span></label>
                            <select className={`fs${errors.course ? " err" : ""}`} value={form.course} onChange={e => set("course", e.target.value)}>
                              <option value="">Select</option>
                              {COURSES.map(c => <option key={c}>{c}</option>)}
                            </select>
                            {errors.course && <p className="ferr">⚠ {errors.course}</p>}
                          </div>
                          <div className="ff">
                            <label className="fl">City <span>*</span></label>
                            <input className={`fi${errors.city ? " err" : ""}`} type="text" placeholder="Your city" value={form.city} onChange={e => set("city", e.target.value)} />
                            {errors.city && <p className="ferr">⚠ {errors.city}</p>}
                          </div>
                        </div>
                        <button type="submit" className="fsub" disabled={loading}>
                          {loading ? <><div className="spin" /> Opening WhatsApp…</> : <><Send size={14} strokeWidth={2} /> Submit &amp; Send on WhatsApp</>}
                        </button>
                        <p className="trust-txt"><ShieldCheck size={12} color="#047857" strokeWidth={2} /> Your information is safe and used only for admission guidance.</p>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="sec-h" style={{ marginBottom: 14 }}>Working Hours <span>We're available 6 days a week</span></h2>
                <div className="hours-card">
                  <div className="hours-row">
                    <span className="hours-day">Monday – Saturday</span>
                    <span className="hours-time">10:00 AM – 6:00 PM</span>
                    <span className="hours-open">Open</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Sunday</span>
                    <span className="hours-time">By Appointment</span>
                    <span className="hours-appt">Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. BANNER */}
        <div className="wrap sec">
          <div className="banner">
            <div>
              <p className="banner-tag">Special Offer</p>
              <p className="banner-title">Free Education + Hostel + Food</p>
              <p className="banner-sub">Available for selected courses. Limited seats. Apply now.</p>
            </div>
            <Link href="/admission-process/apply-now" className="banner-btn">
              Apply Now <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* 7. WHY */}
        <div className="wrap sec">
          <h2 className="sec-h" style={{ textAlign: "center" }}>Why Contact Smart Edge?</h2>
          <div className="why-grid">
            {WHY.map(w => (
              <div className="why-card" key={w.label}>
                <div className="why-icon"><w.icon size={20} color="#1D4ED8" strokeWidth={2} /></div>
                <p className="why-label">{w.label}</p>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. FINAL CTA */}
        <div className="wrap">
          <div className="fcta">
            <p className="fcta-title">Ready to Start Your Career?</p>
            <p className="fcta-sub">Speak with our experts today and get personalised admission guidance.</p>
            <div className="fcta-btns">
              <Link href="/admission-process/get-free-counselling" className="fcta-btn-w"><MessageCircle size={15} strokeWidth={2} /> Get Free Counselling</Link>
              <Link href="/admission-process/apply-now" className="fcta-btn-o">Apply Now <ArrowRight size={15} strokeWidth={2.5} /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}