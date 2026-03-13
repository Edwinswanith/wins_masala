"use client";

import { useEffect, useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const retailOrderHref =
    "mailto:hello@winschilli.com?subject=Order%20WINS%20Chilli%20Powder&body=Hi%20WINS%2C%20I%27d%20like%20to%20place%20a%20retail%20order.%20Please%20share%20availability%2C%20pricing%2C%20and%20delivery%20details.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.querySelectorAll(".reveal").forEach((el, i) => {
            if (e.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-36 px-6"
      style={{ background: "#0D0604" }}
    >
      {/* Full-bleed background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(193,56,14,0.18) 0%, rgba(139,26,26,0.10) 35%, transparent 70%)",
        }}
      />

      {/* Top decorative rule */}
      <div className="gold-rule mb-10 md:mb-20 max-w-4xl mx-auto" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="reveal flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-[#D4A843]" />
          <span
            className="font-body text-xs tracking-[0.22em] uppercase"
            style={{ color: "#D4A843" }}
          >
            Ready to bring bold flavour home?
          </span>
          <div className="h-px w-10 bg-[#D4A843]" />
        </div>

        {/* Headline */}
        <h2
          className="reveal font-display font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] mb-6"
          style={{ color: "#FAF6F0" }}
        >
          Bold colour.{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #C1380E 0%, #D4A843 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Honest heat.
          </span>
        </h2>

        {/* Sub */}
        <p
          className="reveal font-body text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto"
          style={{ color: "rgba(250,246,240,0.55)" }}
        >
          Join Tamil kitchens that have trusted WINS since 1996. Order online or
          get in touch for wholesale supply.
        </p>

        {/* Buttons */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <a
            href={retailOrderHref}
            className="font-body font-semibold text-sm tracking-wide px-8 py-4 rounded-sm transition-all duration-300 inline-flex items-center gap-2 group"
            style={{ background: "#C1380E", color: "#FAF6F0" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#A52D0B";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 24px rgba(193,56,14,0.40)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#C1380E";
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
            }}
          >
            Order Now
            <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover:translate-x-1">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>

          <a
            href="mailto:hello@winschilli.com"
            className="font-body font-medium text-sm tracking-wide px-8 py-4 rounded-sm border transition-all duration-300 inline-flex items-center gap-2 group"
            style={{
              borderColor: "rgba(212,168,67,0.40)",
              color: "#D4A843",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(212,168,67,0.80)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(212,168,67,0.06)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(212,168,67,0.40)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
            }}
          >
            Contact for Wholesale
            <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover:translate-x-1">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>
        </div>

        {/* Fine print */}
        <p
          className="reveal mt-10 font-body text-xs"
          style={{ color: "rgba(250,246,240,0.25)" }}
        >
          WINS Chilli Powder · Tamil Nadu · FSSAI licensed
        </p>
      </div>

      {/* Bottom decorative rule */}
      <div className="gold-rule mt-10 md:mt-20 max-w-4xl mx-auto" />

      {/* Footer bar */}
      <div className="relative mt-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="font-body text-xs"
          style={{ color: "rgba(250,246,240,0.25)" }}
        >
          © 2026 WINS Chilli Powder. All rights reserved.
        </span>
        <span
          className="font-display italic text-xs"
          style={{ color: "rgba(212,168,67,0.35)" }}
        >
          Bold colour. Honest heat. Since 1996.
        </span>
      </div>
    </section>
  );
}
