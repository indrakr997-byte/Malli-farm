"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    }, 1500);
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
          <Link href="/cart" style={{
            background: "#D4A017", color: "white", padding: "10px 20px",
            borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none"
          }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* MAIN */}
      <div style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex", alignItems: "center",
        justifyContent: "center", padding: "40px 24px"
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "0", maxWidth: "900px", width: "100%",
          borderRadius: "32px", overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)"
        }}>

          {/* LEFT - Brand Side */}
          <div style={{
            background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
            padding: "60px 40px",
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            textAlign: "center"
          }}>
            <div style={{ width: "100px", height: "100px", marginBottom: "28px" }}>
              <Image src="/logo.png" alt="Malli Farm" width={100} height={100}
                style={{ width: "100px", height: "100px", objectFit: "contain" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px", fontWeight: "800",
              color: "#D4A017", marginBottom: "16px"
            }}>MALLI FARM</h2>
            <p style={{ color: "#888", fontSize: "15px", lineHeight: "1.8", marginBottom: "32px" }}>
              Pure organic honey delivered to your doorstep. Join thousands of happy customers.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              {[
                "🍯 100% Pure Organic Honey",
                "🚚 Free Delivery above ₹499",
                "📜 GST Invoice Included",
                "↩️ 7 Day Easy Returns",
              ].map(item => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  background: "rgba(255,255,255,0.05)",
                  padding: "10px 16px", borderRadius: "10px",
                  fontSize: "13px", color: "#ccc", textAlign: "left"
                }}>{item}</div>
              ))}
            </div>
          </div>

          {/* RIGHT - Form Side */}
          <div style={{ background: "white", padding: "60px 40px" }}>

            {/* Toggle */}
            <div style={{
              display: "flex", background: "#f5f5f5",
              borderRadius: "50px", padding: "4px",
              marginBottom: "36px"
            }}>
              {["Login", "Register"].map(tab => (
                <button key={tab}
                  onClick={() => setIsLogin(tab === "Login")}
                  style={{
                    flex: 1, padding: "10px",
                    borderRadius: "50px", border: "none",
                    background: (isLogin && tab === "Login") || (!isLogin && tab === "Register")
                      ? "#D4A017" : "transparent",
                    color: (isLogin && tab === "Login") || (!isLogin && tab === "Register")
                      ? "white" : "#666",
                    fontSize: "14px", fontWeight: "700",
                    cursor: "pointer", transition: "all 0.3s"
                  }}>{tab}</button>
              ))}
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px", fontWeight: "800",
              color: "#1A1A1A", marginBottom: "8px"
            }}>
              {isLogin ? "Welcome Back! 👋" : "Create Account 🍯"}
            </h2>
            <p style={{ color: "#999", fontSize: "14px", marginBottom: "28px" }}>
              {isLogin ? "Login to your Malli Farm account" : "Join the Malli Farm family"}
            </p>

            {/* SUCCESS */}
            {success && (
              <div style={{
                background: "#F0F7E6", borderRadius: "16px",
                padding: "20px", textAlign: "center", marginBottom: "20px"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "8px" }}>✅</div>
                <div style={{ fontWeight: "700", color: "#2D5016", fontSize: "16px" }}>
                  {isLogin ? "Login Successful!" : "Account Created!"}
                </div>
                <div style={{ color: "#666", fontSize: "13px", marginTop: "4px" }}>
                  Redirecting to dashboard...
                </div>
              </div>
            )}

            {!success && (
              <>
                {/* Form Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                  {!isLogin && (
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                        Full Name *
                      </label>
                      <input name="name" type="text" placeholder="Your full name"
                        value={form.name} onChange={handleInput}
                        style={{
                          width: "100%", padding: "14px 18px",
                          borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                          fontSize: "14px", outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "#D4A017"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                      Email Address *
                    </label>
                    <input name="email" type="email" placeholder="your@email.com"
                      value={form.email} onChange={handleInput}
                      style={{
                        width: "100%", padding: "14px 18px",
                        borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                        fontSize: "14px", outline: "none", boxSizing: "border-box"
                      }}
                      onFocus={e => e.target.style.borderColor = "#D4A017"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                  </div>

                  {!isLogin && (
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                        Phone Number *
                      </label>
                      <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleInput}
                        style={{
                          width: "100%", padding: "14px 18px",
                          borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                          fontSize: "14px", outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "#D4A017"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                      Password *
                    </label>
                    <input name="password" type="password" placeholder="Min 6 characters"
                      value={form.password} onChange={handleInput}
                      style={{
                        width: "100%", padding: "14px 18px",
                        borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                        fontSize: "14px", outline: "none", boxSizing: "border-box"
                      }}
                      onFocus={e => e.target.style.borderColor = "#D4A017"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                  </div>

                  {!isLogin && (
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
                        Confirm Password *
                      </label>
                      <input name="confirmPassword" type="password" placeholder="Repeat password"
                        value={form.confirmPassword} onChange={handleInput}
                        style={{
                          width: "100%", padding: "14px 18px",
                          borderRadius: "12px", border: "2px solid rgba(0,0,0,0.08)",
                          fontSize: "14px", outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={e => e.target.style.borderColor = "#D4A017"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                    </div>
                  )}

                  {isLogin && (
                    <div style={{ textAlign: "right" }}>
                      <a href="#" style={{ color: "#D4A017", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                        Forgot Password?
                      </a>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button onClick={handleSubmit} disabled={loading}
                  style={{
                    width: "100%", marginTop: "24px",
                    padding: "16px",
                    background: loading ? "#ccc" : "linear-gradient(135deg, #D4A017, #F5C842)",
                    color: "white", borderRadius: "50px",
                    border: "none", fontSize: "16px",
                    fontWeight: "700", cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 8px 25px rgba(212,160,23,0.35)",
                    transition: "all 0.3s"
                  }}>
                  {loading ? "Please wait..." : isLogin ? "Login to Account →" : "Create Account →"}
                </button>

                {/* Divider */}
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: "12px", margin: "24px 0"
                }}>
                  <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <span style={{ color: "#999", fontSize: "13px" }}>or continue with</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
                </div>

                {/* WhatsApp Login */}
                <a href="https://wa.me/916398903434" target="_blank" style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "10px",
                  width: "100%", padding: "14px",
                  background: "#25D366", color: "white",
                  borderRadius: "50px", textDecoration: "none",
                  fontSize: "15px", fontWeight: "600"
                }}>
                  📱 Contact via WhatsApp
                </a>

                <p style={{
                  textAlign: "center", marginTop: "20px",
                  fontSize: "13px", color: "#999"
                }}>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button onClick={() => setIsLogin(!isLogin)}
                    style={{
                      background: "none", border: "none",
                      color: "#D4A017", fontWeight: "700",
                      cursor: "pointer", fontSize: "13px"
                    }}>
                    {isLogin ? "Register here" : "Login here"}
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: "#0F0F0F", color: "white",
        padding: "30px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#555", fontSize: "13px" }}>
          © 2024 Malli Farm Private Limited | Made with 🍯 in India
        </div>
      </footer>

    </main>
  );
}