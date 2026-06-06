import LoginMockup from "./mockups/LoginMockup";
import FolderMockup from "./mockups/FolderMockup";
import ViewerMockup from "./mockups/ViewerMockup";
import TabsMockup from "./mockups/TabsMockup";
import AIMockup from "./mockups/AIMockup";
import BrowserMockup from "./mockups/BrowserMockup";
import GraphMockup from "./mockups/GraphMockup";

const steps = [
  {
    num: "01",
    tag: "Get Started",
    title: "Sign in with your email",
    desc: "No password needed. Enter your email, receive a 6-digit code, and you're in. Your 30-day free trial starts immediately — no credit card required.",
    bullets: [
      "Works with any email address",
      "6-digit OTP, no password to remember",
      "30-day trial starts on first sign-in",
    ],
    mockup: <LoginMockup />,
    reverse: false,
  },
  {
    num: "02",
    tag: "Setup",
    title: "Connect your folders",
    desc: "Point View Files at any folder on your computer. Your files never leave your machine — View Files reads them locally, with no upload or cloud sync.",
    bullets: [
      "Files stay on your computer",
      "Connect multiple folders at once",
      "All file types indexed instantly",
    ],
    mockup: <FolderMockup />,
    reverse: true,
  },
  {
    num: "03",
    tag: "File Viewer",
    title: "Open any file instantly",
    desc: "Click any file in the sidebar — PDF, Word, Excel, PPT, Markdown, image, or code. It opens immediately in the built-in viewer. No extra apps required.",
    bullets: [
      "PDF, DOCX, XLSX, PPTX built-in",
      "Markdown rendered with syntax highlight",
      "Images and code with full highlight support",
    ],
    mockup: <ViewerMockup />,
    reverse: false,
  },
  {
    num: "04",
    tag: "Tabs",
    title: "Multi-tab & multi-window workflow",
    desc: "Open multiple files at once in tabs — just like a browser. Need to compare two documents side by side? Drag any tab outside the window and it opens as a separate window instantly.",
    bullets: [
      "Open multiple files in tabs simultaneously",
      "Click + to add more tabs anytime",
      "Drag a tab outside → opens as new window",
    ],
    mockup: <TabsMockup />,
    reverse: true,
  },
  {
    num: "05",
    tag: "AI Feature",
    title: "Summarize with AI",
    desc: "Open any document and get an instant AI summary in the right panel. Key points extracted, tags suggested, and save to your Knowledge Base with one click.",
    bullets: [
      "Claude-powered summaries",
      "Auto tag suggestions",
      "Save to Knowledge Base in one click",
    ],
    mockup: <AIMockup />,
    reverse: false,
  },
  {
    num: "06",
    tag: "Browser",
    title: "Browse and clip the web",
    desc: "Use the built-in browser to research without leaving the app. Hit Knowledge Save on any page to clip it, summarize it with AI, and add it to your graph.",
    bullets: [
      "Full built-in web browser",
      "One-click web page clipping",
      "Auto AI summary on save",
    ],
    mockup: <BrowserMockup />,
    reverse: true,
  },
  {
    num: "07",
    tag: "Knowledge Graph",
    title: "See your knowledge connect",
    desc: "Every file and web clip you save becomes a node in your 3D Knowledge Graph. Rotate, zoom, and click nodes to explore how your ideas are connected.",
    bullets: [
      "3D interactive graph",
      "Click nodes to preview content",
      "Drag to rotate, scroll to zoom",
    ],
    mockup: <GraphMockup />,
    reverse: false,
  },
];

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-white/50">
      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#5b8af0]/15 flex items-center justify-center flex-shrink-0">
        <span className="text-[#5b8af0] text-[9px]">✓</span>
      </span>
      {text}
    </li>
  );
}

export default function FeaturesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5b8af0]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">Features</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
            Everything View Files<br />can do
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            From file viewing to AI-powered knowledge management —
            all in one app, no switching required.
          </p>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
            {steps.map((s, i) => (
              <a key={s.num} href={`#step-${s.num}`} className="flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-white/40 font-medium group-hover:border-[#5b8af0]/40 group-hover:text-[#5b8af0] transition-colors">
                  {s.num}
                </div>
                {i < steps.length - 1 && <div className="w-5 h-px bg-white/10" />}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {steps.map((step) => (
        <section
          key={step.num}
          id={`step-${step.num}`}
          className={`py-20 px-6 ${step.reverse ? "bg-white/[0.02]" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${step.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
              {/* Text */}
              <div className="md:w-2/5 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="text-[#5b8af0] text-xs font-bold bg-[#5b8af0]/10 border border-[#5b8af0]/20 px-2.5 py-1 rounded-full">
                    {step.num}
                  </span>
                  <span className="text-[#5b8af0] text-xs font-medium uppercase tracking-widest">{step.tag}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">{step.title}</h2>
                <p className="text-white/50 leading-relaxed text-sm">{step.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {step.bullets.map(b => <Bullet key={b} text={b} />)}
                </ul>
              </div>

              {/* Mockup */}
              <div className="md:w-3/5 w-full">
                {step.mockup}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to try it?</h2>
          <p className="text-white/50 mb-10">30-day free trial · No credit card required</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/download/mac"
              className="flex items-center gap-2.5 bg-[#5b8af0] hover:bg-[#7aa3f5] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Download for Mac
            </a>
            <a
              href="/download/windows"
              className="flex items-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Download for Windows
            </a>
          </div>
          <p className="mt-6 text-sm text-white/30">
            <a href="/" className="hover:text-white/50 transition-colors">← Back to home</a>
          </p>
        </div>
      </section>
    </>
  );
}
