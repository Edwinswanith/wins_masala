"use client";

import { useEffect, useRef, useState } from "react";

const JOURNEY_STEPS = [
  {
    era: "16th century",
    heading: "From the Americas to South India",
    body: "Chilli peppers were native to the Americas. Portuguese traders brought them to India through early global trade — and South Indian kitchens claimed them as their own almost immediately.",
  },
  {
    era: "Colonial era",
    heading: "Quickly irreplaceable",
    body: "Within generations, chilli became inseparable from Tamil cooking. No gravy, no fry, no chutney was the same without it. The red colour and sharp heat became markers of home cooking itself.",
  },
  {
    era: "Today",
    heading: "Everyday kitchen trust",
    body: "Chilli powder is no longer just a spice — it is the fastest way to build colour, aroma, and appetite in the dishes that actually matter. WINS was built to deliver exactly that.",
  },
];

export default function ChilliJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
      // Each of 3 steps occupies 1/3 of scroll range
      setActiveIndex(Math.min(2, Math.floor(progress * 3)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  // Fill line grows: 0% at step 0, ~50% at step 1, 100% at step 2
  // Spans the first 2/3 of scroll (reaching bottom dot at progress = 2/3)
  const fillPct = Math.min(100, scrollProgress * 150);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: prefersReducedMotion ? "auto" : "270vh" }}
    >
      <div
        className={prefersReducedMotion ? "" : "sticky top-0 h-screen overflow-hidden"}
        style={{ background: "#FAF6F0" }}
      >
        <section
          className={`relative h-full flex flex-col justify-center overflow-hidden px-6 ${
            prefersReducedMotion ? "py-28" : "py-8 md:py-12"
          }`}
        >
          {/* Decorative background */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.04]"
            style={{ background: "linear-gradient(to left, #C1380E, transparent)" }}
          />

          <div className="max-w-5xl mx-auto w-full">
            {/* Header */}
            <div className="mb-6 md:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-[#C1380E]" />
                <span
                  className="font-body text-xs tracking-[0.22em] uppercase"
                  style={{ color: "#C1380E" }}
                >
                  The chilli story
                </span>
              </div>
              <h2
                className="font-display font-black text-[clamp(1.4rem,3.5vw,3.2rem)] leading-[1.1]"
                style={{ color: "#0D0604" }}
              >
                How a global spice became a{" "}
                <span style={{ color: "#8B1A1A" }}>Tamil kitchen essential</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Background rule */}
              <div
                className="absolute left-[19px] top-3 bottom-3 w-[1px] md:left-1/2 md:-translate-x-1/2"
                style={{ background: "rgba(193,56,14,0.12)" }}
              />

              {/* Animated fill — grows down as scroll advances */}
              {!prefersReducedMotion && (
                <div
                  className="absolute left-[19px] top-3 w-[1px] md:left-1/2 md:-translate-x-1/2"
                  style={{
                    height: `${fillPct}%`,
                    background: "linear-gradient(to bottom, #C1380E 60%, rgba(193,56,14,0.3))",
                    transition: "height 0.1s linear",
                  }}
                />
              )}

              <div className="flex flex-col">
                {JOURNEY_STEPS.map((step, i) => {
                  const state = prefersReducedMotion
                    ? "active"
                    : i < activeIndex
                    ? "past"
                    : i === activeIndex
                    ? "active"
                    : "future";

                  const isActive = state === "active";
                  const isPast   = state === "past";

                  // Opacity by state
                  const opacity = isActive ? 1 : isPast ? 0.65 : 0.38;

                  // Dot colours
                  const dotBorderColor = isActive
                    ? "#C1380E"
                    : isPast
                    ? "#D4A843"
                    : "rgba(193,56,14,0.2)";
                  const innerDotColor = isActive
                    ? "#C1380E"
                    : isPast
                    ? "#D4A843"
                    : "rgba(193,56,14,0.15)";

                  return (
                    <div
                      key={step.era}
                      className={`relative flex items-start gap-8 pb-5 md:pb-8 transition-opacity duration-500 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                      style={{ opacity }}
                    >
                      {/* Dot */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 mt-1 transition-all duration-500"
                        style={{
                          borderColor: dotBorderColor,
                          background: "#FAF6F0",
                          boxShadow: isActive
                            ? "0 0 0 5px rgba(193,56,14,0.12), 0 0 0 1px rgba(193,56,14,0.06)"
                            : "none",
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full transition-all duration-500"
                          style={{
                            background: innerDotColor,
                            transform: isActive ? "scale(1.2)" : "scale(1)",
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 md:max-w-[44%] rounded-sm transition-all duration-500 ${
                          i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                        }`}
                        style={{
                          borderLeft: `2px solid ${
                            isActive ? "rgba(193,56,14,0.55)" : "transparent"
                          }`,
                          paddingLeft: "0.875rem",
                          background: isActive
                            ? "rgba(193,56,14,0.035)"
                            : "transparent",
                          borderRadius: "0 4px 4px 0",
                          padding: "0.5rem 0.875rem",
                        }}
                      >
                        <span
                          className="font-body text-xs tracking-[0.2em] uppercase font-medium block mb-1.5 transition-colors duration-500"
                          style={{ color: isActive ? "#C1380E" : "#8B6A60" }}
                        >
                          {step.era}
                        </span>
                        <h3
                          className="font-display font-bold text-base md:text-2xl mb-1 md:mb-2 leading-snug transition-colors duration-500"
                          style={{ color: isActive ? "#0D0604" : "#2D1A14" }}
                        >
                          {step.heading}
                        </h3>
                        {/* Body hidden on mobile to prevent viewport overflow */}
                        <p
                          className="hidden sm:block font-body text-sm leading-[1.85]"
                          style={{ color: "#6B5147" }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scroll progress indicator — visible only mid-scroll */}
            {!prefersReducedMotion && (
              <div
                className="flex items-center gap-3 mt-6 transition-opacity duration-500"
                style={{ opacity: scrollProgress > 0.02 && scrollProgress < 0.97 ? 0.5 : 0 }}
              >
                {JOURNEY_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-px transition-all duration-500"
                    style={{
                      width: i === activeIndex ? "2rem" : "0.75rem",
                      background: i <= activeIndex ? "#C1380E" : "rgba(193,56,14,0.2)",
                    }}
                  />
                ))}
                <span
                  className="font-body text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: "rgba(13,6,4,0.35)" }}
                >
                  {activeIndex + 1} / {JOURNEY_STEPS.length}
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
