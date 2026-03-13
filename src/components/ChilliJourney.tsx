"use client";

import { useEffect, useRef, useState } from "react";

const JOURNEY_STEPS = [
  {
    era: "16th century",
    roman: "XVI",
    heading: "From the Americas to South India",
    body: "Chilli peppers were native to the Americas. Portuguese traders brought them to India through early global trade — and South Indian kitchens claimed them as their own almost immediately.",
  },
  {
    era: "Colonial era",
    roman: "XIX",
    heading: "Quickly irreplaceable",
    body: "Within generations, chilli became inseparable from Tamil cooking. No gravy, no fry, no chutney was the same without it. The red colour and sharp heat became markers of home cooking itself.",
  },
  {
    era: "Today",
    roman: "XXI",
    heading: "Everyday kitchen trust",
    body: "Chilli powder is no longer just a spice — it is the fastest way to build colour, aroma, and appetite in the dishes that actually matter. WINS was built to deliver exactly that.",
  },
];

function calcOpacity(
  p: number,
  [fadeIn, show, fadeOut, hidden]: readonly [number, number, number, number]
): number {
  if (p < fadeIn) return 0;
  if (p < show) return (p - fadeIn) / (show - fadeIn);
  if (p < fadeOut) return 1;
  if (p < hidden) return 1 - (p - fadeOut) / (hidden - fadeOut);
  return 0;
}

const JOURNEY_WINDOWS = [
  [0.00, 0.00, 0.25, 0.38],
  [0.25, 0.38, 0.62, 0.75],
  [0.62, 0.75, 100, 101],
] as const;

export default function ChilliJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  const stepOpacities = prefersReducedMotion
    ? JOURNEY_STEPS.map(() => 1)
    : JOURNEY_WINDOWS.map((w) => calcOpacity(scrollProgress, w));

  const activeIndex = stepOpacities.indexOf(Math.max(...stepOpacities));
  const fillPct = Math.min(100, scrollProgress * 150);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: prefersReducedMotion ? "auto" : "270vh" }}
    >
      <style>{`
        @keyframes dotPulse {
          0%,100% { transform: scale(1.0); box-shadow: 0 0 0 0 rgba(193,56,14,0.4); }
          50%      { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(193,56,14,0.0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes dotPulse { from {} to {} }
        }
      `}</style>

      <div
        className={prefersReducedMotion ? "" : "sticky top-0 h-screen overflow-hidden"}
        style={{ background: "#FAF6F0" }}
      >
        {/* Subtle warm glow on the right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(193,56,14,0.028), transparent)" }}
        />

        <div
          className={`relative h-full flex flex-col px-6 md:px-12 max-w-5xl mx-auto ${
            prefersReducedMotion ? "py-28" : "py-8 md:py-12"
          }`}
        >
          {/* ── Section header ── */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-10 bg-[#C1380E]" />
              <span
                className="font-body text-xs tracking-[0.22em] uppercase"
                style={{ color: "#C1380E" }}
              >
                The chilli story
              </span>
            </div>
            <h2
              className="font-display font-black text-[clamp(1.3rem,2.4vw,2.4rem)] leading-[1.1]"
              style={{ color: "#0D0604" }}
            >
              How a global spice became a{" "}
              <span style={{ color: "#8B1A1A" }}>Tamil kitchen essential</span>
            </h2>
          </div>

          {/* ── Center content (fills remaining vertical space) ── */}
          <div className="flex-1 relative min-h-0">

            {/* Animated crossfading panels */}
            {!prefersReducedMotion && (
              <>
                {JOURNEY_STEPS.map((step, i) => {
                  const op = stepOpacities[i];
                  const ty = (1 - op) * 22;
                  return (
                    <div
                      key={step.era}
                      className="absolute inset-0 flex flex-col"
                      style={{
                        opacity: op,
                        transform: `translateY(${ty}px)`,
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                        pointerEvents: op < 0.05 ? "none" : "auto",
                        paddingTop: "clamp(1.5rem, 5vh, 3rem)",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      {/* Roman numeral watermark — anchored behind heading */}
                      <div
                        aria-hidden
                        className="absolute pointer-events-none select-none overflow-hidden"
                        style={{ top: 0, left: 0, right: 0, bottom: "40%" }}
                      >
                        <span
                          className="font-display font-black leading-none block"
                          style={{
                            fontSize: "clamp(9rem, 22vw, 16rem)",
                            color: "#C1380E",
                            opacity: 0.042,
                            letterSpacing: "-0.04em",
                            lineHeight: 0.85,
                            marginTop: "clamp(1rem,3vh,2rem)",
                          }}
                        >
                          {step.roman}
                        </span>
                      </div>

                      {/* Era + Heading at top */}
                      <div className="relative">
                        <span
                          className="font-body text-xs tracking-[0.22em] uppercase font-semibold block mb-3"
                          style={{ color: "#C1380E" }}
                        >
                          {step.era}
                        </span>
                        <h3
                          className="font-display font-black leading-[1.04]"
                          style={{
                            fontSize: "clamp(2.2rem, 4.8vw, 4rem)",
                            color: "#0D0604",
                          }}
                        >
                          {step.heading}
                        </h3>
                      </div>

                      {/* Spacer pushes body text toward bottom */}
                      <div className="flex-1" />

                      {/* Rule + Body text at bottom */}
                      <div className="relative">
                        <div
                          style={{
                            height: "1px",
                            width: "2.5rem",
                            background: "rgba(193,56,14,0.5)",
                            marginBottom: "1.1rem",
                          }}
                        />
                        <p
                          className="font-body leading-[1.85] max-w-xl"
                          style={{
                            fontSize: "clamp(0.9rem, 1.15vw, 1.025rem)",
                            color: "#5C3D35",
                          }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* Reduced motion: stacked static layout */}
            {prefersReducedMotion && (
              <div className="flex flex-col gap-10 pt-8">
                {JOURNEY_STEPS.map((step) => (
                  <div key={step.era}>
                    <span
                      className="font-body text-xs tracking-[0.22em] uppercase font-semibold block mb-2"
                      style={{ color: "#C1380E" }}
                    >
                      {step.era}
                    </span>
                    <h3
                      className="font-display font-black leading-[1.06] mb-3"
                      style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)", color: "#0D0604" }}
                    >
                      {step.heading}
                    </h3>
                    <div style={{ height: "1px", width: "2.5rem", background: "rgba(193,56,14,0.5)", marginBottom: "1rem" }} />
                    <p className="font-body leading-[1.9] max-w-xl" style={{ fontSize: "0.95rem", color: "#5C3D35" }}>
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Horizontal timeline (bottom) ── */}
          {!prefersReducedMotion && (
            <div className="flex-shrink-0 pb-2">
              {/* Dots + connecting line */}
              <div className="relative flex items-center mb-2.5">
                {/* Track line between first and last dot */}
                <div
                  className="absolute h-px"
                  style={{
                    left: "16px",
                    right: "16px",
                    background: "rgba(193,56,14,0.1)",
                  }}
                />
                {/* Animated fill */}
                <div
                  className="absolute h-px"
                  style={{
                    left: "16px",
                    width: `calc((100% - 32px) * ${Math.min(1, fillPct / 100)})`,
                    background: "linear-gradient(to right, #C1380E, rgba(193,56,14,0.5))",
                    transition: "width 0.08s ease-out",
                  }}
                />

                {JOURNEY_STEPS.map((step, i) => {
                  const op = stepOpacities[i];
                  const isActive = op > 0.5;
                  return (
                    <div
                      key={step.era}
                      className="relative z-10 flex-1 flex justify-start"
                      style={{ justifyContent: i === JOURNEY_STEPS.length - 1 ? "flex-end" : i === 0 ? "flex-start" : "center" }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: isActive ? "#C1380E" : "rgba(193,56,14,0.22)",
                          background: "#FAF6F0",
                          boxShadow: isActive ? "0 0 0 4px rgba(193,56,14,0.09)" : "none",
                          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                        }}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            background: isActive ? "#C1380E" : "rgba(193,56,14,0.18)",
                            animation:
                              isActive ? "dotPulse 2s ease-in-out infinite" : "none",
                            transition: "background 0.4s ease",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Era labels + step counter */}
              <div className="flex items-center">
                {JOURNEY_STEPS.map((step, i) => {
                  const op = stepOpacities[i];
                  const isActive = op > 0.5;
                  return (
                    <div
                      key={step.era}
                      className="flex-1"
                      style={{
                        textAlign: i === JOURNEY_STEPS.length - 1 ? "right" : i === 0 ? "left" : "center",
                        opacity: 0.28 + op * 0.72,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <span
                        className="font-body text-[9px] tracking-[0.2em] uppercase font-semibold"
                        style={{ color: isActive ? "#C1380E" : "#8B6A60", transition: "color 0.4s ease" }}
                      >
                        {step.era}
                      </span>
                    </div>
                  );
                })}
                <span
                  className="font-body text-[10px] tracking-[0.18em] uppercase ml-6 flex-shrink-0 transition-opacity duration-500"
                  style={{
                    color: "rgba(13,6,4,0.3)",
                    opacity: scrollProgress > 0.02 && scrollProgress < 0.97 ? 1 : 0,
                  }}
                >
                  {activeIndex + 1} / {JOURNEY_STEPS.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
