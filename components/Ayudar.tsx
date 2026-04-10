"use client";
import { motion } from "framer-motion";
import { FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem } from "./motion";

const FORMAS = [
  { icon: "💰", title: "Donación",       desc: "Tu aporte mensual sostiene programas de acompañamiento y educación para niños sordos.",       cta: "Donar ahora",    color: "var(--teal)",  href: "mailto:contacto@fundacionangulo.org" },
  { icon: "🙋", title: "Voluntariado",   desc: "Súmate a nuestros talleres, eventos y actividades de sensibilización en LSCh.",                cta: "Ser voluntario", color: "var(--green)", href: "mailto:contacto@fundacionangulo.org" },
  { icon: "📣", title: "Difundir",       desc: "Comparte nuestra misión en redes sociales y ayúdanos a llegar a más familias.",                cta: "Compartir",      color: "var(--accent)",href: "https://fundacionangulo.org"         },
  { icon: "🤝", title: "Alianzas",       desc: "Si representas una empresa u organización, podemos construir alianzas de impacto.",            cta: "Conversemos",    color: "var(--coral)", href: "mailto:contacto@fundacionangulo.org" },
];

const IMPACTO = [
  { monto: "$15.000/mes", desc: "Cubre materiales educativos de un niño" },
  { monto: "$50.000/mes", desc: "Financia un taller de LSCh para familias" },
  { monto: "$100.000/mes",desc: "Apoya el acompañamiento de 3 familias" },
];

export default function Ayudar() {
  return (
    <section id="ayudar" className="section" style={{ background: "var(--cream-dark)", position: "relative", overflow: "hidden" }}>

      <div className="container">
        {/* Header */}
        <FadeUp style={{ marginBottom: 72 }}>
          <span className="pill" style={{ color: "var(--teal-dark)", borderColor: "var(--teal)", marginBottom: 20, display: "inline-flex" }}>
            ❤️ Cómo ayudar
          </span>
          <div className="two-col" style={{ display: "flex", gap: 60, alignItems: "flex-end" }}>
            <h2 style={{ fontSize: 48, color: "var(--black)", flex: 1 }}>
              Tu apoyo cambia <em style={{ color: "var(--teal-dark)", fontStyle: "italic" }}>vidas reales.</em>
            </h2>
            <p style={{ fontSize: 16, color: "#668", lineHeight: 1.8, flex: 1, maxWidth: 400 }}>
              Hay muchas formas de contribuir. Elige la que más se ajuste a ti y juntos haremos la diferencia.
            </p>
          </div>
        </FadeUp>

        {/* Formas grid */}
        <Stagger style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 72 }} className="grid-2">
          {FORMAS.map(({ icon, title, desc, cta, color, href }) => (
            <StaggerItem key={title}>
              <motion.div className="card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ padding: "36px 32px", display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                <div style={{ width: 64, height: 64, background: color, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 900, color: "var(--black)", marginBottom: 10 }}>{title}</div>
                  <p style={{ fontSize: 14, color: "#668", lineHeight: 1.75 }}>{desc}</p>
                </div>
                <motion.a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel={href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: color, color: "white", borderRadius: 999, padding: "10px 22px", fontSize: 13, fontWeight: 700, width: "fit-content", marginTop: "auto", boxShadow: "var(--shadow-sm)" }}>
                  {cta} →
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Impacto de tu donación */}
        <FadeUp>
          <div style={{ background: "var(--teal-deep)", borderRadius: 32, padding: "52px 48px", position: "relative", overflow: "hidden" }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", width: 400, height: 400, bottom: -100, right: -100, opacity: 0.1, pointerEvents: "none" }}>
              <path fill="white"
                d="M44,-68.5C56.2,-61.5,64.6,-47.5,70.8,-32.4C77,-17.3,81,-1.1,77.8,13.8C74.6,28.7,64.3,42.4,52.1,54.5C39.9,66.6,25.8,77.1,9.5,81C-6.8,84.9,-25.4,82.1,-40.8,73.4C-56.3,64.7,-68.5,50,-74.5,33.4C-80.5,16.7,-80.3,-2,-74.6,-18.7C-68.9,-35.4,-57.8,-50,-44,-58.7C-30.2,-67.3,-13.6,-70,2.5,-73.4C18.6,-76.8,31.8,-75.5,44,-68.5Z"
                transform="translate(100 100)" />
            </svg>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 900, fontStyle: "italic", color: "white", marginBottom: 40, textAlign: "center" }}>
                ¿Qué hace tu aporte?
              </h3>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
                {IMPACTO.map(({ monto, desc }) => (
                  <div key={monto} style={{ textAlign: "center", flex: 1, minWidth: 180, background: "rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 20px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "var(--teal-light)", marginBottom: 10 }}>{monto}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 36 }}>
                <motion.a className="btn btn-accent" href="mailto:contacto@fundacionangulo.org"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ fontSize: 15 }}>
                  ❤️ Hacer una donación
                </motion.a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
