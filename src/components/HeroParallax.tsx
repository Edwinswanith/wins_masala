"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   Scroll-phase copy
   Four phases crossfade as the user scrolls through the hero.
   The headline (WINS / Chilli / Powder) stays fixed throughout.
───────────────────────────────────────────────────────────────── */
const PHASES = [
  {
    badge:   "Since 1996",
    tagline: "Bold colour. Honest heat.",
    sub:     "Made for Tamil kitchens.",
    body:    "Bring depth, aroma, and a rich red finish to the dishes your home actually cooks.",
  },
  {
    badge:   "Deep red · Every time",
    tagline: "The colour your gravy depends on.",
    sub:     "Rich. Vivid. Consistent.",
    body:    "From sambars to stir fries — vivid red that makes food look as good as it tastes.",
  },
  {
    badge:   "Honest, sustained heat",
    tagline: "Heat that builds. Never burns out.",
    sub:     "Bold without overwhelming.",
    body:    "Not a sharp spike — a warmth that carries flavour forward. The kind Tamil cooking is built on.",
  },
  {
    badge:   "Ready for your kitchen",
    tagline: "Tamil-rooted. Since 1996.",
    sub:     "Order today. Taste the difference.",
    body:    "Join Tamil households that have trusted WINS for over three decades.",
  },
] as const;

/* Each phase has a [fadeIn, show, fadeOut, hidden] window in 0–1 scroll space.
   Overlapping windows create smooth crossfades between phases.            */
const WINDOWS = [
  [0.00, 0.04, 0.22, 0.30],
  [0.25, 0.35, 0.48, 0.55],
  [0.50, 0.60, 0.72, 0.78],
  [0.75, 0.83, 0.96, 1.00],
] as const;

function calcOpacity(
  p: number,
  [fadeIn, show, fadeOut, hidden]: readonly [number, number, number, number]
): number {
  if (p < fadeIn)   return 0;
  if (show <= fadeIn || p <= show) return fadeIn === show ? 1 : (p - fadeIn) / (show - fadeIn);
  if (p <= fadeOut) return 1;
  if (p < hidden)   return 1 - (p - fadeOut) / (hidden - fadeOut);
  return 0;
}

/* ─────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────── */
export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoReady, setVideoReady]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Detect reduced-motion preference */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Scroll → video scrub + progress state */
  useEffect(() => {
    if (prefersReducedMotion) return;
    const video     = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const onScroll = () => {
      const rect     = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total    = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      setScrollProgress(progress);
      if (video.readyState >= 2 && video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  /* Per-phase opacities and Y offsets */
  const phaseOpacities = WINDOWS.map((w) => calcOpacity(scrollProgress, w));

  return (
    <div ref={containerRef} className="relative" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0D0604]">

        {/* ── DECORATIVE BACKGROUND ── */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 80% at 75% 50%, rgba(193,56,14,0.28) 0%, rgba(139,26,26,0.14) 35%, rgba(13,6,4,0) 70%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 40% 40% at 80% 30%, rgba(212,168,67,0.10) 0%, transparent 60%)",
          }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            {([[900,200,140],[1050,380,90],[820,520,180],[1150,150,70],[980,650,120],
               [1280,440,60],[750,300,50],[1100,700,100],[1350,280,80]] as number[][])
              .map(([cx,cy,r],i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#C1380E"/>)}
          </svg>
          <svg className="absolute right-0 top-0 bottom-0 h-full opacity-[0.04] pointer-events-none"
            style={{ width: "55%" }} viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
            {Array.from({length:20},(_,i) => (
              <line key={i} x1={i*50-200} y1={0} x2={i*50+400} y2={900}
                stroke="#D4A843" strokeWidth="1"/>
            ))}
          </svg>
        </div>

        {/* ── VIDEO ── */}
        {!prefersReducedMotion ? (
          <video ref={videoRef} src="/video/wins-hero.webm" muted playsInline preload="auto"
            onLoadedMetadata={() => setVideoReady(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1s ease" }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/wins-hero-poster.webp)" }} />
        )}

        {/* ── GRADIENT OVERLAY ── */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(105deg, rgba(13,6,4,0.97) 0%, rgba(13,6,4,0.88) 35%, rgba(13,6,4,0.45) 58%, rgba(13,6,4,0.10) 100%)",
        }} />

        {/* ── LEFT COPY BLOCK ── */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">

          {/* ── FIXED: Brand headline — never changes ── */}
          <h1 className="font-display leading-[0.95] mb-8">
            <span className="block text-[clamp(3.5rem,8vw,7rem)] font-black text-[#FAF6F0]">
              WINS
            </span>
            <span className="block text-[clamp(2.2rem,5vw,4.2rem)] font-semibold"
              style={{ color: "#C1380E" }}>Chilli</span>
            <span className="block text-[clamp(2.2rem,5vw,4.2rem)] font-semibold"
              style={{ color: "#C1380E" }}>Powder</span>
          </h1>

          {/* ── DYNAMIC: Phase text stack ──
              All four phases are in the DOM simultaneously.
              Each fades in/out via its own opacity window.           */}
          <div className="relative" style={{ height: "9rem" }}>
            {PHASES.map((phase, i) => {
              const opacity = prefersReducedMotion
                ? i === 0 ? 1 : 0
                : phaseOpacities[i];
              const yOffset = prefersReducedMotion ? 0 : (1 - opacity) * 12;

              return (
                <div
                  key={i}
                  aria-hidden={opacity < 0.1}
                  className="absolute top-0 left-0 right-0"
                  style={{
                    opacity,
                    transform: `translateY(${yOffset}px)`,
                    transition: prefersReducedMotion ? "none" : "opacity 0.35s ease, transform 0.35s ease",
                    pointerEvents: opacity > 0.5 ? "auto" : "none",
                  }}
                >
                  {/* Badge row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-8 flex-shrink-0" style={{ background: "#D4A843" }} />
                    <span className="font-body text-xs tracking-[0.22em] uppercase"
                      style={{ color: "#D4A843" }}>
                      {phase.badge}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="font-display italic font-normal leading-snug mb-1"
                    style={{
                      fontSize: "clamp(1rem,1.8vw,1.35rem)",
                      color: "#EDD270",
                    }}>
                    {phase.tagline}
                  </p>

                  {/* Sub */}
                  <p className="font-body font-light leading-relaxed mb-3"
                    style={{
                      fontSize: "clamp(0.85rem,1.3vw,1rem)",
                      color: "rgba(250,246,240,0.65)",
                    }}>
                    {phase.sub}
                  </p>

                  {/* Body */}
                  <p className="font-body text-sm leading-relaxed max-w-sm"
                    style={{ color: "rgba(250,246,240,0.45)" }}>
                    {phase.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ── FIXED: CTAs — always present ── */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#cta"
              className="font-body font-medium text-sm tracking-wide px-6 py-3 rounded-sm transition-all duration-300"
              style={{ background: "#C1380E", color: "#FAF6F0" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A52D0B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C1380E")}
            >
              Shop Wins
            </a>
            <a href="#cta"
              className="font-body font-medium text-sm tracking-wide px-6 py-3 rounded-sm border transition-all duration-300"
              style={{ borderColor: "rgba(212,168,67,0.5)", color: "#D4A843", background: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D4A843";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,67,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,168,67,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Wholesale Enquiry
            </a>
          </div>
        </div>

        {/* ── SCROLL PROGRESS BAR ── */}
        {!prefersReducedMotion && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[rgba(255,255,255,0.08)]">
            <div className="h-full bg-[#D4A843] transition-none"
              style={{ width: `${scrollProgress * 100}%` }} />
          </div>
        )}

        {/* ── PHASE INDICATOR DOTS (right edge, mid-height) ── */}
        {!prefersReducedMotion && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {PHASES.map((_, i) => {
              const op = phaseOpacities[i];
              return (
                <div key={i} className="relative w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(250,246,240,0.15)" }}>
                  <div className="absolute inset-0 rounded-full transition-all duration-300"
                    style={{
                      background: "#D4A843",
                      opacity: op,
                      transform: `scale(${0.6 + op * 0.4})`,
                    }} />
                </div>
              );
            })}
          </div>
        )}

        {/* ── SCROLL CUE ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}>
          <span className="font-body text-[10px] tracking-[0.18em] uppercase"
            style={{ color: "rgba(250,246,240,0.40)" }}>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none"
            style={{ color: "rgba(212,168,67,0.6)" }}>
            <rect x="1" y="1" width="14" height="22" rx="7"
              stroke="currentColor" strokeWidth="1.5"/>
            <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor"
              style={{ animation: "scrollDot 1.6s ease-in-out infinite" }}/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);  opacity: 1; }
          60%  { transform: translateY(8px); opacity: 0; }
          61%  { transform: translateY(0);  opacity: 0; }
          100% { transform: translateY(0);  opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes scrollDot { from {} to {} }
        }
      `}</style>
    </div>
  );
}
