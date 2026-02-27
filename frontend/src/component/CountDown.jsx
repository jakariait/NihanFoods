// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const CountDown = () => {
//   const [freeDeliveryEndTime, setFreeDeliveryEndTime] = useState(null);
//   const [remainingTime, setRemainingTime] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//
//   useEffect(() => {
//     const fetchFreeDeliveryTime = async () => {
//       try {
//         const response = await axios.get('/api/getFreeDeliveryAmount');
//         if (response.data.success && response.data.data.freeDeliveryEndTime) {
//           setFreeDeliveryEndTime(new Date(response.data.data.freeDeliveryEndTime));
//         }
//       } catch (error) {
//         console.error('Error fetching free delivery time:', error);
//       }
//     };
//
//     fetchFreeDeliveryTime();
//   }, []);
//
//   useEffect(() => {
//     if (!freeDeliveryEndTime) return;
//
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = freeDeliveryEndTime.getTime() - now;
//
//       if (distance < 0) {
//         clearInterval(interval);
//         setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }
//
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//       setRemainingTime({ days, hours, minutes, seconds });
//     }, 1000);
//
//     return () => clearInterval(interval);
//   }, [freeDeliveryEndTime]);
//
//   if (!freeDeliveryEndTime || (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0)) {
//     return null; // Don't render if no end time or countdown finished
//   }
//
//   return (
//     <div className="countdown-container">
//       <p>Free Delivery Ends In:</p>
//       <div className="countdown-timer">
//         {remainingTime.days > 0 && <span>{remainingTime.days}d </span>}
//         <span>{remainingTime.hours}h </span>
//         <span>{remainingTime.minutes}m </span>
//         <span>{remainingTime.seconds}s</span>
//       </div>
//     </div>
//   );
// };
//
// export default CountDown;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountDown = () => {
  const [freeDeliveryEndTime, setFreeDeliveryEndTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const fetchFreeDeliveryTime = async () => {
      try {
        const response = await axios.get('/api/getFreeDeliveryAmount');
        if (response.data.success && response.data.data.freeDeliveryEndTime) {
          setFreeDeliveryEndTime(new Date(response.data.data.freeDeliveryEndTime));
        }
      } catch (error) {
        console.error('Error fetching free delivery time:', error);
      }
    };
    fetchFreeDeliveryTime();
  }, []);

  useEffect(() => {
    if (!freeDeliveryEndTime) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = freeDeliveryEndTime.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setRemainingTime({
        days:    Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [freeDeliveryEndTime]);

  if (!freeDeliveryEndTime ||
    (remainingTime.days === 0 && remainingTime.hours === 0 &&
      remainingTime.minutes === 0 && remainingTime.seconds === 0)) {
    return null;
  }

  const units = [
    ...(remainingTime.days > 0 ? [{ value: remainingTime.days,    label: 'দিন'    }] : []),
    { value: remainingTime.hours,   label: 'ঘণ্টা'  },
    { value: remainingTime.minutes, label: 'মিনিট'  },
    { value: remainingTime.seconds, label: 'সেকেন্ড' },
  ];

  return (
    <>
      <style>{`
        @keyframes cd-pulseGlow { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.85;transform:scale(1.05)} }
        @keyframes cd-deliveryBounce { 0%,100%{transform:translateX(0)} 50%{transform:translateX(5px)} }
        @keyframes cd-dotPulse { 0%,100%{opacity:1;box-shadow:0 0 6px #34d399} 50%{opacity:0.4;box-shadow:0 0 14px #34d399} }
        @keyframes cd-flipIn { 0%{transform:translateY(-8px);opacity:0} 100%{transform:translateY(0);opacity:1} }
        @keyframes shimmerGold { 0%{background-position:200% center} 100%{background-position:-200% center} }

        .cd-unit-box {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cd-unit-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3) !important;
        }
        .cd-number {
          animation: cd-flipIn 0.35s ease;
        }
        .cd-delivery-icon {
          animation: cd-deliveryBounce 2s ease-in-out infinite;
          display: inline-block;
        }
        .cd-gold-shimmer {
          background: linear-gradient(90deg,#ca8a04,#fbbf24,#fde68a,#fbbf24,#ca8a04);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmerGold 2.5s linear infinite;
        }
      `}</style>

      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(145deg, #052e16 0%, #064e3b 60%, #065f46 100%)",
        padding: "28px 20px",
        fontFamily: "'Noto Serif Bengali', 'Hind Siliguri', Georgia, serif",
      }}>

        {/* Ambient glow */}
        <div style={{ position:"absolute", top:"-60%", right:"-10%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)", borderRadius:"50%", animation:"cd-pulseGlow 5s ease-in-out infinite", pointerEvents:"none", zIndex:0 }}/>
        <div style={{ position:"absolute", bottom:"-60%", left:"-5%", width:"260px", height:"260px", background:"radial-gradient(circle, rgba(5,150,105,0.2) 0%, transparent 65%)", borderRadius:"50%", animation:"cd-pulseGlow 6s ease-in-out infinite 1.5s", pointerEvents:"none", zIndex:0 }}/>

        {/* Vertical line accent */}
        <div style={{ position:"absolute", top:0, right:"30%", width:"1px", height:"100%", background:"linear-gradient(to bottom, transparent, rgba(52,211,153,0.1), transparent)", pointerEvents:"none", zIndex:0 }}/>

        <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>

          {/* Badge */}
          <div style={{ marginBottom:"14px" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              background:"rgba(16,185,129,0.12)", border:"1px solid rgba(52,211,153,0.25)",
              backdropFilter:"blur(8px)", padding:"6px 16px", borderRadius:"100px",
              fontSize:"12px", color:"#6ee7b7", letterSpacing:"0.06em",
            }}>
              <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#34d399", display:"inline-block", animation:"cd-dotPulse 2s infinite" }}/>
              <span className="cd-delivery-icon">🚚</span>
              &nbsp;অফার শেষ হওয়ার আগেই অর্ডার করুন
            </span>
          </div>

          {/* Title */}
          <p style={{ fontSize:"clamp(13px,1.6vw,16px)", fontWeight:700, margin:"0 0 18px" }}>
            <span className="cd-gold-shimmer">ফ্রি ডেলিভারি অফার শেষ হচ্ছে</span>
          </p>

          {/* Countdown boxes */}
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
            {units.map((u, i) => (
              <React.Fragment key={u.label}>
                <div
                  className="cd-unit-box"
                  style={{
                    background:"rgba(5,46,22,0.6)", backdropFilter:"blur(12px)",
                    border:"1px solid rgba(52,211,153,0.2)", borderRadius:"14px",
                    padding:"14px 18px", minWidth:"64px", textAlign:"center",
                    boxShadow:"0 4px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    className="cd-number"
                    key={u.value}
                    style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fbbf24", lineHeight:1 }}
                  >
                    {String(u.value).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize:"11px", color:"rgba(167,243,208,0.6)", marginTop:"5px", letterSpacing:"0.04em" }}>
                    {u.label}
                  </div>
                </div>

                {/* Separator dots (not after last) */}
                {i < units.length - 1 && (
                  <div style={{ display:"flex", flexDirection:"column", gap:"5px", marginTop:"-8px" }}>
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"rgba(52,211,153,0.5)" }}/>
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"rgba(52,211,153,0.5)" }}/>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom divider */}
          <div style={{ width:"48px", height:"2px", borderRadius:"100px", margin:"16px auto 0", background:"linear-gradient(90deg, #34d399, #fbbf24)" }}/>

        </div>
      </div>
    </>
  );
};

export default CountDown;