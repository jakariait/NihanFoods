import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: "🌿",
    title: "কিছু প্রাকৃতিক মিনারেল থাকে",
    desc: "লাল চিনিতে আখের প্রাকৃতিক উপাদানের কিছু অংশ থেকে যায় (যেমন আয়রন, ক্যালসিয়াম ইত্যাদি সামান্য পরিমাণে)।",
    accent: "rgba(16,185,129,0.15)",
    border: "rgba(52,211,153,0.25)",
    iconBg: "rgba(16,185,129,0.18)",
  },
  {
    icon: "⚙️",
    title: "কম প্রসেসড",
    desc: "সাধারণত কম পরিশোধিত হওয়ায় এতে প্রাকৃতিক রং ও গন্ধ থাকে।",
    accent: "rgba(5,150,105,0.15)",
    border: "rgba(16,185,129,0.25)",
    iconBg: "rgba(5,150,105,0.18)",
  },
  {
    icon: "☕",
    title: "সমৃদ্ধ স্বাদ",
    desc: "চা, পিঠা বা মিষ্টিতে আলাদা গভীর স্বাদ দেয়।",
    accent: "rgba(202,138,4,0.15)",
    border: "rgba(251,191,36,0.25)",
    iconBg: "rgba(202,138,4,0.18)",
  },
  {
    icon: "🏺",
    title: "ঐতিহ্যবাহী উৎপাদন পদ্ধতি",
    desc: "হাতে তৈরি বা ঐতিহ্যগত পদ্ধতিতে তৈরি হলে অনেকেই এটি বেশি পছন্দ করেন।",
    accent: "rgba(16,185,129,0.15)",
    border: "rgba(52,211,153,0.25)",
    iconBg: "rgba(16,185,129,0.18)",
  },
  {
    icon: "🎨",
    title: "প্রাকৃতিক রঙ ও টেক্সচার",
    desc: "এতে কৃত্রিম ব্লিচিং করা হয় না, তাই রং প্রাকৃতিক থাকে।",
    accent: "rgba(5,150,105,0.15)",
    border: "rgba(16,185,129,0.25)",
    iconBg: "rgba(5,150,105,0.18)",
  },
];

const checkpoints = [
  "১০০% প্রাকৃতিক",
  "মিনারেল সমৃদ্ধ",
  "গ্রামীণ ঐতিহ্যের স্বাদ",
];

function AnimCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section
      style={{
        fontFamily: "'Noto Serif Bengali', 'Hind Siliguri', Georgia, serif",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 80px",
        background:
          "linear-gradient(145deg, #052e16 0%, #064e3b 35%, #065f46 60%, #047857 100%)",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@400;600;700;900&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes floatUp    { 0%,100%{transform:rotate(45deg) translateY(0)} 50%{transform:rotate(45deg) translateY(-12px)} }
        @keyframes pulseGlow  { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.85;transform:scale(1.08)} }
        @keyframes shimmerGold{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes dotPulse   { 0%,100%{opacity:1;box-shadow:0 0 6px #34d399} 50%{opacity:0.5;box-shadow:0 0 14px #34d399} }
        @keyframes leafSway   { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
        @keyframes checkPop   { 0%{transform:scale(0)} 70%{transform:scale(1.15)} 100%{transform:scale(1)} }

        .gold-shimmer {
          background: linear-gradient(90deg, #ca8a04, #fbbf24, #fde68a, #fbbf24, #ca8a04);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 2.5s linear infinite;
        }
        .benefit-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: default; }
        .benefit-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,0.35) !important; }
        .leaf  { animation: leafSway 4s ease-in-out infinite; transform-origin: bottom center; }
        .leaf2 { animation: leafSway 5s ease-in-out infinite reverse; transform-origin: bottom center; }
        .cta-primary { transition: all 0.3s ease; }
        .cta-primary:hover { transform: translateY(-3px); box-shadow: 0 18px 44px rgba(180,83,9,0.5) !important; }
        .feature-pill { transition: all 0.3s ease; cursor: default; }
        .feature-pill:hover { transform: translateY(-3px); background: rgba(16,185,129,0.25) !important; border-color: rgba(52,211,153,0.5) !important; }
      `}</style>

      {/* ── BG glow blobs (same as hero/problem) ── */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)",
          borderRadius: "50%",
          animation: "pulseGlow 5s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(5,150,105,0.22) 0%, transparent 65%)",
          borderRadius: "50%",
          animation: "pulseGlow 6s ease-in-out infinite 1.5s",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "38%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(202,138,4,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── Vertical decorative lines ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "31%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(52,211,153,0.12), transparent)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "33%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(52,211,153,0.06), transparent)",
          zIndex: 1,
        }}
      />

      {/* ── Sugarcane SVG ── */}
      <div
        style={{
          position: "absolute",
          right: "3%",
          bottom: 0,
          height: "85%",
          display: "flex",
          alignItems: "flex-end",
          zIndex: 2,
          opacity: 0.13,
          pointerEvents: "none",
        }}
      >
        <svg width="210" height="580" viewBox="0 0 210 580" fill="none">
          <rect x="80" y="30" width="20" height="510" rx="10" fill="#4ade80" />
          {[90, 170, 250, 330, 410, 490].map((y, i) => (
            <ellipse key={i} cx="90" cy={y} rx="15" ry="6" fill="#86efac" />
          ))}
          <path
            d="M80 110 C52 90 24 72 12 44"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
            className="leaf"
          />
          <path
            d="M80 210 C48 188 20 182 6 158"
            stroke="#4ade80"
            strokeWidth="5"
            strokeLinecap="round"
            className="leaf2"
          />
          <path
            d="M80 310 C54 288 32 278 16 254"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
            className="leaf"
          />
          <path
            d="M80 410 C58 390 40 386 26 364"
            stroke="#4ade80"
            strokeWidth="5"
            strokeLinecap="round"
            className="leaf2"
          />
          <path
            d="M100 150 C130 128 158 112 172 84"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
            className="leaf2"
          />
          <path
            d="M100 250 C132 228 160 222 178 198"
            stroke="#4ade80"
            strokeWidth="5"
            strokeLinecap="round"
            className="leaf"
          />
          <path
            d="M100 350 C130 330 158 324 176 302"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
            className="leaf2"
          />
          <path
            d="M100 450 C128 432 154 428 170 408"
            stroke="#4ade80"
            strokeWidth="5"
            strokeLinecap="round"
            className="leaf"
          />
          <rect
            x="124"
            y="70"
            width="14"
            height="470"
            rx="7"
            fill="#34d399"
            opacity="0.55"
          />
          {[130, 200, 275, 355, 435, 510].map((y, i) => (
            <ellipse
              key={i}
              cx="131"
              cy={y}
              rx="11"
              ry="5"
              fill="#6ee7b7"
              opacity="0.55"
            />
          ))}
          <path
            d="M124 175 C152 153 176 138 190 112"
            stroke="#34d399"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.55"
            className="leaf"
          />
          <path
            d="M138 275 C162 255 184 248 198 226"
            stroke="#34d399"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.55"
            className="leaf2"
          />
          <path
            d="M124 375 C100 354 78 346 64 324"
            stroke="#34d399"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.55"
            className="leaf"
          />
        </svg>
      </div>

      {/* ── Floating diamond particles ── */}
      {[
        { top: "8%", left: "5%", size: 7, delay: "0s", dur: "3.5s" },
        { top: "25%", left: "14%", size: 4, delay: "1s", dur: "4s" },
        { top: "60%", left: "4%", size: 9, delay: "0.5s", dur: "5s" },
        { top: "80%", left: "20%", size: 5, delay: "1.5s", dur: "3.8s" },
        { top: "12%", left: "52%", size: 6, delay: "0.8s", dur: "4.5s" },
        { top: "45%", left: "10%", size: 4, delay: "2s", dur: "4.2s" },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: c.top,
            left: c.left,
            width: c.size,
            height: c.size,
            zIndex: 2,
            background: "rgba(167,243,208,0.3)",
            borderRadius: "2px",
            transform: "rotate(45deg)",
            animation: `floatUp ${c.dur} ease-in-out infinite`,
            animationDelay: c.delay,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ══════════ CONTENT ══════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        {/* Badge */}
        <AnimCard delay={0}>
          <div style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(52,211,153,0.25)",
                backdropFilter: "blur(8px)",
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "13px",
                color: "#6ee7b7",
                letterSpacing: "0.06em",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#34d399",
                  display: "inline-block",
                  animation: "dotPulse 2s infinite",
                }}
              />
              সমাধান — নিহান সুপার ফুডস
            </span>
          </div>
        </AnimCard>

        {/* Question + headline */}
        <AnimCard delay={100}>
          <div style={{ maxWidth: "820px", marginBottom: "22px" }}>
            <p
              style={{
                fontSize: "clamp(16px,2vw,20px)",
                color: "rgba(167,243,208,0.7)",
                margin: "0 0 10px",
                fontWeight: 500,
              }}
            >
              তাহলে বিকল্প কী?
            </p>
            <h2
              style={{
                fontSize: "clamp(28px,5.5vw,64px)",
                fontWeight: 900,
                lineHeight: 1.25,
                color: "#fff",
                margin: 0,
              }}
            >
              এই কারণেই আমরা নিয়ে এসেছি <br />
              <span className="gold-shimmer">একটি নিরাপদ বিকল্প</span>
            </h2>
          </div>
        </AnimCard>

        {/* Product name */}
        <AnimCard delay={200}>
          <div style={{ maxWidth: "700px", marginBottom: "24px" }}>
            <h3
              style={{
                fontSize: "clamp(20px,3vw,34px)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 16px",
                lineHeight: 1.3,
              }}
            >
              খাঁটি হাতে তৈরি আখের{" "}
              <span style={{ color: "#fbbf24" }}>লাল চিনি</span>
            </h3>
            <p
              style={{
                fontSize: "clamp(14px,1.7vw,17px)",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.85,
                margin: "0 0 12px",
              }}
            >
              গ্রামের আখ সরাসরি সংগ্রহ করে ঐতিহ্যবাহী হাতে তৈরি পদ্ধতিতে
              প্রাকৃতিকভাবে প্রস্তুত করা হয় আমাদের এই চিনি।
            </p>
            <p
              style={{
                fontSize: "clamp(15px,1.8vw,18px)",
                color: "#fff",
                fontWeight: 700,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              কোনো ব্লিচিং নয়।{" "}
              <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>
                কোনো কৃত্রিম প্রসেস নয়।
              </span>{" "}
              শুধু আখের রসের আসল স্বাদ।
            </p>
          </div>
        </AnimCard>

        {/* Two-column layout: process desc + checkpoints */}
        <AnimCard delay={300}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            {/* Left: brand story card */}
            <div
              style={{
                flex: "1 1 340px",
                background: "rgba(5,46,22,0.5)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(52,211,153,0.14)",
                borderRadius: "20px",
                padding: "28px 30px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(167,243,208,0.5)",
                  letterSpacing: "0.08em",
                  margin: "0 0 14px",
                }}
              >
                আমাদের গল্প
              </p>
              <p
                style={{
                  fontSize: "clamp(14px,1.6vw,16px)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.85,
                  margin: "0 0 14px",
                }}
              >
                নিহান সুপার ফুডস নিয়ে এসেছে বাংলাদেশের ঐতিহ্যবাহী হাতে তৈরি
                আখের লাল চিনি।
              </p>
              <p
                style={{
                  fontSize: "clamp(13px,1.5vw,15px)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                গ্রামের আখ সরাসরি সংগ্রহ করে, প্রাকৃতিক প্রক্রিয়ায়, হাতে তৈরি
                পদ্ধতিতে তৈরি করা হয় আমাদের এই চিনি।
              </p>
              {/* mini divider */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  borderRadius: "100px",
                  margin: "20px 0 0",
                  background: "linear-gradient(90deg, #34d399, #fbbf24)",
                }}
              />
            </div>

            {/* Right: checkpoints */}
            <div
              style={{
                flex: "1 1 280px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              {checkpoints.map((c, i) => (
                <div
                  key={i}
                  className="feature-pill"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "rgba(5,150,105,0.14)",
                    border: "1px solid rgba(52,211,153,0.22)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "14px",
                    padding: "16px 22px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(52,211,153,0.2)",
                      border: "1px solid rgba(52,211,153,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "14px",
                      color: "#34d399",
                      fontWeight: 900,
                    }}
                  >
                    ✔
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "clamp(14px,1.6vw,16px)",
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Benefit cards grid */}
        <AnimCard delay={350}>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(167,243,208,0.5)",
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            কেন লাল চিনি বেছে নেবেন
          </p>
        </AnimCard>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {benefits.map((b, i) => (
            <AnimCard key={i} delay={400 + i * 90}>
              <div
                className="benefit-card"
                style={{
                  padding: "22px",
                  borderRadius: "18px",
                  height: "100%",
                  background: b.accent,
                  border: `1px solid ${b.border}`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      flexShrink: 0,
                      background: b.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "clamp(14px,1.5vw,16px)",
                        lineHeight: 1.4,
                        margin: "0 0 8px",
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "clamp(12px,1.3vw,14px)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>

        {/* CTA block */}
        <AnimCard delay={950}>
          <div
            style={{
              background: "rgba(5,46,22,0.5)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(52,211,153,0.18)",
              borderRadius: "22px",
              padding: "48px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-30%",
                right: "-10%",
                width: "280px",
                height: "280px",
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30%",
                left: "-10%",
                width: "240px",
                height: "240px",
                background:
                  "radial-gradient(circle, rgba(202,138,4,0.08) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🌾</div>
              <p
                style={{
                  fontSize: "clamp(20px,3vw,34px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.3,
                  margin: "0 0 8px",
                }}
              >
                প্রকৃতির বিশুদ্ধ মিষ্টতায়
              </p>
              <p
                style={{
                  fontSize: "clamp(20px,3vw,34px)",
                  fontWeight: 900,
                  lineHeight: 1.3,
                  margin: "0 0 28px",
                }}
              >
                <span className="gold-shimmer">ফিরে যান আজই</span>
              </p>
              <button
                className="cta-primary"
                style={{
                  background:
                    "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "14px",
                  padding: "17px 48px",
                  fontSize: "clamp(15px,1.9vw,18px)",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 35px rgba(180,83,9,0.4)",
                  letterSpacing: "0.02em",
                }}
              >
                এখনই অর্ডার করুন →
              </button>
              <div
                style={{
                  width: "64px",
                  height: "3px",
                  borderRadius: "100px",
                  margin: "28px auto 0",
                  background: "linear-gradient(90deg, #34d399, #fbbf24)",
                }}
              />
            </div>
          </div>
        </AnimCard>
      </div>
    </section>
  );
}
