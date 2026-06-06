"use client";
import { useState } from "react";

const allTabs = [
  { id: "pdf",  ext: "PDF",  color: "#ef4444", name: "Q4 Report.pdf",     content: "pdf" },
  { id: "docx", ext: "DOCX", color: "#3b82f6", name: "Project Plan.docx", content: "docx" },
  { id: "xlsx", ext: "XLSX", color: "#22c55e", name: "Budget 2026.xlsx",   content: "xlsx" },
  { id: "md",   ext: "MD",   color: "#a78bfa", name: "README.md",          content: "md" },
];

function Badge({ ext, color }: { ext: string; color: string }) {
  return (
    <span className="text-[9px] font-bold rounded flex items-center justify-center flex-shrink-0"
      style={{ width: 30, height: 16, background: color + "22", color }}>
      {ext}
    </span>
  );
}

function ContentArea({ tab }: { tab: typeof allTabs[0] }) {
  if (tab.content === "pdf") return (
    <div className="flex-1 flex items-center justify-center bg-[#111119] p-4">
      <div className="bg-white rounded-lg w-full max-w-xs p-4 flex flex-col gap-2 shadow-xl">
        <div className="font-bold text-[#1a1a2e] text-sm border-b border-gray-100 pb-2">Q4 Financial Report 2025</div>
        <div className="h-1.5 bg-gray-200 rounded w-3/4" /><div className="h-1.5 bg-gray-200 rounded w-full" />
        <div className="grid grid-cols-3 gap-1.5 mt-1">
          <div className="bg-blue-50 rounded p-1.5"><div className="text-[7px] text-blue-400">Revenue</div><div className="text-[9px] font-bold text-blue-700">$2.4M</div></div>
          <div className="bg-green-50 rounded p-1.5"><div className="text-[7px] text-green-400">Growth</div><div className="text-[9px] font-bold text-green-700">+34%</div></div>
          <div className="bg-purple-50 rounded p-1.5"><div className="text-[7px] text-purple-400">Users</div><div className="text-[9px] font-bold text-purple-700">12.8K</div></div>
        </div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-100 rounded w-5/6" />
      </div>
    </div>
  );
  if (tab.content === "docx") return (
    <div className="flex-1 flex items-center justify-center bg-[#111119] p-4">
      <div className="bg-white rounded-lg w-full max-w-xs p-4 flex flex-col gap-2 shadow-xl">
        <div className="font-bold text-[#1a1a2e] text-sm border-b border-gray-100 pb-2">Project Plan — Q1 2026</div>
        <div className="text-[9px] text-blue-600 font-semibold">1. Overview</div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-5/6" />
        <div className="text-[9px] text-blue-600 font-semibold mt-1">2. Timeline</div>
        <div className="flex gap-1">
          {["Jan","Feb","Mar","Apr"].map(m=><div key={m} className="flex-1 bg-blue-50 rounded text-center text-[7px] text-blue-400 py-1">{m}</div>)}
        </div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
  if (tab.content === "xlsx") return (
    <div className="flex-1 bg-[#111119] p-4 flex flex-col gap-2">
      <div className="flex gap-1 text-[9px]">
        {["Sheet 1","Sheet 2"].map((s,i)=>(
          <span key={s} className={`px-2 py-0.5 rounded-t ${i===0?"bg-[#22c55e]/15 text-green-400 border-b border-green-400":"bg-white/4 text-white/30"}`}>{s}</span>
        ))}
      </div>
      <div className="rounded-lg border border-white/8 overflow-hidden">
        {[["","Q1","Q2","Q3"],["Revenue","$480K","$510K","$590K"],["Profit","$160K","$170K","$220K"]].map((row,ri)=>(
          <div key={ri} className={`flex text-[9px] ${ri===0?"bg-white/6":""}`}>
            {row.map((c,ci)=>(
              <div key={ci} className={`flex-1 px-2 py-1.5 border-b border-white/4 ${ri===0?"text-white/40 font-semibold":ci===0?"text-white/40":"text-white/70 text-right"}`}>{c}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="flex-1 bg-[#0d0d14] p-4 font-mono text-[9px]">
      {["# ViewFiles","","Universal file viewer for Mac & Windows.","","## Features","- PDF, Word, Excel, PPT viewer","- Built-in browser","- AI Knowledge Graph"].map((l,i)=>(
        <div key={i} className={`leading-5 ${l.startsWith("#")?"text-[#a78bfa] font-bold":l.startsWith("-")?"text-white/60":"text-white/40"}`}>{l || <>&nbsp;</>}</div>
      ))}
    </div>
  );
}

export default function TabsMockup() {
  const [tabs, setTabs] = useState(allTabs.slice(0, 3));
  const [activeId, setActiveId] = useState("pdf");
  const [popped, setPopped] = useState<string | null>(null);

  const active = tabs.find(t => t.id === activeId) ?? tabs[0];

  const closeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = tabs.filter(t => t.id !== id);
    setTabs(next);
    if (activeId === id && next.length > 0) setActiveId(next[0].id);
  };

  const addTab = () => {
    const remaining = allTabs.find(t => !tabs.find(tt => tt.id === t.id));
    if (remaining) { setTabs(prev => [...prev, remaining]); setActiveId(remaining.id); }
  };

  const popOut = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPopped(id);
    setTimeout(() => setPopped(null), 2000);
    const next = tabs.filter(t => t.id !== id);
    setTabs(next);
    if (activeId === id && next.length > 0) setActiveId(next[0].id);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] font-sans select-none relative">
      {/* Title bar */}
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles</span>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#13131e] border-b border-white/6 overflow-x-auto">
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-md cursor-pointer flex-shrink-0 transition-colors ${
              tab.id === activeId
                ? "bg-[#1e1e2e] border border-white/10 text-white"
                : "text-white/30 hover:bg-white/4 hover:text-white/60"
            }`}
          >
            <Badge ext={tab.ext} color={tab.color} />
            <span className="text-[10px] max-w-24 truncate">{tab.name}</span>
            {/* Pop-out button on hover */}
            <button
              onClick={(e) => popOut(tab.id, e)}
              title="Open in new window"
              className="opacity-0 group-hover:opacity-100 text-white/20 hover:text-white/60 transition-all text-[9px] ml-0.5"
            >⤴</button>
            <button
              onClick={(e) => closeTab(tab.id, e)}
              className="opacity-0 group-hover:opacity-100 text-white/20 hover:text-white/60 transition-all"
            >×</button>
          </div>
        ))}
        {tabs.length < allTabs.length && (
          <button onClick={addTab} className="w-6 h-6 flex items-center justify-center text-white/20 hover:text-white/60 hover:bg-white/4 rounded-md transition-colors flex-shrink-0 text-sm">+</button>
        )}
      </div>

      {/* Content */}
      <div className="flex" style={{ height: 260 }}>
        {tabs.length > 0 ? (
          <ContentArea tab={active} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-white/20 text-xs">No tabs open — click + to add</div>
        )}
      </div>

      {/* New window notification */}
      {popped && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#1e1e2e] border border-[#5b8af0]/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl z-20 animate-pulse">
          <span className="text-[#5b8af0] text-sm">⤴</span>
          <span className="text-white/70 text-[11px]">Opened in new window</span>
        </div>
      )}
    </div>
  );
}
