"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const PHONE     = "9576461623";
const WA_NUMBER = "919576461623";
const WA_MSG    = encodeURIComponent("Hi, I want admission guidance.");
const FB_LINK   = "https://www.facebook.com/share/197eiV4i4F/";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.86h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export default function FloatingButtons(): React.JSX.Element {
  return (
    <>
      <style>{`
        .fb-wrap {
          position: fixed; right: 18px; bottom: 22px; z-index: 998;
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
        }
        .fb-btn {
          position: relative; display: inline-flex; align-items: center; justify-content: center;
          width: 52px; height: 52px; border-radius: 50%; color: #fff; text-decoration: none;
          box-shadow: 0 6px 20px rgba(15,22,40,.22);
          transition: transform .18s, box-shadow .18s;
        }
        .fb-btn:hover { transform: translateY(-2px) scale(1.05); }
        .fb-wa   { background: linear-gradient(135deg,#22C35E,#15A24A); }
        .fb-call { background: linear-gradient(135deg,#1D4ED8,#3B82F6); }
        .fb-face { background: linear-gradient(135deg,#1877F2,#0E5FCB); }

        .fb-wa::before {
          content:''; position:absolute; inset:0; border-radius:50%;
          background:#22C35E; opacity:.55;
          animation: fbpulse 2.2s ease-out infinite; z-index:-1;
        }
        @keyframes fbpulse {
          0%   { transform: scale(1);   opacity:.55; }
          70%  { transform: scale(1.7); opacity:0;  }
          100% { transform: scale(1.7); opacity:0;  }
        }

        .fb-label {
          position: absolute; right: calc(100% + 12px); top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #0F1628; color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px; font-weight: 600;
          padding: 6px 12px; border-radius: 8px;
          white-space: nowrap; opacity: 0; pointer-events: none;
          transition: opacity .15s, transform .15s;
        }
        .fb-btn:hover .fb-label { opacity: 1; transform: translateY(-50%) translateX(0); }

        @media (max-width: 640px) {
          .fb-wrap { right: 14px; bottom: 18px; gap: 10px; }
          .fb-btn  { width: 48px; height: 48px; }
          .fb-label{ display: none; }
        }
      `}</style>

      <div className="fb-wrap">
        <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="fb-btn fb-face" aria-label="Visit our Facebook page">
          <FacebookIcon size={20} />
          <span className="fb-label">Facebook</span>
        </a>

        <a href={`tel:${PHONE}`} className="fb-btn fb-call" aria-label={`Call ${PHONE}`}>
          <Phone size={21} strokeWidth={2} />
          <span className="fb-label">Call {PHONE}</span>
        </a>
        <a

        
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank" rel="noopener noreferrer"
          className="fb-btn fb-wa"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} strokeWidth={2} />
          <span className="fb-label">WhatsApp</span>
        </a>
      </div>
    </>
  );
}