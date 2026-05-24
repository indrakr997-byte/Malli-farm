"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const orders = [
  { id: "MF240001", date: "24 May 2024", status: "delivered", total: 1532, items: "Pure Organic Honey, Bee Pollen", statusColor: "#2D5016", statusBg: "#F0F7E6" },
  { id: "MF240002", date: "20 May 2024", status: "shipped", total: 599, items: "Pure Organic Honey 500g", statusColor: "#1a6b9e", statusBg: "#E8F4FD" },
  { id: "MF240003", date: "15 May 2024", status: "processing", total: 449, items: "Natural Beeswax 200g", statusColor: "#b7791f", statusBg: "#FEF3CD" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const tabs = [
    { id: "orders", label: "📦 My Orders" },
    { id: "profile", label: "👤 Profile" },
    { id: "addresses", label: "📍 Addresses" },
    { id: "wishlist", label: "❤️ Wishlist" },
  ];

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
        padding: "48px 24px"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{
            width: "72px", height: "72px", borderRadius: "50%",
            background: "linear-gradient(135deg, #D4A017, #F5C842)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "28px", fontWeight: "800", color: "white", flexShrink: 0
          }}>R</div>
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px", fontWeight: "800", color: "white", marginBottom: "4px"
            }}>Welcome back, Rahul! 👋</h1>
            <p style={{ color: "#888", fontSize: "14px" }}>rahul@example.com • Member since May 2024</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        {/* STATS */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px", marginBottom: "40px"
        }}>
          {[
            { icon: "📦", label: "Total Orders", value: "3", color: "#D4A017" },
            { icon: "✅", label: "Delivered", value: "1", color: "#2D5016" },
            { icon: "🚚", label: "In Transit", value: "1", color: "#1a6b9e" },
            { icon: "💰", label: "Total Spent", value: "₹2,580", color: "#D4A017" },
          ].map(stat => (
            <div key={stat.label} style={{
              background: "white", borderRadius: "20px",
              padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", gap: "16px"
            }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: `${stat.color}15`,
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "24px", flexShrink: 0
              }}>{stat.icon}</div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: "800", color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: "13px", color: "#999", marginTop: "2px" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "32px" }}>

          {/* SIDEBAR */}
          <div style={{
            background: "white", borderRadius: "24px",
            padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            height: "fit-content", position: "sticky", top: "90px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "12px 16px", borderRadius: "12px",
                    border: "none", textAlign: "left",
                    background: activeTab === tab.id ? "#FFF8E7" : "transparent",
                    color: activeTab === tab.id ? "#D4A017" : "#666",
                    fontSize: "14px", fontWeight: activeTab === tab.id ? "700" : "500",
                    cursor: "pointer", transition: "all 0.2s",
                    borderLeft: activeTab === tab.id ? "3px solid #D4A017" : "3px solid transparent"
                  }}>{tab.label}</button>
              ))}

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: "8px", paddingTop: "8px" }}>
                <Link href="/track-order" style={{
                  display: "block", padding: "12px 16px", borderRadius: "12px",
                  color: "#666", fontSize: "14px", fontWeight: "500",
                  textDecoration: "none"
                }}>🔍 Track Order</Link>
                <button style={{
                  width: "100%", padding: "12px 16px", borderRadius: "12px",
                  border: "none", textAlign: "left", background: "transparent",
                  color: "#e74c3c", fontSize: "14px", fontWeight: "500", cursor: "pointer"
                }}>🚪 Logout</button>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div>

            {/* ORDERS TAB */}
            {activeTab === "orders" && (
              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "24px"
                }}>My Orders</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {orders.map(order => (
                    <div key={order.id} style={{
                      background: "white", borderRadius: "20px",
                      padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.04)"
                    }}>
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-start", flexWrap: "wrap", gap: "12px"
                      }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                            <span style={{ fontWeight: "800", color: "#1A1A1A", fontSize: "16px" }}>#{order.id}</span>
                            <span style={{
                              background: order.statusBg, color: order.statusColor,
                              padding: "4px 12px", borderRadius: "50px",
                              fontSize: "12px", fontWeight: "700", textTransform: "capitalize"
                            }}>{order.status}</span>
                          </div>
                          <div style={{ color: "#999", fontSize: "13px", marginBottom: "6px" }}>📅 {order.date}</div>
                          <div style={{ color: "#555", fontSize: "14px" }}>🛍️ {order.items}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "22px", fontWeight: "800", color: "#D4A017", marginBottom: "8px" }}>
                            ₹{order.total}
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <Link href={`/track-order?order=${order.id}`} style={{
                              padding: "8px 16px", borderRadius: "50px",
                              border: "2px solid #D4A017", color: "#D4A017",
                              fontSize: "12px", fontWeight: "600", textDecoration: "none"
                            }}>Track</Link>
                            <button style={{
                              padding: "8px 16px", borderRadius: "50px",
                              border: "none", background: "#1A1A1A", color: "white",
                              fontSize: "12px", fontWeight: "600", cursor: "pointer"
                            }}>Invoice</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === "profile" && (
              <div style={{
                background: "white", borderRadius: "24px",
                padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "28px"
                }}>My Profile</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "500px" }}>
                  {[
                    { label: "Full Name", value: "Rahul Verma", placeholder: "Your name" },
                    { label: "Email", value: "rahul@example.com", placeholder: "Email" },
                    { label: "Phone", value: "+91 9999999999", placeholder: "Phone" },
                  ].map(field => (
                    <div key={field.label}>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                        {field.label}
                      </label>
                      <input defaultValue={field.value} placeholder={field.placeholder}
                        style={{
                          width: "100%", padding: "14px 18px",
                          borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                          fontSize: "14px", outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "#D4A017"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                    </div>
                  ))}
                  <button style={{
                    padding: "14px 32px", borderRadius: "50px",
                    border: "none", background: "#D4A017", color: "white",
                    fontSize: "15px", fontWeight: "700", cursor: "pointer",
                    alignSelf: "flex-start"
                  }}>Save Changes</button>
                </div>
              </div>
            )}

            {/* ADDRESSES TAB */}
            {activeTab === "addresses" && (
              <div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "24px"
                }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px", fontWeight: "800", color: "#1A1A1A"
                  }}>My Addresses</h2>
                  <button style={{
                    padding: "10px 20px", borderRadius: "50px",
                    border: "none", background: "#D4A017", color: "white",
                    fontSize: "14px", fontWeight: "600", cursor: "pointer"
                  }}>+ Add Address</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { type: "Home", name: "Rahul Verma", address: "123, MG Road, Sector 5, Mumbai, Maharashtra - 400001", phone: "+91 9999999999", default: true },
                    { type: "Office", name: "Rahul Verma", address: "456, Business Park, Andheri East, Mumbai - 400069", phone: "+91 9999999999", default: false },
                  ].map(addr => (
                    <div key={addr.type} style={{
                      background: "white", borderRadius: "20px", padding: "24px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      border: addr.default ? "2px solid #D4A017" : "2px solid rgba(0,0,0,0.06)"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                        <span style={{
                          background: addr.default ? "#D4A017" : "#f5f5f5",
                          color: addr.default ? "white" : "#666",
                          padding: "4px 12px", borderRadius: "50px",
                          fontSize: "12px", fontWeight: "700"
                        }}>{addr.default ? "✓ Default" : addr.type}</span>
                      </div>
                      <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "6px" }}>{addr.name}</div>
                      <div style={{ color: "#666", fontSize: "13px", lineHeight: "1.6", marginBottom: "6px" }}>{addr.address}</div>
                      <div style={{ color: "#999", fontSize: "13px" }}>📱 {addr.phone}</div>
                      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                        <button style={{
                          padding: "6px 14px", borderRadius: "50px",
                          border: "1px solid #D4A017", background: "white",
                          color: "#D4A017", fontSize: "12px", cursor: "pointer"
                        }}>Edit</button>
                        <button style={{
                          padding: "6px 14px", borderRadius: "50px",
                          border: "1px solid #ddd", background: "white",
                          color: "#e74c3c", fontSize: "12px", cursor: "pointer"
                        }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WISHLIST TAB */}
            {activeTab === "wishlist" && (
              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "24px"
                }}>My Wishlist</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
                  {[
                    { name: "Pure Organic Honey", price: 599, emoji: "🍯", bg: "#FFF8E7" },
                    { name: "Organic Bee Pollen", price: 699, emoji: "🌸", bg: "#FFF0F5" },
                  ].map(item => (
                    <div key={item.name} style={{
                      background: item.bg, borderRadius: "20px",
                      padding: "24px", textAlign: "center",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
                    }}>
                      <div style={{ fontSize: "60px", marginBottom: "12px" }}>{item.emoji}</div>
                      <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "6px" }}>{item.name}</div>
                      <div style={{ color: "#D4A017", fontWeight: "800", marginBottom: "16px" }}>₹{item.price}</div>
                      <button style={{
                        width: "100%", padding: "10px", borderRadius: "50px",
                        border: "none", background: "#1A1A1A", color: "white",
                        fontSize: "13px", fontWeight: "600", cursor: "pointer"
                      }}>Add to Cart</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
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