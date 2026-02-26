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
    <section style={{
      fontFamily: "'Noto Serif Bengali', 'Hind Siliguri', Georgia, serif",
      position: "relative", overflow: "hidden", padding: "100px 0 80px",
      background: "linear-gradient(145deg, #052e16 0%, #064e3b 35%, #065f46 60%, #047857 100%)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;600;700;900&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes floatUp   { 0%,100%{transform:rotate(45deg) translateY(0)} 50%{transform:rotate(45deg) translateY(-12px)} }
        @keyframes pulseGlow { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.85;transform:scale(1.08)} }
        @keyframes shimmerGold { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes dotPulse  { 0%,100%{opacity:1;box-shadow:0 0 6px #34d399} 50%{opacity:0.5;box-shadow:0 0 14px #34d399} }
        @keyframes leafSway  { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
        @keyframes deliveryBounce { 0%,100%{transform:translateX(0)} 50%{transform:translateX(6px)} }

        .gold-shimmer {
          background: linear-gradient(90deg,#ca8a04,#fbbf24,#fde68a,#fbbf24,#ca8a04);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: shimmerGold 2.5s linear infinite;
        }
        .benefit-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor:default; }
        .benefit-card:hover { transform:translateY(-5px); box-shadow:0 20px 48px rgba(0,0,0,0.35) !important; }
        .trust-pill { transition: all 0.25s ease; }
        .trust-pill:hover { background:rgba(16,185,129,0.22) !important; border-color:rgba(52,211,153,0.5) !important; transform:translateY(-2px); }
        .cta-primary { transition:all 0.3s ease; }
        .cta-primary:hover { transform:translateY(-3px); box-shadow:0 18px 44px rgba(180,83,9,0.5) !important; }
        .leaf  { animation:leafSway 4s ease-in-out infinite; transform-origin:bottom center; }
        .leaf2 { animation:leafSway 5s ease-in-out infinite reverse; transform-origin:bottom center; }
        .delivery-icon { animation:deliveryBounce 2s ease-in-out infinite; display:inline-block; }
      `}</style>

      {/* BG blobs */}
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"500px", height:"500px", background:"radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)", borderRadius:"50%", animation:"pulseGlow 5s ease-in-out infinite", pointerEvents:"none", zIndex:1 }} />
      <div style={{ position:"absolute", bottom:"-15%", left:"-8%", width:"420px", height:"420px", background:"radial-gradient(circle, rgba(5,150,105,0.22) 0%, transparent 65%)", borderRadius:"50%", animation:"pulseGlow 6s ease-in-out infinite 1.5s", pointerEvents:"none", zIndex:1 }} />
      <div style={{ position:"absolute", top:"40%", left:"38%", width:"350px", height:"350px", background:"radial-gradient(circle, rgba(202,138,4,0.06) 0%, transparent 70%)", borderRadius:"50%", pointerEvents:"none", zIndex:1 }} />

      {/* Vertical lines */}
      <div style={{ position:"absolute", top:0, right:"31%", width:"1px", height:"100%", background:"linear-gradient(to bottom, transparent, rgba(52,211,153,0.12), transparent)", zIndex:1 }} />
      <div style={{ position:"absolute", top:0, right:"33%", width:"1px", height:"100%", background:"linear-gradient(to bottom, transparent, rgba(52,211,153,0.06), transparent)", zIndex:1 }} />

      {/* Sugarcane SVG */}
      <div style={{ position:"absolute", right:"3%", bottom:0, height:"85%", display:"flex", alignItems:"flex-end", zIndex:2, opacity:0.12, pointerEvents:"none" }}>
        <svg width="210" height="580" viewBox="0 0 210 580" fill="none">
          <rect x="80" y="30" width="20" height="510" rx="10" fill="#4ade80"/>
          {[90,170,250,330,410,490].map((y,i)=>(<ellipse key={i} cx="90" cy={y} rx="15" ry="6" fill="#86efac"/>))}
          <path d="M80 110 C52 90 24 72 12 44"   stroke="#4ade80" strokeWidth="6" strokeLinecap="round" className="leaf"/>
          <path d="M80 210 C48 188 20 182 6 158"  stroke="#4ade80" strokeWidth="5" strokeLinecap="round" className="leaf2"/>
          <path d="M80 310 C54 288 32 278 16 254" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" className="leaf"/>
          <path d="M80 410 C58 390 40 386 26 364" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" className="leaf2"/>
          <path d="M100 150 C130 128 158 112 172 84"  stroke="#4ade80" strokeWidth="6" strokeLinecap="round" className="leaf2"/>
          <path d="M100 250 C132 228 160 222 178 198" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" className="leaf"/>
          <path d="M100 350 C130 330 158 324 176 302" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" className="leaf2"/>
          <path d="M100 450 C128 432 154 428 170 408" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" className="leaf"/>
          <rect x="124" y="70" width="14" height="470" rx="7" fill="#34d399" opacity="0.55"/>
          {[130,200,275,355,435,510].map((y,i)=>(<ellipse key={i} cx="131" cy={y} rx="11" ry="5" fill="#6ee7b7" opacity="0.55"/>))}
          <path d="M124 175 C152 153 176 138 190 112" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.55" className="leaf"/>
          <path d="M138 275 C162 255 184 248 198 226" stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.55" className="leaf2"/>
          <path d="M124 375 C100 354 78 346 64 324"  stroke="#34d399" strokeWidth="4" strokeLinecap="round" opacity="0.55" className="leaf"/>
        </svg>
      </div>

      {/* Floating particles */}
      {[
        {top:"8%",  left:"5%",  size:7, delay:"0s",  dur:"3.5s"},
        {top:"25%", left:"14%", size:4, delay:"1s",   dur:"4s"},
        {top:"60%", left:"4%",  size:9, delay:"0.5s", dur:"5s"},
        {top:"80%", left:"20%", size:5, delay:"1.5s", dur:"3.8s"},
        {top:"12%", left:"52%", size:6, delay:"0.8s", dur:"4.5s"},
        {top:"45%", left:"10%", size:4, delay:"2s",   dur:"4.2s"},
      ].map((c,i)=>(
        <div key={i} style={{ position:"absolute", top:c.top, left:c.left, width:c.size, height:c.size, zIndex:2, background:"rgba(167,243,208,0.3)", borderRadius:"2px", transform:"rotate(45deg)", animation:`floatUp ${c.dur} ease-in-out infinite`, animationDelay:c.delay, pointerEvents:"none" }}/>
      ))}

      {/* ══════════ CONTENT ══════════ */}
      <div style={{ position:"relative", zIndex:3, width:"100%", maxWidth:"1180px", margin:"0 auto", padding:"0 28px" }}>

        {/* Badge */}
        <AnimCard delay={0}>
          <div style={{ marginBottom:"28px" }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(16,185,129,0.12)", border:"1px solid rgba(52,211,153,0.25)", backdropFilter:"blur(8px)", padding:"8px 20px", borderRadius:"100px", fontSize:"13px", color:"#6ee7b7", letterSpacing:"0.06em" }}>
              <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#34d399", display:"inline-block", animation:"dotPulse 2s infinite" }}/>
              <span className="delivery-icon">🚚</span>&nbsp;ফ্রি হোম ডেলিভারি — পুরো বাংলাদেশে
            </span>
          </div>
        </AnimCard>

        {/* Headline */}
        <AnimCard delay={100}>
          <div style={{ maxWidth:"860px", marginBottom:"20px" }}>
            <h2 style={{ fontSize:"clamp(26px,5vw,60px)", fontWeight:900, lineHeight:1.25, color:"#fff", margin:0 }}>
              পরিবারের প্রতিটি মুহূর্তকে{" "}
              <span className="gold-shimmer">মিষ্টি করুন</span>
              <br/>
              <span style={{ fontSize:"clamp(18px,3vw,36px)", fontWeight:700, color:"rgba(255,255,255,0.75)" }}>
                — ফ্রি হোম ডেলিভারি সহ
              </span>
            </h2>
          </div>
        </AnimCard>

        {/* Subtext + quick bullets side by side */}
        <AnimCard delay={200}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"20px", marginBottom:"40px", alignItems:"flex-start" }}>
            <p style={{ flex:"1 1 300px", fontSize:"clamp(14px,1.7vw,17px)", color:"rgba(255,255,255,0.7)", lineHeight:1.85, margin:0 }}>
              প্রিমিয়াম আখের লাল চিনি, পুরো বাংলাদেশে ফ্রি হোম ডেলিভারি!
            </p>
            <div style={{ flex:"1 1 260px", display:"flex", flexDirection:"column", gap:"10px" }}>
              {quickBullets.map((b,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ width:"20px", height:"20px", borderRadius:"50%", background:"rgba(52,211,153,0.2)", border:"1px solid rgba(52,211,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"11px", color:"#34d399", fontWeight:900 }}>✔</span>
                  <span style={{ color:"rgba(255,255,255,0.8)", fontSize:"clamp(13px,1.4vw,15px)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Trust badge pills */}
        <AnimCard delay={280}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"52px" }}>
            {trustBadges.map((t,i)=>(
              <span key={i} className="trust-pill" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(5,150,105,0.14)", border:"1px solid rgba(52,211,153,0.22)", backdropFilter:"blur(10px)", padding:"10px 18px", borderRadius:"100px", fontSize:"clamp(12px,1.3vw,14px)", color:"#d1fae5", fontWeight:600 }}>
                <span style={{ fontSize:"16px" }}>{t.icon}</span>{t.text}
              </span>
            ))}
          </div>
        </AnimCard>

        {/* Benefit cards — 2+3 grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))", gap:"16px", marginBottom:"56px" }}>
          {benefitCards.map((b,i)=>(
            <AnimCard key={i} delay={350 + i * 90}>
              <div className="benefit-card" style={{ padding:"24px", borderRadius:"18px", height:"100%", background:b.accent, border:`1px solid ${b.border}`, backdropFilter:"blur(10px)" }}>
                <div style={{ width:"50px", height:"50px", borderRadius:"14px", background:b.iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px", marginBottom:"14px" }}>
                  {b.icon}
                </div>
                <h3 style={{ color:"#fff", fontWeight:700, fontSize:"clamp(14px,1.5vw,16px)", lineHeight:1.4, margin:"0 0 12px" }}>
                  {b.title}
                </h3>
                <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                  {b.bullets.map((bl,j)=>(
                    <div key={j} style={{ display:"flex", gap:"10px", alignItems:"flex-start" }}>
                      <span style={{ color:"#34d399", fontSize:"13px", flexShrink:0, marginTop:"2px" }}>✦</span>
                      <span style={{ color:"rgba(255,255,255,0.68)", fontSize:"clamp(12px,1.3vw,14px)", lineHeight:1.75 }}>{bl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimCard>
          ))}
        </div>

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