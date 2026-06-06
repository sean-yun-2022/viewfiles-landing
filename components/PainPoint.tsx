const items = [
  { before: "PDF → Open in Preview separately", after: "Opens instantly with one click" },
  { before: "Word file → Microsoft Word required", after: "View without installing Word" },
  { before: "Excel → Excel installation required", after: "See every sheet tab instantly" },
  { before: "AI summary → Switch to ChatGPT tab", after: "Summarize right next to the file" },
  { before: "Find a file → Get lost in Finder", after: "Full-text search finds it instantly" },
  { before: "Save web page → Need external app", after: "Clip it with the built-in browser" },
];

export default function PainPoint() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Tired of opening a different app<br />for every file?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Mac Finder shows files but can't open them. View Files opens everything right there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/4 border border-white/8 rounded-xl p-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-red-400/70 text-sm mb-2">
                  <span className="text-base">✕</span>
                  <span>{item.before}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <span className="text-base">✓</span>
                  <span>{item.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
