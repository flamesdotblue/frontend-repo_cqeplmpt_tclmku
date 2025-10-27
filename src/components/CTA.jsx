export default function CTA() {
  return (
    <section id="demo" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ready to elevate performance?</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">See how WorkFloX helps your organization align goals, run efficient reviews, and unlock engagement with real-time analytics.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Request a live demo</a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">Explore the platform</a>
          </div>
          <p className="mt-4 text-xs text-gray-500">No credit card required • Quick setup • Part of the Evolutyz suite</p>
        </div>
      </div>
    </section>
  );
}
