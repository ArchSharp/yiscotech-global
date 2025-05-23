"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              YiscoTechGlobal
            </Link>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              href="/contact"
              className="border border-black text-black hover:bg-black hover:text-white px-6 py-2 text-sm font-medium transition-colors rounded-full"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
