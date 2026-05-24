"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
                style={{ fontSize: "14px", fontWeight: link === "About" ? "700" : "500", color: link === "About" ? "#D4A017" : "#1A1A1A", textDecoration: "none" }}>{link}</Link>
            ))}
          </div>
          <Link href="/cart" style={{
            background: "#D4A017", color: "white", padding: "10px 20px",
            borderRadius: "50px", fontSize: "14px", fontWeight: "600", textDecoration: "none"
          }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
        padding: "100px 24px", textAlign: "center"
      }}>
        <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>OUR STORY</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "800",
          color: "white", marginBottom: "20px", lineHeight: "1.2"
        }}>From the Heart of<br /><span style={{ color: "#D4A017" }}>Uttarakhand</span></h1>
        <p style={{ color: "#888", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
          A family legacy of pure organic honey, built on trust, nature and generations of beekeeping wisdom.
        </p>
      </div>

      {/* STORY SECTION */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "center"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #FFF8DC, #FFF3B0)",
            borderRadius: "32px", padding: "60px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(212,160,23,0.15)"
          }}>
            <div style={{ fontSize: "120px", marginBottom: "24px" }}>🐝</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: "700", color: "#1A1A1A", marginBottom: "8px" }}>
              Est. 2018
            </div>
            <div style={{ color: "#888" }}>Uttarakhand, India</div>
          </div>
          <div>
            <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "16px" }}>WHO WE ARE</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "800",
              color: "#1A1A1A", lineHeight: "1.2", marginBottom: "24px"
            }}>Pure Honey, Pure Promise</h2>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.9", marginBottom: "20px" }}>
              Malli Farm was founded in 2018 with a single mission — to bring 100% pure, unadulterated organic honey from the pristine Himalayan forests of Uttarakhand directly to Indian homes.
            </p>
            <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.9", marginBottom: "32px" }}>
              Our 50+ organic beehives are nestled in chemical-free forests where bees feed on wildflowers, medicinal herbs and Himalayan flora — creating honey that is truly nature's finest gift.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["FSSAI Certified", "GST Registered", "Pvt Ltd Company", "100% Organic"].map(tag => (
                <span key={tag} style={{
                  background: "#FFF3CC", color: "#D4A017",
                  padding: "6px 16px", borderRadius: "50px",
                  fontSize: "12px", fontWeight: "700",
                  border: "1px solid rgba(212,160,23,0.3)"
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{
          maxWidth: "1000px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px", textAlign: "center"
        }}>
          {[
            { num: "50+", label: "Organic Beehives" },
            { num: "10K+", label: "Happy Customers" },
            { num: "6+", label: "Years Experience" },
            { num: "100%", label: "Natural & Pure" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "52px", fontWeight: "800", color: "#D4A017", marginBottom: "8px"
              }}>{stat.num}</div>
              <div style={{ color: "#888", fontSize: "15px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM / VALUES */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ color: "#D4A017", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>OUR VALUES</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 48px)", fontWeight: "800", color: "#1A1A1A" }}>
              What Makes Us Different
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "28px" }}>
            {[
              { icon: "🌿", title: "100% Organic", desc: "No pesticides, no chemicals, no heat treatment. Pure honey exactly as nature intended." },
              { icon: "🐝", title: "Ethical Beekeeping", desc: "Our bees live in natural habitats. We follow ethical and sustainable beekeeping practices." },
              { icon: "🧪", title: "Lab Tested", desc: "Every batch is lab tested for purity, quality and safety before reaching you." },
              { icon: "🏔️", title: "Himalayan Source", desc: "Our hives are in pristine Himalayan forests, away from pollution and chemicals." },
              { icon: "📜", title: "FSSAI Certified", desc: "Fully certified by FSSAI. GST registered Pvt Ltd company with complete transparency." },
              { icon: "❤️", title: "Family Legacy", desc: "Started as a family tradition, now sharing nature's best with families across India." },
            ].map(val => (
              <div key={val.title} style={{
                background: "white", borderRadius: "24px", padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid rgba(212,160,23,0.08)"
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 12px 40px rgba(212,160,23,0.15)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"}>
                <div style={{ fontSize: "44px", marginBottom: "16px" }}>{val.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px", fontWeight: "700", color: "#D4A017", marginBottom: "12px"
                }}>{val.title}</h3>
                <p style={{ color: "#777", fontSize: "14px", lineHeight: "1.7" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #D4A017, #F5C842)",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800",
          color: "white", marginBottom: "16px"
        }}>Taste the Difference Today!</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", marginBottom: "36px" }}>
          Join 10,000+ happy customers who trust Malli Farm
        </p>
        <Link href="/shop" style={{
          background: "#1A1A1A", color: "white",
          padding: "18px 48px", borderRadius: "50px",
          fontSize: "16px", fontWeight: "700", textDecoration: "none",
          display: "inline-block"
        }}>Shop Now 🍯</Link>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0F0F0F", color: "white", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ color: "#555", fontSize: "13px" }}>
          © 2024 Malli Farm Private Limited | FSSAI Certified | GST Registered | Made with 🍯 in India
        </div>
      </footer>
    </main>
  );
}