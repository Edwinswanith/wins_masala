"use client";

import { useEffect, useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.querySelectorAll(".reveal").forEach((el, i) => {
            if (e.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 160);
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
      {/* Decorative background element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "linear-gradient(to left, #C1380E, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#C1380E]" />
            <span
              className="font-body text-xs tracking-[0.22em] uppercase"
              style={{ color: "#C1380E" }}
            >
              The chilli story
            </span>
          </div>
          <h2
            className="font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1]"
            style={{ color: "#0D0604" }}
          >
            How a global spice became a{" "}
            <span style={{ color: "#8B1A1A" }}>Tamil kitchen essential</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-[1px] md:left-1/2 md:-translate-x-1/2"
            style={{ background: "rgba(193,56,14,0.15)" }}
          />

          <div className="flex flex-col gap-0">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={step.era}
                className={`reveal relative flex items-start gap-8 pb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 mt-1"
                  style={{
                    borderColor: "#C1380E",
                    background: "#FAF6F0",
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#C1380E" }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 md:max-w-[44%] ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <span
                    className="font-body text-xs tracking-[0.2em] uppercase font-medium block mb-2"
                    style={{ color: "#C1380E" }}
                  >
                    {step.era}
                  </span>
                  <h3
                    className="font-display font-bold text-xl md:text-2xl mb-3 leading-snug"
                    style={{ color: "#0D0604" }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="font-body text-sm leading-[1.9]"
                    style={{ color: "#6B5147" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
