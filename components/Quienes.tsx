"use client";
import { motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem } from "./motion";

const PILARES = [
  { icon: "🏛️", title: "Derechos",   desc: "Reconocimiento pleno de los derechos de niños y adolescentes sordos en Chile.",      color: "var(--teal)",  pale: "var(--teal-pale)"  },
  { icon: "📚", title: "Educación",  desc: "Educación bilingüe y bicultural en lengua de señas chilena (LSCh) para todos.",       color: "var(--green)", pale: "var(--green-pale)" },
  { icon: "👨‍👩‍👧", title: "Familias",  desc: "Acompañamiento real a familias con talleres, orientación y redes de apoyo mutuo.",  color: "var(--accent)", pale: "var(--accent-pale)" },
  { icon: "📣", title: "Incidencia", desc: "Incidencia en políticas públicas para garantizar la inclusión en el sistema escolar.", color: "var(--coral)",  pale: "#FFF0EE"            },
];

export default function Quienes() {
  return (
    <section id="quienes" className="section" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>

      {/* BG shape */}
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: 500, height: 500, top: -100, right: -100, opacity: 0.07, pointerEvents: "none" }}>
        <path fill="var(--teal)"
          d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,-1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z"
          transform="translate(100 100)" />
      </svg>

      <div className="container">

        {/* Header */}
        <FadeUp style={{ maxWidth: 600, marginBottom: 72 }}>
          <span className="pill" style={{ color: "var(--teal-dark)", borderColor: "var(--teal)", marginBottom: 20, display: "inline-flex" }}>
            Quiénes somos
          </span>
          <h2 style={{ fontSize: 48, color: "var(--black)", marginBottom: 20 }}>
            Nuestra misión es defender <em style={{ color: "var(--teal-dark)", fontStyle: "italic" }}>a quienes más lo necesitan.</em>
          </h2>
          <p style={{ fontSize: 17, color: "#556", lineHeight: 1.8, fontWeight: 400 }}>
            Fundación Ángulo nace de la convicción de que cada niño sordo de Chile tiene derecho
            a crecer con su lengua, su identidad y su comunidad.
          </p>
        </FadeUp>

        {/* Two col — misión + visión */}
        <div className="two-col" style={{ display: "flex", gap: 40, marginBottom: 80 }}>
          <FadeLeft style={{ flex: 1 }}>
            <div style={{
              background: "var(--teal-deep)", borderRadius: 32,
              padding: "44px 40px", position: "relative", overflow: "hidden",
              height: "100%",
            }}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", width: 300, height: 300, bottom: -80, right: -80, opacity: 0.15, pointerEvents: "none" }}>
                <path fill="white"
                  d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,-1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z"
                  transform="translate(100 100)" />
              </svg>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>🌱</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 900, fontStyle: "italic", color: "white", marginBottom: 16 }}>
                  Nuestra misión
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
                  Defender y promover los derechos humanos de niños y adolescentes sordos en Chile,
                  asegurando su acceso a educación bilingüe, salud y participación plena en la sociedad
                  con su lengua e identidad cultural.
                </p>
                <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["LSCh", "Bilingüismo", "Identidad", "Derechos"].map(t => (
                    <span key={t} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 600, color: "white" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={0.1} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Visión */}
            <div className="card" style={{ padding: "32px 28px", flex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>👁️</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, color: "var(--black)", marginBottom: 12 }}>
                Nuestra visión
              </h3>
              <p style={{ fontSize: 14, color: "#668", lineHeight: 1.8 }}>
                Un Chile donde cada niño sordo se desarrolle plenamente, con acceso a educación de
                calidad en lengua de señas, rodeado de una comunidad que valore su identidad.
              </p>
            </div>

            {/* Quick stat */}
            <div style={{
              background: "linear-gradient(135deg, var(--teal) 0%, var(--green) 100%)",
              borderRadius: 24, padding: "28px",
              display: "flex", alignItems: "center", gap: 20,
            }}>
              <div style={{ fontSize: 52, fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", color: "white", lineHeight: 1 }}>12</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 900, color: "white", fontStyle: "italic" }}>años</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>trabajando por la infancia sorda en Chile</div>
              </div>
            </div>
          </FadeRight>
        </div>

        {/* Quote block — estilo Bold */}
        <FadeUp>
          <div style={{
            background: "var(--charcoal)", borderRadius: 32,
            padding: "52px 60px", position: "relative", overflow: "hidden",
            marginBottom: 80,
          }}>
            <div style={{
              position: "absolute", top: 20, left: 40,
              fontFamily: "var(--font-display)", fontSize: 140,
              color: "rgba(43,170,204,0.15)", lineHeight: 1, fontWeight: 900,
              userSelect: "none",
            }}>"</div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: 28,
                fontWeight: 900, fontStyle: "italic",
                color: "white", lineHeight: 1.5, maxWidth: 700, margin: "0 auto 24px",
              }}>
                Cada niño sordo tiene una voz — nuestra labor es asegurarnos de que el mundo la escuche.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--teal), var(--green))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🤟</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--teal-light)" }}>Fundación Ángulo</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Por la Infancia y Adolescencia Sorda</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Pilares */}
        <FadeUp style={{ textAlign: "center", marginBottom: 40 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 900 }}>Lo que nos mueve</h3>
        </FadeUp>
        <Stagger style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
          {PILARES.map(({ icon, title, desc, color, pale }) => (
            <StaggerItem key={title}>
              <motion.div className="card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ padding: "32px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, background: pale, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 900, color, marginBottom: 8 }}>{title}</div>
                  <p style={{ fontSize: 13, color: "#668", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
