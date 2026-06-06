const features = [
  { name: "PDF Viewer",           viewfiles: "✅ Built-in",    obsidian: "Plugin",     notion: "❌",           finder: "Separate app" },
  { name: "Word (.docx) Viewer",  viewfiles: "✅ Built-in",    obsidian: "❌",          notion: "❌",           finder: "Needs Word" },
  { name: "Excel (.xlsx) Viewer", viewfiles: "✅ Sheet tabs",  obsidian: "❌",          notion: "❌",           finder: "Needs Excel" },
  { name: "PPT Viewer",           viewfiles: "✅ Built-in",    obsidian: "❌",          notion: "❌",           finder: "Needs PPT" },
  { name: "Markdown Viewer",      viewfiles: "✅ Rendered",    obsidian: "✅",          notion: "✅",           finder: "Plain text only" },
  { name: "Built-in Web Browser", viewfiles: "✅ Built-in",    obsidian: "❌",          notion: "❌",           finder: "❌" },
  { name: "Web Clipping",         viewfiles: "✅ Built-in",    obsidian: "Plugin",     notion: "Extension",    finder: "❌" },
  { name: "AI Summary",           viewfiles: "✅ Claude",      obsidian: "Plugin",     notion: "Business+",    finder: "❌" },
  { name: "3D Knowledge Graph",   viewfiles: "✅ 3D",          obsidian: "2D only",    notion: "❌",           finder: "❌" },
  { name: "Local Storage",        viewfiles: "✅ Local",       obsidian: "✅",          notion: "❌ Cloud only", finder: "✅" },
  { name: "Full-text Search",     viewfiles: "✅ Built-in",    obsidian: "✅",          notion: "✅",           finder: "Limited" },
];

function ViewFilesCell({ value }: { value: string }) {
  const text = value.replace("✅ ", "");
  return (
    <td className="px-6 py-3.5 text-sm bg-[#5b8af0]/6">
      <span className="flex items-center gap-2 text-green-400">
        <span className="flex-shrink-0">✅</span>
        <span className="text-green-400">{text}</span>
      </span>
    </td>
  );
}

function Cell({ value }: { value: string }) {
  const isYes = value.startsWith("✅");
  const isNo = value === "❌" || value.includes("Needs") || value.includes("Business+") || value.includes("Cloud only");

  return (
    <td className="px-4 py-3.5 text-sm text-center">
      <span className={isYes ? "text-green-400" : isNo ? "text-white/25" : "text-white/40"}>
        {value}
      </span>
    </td>
  );
}

export default function Compare() {
  return (
    <section id="compare" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">Why View Files</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            No other app does all of this
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            File viewer + built-in browser + AI + 3D Knowledge Graph in one app — that's View Files' unique position.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8 bg-white/3">
                <th className="px-4 py-4 text-left text-sm font-medium text-white/40 w-44">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#5b8af0] bg-[#5b8af0]/6 w-40">
                  View Files
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-white/40 w-32">Obsidian</th>
                <th className="px-4 py-4 text-center text-sm font-medium text-white/40 w-32">Notion</th>
                <th className="px-4 py-4 text-center text-sm font-medium text-white/40 w-32">Mac Finder</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-4 py-3.5 text-sm text-white/60">{row.name}</td>
                  <ViewFilesCell value={row.viewfiles} />
                  <Cell value={row.obsidian} />
                  <Cell value={row.notion} />
                  <Cell value={row.finder} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-white/30 text-sm mt-6">
          * Plugin/extension options require separate installation and configuration
        </p>
      </div>
    </section>
  );
}
