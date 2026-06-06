"use client";
import { useState } from "react";
import Image from "next/image";

type Step = "email" | "otp" | "done";

export default function LoginMockup() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("you@example.com");
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#0f0f18] text-[11px] font-sans select-none">
      <div className="h-8 bg-[#1a1a26] flex items-center gap-1.5 px-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-white/20 text-[10px]">ViewFiles</span>
      </div>

      <div className="flex items-center justify-center bg-[#08080f]" style={{ height: 300 }}>
        <div className="w-72 flex flex-col items-center gap-5">
          {/* Icon */}
          <Image src="/icon.png" alt="View Files" width={52} height={52} className="rounded-xl" />

          {step === "email" && (
            <>
              <div className="text-center">
                <div className="text-white font-semibold text-base mb-1">Sign in to View Files</div>
                <div className="text-white/40 text-[10px]">No password required</div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/6 border border-white/10 rounded-lg px-3 py-2.5 text-white text-[11px] outline-none focus:border-[#5b8af0]/50"
                  placeholder="your@email.com"
                />
                <button
                  onClick={() => setStep("otp")}
                  className="w-full bg-[#5b8af0] hover:bg-[#7aa3f5] text-white font-medium py-2.5 rounded-lg text-[11px] transition-colors"
                >
                  Send Login Code
                </button>
              </div>
              <div className="text-white/20 text-[9px]">We'll send a 6-digit code to your email</div>
            </>
          )}

          {step === "otp" && (
            <>
              <div className="text-center">
                <div className="text-white font-semibold text-base mb-1">Check your email</div>
                <div className="text-white/40 text-[10px]">Code sent to {email}</div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-2 justify-center">
                  {[0,1,2,3,4,5].map(i => (
                    <div key={i} className={`w-9 h-10 rounded-lg border flex items-center justify-center text-sm font-bold transition-colors ${
                      i < otp.length
                        ? "bg-[#5b8af0]/15 border-[#5b8af0]/40 text-[#5b8af0]"
                        : "bg-white/4 border-white/10 text-white/20"
                    }`}>
                      {otp[i] || "·"}
                    </div>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap justify-center mt-1">
                  {["1","2","3","4","5","6","7","8","9","0"].map(n => (
                    <button key={n}
                      onClick={() => { if (otp.length < 6) { const next = otp + n; setOtp(next); if (next.length === 6) setTimeout(() => setStep("done"), 400); }}}
                      className="w-8 h-8 rounded-md bg-white/6 hover:bg-white/10 text-white text-[11px] font-medium transition-colors"
                    >{n}</button>
                  ))}
                </div>
              </div>
            </>
          )}

          {step === "done" && (
            <>
              <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-base mb-1">You're in!</div>
                <div className="text-white/40 text-[10px]">30-day free trial started</div>
              </div>
              <button
                onClick={() => { setStep("email"); setOtp(""); }}
                className="text-white/30 text-[9px] hover:text-white/50 transition-colors"
              >
                Try again ↺
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
