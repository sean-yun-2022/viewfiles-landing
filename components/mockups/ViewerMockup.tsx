"use client";
import { useState } from "react";

const files = [
  { name: "Q4 Report.pdf",       ext: "PDF",  color: "#ef4444" },
  { name: "Project Plan.docx",   ext: "DOCX", color: "#3b82f6" },
  { name: "Budget 2026.xlsx",    ext: "XLSX", color: "#22c55e" },
  { name: "README.md",           ext: "MD",   color: "#a78bfa" },
  { name: "Presentation.pptx",   ext: "PPTX", color: "#f97316" },
  { name: "notes.md",            ext: "MD",   color: "#a78bfa" },
  { name: "screenshot.png",      ext: "PNG",  color: "#ec4899" },
  { name: "index.ts",            ext: "TS",   color: "#facc15" },
];

function PDFViewer() {
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/30 text-[10px]">
          <span className="bg-white/6 px-2 py-0.5 rounded">← Prev</span>
          <span>Page 1 / 12</span>
          <span className="bg-white/6 px-2 py-0.5 rounded">Next →</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/30 text-[10px]">
          <span className="bg-white/6 px-2 py-0.5 rounded">−</span>
          <span>100%</span>
          <span className="bg-white/6 px-2 py-0.5 rounded">+</span>
        </div>
      </div>
      <div className="bg-white rounded-lg mx-auto w-full max-w-xs p-4 flex flex-col gap-2 flex-1">
        <div className="text-[#1a1a2e] font-bold text-sm border-b border-gray-200 pb-2">Q4 Financial Report 2025</div>
        <div className="h-1.5 bg-gray-200 rounded w-3/4" /><div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-5/6" />
        <div className="mt-1 grid grid-cols-3 gap-2">
          <div className="bg-blue-50 rounded p-1.5"><div className="text-[8px] text-blue-400 font-medium">Revenue</div><div className="text-[10px] font-bold text-blue-700">$2.4M</div></div>
          <div className="bg-green-50 rounded p-1.5"><div className="text-[8px] text-green-400 font-medium">Growth</div><div className="text-[10px] font-bold text-green-700">+34%</div></div>
          <div className="bg-purple-50 rounded p-1.5"><div className="text-[8px] text-purple-400 font-medium">Users</div><div className="text-[10px] font-bold text-purple-700">12.8K</div></div>
        </div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-4/5" /><div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-2/3" />
        <div className="h-1.5 bg-gray-100 rounded w-full mt-1" /><div className="h-1.5 bg-gray-100 rounded w-5/6" />
      </div>
    </div>
  );
}

function DocxViewer() {
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-white/30 text-[10px]">
        <span className="bg-white/6 px-2 py-0.5 rounded">← Prev</span><span>Page 1 / 4</span><span className="bg-white/6 px-2 py-0.5 rounded">Next →</span>
      </div>
      <div className="bg-white rounded-lg mx-auto w-full max-w-xs p-4 flex flex-col gap-2 flex-1">
        <div className="text-[#1a1a2e] font-bold text-sm border-b border-gray-200 pb-2">Project Plan — Q1 2026</div>
        <div className="text-[9px] text-blue-600 font-semibold mt-1">1. Overview</div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-5/6" /><div className="h-1.5 bg-gray-200 rounded w-4/5" />
        <div className="text-[9px] text-blue-600 font-semibold mt-1">2. Timeline</div>
        <div className="flex gap-1 mt-0.5">
          {["Jan","Feb","Mar","Apr"].map(m => <div key={m} className="flex-1 bg-blue-50 rounded text-center text-[7px] text-blue-400 py-1">{m}</div>)}
        </div>
        <div className="text-[9px] text-blue-600 font-semibold mt-1">3. Resources</div>
        <div className="h-1.5 bg-gray-200 rounded w-full" /><div className="h-1.5 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
}

function XlsxViewer() {
  const rows = [
    ["Category","Q1","Q2","Q3","Q4"],
    ["Revenue","$480K","$510K","$590K","$620K"],
    ["Expenses","$320K","$340K","$370K","$390K"],
    ["Profit","$160K","$170K","$220K","$230K"],
    ["Growth","—","6.3%","15.7%","4.9%"],
  ];
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex flex-col gap-2">
      <div className="flex gap-1 text-[9px]">
        {["Sheet 1","Sheet 2","Summary"].map((s,i) => (
          <span key={s} className={`px-2.5 py-1 rounded-t ${i===0 ? "bg-[#22c55e]/15 text-green-400 border-b-2 border-green-400" : "bg-white/4 text-white/30"}`}>{s}</span>
        ))}
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border border-white/8">
        <table className="w-full text-[9px]">
          {rows.map((row, ri) => (
            <tr key={ri} className={ri===0 ? "bg-white/6" : ri%2===0 ? "bg-white/2" : ""}>
              {row.map((cell, ci) => (
                <td key={ci} className={`px-2 py-1.5 border-b border-white/4 ${ri===0 ? "text-white/50 font-semibold" : ci===0 ? "text-white/40" : "text-white/70 text-right"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

function MarkdownViewer({ name }: { name: string }) {
  const isNotes = name === "notes.md";
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex flex-col gap-2">
      <div className="flex-1 bg-[#0d0d16] rounded-lg p-4 flex flex-col gap-2 overflow-hidden font-mono text-[10px]">
        {isNotes ? <>
          <div className="text-[#a78bfa] font-bold text-sm"># Meeting Notes</div>
          <div className="text-white/50">## 2026-06-05</div>
          <div className="text-white/60">- Discussed Q2 roadmap priorities</div>
          <div className="text-white/60">- Landing page launch by end of month</div>
          <div className="text-white/60">- LemonSqueezy approval pending</div>
          <div className="text-white/50 mt-1">## Action Items</div>
          <div className="text-white/60">- [ ] Finalize pricing page copy</div>
          <div className="text-white/60">- [x] Set up email routing</div>
          <div className="text-white/60">- [ ] Beta user outreach</div>
        </> : <>
          <div className="text-[#a78bfa] font-bold text-sm"># ViewFiles</div>
          <div className="text-white/50">Universal file viewer for Mac & Windows.</div>
          <div className="text-white/60 mt-1">## Getting Started</div>
          <div className="text-white/60">```bash</div>
          <div className="text-green-400">npm install && npm run dev</div>
          <div className="text-white/60">```</div>
          <div className="text-white/60 mt-1">## Features</div>
          <div className="text-white/60">- PDF, Word, Excel, PPT viewer</div>
          <div className="text-white/60">- Built-in browser</div>
          <div className="text-white/60">- AI Knowledge Graph</div>
        </>}
      </div>
    </div>
  );
}

function PptxViewer() {
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-white/30 text-[10px]">
        <span className="bg-white/6 px-2 py-0.5 rounded">← Prev</span><span>Slide 1 / 8</span><span className="bg-white/6 px-2 py-0.5 rounded">Next →</span>
      </div>
      <div className="flex-1 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-lg mx-auto w-full max-w-xs flex flex-col items-center justify-center p-6 gap-3">
        <div className="text-white font-bold text-base text-center leading-tight">ViewFiles 2026<br/>Product Roadmap</div>
        <div className="w-12 h-0.5 bg-orange-400 rounded" />
        <div className="text-white/60 text-[10px] text-center">Building the future of<br/>knowledge management</div>
        <div className="flex gap-3 mt-2">
          {["Q1","Q2","Q3","Q4"].map((q,i) => (
            <div key={q} className={`text-[9px] px-2 py-1 rounded ${i===0 ? "bg-orange-500/80 text-white" : "bg-white/10 text-white/40"}`}>{q}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageViewer() {
  return (
    <div className="flex-1 bg-[#111119] overflow-hidden p-4 flex items-center justify-center">
      <div className="relative rounded-lg overflow-hidden border border-white/8 shadow-xl" style={{ width: 220, height: 160 }}>
        {/* Fake screenshot */}
        <div className="absolute inset-0 bg-[#0f0f18]" />
        <div className="absolute top-0 left-0 right-0 h-5 bg-[#1a1a26] flex items-center gap-1 px-2">
          <span className="w-2 h-2 rounded-full bg-red-400/60" /><span className="w-2 h-2 rounded-full bg-yellow-400/60" /><span className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <div className="absolute top-5 left-0 bottom-0 w-16 bg-[#0d0d16] border-r border-white/6" />
        <div className="absolute top-5 left-16 right-0 bottom-0 flex items-center justify-center">
          <div className="w-24 h-16 bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/20 text-[8px]">Preview</div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 text-white/40 text-[7px] px-1.5 py-0.5 rounded">1920 × 1080</div>
      </div>
    </div>
  );
}

function CodeViewer() {
  const lines = [
    { n:1,  t: "import", c: "text-[#a78bfa]", code: "import " },
    { n:2,  t: "normal", code: "" },
    { n:3,  t: "comment", code: "// File viewer entry point" },
    { n:4,  t: "normal", code: "" },
    { n:5,  t: "code", code: "export function getCategory(" },
    { n:6,  t: "code", code: "  ext: string" },
    { n:7,  t: "code", code: "): FileCategory {" },
    { n:8,  t: "code", code: "  const e = ext.toLowerCase()" },
    { n:9,  t: "code", code: "  if (DOC_EXTS.has(e))" },
    { n:10, t: "code", code: "    return 'document'" },
    { n:11, t: "code", code: "  if (IMG_EXTS.has(e))" },
    { n:12, t: "code", code: "    return 'image'" },
    { n:13, t: "code", code: "  return 'other'" },
    { n:14, t: "code", code: "}" },
  ];
  return (
    <div className="flex-1 bg-[#0d0d14] overflow-hidden p-3 font-mono text-[9px]">
      {lines.map(l => (
        <div key={l.n} className="flex gap-3 leading-5">
          <span className="text-white/20 w-4 text-right flex-shrink-0">{l.n}</span>
          <span className={
            l.t === "comment" ? "text-white/30 italic" :
            l.t === "import" ? "text-[#a78bfa]" : "text-white/70"
          }>{l.code}</span>
        </div>
      ))}
    </div>
  );
}

function ViewerContent({ file }: { file: typeof files[0] }) {
  if (file.ext === "PDF") return <PDFViewer />;
  if (file.ext === "DOCX") return <DocxViewer />;
  if (file.ext === "XLSX") return <XlsxViewer />;
  if (file.ext === "MD") return <MarkdownViewer name={file.name} />;
  if (file.ext === "PPTX") return <PptxViewer />;
  if (file.ext === "PNG") return <ImageViewer />;
  if (file.ext === "TS") return <CodeViewer />;
  return <PDFViewer />;
}

export default function ViewerMockup() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = files[activeIdx];

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] text-[11px] font-sans select-none">
      {/* Title bar */}
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles</span>
      </div>

      <div className="flex" style={{ height: 340 }}>
        {/* Sidebar */}
        <div className="w-44 bg-[#0d0d16] border-r border-white/6 flex flex-col flex-shrink-0">
          <div className="px-3 py-2.5 border-b border-white/6">
            <div className="bg-white/6 rounded-md px-2 py-1 text-white/30 text-[10px] flex items-center gap-1">
              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              Search files...
            </div>
          </div>
          <div className="px-2 py-2 flex-1">
            <div className="text-white/20 text-[9px] uppercase tracking-wider px-1 mb-1.5">Documents</div>
            {files.map((f, i) => (
              <button
                key={f.name}
                onClick={() => setActiveIdx(i)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 text-left transition-colors ${
                  i === activeIdx ? "bg-[#5b8af0]/15 text-white" : "text-white/40 hover:bg-white/4 hover:text-white/60"
                }`}
              >
                <span
                  className="text-[9px] font-bold rounded flex items-center justify-center flex-shrink-0"
                  style={{ width: 32, height: 18, background: f.color + "22", color: f.color }}
                >
                  {f.ext}
                </span>
                <span className="truncate text-[10px]">{f.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main viewer */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Viewer glow highlight */}
          <div className="absolute inset-0 pointer-events-none rounded-r-xl" style={{ boxShadow: `inset 0 0 40px ${active.color}08` }} />

          {/* Tab bar */}
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#13131e] border-b border-white/6">
            <div className="flex items-center gap-1.5 bg-[#1e1e2e] border border-white/10 rounded-md px-2.5 py-1 text-white text-[10px]">
              <span className="text-[9px] font-bold rounded flex items-center justify-center flex-shrink-0"
                style={{ width: 32, height: 18, background: active.color + "22", color: active.color }}>
                {active.ext}
              </span>
              {active.name}
              <span className="text-white/20 ml-1">×</span>
            </div>
          </div>

          {/* Content */}
          <ViewerContent file={active} />

          {/* Viewer border highlight */}
          <div className="absolute inset-0 pointer-events-none border-l-2 rounded-r-xl transition-all duration-300"
            style={{ borderColor: active.color + "30" }} />
        </div>
      </div>
    </div>
  );
}
