import { Target, BarChart3, Users, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Aligned OKRs",
    desc: "Connect individual goals to company objectives and keep everyone moving in the same direction.",
  },
  {
    icon: BarChart3,
    title: "Real‑time Analytics",
    desc: "Track performance trends, surface insights, and act quickly with live dashboards.",
  },
  {
    icon: Users,
    title: "Effortless Reviews",
    desc: "Streamline evaluations with configurable cycles, 360° feedback, and smart reminders.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise‑ready",
    desc: "Secure by design with SSO options and role‑based access for teams of any size.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Built for modern performance management</h2>
          <p className="mt-3 text-gray-600">Everything you need to measure performance, align objectives, and foster growth—without the admin burden.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
              <div className="mt-4 text-xs text-gray-500">Part of the Evolutyz suite</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
