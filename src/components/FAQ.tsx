"use client";

import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    q: "What makes WINS Chilli Powder different from other brands?",
    a: "WINS is blended specifically for Tamil and South Indian cooking — gravies, fries, and masala bases. The focus is on consistent colour, heat, and aroma depth in every pack, not just on shelf presentation.",
  },
  {
    q: "Is WINS suitable for everyday home cooking?",
    a: "Yes. WINS is designed as an everyday kitchen essential — not a specialty spice you reach for once a month. It works in daily dals, sambars, side dishes, and anything in between.",
  },
  {
    q: "How spicy is WINS Chilli Powder?",
    a: "WINS delivers bold, sustained heat — the kind that builds through the dish rather than an aggressive spike. It is strong enough to be the main heat source in a recipe while remaining usable in everyday quantities.",
  },
  {
    q: "Where can I buy WINS Chilli Powder?",
    a: "WINS is available online through our shop and through select retail partners. Use the Shop or Contact button above to order or enquire about availability in your area.",
  },
  {
    q: "Do you offer wholesale or bulk supply?",
    a: "Yes. We work with distributors, retailers, and food businesses. Use the Wholesale Enquiry button or reach out through the contact section below and we will respond within 24 hours.",
  },
  {
    q: "Does WINS Chilli Powder contain any additives?",
    a: "Product composition and ingredient details are printed on each pack as per FSSAI labeling requirements. Refer to the pack for authoritative information about contents and sourcing.",
  },
];

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="reveal border-b transition-colors duration-200"
      style={{
        borderColor: open
          ? "rgba(193,56,14,0.25)"
          : "rgba(255,255,255,0.07)",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span
          className="font-body font-medium text-sm md:text-base leading-relaxed transition-colors duration-200"
          style={{ color: open ? "#FAF6F0" : "rgba(250,246,240,0.75)" }}
        >
          <span
            className="font-display font-black text-base mr-3"
            style={{ color: "rgba(212,168,67,0.40)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border mt-0.5 transition-all duration-300"
          style={{
            borderColor: open
              ? "rgba(193,56,14,0.6)"
              : "rgba(255,255,255,0.15)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg viewBox="0 0 14 14" className="w-3 h-3">
            <path
              d="M7 2v10M2 7h10"
              stroke={open ? "#C1380E" : "rgba(250,246,240,0.5)"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p
          className="font-body text-sm leading-[1.9] pb-6 pr-8"
          style={{ color: "rgba(250,246,240,0.55)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
      { threshold: 0.04, rootMargin: "0px 0px -40px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D0604] py-28 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#D4A843]" />
            <span
              className="font-body text-xs tracking-[0.22em] uppercase"
              style={{ color: "#D4A843" }}
            >
              Frequently asked
            </span>
            <div className="h-px w-10 bg-[#D4A843]" />
          </div>
          <h2
            className="font-display font-black text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]"
            style={{ color: "#FAF6F0" }}
          >
            Questions
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
