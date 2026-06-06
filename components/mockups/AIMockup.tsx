export default function AIMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] text-[11px] font-sans select-none">
      {/* Title bar */}
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles — Q4 Report.pdf</span>
      </div>

      <div className="flex" style={{ height: 340 }}>
        {/* PDF side */}
        <div className="flex-1 bg-[#111119] p-4 flex flex-col gap-2 border-r border-white/6">
          <div className="text-white/30 text-[10px] mb-1 flex items-center gap-2">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: "#ef444422", color: "#ef4444" }}>PDF</span>
            Q4 Report.pdf · Page 3
          </div>
          <div className="bg-white rounded-lg p-3 flex-1 flex flex-col gap-1.5">
            <div className="text-[#1a1a2e] font-bold text-[11px] border-b border-gray-100 pb-1.5 mb-1">3. Market Analysis</div>
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-200 rounded w-5/6" />
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-300 rounded w-3/4" />
            <div className="h-1.5 bg-gray-200 rounded w-full" />
            <div className="h-1.5 bg-gray-200 rounded w-4/5" />
            <div className="mt-2 bg-blue-50 rounded p-2">
              <div className="text-[8px] text-blue-500 font-semibold mb-1">Key Findings</div>
              <div className="h-1.5 bg-blue-100 rounded w-full mb-1" />
              <div className="h-1.5 bg-blue-100 rounded w-5/6 mb-1" />
              <div className="h-1.5 bg-blue-100 rounded w-full" />
            </div>
            <div className="h-1.5 bg-gray-200 rounded w-full mt-1" />
            <div className="h-1.5 bg-gray-200 rounded w-2/3" />
            <div className="h-1.5 bg-gray-100 rounded w-full" />
          </div>
        </div>

        {/* AI Panel */}
        <div className="w-52 bg-[#0d0d16] flex flex-col flex-shrink-0">
          {/* Header */}
          <div className="px-3 py-2.5 border-b border-white/6 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#5b8af0]/20 flex items-center justify-center">
              <svg width="10" height="10" fill="none" stroke="#5b8af0" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="text-white/70 font-medium text-[10px]">AI Summary</span>
            <span className="ml-auto text-[9px] text-[#5b8af0] bg-[#5b8af0]/10 px-1.5 py-0.5 rounded-full">Claude</span>
          </div>

          {/* Summary content */}
          <div className="flex-1 px-3 py-3 flex flex-col gap-3 overflow-hidden">
            <div>
              <div className="text-[#5b8af0] text-[9px] font-semibold uppercase tracking-wider mb-1.5">Summary</div>
              <div className="text-white/60 text-[10px] leading-relaxed">
                Q4 revenue reached <span className="text-white">$2.4M</span>, up <span className="text-green-400">34%</span> YoY. User growth accelerated to <span className="text-white">12.8K</span> active users driven by enterprise adoption.
              </div>
            </div>

            <div>
              <div className="text-[#5b8af0] text-[9px] font-semibold uppercase tracking-wider mb-1.5">Key Points</div>
              <div className="flex flex-col gap-1.5">
                {["North America leads with 58% of revenue", "Churn rate reduced to 3.2%", "New enterprise tier launched in Oct"].map((point) => (
                  <div key={point} className="flex items-start gap-1.5 text-white/50 text-[10px]">
                    <span className="text-[#5b8af0] mt-0.5 flex-shrink-0">·</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[#5b8af0] text-[9px] font-semibold uppercase tracking-wider mb-1.5">Tags</div>
              <div className="flex flex-wrap gap-1">
                {["Finance", "Q4", "Revenue", "Growth"].map((tag) => (
                  <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/6 text-white/40">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Save to Knowledge */}
          <div className="px-3 py-2.5 border-t border-white/6">
            <button className="w-full bg-[#5b8af0]/15 hover:bg-[#5b8af0]/25 border border-[#5b8af0]/30 text-[#5b8af0] text-[10px] font-medium py-1.5 rounded-lg transition-colors">
              Save to Knowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
