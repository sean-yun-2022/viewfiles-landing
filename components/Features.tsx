"use client";
import { useState, useEffect, useRef } from "react";
import ViewerMockup from "./mockups/ViewerMockup";
import AIMockup from "./mockups/AIMockup";
import GraphMockup from "./mockups/GraphMockup";
import BrowserMockup from "./mockups/BrowserMockup";

const tabs = [
  {
    id: "viewer",
    label: "Universal Viewer",
    icon: "📄",
    headline: "Open any file instantly",
    desc: "PDF, Word, Excel, PPT, Markdown, images, and code — all in one place. No extra apps. No waiting.",
    mockup: <ViewerMockup />,
  },
  {
    id: "ai",
    label: "AI Summary",
    icon: "✦",
    headline: "AI that lives next to your files",
    desc: "Summarize any document, extract key points, and save insights to your knowledge base — without leaving the app.",
    mockup: <AIMockup />,
  },
  {
    id: "browser",
    label: "Browser & Clips",
    icon: "🌐",
    headline: "Browse and clip the web",
    desc: "Use the built-in browser to research without leaving the app. Hit Knowledge Save on any page to clip, summarize, and add it to your graph.",
    mockup: <BrowserMockup />,
  },
  {
    id: "graph",
    label: "Knowledge Graph",
    icon: "◈",
    headline: "See how your knowledge connects",
    desc: "Every file, note, and web clip you save becomes a node in your personal 3D knowledge graph. Discover connections you never noticed.",
    mockup: <GraphMockup />,
  },
];

const AUTO_INTERVAL = 2000;

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
    // 5초 후 자동 재개
    setTimeout(() => setPaused(false), 5000);
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
            Four core features that replace five different apps.
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
                className={`h-full rounded-full bg-[#5b8af0] transition-all ${
                  activeIdx === idx && !paused ? "animate-progress" : activeIdx === idx ? "w-full" : "w-0"
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
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {current.headline}
            </h3>
            <p className="text-white/50 leading-relaxed">
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
            {current.mockup}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
