"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", padding: "44px 40px 28px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <motion.a href="#" whileHover={{ scale: 1.04 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, var(--teal), var(--green))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🤟</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16, fontStyle: "italic", color: "white", lineHeight: 1 }}>Fundación</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, fontStyle: "italic", color: "var(--teal-light)", lineHeight: 1 }}>Ángulo</div>
            </div>
          </motion.a>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[["Inicio","inicio"],["Quiénes somos","quienes"],["Cómo ayudar","ayudar"],["Contacto","contacto"]].map(([l,h]) => (
              <motion.a key={l} href={`#${h}`} whileHover={{ color: "var(--teal-light)" }}
                style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)", transition: "color 0.15s" }}>{l}</motion.a>
            ))}
          </div>

          <motion.a className="btn btn-accent" href="#ayudar" whileHover={{ scale: 1.04 }} style={{ fontSize: 13, padding: "10px 22px" }}>
            ❤️ Apóyanos
          </motion.a>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} Fundación Ángulo — Por la Infancia y Adolescencia Sorda</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>contacto@fundacionangulo.org</span>
        </div>
      </div>
    </footer>
  );
}
