import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_20rem_at_top_right,rgba(59,130,246,0.15),transparent),radial-gradient(20rem_12rem_at_bottom_left,rgba(147,51,234,0.12),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              New: Real-time analytics and OKR alignment
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Measure performance. Align objectives. Grow continuously.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
              WorkFloX is a SaaS performance management platform from Evolutyz that streamlines evaluations, tracks goals, and elevates engagement with live insights.
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
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Quarterly Performance</p>
                    <span className="text-xs text-gray-500">Real-time</span>
                  </div>
                  <div className="mt-3 h-28 sm:h-32 w-full bg-gradient-to-t from-blue-50 to-white rounded-lg p-3">
                    <div className="h-full flex items-end gap-1.5">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-blue-500/70"
                          style={{ height: `${20 + Math.abs(Math.sin(i)) * 70}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-12 grid grid-cols-3 gap-4">
                  {[{label: 'Goal Completion', value: '86%'}, {label: 'On‑time Reviews', value: '92%'}, {label: 'Engagement', value: '78%'}].map((kpi) => (
                    <div key={kpi.label} className="rounded-lg border border-gray-200 p-3">
                      <p className="text-xs text-gray-500">{kpi.label}</p>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{kpi.value}</p>
                      <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: kpi.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl" />
            <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-fuchsia-200/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
