"use client";
import { useState } from "react";

const folders = [
  { name: "Documents", path: "~/Documents", files: 142 },
  { name: "Downloads", path: "~/Downloads", files: 38 },
  { name: "Research",  path: "~/Dropbox/Research", files: 67 },
];

export default function FolderMockup() {
  const [connected, setConnected] = useState<string[]>([]);
  const [scanning, setScanning] = useState<string | null>(null);

  const connect = (name: string) => {
    if (connected.includes(name)) return;
    setScanning(name);
    setTimeout(() => {
      setScanning(null);
      setConnected(prev => [...prev, name]);
    }, 1200);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] text-[11px] font-sans select-none">
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles — Connect Folders</span>
      </div>

      <div className="bg-[#08080f]" style={{ height: 300 }}>
        <div className="p-5 flex flex-col gap-4">
          <div>
            <div className="text-white font-semibold text-sm mb-1">Connect your folders</div>
            <div className="text-white/40 text-[10px]">Files stay on your computer. No upload, no sync.</div>
          </div>

          <div className="flex flex-col gap-2">
            {folders.map(f => {
              const isConnected = connected.includes(f.name);
              const isScanning = scanning === f.name;
              return (
                <div key={f.name} className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  isConnected
                    ? "bg-green-500/5 border-green-500/20"
                    : "bg-white/4 border-white/8 hover:border-white/15"
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isConnected ? "bg-green-500/15" : "bg-[#5b8af0]/10"
                  }`}>
                    <svg width="16" height="16" fill="none" stroke={isConnected ? "#22c55e" : "#5b8af0"} strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-[11px] font-medium">{f.name}</div>
                    <div className="text-white/30 text-[9px] truncate">{f.path}</div>
                    {isConnected && <div className="text-green-400 text-[9px] mt-0.5">{f.files} files indexed</div>}
                    {isScanning && <div className="text-[#5b8af0] text-[9px] mt-0.5 animate-pulse">Scanning...</div>}
                  </div>
                  <button
                    onClick={() => connect(f.name)}
                    disabled={isConnected || isScanning}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors flex-shrink-0 ${
                      isConnected
                        ? "bg-green-500/10 text-green-400 cursor-default"
                        : isScanning
                        ? "bg-white/5 text-white/30 cursor-default"
                        : "bg-[#5b8af0]/15 text-[#5b8af0] hover:bg-[#5b8af0]/25 border border-[#5b8af0]/30"
                    }`}
                  >
                    {isConnected ? "✓ Connected" : isScanning ? "Scanning..." : "Connect"}
                  </button>
                </div>
              );
            })}
          </div>

          <button className="flex items-center gap-2 text-white/30 text-[10px] hover:text-white/50 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-white/40">+</span>
            Browse for another folder
          </button>

          {connected.length > 0 && (
            <div className="mt-1 p-3 bg-white/3 rounded-xl border border-white/6 text-[10px] text-white/40">
              ✓ {connected.reduce((acc, n) => acc + (folders.find(f => f.name === n)?.files ?? 0), 0)} files ready to view
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
