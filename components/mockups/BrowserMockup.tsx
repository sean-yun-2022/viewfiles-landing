"use client";
import { useState } from "react";

export default function BrowserMockup() {
  const [clipped, setClipped] = useState(false);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] text-[11px] font-sans select-none">
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles — Browser</span>
      </div>

      <div className="flex" style={{ height: 320 }}>
        {/* Browser panel */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* URL bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#13131e] border-b border-white/6">
            <div className="flex items-center gap-1 text-white/20">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </div>
            <div className="flex-1 bg-white/6 rounded-md px-3 py-1 text-white/40 text-[10px] flex items-center gap-2">
              <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              medium.com/ai-knowledge-management-2026
            </div>
            <button
              onClick={() => setClipped(true)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                clipped
                  ? "bg-green-500/15 text-green-400 border border-green-500/30"
                  : "bg-[#5b8af0]/15 text-[#5b8af0] border border-[#5b8af0]/30 hover:bg-[#5b8af0]/25"
              }`}
            >
              {clipped ? "✓ Saved!" : "✦ Knowledge Save"}
            </button>
          </div>

          {/* Web content */}
          <div className="flex-1 bg-white overflow-hidden p-5 flex flex-col gap-3">
            <div className="text-[8px] text-blue-500 font-medium">AI · PRODUCTIVITY</div>
            <div className="text-[#1a1a2e] font-bold text-base leading-tight">The Future of AI-Powered Knowledge Management</div>
            <div className="text-[9px] text-gray-400">Published Jun 5, 2026 · 8 min read</div>
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 bg-gray-200 rounded w-full" />
              <div className="h-1.5 bg-gray-200 rounded w-5/6" />
              <div className="h-1.5 bg-gray-200 rounded w-full" />
              <div className="h-1.5 bg-gray-200 rounded w-4/5" />
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border-l-2 border-blue-300">
              <div className="text-[9px] text-blue-700 leading-relaxed">
                "The most effective knowledge workers don't just consume information — they build systems that connect ideas across domains."
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-1.5 bg-gray-200 rounded w-full" />
              <div className="h-1.5 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Save confirmation panel */}
        <div className={`w-48 bg-[#0d0d16] border-l border-white/6 flex flex-col transition-opacity duration-300 ${clipped ? "opacity-100" : "opacity-40"}`}>
          <div className="px-3 py-2.5 border-b border-white/6 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#5b8af0]/20 flex items-center justify-center">
              <span className="text-[#5b8af0] text-[10px]">✦</span>
            </div>
            <span className="text-white/70 text-[10px] font-medium">Saved to Knowledge</span>
          </div>
          <div className="px-3 py-3 flex flex-col gap-3">
            <div>
              <div className="text-white/80 text-[10px] font-medium leading-snug mb-1">The Future of AI-Powered Knowledge Management</div>
              <div className="text-white/30 text-[9px]">medium.com · Just now</div>
            </div>
            <div>
              <div className="text-[#5b8af0] text-[9px] font-semibold uppercase tracking-wider mb-1.5">Auto Tags</div>
              <div className="flex flex-wrap gap-1">
                {["AI", "Productivity", "Knowledge"].map(t => (
                  <span key={t} className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#5b8af0]/10 text-[#5b8af0]/70">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[#5b8af0] text-[9px] font-semibold uppercase tracking-wider mb-1.5">AI Summary</div>
              <div className="text-white/40 text-[9px] leading-relaxed">Knowledge workers need systems that connect ideas across domains...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
