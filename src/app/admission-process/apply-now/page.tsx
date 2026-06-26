"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck,
  User, BookOpen, Layers, MapPin, Settings2, Send,
} from "lucide-react";

/* ─────────────────────── OPTIONS ─────────────────────── */
const QUALIFICATIONS   = ["10th Pass","12th Pass","Diploma","Pursuing Graduation","Graduate","Post Graduate","Other"];
const STATUSES         = ["Studying","Appeared / Result Awaited","Passed Out","Working Professional","Other"];
const STREAMS_IN       = ["Science (PCM)","Science (PCB)","Commerce","Arts / Humanities","Engineering","Management","Law","Medical","Design","Other"];
const STREAMS_COURSE   = ["Engineering & Technology","Management & MBA","Medical & Pharmacy","Law","Design & Architecture","Arts & Science","Commerce & Finance","Education","Other"];
const COURSES          = ["B.Tech / B.E.","MBA / PGDM","BBA","B.Com","B.Sc","BA","LLB","MBBS / BDS","B.Pharm","BCA","MCA","M.Tech","M.Sc","MA","Ph.D","Diploma / Certificate","Other"];
const LEVELS           = ["UG (Under Graduate)","PG (Post Graduate)","Diploma","Ph.D / Doctorate","Other"];
const TYPES            = ["Full Time","Part Time","Distance / Online","Correspondence","Other"];
const YEARS            = ["2024","2025","2026","2027"];
const STATES_IN        = ["Andhra Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other"];
const BUDGETS          = ["Under ₹50,000","₹50,000 – ₹1 Lakh","₹1 Lakh – ₹2 Lakh","₹2 Lakh – ₹5 Lakh","₹5 Lakh – ₹10 Lakh","Above ₹10 Lakh","Not Decided"];
const PAYMENT_PREFS    = ["One-time Payment","EMI / Installments","Education Loan","Scholarship Supported","Not Decided"];
const CAREER_GOALS     = ["Higher Education Abroad","Government / PSU Jobs","Private Sector Career","Entrepreneurship / Startup","Research & Academia","Not Decided / Exploring"];
const GENDERS          = ["Male","Female","Other","Prefer not to say"];

interface AppForm {
  /* Personal */
  fullName: string; mobile: string; altMobile: string; email: string; gender: string;
  /* Educational */
  qualification: string; status: string; percentage: string; stream: string;
  /* Course */
  courseStream: string; course: string; level: string; type: string; preferredYear: string;
  /* Location */
  city: string; state: string; studyLocation: string;
  /* Preferences */
  budget: string; payment: string; goal: string; hostel: string; scholarship: string;
  /* Notes */
  notes: string;
}

const SECTIONS = [
  { id: "personal",   label: "Personal",    icon: User },
  { id: "education",  label: "Education",   icon: BookOpen },
  { id: "course",     label: "Course",      icon: Layers },
  { id: "location",   label: "Location",    icon: MapPin },
  { id: "prefs",      label: "Preferences", icon: Settings2 },
];

export default function ApplyNowPage(): React.JSX.Element {
  const [step,      setStep]      = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [errors,    setErrors]    = useState<Partial<AppForm>>({});

  const [form, setForm] = useState<AppForm>({
    fullName:"", mobile:"", altMobile:"", email:"", gender:"",
    qualification:"", status:"", percentage:"", stream:"",
    courseStream:"", course:"", level:"", type:"", preferredYear:"",
    city:"", state:"", studyLocation:"",
    budget:"", payment:"", goal:"", hostel:"", scholarship:"",
    notes:"",
  });

  const set = (k: keyof AppForm, v: string) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const validateStep = (): boolean => {
    const e: Partial<AppForm> = {};
    if (step === 0) {
      if (!form.fullName.trim())  e.fullName = "Required";
      if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) e.mobile = "Enter valid 10-digit number";
      if (!form.gender)           e.gender   = "Required";
    }
    if (step === 1) {
      if (!form.qualification)    e.qualification = "Required";
      if (!form.status)           e.status        = "Required";
      if (!form.stream)           e.stream        = "Required";
    }
    if (step === 2) {
      if (!form.course)           e.course = "Required";
      if (!form.level)            e.level  = "Required";
      if (!form.type)             e.type   = "Required";
    }
    if (step === 3) {
      if (!form.city.trim())      e.city  = "Required";
      if (!form.state)            e.state = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep(s => s + 1); };
  const back = () => { setErrors({}); setStep(s => s - 1); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  /* ── helpers ── */
  const Field = ({ label, req, err, children }: { label: string; req?: boolean; err?: string; children: React.ReactNode }) => (
    <div className="an-field">
      <label className="an-label">{label}{req && <span className="an-req">*</span>}</label>
      {children}
      {err && <p className="an-err">⚠ {err}</p>}
    </div>
  );

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & { err?: boolean }) => {
    const { err, ...rest } = props;
    return <input className={`an-input${err ? " err" : ""}`} {...rest} />;
  };

  const Select = ({ err, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { err?: boolean }) => (
    <select className={`an-select${err ? " err" : ""}`} {...props}>{children}</select>
  );

  const RadioGroup = ({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="an-radio-group">
      {options.map(o => (
        <label key={o} className={`an-radio-label${value === o ? " selected" : ""}`}>
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} />
          {o}
        </label>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --c-bg:#F8FAFF; --c-surface:#FFFFFF; --c-border:#E4E7F0;
          --c-text:#0F1628; --c-muted:#64748B; --c-error:#DC2626;
          --f-display:'Plus Jakarta Sans',sans-serif; --f-body:'Inter',sans-serif;
          --r-sm:8px; --r-md:12px; --r-lg:16px; --r-xl:24px; --r-full:9999px;
          --sh-sm:0 1px 3px rgba(15,22,40,.06); --sh-md:0 4px 16px rgba(15,22,40,.08);
          --sh-lg:0 12px 40px rgba(15,22,40,.10);
        }

        .an-page { position:relative; min-height:100vh; background:var(--c-bg); font-family:var(--f-body); overflow-x:hidden; padding:100px 40px 80px; }
        .an-blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px); }
        .an-blob-1 { width:460px; height:460px; top:-100px; right:-120px; background:radial-gradient(circle,#DBEAFE,transparent 70%); opacity:.5; }
        .an-blob-2 { width:340px; height:340px; bottom:60px; left:-80px; background:radial-gradient(circle,#EDE9FE,transparent 70%); opacity:.4; }
        .an-dotgrid { position:absolute; inset:0; pointer-events:none; background-image:radial-gradient(circle,#CBD5E1 1px,transparent 1px); background-size:28px 28px; opacity:.22; }

        .an-wrap { position:relative; z-index:5; max-width:780px; margin:0 auto; }

        /* eyebrow */
        .an-eyebrow { display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:var(--r-full); background:linear-gradient(135deg,#EDE9FE,#F5F3FF); border:1px solid #C4B5FD; color:#5B21B6; font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; font-family:var(--f-display); margin-bottom:16px; }
        .an-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#7C3AED; animation:anPulse 1.4s ease-in-out infinite; }
        @keyframes anPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        .an-h1 { font-family:var(--f-display); font-size:clamp(22px,3vw,38px); font-weight:800; line-height:1.1; letter-spacing:-.02em; color:var(--c-text); margin-bottom:8px; }
        .an-h1-grad { background:linear-gradient(120deg,#1D4ED8,#7C3AED,#0EA5E9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .an-sub { font-size:14px; color:var(--c-muted); margin-bottom:32px; line-height:1.7; }

        /* stepper */
        .an-stepper { display:flex; align-items:center; gap:0; margin-bottom:32px; }
        .an-step-item { display:flex; align-items:center; flex:1; }
        .an-step-item:last-child { flex:none; }
        .an-step-circle { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-family:var(--f-display); font-size:13px; font-weight:700; transition:all .2s; }
        .an-step-circle.done { background:linear-gradient(135deg,#1D4ED8,#3B82F6); color:#fff; box-shadow:0 2px 8px rgba(37,99,235,.30); }
        .an-step-circle.active { background:linear-gradient(135deg,#1D4ED8,#3B82F6); color:#fff; box-shadow:0 4px 14px rgba(37,99,235,.35); }
        .an-step-circle.idle { background:#F1F5FE; color:var(--c-muted); border:1.5px solid var(--c-border); }
        .an-step-connector { flex:1; height:2px; background:linear-gradient(to right,#DBEAFE,#EDE9FE); margin:0 4px; }
        .an-step-connector.done { background:linear-gradient(to right,#3B82F6,#7C3AED); }
        .an-step-label { font-size:10px; font-weight:700; color:var(--c-muted); text-align:center; margin-top:5px; }
        .an-step-label.active { color:#1D4ED8; }
        .an-step-col { display:flex; flex-direction:column; align-items:center; }

        /* card */
        .an-card { background:var(--c-surface); border:1.5px solid var(--c-border); border-radius:var(--r-xl); box-shadow:var(--sh-lg); overflow:hidden; }
        .an-card-header { padding:22px 28px 18px; background:linear-gradient(135deg,#1D4ED8 0%,#3B82F6 100%); position:relative; overflow:hidden; }
        .an-card-header::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at top right,rgba(255,255,255,.14),transparent 60%); }
        .an-card-header-step { font-size:10.5px; font-weight:700; color:rgba(255,255,255,.65); letter-spacing:.09em; text-transform:uppercase; margin-bottom:3px; }
        .an-card-header-title { font-family:var(--f-display); font-size:18px; font-weight:800; color:#fff; }
        .an-card-header-sub { font-size:12.5px; color:rgba(255,255,255,.75); margin-top:4px; }
        .an-card-body { padding:26px 28px 28px; }

        /* fields */
        .an-section-label { font-size:10.5px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; color:var(--c-muted); margin:22px 0 12px; }
        .an-section-label:first-child { margin-top:0; }
        .an-field { margin-bottom:14px; }
        .an-label { display:block; font-size:12.5px; font-weight:700; color:var(--c-text); margin-bottom:5px; font-family:var(--f-display); }
        .an-req { color:#DC2626; margin-left:2px; }
        .an-input, .an-select, .an-textarea {
          width:100%; padding:10px 13px; border:1.5px solid var(--c-border); border-radius:var(--r-md);
          font-family:var(--f-body); font-size:13.5px; color:var(--c-text); background:#FAFBFF;
          outline:none; appearance:none; -webkit-appearance:none;
          transition:border-color .15s, box-shadow .15s;
        }
        .an-input::placeholder, .an-textarea::placeholder { color:#A0AABF; }
        .an-input:focus,.an-select:focus,.an-textarea:focus { border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,.12); background:#fff; }
        .an-input.err,.an-select.err { border-color:var(--c-error); box-shadow:0 0 0 3px rgba(220,38,38,.08); }
        .an-select { background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 10px center; padding-right:34px; cursor:pointer; }
        .an-textarea { resize:vertical; min-height:90px; }
        .an-err { font-size:11.5px; color:var(--c-error); margin-top:4px; }

        .an-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .an-grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }

        /* radio */
        .an-radio-group { display:flex; flex-wrap:wrap; gap:8px; margin-top:2px; }
        .an-radio-label { display:flex; align-items:center; gap:7px; padding:8px 14px; border-radius:var(--r-sm); border:1.5px solid var(--c-border); font-size:13px; color:var(--c-muted); cursor:pointer; transition:all .15s; background:#FAFBFF; font-family:var(--f-display); font-weight:600; }
        .an-radio-label input { display:none; }
        .an-radio-label.selected { border-color:#1D4ED8; background:#EFF6FF; color:#1D4ED8; }
        .an-radio-label:hover { border-color:#93C5FD; }

        /* nav buttons */
        .an-nav { display:flex; justify-content:space-between; align-items:center; margin-top:28px; padding-top:20px; border-top:1px solid var(--c-border); }
        .an-btn-back { display:inline-flex; align-items:center; gap:7px; padding:10px 18px; border-radius:var(--r-md); border:1.5px solid var(--c-border); background:var(--c-surface); color:var(--c-muted); font-family:var(--f-display); font-size:13.5px; font-weight:700; cursor:pointer; transition:all .15s; }
        .an-btn-back:hover { border-color:#93C5FD; color:#1D4ED8; }
        .an-btn-next { display:inline-flex; align-items:center; gap:8px; padding:11px 22px; border-radius:var(--r-md); background:linear-gradient(135deg,#1D4ED8,#3B82F6); color:#fff; font-family:var(--f-display); font-size:14px; font-weight:800; border:none; cursor:pointer; box-shadow:0 4px 14px rgba(37,99,235,.28); transition:transform .15s, box-shadow .15s; position:relative; overflow:hidden; }
        .an-btn-next::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.15),transparent 60%); }
        .an-btn-next:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 8px 22px rgba(37,99,235,.38); }
        .an-btn-next:disabled { opacity:.7; cursor:not-allowed; }
        .an-spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:anSpin .7s linear infinite; }
        @keyframes anSpin { to { transform:rotate(360deg); } }

        /* success */
        .an-success { padding:44px 28px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:16px; }
        .an-success-ring { width:72px; height:72px; border-radius:50%; background:linear-gradient(135deg,#D1FAE5,#A7F3D0); border:2px solid #6EE7B7; display:flex; align-items:center; justify-content:center; animation:anScaleIn .4s cubic-bezier(.34,1.56,.64,1) both; }
        @keyframes anScaleIn { from{opacity:0;transform:scale(.5)} to{opacity:1;transform:scale(1)} }
        .an-success-title { font-family:var(--f-display); font-size:22px; font-weight:800; color:var(--c-text); }
        .an-success-sub   { font-size:14px; color:var(--c-muted); line-height:1.75; max-width:380px; }
        .an-next-link { display:inline-flex; align-items:center; gap:7px; padding:11px 22px; border-radius:var(--r-md); background:linear-gradient(135deg,#1D4ED8,#3B82F6); color:#fff; font-family:var(--f-display); font-size:14px; font-weight:800; text-decoration:none; box-shadow:0 4px 14px rgba(37,99,235,.28); transition:transform .15s; }
        .an-next-link:hover { transform:translateY(-2px); }

        @media(max-width:700px) {
          .an-page { padding:80px 16px 60px; }
          .an-grid-2,.an-grid-3 { grid-template-columns:1fr; }
          .an-card-body,.an-card-header { padding-left:18px; padding-right:18px; }
          .an-blob { display:none; }
          .an-step-label { display:none; }
        }
      `}</style>

      <div className="an-page">
        <div className="an-blob an-blob-1" />
        <div className="an-blob an-blob-2" />
        <div className="an-dotgrid" />

        <div className="an-wrap">
          <span className="an-eyebrow">
            <span className="an-eyebrow-dot" />
            Step 2 of 5 · Admission
          </span>
          <h1 className="an-h1">
            <span className="an-h1-grad">Admission Application</span>
          </h1>
          <p className="an-sub">Complete your application below. Our team will review and confirm within 3–7 working days.</p>

          {/* STEPPER */}
          {!submitted && (
            <div className="an-stepper">
              {SECTIONS.map((s, i) => {
                const Icon = s.icon;
                const state = i < step ? "done" : i === step ? "active" : "idle";
                return (
                  <React.Fragment key={s.id}>
                    <div className="an-step-col">
                      <div className={`an-step-circle ${state}`}>
                        {i < step
                          ? <CheckCircle2 size={16} strokeWidth={2.5} />
                          : <Icon size={16} strokeWidth={2} />
                        }
                      </div>
                      <p className={`an-step-label${state === "active" ? " active" : ""}`}>{s.label}</p>
                    </div>
                    {i < SECTIONS.length - 1 && (
                      <div className={`an-step-connector${i < step ? " done" : ""}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div className="an-card">
            {submitted ? (
              /* SUCCESS */
              <div className="an-success">
                <div className="an-success-ring">
                  <CheckCircle2 size={36} color="#047857" strokeWidth={2} />
                </div>
                <p className="an-success-title">Application Submitted!</p>
                <p className="an-success-sub">
                  Thank you, <strong>{form.fullName}</strong>. Your application is under review.
                  We'll confirm your admission within 3–7 working days and send updates to <strong>{form.mobile}</strong>.
                </p>
                <Link href="/admission-process/upload-documents" className="an-next-link">
                  Upload Documents <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link href="/admission-process/application-status" style={{ fontSize: 13, color: "#1D4ED8", textDecoration: "none", fontWeight: 600 }}>
                  Track Application Status →
                </Link>
              </div>
            ) : (
              <form onSubmit={step < 4 ? (e) => { e.preventDefault(); next(); } : handleSubmit}>

                {/* STEP 0 — PERSONAL */}
                {step === 0 && (
                  <>
                    <div className="an-card-header">
                      <p className="an-card-header-step">Step 1 of 5 · Personal Information</p>
                      <p className="an-card-header-title">Tell us about yourself</p>
                      <p className="an-card-header-sub">Basic details to get started.</p>
                    </div>
                    <div className="an-card-body">
                      <Field label="Full Name" req err={errors.fullName}>
                        <Input err={!!errors.fullName} type="text" placeholder="e.g. Priya Mehta" value={form.fullName} onChange={e => set("fullName", e.target.value)} />
                      </Field>
                      <div className="an-grid-2">
                        <Field label="Mobile Number" req err={errors.mobile}>
                          <Input err={!!errors.mobile} type="tel" placeholder="10-digit number" maxLength={10} value={form.mobile} onChange={e => set("mobile", e.target.value.replace(/\D/g, ""))} />
                        </Field>
                        <Field label="Alternate Number">
                          <Input type="tel" placeholder="Optional" maxLength={10} value={form.altMobile} onChange={e => set("altMobile", e.target.value.replace(/\D/g, ""))} />
                        </Field>
                      </div>
                      <Field label="Email Address">
                        <Input type="email" placeholder="Optional" value={form.email} onChange={e => set("email", e.target.value)} />
                      </Field>
                      <Field label="Gender" req err={errors.gender}>
                        <RadioGroup name="gender" options={GENDERS} value={form.gender} onChange={v => set("gender", v)} />
                      </Field>
                    </div>
                  </>
                )}

                {/* STEP 1 — EDUCATION */}
                {step === 1 && (
                  <>
                    <div className="an-card-header">
                      <p className="an-card-header-step">Step 2 of 5 · Educational Details</p>
                      <p className="an-card-header-title">Your educational background</p>
                      <p className="an-card-header-sub">We'll match courses based on your qualification.</p>
                    </div>
                    <div className="an-card-body">
                      <div className="an-grid-2">
                        <Field label="Highest Qualification" req err={errors.qualification}>
                          <Select err={!!errors.qualification} value={form.qualification} onChange={e => set("qualification", e.target.value)}>
                            <option value="">Select</option>
                            {QUALIFICATIONS.map(q => <option key={q}>{q}</option>)}
                          </Select>
                        </Field>
                        <Field label="Current Status" req err={errors.status}>
                          <Select err={!!errors.status} value={form.status} onChange={e => set("status", e.target.value)}>
                            <option value="">Select</option>
                            {STATUSES.map(s => <option key={s}>{s}</option>)}
                          </Select>
                        </Field>
                      </div>
                      <div className="an-grid-2">
                        <Field label="Percentage / CGPA">
                          <Input type="text" placeholder="e.g. 78% or 8.2 CGPA" value={form.percentage} onChange={e => set("percentage", e.target.value)} />
                        </Field>
                        <Field label="Stream" req err={errors.stream}>
                          <Select err={!!errors.stream} value={form.stream} onChange={e => set("stream", e.target.value)}>
                            <option value="">Select stream</option>
                            {STREAMS_IN.map(s => <option key={s}>{s}</option>)}
                          </Select>
                        </Field>
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 — COURSE */}
                {step === 2 && (
                  <>
                    <div className="an-card-header">
                      <p className="an-card-header-step">Step 3 of 5 · Course Details</p>
                      <p className="an-card-header-title">What do you want to study?</p>
                      <p className="an-card-header-sub">Helps us shortlist the best colleges.</p>
                    </div>
                    <div className="an-card-body">
                      <div className="an-grid-2">
                        <Field label="Stream of Interest">
                          <Select value={form.courseStream} onChange={e => set("courseStream", e.target.value)}>
                            <option value="">Select</option>
                            {STREAMS_COURSE.map(s => <option key={s}>{s}</option>)}
                          </Select>
                        </Field>
                        <Field label="Course" req err={errors.course}>
                          <Select err={!!errors.course} value={form.course} onChange={e => set("course", e.target.value)}>
                            <option value="">Select</option>
                            {COURSES.map(c => <option key={c}>{c}</option>)}
                          </Select>
                        </Field>
                      </div>
                      <div className="an-grid-3">
                        <Field label="Course Level" req err={errors.level}>
                          <Select err={!!errors.level} value={form.level} onChange={e => set("level", e.target.value)}>
                            <option value="">Select</option>
                            {LEVELS.map(l => <option key={l}>{l}</option>)}
                          </Select>
                        </Field>
                        <Field label="Course Type" req err={errors.type}>
                          <Select err={!!errors.type} value={form.type} onChange={e => set("type", e.target.value)}>
                            <option value="">Select</option>
                            {TYPES.map(t => <option key={t}>{t}</option>)}
                          </Select>
                        </Field>
                        <Field label="Preferred Year">
                          <Select value={form.preferredYear} onChange={e => set("preferredYear", e.target.value)}>
                            <option value="">Select</option>
                            {YEARS.map(y => <option key={y}>{y}</option>)}
                          </Select>
                        </Field>
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 3 — LOCATION */}
                {step === 3 && (
                  <>
                    <div className="an-card-header">
                      <p className="an-card-header-step">Step 4 of 5 · Location</p>
                      <p className="an-card-header-title">Where are you located?</p>
                      <p className="an-card-header-sub">We'll find colleges near your preferred study area.</p>
                    </div>
                    <div className="an-card-body">
                      <div className="an-grid-2">
                        <Field label="Your City" req err={errors.city}>
                          <Input err={!!errors.city} type="text" placeholder="e.g. Pune" value={form.city} onChange={e => set("city", e.target.value)} />
                        </Field>
                        <Field label="Your State" req err={errors.state}>
                          <Select err={!!errors.state} value={form.state} onChange={e => set("state", e.target.value)}>
                            <option value="">Select state</option>
                            {STATES_IN.map(s => <option key={s}>{s}</option>)}
                          </Select>
                        </Field>
                      </div>
                      <Field label="Preferred Study Location">
                        <Input type="text" placeholder="e.g. Mumbai, Pune, Bangalore — or Same City" value={form.studyLocation} onChange={e => set("studyLocation", e.target.value)} />
                      </Field>
                    </div>
                  </>
                )}

                {/* STEP 4 — PREFERENCES */}
                {step === 4 && (
                  <>
                    <div className="an-card-header">
                      <p className="an-card-header-step">Step 5 of 5 · Preferences</p>
                      <p className="an-card-header-title">Personalise your admission</p>
                      <p className="an-card-header-sub">Helps us find the best-fit options for you.</p>
                    </div>
                    <div className="an-card-body">
                      <div className="an-grid-2">
                        <Field label="Budget Range">
                          <Select value={form.budget} onChange={e => set("budget", e.target.value)}>
                            <option value="">Select</option>
                            {BUDGETS.map(b => <option key={b}>{b}</option>)}
                          </Select>
                        </Field>
                        <Field label="Payment Preference">
                          <Select value={form.payment} onChange={e => set("payment", e.target.value)}>
                            <option value="">Select</option>
                            {PAYMENT_PREFS.map(p => <option key={p}>{p}</option>)}
                          </Select>
                        </Field>
                      </div>
                      <Field label="Career Goal">
                        <Select value={form.goal} onChange={e => set("goal", e.target.value)}>
                          <option value="">Select</option>
                          {CAREER_GOALS.map(g => <option key={g}>{g}</option>)}
                        </Select>
                      </Field>
                      <div className="an-grid-2">
                        <Field label="Hostel Required?">
                          <RadioGroup name="hostel" options={["Yes","No","Maybe"]} value={form.hostel} onChange={v => set("hostel", v)} />
                        </Field>
                        <Field label="Scholarship Required?">
                          <RadioGroup name="scholarship" options={["Yes","No","If Available"]} value={form.scholarship} onChange={v => set("scholarship", v)} />
                        </Field>
                      </div>
                      <Field label="Additional Notes">
                        <textarea className="an-textarea" placeholder="Any special requirements, queries, or preferences…" value={form.notes} onChange={e => set("notes", e.target.value)} />
                      </Field>
                    </div>
                  </>
                )}

                {/* NAV */}
                <div className="an-nav" style={{ padding: "20px 28px 24px", borderTop: "1px solid #E4E7F0" }}>
                  {step > 0 ? (
                    <button type="button" className="an-btn-back" onClick={back}>
                      <ArrowLeft size={15} strokeWidth={2} /> Back
                    </button>
                  ) : (
                    <Link href="/admission-process/get-free-counselling" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                      ← Free Counselling First
                    </Link>
                  )}

                  {step < 4 ? (
                    <button type="submit" className="an-btn-next">
                      Continue <ArrowRight size={15} strokeWidth={2.5} />
                    </button>
                  ) : (
                    <button type="submit" className="an-btn-next" disabled={loading}
                      onClick={handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>}
                    >
                      {loading
                        ? <><div className="an-spinner" /> Submitting…</>
                        : <><Send size={15} strokeWidth={2} /> Submit Application</>
                      }
                    </button>
                  )}
                </div>

              </form>
            )}
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <ShieldCheck size={13} color="#047857" strokeWidth={2} />
            Your information is encrypted and never shared with third parties.
          </p>
        </div>
      </div>
    </>
  );
}