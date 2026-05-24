"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const initialCart = [
  { id: 1, name: "Pure Organic Honey", weight: "500g", price: 599, mrp: 799, quantity: 1, emoji: "🍯", bg: "#FFF8E7" },
  { id: 2, name: "Organic Bee Pollen", weight: "100g", price: 699, mrp: 899, quantity: 1, emoji: "🌸", bg: "#FFF0F5" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 499 ? 0 : 60;
  const tax = Math.round(subtotal * 0.18);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping + tax - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "MALLI10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setCouponApplied(false);
    }
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
          }}>🛒 Cart ({cartItems.length})</Link>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
        padding: "48px 24px", textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "40px", fontWeight: "800", color: "white", marginBottom: "8px"
        }}>Your Cart 🛒</h1>
        <p style={{ color: "#888", fontSize: "15px" }}>
          {cartItems.length} items in your cart
        </p>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>

        {cartItems.length === 0 ? (
          /* EMPTY CART */
          <div style={{ textAlign: "center", padding: "100px 24px" }}>
            <div style={{ fontSize: "80px", marginBottom: "24px" }}>🛒</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "32px", fontWeight: "700", color: "#1A1A1A", marginBottom: "16px"
            }}>Your cart is empty!</h2>
            <p style={{ color: "#999", marginBottom: "32px" }}>Add some delicious honey products to your cart</p>
            <Link href="/shop" style={{
              background: "#D4A017", color: "white",
              padding: "16px 40px", borderRadius: "50px",
              fontSize: "16px", fontWeight: "700", textDecoration: "none"
            }}>Shop Now 🍯</Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "40px", alignItems: "start" }}>

            {/* CART ITEMS */}
            <div>
              <div style={{
                background: "white", borderRadius: "24px",
                overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                {/* Header */}
                <div style={{
                  display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  gap: "16px", padding: "20px 24px",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  fontSize: "12px", fontWeight: "700",
                  color: "#999", textTransform: "uppercase", letterSpacing: "1px"
                }}>
                  <span>Product</span>
                  <span style={{ textAlign: "center" }}>Price</span>
                  <span style={{ textAlign: "center" }}>Quantity</span>
                  <span style={{ textAlign: "right" }}>Total</span>
                </div>

                {cartItems.map((item, index) => (
                  <div key={item.id} style={{
                    display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    gap: "16px", padding: "24px",
                    borderBottom: index < cartItems.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    alignItems: "center"
                  }}>
                    {/* Product */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{
                        width: "80px", height: "80px", borderRadius: "16px",
                        background: item.bg, display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: "40px", flexShrink: 0
                      }}>{item.emoji}</div>
                      <div>
                        <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "4px", fontSize: "15px" }}>
                          {item.name}
                        </div>
                        <div style={{ color: "#999", fontSize: "13px", marginBottom: "8px" }}>
                          Weight: {item.weight}
                        </div>
                        <button onClick={() => removeItem(item.id)}
                          style={{
                            background: "none", border: "none",
                            color: "#e74c3c", fontSize: "12px",
                            fontWeight: "600", cursor: "pointer", padding: "0"
                          }}>✕ Remove</button>
                      </div>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: "700", color: "#D4A017", fontSize: "16px" }}>₹{item.price}</div>
                      <div style={{ color: "#bbb", fontSize: "12px", textDecoration: "line-through" }}>₹{item.mrp}</div>
                    </div>

                    {/* Quantity */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{
                        display: "flex", alignItems: "center",
                        border: "2px solid rgba(0,0,0,0.1)", borderRadius: "50px",
                        overflow: "hidden"
                      }}>
                        <button onClick={() => updateQty(item.id, item.quantity - 1)}
                          style={{
                            width: "36px", height: "36px", border: "none",
                            background: "white", fontSize: "18px",
                            cursor: "pointer", color: "#D4A017", fontWeight: "700"
                          }}>−</button>
                        <span style={{ width: "36px", textAlign: "center", fontWeight: "700", fontSize: "15px" }}>
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)}
                          style={{
                            width: "36px", height: "36px", border: "none",
                            background: "white", fontSize: "18px",
                            cursor: "pointer", color: "#D4A017", fontWeight: "700"
                          }}>+</button>
                      </div>
                    </div>

                    {/* Total */}
                    <div style={{ textAlign: "right", fontWeight: "800", color: "#1A1A1A", fontSize: "17px" }}>
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div style={{ marginTop: "20px" }}>
                <Link href="/shop" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  color: "#D4A017", fontWeight: "600", fontSize: "14px", textDecoration: "none"
                }}>← Continue Shopping</Link>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div style={{ position: "sticky", top: "90px" }}>
              <div style={{
                background: "white", borderRadius: "24px",
                padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                marginBottom: "20px"
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px", fontWeight: "700",
                  color: "#1A1A1A", marginBottom: "24px"
                }}>Order Summary</h3>

                {/* Price Breakdown */}
                {[
                  { label: "Subtotal", value: `₹${subtotal}` },
                  { label: "Shipping", value: shipping === 0 ? "FREE 🎉" : `₹${shipping}` },
                  { label: "GST (18%)", value: `₹${tax}` },
                  ...(couponApplied ? [{ label: "Coupon Discount", value: `-₹${discount}` }] : []),
                ].map(row => (
                  <div key={row.label} style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", padding: "10px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    fontSize: "14px"
                  }}>
                    <span style={{ color: "#666" }}>{row.label}</span>
                    <span style={{
                      fontWeight: "600",
                      color: row.label === "Coupon Discount" ? "#2D5016" :
                             row.value === "FREE 🎉" ? "#2D5016" : "#1A1A1A"
                    }}>{row.value}</span>
                  </div>
                ))}

                {/* Total */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "16px 0",
                  marginTop: "8px"
                }}>
                  <span style={{ fontSize: "18px", fontWeight: "800", color: "#1A1A1A" }}>Total</span>
                  <span style={{ fontSize: "24px", fontWeight: "800", color: "#D4A017" }}>₹{total}</span>
                </div>

                {/* GST Note */}
                <div style={{
                  background: "#F0F7E6", borderRadius: "10px",
                  padding: "10px 14px", marginBottom: "20px",
                  fontSize: "12px", color: "#2D5016", fontWeight: "500"
                }}>
                  📜 GST invoice will be provided with your order
                </div>

                {/* Coupon */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                    Have a coupon?
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      value={coupon}
                      onChange={e => setCoupon(e.target.value)}
                      placeholder="Enter coupon code"
                      style={{
                        flex: 1, padding: "10px 16px", borderRadius: "50px",
                        border: "2px solid rgba(0,0,0,0.1)", outline: "none",
                        fontSize: "13px"
                      }} />
                    <button onClick={applyCoupon} style={{
                      background: "#1A1A1A", color: "white",
                      padding: "10px 16px", borderRadius: "50px",
                      border: "none", fontSize: "13px",
                      fontWeight: "600", cursor: "pointer"
                    }}>Apply</button>
                  </div>
                  {couponApplied && (
                    <div style={{ color: "#2D5016", fontSize: "12px", marginTop: "6px", fontWeight: "600" }}>
                      ✓ Coupon applied! 10% discount
                    </div>
                  )}
                  {couponError && (
                    <div style={{ color: "#e74c3c", fontSize: "12px", marginTop: "6px" }}>
                      ✕ {couponError}
                    </div>
                  )}
                  <div style={{ color: "#999", fontSize: "11px", marginTop: "4px" }}>
                    Try: MALLI10
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" style={{
                  display: "block", width: "100%",
                  background: "linear-gradient(135deg, #D4A017, #F5C842)",
                  color: "white", padding: "18px",
                  borderRadius: "50px", fontSize: "16px",
                  fontWeight: "700", textDecoration: "none",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
                }}>
                  Proceed to Checkout →
                </Link>

                {/* Payment Methods */}
                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <div style={{ color: "#999", fontSize: "12px", marginBottom: "8px" }}>
                    Secure Payment by
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
                    {["💳 Cards", "📱 UPI", "🏦 NetBanking", "💵 COD"].map(m => (
                      <span key={m} style={{
                        background: "#f5f5f5", padding: "4px 10px",
                        borderRadius: "6px", fontSize: "11px", fontWeight: "600", color: "#666"
                      }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{
                background: "white", borderRadius: "20px",
                padding: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                {[
                  { icon: "🔒", text: "100% Secure Checkout" },
                  { icon: "🚚", text: "Free delivery above ₹499" },
                  { icon: "↩️", text: "7 day easy returns" },
                  { icon: "📜", text: "GST invoice included" },
                ].map(b => (
                  <div key={b.text} style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "8px 0", fontSize: "13px", color: "#555",
                    borderBottom: "1px solid rgba(0,0,0,0.04)"
                  }}>
                    <span style={{ fontSize: "18px" }}>{b.icon}</span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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