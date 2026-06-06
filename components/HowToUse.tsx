import ViewerMockup from "./mockups/ViewerMockup";
import TabsMockup from "./mockups/TabsMockup";
import AIMockup from "./mockups/AIMockup";
import BrowserMockup from "./mockups/BrowserMockup";
import GraphMockup from "./mockups/GraphMockup";

const steps = [
  {
    num: "01",
    tag: "File Viewer",
    title: "Open any file instantly",
    desc: "Click any file in the sidebar — PDF, Word, Excel, PPT, Markdown, image, or code. It opens immediately. No extra apps required.",
    bullets: ["PDF, DOCX, XLSX, PPTX built-in", "Markdown with syntax highlight", "Images and code supported"],
    mockup: <ViewerMockup />,
    reverse: false,
  },
  {
    num: "02",
    tag: "Tabs",
    title: "Multi-tab & multi-window",
    desc: "Open multiple files at once in tabs. Need side-by-side? Drag any tab outside the window and it instantly opens as a separate window.",
    bullets: ["Open multiple files in tabs", "Click + to add more tabs", "Drag tab out → new window"],
    mockup: <TabsMockup />,
    reverse: true,
  },
  {
    num: "03",
    tag: "AI Feature",
    title: "Summarize with AI",
    desc: "Get an instant AI summary next to any document. Key points extracted, tags suggested, save to Knowledge Base with one click.",
    bullets: ["Claude-powered summaries", "Auto tag suggestions", "One-click save to Knowledge Base"],
    mockup: <AIMockup />,
    reverse: false,
  },
  {
    num: "04",
    tag: "Browser",
    title: "Browse and clip the web",
    desc: "Full built-in browser — research without leaving the app. Hit Knowledge Save on any page to clip it, summarize it, and add it to your graph.",
    bullets: ["Full built-in web browser", "One-click web page clipping", "Auto AI summary on save"],
    mockup: <BrowserMockup />,
    reverse: true,
  },
  {
    num: "05",
    tag: "Knowledge Graph",
    title: "See your knowledge connect",
    desc: "Every file and web clip becomes a node in your 3D Knowledge Graph. Rotate, zoom, and click nodes to explore how your ideas connect.",
    bullets: ["3D interactive graph", "Click nodes to preview content", "Drag to rotate, scroll to zoom"],
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

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            See it in action
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every feature, shown with a live interactive demo.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col ${step.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              {/* Text */}
              <div className="md:w-2/5 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="text-[#5b8af0] text-xs font-bold bg-[#5b8af0]/10 border border-[#5b8af0]/20 px-2.5 py-1 rounded-full">
                    {step.num}
                  </span>
                  <span className="text-[#5b8af0] text-xs font-medium uppercase tracking-widest">{step.tag}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{step.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
