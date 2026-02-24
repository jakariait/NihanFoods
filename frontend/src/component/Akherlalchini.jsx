import { useState, useEffect} from "react";
import SingleProductDetails from "./componentGeneral/SingleProductDetails.jsx";


const reviews = [
  {
    name: "রাহেলা বেগম",
    city: "ঢাকা",
    stars: 5,
    text: "অসাধারণ! চায়ের সাথে দিলে একটা আলাদাই স্বাদ আসে। পরিবারের সবাই খুব পছন্দ করেছে।",
  },
  {
    name: "মো. করিম",
    city: "চট্টগ্রাম",
    stars: 5,
    text: "সত্যিই খাঁটি চিনি। বাজারের চিনির সাথে তুলনাই হয় না। প্রতি মাসে অর্ডার করব।",
  },
  {
    name: "সুমাইয়া আক্তার",
    city: "সিলেট",
    stars: 5,
    text: "পায়েস বানিয়েছিলাম, অসাধারণ হয়েছে! ডেলিভারিও অনেক দ্রুত ছিল।",
  },
  {
    name: "আব্দুল হক",
    city: "রাজশাহী",
    stars: 5,
    text: "ডায়াবেটিস রোগীরাও নিশ্চিন্তে খেতে পারেন। প্রাকৃতিক মিষ্টতা অতুলনীয়।",
  },
];

const benefits = [
  {
    icon: "🌿",
    title: "১০০% খাঁটি",
    desc: "কোনো মিশ্রণ নেই, কোনো কেমিক্যাল নেই",
  },
  {
    icon: "🏭",
    title: "নিজস্ব কারখানা",
    desc: "আখ ক্ষেত থেকে সরাসরি আপনার দরজায়",
  },
  {
    icon: "🚫",
    title: "প্রিজারভেটিভ মুক্ত",
    desc: "সম্পূর্ণ প্রাকৃতিক প্রক্রিয়ায় তৈরি",
  },
  { icon: "💰", title: "সাশ্রয়ী মূল্য", desc: "বাংলাদেশে সবচেয়ে ভালো দামে" },
  {
    icon: "🏠",
    title: "হোম ডেলিভারি",
    desc: "অগ্রিম টাকা ছাড়াই ঘরে বসে অর্ডার",
  },
  {
    icon: "↩️",
    title: "রিটার্ন গ্যারান্টি",
    desc: "পছন্দ না হলে ইন্সট্যান্ট রিটার্ন",
  },
];

function Countdown() {
  const [time, setTime] = useState({
    days: 4,
    hours: 16,
    minutes: 32,
    seconds: 36,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) return prev;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-3 justify-center">
      {[
        ["দিন", time.days],
        ["ঘণ্টা", time.hours],
        ["মিনিট", time.minutes],
        ["সেকেন্ড", time.seconds],
      ].map(([label, val]) => (
        <div key={label} className="text-center">
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
            className="rounded-xl px-4 py-3 min-w-[64px]"
          >
            <div className="text-3xl font-bold text-white font-mono">
              {pad(val)}
            </div>
          </div>
          <div className="text-xs mt-1 text-amber-200 font-medium">{label}</div>
        </div>
      ))}
    </div>
  );
}

function StarRating({ count = 5 }) {
  return (
    <span className="text-amber-400">{Array(count).fill("★").join("")}</span>
  );
}

export default function App() {


  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
        background: "#fdf6ec",
      }}
    >



      {/* COUNTDOWN */}
      <section style={{ background: "#1c1007" }} className="py-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-300 font-semibold mb-4 text-sm uppercase tracking-widest">
            ⏰ সীমিত সময়ের অফার — ফ্রি হোম ডেলিভারি শেষ হওয়ার আগেই অর্ডার
            করুন!
          </p>
          <Countdown />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">
            কেন বেছে নেবেন আমাদের চিনি?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            আমাদের প্রতিটি চিনি তৈরি হয় যত্নে ও ভালোবাসায়
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card-hover bg-amber-50 rounded-2xl p-5 border border-amber-100"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-amber-900 mb-1">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* REVIEWS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">
            ⭐ কাষ্টমার ফিডব্যাক
          </h2>
          <p className="text-center text-gray-500 mb-10">
            ৩২,০০০+ সন্তুষ্ট কাষ্টমার আমাদের সাফল্যের গল্প
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="card-hover bg-amber-50 rounded-2xl p-6 border border-amber-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center font-bold text-amber-800">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-amber-900">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.city}</div>
                  </div>
                  <div className="ml-auto">
                    <StarRating count={r.stars} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <SingleProductDetails slug={"akher-lal-chini-445"} />

      {/* FOOTER */}
      <footer
        style={{ background: "#1c1007" }}
        className="py-8 px-4 text-center"
      >
        <div className="text-2xl mb-2">🍯</div>
        <p className="text-amber-300 font-bold text-lg mb-1">আখের লাল চিনি</p>
        <p className="text-amber-600 text-sm mb-4">
          Thanks For Build Relation With Us ❤️
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.facebook.com/Nihansuperfood/"
            className="bg-amber-800 text-amber-200 px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@NihanSuperFood"
            className="bg-amber-800 text-amber-200 px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition"
          >
            YouTube
          </a>
        </div>
        <p className="text-amber-800 text-xs mt-6">
          © 2026 আখের লাল চিনি। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </footer>
    </div>
  );
}
