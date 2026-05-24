"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminForm, setAdminForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (adminForm.email === "admin@mallifarm.com" && adminForm.password === "Admin@Malli2024") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials! Use admin@mallifarm.com / Admin@Malli2024");
    }
  };

  const stats = [
    { icon: "💰", label: "Total Revenue", value: "₹1,24,500", change: "+12%", color: "#D4A017" },
    { icon: "📦", label: "Total Orders", value: "247", change: "+8%", color: "#2D5016" },
    { icon: "👥", label: "Customers", value: "189", change: "+15%", color: "#1a6b9e" },
    { icon: "🍯", label: "Products", value: "8", change: "+2", color: "#c0392b" },
  ];

  const orders = [
    { id: "MF240001", customer: "Rahul Verma", items: "Pure Organic Honey 500g", total: 1532, status: "delivered", date: "24 May 2024" },
    { id: "MF240002", customer: "Priya Sharma", items: "Bee Pollen 100g", total: 699, status: "shipped", date: "23 May 2024" },
    { id: "MF240003", customer: "Anita Singh", items: "Natural Beeswax 200g", total: 449, status: "processing", date: "22 May 2024" },
    { id: "MF240004", customer: "Vikram Kumar", items: "Honey Gift Set", total: 1299, status: "pending", date: "22 May 2024" },
    { id: "MF240005", customer: "Meera Patel", items: "Pure Organic Honey 1kg", total: 1099, status: "delivered", date: "21 May 2024" },
  ];

  const products = [
    { name: "Pure Organic Honey", category: "Honey", price: 599, stock: 45, sales: 89, status: "active" },
    { name: "Pure Organic Honey 1kg", category: "Honey", price: 1099, stock: 23, sales: 56, status: "active" },
    { name: "Natural Beeswax", category: "Wax", price: 449, stock: 34, sales: 34, status: "active" },
    { name: "Organic Bee Pollen", category: "Pollen", price: 699, stock: 18, sales: 67, status: "active" },
    { name: "Honey Gift Set", category: "Combo", price: 1299, stock: 12, sales: 23, status: "active" },
  ];

  const customers = [
    { name: "Rahul Verma", email: "rahul@example.com", city: "Mumbai", orders: 3, spent: 2580 },
    { name: "Priya Sharma", email: "priya@example.com", city: "Delhi", orders: 2, spent: 1298 },
    { name: "Anita Singh", email: "anita@example.com", city: "Bangalore", orders: 1, spent: 699 },
    { name: "Vikram Kumar", email: "vikram@example.com", city: "Jaipur", orders: 2, spent: 1748 },
  ];

  const statusColor: Record<string, { bg: string; color: string }> = {
    delivered: { bg: "#F0F7E6", color: "#2D5016" },
    shipped: { bg: "#E8F4FD", color: "#1a6b9e" },
    processing: { bg: "#FEF3CD", color: "#b7791f" },
    pending: { bg: "#FEE2E2", color: "#c0392b" },
  };

  const tabs = [
    { id: "dashboard", label: "📊 Dashboard" },
    { id: "orders", label: "📦 Orders" },
    { id: "products", label: "🍯 Products" },
    { id: "customers", label: "👥 Customers" },
    { id: "analytics", label: "📈 Analytics" },
  ];

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <main style={{
        minHeight: "100vh", background: "#0F0F0F",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "24px"
      }}>
        <div style={{
          background: "#1A1A1A", borderRadius: "32px",
          padding: "48px", maxWidth: "420px", width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <Image src="/logo.png" alt="Malli Farm" width={70} height={70}
              style={{ width: "70px", height: "70px", objectFit: "contain", marginBottom: "16px" }} />
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px", fontWeight: "800", color: "#D4A017", marginBottom: "8px"
            }}>Admin Panel</h1>
            <p style={{ color: "#666", fontSize: "14px" }}>Malli Farm Private Limited</p>
          </div>

          {loginError && (
            <div style={{
              background: "#FEE2E2", color: "#c0392b",
              padding: "12px 16px", borderRadius: "12px",
              fontSize: "13px", marginBottom: "20px", textAlign: "center"
            }}>{loginError}</div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ color: "#888", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>
                Admin Email
              </label>
              <input type="email" placeholder="admin@mallifarm.com"
                value={adminForm.email}
                onChange={e => setAdminForm(p => ({ ...p, email: e.target.value }))}
                style={{
                  width: "100%", padding: "14px 18px",
                  borderRadius: "12px", border: "2px solid #333",
                  background: "#222", color: "white", fontSize: "14px",
                  outline: "none", boxSizing: "border-box"
                }}
                onFocus={e => e.target.style.borderColor = "#D4A017"}
                onBlur={e => e.target.style.borderColor = "#333"} />
            </div>
            <div>
              <label style={{ color: "#888", fontSize: "13px", fontWeight: "600", display: "block", marginBottom: "8px" }}>
                Password
              </label>
              <input type="password" placeholder="••••••••"
                value={adminForm.password}
                onChange={e => setAdminForm(p => ({ ...p, password: e.target.value }))}
                onKeyDown={e => e.key === "Enter" && handleLogin()}
                style={{
                  width: "100%", padding: "14px 18px",
                  borderRadius: "12px", border: "2px solid #333",
                  background: "#222", color: "white", fontSize: "14px",
                  outline: "none", boxSizing: "border-box"
                }}
                onFocus={e => e.target.style.borderColor = "#D4A017"}
                onBlur={e => e.target.style.borderColor = "#333"} />
            </div>
            <button onClick={handleLogin} style={{
              padding: "16px", borderRadius: "50px", border: "none",
              background: "linear-gradient(135deg, #D4A017, #F5C842)",
              color: "white", fontSize: "16px", fontWeight: "700", cursor: "pointer",
              boxShadow: "0 8px 25px rgba(212,160,23,0.35)", marginTop: "8px"
            }}>Login to Admin Panel →</button>
          </div>

          <div style={{
            background: "#222", borderRadius: "12px",
            padding: "12px 16px", marginTop: "20px",
            fontSize: "12px", color: "#666", textAlign: "center"
          }}>
            Demo: admin@mallifarm.com / Admin@Malli2024
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link href="/" style={{ color: "#666", fontSize: "13px", textDecoration: "none" }}>
              ← Back to Website
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ADMIN DASHBOARD
  return (
    <main style={{ background: "#F5F5F0", minHeight: "100vh", display: "flex" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "260px", background: "#1A1A1A",
        minHeight: "100vh", padding: "24px",
        display: "flex", flexDirection: "column",
        position: "fixed", left: 0, top: 0, zIndex: 100
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px", paddingBottom: "24px", borderBottom: "1px solid #333" }}>
          <Image src="/logo.png" alt="Malli Farm" width={40} height={40}
            style={{ width: "40px", height: "40px", objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "800", color: "#D4A017" }}>MALLI FARM</div>
            <div style={{ fontSize: "9px", color: "#666", letterSpacing: "1px" }}>ADMIN PANEL</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                width: "100%", padding: "12px 16px",
                borderRadius: "12px", border: "none", textAlign: "left",
                background: activeTab === tab.id ? "#D4A017" : "transparent",
                color: activeTab === tab.id ? "white" : "#888",
                fontSize: "14px", fontWeight: "600", cursor: "pointer",
                marginBottom: "4px", transition: "all 0.2s"
              }}
              onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.background = "#222"; }}
              onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.background = "transparent"; }}>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #333", paddingTop: "20px" }}>
          <Link href="/" style={{
            display: "block", padding: "10px 16px", borderRadius: "12px",
            color: "#888", fontSize: "13px", textDecoration: "none", marginBottom: "8px"
          }}>🌐 View Website</Link>
          <button onClick={() => setIsLoggedIn(false)} style={{
            width: "100%", padding: "10px 16px", borderRadius: "12px",
            border: "none", background: "transparent", color: "#e74c3c",
            fontSize: "13px", fontWeight: "600", cursor: "pointer", textAlign: "left"
          }}>🚪 Logout</button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: "260px", flex: 1, padding: "32px" }}>

        {/* HEADER */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: "32px"
        }}>
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px", fontWeight: "800", color: "#1A1A1A"
            }}>
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p style={{ color: "#999", fontSize: "14px", marginTop: "4px" }}>
              Malli Farm Admin Panel
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              background: "white", borderRadius: "50px",
              padding: "10px 20px", fontSize: "13px", color: "#666",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
            }}>
              👤 Admin
            </div>
          </div>
        </div>

        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div>
            {/* Stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px", marginBottom: "32px"
            }}>
              {stats.map(stat => (
                <div key={stat.label} style={{
                  background: "white", borderRadius: "20px",
                  padding: "24px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: `${stat.color}15`,
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "22px"
                    }}>{stat.icon}</div>
                    <span style={{
                      background: "#F0F7E6", color: "#2D5016",
                      padding: "4px 10px", borderRadius: "50px",
                      fontSize: "11px", fontWeight: "700"
                    }}>{stat.change}</span>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <div style={{ fontSize: "28px", fontWeight: "800", color: stat.color }}>{stat.value}</div>
                    <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div style={{
              background: "white", borderRadius: "24px",
              padding: "28px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
              marginBottom: "24px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#1A1A1A" }}>
                  Recent Orders
                </h3>
                <button onClick={() => setActiveTab("orders")} style={{
                  background: "none", border: "none", color: "#D4A017",
                  fontSize: "14px", fontWeight: "600", cursor: "pointer"
                }}>View All →</button>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
                    {["Order ID", "Customer", "Items", "Total", "Status", "Date"].map(h => (
                      <th key={h} style={{
                        padding: "10px 12px", textAlign: "left",
                        fontSize: "12px", color: "#999", fontWeight: "700",
                        textTransform: "uppercase", letterSpacing: "0.5px"
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map(order => (
                    <tr key={order.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: "700", color: "#D4A017" }}>#{order.id}</td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: "600", color: "#1A1A1A" }}>{order.customer}</td>
                      <td style={{ padding: "14px 12px", fontSize: "13px", color: "#666" }}>{order.items}</td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: "700", color: "#1A1A1A" }}>₹{order.total}</td>
                      <td style={{ padding: "14px 12px" }}>
                        <span style={{
                          background: statusColor[order.status]?.bg,
                          color: statusColor[order.status]?.color,
                          padding: "4px 12px", borderRadius: "50px",
                          fontSize: "12px", fontWeight: "700", textTransform: "capitalize"
                        }}>{order.status}</span>
                      </td>
                      <td style={{ padding: "14px 12px", fontSize: "13px", color: "#999" }}>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{
                background: "white", borderRadius: "20px",
                padding: "24px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)"
              }}>
                <h4 style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "20px" }}>Top Products</h4>
                {products.slice(0, 4).map(p => (
                  <div key={p.name} style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", padding: "10px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.04)", fontSize: "14px"
                  }}>
                    <span style={{ color: "#555" }}>🍯 {p.name}</span>
                    <span style={{ fontWeight: "700", color: "#D4A017" }}>{p.sales} sold</span>
                  </div>
                ))}
              </div>
              <div style={{
                background: "#1A1A1A", borderRadius: "20px",
                padding: "24px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)"
              }}>
                <h4 style={{ fontWeight: "700", color: "white", marginBottom: "20px" }}>Quick Actions</h4>
                {[
                  { label: "Add New Product", icon: "➕" },
                  { label: "View All Orders", icon: "📦" },
                  { label: "Manage Coupons", icon: "🎟️" },
                  { label: "View Customers", icon: "👥" },
                ].map(action => (
                  <button key={action.label}
                    onClick={() => action.label.includes("Order") ? setActiveTab("orders") : action.label.includes("Customer") ? setActiveTab("customers") : setActiveTab("products")}
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: "12px", border: "none",
                      background: "rgba(255,255,255,0.08)",
                      color: "white", fontSize: "14px",
                      fontWeight: "600", cursor: "pointer",
                      textAlign: "left", marginBottom: "8px",
                      display: "flex", alignItems: "center", gap: "10px",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(212,160,23,0.2)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                    <span>{action.icon}</span> {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <div style={{ background: "white", borderRadius: "24px", padding: "28px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1A1A1A" }}>All Orders</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                {["All", "Pending", "Processing", "Shipped", "Delivered"].map(f => (
                  <button key={f} style={{
                    padding: "8px 16px", borderRadius: "50px",
                    border: "2px solid rgba(0,0,0,0.08)", background: f === "All" ? "#D4A017" : "white",
                    color: f === "All" ? "white" : "#666", fontSize: "12px", fontWeight: "600", cursor: "pointer"
                  }}>{f}</button>
                ))}
              </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
                  {["Order ID", "Customer", "Items", "Total", "Status", "Date", "Action"].map(h => (
                    <th key={h} style={{
                      padding: "12px", textAlign: "left",
                      fontSize: "11px", color: "#999", fontWeight: "700",
                      textTransform: "uppercase", letterSpacing: "0.5px"
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                    <td style={{ padding: "14px 12px", fontWeight: "700", color: "#D4A017", fontSize: "14px" }}>#{order.id}</td>
                    <td style={{ padding: "14px 12px", fontWeight: "600", fontSize: "14px" }}>{order.customer}</td>
                    <td style={{ padding: "14px 12px", color: "#666", fontSize: "13px" }}>{order.items}</td>
                    <td style={{ padding: "14px 12px", fontWeight: "700", fontSize: "14px" }}>₹{order.total}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <span style={{
                        background: statusColor[order.status]?.bg,
                        color: statusColor[order.status]?.color,
                        padding: "4px 12px", borderRadius: "50px",
                        fontSize: "11px", fontWeight: "700", textTransform: "capitalize"
                      }}>{order.status}</span>
                    </td>
                    <td style={{ padding: "14px 12px", color: "#999", fontSize: "13px" }}>{order.date}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <button style={{
                        padding: "6px 14px", borderRadius: "50px",
                        border: "none", background: "#1A1A1A", color: "white",
                        fontSize: "12px", cursor: "pointer"
                      }}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === "products" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1A1A1A" }}>Products</h3>
              <button style={{
                padding: "12px 24px", borderRadius: "50px",
                border: "none", background: "#D4A017", color: "white",
                fontSize: "14px", fontWeight: "700", cursor: "pointer"
              }}>+ Add Product</button>
            </div>
            <div style={{ background: "white", borderRadius: "24px", padding: "28px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
                    {["Product", "Category", "Price", "Stock", "Sales", "Status", "Action"].map(h => (
                      <th key={h} style={{
                        padding: "12px", textAlign: "left",
                        fontSize: "11px", color: "#999", fontWeight: "700",
                        textTransform: "uppercase"
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.name} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "14px 12px", fontWeight: "700", fontSize: "14px" }}>🍯 {p.name}</td>
                      <td style={{ padding: "14px 12px", color: "#666", fontSize: "13px" }}>{p.category}</td>
                      <td style={{ padding: "14px 12px", fontWeight: "700", color: "#D4A017" }}>₹{p.price}</td>
                      <td style={{ padding: "14px 12px" }}>
                        <span style={{
                          color: p.stock < 20 ? "#c0392b" : "#2D5016",
                          fontWeight: "700", fontSize: "14px"
                        }}>{p.stock}</span>
                      </td>
                      <td style={{ padding: "14px 12px", fontWeight: "600", color: "#1A1A1A" }}>{p.sales}</td>
                      <td style={{ padding: "14px 12px" }}>
                        <span style={{
                          background: "#F0F7E6", color: "#2D5016",
                          padding: "4px 12px", borderRadius: "50px",
                          fontSize: "11px", fontWeight: "700"
                        }}>Active</span>
                      </td>
                      <td style={{ padding: "14px 12px" }}>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <button style={{
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #D4A017", background: "white",
                            color: "#D4A017", fontSize: "11px", cursor: "pointer"
                          }}>Edit</button>
                          <button style={{
                            padding: "6px 12px", borderRadius: "8px",
                            border: "1px solid #e74c3c", background: "white",
                            color: "#e74c3c", fontSize: "11px", cursor: "pointer"
                          }}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CUSTOMERS TAB */}
        {activeTab === "customers" && (
          <div style={{ background: "white", borderRadius: "24px", padding: "28px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1A1A1A", marginBottom: "24px" }}>
              Customers
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.06)" }}>
                  {["Customer", "Email", "City", "Orders", "Total Spent", "Action"].map(h => (
                    <th key={h} style={{
                      padding: "12px", textAlign: "left",
                      fontSize: "11px", color: "#999", fontWeight: "700",
                      textTransform: "uppercase"
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr key={c.email} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                    <td style={{ padding: "14px 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                          width: "36px", height: "36px", borderRadius: "50%",
                          background: "linear-gradient(135deg, #D4A017, #F5C842)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "white", fontWeight: "700", fontSize: "14px"
                        }}>{c.name[0]}</div>
                        <span style={{ fontWeight: "600", color: "#1A1A1A" }}>{c.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 12px", color: "#666", fontSize: "13px" }}>{c.email}</td>
                    <td style={{ padding: "14px 12px", color: "#666", fontSize: "13px" }}>{c.city}</td>
                    <td style={{ padding: "14px 12px", fontWeight: "700", color: "#1A1A1A", textAlign: "center" }}>{c.orders}</td>
                    <td style={{ padding: "14px 12px", fontWeight: "700", color: "#D4A017" }}>₹{c.spent.toLocaleString()}</td>
                    <td style={{ padding: "14px 12px" }}>
                      <button style={{
                        padding: "6px 14px", borderRadius: "50px",
                        border: "none", background: "#1A1A1A", color: "white",
                        fontSize: "12px", cursor: "pointer"
                      }}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "24px" }}>
              {[
                { label: "Today's Revenue", value: "₹4,850", icon: "💰" },
                { label: "Today's Orders", value: "8", icon: "📦" },
                { label: "This Month", value: "₹38,200", icon: "📈" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "white", borderRadius: "20px", padding: "28px",
                  boxShadow: "0 2px 15px rgba(0,0,0,0.06)", textAlign: "center"
                }}>
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>{s.icon}</div>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#D4A017", marginBottom: "6px" }}>{s.value}</div>
                  <div style={{ color: "#999", fontSize: "14px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "white", borderRadius: "24px", padding: "32px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1A1A1A", marginBottom: "28px" }}>
                Monthly Sales Overview
              </h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "200px" }}>
                {[
                  { month: "Jan", value: 65 },
                  { month: "Feb", value: 72 },
                  { month: "Mar", value: 58 },
                  { month: "Apr", value: 85 },
                  { month: "May", value: 92 },
                  { month: "Jun", value: 78 },
                ].map(d => (
                  <div key={d.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "700", color: "#D4A017" }}>{d.value}%</div>
                    <div style={{
                      width: "100%", borderRadius: "8px 8px 0 0",
                      background: "linear-gradient(180deg, #D4A017, #F5C842)",
                      height: `${d.value * 1.8}px`,
                      transition: "height 0.3s"
                    }} />
                    <div style={{ fontSize: "12px", color: "#999" }}>{d.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}