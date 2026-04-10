const WORDS = ["🤟 Manos que hablan", "👁️ Voces que se ven", "💙 Señas con alma", "🌈 Infancia sin barreras", "🤫 El silencio también dice", "🌿 Lengua viva", "🧒 Crecer en señas", "🚀 Futuro sin límites"];

export default function Ticker() {
  const text = WORDS.join("  ") + "  ";
  return (
    <div style={{ background: "var(--teal)", padding: "11px 0", overflow: "hidden" }}>
      <div className="ticker-track" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--black)" }}>
        {text.repeat(8)}
      </div>
    </div>
  );
}
