'use client';

import React from 'react';

interface CurvedImageProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: '18rem', md: '22rem', lg: '26rem' };

const CurvedImage: React.FC<CurvedImageProps> = ({
  src,
  alt = 'Student',
  size = 'lg',
}) => {
  return (
    <>
      <style>{`
        @keyframes ci-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(1.2deg); }
        }
        @keyframes ci-morph {
          0%, 100% { border-radius: 58% 42% 38% 62% / 60% 36% 64% 40%; }
          33%       { border-radius: 44% 56% 62% 38% / 52% 44% 56% 48%; }
          66%       { border-radius: 62% 38% 44% 56% / 38% 62% 40% 60%; }
        }
        @keyframes ci-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ci-pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.35); opacity: .75; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ci-wrap, .ci-shape, .ci-ring-spin { animation: none !important; }
        }

        /* outer floating wrapper */
        .ci-wrap {
          position: relative;
          width: 100%;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
          animation: ci-float 7s ease-in-out infinite;
        }

        /* dashed spinning ring */
        .ci-ring-spin {
          position: absolute;
          inset: -18px;
          border: 2px dashed #BFDBFE;
          border-radius: 58% 42% 38% 62% / 60% 36% 64% 40%;
          animation: ci-spin 28s linear infinite;
          opacity: .7;
        }

        /* solid inner ring */
        .ci-ring-solid {
          position: absolute;
          inset: -8px;
          border: 1.5px solid #DBEAFE;
          border-radius: 58% 42% 38% 62% / 60% 36% 64% 40%;
          opacity: .55;
        }

        /* morphing image container */
        .ci-shape {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 58% 42% 38% 62% / 60% 36% 64% 40%;
          animation: ci-morph 11s ease-in-out infinite;
          box-shadow:
            0 20px 48px rgba(37, 99, 235, .16),
            0  8px 20px rgba(37, 99, 235, .10),
            0  2px  6px rgba(0, 0, 0, .06);
        }
        .ci-shape img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }

        /* placeholder */
        .ci-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 45%, #C7D2FE 100%);
          display: flex; align-items: center; justify-content: center;
        }

        /* accent dots */
        .ci-dot {
          position: absolute;
          border-radius: 9999px;
          animation: ci-pulse-dot 2.8s ease-in-out infinite;
        }
        /* amber — top right */
        .ci-dot-1 {
          width: 18px; height: 18px;
          top: 2%; right: 10%;
          background: linear-gradient(135deg, #F59E0B, #FBBF24);
          box-shadow: 0 3px 10px rgba(245,158,11,.40);
          animation-delay: 0s;
        }
        /* blue — bottom left */
        .ci-dot-2 {
          width: 14px; height: 14px;
          bottom: 8%; left: -2%;
          background: linear-gradient(135deg, #2563EB, #60A5FA);
          box-shadow: 0 3px 10px rgba(37,99,235,.35);
          animation-delay: .9s;
        }
        /* green — mid left */
        .ci-dot-3 {
          width: 10px; height: 10px;
          top: 40%; left: -5%;
          background: linear-gradient(135deg, #059669, #34D399);
          box-shadow: 0 2px 8px rgba(5,150,105,.35);
          animation-delay: 1.6s;
        }
        /* indigo — bottom right */
        .ci-dot-4 {
          width: 12px; height: 12px;
          bottom: 14%; right: -2%;
          background: linear-gradient(135deg, #6366F1, #A5B4FC);
          box-shadow: 0 2px 8px rgba(99,102,241,.35);
          animation-delay: .4s;
        }

        /* badge: "100% Verified" */
        .ci-badge {
          position: absolute;
          bottom: -6%; left: 50%; transform: translateX(-50%);
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 9999px;
          background: #fff;
          border: 1.5px solid #DBEAFE;
          box-shadow: 0 6px 20px rgba(37,99,235,.12);
          white-space: nowrap;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          font-size: 12px; font-weight: 700;
          color: #1D4ED8;
          letter-spacing: .02em;
        }
        .ci-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #059669;
          box-shadow: 0 0 0 2px #D1FAE5;
        }

        /* corner accent card — top left */
        .ci-card {
          position: absolute;
          top: 4%; left: -8%;
          display: flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 12px;
          background: #fff;
          border: 1px solid #E0F2FE;
          box-shadow: 0 6px 20px rgba(14,165,233,.12);
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        .ci-card-icon {
          width: 28px; height: 28px; border-radius: 8px;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
        }
        .ci-card-title {
          font-size: 11px; font-weight: 700; color: #0F172A; line-height: 1;
          margin-bottom: 2px;
        }
        .ci-card-sub {
          font-size: 10px; color: #64748B; line-height: 1;
        }
      `}</style>

      <div className="ci-wrap" style={{ maxWidth: sizeMap[size] }}>

        {/* rings */}
        <div className="ci-ring-spin" />
        <div className="ci-ring-solid" />

        {/* image / placeholder */}
        <div className="ci-shape">
          {src ? (
            <img src={src} alt={alt} />
          ) : (
            <div className="ci-placeholder">
              {/* inline SVG student illustration */}
              <svg viewBox="0 0 320 360" width="85%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EFF6FF"/>
                    <stop offset="100%" stopColor="#C7D2FE"/>
                  </linearGradient>
                  <linearGradient id="pbody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#1D4ED8"/>
                  </linearGradient>
                </defs>
                {/* glow */}
                <ellipse cx="160" cy="230" rx="110" ry="110" fill="#BFDBFE" opacity=".35"/>
                {/* shadow */}
                <ellipse cx="160" cy="338" rx="80" ry="12" fill="#818CF8" opacity=".2"/>
                {/* legs */}
                <rect x="140" y="268" width="16" height="64" rx="8" fill="#1E3A8A"/>
                <rect x="164" y="268" width="16" height="64" rx="8" fill="#1E3A8A"/>
                <ellipse cx="148" cy="332" rx="14" ry="6" fill="#1E3A8A"/>
                <ellipse cx="172" cy="332" rx="14" ry="6" fill="#1E3A8A"/>
                {/* torso */}
                <rect x="128" y="188" width="64" height="88" rx="12" fill="url(#pbody)"/>
                <rect x="153" y="192" width="14" height="28" rx="5" fill="#fff" opacity=".85"/>
                <rect x="156" y="198" width="8" height="18" rx="3" fill="#F59E0B" opacity=".9"/>
                {/* lapel */}
                <path d="M 160 194 L 149 212 L 160 226 L 171 212 Z" fill="#3B82F6" opacity=".4"/>
                {/* arms */}
                <rect x="100" y="194" width="30" height="14" rx="7" fill="#2563EB"/>
                <rect x="96" y="202" width="14" height="52" rx="7" fill="#2563EB"/>
                <rect x="190" y="188" width="30" height="14" rx="7" fill="#2563EB"/>
                <rect x="209" y="178" width="14" height="46" rx="7" fill="#2563EB"/>
                {/* book */}
                <rect x="78" y="245" width="32" height="42" rx="5" fill="#F59E0B"/>
                <rect x="83" y="250" width="22" height="32" rx="3" fill="#FDE68A"/>
                <line x1="88" y1="256" x2="100" y2="256" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="88" y1="262" x2="100" y2="262" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="88" y1="268" x2="96"  y2="268" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
                {/* scroll */}
                <rect x="211" y="148" width="30" height="22" rx="5" fill="#fff" stroke="#CBD5E1" strokeWidth="1.2"/>
                <line x1="218" y1="155" x2="234" y2="155" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="218" y1="161" x2="230" y2="161" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="238" cy="156" r="4.5" fill="#F59E0B"/>
                {/* head */}
                <circle cx="160" cy="162" r="30" fill="#FDE68A"/>
                {/* hair */}
                <path d="M 132 158 Q 135 132 160 130 Q 185 132 188 158 Q 181 146 160 144 Q 139 146 132 158 Z" fill="#1E3A8A"/>
                {/* eyes */}
                <ellipse cx="150" cy="162" rx="3.6" ry="4" fill="#1E3A8A"/>
                <ellipse cx="170" cy="162" rx="3.6" ry="4" fill="#1E3A8A"/>
                <circle cx="151.4" cy="161" r="1.3" fill="#fff"/>
                <circle cx="171.4" cy="161" r="1.3" fill="#fff"/>
                {/* smile */}
                <path d="M 151 172 Q 160 180 169 172" stroke="#D97706" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                {/* cap */}
                <rect x="141" y="132" width="38" height="7" rx="3" fill="#1E3A8A"/>
                <polygon points="160,114 184,132 136,132" fill="#1E3A8A"/>
                <line x1="184" y1="132" x2="191" y2="147" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="191" cy="150" r="3.5" fill="#F59E0B"/>
                {/* sparkles */}
                <g opacity=".65">
                  <line x1="52"  y1="140" x2="52"  y2="152" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="46"  y1="146" x2="58"  y2="146" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
                </g>
                <g opacity=".65">
                  <line x1="262" y1="140" x2="262" y2="152" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="256" y1="146" x2="268" y2="146" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
                </g>
                <circle cx="56"  cy="240" r="5" fill="#059669" opacity=".5"/>
                <circle cx="264" cy="220" r="4" fill="#6366F1" opacity=".5"/>
              </svg>
            </div>
          )}
        </div>

        {/* accent dots */}
        <span className="ci-dot ci-dot-1" />
        <span className="ci-dot ci-dot-2" />
        <span className="ci-dot ci-dot-3" />
        <span className="ci-dot ci-dot-4" />


      

      </div>
    </>
  );
};

export default CurvedImage;