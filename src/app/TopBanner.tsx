"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Slide data — swap these for your real banner images ─────────────── */
type Slide = { src: string; alt: string; href?: string };

const SLIDES: Slide[] = [
  { src: "/banner1.png", alt: "Admissions open — UGC, AICTE, NCTE approved courses", href: "/admission-process" },
  { src: "/banner2.png", alt: "Free career counselling for every student",            href: "/" },
  { src: "/banner3.png", alt: "Hostel and food included for selected courses",        href: "/" },
];

const AUTOPLAY_MS = 4500;

/* ════════════════════════════════════════════════════════════════════ */
export default function TopBanner(): React.JSX.Element {
  const [index, setIndex]   = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const total  = SLIDES.length;

  const goTo = useCallback((i: number) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* Autoplay — plain interval, no animation involved */
  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  /* Touch swipe (mobile) */
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchX.current = null;
  };

  if (total === 0) return <></>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .tb {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #0F1628;
          isolation: isolate;
        }

        /* Aspect-ratio box — keeps layout stable across breakpoints, no CLS */
        .tb-ratio {
          position: relative;
          width: 100%;
          aspect-ratio: 29 / 7;
        }
        @media (max-width: 860px)  { .tb-ratio { aspect-ratio: 29 / 7;  } }
        @media (max-width: 520px)  { .tb-ratio { aspect-ratio: 4 / 3;   } }

        .tb-track {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
        }

        /* All slides stacked exactly on top of each other.
           No transition — only the active one is shown/visible. */
        .tb-slide {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          opacity: 0;
          z-index: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .tb-slide.active {
          opacity: 1;
          z-index: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .tb-slide img { object-fit: cover; }

        .tb-link { position: absolute; inset: 0; display: block; }

        /* Subtle bottom gradient so dots/arrows stay legible on any image */
        .tb-shade {
          position: absolute; left: 0; right: 0; bottom: 0; height: 64px;
          background: linear-gradient(to top, rgba(15,22,40,.45), transparent);
          pointer-events: none; z-index: 2;
        }

        /* Arrows */
        .tb-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 9999px;
          background: rgba(15,22,40,.38);
          -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,.18);
          color: #fff; display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 3;
          transition: background .15s, transform .15s;
        }
        .tb-arrow:hover { background: rgba(29,78,216,.85); transform: translateY(-50%) scale(1.06); }
        .tb-arrow.left  { left: 14px; }
        .tb-arrow.right { right: 14px; }
        @media (max-width: 640px) { .tb-arrow { width: 34px; height: 34px; } }

        /* Dots */
        .tb-dots {
          position: absolute; left: 0; right: 0; bottom: 14px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          z-index: 3;
        }
        .tb-dot {
          width: 8px; height: 8px; border-radius: 9999px;
          background: rgba(255,255,255,.45);
          border: none; cursor: pointer; padding: 0;
        }
        .tb-dot.active { width: 22px; background: #fff; }
      `}</style>

      <div
        className="tb"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Promotional banner"
      >
        <div className="tb-ratio">
          <div className="tb-track">
            {SLIDES.map((slide, i) => {
              const content = (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  style={{ objectFit: "cover" }}
                />
              );
              return (
                <div className={`tb-slide${i === index ? " active" : ""}`} key={i} aria-hidden={i !== index}>
                  {slide.href ? (
                    <Link href={slide.href} className="tb-link" tabIndex={i === index ? 0 : -1}>
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          <div className="tb-shade" />

          {total > 1 && (
            <>
              <button className="tb-arrow left" onClick={prev} aria-label="Previous slide">
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button className="tb-arrow right" onClick={next} aria-label="Next slide">
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>

              <div className="tb-dots">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    className={`tb-dot${i === index ? " active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}