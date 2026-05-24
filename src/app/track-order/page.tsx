"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [tracked, setTracked] = useState(false);

  const order = {
    id: "MF240001",
    date: "24 May 2024",
    status: "shipped",
    items: "Pure Organic Honey 500g, Organic Bee Pollen 100g",
    total: 1532,
    courier: "Delhivery",
    trackingNumber: "DEL123456789",
    estimatedDelivery: "26 May 2024",
    address: "123, MG Road, Mumbai, Maharashtra - 400001",
    steps: [
      { label: "Order Placed", desc: "Your order has been placed successfully", time: "24 May, 10:30 AM", done: true },
      { label: "Order Confirmed", desc: "Payment confirmed, order processing started", time: "24 May, 11:00 AM", done: true },
      { label: "Packed & Dispatched", desc: "Your order has been packed and dispatched", time: "24 May, 3:00 PM", done: true },
      { label: "In Transit", desc: "Your order is on the way to your city", time: "25 May, 9:00 AM", done: true },
      { label: "Out for Delivery", desc: "Your order is out for delivery", time: "Expected: 26 May", done: false },
      { label: "Delivered", desc: "Order delivered successfully", time: "Expected: 26 May", done: false },
    ]
  };

  const handleTrack = () => {
    if (orderNumber.trim()) setTracked(true);
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
          }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
        padding: "60px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>
          ORDER TRACKING
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: "800", color: "white", marginBottom: "16px"
        }}>Track Your Order 📦</h1>
        <p style={{ color: "#888", fontSize: "16px" }}>
          Enter your order number to track your delivery
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>

        {/* SEARCH BOX */}
        <div style={{
          background: "white", borderRadius: "24px",
          padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          marginBottom: "32px"
        }}>
          <div style={{ fontSize: "15px", fontWeight: "700", color: "#1A1A1A", marginBottom: "16px" }}>
            🔍 Enter Order Number
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              value={orderNumber}
              onChange={e => setOrderNumber(e.target.value)}
              placeholder="e.g. MF240001"
              style={{
                flex: 1, padding: "14px 20px",
                borderRadius: "50px", border: "2px solid rgba(0,0,0,0.08)",
                fontSize: "15px", outline: "none"
              }}
              onFocus={e => e.target.style.borderColor = "#D4A017"}
              onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"}
              onKeyDown={e => e.key === "Enter" && handleTrack()}
            />
            <button onClick={handleTrack} style={{
              background: "linear-gradient(135deg, #D4A017, #F5C842)",
              color: "white", padding: "14px 28px",
              borderRadius: "50px", border: "none",
              fontSize: "15px", fontWeight: "700", cursor: "pointer",
              boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
            }}>Track Order</button>
          </div>
          <div style={{ color: "#999", fontSize: "12px", marginTop: "10px" }}>
            💡 Try: MF240001
          </div>
        </div>

        {/* TRACKING RESULT */}
        {tracked && (
          <div>
            {/* Order Info */}
            <div style={{
              background: "white", borderRadius: "24px",
              padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              marginBottom: "24px"
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", flexWrap: "wrap", gap: "16px",
                marginBottom: "20px", paddingBottom: "20px",
                borderBottom: "1px solid rgba(0,0,0,0.06)"
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ fontWeight: "800", fontSize: "18px", color: "#1A1A1A" }}>#{order.id}</span>
                    <span style={{
                      background: "#E8F4FD", color: "#1a6b9e",
                      padding: "4px 14px", borderRadius: "50px",
                      fontSize: "12px", fontWeight: "700"
                    }}>🚚 {order.status.toUpperCase()}</span>
                  </div>
                  <div style={{ color: "#999", fontSize: "13px", marginBottom: "4px" }}>📅 Ordered: {order.date}</div>
                  <div style={{ color: "#555", fontSize: "14px" }}>🛍️ {order.items}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "24px", fontWeight: "800", color: "#D4A017" }}>₹{order.total}</div>
                  <div style={{ color: "#999", fontSize: "13px", marginTop: "4px" }}>
                    📦 {order.courier}: {order.trackingNumber}
                  </div>
                </div>
              </div>

              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "16px"
              }}>
                <div style={{
                  background: "#F0F7E6", borderRadius: "12px",
                  padding: "16px"
                }}>
                  <div style={{ fontSize: "12px", color: "#2D5016", fontWeight: "700", marginBottom: "4px" }}>
                    🚚 ESTIMATED DELIVERY
                  </div>
                  <div style={{ fontWeight: "800", color: "#1A1A1A", fontSize: "16px" }}>
                    {order.estimatedDelivery}
                  </div>
                </div>
                <div style={{
                  background: "#FFF8E7", borderRadius: "12px",
                  padding: "16px"
                }}>
                  <div style={{ fontSize: "12px", color: "#D4A017", fontWeight: "700", marginBottom: "4px" }}>
                    📍 DELIVERY ADDRESS
                  </div>
                  <div style={{ fontWeight: "600", color: "#1A1A1A", fontSize: "13px" }}>
                    {order.address}
                  </div>
                </div>
              </div>
            </div>

            {/* TRACKING TIMELINE */}
            <div style={{
              background: "white", borderRadius: "24px",
              padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px", fontWeight: "800",
                color: "#1A1A1A", marginBottom: "32px"
              }}>Tracking Timeline</h3>

              <div style={{ position: "relative" }}>
                {order.steps.map((step, index) => (
                  <div key={index} style={{
                    display: "flex", gap: "20px",
                    marginBottom: index < order.steps.length - 1 ? "0" : "0",
                    position: "relative"
                  }}>
                    {/* Line */}
                    {index < order.steps.length - 1 && (
                      <div style={{
                        position: "absolute",
                        left: "19px", top: "40px",
                        width: "2px",
                        height: "calc(100% - 8px)",
                        background: step.done ? "#D4A017" : "#f0f0f0",
                        zIndex: 0
                      }} />
                    )}

                    {/* Circle */}
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: step.done ? "#D4A017" : "#f5f5f5",
                      border: step.done ? "none" : "2px solid #e0e0e0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1,
                      boxShadow: step.done ? "0 4px 12px rgba(212,160,23,0.3)" : "none"
                    }}>
                      {step.done
                        ? <span style={{ color: "white", fontSize: "16px", fontWeight: "700" }}>✓</span>
                        : <span style={{ color: "#ccc", fontSize: "14px" }}>○</span>
                      }
                    </div>

                    {/* Content */}
                    <div style={{
                      flex: 1, paddingBottom: "28px"
                    }}>
                      <div style={{
                        fontWeight: "700",
                        color: step.done ? "#1A1A1A" : "#bbb",
                        fontSize: "15px", marginBottom: "4px"
                      }}>{step.label}</div>
                      <div style={{
                        color: step.done ? "#666" : "#ccc",
                        fontSize: "13px", marginBottom: "4px"
                      }}>{step.desc}</div>
                      <div style={{
                        fontSize: "12px",
                        color: step.done ? "#D4A017" : "#ddd",
                        fontWeight: "600"
                      }}>{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HELP */}
            <div style={{
              background: "#1A1A1A", borderRadius: "20px",
              padding: "24px", marginTop: "24px",
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "16px"
            }}>
              <div>
                <div style={{ color: "white", fontWeight: "700", marginBottom: "4px" }}>
                  Need help with your order?
                </div>
                <div style={{ color: "#888", fontSize: "13px" }}>
                  Contact us on WhatsApp for instant support
                </div>
              </div>
              <a href="https://wa.me/916398903434" target="_blank" style={{
                background: "#25D366", color: "white",
                padding: "12px 24px", borderRadius: "50px",
                textDecoration: "none", fontSize: "14px", fontWeight: "700",
                display: "flex", alignItems: "center", gap: "8px"
              }}>📱 WhatsApp Support</a>
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
          © 2024 Malli Farm Private Limited | Made with 🍯 in India
        </div>
      </footer>
    </main>
  );
}