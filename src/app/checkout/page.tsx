"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: ""
  });

  const orderItems = [
    { name: "Pure Organic Honey", weight: "500g", price: 599, qty: 1, emoji: "🍯" },
    { name: "Organic Bee Pollen", weight: "100g", price: 699, qty: 1, emoji: "🌸" },
  ];

  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 499 ? 0 : 60;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayment = () => {
    if (paymentMethod === "razorpay" || paymentMethod === "upi") {
      const options = {
        key: "rzp_test_YOUR_KEY",
        amount: total * 100,
        currency: "INR",
        name: "Malli Farm Pvt Ltd",
        description: "Organic Honey Order",
        image: "/logo.png",
        handler: function() {
          window.location.href = "/dashboard";
        },
        prefill: { name: form.name, email: form.email, contact: form.phone },
        theme: { color: "#D4A017" }
      };
      alert("Razorpay will open here in production! Order: ₹" + total);
    } else {
      alert("Order placed successfully! COD - ₹" + total);
      window.location.href = "/dashboard";
    }
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#999" }}>
            <span>🔒</span>
            <span>Secure Checkout</span>
          </div>
          <Link href="/cart" style={{
            background: "#D4A017", color: "white", padding: "10px 20px",
            borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none"
          }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* PROGRESS STEPS */}
      <div style={{
        background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "20px 24px"
      }}>
        <div style={{
          maxWidth: "600px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0"
        }}>
          {[
            { num: 1, label: "Address" },
            { num: 2, label: "Payment" },
            { num: 3, label: "Confirm" },
          ].map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "6px"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: step >= s.num ? "#D4A017" : "#f0f0f0",
                  color: step >= s.num ? "white" : "#999",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "700", fontSize: "14px", transition: "all 0.3s"
                }}>{step > s.num ? "✓" : s.num}</div>
                <span style={{
                  fontSize: "12px", fontWeight: "600",
                  color: step >= s.num ? "#D4A017" : "#999"
                }}>{s.label}</span>
              </div>
              {i < 2 && (
                <div style={{
                  width: "80px", height: "2px", margin: "0 8px",
                  background: step > s.num ? "#D4A017" : "#f0f0f0",
                  marginBottom: "18px", transition: "all 0.3s"
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "40px", alignItems: "start" }}>

          {/* LEFT SIDE */}
          <div>

            {/* STEP 1 - ADDRESS */}
            {step === 1 && (
              <div style={{
                background: "white", borderRadius: "24px",
                padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "28px"
                }}>📦 Delivery Address</h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { name: "name", label: "Full Name *", placeholder: "Your full name", type: "text", full: true },
                    { name: "email", label: "Email Address *", placeholder: "your@email.com", type: "email" },
                    { name: "phone", label: "Phone Number *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                    { name: "address", label: "Street Address *", placeholder: "House no, Street, Area", type: "text", full: true },
                    { name: "city", label: "City *", placeholder: "Your city", type: "text" },
                    { name: "pincode", label: "PIN Code *", placeholder: "6-digit PIN", type: "text" },
                  ].map(field => (
                    <div key={field.name} style={{ gridColumn: field.full ? "1 / -1" : "auto" }}>
                      <label style={{
                        display: "block", fontSize: "13px",
                        fontWeight: "700", color: "#1A1A1A", marginBottom: "8px"
                      }}>{field.label}</label>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleInput}
                        style={{
                          width: "100%", padding: "14px 18px",
                          borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                          fontSize: "14px", outline: "none",
                          transition: "border-color 0.2s",
                          boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "#D4A017"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"}
                      />
                    </div>
                  ))}

                  {/* State Dropdown */}
                  <div>
                    <label style={{
                      display: "block", fontSize: "13px",
                      fontWeight: "700", color: "#1A1A1A", marginBottom: "8px"
                    }}>State *</label>
                    <select name="state" value={form.state} onChange={handleInput}
                      style={{
                        width: "100%", padding: "14px 18px",
                        borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                        fontSize: "14px", outline: "none", background: "white"
                      }}>
                      <option value="">Select State</option>
                      {indianStates.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button onClick={() => setStep(2)} style={{
                  width: "100%", marginTop: "28px",
                  background: "linear-gradient(135deg, #D4A017, #F5C842)",
                  color: "white", padding: "18px",
                  borderRadius: "50px", border: "none",
                  fontSize: "16px", fontWeight: "700", cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
                }}>Continue to Payment →</button>
              </div>
            )}

            {/* STEP 2 - PAYMENT */}
            {step === 2 && (
              <div style={{
                background: "white", borderRadius: "24px",
                padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "28px"
                }}>💳 Payment Method</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { id: "razorpay", icon: "💳", title: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                    { id: "upi", icon: "📱", title: "UPI Payment", desc: "GPay, PhonePe, Paytm, BHIM" },
                    { id: "netbanking", icon: "🏦", title: "Net Banking", desc: "All major Indian banks" },
                    { id: "cod", icon: "💵", title: "Cash on Delivery", desc: "Pay when you receive" },
                  ].map(method => (
                    <div key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        padding: "20px", borderRadius: "16px",
                        border: "2px solid",
                        borderColor: paymentMethod === method.id ? "#D4A017" : "rgba(0,0,0,0.08)",
                        background: paymentMethod === method.id ? "#FFF8E7" : "white",
                        cursor: "pointer", transition: "all 0.2s"
                      }}>
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "12px",
                        background: paymentMethod === method.id ? "#D4A017" : "#f5f5f5",
                        display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: "22px", flexShrink: 0
                      }}>{method.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "2px" }}>{method.title}</div>
                        <div style={{ fontSize: "13px", color: "#999" }}>{method.desc}</div>
                      </div>
                      <div style={{
                        width: "22px", height: "22px", borderRadius: "50%",
                        border: "2px solid",
                        borderColor: paymentMethod === method.id ? "#D4A017" : "#ddd",
                        background: paymentMethod === method.id ? "#D4A017" : "white",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {paymentMethod === method.id && (
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "white" }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Razorpay Badge */}
                <div style={{
                  background: "#f8f8f8", borderRadius: "12px",
                  padding: "14px 18px", marginTop: "20px",
                  display: "flex", alignItems: "center", gap: "10px"
                }}>
                  <span style={{ fontSize: "20px" }}>🔒</span>
                  <span style={{ fontSize: "13px", color: "#666" }}>
                    Payments secured by <strong>Razorpay</strong>. Your data is 100% safe.
                  </span>
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
                  <button onClick={() => setStep(1)} style={{
                    flex: 1, padding: "16px", borderRadius: "50px",
                    border: "2px solid rgba(0,0,0,0.1)", background: "white",
                    fontSize: "15px", fontWeight: "600", cursor: "pointer", color: "#666"
                  }}>← Back</button>
                  <button onClick={() => setStep(3)} style={{
                    flex: 2, padding: "16px", borderRadius: "50px",
                    border: "none",
                    background: "linear-gradient(135deg, #D4A017, #F5C842)",
                    color: "white", fontSize: "15px", fontWeight: "700", cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
                  }}>Review Order →</button>
                </div>
              </div>
            )}

            {/* STEP 3 - CONFIRM */}
            {step === 3 && (
              <div style={{
                background: "white", borderRadius: "24px",
                padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px", fontWeight: "800",
                  color: "#1A1A1A", marginBottom: "28px"
                }}>✅ Review Your Order</h2>

                {/* Delivery Address Summary */}
                <div style={{
                  background: "#FFFDF4", borderRadius: "16px",
                  padding: "20px", marginBottom: "20px",
                  border: "1px solid rgba(212,160,23,0.2)"
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "12px"
                  }}>
                    <span style={{ fontWeight: "700", color: "#1A1A1A" }}>📦 Delivery Address</span>
                    <button onClick={() => setStep(1)} style={{
                      background: "none", border: "none",
                      color: "#D4A017", fontSize: "13px",
                      fontWeight: "600", cursor: "pointer"
                    }}>Edit</button>
                  </div>
                  <div style={{ color: "#666", fontSize: "14px", lineHeight: "1.7" }}>
                    <div style={{ fontWeight: "600", color: "#1A1A1A" }}>{form.name || "John Doe"}</div>
                    <div>{form.address || "123, Example Street"}</div>
                    <div>{form.city || "Mumbai"}, {form.state || "Maharashtra"} - {form.pincode || "400001"}</div>
                    <div>📱 {form.phone || "+91 9999999999"}</div>
                  </div>
                </div>

                {/* Payment Summary */}
                <div style={{
                  background: "#FFFDF4", borderRadius: "16px",
                  padding: "20px", marginBottom: "20px",
                  border: "1px solid rgba(212,160,23,0.2)"
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "8px"
                  }}>
                    <span style={{ fontWeight: "700", color: "#1A1A1A" }}>💳 Payment Method</span>
                    <button onClick={() => setStep(2)} style={{
                      background: "none", border: "none",
                      color: "#D4A017", fontSize: "13px",
                      fontWeight: "600", cursor: "pointer"
                    }}>Edit</button>
                  </div>
                  <div style={{ color: "#666", fontSize: "14px" }}>
                    {paymentMethod === "razorpay" && "💳 Credit / Debit Card via Razorpay"}
                    {paymentMethod === "upi" && "📱 UPI Payment via Razorpay"}
                    {paymentMethod === "netbanking" && "🏦 Net Banking via Razorpay"}
                    {paymentMethod === "cod" && "💵 Cash on Delivery"}
                  </div>
                </div>

                {/* Items */}
                <div style={{
                  background: "#FFFDF4", borderRadius: "16px",
                  padding: "20px", marginBottom: "24px",
                  border: "1px solid rgba(212,160,23,0.2)"
                }}>
                  <div style={{ fontWeight: "700", color: "#1A1A1A", marginBottom: "16px" }}>🛍️ Order Items</div>
                  {orderItems.map(item => (
                    <div key={item.name} style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center", padding: "10px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.04)",
                      fontSize: "14px"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "24px" }}>{item.emoji}</span>
                        <div>
                          <div style={{ fontWeight: "600", color: "#1A1A1A" }}>{item.name}</div>
                          <div style={{ color: "#999", fontSize: "12px" }}>{item.weight} × {item.qty}</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: "700", color: "#D4A017" }}>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(2)} style={{
                    flex: 1, padding: "16px", borderRadius: "50px",
                    border: "2px solid rgba(0,0,0,0.1)", background: "white",
                    fontSize: "15px", fontWeight: "600", cursor: "pointer", color: "#666"
                  }}>← Back</button>
                  <button onClick={handlePayment} style={{
                    flex: 2, padding: "16px", borderRadius: "50px",
                    border: "none",
                    background: "linear-gradient(135deg, #D4A017, #F5C842)",
                    color: "white", fontSize: "15px", fontWeight: "700", cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
                  }}>
                    {paymentMethod === "cod" ? "Place Order 🍯" : `Pay ₹${total} →`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div style={{ position: "sticky", top: "90px" }}>
            <div style={{
              background: "white", borderRadius: "24px",
              padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px", fontWeight: "700",
                color: "#1A1A1A", marginBottom: "20px"
              }}>Order Summary</h3>

              {/* Items */}
              {orderItems.map(item => (
                <div key={item.name} style={{
                  display: "flex", alignItems: "center",
                  gap: "12px", marginBottom: "14px"
                }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "12px",
                    background: "#FFF8E7", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "28px", flexShrink: 0
                  }}>{item.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#1A1A1A" }}>{item.name}</div>
                    <div style={{ fontSize: "12px", color: "#999" }}>{item.weight} × {item.qty}</div>
                  </div>
                  <span style={{ fontWeight: "700", color: "#1A1A1A", fontSize: "14px" }}>₹{item.price}</span>
                </div>
              ))}

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px", marginTop: "8px" }}>
                {[
                  { label: "Subtotal", value: `₹${subtotal}` },
                  { label: "Shipping", value: shipping === 0 ? "FREE 🎉" : `₹${shipping}` },
                  { label: "GST (18%)", value: `₹${tax}` },
                ].map(row => (
                  <div key={row.label} style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "8px 0", fontSize: "14px",
                    borderBottom: "1px solid rgba(0,0,0,0.04)"
                  }}>
                    <span style={{ color: "#666" }}>{row.label}</span>
                    <span style={{
                      fontWeight: "600",
                      color: row.value.includes("FREE") ? "#2D5016" : "#1A1A1A"
                    }}>{row.value}</span>
                  </div>
                ))}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "14px 0", marginTop: "4px"
                }}>
                  <span style={{ fontSize: "16px", fontWeight: "800", color: "#1A1A1A" }}>Total</span>
                  <span style={{ fontSize: "22px", fontWeight: "800", color: "#D4A017" }}>₹{total}</span>
                </div>
              </div>

              {/* GST Note */}
              <div style={{
                background: "#F0F7E6", borderRadius: "10px",
                padding: "10px 14px", fontSize: "12px",
                color: "#2D5016", fontWeight: "500"
              }}>
                📜 GST invoice will be emailed after order confirmation
              </div>

              {/* Security */}
              <div style={{
                marginTop: "16px", textAlign: "center",
                color: "#999", fontSize: "12px"
              }}>
                🔒 256-bit SSL Secure Checkout
              </div>
            </div>
          </div>
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