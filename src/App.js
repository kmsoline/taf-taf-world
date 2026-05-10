import React, { useState, useEffect, useRef } from "react";

// ─── CONSTANTS ───
const BLUE = "#12B8F5";
const BLUE_DARK = "#0EA7DF";
const BLUE_DEEPER = "#0A8FC4";
const BLACK = "#111111";
const GRAY_LIGHT = "#EFEFEF";
const WHITE = "#FFFFFF";
const WHATSAPP_NUMBER = "221772893831";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── ICONS (inline SVG components) ───
const PlaneIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5 0 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.3.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
);
const ShipIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 1v4"/></svg>
);
const BoxIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);
const TruckIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.684-.949V8a1 1 0 0 1 1-1h1.382a1 1 0 0 1 .894.553l1.448 2.894A1 1 0 0 0 19.382 11H21a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
);
const ShieldIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const HeadphonesIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
);
const StarIcon = ({ size = 18, color = "#FFC107" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const WhatsAppIcon = ({ size = 24, color = WHITE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
const ChevronDown = ({ size = 20, color = BLACK }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
);
const CheckCircle = ({ size = 22, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const GlobeIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const ClockIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const UsersIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const TagIcon = ({ size = 24, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
);
const MenuIcon = ({ size = 28, color = BLACK }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const XIcon = ({ size = 28, color = BLACK }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const MapPinIcon = ({ size = 20, color = BLUE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const SendIcon = ({ size = 20, color = WHITE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

// ─── ANIMATION HOOK ───
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── REUSABLE COMPONENTS ───
function SectionTitle({ subtitle, title, light = false }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ textAlign: "center", marginBottom: 48, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s cubic-bezier(.22,1,.36,1)" }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, color: light ? "rgba(255,255,255,0.7)" : BLUE, marginBottom: 8 }}>{subtitle}</p>
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, color: light ? WHITE : BLACK, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      <div style={{ width: 60, height: 4, background: BLUE, borderRadius: 2, margin: "16px auto 0" }} />
    </div>
  );
}

function CTAButton({ children, onClick, variant = "primary", style: customStyle = {}, icon }) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = variant === "primary";
  const isWhatsApp = variant === "whatsapp";
  const bgColor = isWhatsApp ? "#25D366" : isPrimary ? BLUE : "transparent";
  const bgHover = isWhatsApp ? "#1DA851" : isPrimary ? BLUE_DARK : "rgba(18,184,245,0.1)";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "14px 32px", fontSize: 15, fontWeight: 700,
        fontFamily: "'Montserrat', sans-serif",
        color: isPrimary || isWhatsApp ? WHITE : BLUE,
        background: hovered ? bgHover : bgColor,
        border: isPrimary || isWhatsApp ? "none" : `2px solid ${BLUE}`,
        borderRadius: 50, cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 25px rgba(18,184,245,0.3)` : "0 4px 15px rgba(18,184,245,0.15)",
        transition: "all 0.3s ease", ...customStyle
      }}
    >
      {icon}{children}
    </button>
  );
}

// ─── NAV ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#why" },
    { label: "Destinations", href: "#destinations" },
    { label: "Devis", href: "#quote" },
    { label: "FAQ", href: "#faq" },
  ];
  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("#hero")}>
            <img src="/logo.jpg" alt="TAF TAF WORLD" style={{ height: 46, width: "auto" }} />
          </div>
          {/* Desktop links */}
          <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="nav-desktop">
            {links.map(l => (
              <a key={l.href} onClick={() => scrollTo(l.href)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13.5, fontWeight: 500, color: BLACK, textDecoration: "none", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = BLUE} onMouseLeave={e => e.target.style.color = BLACK}>{l.label}</a>
            ))}
            <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={18} />} style={{ padding: "10px 22px", fontSize: 13 }}>WhatsApp</CTAButton>
          </div>
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} className="nav-mobile">
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: WHITE, zIndex: 999, display: "flex", flexDirection: "column", padding: "32px 24px", gap: 8 }} className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} onClick={() => scrollTo(l.href)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 500, color: BLACK, textDecoration: "none", padding: "14px 0", borderBottom: `1px solid ${GRAY_LIGHT}`, cursor: "pointer" }}>{l.label}</a>
          ))}
          <div style={{ marginTop: 20 }}>
            <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={20} />} style={{ width: "100%", justifyContent: "center" }}>Contacter sur WhatsApp</CTAButton>
          </div>
        </div>
      )}
      <style>{`
        @media (min-width: 769px) { .nav-mobile { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile { display: block !important; } }
      `}</style>
    </>
  );
}

// ─── HERO ───
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      background: `linear-gradient(135deg, ${BLACK} 0%, #1a2a3a 50%, #0d3b5a 100%)`,
      overflow: "hidden",
    }}>
      {/* Animated grid bg */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      {/* Floating circles */}
      <div style={{ position: "absolute", top: "10%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${BLUE}22, transparent)`, animation: "float 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${BLUE}15, transparent)`, animation: "float 6s ease-in-out infinite 2s" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
        <div style={{ flex: "1 1 500px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(.22,1,.36,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(18,184,245,0.15)", borderRadius: 30, padding: "6px 16px", marginBottom: 24 }}>
            <GlobeIcon size={16} color={BLUE} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: BLUE, textTransform: "uppercase", letterSpacing: 1.5 }}>Transport International</span>
          </div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, color: WHITE, lineHeight: 1.1, margin: "0 0 16px" }}>
            Vos colis voyagent{" "}
            <span style={{ color: BLUE, position: "relative" }}>
              en toute sécurité
              <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%" }} height="8" viewBox="0 0 200 8" preserveAspectRatio="none"><path d="M0 7 Q50 0 100 4 Q150 8 200 1" stroke={BLUE} strokeWidth="3" fill="none" opacity="0.5" /></svg>
            </span>
          </h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 520, margin: "0 0 36px" }}>
            Expédition rapide et fiable entre l'Afrique et le monde entier. Fret aérien, maritime, groupage — <strong style={{ color: WHITE }}>TAF TAF WORLD</strong> connecte vos proches.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: BLUE, fontStyle: "italic", marginBottom: 32 }}>
            « Guen gaaw guen woor » — Rapide et fiable
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <CTAButton onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })} icon={<SendIcon size={18} />}>Demander un devis</CTAButton>
            <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={18} />}>WhatsApp</CTAButton>
          </div>
          {/* Trust badges */}
          <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
            {[{ n: "5000+", l: "Colis livrés" }, { n: "15+", l: "Destinations" }, { n: "24/7", l: "Support client" }].map((b, i) => (
              <div key={i} style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: `all 0.8s cubic-bezier(.22,1,.36,1) ${0.3 + i * 0.15}s` }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 28, fontWeight: 900, color: BLUE }}>{b.n}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual — plane image */}
        <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center", opacity: loaded ? 1 : 0, transform: loaded ? "scale(1) translateY(0)" : "scale(0.9) translateY(30px)", transition: "all 1.2s cubic-bezier(.22,1,.36,1) 0.3s" }}>
          <div style={{ position: "relative", width: "min(500px, 90vw)" }}>
            <img src="/hero-plane.png" alt="Avion cargo TAF TAF WORLD" style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }} />
            {/* Floating badges */}
            <div style={{ position: "absolute", top: -16, right: -10, background: WHITE, borderRadius: 14, padding: "10px 14px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", animation: "float 4s ease-in-out infinite", display: "flex", alignItems: "center", gap: 8 }}>
              <BoxIcon size={22} color={BLUE} />
              <span style={{ fontFamily: "'Montserrat'", fontWeight: 700, fontSize: 12, color: BLACK }}>Fret aérien</span>
            </div>
            <div style={{ position: "absolute", bottom: -12, left: -10, background: WHITE, borderRadius: 14, padding: "10px 14px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", animation: "float 5s ease-in-out infinite 1s", display: "flex", alignItems: "center", gap: 8 }}>
              <ShipIcon size={22} color={BLUE} />
              <span style={{ fontFamily: "'Montserrat'", fontWeight: 700, fontSize: 12, color: BLACK }}>Fret maritime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg style={{ position: "absolute", bottom: -1, left: 0, width: "100%" }} viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={WHITE} />
      </svg>
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

// ─── SERVICES ───
function Services() {
  const services = [
    { icon: <PlaneIcon size={32} color={BLUE} />, title: "Fret Aérien", desc: "Expédition rapide par avion pour vos envois urgents. Délais réduits, suivi en temps réel.", tag: "Express" },
    { icon: <ShipIcon size={32} color={BLUE} />, title: "Fret Maritime", desc: "Transport par mer pour vos envois volumineux. Solution économique et fiable.", tag: "Économique" },
    { icon: <BoxIcon size={32} color={BLUE} />, title: "Groupage", desc: "Regroupez vos colis pour optimiser les coûts. Idéal pour les envois réguliers.", tag: "Populaire" },
    { icon: <TruckIcon size={32} color={BLUE} />, title: "Livraison Internationale", desc: "Livraison porte-à-porte dans plus de 15 pays. Collecte et distribution incluses.", tag: "Complet" },
    { icon: <HeadphonesIcon size={32} color={BLUE} />, title: "Assistance Client", desc: "Accompagnement personnalisé du devis à la livraison. Disponible 7j/7.", tag: "24/7" },
  ];
  return (
    <section id="services" style={{ padding: "100px 24px", background: WHITE }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle subtitle="Nos services" title="Des solutions pour chaque besoin" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {services.map((s, i) => {
            const [ref, visible] = useInView();
            const [hovered, setHovered] = useState(false);
            return (
              <div key={i} ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
                background: hovered ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEPER})` : WHITE,
                border: `1px solid ${hovered ? BLUE : "#e8e8e8"}`,
                borderRadius: 20, padding: "36px 28px", cursor: "pointer",
                opacity: visible ? 1 : 0, transform: visible ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(30px)",
                transition: `all 0.5s cubic-bezier(.22,1,.36,1) ${i * 0.1}s`,
                boxShadow: hovered ? "0 20px 40px rgba(18,184,245,0.25)" : "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: hovered ? "rgba(255,255,255,0.2)" : `${BLUE}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {hovered ? React.cloneElement(s.icon, { color: WHITE }) : s.icon}
                  </div>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: hovered ? WHITE : BLUE, background: hovered ? "rgba(255,255,255,0.2)" : `${BLUE}12`, borderRadius: 20, padding: "4px 12px" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 19, fontWeight: 800, color: hovered ? WHITE : BLACK, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: hovered ? "rgba(255,255,255,0.85)" : "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE US ───
function WhyUs() {
  const reasons = [
    { icon: <ClockIcon size={28} color={BLUE} />, title: "Rapidité", desc: "Délais de livraison optimisés grâce à nos partenaires logistiques internationaux." },
    { icon: <ShieldIcon size={28} color={BLUE} />, title: "Sécurité", desc: "Vos colis sont assurés et suivis à chaque étape du processus." },
    { icon: <UsersIcon size={28} color={BLUE} />, title: "Accompagnement", desc: "Un conseiller dédié vous accompagne du devis à la réception." },
    { icon: <TagIcon size={28} color={BLUE} />, title: "Prix compétitifs", desc: "Tarifs transparents et adaptés à tous les budgets." },
    { icon: <GlobeIcon size={28} color={BLUE} />, title: "Réseau mondial", desc: "Plus de 15 destinations en Afrique, Europe et Amérique." },
    { icon: <HeadphonesIcon size={28} color={BLUE} />, title: "Support 24/7", desc: "Joignable à tout moment par WhatsApp, téléphone ou email." },
  ];
  return (
    <section id="why" style={{ padding: "100px 24px", background: GRAY_LIGHT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle subtitle="Nos avantages" title="Pourquoi choisir TAF TAF WORLD ?" />
        {/* Team image */}
        <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 36, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
          <img src="/team.png" alt="Équipe TAF TAF WORLD" style={{ width: "100%", height: "auto", maxHeight: 360, objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {reasons.map((r, i) => {
            const [ref, visible] = useInView();
            return (
              <div key={i} ref={ref} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                background: WHITE, borderRadius: 16, padding: "24px 20px",
                opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.08}s`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${BLUE}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{r.icon}</div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 700, color: BLACK, margin: "0 0 6px" }}>{r.title}</h4>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13.5, color: "#666", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ───
function HowItWorks() {
  const steps = [
    { num: "01", title: "Demandez un devis", desc: "Remplissez notre formulaire ou contactez-nous sur WhatsApp avec les détails de votre envoi." },
    { num: "02", title: "Confirmation & Collecte", desc: "Nous confirmons le tarif et organisons la collecte de votre colis à domicile." },
    { num: "03", title: "Expédition sécurisée", desc: "Votre colis est expédié avec suivi en temps réel. Vous êtes informé à chaque étape." },
    { num: "04", title: "Livraison garantie", desc: "Réception confirmée à destination. Votre proche reçoit son colis en toute sécurité." },
  ];
  return (
    <section style={{ padding: "100px 24px", background: `linear-gradient(135deg, ${BLACK}, #1a2a3a)`, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(${BLUE} 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        <SectionTitle subtitle="Le processus" title="Comment ça marche ?" light />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
          {steps.map((s, i) => {
            const [ref, visible] = useInView();
            return (
              <div key={i} ref={ref} style={{
                textAlign: "center",
                opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.15}s`,
              }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${BLUE}20`, border: `2px solid ${BLUE}50`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 900, color: BLUE }}>{s.num}</span>
                </div>
                {i < steps.length - 1 && <div style={{ display: "none" }} className="step-line" />}
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 700, color: WHITE, margin: "0 0 10px" }}>{s.title}</h4>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── DESTINATIONS ───
function Destinations() {
  const destinations = [
    { city: "Paris", country: "France", flag: "🇫🇷", popular: true },
    { city: "Dakar", country: "Sénégal", flag: "🇸🇳", popular: true },
    { city: "Abidjan", country: "Côte d'Ivoire", flag: "🇨🇮", popular: true },
    { city: "Montréal", country: "Canada", flag: "🇨🇦", popular: false },
    { city: "Bruxelles", country: "Belgique", flag: "🇧🇪", popular: false },
    { city: "Casablanca", country: "Maroc", flag: "🇲🇦", popular: false },
    { city: "Bamako", country: "Mali", flag: "🇲🇱", popular: false },
    { city: "Conakry", country: "Guinée", flag: "🇬🇳", popular: false },
    { city: "Douala", country: "Cameroun", flag: "🇨🇲", popular: false },
    { city: "Libreville", country: "Gabon", flag: "🇬🇦", popular: false },
    { city: "New York", country: "États-Unis", flag: "🇺🇸", popular: false },
    { city: "Londres", country: "Royaume-Uni", flag: "🇬🇧", popular: false },
  ];
  return (
    <section id="destinations" style={{ padding: "100px 24px", background: WHITE }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle subtitle="Nos destinations" title="Nous livrons partout dans le monde" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 16 }}>
          {destinations.map((d, i) => {
            const [ref, visible] = useInView(0.1);
            const [hovered, setHovered] = useState(false);
            return (
              <div key={i} ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
                position: "relative",
                background: hovered ? BLUE : GRAY_LIGHT,
                borderRadius: 16, padding: "20px 16px", textAlign: "center", cursor: "pointer",
                opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.9)",
                transition: `all 0.4s cubic-bezier(.22,1,.36,1) ${i * 0.04}s`,
              }}>
                {d.popular && <div style={{ position: "absolute", top: 8, right: 8, background: hovered ? WHITE : BLUE, color: hovered ? BLUE : WHITE, fontFamily: "'Poppins'", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>TOP</div>}
                <div style={{ fontSize: 32, marginBottom: 8 }}>{d.flag}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 700, color: hovered ? WHITE : BLACK }}>{d.city}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: hovered ? "rgba(255,255,255,0.8)" : "#888" }}>{d.country}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───
function Testimonials() {
  const testimonials = [
    { name: "Aminata D.", location: "Dakar → Paris", text: "Service impeccable ! Mon colis est arrivé en 4 jours. L'équipe est très réactive sur WhatsApp.", rating: 5 },
    { name: "Moussa K.", location: "Abidjan → Montréal", text: "Première expérience et je suis conquis. Prix raisonnable et colis bien emballé. Je recommande !", rating: 5 },
    { name: "Fatou S.", location: "Paris → Dakar", text: "J'envoie des colis chaque mois à ma famille. TAF TAF WORLD est devenu mon partenaire de confiance.", rating: 5 },
  ];
  return (
    <section style={{ padding: "100px 24px", background: GRAY_LIGHT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle subtitle="Témoignages" title="Ce que disent nos clients" />
        {/* Client image */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <img src="/client-colis.png" alt="Client satisfait TAF TAF WORLD" style={{ width: "min(360px, 80vw)", height: "auto", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => {
            const [ref, visible] = useInView();
            return (
              <div key={i} ref={ref} style={{
                background: WHITE, borderRadius: 20, padding: 32,
                opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(25px)",
                transition: `all 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.12}s`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14.5, color: "#444", lineHeight: 1.7, margin: "0 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEPER})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat'", fontWeight: 800, color: WHITE, fontSize: 16 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: BLACK }}>{t.name}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#888", display: "flex", alignItems: "center", gap: 4 }}><MapPinIcon size={12} />{t.location}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── QUOTE FORM ───
function QuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", from: "", to: "", type: "", weight: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.from || !form.to) return;
    // In production, this sends to backend / webhook
    setSubmitted(true);
    // Also open WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      "Bonjour TAF TAF WORLD !\n\n" +
      "Je souhaite un devis :\n\n" +
      "Nom : " + form.name + "\n" +
      "Tel : " + form.phone + "\n" +
      "Email : " + (form.email || "Non renseigne") + "\n" +
      "Depart : " + form.from + "\n" +
      "Destination : " + form.to + "\n" +
      "Type : " + (form.type || "Non precise") + "\n" +
      "Poids : " + (form.weight || "Non precise") + "\n" +
      "Description : " + (form.description || "Aucune") + "\n\n" +
      "Merci de me recontacter rapidement."
    );
    setTimeout(() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank"), 1500);
  };

  const inputStyle = { width: "100%", padding: "14px 16px", fontFamily: "'Poppins', sans-serif", fontSize: 14, border: `1.5px solid #ddd`, borderRadius: 12, outline: "none", background: WHITE, color: BLACK, transition: "border 0.3s", boxSizing: "border-box" };
  const labelStyle = { fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6, display: "block" };

  if (submitted) {
    return (
      <section id="quote" style={{ padding: "100px 24px", background: WHITE }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${BLUE}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <CheckCircle size={40} color={BLUE} />
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 28, fontWeight: 800, color: BLACK, marginBottom: 12 }}>Demande envoyée !</h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7 }}>Merci {form.name} ! Notre équipe vous contactera dans les plus brefs délais. Vous allez être redirigé vers WhatsApp...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" style={{ padding: "100px 24px", background: WHITE }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionTitle subtitle="Devis gratuit" title="Estimez le coût de votre envoi" />
        <div style={{ background: GRAY_LIGHT, borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div><label style={labelStyle}>Nom complet *</label><input style={inputStyle} placeholder="Votre nom" value={form.name} onChange={e => update("name", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
            <div><label style={labelStyle}>Téléphone *</label><input style={inputStyle} placeholder="+225 XX XX XX XX" value={form.phone} onChange={e => update("phone", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
            <div><label style={labelStyle}>Email</label><input style={inputStyle} type="email" placeholder="email@exemple.com" value={form.email} onChange={e => update("email", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
            <div><label style={labelStyle}>Ville de départ *</label><input style={inputStyle} placeholder="Ex: Dakar" value={form.from} onChange={e => update("from", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
            <div><label style={labelStyle}>Ville de destination *</label><input style={inputStyle} placeholder="Ex: Paris" value={form.to} onChange={e => update("to", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
            <div>
              <label style={labelStyle}>Type d'envoi</label>
              <select style={{ ...inputStyle, cursor: "pointer", appearance: "none" }} value={form.type} onChange={e => update("type", e.target.value)}>
                <option value="">Sélectionner</option>
                <option>Colis standard</option>
                <option>Fret aérien</option>
                <option>Fret maritime</option>
                <option>Groupage</option>
                <option>Documents</option>
              </select>
            </div>
            <div><label style={labelStyle}>Poids estimé</label><input style={inputStyle} placeholder="Ex: 15 kg" value={form.weight} onChange={e => update("weight", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} /></div>
          </div>
          <div style={{ marginTop: 20 }}>
            <label style={labelStyle}>Description du colis</label>
            <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} placeholder="Décrivez votre envoi..." value={form.description} onChange={e => update("description", e.target.value)} onFocus={e => e.target.style.borderColor = BLUE} onBlur={e => e.target.style.borderColor = "#ddd"} />
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
            <CTAButton onClick={handleSubmit} icon={<SendIcon size={18} />} style={{ flex: 1, justifyContent: "center", minWidth: 200 }}>Envoyer ma demande</CTAButton>
            <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={18} />} style={{ flex: 1, justifyContent: "center", minWidth: 200 }}>Devis WhatsApp</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "Quels sont les délais de livraison ?", a: "Les délais varient selon la destination et le mode d'expédition. Fret aérien : 3 à 7 jours. Fret maritime : 15 à 30 jours. Groupage : selon remplissage du conteneur." },
    { q: "Comment suivre mon colis ?", a: "Vous recevez un numéro de suivi par WhatsApp dès l'expédition. Notre équipe vous informe à chaque étape du processus." },
    { q: "Quels types de colis acceptez-vous ?", a: "Nous acceptons la plupart des envois : effets personnels, marchandises, documents, équipements. Contactez-nous pour les envois spéciaux." },
    { q: "Comment est calculé le tarif ?", a: "Le tarif dépend du poids, des dimensions, de la destination et du mode d'expédition choisi. Demandez un devis gratuit pour connaître le prix exact." },
    { q: "Mes colis sont-ils assurés ?", a: "Oui, tous les envois bénéficient d'une couverture de base. Une assurance complémentaire est disponible sur demande." },
    { q: "Comment payer ?", a: "Nous acceptons les paiements en espèces, par virement bancaire, Orange Money, Wave et autres solutions de paiement mobile." },
  ];
  return (
    <section id="faq" style={{ padding: "100px 24px", background: GRAY_LIGHT }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionTitle subtitle="Questions fréquentes" title="Besoin d'aide ?" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{ background: WHITE, borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.04)", border: isOpen ? `1.5px solid ${BLUE}30` : "1.5px solid transparent", transition: "border 0.3s" }}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600, color: isOpen ? BLUE : BLACK }}>{f.q}</span>
                  <div style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0, marginLeft: 12 }}>
                    <ChevronDown size={20} color={isOpen ? BLUE : "#888"} />
                  </div>
                </button>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  <p style={{ padding: "0 24px 20px", fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───
function CTABanner() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{
      padding: "80px 24px",
      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEPER})`,
      textAlign: "center",
      opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.95)",
      transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
    }}>
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: WHITE, margin: "0 0 12px" }}>Prêt à expédier votre colis ?</h2>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 32 }}>Obtenez votre devis gratuit en moins de 2 minutes</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <CTAButton onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })} style={{ background: WHITE, color: BLUE, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }} icon={<SendIcon size={18} color={BLUE} />}>Demander un devis</CTAButton>
        <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={18} />}>WhatsApp direct</CTAButton>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer style={{ background: BLACK, padding: "60px 24px 24px", color: "rgba(255,255,255,0.6)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="/logo-dark.png" alt="TAF TAF WORLD" style={{ height: 70, width: "auto", borderRadius: 12 }} />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>Transport et expédition internationale. Rapide, fiable, mondial.</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, color: BLUE, fontStyle: "italic", marginTop: 8 }}>Guen gaaw guen woor</p>
          </div>
          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: WHITE, marginBottom: 16 }}>Navigation</h4>
            {["Accueil", "Services", "Destinations", "Devis gratuit", "FAQ"].map(l => (
              <p key={l} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, margin: "8px 0", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.color = BLUE} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}>{l}</p>
            ))}
          </div>
          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: WHITE, marginBottom: 16 }}>Services</h4>
            {["Fret aérien", "Fret maritime", "Groupage", "Livraison internationale", "Assistance client"].map(l => (
              <p key={l} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, margin: "8px 0" }}>{l}</p>
            ))}
          </div>
          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700, color: WHITE, marginBottom: 16 }}>Contact</h4>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, margin: "8px 0", display: "flex", alignItems: "center", gap: 8 }}><MapPinIcon size={16} color={BLUE} />Ouest Foire, Pikine, Ouakam — Dakar</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, margin: "8px 0" }}>📞 +221 77 289 38 31</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, margin: "8px 0" }}>📞 +221 77 831 27 10</p>
            <div style={{ marginTop: 16 }}>
              <CTAButton variant="whatsapp" onClick={() => window.open(WHATSAPP_URL, "_blank")} icon={<WhatsAppIcon size={16} />} style={{ padding: "10px 20px", fontSize: 12 }}>WhatsApp</CTAButton>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, margin: 0 }}>© 2026 TAF TAF WORLD — Tous droits réservés</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, margin: 0, color: "rgba(255,255,255,0.3)" }}>Rapide. Fiable. Mondial.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING WHATSAPP ───
function FloatingWhatsApp() {
  const [pulse, setPulse] = useState(true);
  return (
    <>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 900,
        width: 60, height: 60, borderRadius: "50%", background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        animation: pulse ? "whatsapp-pulse 2s ease-in-out infinite" : "none",
        cursor: "pointer", textDecoration: "none",
      }}>
        <WhatsAppIcon size={30} />
      </a>
      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50% { transform: scale(1.08); box-shadow: 0 6px 30px rgba(37,211,102,0.6); }
        }
      `}</style>
    </>
  );
}

// ─── MAIN APP ───
export default function TafTafWorld() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", margin: 0, padding: 0, background: WHITE, overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <QuoteForm />
      <FAQ />
      <CTABanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
