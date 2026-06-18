const steps = [
  {
    num: "01",
    title: "Download & Install",
    desc: "Open the DMG and drag it to your Applications folder. Done in 30 seconds.",
    detail: "Mac (Apple Silicon & Intel) · Windows",
  },
  {
    num: "02",
    title: "Sign in with Email",
    desc: "No password. Enter your email, enter the OTP code you receive, and you're in.",
    detail: "No password to remember",
  },
  {
    num: "03",
    title: "Connect a Folder",
    desc: "No need to move your files. Just connect the folders you already have.",
    detail: "Files stay local · No cloud dependency",
  },
  {
    num: "04",
    title: "Open Any File",
    desc: "Click any PDF, Word, Excel, PPT, Markdown, image, or code file — it opens instantly.",
    detail: "No extra apps required",
  },
  {
    num: "05",
    title: "Use AI Features",
    desc: "Summarize and auto-tag any document or web page, then save it to your knowledge base. 20 AI uses/month on the trial, 30/month on Pro.",
    detail: "Powered by Claude · Pro plan",
  },
];

export default function Onboarding() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Up and running in 5 minutes
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No complex setup. View Files is ready to use right after installation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#5b8af0]/15 border border-[#5b8af0]/30 items-center justify-center z-10">
                  <span className="text-[#5b8af0] text-xs font-bold">{step.num}</span>
                </div>

                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right md:pr-20" : "md:pl-20"}`}>
                  <div className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#5b8af0]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <span className="text-[#5b8af0] text-xs font-bold bg-[#5b8af0]/10 px-2.5 py-1 rounded-full">{step.num}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <span className="text-xs text-[#5b8af0]/70 bg-[#5b8af0]/8 px-3 py-1 rounded-full">{step.detail}</span>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
