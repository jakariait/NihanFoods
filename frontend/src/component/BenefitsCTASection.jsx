import { useEffect, useRef, useState } from "react";

function AnimCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const trustBadges = [
  { icon: "🚚", text: "Anywhere in Bangladesh, no extra cost" },
  { icon: "👥", text: "Trusted by thousands of real users" },
  { icon: "⭐", text: "৯৯% গ্রাহক সন্তুষ্টি" },
];

const quickBullets = [
  "কম প্রসেসড, স্বাদ ও ঘ্রাণ বজায়",
  "হাতে তৈরি ঐতিহ্যবাহী পদ্ধতি",
  "আয়রন, ক্যালসিয়াম ও পটাশিয়াম সামান্য",
];

const benefitCards = [
  {
    icon: "☕",
    title: "স্বাদ ও ঘ্রাণে পার্থক্য",
    bullets: [
      "চা, পিঠা বা রান্নায় ব্যবহার করলে স্বাদটা অন্য যে কোনো চিনি থেকে আলাদা।",
      "একবার ব্যবহার করলে মনে হবে, এটাই আসল চিনি।",
    ],
    accent: "rgba(202,138,4,0.14)", border: "rgba(251,191,36,0.22)", iconBg: "rgba(202,138,4,0.2)",
  },
  {
    icon: "🌿",
    title: "কম প্রসেসড, স্বাদ ও ঘ্রাণ বজায়",
    bullets: [
      "চা, পিঠা বা রান্নার স্বাদকে একদম নতুন মাত্রা দেয়।",
      "একবার ব্যবহার করলে আপনি বুঝবেন কেন মানুষ শতাব্দী ধরে এটি পছন্দ করছে।",
    ],
    accent: "rgba(16,185,129,0.14)", border: "rgba(52,211,153,0.22)", iconBg: "rgba(16,185,129,0.2)",
  },
  {
    icon: "💎",
    title: "প্রাকৃতিক খনিজ উপাদান",
    bullets: [
      "আয়রন, ক্যালসিয়াম, পটাশিয়াম — প্রতিটি চামচে সুস্থতার স্পর্শ।",
      "শুধু মিষ্টি নয়, এটি আপনার ঘরে স্বাস্থ্যও নিয়ে আসে।",
    ],
    accent: "rgba(5,150,105,0.14)", border: "rgba(16,185,129,0.22)", iconBg: "rgba(5,150,105,0.2)",
  },
  {
    icon: "🚚",
    title: "ফ্রি হোম ডেলিভারি — পুরো বাংলাদেশে",
    bullets: [
      "আপনার ঘরে পৌঁছাবে যত্নের সাথে, কোন অতিরিক্ত খরচ ছাড়াই।",
      "এখনই অর্ডার করুন, স্বাদ এবং আরাম একসাথে উপভোগ করুন।",
    ],
    accent: "rgba(16,185,129,0.14)", border: "rgba(52,211,153,0.22)", iconBg: "rgba(16,185,129,0.2)",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "৩০,০০০+ পরিবার ইতিমধ্যেই পছন্দ করেছে",
    bullets: [
      "হাজার হাজার পরিবার ইতিমধ্যেই আমাদের চিনি ব্যবহার করছে।",
      "এবার আপনার পালা, পরিবারের প্রতিটি মুহূর্তে মিষ্টি ছড়িয়ে দিন।",
    ],
    accent: "rgba(234,88,12,0.12)", border: "rgba(234,88,12,0.22)", iconBg: "rgba(234,88,12,0.18)",
  },
];

export default function BenefitsCTASection() {
  return (
    <section>

      {/* ══════════ CONTENT ══════════ */}
      <div className={"px-10 py-10"}>


        {/* Final CTA block */}
        <AnimCard delay={900}>
          <div style={{ background:"rgba(5,46,22,0.55)", backdropFilter:"blur(16px)", border:"1px solid rgba(52,211,153,0.18)", borderRadius:"22px", padding:"52px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
            {/* corner glows */}
            <div style={{ position:"absolute", top:"-30%", right:"-10%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", bottom:"-30%", left:"-10%", width:"260px", height:"260px", background:"radial-gradient(circle, rgba(202,138,4,0.08) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none" }}/>

            {/* delivery banner inside CTA */}
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(52,211,153,0.12)", border:"1px solid rgba(52,211,153,0.28)", borderRadius:"100px", padding:"8px 20px", marginBottom:"22px" }}>
                <span style={{ fontSize:"16px", animation:"deliveryBounce 2s ease-in-out infinite", display:"inline-block" }}>🚚</span>
                <span style={{ color:"#6ee7b7", fontSize:"13px", fontWeight:600 }}>ফ্রি ডেলিভারি — সারা বাংলাদেশ</span>
              </div>

              <p style={{ fontSize:"clamp(16px,2vw,22px)", fontWeight:700, color:"rgba(255,255,255,0.75)", lineHeight:1.5, margin:"0 0 6px" }}>
                ৩০,০০০+ পরিবার ইতিমধ্যেই পছন্দ করেছে
              </p>
              <p style={{ fontSize:"clamp(22px,3.5vw,40px)", fontWeight:900, color:"#fff", lineHeight:1.25, margin:"0 0 10px" }}>
                এবার <span className="gold-shimmer">আপনার পালা</span>
              </p>
              <p style={{ fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(167,243,208,0.7)", margin:"0 0 32px", lineHeight:1.7 }}>
                পরিবারের প্রতিটি মুহূর্তে মিষ্টি ছড়িয়ে দিন
              </p>

              <button className="cta-primary" style={{ background:"linear-gradient(135deg, #d97706 0%, #b45309 100%)", color:"#fff", border:"none", borderRadius:"14px", padding:"18px 52px", fontSize:"clamp(15px,2vw,20px)", fontFamily:"inherit", fontWeight:700, cursor:"pointer", boxShadow:"0 10px 35px rgba(180,83,9,0.4)", letterSpacing:"0.02em" }}>
                এখনই অর্ডার করুন →
              </button>

              {/* stat row under button */}
              <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"0", marginTop:"32px", background:"rgba(5,46,22,0.4)", border:"1px solid rgba(52,211,153,0.1)", borderRadius:"14px", overflow:"hidden", maxWidth:"520px", margin:"32px auto 0" }}>
                {[
                  { num:"৩০,০০০+", label:"সন্তুষ্ট পরিবার", icon:"👨‍👩‍👧‍👦" },
                  { num:"৯৯%",     label:"গ্রাহক সন্তুষ্টি",  icon:"⭐" },
                  { num:"১০০%",    label:"ফ্রি ডেলিভারি",    icon:"🚚" },
                ].map((s,i)=>(
                  <div key={i} style={{ flex:"1", padding:"16px 10px", textAlign:"center", borderRight: i<2 ? "1px solid rgba(52,211,153,0.1)" : "none" }}>
                    <div style={{ fontSize:"16px", marginBottom:"4px" }}>{s.icon}</div>
                    <div style={{ fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900, color:"#fbbf24", lineHeight:1 }}>{s.num}</div>
                    <div style={{ fontSize:"11px", color:"rgba(167,243,208,0.55)", marginTop:"4px", letterSpacing:"0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ width:"64px", height:"3px", borderRadius:"100px", margin:"24px auto 0", background:"linear-gradient(90deg, #34d399, #fbbf24)" }}/>
            </div>
          </div>
        </AnimCard>

      </div>
    </section>
  );
}