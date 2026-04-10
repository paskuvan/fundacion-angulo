"use client";
import { motion } from "framer-motion";
import { FadeUp } from "./motion";

/* ── Organic SVG shape ── */
function OrganicShape({ color, opacity = 0.18, style }: { color: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", pointerEvents: "none", ...style }}>
      <path fill={color} fillOpacity={opacity}
        d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,
        -1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,
        25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,
        64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7
        C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,
        2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/* ── Floating illustration card ── */
function IllustCard({ emoji, label, bg, style, className }: { emoji: string; label: string; bg: string; style?: React.CSSProperties; className?: string }) {
  return (
    <div className={className} style={{
      position: "absolute",
      background: bg, borderRadius: 20,
      padding: "12px 18px",
      display: "flex", alignItems: "center", gap: 10,
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-body)",
      fontWeight: 600, fontSize: 13,
      color: "var(--black)",
      ...style,
    }}>
      <span style={{ fontSize: 22 }}>{emoji}</span>
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" style={{
      background: "var(--teal-deep)",
      minHeight: "94vh",
      padding: "80px 40px",
      position: "relative",
      overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      {/* Background organic shapes */}
      <OrganicShape color="#2BAACC" opacity={0.25} style={{ width: 600, height: 600, top: -200, right: -150 }} />
      <OrganicShape color="#7ABF3E" opacity={0.15} style={{ width: 400, height: 400, bottom: -100, left: -80 }} />

      {/* Scattered dots */}
      {[
        { top: "15%", left: "8%",  size: 10, color: "var(--accent)" },
        { top: "70%", left: "12%", size: 7,  color: "var(--teal-light)" },
        { top: "30%", right: "8%", size: 8,  color: "var(--green-light)" },
        { top: "80%", right: "15%",size: 12, color: "var(--accent)" },
        { top: "50%", left: "40%", size: 6,  color: "rgba(255,255,255,0.3)" },
      ].map((d, i) => (
        <motion.div key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", width: d.size, height: d.size, borderRadius: "50%", background: d.color, ...d }}
        />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="two-col" style={{ display: "flex", gap: 60, alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ flex: 1.1, minWidth: 0 }}>
            {/* Tag */}
            <FadeUp delay={0.05}>
              <span className="pill" style={{ color: "var(--teal-light)", borderColor: "var(--teal-light)", marginBottom: 24, display: "inline-flex" }}>
                🤟 Por la infancia sorda de Chile
              </span>
            </FadeUp>

            {/* Headline — serif italic large */}
            <div style={{ overflow: "hidden", marginBottom: 28 }}>
              {[
                "Cada niño sordo",
                "merece crecer",
                "con derechos.",
              ].map((line, i) => (
                <motion.div key={line}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 58,
                    fontWeight: 900,
                    fontStyle: i === 2 ? "italic" : "normal",
                    color: i === 2 ? "var(--teal-light)" : "var(--white)",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >{line}</motion.div>
              ))}
            </div>

            {/* Desc */}
            <FadeUp delay={0.45}>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 440, marginBottom: 36 }}>
                Fundación Ángulo aboga por los derechos de niños y adolescentes sordos,
                promoviendo su inclusión y educación en lengua de señas chilena.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.58} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
              <motion.a className="btn btn-accent" href="#ayudar" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                ❤️ Quiero apoyar
              </motion.a>
              <motion.a className="btn btn-outline-white" href="#quienes" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Nuestra misión →
              </motion.a>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.7}>
              <div style={{ display: "flex", gap: 0, background: "rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden", width: "fit-content" }}>
                {[
                  { num: "500+", label: "Niños beneficiados" },
                  { num: "12",   label: "Años de trabajo" },
                  { num: "30+",  label: "Programas activos" },
                ].map(({ num, label }, i) => (
                  <div key={num} style={{
                    padding: "18px 28px",
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 900, color: "var(--teal-light)", fontStyle: "italic" }}>{num}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — illustration */}
          <motion.div className="hide-mob"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ flex: 1, position: "relative", height: 520 }}
          >
            {/* Main circle illustration */}
            <div style={{
              width: 380, height: 380,
              background: "linear-gradient(135deg, rgba(43,170,204,0.3) 0%, rgba(122,191,62,0.2) 100%)",
              borderRadius: "50%",
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ fontSize: 120, lineHeight: 1 }}>🧒🏽</div>
            </div>

            {/* Rotating ring */}
            <motion.div className="spin" style={{
              position: "absolute", top: "50%", left: "50%",
              width: 420, height: 420,
              transform: "translate(-50%, -50%)",
              border: "2px dashed rgba(43,170,204,0.3)",
              borderRadius: "50%",
            }} />

            {/* Floating cards */}
            <IllustCard emoji="🤟" label="Lengua de señas" bg="var(--white)" className="float"
              style={{ top: "5%", left: "-5%", zIndex: 3 }} />
            <IllustCard emoji="📚" label="Educación bilingüe" bg="var(--accent-pale)" className="float-b"
              style={{ bottom: "12%", left: "-8%", zIndex: 3 }} />
            <IllustCard emoji="❤️" label="Con amor" bg="var(--green-pale)" className="float"
              style={{ top: "10%", right: "-5%", zIndex: 3 }} />
            <IllustCard emoji="🌱" label="Futuro pleno" bg="var(--teal-pale)" className="float-b"
              style={{ bottom: "5%", right: "-4%", zIndex: 3 }} />

            {/* Accent dot */}
            <motion.div className="wiggle" style={{
              position: "absolute", top: "2%", right: "20%",
              width: 50, height: 50, borderRadius: "50%",
              background: "var(--accent)", zIndex: 4,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
            }}>✦</motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
