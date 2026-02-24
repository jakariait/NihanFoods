import { useState, useEffect, useRef } from "react";

const products = [
  { id: "3kg", label: "৩ কেজি", weight: "3KG", price: 900, original: 1050 },
  { id: "5kg", label: "৫ কেজি", weight: "5KG", price: 1400, original: 1650 },
  { id: "10kg", label: "১০ কেজি", weight: "10KG", price: 2600, original: 3200 },
];

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
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const orderRef = useRef(null);

  const scrollToOrder = () =>
    orderRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) return;
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
        background: "#fdf6ec",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        
        .hero-bg {
          background: linear-gradient(135deg, #92400e 0%, #b45309 30%, #d97706 60%, #f59e0b 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .pulse-btn {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(217, 119, 6, 0); }
        }
        .product-card { border: 3px solid transparent; cursor: pointer; transition: all 0.25s; }
        .product-card.selected { border-color: #d97706; background: #fffbeb; }
        .product-card:hover { border-color: #fbbf24; }
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-bg grain py-12 px-4 md:py-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-amber-300 text-amber-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
            ২০২১ সাল থেকে ৩২,০০০+ অর্ডার ✓
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            আখের <span className="text-amber-300">হাতে তৈরি</span>
            <br />
            লাল চিনি
          </h1>
          <p className="text-amber-100 text-lg md:text-xl mb-2 max-w-xl mx-auto">
            ডায়াবেটিস, ওজন বা হজমের ঝামেলা?
          </p>
          <p className="text-white/80 text-base mb-8 max-w-lg mx-auto">
            সাদা চিনির পরিবর্তে বেছে নিন ১০০% খাঁটি আখের লাল চিনি — সরাসরি আপনার
            দরজায়।
          </p>

          <div className="floating mb-8">
            <div className="inline-block bg-white/20 backdrop-blur rounded-2xl px-8 py-6 border border-white/30">
              <div className="text-6xl mb-2">🍯</div>
              <div className="text-white font-bold text-xl">
                হাতে তৈরি • প্রাকৃতিক • খাঁটি
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={scrollToOrder}
              className="pulse-btn bg-white text-amber-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-amber-50 transition-all"
            >
              এখনই অর্ডার করুন →
            </button>
            <button
              onClick={scrollToOrder}
              className="bg-amber-800/40 border border-white/40 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-amber-800/60 transition-all"
            >
              দাম জানুন
            </button>
          </div>
        </div>
      </section>

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

      {/* PRODUCTS */}
      <section className="py-14 px-4" style={{ background: "#fdf6ec" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">
            আমাদের পণ্য সমূহ
          </h2>
          <p className="text-center text-gray-500 mb-10">
            যে কোনো পরিমাণে অর্ডার করুন, পাবেন ঘরে বসে
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedProduct(p);
                  setQty(1);
                  scrollToOrder();
                }}
                className={`product-card rounded-2xl p-6 bg-white shadow-sm ${selectedProduct.id === p.id ? "selected" : ""}`}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🍚</div>
                  <h3 className="font-bold text-xl text-amber-900">
                    আখের লাল চিনি
                  </h3>
                  <p className="text-gray-400 text-sm">{p.label}</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-amber-700">
                    ৳{p.price.toLocaleString()}
                  </div>
                  <div className="text-gray-400 line-through text-sm">
                    ৳{p.original.toLocaleString()}
                  </div>
                  <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mt-1">
                    {Math.round((1 - p.price / p.original) * 100)}% ছাড়
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(p);
                    scrollToOrder();
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-all"
                >
                  অর্ডার করুন
                </button>
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

      {/* ORDER FORM */}
      <section
        ref={orderRef}
        className="py-14 px-4"
        style={{ background: "linear-gradient(135deg, #92400e, #b45309)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            অর্ডার করুন এখনই
          </h2>
          <p className="text-center text-amber-200 mb-8">
            সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন
          </p>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-amber-800 mb-2">
                অর্ডার নিশ্চিত হয়েছে!
              </h3>
              <p className="text-gray-500 mb-4">
                আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>
              <div className="bg-amber-50 rounded-xl p-4 text-left">
                <p className="text-sm text-gray-600">
                  <strong>পণ্য:</strong> আখের লাল চিনি {selectedProduct.label}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>পরিমাণ:</strong> {qty}টি
                </p>
                <p className="text-sm text-gray-600">
                  <strong>মোট:</strong> ৳
                  {(selectedProduct.price * qty).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>নাম:</strong> {form.name}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>ফোন:</strong> {form.phone}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Cash on Delivery — অগ্রিম কোনো টাকা নেই ✓
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
              {/* Product selection */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  পণ্য বেছে নিন *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProduct(p)}
                      className={`py-2 rounded-xl border-2 text-sm font-semibold transition-all ${selectedProduct.id === p.id ? "border-amber-500 bg-amber-50 text-amber-800" : "border-gray-200 text-gray-600 hover:border-amber-300"}`}
                    >
                      {p.label}
                      <div className="text-xs font-normal">
                        ৳{p.price.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty */}
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  পরিমাণ
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold text-xl hover:bg-amber-200 transition"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold w-8 text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold text-xl hover:bg-amber-200 transition"
                  >
                    +
                  </button>
                  <div className="ml-auto text-lg font-bold text-amber-700">
                    মোট: ৳{(selectedProduct.price * qty).toLocaleString()}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    নাম *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                    placeholder="আপনার পুরো নাম"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    ফোন নাম্বার *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                    placeholder="01XXXXXXXXX"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    ডেলিভারি ঠিকানা *
                  </label>
                  <textarea
                    required
                    value={form.address}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, address: e.target.value }))
                    }
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-400 focus:outline-none transition resize-none"
                    rows={3}
                    placeholder="বাড়ির নম্বর, রাস্তা, এলাকা, জেলা..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-amber-400 focus:outline-none transition"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>

                <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800 border border-amber-200">
                  <div className="flex justify-between mb-1">
                    <span>পণ্য</span>
                    <span className="font-semibold">
                      আখের লাল চিনি {selectedProduct.label} × {qty}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="text-green-600 font-semibold">
                      ফ্রি 🎁
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base border-t border-amber-200 pt-2 mt-2">
                    <span>মোট</span>
                    <span>
                      ৳{(selectedProduct.price * qty).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-center text-amber-600 mt-2">
                    💵 Cash on Delivery — ডেলিভারির পর পেমেন্ট
                  </p>
                </div>

                <button
                  type="submit"
                  className="pulse-btn w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-lg"
                >
                  অর্ডার কনফার্ম করুন ৳
                  {(selectedProduct.price * qty).toLocaleString()}
                </button>
                <p className="text-center text-xs text-gray-400">
                  Fake অর্ডার দেওয়া থেকে বিরত থাকুন 🙏
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

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
            href="#"
            className="bg-amber-800 text-amber-200 px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-amber-800 text-amber-200 px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition"
          >
            YouTube
          </a>
          <a
            href="#"
            className="bg-amber-800 text-amber-200 px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition"
          >
            Contact Us
          </a>
        </div>
        <p className="text-amber-800 text-xs mt-6">
          © 2025 আখের লাল চিনি। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </footer>
    </div>
  );
}
