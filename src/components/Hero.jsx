import { Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient decorations - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_20rem_at_top_right,rgba(59,130,246,0.15),transparent),radial-gradient(20rem_12rem_at_bottom_left,rgba(147,51,234,0.12),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy + CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              New: Real-time analytics and OKR alignment
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Measure performance. Align objectives. Grow continuously.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
              WorkFloX is a performance management platform that streamlines reviews, tracks goals, and elevates engagement with live insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Request a demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50"
              >
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img alt="" src="https://i.pravatar.cc/28?img=1" className="h-7 w-7 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/28?img=5" className="h-7 w-7 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/28?img=7" className="h-7 w-7 rounded-full ring-2 ring-white" />
              </div>
              <span>Trusted by growing teams worldwide</span>
            </div>
          </div>

          {/* 3D Spline scene with subtle overlay UI */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Floating KPI chip over the scene */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 backdrop-blur border border-gray-200 shadow-sm p-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center font-semibold">86%</div>
                <div>
                  <p className="text-xs text-gray-500">Goal Completion</p>
                  <p className="text-sm font-semibold text-gray-900">Trending up this quarter</p>
                </div>
              </div>
              <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '86%' }} />
              </div>
            </div>

            {/* Decorative vector rings */}
            <svg className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 opacity-60" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="url(#g1)" strokeWidth="2" />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
