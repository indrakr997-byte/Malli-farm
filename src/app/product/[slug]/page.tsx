"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products: Record<string, {
  name: string; emoji: string; price: number; mrp: number;
  badge: string; bg: string; desc: string; longDesc: string;
  weight: string[]; benefits: string[]; ingredients: string[];
  rating: number; reviews: { name: string; city: string; text: string; rating: number }[];
}> = {
  "pure-organic-honey": {
    name: "Pure Organic Honey", emoji: "🍯", price: 599, mrp: 799,
    badge: "Best Seller", bg: "#FFF8E7",
    desc: "Raw, unfiltered honey from our organic beehives.",
    longDesc: "Our Pure Organic Honey is harvested from the pristine forests of Uttarakhand. Every jar contains raw, unfiltered honey that retains all natural enzymes, antioxidants and nutrients. No heat treatment, no additives — just pure golden goodness straight from our hives.",
    weight: ["250g", "500g", "1kg"],
    benefits: ["Rich in antioxidants", "Boosts immunity naturally", "Natural energy source", "Aids digestion", "Anti-bacterial properties", "Supports wound healing"],
    ingredients: ["100% Pure Raw Honey"],
    rating: 4.9,
    reviews: [
      { name: "Priya Sharma", city: "Delhi", text: "Best honey I have ever tasted! Pure and authentic.", rating: 5 },
      { name: "Rahul Verma", city: "Mumbai", text: "Amazing quality, delivered fresh. Highly recommended!", rating: 5 },
      { name: "Anita Singh", city: "Bangalore", text: "My family loves it. Will definitely order again!", rating: 5 },
    ]
  },
  "natural-beeswax": {
    name: "Natural Beeswax", emoji: "🕯️", price: 449, mrp: 599,
    badge: "Premium", bg: "#F0F7E6",
    desc: "Pure natural beeswax for skincare and candles.",
    longDesc: "Our Natural Beeswax is 100% pure and unrefined, sourced directly from our organic hives. Perfect for DIY skincare, lip balms, candles and wood polish. No chemicals, no bleaching — completely natural.",
    weight: ["100g", "200g", "500g"],
    benefits: ["100% natural & pure", "Great for skincare", "Makes premium candles", "Natural wood polish", "No chemicals", "Long shelf life"],
    ingredients: ["100% Pure Natural Beeswax"],
    rating: 4.7,
    reviews: [
      { name: "Meera Patel", city: "Surat", text: "Perfect for making candles. Pure and high quality!", rating: 5 },
      { name: "Arjun Kumar", city: "Pune", text: "Great product. Used for lip balm making. Excellent!", rating: 4 },
    ]
  },
  "organic-bee-pollen": {
    name: "Organic Bee Pollen", emoji: "🌸", price: 699, mrp: 899,
    badge: "Superfood", bg: "#FFF0F5",
    desc: "Nature's most complete superfood.",
    longDesc: "Organic Bee Pollen is one of nature's most complete foods, containing nearly all nutrients required by humans. Harvested fresh from our organic hives, our bee pollen is dried at low temperatures to preserve all nutrients, enzymes and vital compounds.",
    weight: ["100g", "250g"],
    benefits: ["Complete nutrition profile", "Boosts energy levels", "Strengthens immunity", "Rich in proteins", "Natural antioxidants", "Supports fertility"],
    ingredients: ["100% Pure Organic Bee Pollen"],
    rating: 4.9,
    reviews: [
      { name: "Dr. Sunita Rao", city: "Chennai", text: "As a nutritionist I highly recommend this. Pure and potent!", rating: 5 },
      { name: "Vikram Singh", city: "Jaipur", text: "Amazing energy boost every morning. Love it!", rating: 5 },
    ]
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug] || products["pure-organic-honey"];
  const [selectedWeight, setSelectedWeight] = useState(product.weight[1] || product.weight[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

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
          maxWidth: "1280px", margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px"
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image src="/logo.png" alt="Malli Farm" width={44} height={44}
              style={{ width: "44px", height: "44px", objectFit: "contain" }} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "800", color: "#D4A017" }}>MALLI FARM</div>
              <div style={{ fontSize: "9px", color: "#2D5016", letterSpacing: "2px", fontWeight: "700" }}>PREMIUM HONEY • PVT LTD</div>
            </div>
          </Link>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Home", "Shop", "About", "Contact"].map(link => (
              <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                style={{ fontSize: "14px", fontWeight: "500", color: "#1A1A1A", textDecoration: "none" }}>{link}</Link>
            ))}
          </div>
          <Link href="/cart" style={{
            background: "#D4A017", color: "white", padding: "10px 20px",
            borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none"
          }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 24px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#999" }}>
          <Link href="/" style={{ color: "#D4A017", textDecoration: "none" }}>Home</Link>
          <span>→</span>
          <Link href="/shop" style={{ color: "#D4A017", textDecoration: "none" }}>Shop</Link>
          <span>→</span>
          <span style={{ color: "#1A1A1A" }}>{product.name}</span>
        </div>
      </div>

      {/* PRODUCT MAIN */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "start"
        }}>

          {/* LEFT - Product Image */}
          <div>
            <div style={{
              background: product.bg, borderRadius: "32px",
              height: "480px", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "160px", position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
            }}>
              {product.emoji}
              <span style={{
                position: "absolute", top: "20px", left: "20px",
                background: "#D4A017", color: "white",
                padding: "6px 16px", borderRadius: "50px",
                fontSize: "12px", fontWeight: "700"
              }}>{product.badge}</span>
              <span style={{
                position: "absolute", top: "20px", right: "20px",
                background: "#1A1A1A", color: "#F5C842",
                padding: "6px 14px", borderRadius: "50px",
                fontSize: "12px", fontWeight: "700"
              }}>{discount}% OFF</span>
            </div>

            {/* Trust badges */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)",
              gap: "12px", marginTop: "24px"
            }}>
              {["🌿 Organic", "🧪 Lab Tested", "📜 FSSAI", "🚚 Free Ship"].map(b => (
                <div key={b} style={{
                  background: "white", borderRadius: "12px",
                  padding: "12px 8px", textAlign: "center",
                  fontSize: "12px", fontWeight: "600", color: "#2D5016",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(45,80,22,0.1)"
                }}>{b}</div>
              ))}
            </div>
          </div>

          {/* RIGHT - Product Info */}
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px", fontWeight: "800",
              color: "#1A1A1A", marginBottom: "12px"
            }}>{product.name}</h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ color: "#D4A017", fontSize: "18px" }}>{"★".repeat(5)}</span>
              <span style={{ fontWeight: "700", color: "#1A1A1A" }}>{product.rating}</span>
              <span style={{ color: "#999", fontSize: "14px" }}>({product.reviews.length} reviews)</span>
              <span style={{
                background: "#E8F5E9", color: "#2D5016",
                padding: "2px 10px", borderRadius: "50px", fontSize: "12px", fontWeight: "600"
              }}>✓ In Stock</span>
            </div>

            {/* Price */}
            <div style={{
              background: "white", borderRadius: "16px",
              padding: "20px", marginBottom: "24px",
              boxShadow: "0 2px 15px rgba(0,0,0,0.06)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "40px", fontWeight: "800", color: "#D4A017" }}>₹{product.price}</span>
                <span style={{ fontSize: "20px", color: "#bbb", textDecoration: "line-through" }}>₹{product.mrp}</span>
                <span style={{
                  background: "#D4A017", color: "white",
                  padding: "4px 12px", borderRadius: "50px",
                  fontSize: "14px", fontWeight: "700"
                }}>Save {discount}%</span>
              </div>
              <div style={{ color: "#2D5016", fontSize: "13px", marginTop: "8px", fontWeight: "500" }}>
                ✓ Free delivery on this order &nbsp;|&nbsp; ✓ GST invoice included
              </div>
            </div>

            {/* Weight Selection */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#1A1A1A", marginBottom: "10px" }}>
                Select Weight:
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.weight.map(w => (
                  <button key={w} onClick={() => setSelectedWeight(w)}
                    style={{
                      padding: "10px 20px", borderRadius: "50px",
                      border: "2px solid",
                      borderColor: selectedWeight === w ? "#D4A017" : "rgba(0,0,0,0.1)",
                      background: selectedWeight === w ? "#D4A017" : "white",
                      color: selectedWeight === w ? "white" : "#666",
                      fontSize: "14px", fontWeight: "600", cursor: "pointer"
                    }}>{w}</button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#1A1A1A", marginBottom: "10px" }}>
                Quantity:
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  display: "flex", alignItems: "center",
                  border: "2px solid rgba(0,0,0,0.1)", borderRadius: "50px",
                  overflow: "hidden"
                }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: "44px", height: "44px", border: "none",
                      background: "white", fontSize: "20px", cursor: "pointer",
                      fontWeight: "700", color: "#D4A017"
                    }}>−</button>
                  <span style={{
                    width: "48px", textAlign: "center",
                    fontSize: "16px", fontWeight: "700"
                  }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: "44px", height: "44px", border: "none",
                      background: "white", fontSize: "20px", cursor: "pointer",
                      fontWeight: "700", color: "#D4A017"
                    }}>+</button>
                </div>
                <span style={{ color: "#999", fontSize: "13px" }}>
                  Total: <strong style={{ color: "#D4A017" }}>₹{product.price * quantity}</strong>
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
              <button onClick={handleAddToCart} style={{
                flex: 1, padding: "16px", borderRadius: "50px",
                border: "none",
                background: added ? "#2D5016" : "#1A1A1A",
                color: "white", fontSize: "16px", fontWeight: "700", cursor: "pointer",
                transition: "all 0.3s"
              }}>
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <Link href="/checkout" style={{
                flex: 1, padding: "16px", borderRadius: "50px",
                background: "linear-gradient(135deg, #D4A017, #F5C842)",
                color: "white", fontSize: "16px", fontWeight: "700",
                textDecoration: "none", textAlign: "center",
                boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
              }}>Buy Now →</Link>
            </div>

            {/* Wishlist */}
            <button style={{
              width: "100%", padding: "12px", borderRadius: "50px",
              border: "2px solid rgba(0,0,0,0.1)", background: "white",
              fontSize: "14px", fontWeight: "600", cursor: "pointer", color: "#666"
            }}>♡ Add to Wishlist</button>

            {/* Delivery Info */}
            <div style={{
              marginTop: "24px", background: "white", borderRadius: "16px",
              padding: "20px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)"
            }}>
              {[
                { icon: "🚚", text: "Free delivery on orders above ₹499" },
                { icon: "📦", text: "Dispatched within 24 hours" },
                { icon: "↩️", text: "7 day easy return policy" },
                { icon: "🔒", text: "100% secure payment" },
              ].map(item => (
                <div key={item.text} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "8px 0", borderBottom: "1px solid rgba(0,0,0,0.04)"
                }}>
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                  <span style={{ fontSize: "13px", color: "#555" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TABS */}
        <div style={{ marginTop: "80px" }}>
          <div style={{ display: "flex", gap: "4px", marginBottom: "32px", borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
            {["description", "benefits", "reviews"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  padding: "14px 28px", border: "none", background: "none",
                  fontSize: "15px", fontWeight: "600", cursor: "pointer",
                  borderBottom: activeTab === tab ? "3px solid #D4A017" : "3px solid transparent",
                  color: activeTab === tab ? "#D4A017" : "#999",
                  textTransform: "capitalize", transition: "all 0.2s"
                }}>{tab}</button>
            ))}
          </div>

          {/* Description Tab */}
          {activeTab === "description" && (
            <div style={{ maxWidth: "800px" }}>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.9", marginBottom: "24px" }}>
                {product.longDesc}
              </p>
              <div style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 2px 15px rgba(0,0,0,0.05)"
              }}>
                <h4 style={{ fontWeight: "700", marginBottom: "12px", color: "#1A1A1A" }}>Product Details:</h4>
                {[
                  { label: "Origin", value: "Uttarakhand, India" },
                  { label: "Ingredients", value: product.ingredients[0] },
                  { label: "FSSAI", value: "Certified" },
                  { label: "Shelf Life", value: "24 months" },
                  { label: "Storage", value: "Store in cool, dry place" },
                ].map(d => (
                  <div key={d.label} style={{
                    display: "flex", gap: "16px", padding: "10px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.04)", fontSize: "14px"
                  }}>
                    <span style={{ color: "#999", width: "120px", flexShrink: 0 }}>{d.label}</span>
                    <span style={{ color: "#1A1A1A", fontWeight: "500" }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px", maxWidth: "900px"
            }}>
              {product.benefits.map(b => (
                <div key={b} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  background: "white", padding: "20px", borderRadius: "16px",
                  boxShadow: "0 2px 15px rgba(0,0,0,0.05)"
                }}>
                  <span style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "#D4A017", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "14px", fontWeight: "700", flexShrink: 0
                  }}>✓</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }}>{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div style={{ maxWidth: "800px" }}>
              <div style={{
                background: "white", borderRadius: "20px", padding: "32px",
                marginBottom: "24px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
                display: "flex", alignItems: "center", gap: "40px"
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "64px", fontWeight: "800", color: "#D4A017", lineHeight: "1"
                  }}>{product.rating}</div>
                  <div style={{ color: "#D4A017", fontSize: "24px", margin: "8px 0" }}>★★★★★</div>
                  <div style={{ color: "#999", fontSize: "13px" }}>{product.reviews.length} reviews</div>
                </div>
                <div style={{ flex: 1 }}>
                  {[5,4,3,2,1].map(star => (
                    <div key={star} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "12px", color: "#999", width: "20px" }}>{star}★</span>
                      <div style={{ flex: 1, height: "6px", background: "#f0f0f0", borderRadius: "3px", overflow: "hidden" }}>
                        <div style={{
                          height: "100%", borderRadius: "3px", background: "#D4A017",
                          width: star === 5 ? "85%" : star === 4 ? "10%" : "5%"
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {product.reviews.map((r, i) => (
                <div key={i} style={{
                  background: "white", borderRadius: "16px", padding: "24px",
                  marginBottom: "16px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      background: "linear-gradient(135deg, #D4A017, #F5C842)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", fontWeight: "700", fontSize: "16px"
                    }}>{r.name[0]}</div>
                    <div>
                      <div style={{ fontWeight: "700", color: "#1A1A1A", fontSize: "15px" }}>{r.name}</div>
                      <div style={{ fontSize: "12px", color: "#999" }}>{r.city} • Verified Buyer ✓</div>
                    </div>
                    <div style={{ marginLeft: "auto", color: "#D4A017" }}>{"★".repeat(r.rating)}</div>
                  </div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.7" }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "32px", fontWeight: "800",
            color: "#1A1A1A", marginBottom: "32px"
          }}>You May Also Like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { name: "Natural Beeswax", slug: "natural-beeswax", price: 449, emoji: "🕯️", bg: "#F0F7E6" },
              { name: "Organic Bee Pollen", slug: "organic-bee-pollen", price: 699, emoji: "🌸", bg: "#FFF0F5" },
              { name: "Honey Gift Set", slug: "honey-gift-set", price: 1299, emoji: "🎁", bg: "#F5F0FF" },
            ].map(p => (
              <Link key={p.slug} href={`/product/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: p.bg, borderRadius: "20px", padding: "24px",
                  textAlign: "center", cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                  transition: "transform 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <div style={{ fontSize: "60px", marginBottom: "12px" }}>{p.emoji}</div>
                  <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "6px" }}>{p.name}</div>
                  <div style={{ color: "#D4A017", fontWeight: "800" }}>₹{p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: "#0F0F0F", color: "white",
        padding: "40px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#555", fontSize: "13px" }}>
          © 2024 Malli Farm Private Limited | FSSAI Certified | GST Registered | Made with 🍯 in India
        </div>
      </footer>

    </main>
  );
}