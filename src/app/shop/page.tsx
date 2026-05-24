"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Pure Organic Honey", slug: "pure-organic-honey", weight: "500g", price: 599, mrp: 799, badge: "Best Seller", emoji: "🍯", desc: "Raw unfiltered honey from organic beehives.", bg: "#FFF8E7", category: "honey", rating: 4.9, reviews: 234 },
  { id: 2, name: "Pure Organic Honey", slug: "pure-organic-honey-1kg", weight: "1kg", price: 1099, mrp: 1499, badge: "Value Pack", emoji: "🍯", desc: "Raw unfiltered honey - family pack.", bg: "#FFF8E7", category: "honey", rating: 4.8, reviews: 156 },
  { id: 3, name: "Natural Beeswax", slug: "natural-beeswax", weight: "200g", price: 449, mrp: 599, badge: "Premium", emoji: "🕯️", desc: "Pure natural beeswax for skincare and candles.", bg: "#F0F7E6", category: "wax", rating: 4.7, reviews: 89 },
  { id: 4, name: "Natural Beeswax", slug: "natural-beeswax-500g", weight: "500g", price: 899, mrp: 1199, badge: "Premium", emoji: "🕯️", desc: "Pure natural beeswax - large pack.", bg: "#F0F7E6", category: "wax", rating: 4.8, reviews: 67 },
  { id: 5, name: "Organic Bee Pollen", slug: "organic-bee-pollen", weight: "100g", price: 699, mrp: 899, badge: "Superfood", emoji: "🌸", desc: "Nature's complete superfood.", bg: "#FFF0F5", category: "pollen", rating: 4.9, reviews: 178 },
  { id: 6, name: "Organic Bee Pollen", slug: "organic-bee-pollen-250g", weight: "250g", price: 1499, mrp: 1999, badge: "Superfood", emoji: "🌸", desc: "Nature's complete superfood - bulk pack.", bg: "#FFF0F5", category: "pollen", rating: 4.8, reviews: 92 },
  { id: 7, name: "Honey Gift Set", slug: "honey-gift-set", weight: "3 items", price: 1299, mrp: 1799, badge: "Gift", emoji: "🎁", desc: "Perfect gift - Honey + Pollen + Wax combo.", bg: "#F5F0FF", category: "combo", rating: 5.0, reviews: 45 },
  { id: 8, name: "Immunity Combo", slug: "immunity-combo", weight: "2 items", price: 999, mrp: 1399, badge: "Popular", emoji: "💪", desc: "Honey + Bee Pollen for immunity boost.", bg: "#FFF8E7", category: "combo", rating: 4.9, reviews: 123 },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [cart, setCart] = useState<number[]>([]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "honey", label: "🍯 Honey" },
    { id: "wax", label: "🕯️ Beeswax" },
    { id: "pollen", label: "🌸 Bee Pollen" },
    { id: "combo", label: "🎁 Combos" },
  ];

  const filtered = products.filter(p =>
    activeCategory === "all" ? true : p.category === activeCategory
  );

  const addToCart = (id: number) => {
    setCart(prev => [...prev, id]);
  };

  return (
    <main style={{ background: "#FFFDF4", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,253,244,0.97)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(212,160,23,0.15)"
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 24px", display: "flex",
          alignItems: "center", justifyContent: "space-between", height: "72px"
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "44px", height: "44px" }}>
              <Image src="/logo.png" alt="Malli Farm" width={44} height={44}
                style={{ width: "44px", height: "44px", objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "800", color: "#D4A017" }}>MALLI FARM</div>
              <div style={{ fontSize: "9px", color: "#2D5016", letterSpacing: "2px", fontWeight: "700" }}>PREMIUM HONEY • PVT LTD</div>
            </div>
          </Link>

          <div style={{ display: "flex", gap: "32px" }}>
            {["Home", "Shop", "About", "Contact"].map(link => (
              <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                style={{ fontSize: "14px", fontWeight: link === "Shop" ? "700" : "500", color: link === "Shop" ? "#D4A017" : "#1A1A1A", textDecoration: "none" }}>
                {link}
              </Link>
            ))}
          </div>

          <Link href="/cart" style={{
            background: "#D4A017", color: "white",
            padding: "10px 20px", borderRadius: "50px",
            fontSize: "14px", fontWeight: "600", textDecoration: "none"
          }}>🛒 Cart ({cart.length})</Link>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
        padding: "60px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>
          OUR COLLECTION
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: "800", color: "white", marginBottom: "16px"
        }}>Shop Pure Organic Products</h1>
        <p style={{ color: "#888", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
          100% natural, lab tested and FSSAI certified products
        </p>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>

        {/* FILTERS */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "40px"
        }}>
          {/* Categories */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "10px 20px", borderRadius: "50px",
                  border: "2px solid",
                  borderColor: activeCategory === cat.id ? "#D4A017" : "rgba(0,0,0,0.1)",
                  background: activeCategory === cat.id ? "#D4A017" : "white",
                  color: activeCategory === cat.id ? "white" : "#666",
                  fontSize: "14px", fontWeight: "600", cursor: "pointer",
                  transition: "all 0.2s"
                }}>{cat.label}</button>
            ))}
          </div>

          {/* Sort */}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            style={{
              padding: "10px 20px", borderRadius: "50px",
              border: "2px solid rgba(0,0,0,0.1)",
              background: "white", fontSize: "14px",
              fontWeight: "500", cursor: "pointer", outline: "none"
            }}>
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* PRODUCTS GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "28px"
        }}>
          {filtered.map(product => (
            <div key={product.id} style={{
              background: product.bg, borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              transition: "all 0.3s", cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
            }}>
              {/* Image */}
              <Link href={`/product/${product.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  height: "200px", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "80px", position: "relative"
                }}>
                  {product.emoji}
                  <span style={{
                    position: "absolute", top: "12px", left: "12px",
                    background: "#D4A017", color: "white",
                    padding: "4px 10px", borderRadius: "50px",
                    fontSize: "10px", fontWeight: "700"
                  }}>{product.badge}</span>
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "#1A1A1A", color: "#F5C842",
                    padding: "4px 10px", borderRadius: "50px",
                    fontSize: "10px", fontWeight: "700"
                  }}>{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF</span>
                </div>
              </Link>

              {/* Info */}
              <div style={{ padding: "20px" }}>
                <Link href={`/product/${product.slug}`} style={{ textDecoration: "none" }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px", fontWeight: "700",
                    color: "#1A1A1A", marginBottom: "6px"
                  }}>{product.name}</h3>
                </Link>
                <p style={{ color: "#777", fontSize: "13px", marginBottom: "8px" }}>{product.desc}</p>
                <p style={{ color: "#aaa", fontSize: "12px", marginBottom: "8px" }}>Weight: {product.weight}</p>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                  <span style={{ color: "#D4A017", fontSize: "14px" }}>{"★".repeat(5)}</span>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#1A1A1A" }}>{product.rating}</span>
                  <span style={{ fontSize: "12px", color: "#999" }}>({product.reviews})</span>
                </div>

                {/* Price + Button */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "22px", fontWeight: "800", color: "#D4A017" }}>₹{product.price}</span>
                    <span style={{ fontSize: "13px", color: "#bbb", textDecoration: "line-through", marginLeft: "6px" }}>₹{product.mrp}</span>
                  </div>
                  <button onClick={() => addToCart(product.id)}
                    style={{
                      background: cart.includes(product.id) ? "#2D5016" : "#1A1A1A",
                      color: "white", padding: "10px 16px",
                      borderRadius: "50px", border: "none",
                      fontSize: "12px", fontWeight: "600", cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#D4A017"}
                    onMouseLeave={e => e.currentTarget.style.background = cart.includes(product.id) ? "#2D5016" : "#1A1A1A"}>
                    {cart.includes(product.id) ? "✓ Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGES */}
        <div style={{
          marginTop: "80px", padding: "40px",
          background: "#1A1A1A", borderRadius: "24px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px", textAlign: "center"
        }}>
          {[
            { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹499" },
            { icon: "↩️", title: "Easy Returns", desc: "7 day return policy" },
            { icon: "🔒", title: "Secure Payment", desc: "Razorpay secured" },
            { icon: "📜", title: "GST Invoice", desc: "For every order" },
          ].map(b => (
            <div key={b.title}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{b.icon}</div>
              <div style={{ color: "#D4A017", fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>{b.title}</div>
              <div style={{ color: "#666", fontSize: "13px" }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: "#0F0F0F", color: "white",
        padding: "40px 24px", textAlign: "center", marginTop: "80px"
      }}>
        <div style={{ color: "#555", fontSize: "13px" }}>
          © 2024 Malli Farm Private Limited | FSSAI Certified | GST Registered | Made with 🍯 in India
        </div>
      </footer>

    </main>
  );
}