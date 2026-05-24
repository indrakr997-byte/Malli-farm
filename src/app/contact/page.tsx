"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main style={{ background: "#FFFDF4", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,253,244,0.97)", backdropFilter: "blur(12px)",
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
                style={{ fontSize: "14px", fontWeight: link === "Contact" ? "700" : "500", color: link === "Contact" ? "#D4A017" : "#1A1A1A", textDecoration: "none" }}>{link}</Link>
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
        padding: "80px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>GET IN TOUCH</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 6vw, 60px)", fontWeight: "800",
          color: "white", marginBottom: "16px"
        }}>Contact Us 📩</h1>
        <p style={{ color: "#888", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
          We are here to help! Reach out to us anytime.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "start" }}>

          {/* LEFT - Contact Info */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px", fontWeight: "800",
              color: "#1A1A1A", marginBottom: "32px"
            }}>Let's Talk! 🍯</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {[
                { icon: "📱", title: "WhatsApp", value: "+91 6398903434", link: "https://wa.me/916398903434", color: "#25D366" },
                { icon: "📧", title: "Email", value: "hello@mallifarm.com", link: "mailto:hello@mallifarm.com", color: "#D4A017" },
                { icon: "📍", title: "Address", value: "Uttarakhand, India", link: "#", color: "#2D5016" },
                { icon: "🕒", title: "Working Hours", value: "Mon-Sat: 9am - 6pm", link: "#", color: "#1a6b9e" },
              ].map(info => (
                <a key={info.title} href={info.link} target={info.link.startsWith("http") ? "_blank" : "_self"}
                  style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    background: "white", padding: "20px", borderRadius: "16px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                    textDecoration: "none", transition: "transform 0.2s",
                    border: "1px solid rgba(0,0,0,0.04)"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: `${info.color}15`,
                    display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "22px", flexShrink: 0
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#999", fontWeight: "600", marginBottom: "2px" }}>{info.title}</div>
                    <div style={{ fontWeight: "700", color: "#1A1A1A", fontSize: "15px" }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div style={{
              background: "#1A1A1A", borderRadius: "20px", padding: "24px"
            }}>
              <div style={{ color: "white", fontWeight: "700", marginBottom: "16px", fontSize: "15px" }}>
                Follow Us
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="https://wa.me/916398903434" target="_blank" style={{
                  flex: 1, background: "#25D366", color: "white",
                  padding: "12px", borderRadius: "12px", textAlign: "center",
                  textDecoration: "none", fontSize: "13px", fontWeight: "600"
                }}>📱 WhatsApp</a>
                <a href="https://instagram.com/sakibanzar" target="_blank" style={{
                  flex: 1,
                  background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                  color: "white", padding: "12px", borderRadius: "12px",
                  textAlign: "center", textDecoration: "none", fontSize: "13px", fontWeight: "600"
                }}>📸 Instagram</a>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div style={{
            background: "white", borderRadius: "28px",
            padding: "40px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "24px", fontWeight: "800",
              color: "#1A1A1A", marginBottom: "28px"
            }}>Send us a Message</h3>

            {sent && (
              <div style={{
                background: "#F0F7E6", borderRadius: "16px",
                padding: "20px", textAlign: "center", marginBottom: "24px"
              }}>
                <div style={{ fontSize: "36px", marginBottom: "8px" }}>✅</div>
                <div style={{ fontWeight: "700", color: "#2D5016", fontSize: "16px" }}>Message Sent!</div>
                <div style={{ color: "#666", fontSize: "13px", marginTop: "4px" }}>We will reply within 24 hours</div>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>Full Name *</label>
                  <input name="name" type="text" placeholder="Your name"
                    value={form.name} onChange={handleInput}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: "12px",
                      border: "2px solid rgba(0,0,0,0.08)", fontSize: "14px",
                      outline: "none", boxSizing: "border-box"
                    }}
                    onFocus={e => e.target.style.borderColor = "#D4A017"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>Phone</label>
                  <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleInput}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: "12px",
                      border: "2px solid rgba(0,0,0,0.08)", fontSize: "14px",
                      outline: "none", boxSizing: "border-box"
                    }}
                    onFocus={e => e.target.style.borderColor = "#D4A017"}
                    onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>Email *</label>
                <input name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleInput}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: "12px",
                    border: "2px solid rgba(0,0,0,0.08)", fontSize: "14px",
                    outline: "none", boxSizing: "border-box"
                  }}
                  onFocus={e => e.target.style.borderColor = "#D4A017"}
                  onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>Subject</label>
                <select name="subject" value={form.subject} onChange={handleInput}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: "12px",
                    border: "2px solid rgba(0,0,0,0.08)", fontSize: "14px",
                    outline: "none", background: "white"
                  }}>
                  <option value="">Select a topic</option>
                  <option>Order Query</option>
                  <option>Product Information</option>
                  <option>Return/Refund</option>
                  <option>Bulk Order</option>
                  <option>Wholesale Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>Message *</label>
                <textarea name="message" placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleInput}
                  rows={5}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: "12px",
                    border: "2px solid rgba(0,0,0,0.08)", fontSize: "14px",
                    outline: "none", resize: "vertical", boxSizing: "border-box",
                    fontFamily: "Inter, sans-serif"
                  }}
                  onFocus={e => e.target.style.borderColor = "#D4A017"}
                  onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.08)"} />
              </div>

              <button onClick={handleSubmit} style={{
                width: "100%", padding: "16px",
                background: "linear-gradient(135deg, #D4A017, #F5C842)",
                color: "white", borderRadius: "50px", border: "none",
                fontSize: "16px", fontWeight: "700", cursor: "pointer",
                boxShadow: "0 8px 25px rgba(212,160,23,0.35)"
              }}>Send Message →</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0F0F0F", color: "white", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ color: "#555", fontSize: "13px" }}>
          © 2024 Malli Farm Private Limited | Made with 🍯 in India
        </div>
      </footer>
    </main>
  );
}