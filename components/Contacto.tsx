"use client";
import { motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem } from "./motion";

const INFO = [
  { icon: "✉️", label: "Email",     val: "contacto@fundacionangulo.org", href: "mailto:contacto@fundacionangulo.org" },
  { icon: "🌐", label: "Web",       val: "fundacionangulo.org",           href: "https://fundacionangulo.org" },
  { icon: "📍", label: "Ubicación", val: "Santiago, Chile",               href: "#" },
  { icon: "📱", label: "Instagram", val: "@fundacionangulo",              href: "https://instagram.com/fundacionangulo" },
];

export default function Contacto() {
  return (
    <section id="contacto" className="section" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
      {/* BG blob */}
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: 600, height: 600, bottom: -200, left: -100, opacity: 0.06, pointerEvents: "none" }}>
        <path fill="var(--green)" d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,-1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z" transform="translate(100 100)" />
      </svg>

      <div className="container">
        <FadeUp style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="pill" style={{ color: "var(--teal-dark)", borderColor: "var(--teal)", marginBottom: 20, display: "inline-flex" }}>
            📬 Contacto
          </span>
          <h2 style={{ fontSize: 48, color: "var(--black)", maxWidth: 520, margin: "0 auto 16px" }}>
            Hablemos por <em style={{ color: "var(--teal-dark)", fontStyle: "italic" }}>los que más importan.</em>
          </h2>
          <p style={{ fontSize: 16, color: "#668", maxWidth: 440, margin: "0 auto", lineHeight: 1.8 }}>
            ¿Preguntas, colaboraciones o necesitas orientación sobre infancia sorda? Escríbenos.
          </p>
        </FadeUp>

        <div className="two-col" style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Info cards */}
          <Stagger style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
            {INFO.map(({ icon, label, val, href }) => (
              <StaggerItem key={label}>
                <motion.a href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="card"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", cursor: "pointer" }}>
                  <div style={{ width: 48, height: 48, background: "var(--teal-pale)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "#99A", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--teal-dark)" }}>{val}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "var(--teal)", fontSize: 18 }}>→</div>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>

          {/* CTA card */}
          <FadeRight delay={0.15} style={{ flex: 1 }}>
            <div style={{
              background: "var(--teal-deep)", borderRadius: 32,
              padding: "48px 40px", position: "relative", overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
            }}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", width: 300, height: 300, bottom: -80, right: -80, opacity: 0.15, pointerEvents: "none" }}>
                <path fill="white" d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,-1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z" transform="translate(100 100)" />
              </svg>
              <motion.div className="float" style={{ fontSize: 44, marginBottom: 20, display: "inline-block" }}>🌟</motion.div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 900, fontStyle: "italic", color: "white", lineHeight: 1.2, marginBottom: 16 }}>
                  ¿Eres familia de un niño sordo?
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 32 }}>
                  Te ofrecemos orientación, talleres de LSCh y una red de familias que viven lo mismo. No estás sola/solo.
                </p>
                <motion.a className="btn" href="mailto:contacto@fundacionangulo.org"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ background: "var(--accent)", color: "var(--black)", fontWeight: 700, fontSize: 14 }}>
                  Contáctanos hoy →
                </motion.a>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
