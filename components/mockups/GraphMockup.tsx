"use client";

const nodes = [
  { id: "center",   x: 48,  y: 52,  r: 28, label: "Knowledge\nBase",  color: "#5b8af0" },
  { id: "ai",       x: 72,  y: 22,  r: 18, label: "AI Research",       color: "#a78bfa" },
  { id: "finance",  x: 20,  y: 28,  r: 18, label: "Finance",            color: "#22c55e" },
  { id: "projects", x: 76,  y: 65,  r: 16, label: "Projects",           color: "#f97316" },
  { id: "notes",    x: 22,  y: 68,  r: 14, label: "Notes",              color: "#ec4899" },
  { id: "q4",       x: 60,  y: 10,  r: 11, label: "Q4 Report",          color: "#ef4444" },
  { id: "budget",   x: 8,   y: 50,  r: 10, label: "Budget",             color: "#22c55e" },
  { id: "roadmap",  x: 88,  y: 42,  r: 10, label: "Roadmap",            color: "#f97316" },
  { id: "ideas",    x: 38,  y: 84,  r: 9,  label: "Ideas",              color: "#ec4899" },
  { id: "llm",      x: 85,  y: 14,  r: 8,  label: "LLM Notes",          color: "#a78bfa" },
  { id: "meeting",  x: 60,  y: 78,  r: 8,  label: "Meetings",           color: "#f97316" },
];

const edges = [
  ["center","ai"],["center","finance"],["center","projects"],["center","notes"],
  ["ai","q4"],["ai","llm"],["finance","budget"],["finance","q4"],
  ["projects","roadmap"],["projects","meeting"],["notes","ideas"],
];

export default function GraphMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0a0a12] text-[11px] font-sans select-none">
      {/* Title bar */}
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles — 3D Knowledge Graph</span>
      </div>

      <div className="flex" style={{ height: 340 }}>
        {/* Graph area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Grid */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallgrid)" />
          </svg>

          {/* Graph SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              {nodes.map(node => (
                <radialGradient key={`grad-${node.id}`} id={`grad-${node.id}`} cx="35%" cy="30%" r="65%">
                  <stop offset="0%" stopColor={node.color} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={node.color} stopOpacity="0.4" />
                </radialGradient>
              ))}
              {nodes.map(node => (
                <filter key={`glow-${node.id}`} id={`glow-${node.id}`} x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation={node.r * 0.5} result="blur1" />
                  <feGaussianBlur stdDeviation={node.r * 1.2} result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
            </defs>

            {/* Edges */}
            {edges.map(([from, to]) => {
              const f = nodes.find(n => n.id === from)!;
              const t = nodes.find(n => n.id === to)!;
              return (
                <line
                  key={`${from}-${to}`}
                  x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                  stroke={f.color}
                  strokeWidth="0.4"
                  strokeOpacity="0.35"
                />
              );
            })}

            {/* Outer glow halos */}
            {nodes.map(node => (
              <circle
                key={`halo-${node.id}`}
                cx={node.x} cy={node.y}
                r={node.r * 1.8}
                fill={node.color}
                opacity="0.07"
                filter={`url(#glow-${node.id})`}
              />
            ))}

            {/* Mid glow */}
            {nodes.map(node => (
              <circle
                key={`mid-${node.id}`}
                cx={node.x} cy={node.y}
                r={node.r * 1.15}
                fill={node.color}
                opacity="0.15"
              />
            ))}

            {/* Main nodes */}
            {nodes.map(node => (
              <circle
                key={`node-${node.id}`}
                cx={node.x} cy={node.y}
                r={node.r * 0.72}
                fill={`url(#grad-${node.id})`}
                filter={`url(#glow-${node.id})`}
              />
            ))}

            {/* Node labels */}
            {nodes.map(node => {
              const lines = node.label.split("\n");
              const yOffset = node.y - node.r * 1.8 - (lines.length > 1 ? 3 : 1.5);
              return lines.map((line, li) => (
                <text
                  key={`label-${node.id}-${li}`}
                  x={node.x}
                  y={yOffset + li * 3.2}
                  textAnchor="middle"
                  fontSize="2.8"
                  fill={node.color}
                  opacity="0.9"
                  fontWeight="500"
                >
                  {line}
                </text>
              ));
            })}
          </svg>

          {/* Controls top-right */}
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            {["3D", "2D", "⊕", "⊖"].map((c, i) => (
              <button
                key={c}
                className={`w-8 h-8 border rounded-md text-[10px] flex items-center justify-center backdrop-blur-sm transition-colors ${
                  i === 0
                    ? "bg-[#5b8af0]/20 border-[#5b8af0]/40 text-[#5b8af0]"
                    : "bg-black/40 border-white/8 text-white/40 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Stats bottom-left */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            {[{ label: "Nodes", value: "48" }, { label: "Links", value: "124" }, { label: "Clusters", value: "6" }].map(s => (
              <div key={s.label} className="bg-black/50 border border-white/8 rounded-lg px-3 py-2 backdrop-blur-sm">
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-white/30 text-[9px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-44 bg-[#0d0d16] border-l border-white/6 flex flex-col flex-shrink-0">
          <div className="px-3 py-3 border-b border-white/6">
            <div className="text-white/40 text-[9px] uppercase tracking-wider mb-2">Selected Node</div>
            {/* Node preview */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#5b8af0]/20 blur-md" />
                <div className="absolute inset-1.5 rounded-full bg-[#5b8af0] opacity-80" />
              </div>
              <div>
                <div className="text-white text-[11px] font-semibold leading-tight">Knowledge Base</div>
                <div className="text-white/30 text-[9px] mt-0.5">48 connected files</div>
              </div>
            </div>
          </div>

          <div className="px-3 py-3 flex-1 overflow-hidden">
            <div className="text-white/30 text-[9px] uppercase tracking-wider mb-2">Connected to</div>
            {[
              { label: "AI Research",  color: "#a78bfa" },
              { label: "Finance",      color: "#22c55e" },
              { label: "Projects",     color: "#f97316" },
              { label: "Notes",        color: "#ec4899" },
            ].map(n => (
              <div key={n.label} className="flex items-center gap-2 py-1.5 text-white/60 text-[10px]">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: n.color, boxShadow: `0 0 4px ${n.color}` }} />
                {n.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
