"use client";
import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    id: "filter",
    label: "Filter by Type",
    icon: "🗂️",
    headline: "Browse by file type, not by folder",
    desc: "Group every PDF, doc, image, and snippet of code with a single click — no more digging through messy folders.",
    img: "/guide/05-filter-by-type.png",
  },
  {
    id: "viewer",
    label: "Universal Viewer",
    icon: "📄",
    headline: "Open any file instantly",
    desc: "PDF, Word, Excel, PowerPoint, Markdown, images, and code — all previewed in full, in one window. No extra apps.",
    img: "/guide/07-universal-viewer.png",
  },
  {
    id: "browser",
    label: "Built-in Browser",
    icon: "🌐",
    headline: "Research without leaving the app",
    desc: "A real browser is built right in, so you can read sources and gather references side-by-side with your files.",
    img: "/guide/08-built-in-browser.png",
  },
  {
    id: "ai",
    label: "Clip + AI",
    icon: "✦",
    headline: "AI that lives next to your files",
    desc: "Clip any page and AI summarizes it, pulls the key points, tags it, and files it into your knowledge base — automatically.",
    img: "/guide/09-clip-a-page-ai-does-the-filing.png",
  },
  {
    id: "graph",
    label: "Knowledge Graph",
    icon: "◈",
    headline: "See how your knowledge connects",
    desc: "Every file, note, and web clip becomes a node in your personal 3D knowledge graph. Discover links you never noticed.",
    img: "/guide/11-3d-knowledge-graph.png",
  },
  {
    id: "search",
    label: "Search",
    icon: "🔍",
    headline: "Search inside everything",
    desc: "Full-text search across file contents, notes, and clips — not just filenames. Find anything in a snap.",
    img: "/guide/12-full-text-search.png",
  },
];

const AUTO_INTERVAL = 5000;

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % tabs.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    if (!paused) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx);
    setPaused(true);
    // 8초 후 자동 재개
    setTimeout(() => setPaused(false), 8000);
  };

  const current = tabs[activeIdx];

  return (
    <section id="features" className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Everything you need, nothing you don't
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Six core features that replace half a dozen different apps.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeIdx === idx
                  ? "bg-[#5b8af0] text-white shadow-lg shadow-[#5b8af0]/20"
                  : "bg-white/5 text-white/50 hover:text-white hover:bg-white/8 border border-white/8"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1.5 justify-center mb-10">
          {tabs.map((_, idx) => (
            <div key={idx} className="h-0.5 flex-1 max-w-16 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full bg-[#5b8af0] ${
                  activeIdx === idx && !paused ? "" : activeIdx === idx ? "w-full" : "w-0"
                }`}
                style={activeIdx === idx && !paused ? {
                  animation: `progress ${AUTO_INTERVAL}ms linear`,
                } : {}}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 key={current.id + "-h"} className="text-2xl md:text-3xl font-bold text-white leading-snug animate-fadein">
              {current.headline}
            </h3>
            <p key={current.id + "-d"} className="text-white/50 leading-relaxed animate-fadein">
              {current.desc}
            </p>
            <a
              href="#how-to-use"
              className="inline-flex items-center gap-2 text-[#5b8af0] text-sm font-medium hover:text-[#7aa3f5] transition-colors mt-2"
            >
              See how it works →
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="relative w-full aspect-[16/10] flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/8 overflow-hidden">
              {tabs.map((tab, idx) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={tab.id}
                  src={tab.img}
                  alt={tab.headline}
                  className={`absolute max-w-[94%] max-h-[92%] object-contain transition-opacity duration-700 ${
                    activeIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(4px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        .animate-fadein { animation: fadein 0.5s ease both }
      `}</style>
    </section>
  );
}
