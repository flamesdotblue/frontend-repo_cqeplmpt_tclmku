import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-blue-600 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900 text-lg tracking-tight">WorkFloX</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#analytics" className="hover:text-gray-900">Analytics</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#demo" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900">Request a demo</a>
          </div>
        </div>
      </div>
    </header>
  );
}
