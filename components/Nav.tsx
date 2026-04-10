"use client";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Inicio",        href: "#inicio"   },
  { label: "Quiénes somos", href: "#quienes"  },
  { label: "Cómo ayudar",   href: "#ayudar"   },
  { label: "Contacto",      href: "#contacto" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "sticky", top: 0, zIndex: 100,
        padding: "16px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "var(--teal-deep)",
      }}
    >
      {/* Logo */}
      <motion.a href="#" whileHover={{ scale: 1.04 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 36, height: 36,
          background: "linear-gradient(135deg, var(--teal-light), var(--green-light))",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}>🤟</div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, color: "var(--white)", fontStyle: "italic" }}>
            Fundación
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, color: "var(--teal-light)", fontStyle: "italic" }}>
            Ángulo
          </div>
        </div>
      </motion.a>

      {/* Links */}
      <nav className="hide-mob" style={{ display: "flex", gap: 2 }}>
        {LINKS.map(({ label, href }, i) => (
          <motion.a key={label} href={href} className="nav-link"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.07 }}
          >{label}</motion.a>
        ))}
      </nav>

      {/* CTA */}
      <motion.a className="btn btn-accent" href="#ayudar"
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        style={{ fontSize: 13, padding: "10px 22px" }}
      >
        ❤️ Apóyanos
      </motion.a>
    </motion.header>
  );
}
