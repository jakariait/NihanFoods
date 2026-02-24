import { useState, useEffect } from "react";

const features = [
  { icon: "🌿", label: "১০০% খাঁটি", desc: "নিজস্ব আখ ক্ষেত ও কারখানা" },
  { icon: "✅", label: "প্রিজারভেটিভ মুক্ত", desc: "কোনো রাসায়নিক নেই" },
  { icon: "💸", label: "সাশ্রয়ী দাম", desc: "বাংলাদেশে সবচেয়ে কম দামে" },
  { icon: "🚚", label: "হোম ডেলিভারি", desc: "অগ্রিম টাকা ছাড়াই" },
];

export default function SugarLanding() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5"
      style={{
        background: "linear-gradient(160deg, #fffbf2 0%, #fff7e6 40%, #fef3dc 100%)",
        fontFamily: "'Segoe UI', 'Noto Sans Bengali', sans-serif",
      }}
    >
      {/* Soft blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(255,180,50,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", left: "-60px",
          width: "350px", height: "350px",
          background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
      </div>

      <div
        className="relative w-full "
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Warning pill */}
        <div
          className="mb-5 rounded-2xl p-5"
          style={{
            background: "linear-gradient(135deg, #fff3cd, #ffe8a3)",
            border: "1.5px solid #f5c842",
            boxShadow: "0 4px 20px rgba(245,180,0,0.15)",
          }}
        >
          <div className="flex gap-3 items-start">
            <div className="text-2xl mt-0.5">⚠️</div>
            <div>
              <h2 className="font-bold text-base mb-1" style={{ color: "#7a4f00" }}>
                ডায়াবেটিস, ওজন বা হজমের ঝামেলা?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#a06800" }}>
                সাদা চিনি ধীরে ধীরে শরীরের ক্ষতি করছে – সময় এখন স্বাস্থ্যকর বিকল্প বেছে নেওয়ার!
              </p>
            </div>
          </div>
        </div>

        {/* Main card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "#ffffff",
            boxShadow: "0 20px 60px rgba(180,100,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
            border: "1px solid rgba(245,200,66,0.3)",
          }}
        >
          {/* Hero top band */}
          <div
            className="px-7 pt-8 pb-6 text-center"
            style={{
              background: "linear-gradient(135deg, #fffbf0 0%, #fff3d0 100%)",
              borderBottom: "1px solid #f5e9c0",
            }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "linear-gradient(135deg, #f5c842, #e8a000)", boxShadow: "0 8px 24px rgba(232,160,0,0.35)" }}>
              <span className="text-3xl">🍯</span>
            </div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: "#3d2000" }}>
              আখের লাল চিনি
            </h1>
            <p className="text-sm font-medium" style={{ color: "#c8860a" }}>
              হাতে তৈরি · ২০২১ সাল থেকে বিশ্বস্ত
            </p>
          </div>

          <div className="px-6 py-6">
            {/* Section title */}
            <p className="text-center text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#aaa" }}>
              কেন ব্যবহার করবেন?
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4"
                  style={{
                    background: "linear-gradient(135deg, #fffbf2, #fff7e6)",
                    border: "1.5px solid #f5e9c0",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.92)",
                    transition: `all 0.5s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.08}s`,
                  }}
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="font-bold text-sm mb-0.5" style={{ color: "#3d2000" }}>{f.label}</div>
                  <div className="text-xs" style={{ color: "#a06800" }}>{f.desc}</div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div
              className="rounded-2xl p-4 mb-5 flex gap-3 items-start"
              style={{
                background: "linear-gradient(135deg, #f0faf0, #e8f5e9)",
                border: "1.5px solid #c8e6c9",
              }}
            >
              <span className="text-xl mt-0.5">🏆</span>
              <p className="text-sm leading-relaxed" style={{ color: "#2e7d32" }}>
                ২০২১ সাল থেকে বিক্রি করছি — এখন পর্যন্ত{" "}
                <span className="font-bold">কোনো কমপ্লেইন আসেনি!</span>{" "}
                আশা করি আপনাদেরও থাকবে না।
              </p>
            </div>

            {/* CTA */}
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-full py-4 rounded-2xl font-bold text-base"
              style={{
                background: hovered
                  ? "linear-gradient(135deg, #e8a000, #f5c842)"
                  : "linear-gradient(135deg, #f5c842, #e8a000)",
                color: "#3d2000",
                border: "none",
                cursor: "pointer",
                boxShadow: hovered
                  ? "0 12px 40px rgba(232,160,0,0.5)"
                  : "0 6px 24px rgba(232,160,0,0.3)",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
              }}
            >
              🛒 অর্ডার করতে ক্লিক করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}