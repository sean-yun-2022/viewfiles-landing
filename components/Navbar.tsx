"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#08080f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight">
          <Image src="/icon.png" alt="View Files" width={28} height={28} className="rounded-md" />
          View Files
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="/#how-to-use" className="hover:text-white transition-colors">How to Use</a>
          <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <a
          href="/#download"
          className="hidden md:inline-flex items-center gap-2 bg-[#5b8af0] hover:bg-[#7aa3f5] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Download Free
        </a>
        <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/8 px-6 py-4 flex flex-col gap-4 text-sm text-white/70">
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#compare" onClick={() => setOpen(false)}>Compare</a>
          <a href="/#how-to-use" onClick={() => setOpen(false)}>How to Use</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/#download" className="text-[#5b8af0] font-medium" onClick={() => setOpen(false)}>Download Free</a>
        </div>
      )}
    </nav>
  );
}
