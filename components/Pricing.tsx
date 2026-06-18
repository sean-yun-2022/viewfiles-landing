"use client";
import { useState } from "react";

const freeFeatures = [
  "Universal File Viewer",
  "Built-in Web Browser",
  "Notes & Web Clips",
  "AI Knowledge Save (20/mo)",
  "Full-text Search",
  "3D Knowledge Graph",
];

const proFeatures = [
  "Everything in Trial",
  "Unlimited access forever",
  "AI Summary (100/mo)",
  "Priority support",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Simple pricing
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Try everything free for 30 days. Upgrade to Pro when you're ready.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/8 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-white text-black" : "text-white/50 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${annual ? "bg-white text-black" : "text-white/50 hover:text-white"}`}
            >
              Annual <span className="text-green-500 ml-1">−16%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-8">
            <h3 className="text-white/60 font-medium text-sm mb-1">Free Trial</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-white/40 mb-1.5">· 30 days</span>
            </div>
            <p className="text-white/40 text-sm mb-8">No credit card required</p>
            <ul className="space-y-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="text-green-400 text-base">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block w-full text-center bg-white/8 hover:bg-white/12 border border-white/10 text-white font-medium py-3 rounded-xl transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Pro */}
          <div className="bg-[#5b8af0]/8 border border-[#5b8af0]/30 rounded-2xl p-8 relative">
            <span className="absolute top-4 right-4 bg-[#5b8af0] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Value
            </span>
            <h3 className="text-[#5b8af0] font-medium text-sm mb-1">Pro</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-white">
                {annual ? "$9.99" : "$0.99"}
              </span>
              <span className="text-white/40 mb-1.5">{annual ? "/yr" : "/mo"}</span>
            </div>
            {annual && (
              <p className="text-green-400 text-sm mb-1">or $0.99/mo — save 16%</p>
            )}
            <p className="text-white/40 text-sm mb-8">One payment, unlimited access</p>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-[#5b8af0] text-base">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block w-full text-center bg-[#5b8af0] hover:bg-[#7aa3f5] text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
