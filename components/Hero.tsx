import Image from "next/image";

async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/sean-yun-2022/viewfiles-releases/releases/latest",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return "";
    const data = await res.json();
    return data.tag_name ?? "";
  } catch {
    return "";
  }
}

export default async function Hero() {
  const version = await getLatestVersion();
  return (
    <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5b8af0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* App icon + 말풍선 */}
        <div className="flex justify-center items-center gap-3 mb-6 relative">
          <div className="relative">
            <Image src="/icon.png" alt="View Files" width={88} height={88} className="rounded-2xl shadow-2xl shadow-[#5b8af0]/20" />
          </div>
          {/* 말풍선 */}
          <div className="relative bg-white/8 border border-white/12 rounded-2xl px-4 py-2.5 text-left max-w-[160px]">
            <p className="text-white text-sm font-medium leading-snug">Mac Finder is<br/>so annoying! 😤</p>
            <p className="text-white/40 text-[11px] mt-0.5">— every Mac user</p>
            {/* 말풍선 꼬리 (왼쪽) */}
            <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '8px solid rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/60 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Free 30-day trial · No credit card required
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          View every file, one app.
          <br />
          <span className="text-[#5b8af0]">No more switching.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          View Files opens PDF, Word, Excel, PPT, Markdown, images, and code
          instantly — without installing extra apps. Built-in browser, AI summary,
          and 3D Knowledge Graph included.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2.5 bg-[#5b8af0] hover:bg-[#7aa3f5] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
          >
            <AppleIcon />
            Download for Mac
          </a>
          <a
            href="#download"
            className="flex items-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
          >
            <WindowsIcon />
            Download for Windows
          </a>
        </div>

        <p className="mt-5 text-sm text-white/30">
          Mac (Apple Silicon & Intel) · Windows · Free 30-day trial
          {version && <span className="ml-2 text-white/20">· {version}</span>}
        </p>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V5.5l-9 1.97V12h9zm-17 .75H9v6.57l-6-1.32v-5.25zm17 0h-9v5.53l9 1.97V12.75z" />
    </svg>
  );
}
