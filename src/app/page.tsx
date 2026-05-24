"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "#FFFDF4", minHeight: "100vh" }}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{
        background: "linear-gradient(90deg, #2D5016, #3a6b1e)",
        color: "white", textAlign: "center",
        padding: "10px 16px", fontSize: "13px",
        fontWeight: "500", letterSpacing: "0.5px"
      }}>
        🍯 FREE DELIVERY above ₹499 &nbsp;|&nbsp; 100% Organic Certified &nbsp;|&nbsp; GST Invoice Provided
      </div>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrollY > 50 ? "rgba(255,253,244,0.97)" : "white",
        backdropFilter: "blur(12px)",
        boxShadow: scrollY > 50 ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        borderBottom: "1px solid rgba(212,160,23,0.15)"
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 24px", display: "flex",
          alignItems: "center", justifyContent: "space-between", height: "72px"
        }}>

          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "44px", height: "44px", flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Malli Farm"
                width={44}
                height={44}
                style={{ width: "44px", height: "44px", objectFit: "contain" }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px", fontWeight: "800",
                color: "#D4A017", letterSpacing: "1px", lineHeight: "1.1"
              }}>MALLI FARM</div>
              <div style={{
                fontSize: "9px", color: "#2D5016",
                letterSpacing: "2px", fontWeight: "700"
              }}>NATURAL HONEY </div>
            </div>
          </div>

          {/* MENU */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Home", "Shop", "About", "Blog", "Contact"].map(link => (
              <a key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                style={{
                  fontSize: "14px", fontWeight: "500",
                  color: "#1A1A1A", textDecoration: "none"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
                onMouseLeave={e => e.currentTarget.style.color = "#1A1A1A"}
              >{link}</a>
            ))}
          </div>

          {/* CART */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a href="/login" style={{
              fontSize: "14px", fontWeight: "500",
              color: "#1A1A1A", textDecoration: "none"
            }}>Login</a>
            <a href="/cart" style={{
              background: "#D4A017", color: "white",
              padding: "10px 20px", borderRadius: "50px",
              fontSize: "14px", fontWeight: "600", textDecoration: "none"
            }}>🛒 Cart (0)</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "92vh", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #FFFDF4 0%, #FFF8DC 50%, #FFFDF4 100%)",
        position: "relative", overflow: "hidden", padding: "60px 24px"
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ textAlign: "center", maxWidth: "800px", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block", background: "#2D5016", color: "white",
            padding: "8px 24px", borderRadius: "50px",
            fontSize: "12px", fontWeight: "600", letterSpacing: "2px", marginBottom: "32px"
          }}>
            🌿 100% ORGANIC • FARM FRESH • CERTIFIED NATURAL
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 78px)",
            fontWeight: "800", color: "#1A1A1A",
            lineHeight: "1.1", marginBottom: "8px"
          }}>Pure Honey From</h1>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 78px)",
            fontWeight: "800", color: "#D4A017",
            lineHeight: "1.1", marginBottom: "28px"
          }}>Nature's Heart</h1>

          <p style={{
            fontSize: "18px", color: "#666", lineHeight: "1.8",
            maxWidth: "560px", margin: "0 auto 40px"
          }}>
            Experience the golden goodness of our farm-fresh organic honey.
            Harvested with love, delivered with care — straight from our hives to your home.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/shop" style={{
              background: "linear-gradient(135deg, #D4A017, #F5C842)",
              color: "white", padding: "16px 40px", borderRadius: "50px",
              fontSize: "16px", fontWeight: "700", textDecoration: "none",
              boxShadow: "0 8px 30px rgba(212,160,23,0.35)"
            }}>🍯 Shop Now</a>
            <a href="/about" style={{
              border: "2px solid #D4A017", color: "#D4A017",
              padding: "16px 40px", borderRadius: "50px",
              fontSize: "16px", fontWeight: "700", textDecoration: "none"
            }}>Our Story</a>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px", maxWidth: "400px", margin: "60px auto 0"
          }}>
            {[
              { num: "100%", label: "Organic" },
              { num: "50+", label: "Beehives" },
              { num: "10K+", label: "Customers" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px", fontWeight: "800", color: "#D4A017"
                }}>{s.num}</div>
                <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{
              color: "#D4A017", fontSize: "12px", fontWeight: "700",
              letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px"
            }}>Our Products</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 5vw, 50px)",
              fontWeight: "800", color: "#1A1A1A"
            }}>Nature's Finest Collection</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            {[
              { name: "Pure Organic Honey", weight: "500g", price: "₹599", mrp: "₹799", off: "25% OFF", badge: "Best Seller", emoji: "🍯", desc: "Raw unfiltered honey from organic beehives. Rich in antioxidants.", bg: "#FFF8E7", color: "#D4A017" },
              { name: "Natural Beeswax", weight: "200g", price: "₹449", mrp: "₹599", off: "25% OFF", badge: "Premium", emoji: "🕯️", desc: "Pure natural beeswax for skincare and candles. No additives.", bg: "#F0F7E6", color: "#2D5016" },
              { name: "Organic Bee Pollen", weight: "100g", price: "₹699", mrp: "₹899", off: "22% OFF", badge: "Superfood", emoji: "🌸", desc: "Nature's complete superfood. Packed with proteins and vitamins.", bg: "#FFF0F5", color: "#c0392b" },
            ].map(p => (
              <div key={p.name} style={{
                background: p.bg, borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
              }}>
                <div style={{
                  height: "220px", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "90px", position: "relative"
                }}>
                  {p.emoji}
                  <span style={{
                    position: "absolute", top: "16px", left: "16px",
                    background: p.color, color: "white",
                    padding: "4px 12px", borderRadius: "50px",
                    fontSize: "11px", fontWeight: "700"
                  }}>{p.badge}</span>
                  <span style={{
                    position: "absolute", top: "16px", right: "16px",
                    background: "#1A1A1A", color: "#F5C842",
                    padding: "4px 10px", borderRadius: "50px",
                    fontSize: "11px", fontWeight: "700"
                  }}>{p.off}</span>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px", fontWeight: "700",
                    color: "#1A1A1A", marginBottom: "8px"
                  }}>{p.name}</h3>
                  <p style={{ color: "#777", fontSize: "14px", lineHeight: "1.6", marginBottom: "8px" }}>{p.desc}</p>
                  <p style={{ color: "#aaa", fontSize: "12px", marginBottom: "16px" }}>Weight: {p.weight}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: "24px", fontWeight: "800", color: "#D4A017" }}>{p.price}</span>
                      <span style={{ fontSize: "14px", color: "#bbb", textDecoration: "line-through", marginLeft: "8px" }}>{p.mrp}</span>
                    </div>
                    <button style={{
                      background: "#1A1A1A", color: "white",
                      padding: "10px 20px", borderRadius: "50px",
                      border: "none", fontSize: "13px",
                      fontWeight: "600", cursor: "pointer"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#D4A017"}
                    onMouseLeave={e => e.currentTarget.style.background = "#1A1A1A"}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/shop" style={{
              border: "2px solid #D4A017", color: "#D4A017",
              padding: "14px 40px", borderRadius: "50px",
              fontSize: "15px", fontWeight: "600", textDecoration: "none"
            }}>View All Products →</a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: "#1A1A1A", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{
              color: "#D4A017", fontSize: "12px", fontWeight: "700",
              letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px"
            }}>Why Malli Farm</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 5vw, 50px)",
              fontWeight: "800", color: "white"
            }}>The Malli Farm Promise</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px"
          }}>
            {[
              { icon: "🌿", title: "100% Organic", desc: "FSSAI certified organic farming with zero pesticides" },
              { icon: "🐝", title: "Natural Extraction", desc: "Cold extraction preserving all natural nutrients" },
              { icon: "🧪", title: "Lab Tested", desc: "Every batch tested for purity and quality" },
              { icon: "📜", title: "GST Invoiced", desc: "Proper GST bills for every order" },
            ].map(item => (
              <div key={item.title} style={{
                textAlign: "center", padding: "40px 24px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#D4A017";
                e.currentTarget.style.background = "rgba(212,160,23,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "transparent";
              }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px", fontWeight: "700",
                  color: "#D4A017", marginBottom: "12px"
                }}>{item.title}</h3>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: "100px 24px", background: "#FFFDF4" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "center"
        }}>
          <div>
            <div style={{
              color: "#D4A017", fontSize: "12px", fontWeight: "700",
              letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px"
            }}>Our Story</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800",
              color: "#1A1A1A", lineHeight: "1.2", marginBottom: "24px"
            }}>From Our Hives to Your Home</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.9", marginBottom: "20px" }}>
              Malli Farm was born from a simple belief — that nature provides the best medicine.
              Nestled in the pristine valleys of Uttarakhand, our bee farm spans over 50 organic
              hives, carefully tended by expert beekeepers.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.9", marginBottom: "32px" }}>
              We are proud to be a registered Pvt Ltd company committed to quality,
              transparency and sustainable farming.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["FSSAI Certified", "GST Registered", "Organic Certified", "Lab Tested"].map(tag => (
                <span key={tag} style={{
                  background: "#FFF3CC", color: "#D4A017",
                  padding: "6px 16px", borderRadius: "50px",
                  fontSize: "12px", fontWeight: "700",
                  border: "1px solid rgba(212,160,23,0.3)"
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* LOGO BOX */}
          <div style={{
            background: "linear-gradient(135deg, #FFF8DC, #FFF3B0)",
            borderRadius: "32px", padding: "60px 40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(212,160,23,0.15)"
          }}>
            <div style={{ width: "160px", height: "160px", margin: "0 auto 24px" }}>
              <Image
                src="/logo.png"
                alt="Malli Farm"
                width={160}
                height={160}
                style={{ width: "160px", height: "160px", objectFit: "contain" }}
              />
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px", fontWeight: "700",
              color: "#1A1A1A", marginBottom: "8px"
            }}>Malli Farm Pvt Ltd</div>
            <div style={{ color: "#888", fontSize: "14px" }}>Uttarakhand, India 🇮🇳</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{
              color: "#D4A017", fontSize: "12px", fontWeight: "700",
              letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px"
            }}>Testimonials</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 5vw, 50px)",
              fontWeight: "800", color: "#1A1A1A"
            }}>What Our Customers Say</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}>
            {[
              { name: "Priya Sharma", city: "Delhi", text: "Best organic honey I have ever tasted! Pure, authentic and delivered fresh. Highly recommended!" },
              { name: "Rahul Verma", city: "Mumbai", text: "Amazing quality! GST invoice was provided. Very professional company. Will order again!" },
              { name: "Anita Singh", city: "Bangalore", text: "Finally a trustworthy organic honey brand with proper certification. Malli Farm is the best!" },
            ].map(r => (
              <div key={r.name} style={{
                background: "#FFFDF4", padding: "36px",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid rgba(212,160,23,0.1)"
              }}>
                <div style={{ color: "#D4A017", fontSize: "20px", marginBottom: "16px" }}>★★★★★</div>
                <p style={{
                  color: "#555", lineHeight: "1.8",
                  fontStyle: "italic", marginBottom: "24px", fontSize: "15px"
                }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #D4A017, #F5C842)",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", color: "white",
                    fontWeight: "700", fontSize: "18px", flexShrink: 0
                  }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: "700", color: "#1A1A1A" }}>{r.name}</div>
                    <div style={{ color: "#999", fontSize: "13px" }}>{r.city} • Verified Buyer ✓</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #D4A017, #F5C842)"
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: "800", color: "white", marginBottom: "16px"
          }}>Get 10% Off Your First Order!</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "36px", fontSize: "16px" }}>
            Subscribe for exclusive offers and farm updates
          </p>
          <div style={{ display: "flex", gap: "12px", maxWidth: "480px", margin: "0 auto" }}>
            <input type="email" placeholder="Enter your email"
              style={{
                flex: 1, padding: "16px 24px", borderRadius: "50px",
                border: "none", outline: "none", fontSize: "15px"
              }} />
            <button style={{
              background: "#1A1A1A", color: "white",
              padding: "16px 28px", borderRadius: "50px",
              border: "none", fontSize: "15px",
              fontWeight: "700", cursor: "pointer"
            }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0F0F0F", color: "white", padding: "80px 24px 40px" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px", marginBottom: "60px"
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "44px", height: "44px", flexShrink: 0 }}>
                <Image
                  src="/logo.png"
                  alt="Malli Farm"
                  width={44}
                  height={44}
                  style={{ width: "44px", height: "44px", objectFit: "contain" }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px", fontWeight: "800", color: "#D4A017"
                }}>MALLI FARM</div>
                <div style={{ fontSize: "9px", color: "#666", letterSpacing: "1.5px" }}>PVT LTD • UTTARAKHAND</div>
              </div>
            </div>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px" }}>
              Pure organic honey. FSSAI certified, GST registered, lab tested.
            </p>
            <div style={{ color: "#555", fontSize: "12px", marginBottom: "20px", lineHeight: "2" }}>
              <div>🏢 Malli Farm Private Limited</div>
              <div>📋 FSSAI: XXXXXXXXXXXXXXX</div>
              <div>🧾 GST: XXXXXXXXXXXXXXXXX</div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="https://wa.me/916398903434" target="_blank" style={{
                background: "#25D366", color: "white",
                padding: "8px 16px", borderRadius: "50px",
                fontSize: "12px", fontWeight: "600", textDecoration: "none"
              }}>📱 WhatsApp</a>
              <a href="https://instagram.com/sakibanzar" target="_blank" style={{
                background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                color: "white", padding: "8px 16px", borderRadius: "50px",
                fontSize: "12px", fontWeight: "600", textDecoration: "none"
              }}>📸 Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: "#D4A017", fontWeight: "700",
              marginBottom: "20px", fontSize: "13px", letterSpacing: "1px"
            }}>QUICK LINKS</h4>
            {["Home", "Shop", "About Us", "Blog", "Contact", "Track Order"].map(link => (
              <a key={link} href="#" style={{
                display: "block", color: "#666", fontSize: "14px",
                textDecoration: "none", marginBottom: "10px"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
              onMouseLeave={e => e.currentTarget.style.color = "#666"}>{link}</a>
            ))}
          </div>

          {/* Products */}
          <div>
            <h4 style={{
              color: "#D4A017", fontWeight: "700",
              marginBottom: "20px", fontSize: "13px", letterSpacing: "1px"
            }}>PRODUCTS</h4>
            {["Organic Honey", "Natural Beeswax", "Bee Pollen", "Combo Packs", "Gift Sets"].map(p => (
              <a key={p} href="/shop" style={{
                display: "block", color: "#666", fontSize: "14px",
                textDecoration: "none", marginBottom: "10px"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#D4A017"}
              onMouseLeave={e => e.currentTarget.style.color = "#666"}>{p}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              color: "#D4A017", fontWeight: "700",
              marginBottom: "20px", fontSize: "13px", letterSpacing: "1px"
            }}>CONTACT</h4>
            <div style={{ color: "#666", fontSize: "14px", lineHeight: "2.2" }}>
              <div>📱 +91 6398903434</div>
              <div>📧 hello@mallifarm.com</div>
              <div>📍 Uttarakhand, India</div>
              <div>🕒 Mon-Sat: 9am - 6pm</div>
            </div>
            <h4 style={{
              color: "#D4A017", fontWeight: "700",
              margin: "24px 0 12px", fontSize: "13px", letterSpacing: "1px"
            }}>POLICIES</h4>
            {["Privacy Policy", "Terms & Conditions", "Shipping Policy", "Return Policy"].map(p => (
              <a key={p} href="#" style={{
                display: "block", color: "#666", fontSize: "13px",
                textDecoration: "none", marginBottom: "8px"
              }}>{p}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid #222", paddingTop: "32px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "16px"
        }}>
          <div style={{ color: "#555", fontSize: "13px" }}>
            © 2024 Malli Farm Private Limited. All rights reserved.
          </div>
          <div style={{ color: "#555", fontSize: "13px" }}>
            Made with 🍯 in India | FSSAI Certified | GST Registered
          </div>
        </div>
      </footer>

    </main>
  );
}