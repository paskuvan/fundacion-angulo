const WORDS = ["Inclusión", "✦", "Derechos", "✦", "Educación en LSCh", "✦", "Niñez Sorda", "✦", "Comunidad", "✦", "Amor", "✦"];

export default function Ticker() {
  const text = WORDS.join("  ") + "  ";
  return (
    <div style={{ background: "var(--accent)", padding: "11px 0", overflow: "hidden" }}>
      <div className="ticker-track" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--black)" }}>
        {text.repeat(8)}
      </div>
    </div>
  );
}
