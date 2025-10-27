import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "WorkFloX gave us a single source of truth for goals and reviews. Our cycle time dropped by 40% and adoption is through the roof.",
    name: "Priya Narayanan",
    role: "VP People, AltoTech",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "Finally, performance data we can act on. The real-time dashboards help managers coach in the moment, not months later.",
    name: "James Lee",
    role: "Head of Engineering, Nimbus",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "Implementation was painless and our team actually enjoys reviews now. The OKR alignment keeps us focused.",
    name: "Sofia Alvarez",
    role: "HR Director, Verde",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Logo cloud with simple vector marks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-gray-500">
          {["Nova", "Helix", "Quantum", "Atlas"].map((brand) => (
            <div key={brand} className="flex items-center justify-center">
              <svg className="h-8 w-auto" viewBox="0 0 120 24" fill="none" aria-hidden>
                <defs>
                  <linearGradient id={`lg-${brand}`} x1="0" y1="0" x2="120" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#111827" />
                    <stop offset="1" stopColor="#6B7280" />
                  </linearGradient>
                </defs>
                <rect x="0" y="8" width="30" height="8" rx="4" fill={`url(#lg-${brand})`} />
                <rect x="35" y="8" width="30" height="8" rx="4" fill={`url(#lg-${brand})`} />
                <text x="70" y="16" fontSize="12" fill="#6B7280">{brand}</text>
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full ring-2 ring-white" />
                <div>
                  <figcaption className="text-sm font-medium text-gray-900">{t.name}</figcaption>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-gray-700">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
