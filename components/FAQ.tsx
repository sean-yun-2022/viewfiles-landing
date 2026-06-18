"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Where are my files stored?",
    a: "All your files stay on your computer. View Files never uploads or transmits your files to any server. It reads local files and displays them — that's it.",
  },
  {
    q: "Which Mac models are supported?",
    a: "View Files supports Mac with Apple Silicon (M1 and later) and Intel. Windows support is coming soon.",
  },
  {
    q: "How do the AI features work?",
    a: "AI summarizes documents and web pages, auto-tags them, and saves them to your knowledge base. The 30-day free trial includes 20 AI uses per month; Pro includes 30 per month.",
  },
  {
    q: "What happens to my data after the trial ends?",
    a: "After the 30-day trial, the file viewer, browser, notes, clips, and search stay free — only AI features require Pro. Your files are never deleted; they remain on your computer.",
  },
  {
    q: "What is your refund policy?",
    a: "If you're not satisfied within 7 days of purchase, email us at support@viewfiles.app and we'll issue a full refund, no questions asked.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#5b8af0] text-sm font-medium uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently asked questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/8 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white hover:bg-white/3 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/6">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
