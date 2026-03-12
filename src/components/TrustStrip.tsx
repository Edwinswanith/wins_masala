"use client";

/* Four inline SVG icons — all stroke-based, spice / heritage themed */
function HeritageIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden>
      {/* Hourglass — time / heritage */}
      <path d="M10 4h12M10 28h12" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 4l5 9 5-9" stroke="#D4A843" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 28l5-9 5 9" stroke="#D4A843" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M13 16c1 .8 2 1.2 3 1.2s2-.4 3-1.2" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function RootsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden>
      {/* Kolam-inspired diamond motif — Tamil roots */}
      <rect x="16" y="5" width="8" height="8" rx="1" transform="rotate(45 16 5)" stroke="#D4A843" strokeWidth="1.4" />
      <path d="M16 17v8" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 21c0 0 1.5-2 4-2s4 2 4 2" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 26c0 0 2.5-3 6-3s6 3 6 3" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ConsistencyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden>
      {/* Three equal horizontal bars — consistency / every batch */}
      <path d="M8 11h16" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 16h16" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 21h16" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="24" cy="11" r="2.5" fill="none" stroke="#D4A843" strokeWidth="1.4" />
      <circle cx="8"  cy="16" r="2.5" fill="none" stroke="#D4A843" strokeWidth="1.4" />
      <circle cx="24" cy="21" r="2.5" fill="none" stroke="#D4A843" strokeWidth="1.4" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden>
      {/* Simple mortar & pestle — kitchen essential */}
      <ellipse cx="16" cy="22" rx="9" ry="4" stroke="#D4A843" strokeWidth="1.4" />
      <path d="M7 22v-6a9 4 0 0118 0v6" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 10V6M18 11V7" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 16c-2 0-4 .5-4 1.5S14 19 16 19s4-.5 4-1.5-2-1.5-4-1.5z" stroke="#D4A843" strokeWidth="1.4" />
    </svg>
  );
}

const TRUST_ITEMS = [
  {
    stat: "30+",
    label: "Years of trust",
    sub: "Serving Tamil households since 1996",
    Icon: HeritageIcon,
  },
  {
    stat: "100%",
    label: "Tamil-rooted",
    sub: "Blended for South Indian flavour profiles",
    Icon: RootsIcon,
  },
  {
    stat: "Bold",
    label: "Every batch",
    sub: "Consistent colour, heat, and aroma depth",
    Icon: ConsistencyIcon,
  },
  {
    stat: "Everyday",
    label: "Kitchen essential",
    sub: "Gravies, fries, marinades, and beyond",
    Icon: KitchenIcon,
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-[#FAF6F0] py-16 px-6 overflow-hidden">
      <div className="gold-rule mb-12 mx-auto max-w-5xl" />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center gap-4 group"
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <item.Icon />
            </div>
            <div>
              <div
                className="font-display font-black text-3xl md:text-4xl leading-none mb-1"
                style={{ color: "#8B1A1A" }}
              >
                {item.stat}
              </div>
              <div
                className="font-body font-semibold text-xs uppercase tracking-[0.14em] mb-1"
                style={{ color: "#0D0604" }}
              >
                {item.label}
              </div>
              <div
                className="font-body text-xs leading-relaxed"
                style={{ color: "#6B5147" }}
              >
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gold-rule mt-12 mx-auto max-w-5xl" />
    </section>
  );
}
