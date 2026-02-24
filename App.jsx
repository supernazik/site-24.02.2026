import { useState, useEffect } from "react";

// ─── productData.json ────────────────────────────────────────────────
const productData = [
  { id: 1, name: "Футболка",  price: 20, category: "Одяг",      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center" },
  { id: 2, name: "Штани",    price: 35, category: "Одяг",      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center" },
  { id: 3, name: "Кепка",    price: 15, category: "Аксесуари", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop&crop=center" },
  { id: 4, name: "Кросівки", price: 60, category: "Взуття",    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center" },
];

// ─── NotFound404.jsx ─────────────────────────────────────────────────
const NotFound404 = ({ onGoHome }) => {
  const [blink, setBlink] = useState(true);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  const handleBtnClick = () => {
    setShake(true);
    setTimeout(() => { setShake(false); onGoHome(); }, 300);
  };

  return (
    <div style={s.page404}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:#0d0d1a; }
        @keyframes floatIn   { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        @keyframes wobble0   { 0%,100%{transform:rotate(0)scale(1)} 30%{transform:rotate(-4deg)scale(1.06)} 70%{transform:rotate(4deg)scale(1.06)} }
        @keyframes wobble1   { 0%,100%{transform:rotate(0)scale(1)} 25%{transform:rotate(6deg)scale(1.08)} 75%{transform:rotate(-6deg)scale(1.08)} }
        @keyframes scanline  { 0%{top:-20%;} 100%{top:120%;} }
        @keyframes glitchL   { 0%,90%,100%{clip-path:none;transform:none;opacity:1} 92%{clip-path:polygon(0 20%,100% 20%,100% 40%,0 40%);transform:translate(-4px);opacity:.7} 96%{clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%);transform:translate(4px);opacity:.7} }
        @keyframes glitchR   { 0%,88%,100%{clip-path:none;transform:none;opacity:1} 90%{clip-path:polygon(0 10%,100% 10%,100% 35%,0 35%);transform:translate(6px);opacity:.6} 94%{clip-path:polygon(0 70%,100% 70%,100% 90%,0 90%);transform:translate(-6px);opacity:.6} }
        @keyframes shake     { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
      `}</style>

      {/* Фонова сітка */}
      <div style={s.grid404} />

      {/* Скан-лінія */}
      <div style={s.scanline} />

      <div style={{ ...s.content404, animation: "floatIn 0.5s ease both" }}>

        {/* 404 з глітч */}
        <div style={s.glitchWrap}>
          <span style={{ ...s.bigNum, color: "#FFD200", animation: "wobble0 4s ease-in-out infinite", textShadow: "0 0 60px rgba(255,210,0,0.6)" }}>4</span>
          <div style={{ position: "relative", display: "inline-block" }}>
            <span style={{ ...s.bigNum, color: "#fff", animation: "wobble1 3s ease-in-out infinite", textShadow: "0 0 60px rgba(255,255,255,0.2)" }}>0</span>
            <span style={{ ...s.bigNum, color: "#ff4444", position: "absolute", left: 0, top: 0, animation: "glitchL 5s infinite", pointerEvents: "none" }}>0</span>
            <span style={{ ...s.bigNum, color: "#4fc3f7", position: "absolute", left: 0, top: 0, animation: "glitchR 5s infinite 0.3s", pointerEvents: "none" }}>0</span>
          </div>
          <span style={{ ...s.bigNum, color: "#FFD200", animation: "wobble0 4s ease-in-out infinite 0.5s", textShadow: "0 0 60px rgba(255,210,0,0.6)" }}>4</span>
        </div>

        {/* Термінал */}
        <div style={s.terminal}>
          <div style={s.terminalDots}>
            <span style={{ ...s.dot, background: "#ff5f57" }} />
            <span style={{ ...s.dot, background: "#febc2e" }} />
            <span style={{ ...s.dot, background: "#28c840" }} />
          </div>
          <p style={s.terminalLine}>
            <span style={{ color: "#28c840" }}>user@shop</span>
            <span style={{ color: "#888" }}>:</span>
            <span style={{ color: "#4fc3f7" }}>~</span>
            <span style={{ color: "#888" }}>$ </span>
            <span style={{ color: "#FFD200" }}>GET /unknown-page</span>
            <span style={{ opacity: blink ? 1 : 0, color: "#FFD200" }}>▌</span>
          </p>
          <p style={{ ...s.terminalLine, color: "#ff4444", marginTop: 4 }}>
            {">"} 404 Not Found — No such route
          </p>
          <p style={{ ...s.terminalLine, color: "#888", marginTop: 2 }}>
            {">"} Redirecting to safety...
          </p>
        </div>

        <h1 style={s.title404}>Сторінку не знайдено</h1>
        <p style={s.subtitle404}>
          Схоже, ця адреса не існує або була видалена.<br />
          Не хвилюйся — ти можеш повернутись назад 👾
        </p>

        {/* Кнопка */}
        <button
          style={{
            ...s.homeBtn,
            animation: shake ? "shake 0.3s ease" : "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FFD200";
            e.currentTarget.style.color = "#0d0d1a";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,210,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#FFD200";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={handleBtnClick}
        >
          ← Повернутись на головну
        </button>

        {/* Декоративний фон */}
        <div style={s.decorRow}>
          {["404", "403", "500", "404", "502", "404", "301"].map((n, i) => (
            <span key={i} style={{ ...s.decorNum, opacity: 0.04 + (i % 4) * 0.02 }}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── AddMoney.jsx ────────────────────────────────────────────────────
const AddMoney = ({ onAddMoney, balance }) => {
  const [ripple, setRipple] = useState(false);
  const handleClick = () => {
    onAddMoney();
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
  };
  return (
    <div style={s.addMoneySection}>
      <p style={{ fontSize: 13, color: "#aaa", textAlign: "center" }}>
        Натисни на коло — отримай <strong>1$</strong>
      </p>
      <div
        onClick={handleClick}
        style={{
          ...s.circle,
          transform: ripple ? "scale(0.92)" : "scale(1)",
          boxShadow: ripple
            ? "0 0 0 16px rgba(255,210,0,0.08)"
            : "0 0 0 4px rgba(255,210,0,0.3), 0 20px 60px rgba(255,210,0,0.2)",
        }}
      >
        <span style={{ fontSize: 38 }}>💰</span>
        <span style={s.circleText}>+1$</span>
      </div>
      <p style={{ fontSize: 13, color: "#aaa" }}>
        Зароблено: <strong style={{ color: "#FFD200" }}>{balance}$</strong>
      </p>
    </div>
  );
};

// ─── Products.jsx ────────────────────────────────────────────────────
const Products = ({ products, balance, onBuy, purchasedItems }) => {
  const purchasedIds = purchasedItems.map((i) => i.id);
  return (
    <section style={s.productsSection}>
      <h2 style={s.sectionTitle}>🛍 Товари</h2>
      <div style={s.productsGrid}>
        {products.map((product) => {
          const bought = purchasedIds.includes(product.id);
          const canAfford = balance >= product.price;
          return (
            <div key={product.id} style={s.card}>
              <div style={{ position: "relative" }}>
                <img src={product.image} alt={product.name} style={s.cardImage} />
                <span style={s.categoryBadge}>{product.category}</span>
              </div>
              <div style={s.cardBody}>
                <h3 style={s.productName}>{product.name}</h3>
                <p style={s.productPrice}>{product.price}$</p>
                <button
                  style={{ ...s.buyBtn, ...(bought ? s.buyBtnBought : !canAfford ? s.buyBtnDisabled : {}) }}
                  onClick={() => !bought && onBuy(product)}
                  disabled={!canAfford || bought}
                >
                  {bought ? "✓ Куплено" : !canAfford ? "Замало коштів" : "Купити"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ─── ExistProduc.jsx ─────────────────────────────────────────────────
const ExistProduc = ({ purchasedItems }) => {
  const total = purchasedItems.reduce((sum, i) => sum + i.price, 0);
  return (
    <section style={s.purchasedSection}>
      <div style={{ maxWidth: 1100, margin: "0 auto 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={s.purchasedTitle}>
          Куплені товари: <span style={{ color: "#FFD200" }}>{purchasedItems.length}</span>
        </h2>
        {purchasedItems.length > 0 && (
          <span style={{ color: "#888", fontSize: 14 }}>Витрачено: {total}$</span>
        )}
      </div>
      {purchasedItems.length === 0 ? (
        <p style={{ maxWidth: 1100, margin: "0 auto", color: "#555", fontSize: 14 }}>
          Ви ще нічого не купили — заробіть грошей і поверніться 😊
        </p>
      ) : (
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
          {purchasedItems.map((item, idx) => (
            <div key={idx} style={s.purchasedCard}>
              <img src={item.image} alt={item.name} style={s.purchasedImg} />
              <div>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#FFD200", fontWeight: 700 }}>{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// ─── main.jsx ────────────────────────────────────────────────────────
const ROUTES = { home: "home", notFound: "404" };

export default function App() {
  const [balance, setBalance]           = useState(0);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [route, setRoute]               = useState(ROUTES.home);

  const handleAddMoney = () => setBalance((p) => p + 1);
  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance((p) => p - product.price);
      setPurchasedItems((p) => [...p, product]);
    }
  };

  if (route === ROUTES.notFound) {
    return <NotFound404 onGoHome={() => setRoute(ROUTES.home)} />;
  }

  return (
    <div style={s.app}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:#0d0d1a; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#0d0d1a; }
        ::-webkit-scrollbar-thumb { background:#FFD200; border-radius:3px; }
        button { transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s; }
      `}</style>

      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={s.avatar}>К</div>
            <div>
              <p style={{ fontSize: 11, color: "#888" }}>Ваш нікнейм</p>
              <p style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                Користувач 1
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button
              style={s.demo404Btn}
              onClick={() => setRoute(ROUTES.notFound)}
              title="Симулювати помилку 404"
            >
              ⚠ Demo 404
            </button>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 11, color: "#888" }}>Ваш баланс</p>
              <p style={{ fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: 22, color: "#FFD200" }}>
                {balance}$
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main style={s.main}>
        <AddMoney onAddMoney={handleAddMoney} balance={balance} />
        <Products
          products={productData}
          balance={balance}
          onBuy={handleBuy}
          purchasedItems={purchasedItems}
        />
      </main>

      {/* PURCHASED */}
      <ExistProduc purchasedItems={purchasedItems} />
    </div>
  );
}

// ─── Стилі ───────────────────────────────────────────────────────────
const s = {
  app: { fontFamily: "'DM Sans',sans-serif", background: "#0d0d1a", minHeight: "100vh", color: "#f0f0f0" },

  // HEADER
  header: { background: "linear-gradient(135deg,#12122a,#1a1a3e)", borderBottom: "2px solid #FFD200", padding: "0 32px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 30px rgba(255,210,0,0.1)" },
  headerInner: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 },
  avatar: { width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg,#FFD200,#ff9500)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: 18, color: "#0d0d1a" },
  demo404Btn: { background: "transparent", border: "1px solid #333", borderRadius: 8, padding: "6px 14px", color: "#888", fontSize: 11, cursor: "pointer", fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em" },

  // MAIN
  main: { maxWidth: 1100, margin: "0 auto", padding: "40px 24px", display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" },

  // ADD MONEY
  addMoneySection: { background: "linear-gradient(145deg,#12122a,#1c1c3a)", border: "1px solid #2a2a4a", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, minWidth: 200, flex: "0 0 auto" },
  circle: { width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg,#FFD200,#ff9500)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s", userSelect: "none" },
  circleText: { fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: 20, color: "#0d0d1a", marginTop: 4 },

  // PRODUCTS
  productsSection: { flex: 1, minWidth: 300 },
  sectionTitle: { fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 20 },
  productsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 18 },
  card: { background: "linear-gradient(145deg,#12122a,#1c1c3a)", border: "1px solid #2a2a4a", borderRadius: 16, overflow: "hidden" },
  cardImage: { width: "100%", height: 180, objectFit: "cover", display: "block" },
  categoryBadge: { position: "absolute", top: 10, left: 10, background: "rgba(255,210,0,0.9)", color: "#0d0d1a", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.06em" },
  cardBody: { padding: "14px 16px 16px" },
  productName: { fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 },
  productPrice: { fontSize: 20, fontWeight: 700, color: "#FFD200", marginBottom: 12, fontFamily: "'Unbounded',sans-serif" },
  buyBtn: { width: "100%", padding: "10px 0", background: "#FFD200", color: "#0d0d1a", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" },
  buyBtnDisabled: { background: "#2a2a4a", color: "#555", cursor: "not-allowed" },
  buyBtnBought: { background: "#1a3a1a", color: "#4caf50", cursor: "default" },

  // PURCHASED
  purchasedSection: { background: "linear-gradient(145deg,#0a0a18,#12122a)", borderTop: "2px solid #2a2a4a", padding: "32px" },
  purchasedTitle: { fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" },
  purchasedCard: { display: "flex", alignItems: "center", gap: 10, background: "#1a1a3a", border: "1px solid #2a2a4a", borderRadius: 12, padding: "8px 14px 8px 8px" },
  purchasedImg: { width: 44, height: 44, borderRadius: 8, objectFit: "cover" },

  // 404
  page404: { minHeight: "100vh", background: "#0d0d1a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", fontFamily: "'DM Sans',sans-serif" },
  grid404: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,210,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,0,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" },
  scanline: { position: "absolute", left: 0, right: 0, height: "3px", background: "linear-gradient(transparent, rgba(255,210,0,0.08), transparent)", animation: "scanline 4s linear infinite", pointerEvents: "none", zIndex: 0 },
  content404: { position: "relative", zIndex: 1, textAlign: "center", padding: "40px 24px", maxWidth: 640 },
  glitchWrap: { display: "flex", justifyContent: "center", alignItems: "center", gap: 4, marginBottom: 28 },
  bigNum: { fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: "clamp(72px, 16vw, 160px)", lineHeight: 1, display: "inline-block" },
  terminal: { background: "#0a0a18", border: "1px solid #2a2a4a", borderRadius: 12, padding: "16px 20px", marginBottom: 32, textAlign: "left" },
  terminalDots: { display: "flex", gap: 6, marginBottom: 12 },
  dot: { width: 11, height: 11, borderRadius: "50%" },
  terminalLine: { fontFamily: "'DM Mono',monospace", fontSize: 13, color: "#ccc", letterSpacing: "0.02em" },
  title404: { fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: "clamp(18px,4vw,30px)", color: "#fff", marginBottom: 14 },
  subtitle404: { fontSize: 15, color: "#888", lineHeight: 1.8, marginBottom: 36 },
  homeBtn: { background: "transparent", border: "2px solid #FFD200", borderRadius: 12, padding: "14px 36px", color: "#FFD200", fontFamily: "'Unbounded',sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" },
  decorRow: { marginTop: 56, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", pointerEvents: "none", userSelect: "none" },
  decorNum: { fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: 38, color: "#FFD200" },
};
