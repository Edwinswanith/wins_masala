"use client";

import { useEffect, useRef, useState } from "react";

function GraviesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path d="M4 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 11c0 4.97 1.343 8 7 8s7-3.03 7-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 5c0-1.5.8-2 .8-3M12 5c0-1.5.8-2 .8-3M15 5c0-1.5.8-2 .8-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StirFryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path d="M3 13c0-3 2-5 9-5s9 2 9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 13v6M9 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 8l2.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MarinadeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path d="M9 3h6l1 5H8L9 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 8c-.5 1.5-.5 3 0 4.5L9 16h6l1-3.5c.5-1.5.5-3 0-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 12.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChutneyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <ellipse cx="12" cy="17" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 17v-3c0-2 3-3.5 7-3.5s7 1.5 7 3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10.5V7M10 7c0-2 4-2 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MasalaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <path d="M9.5 6.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
      <path
        d="M12 21c-4 0-6-2.5-6-5.5 0-2 1-3.5 2.5-5 .3 1 1.2 1.5 1.5 1 0-2 1-4 2-5 0 2.5 2.5 4 2.5 6 .5-.5.5-1.5.5-2 1 1.5 1 3 1 4.5C16 19 14 21 12 21z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  );
}

const USES = [
  { name: "Gravies",          description: "Rich, slow-cooked base gravies that need deep red colour and sustained heat.",                       accent: "#C1380E", Icon: GraviesIcon },
  { name: "Stir Fries",       description: "Quick, high-heat fries where chilli powder adds colour without burning through.",                    accent: "#C1380E", Icon: StirFryIcon },
  { name: "Marinades",        description: "Coat proteins before grilling or roasting for bold colour and heat penetration.",                    accent: "#D4A843", Icon: MarinadeIcon },
  { name: "Chutneys",         description: "Balances sweet and sour profiles with sharp heat and a vibrant red hue.",                           accent: "#C1380E", Icon: ChutneyIcon },
  { name: "Masala Bases",     description: "The foundational spice in any masala blend that anchors the full flavour profile.",                  accent: "#D4A843", Icon: MasalaIcon },
  { name: "Everyday Cooking", description: "A pinch into dals, soups, and side dishes. It belongs everywhere.",                                 accent: "#D4A843", Icon: FlameIcon },
];

function UseCard({ use, index }: { use: typeof USES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal group relative rounded-sm p-7 transition-all duration-300 cursor-default"
      style={{
        background: hovered ? "rgba(255,255,255,0.045)" : "rgba(255,255,255,0.025)",
        borderLeft: `2px solid ${hovered ? use.accent : "rgba(255,255,255,0.08)"}`,
        outline: "1px solid rgba(255,255,255,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transitionDelay: `${index * 60}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="mb-5 transition-colors duration-300"
        style={{ color: hovered ? use.accent : "rgba(250,246,240,0.30)" }}
      >
        <use.Icon />
      </div>

      <h3
        className="font-display font-bold text-lg mb-2 leading-snug"
        style={{ color: "#FAF6F0" }}
      >
        {use.name}
      </h3>
      <p
        className="font-body text-sm leading-[1.8]"
        style={{ color: "rgba(250,246,240,0.50)" }}
      >
        {use.description}
      </p>
    </div>
  );
}

export default function UsesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.querySelectorAll(".reveal").forEach((el, i) => {
            if (e.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 80);
            }
          });
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#120704" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#D4A843]" />
            <span
              className="font-body text-xs tracking-[0.22em] uppercase"
              style={{ color: "#D4A843" }}
            >
              Where WINS belongs
            </span>
            <div className="h-px w-10 bg-[#D4A843]" />
          </div>
          <h2
            className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]"
            style={{ color: "#FAF6F0" }}
          >
            In your kitchen,{" "}
            <span style={{ color: "#D4A843" }}>every day.</span>
          </h2>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {USES.map((use, i) => (
            <UseCard key={use.name} use={use} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
