"use client";

import { useEffect, useRef } from "react";

const QUALITIES = [
  {
    title: "Colour",
    description:
      "Deep, vivid red that transforms every gravy, marinade, and fry into something that looks as good as it tastes.",
    accent: "#C1380E",
  },
  {
    title: "Heat",
    description:
      "Bold, honest heat that builds through the dish — not a sharp spike but a sustained warmth that carries flavour forward.",
    accent: "#8B1A1A",
  },
  {
    title: "Depth",
    description:
      "Aroma that opens the kitchen before the food even reaches the table. Earthy, smoky undertones from careful blending.",
    accent: "#D4A843",
  },
];

export default function SpecialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.querySelectorAll(".reveal").forEach((el, i) => {
            if (e.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 140);
            }
          });
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D0604] py-28 px-6 overflow-hidden"
    >
      {/* Background spice dust — pure CSS radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(193,56,14,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4A843]" />
            <span
              className="font-body text-xs tracking-[0.22em] uppercase"
              style={{ color: "#D4A843" }}
            >
              What makes WINS special
            </span>
            <div className="h-px w-12 bg-[#D4A843]" />
          </div>
          <h2
            className="font-display font-black text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05]"
            style={{ color: "#FAF6F0" }}
          >
            Built for everyday cooking,{" "}
            <span style={{ color: "#C1380E" }}>not shelf decoration.</span>
          </h2>
        </div>

        {/* 3 quality cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {QUALITIES.map((q, i) => (
            <div
              key={q.title}
              className="reveal group relative rounded-md p-8 border transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  q.accent + "55")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.06)")
              }
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-60"
                style={{ background: q.accent }}
              />

              <div
                className="font-display text-5xl font-black mb-4 leading-none"
                style={{ color: q.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "#FAF6F0" }}
              >
                {q.title}
              </h3>

              <p
                className="font-body text-sm leading-[1.8]"
                style={{ color: "rgba(250,246,240,0.60)" }}
              >
                {q.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pullquote */}
        <div className="reveal mt-20 text-center max-w-2xl mx-auto">
          <blockquote
            className="font-display italic text-[clamp(1.2rem,2.5vw,1.8rem)] leading-relaxed"
            style={{ color: "rgba(250,246,240,0.65)" }}
          >
            &ldquo;WINS is meant to show up where flavour matters most — gravies, fries,
            marinades, and masala bases that need colour, heat, and presence.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
