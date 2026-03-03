import { useEffect, useRef, useState } from "react";

function AnimCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
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

export default function BenefitsCTASection() {
  return (
    <section>
      {/* ══════════ CONTENT ══════════ */}
      <div className={"flex  items-center  justify-center px-10 py-10"}>
        <AnimCard>
          <a
            href={"#checkout"}
            className="cta-primary"
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "18px 52px",
              fontSize: "clamp(15px,2vw,20px)",
              fontFamily: "inherit",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 35px rgba(180,83,9,0.4)",
              letterSpacing: "0.02em",
            }}
          >
            এখনই অর্ডার করুন →
          </a>
        </AnimCard>
      </div>
    </section>
  );
}
