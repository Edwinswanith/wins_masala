"use client";

import { useEffect, useRef } from "react";

const VALUES = [
  { label: "Tamil-rooted", detail: "Blended for South Indian kitchens" },
  { label: "Consistent", detail: "Same boldness, every pack, every batch" },
  { label: "Dependable", detail: "The pack your kitchen trusts every day" },
];

export default function AboutWins() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.querySelectorAll(".reveal").forEach((el, i) => {
            if (e.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 130);
            }
          });
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF6F0] py-28 px-6 overflow-hidden"
    >
      {/* Left accent band */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #C1380E 30%, #C1380E 70%, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Text column */}
        <div>
          <div className="reveal mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#C1380E]" />
              <span
                className="font-body text-xs tracking-[0.22em] uppercase"
                style={{ color: "#C1380E" }}
              >
                About WINS
              </span>
            </div>
            <h2
              className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-6"
              style={{ color: "#0D0604" }}
            >
              Make the kitchen{" "}
              <span style={{ color: "#8B1A1A" }}>trust the pack.</span>
            </h2>
            <p
              className="font-body text-base leading-[1.9]"
              style={{ color: "#6B5147" }}
            >
              WINS exists to bring dependable spice character back into everyday
              cooking. Tamil-rooted in tone and bold in expression, the brand is
              built around one idea: make the kitchen trust the pack.
            </p>
          </div>

          <p
            className="reveal font-body text-sm leading-[1.9] mb-10"
            style={{ color: "#6B5147" }}
          >
            Not luxury gourmet. Not cheap mass-market noise. WINS is the
            mass-premium kitchen essential that shows up every day — in the
            morning sambar, the weekend biryani, and the late-night fry.
          </p>

          {/* Values list */}
          <div className="flex flex-col gap-4">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="reveal flex items-center gap-4"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(193,56,14,0.10)" }}
                >
                  <svg viewBox="0 0 16 16" className="w-3 h-3">
                    <path
                      d="M3 8l3.5 3.5 6.5-7"
                      stroke="#C1380E"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <span
                    className="font-body font-semibold text-sm"
                    style={{ color: "#0D0604" }}
                  >
                    {v.label}
                  </span>
                  <span
                    className="font-body text-sm ml-2"
                    style={{ color: "#6B5147" }}
                  >
                    — {v.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column — pack shot placeholder */}
        <div className="reveal relative">
          <div
            className="relative rounded-md overflow-hidden aspect-[4/5] flex items-center justify-center"
            style={{ background: "#1A0A06" }}
          >
            {/* Decorative glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(193,56,14,0.25) 0%, transparent 65%)",
              }}
            />
            {/* Year badge */}
            <div className="relative z-10 text-center">
              <div
                className="font-display font-black text-7xl md:text-8xl leading-none mb-2"
                style={{ color: "rgba(212,168,67,0.15)" }}
              >
                1996
              </div>
              <div
                className="font-body text-xs tracking-[0.28em] uppercase"
                style={{ color: "rgba(212,168,67,0.50)" }}
              >
                Established
              </div>
              <div
                className="font-display italic text-xl mt-6"
                style={{ color: "rgba(250,246,240,0.35)" }}
              >
                Pack shot coming
              </div>
            </div>
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2"
              style={{ borderColor: "rgba(212,168,67,0.3)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2"
              style={{ borderColor: "rgba(212,168,67,0.3)" }}
            />
          </div>

          {/* Since badge */}
          <div
            className="absolute -top-5 -right-5 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border"
            style={{
              background: "#C1380E",
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            <span className="font-display font-black text-xs text-white leading-none">
              Since
            </span>
            <span className="font-display font-black text-lg text-white leading-tight">
              1996
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
