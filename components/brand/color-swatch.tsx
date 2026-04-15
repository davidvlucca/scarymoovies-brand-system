interface ColorSwatchProps {
  name: string;
  hex: string;
  label?: string;
  showRgb?: boolean;
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export function ColorSwatch({ name, hex, label, showRgb = false }: ColorSwatchProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          height: "64px",
          borderRadius: "6px",
          backgroundColor: hex,
          border: "1px solid var(--border-subtle)",
        }}
        aria-label={`Color swatch: ${name} ${hex}`}
      />
      <div>
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {hex}
        </div>
        {showRgb && (
          <div
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            rgb({hexToRgb(hex)})
          </div>
        )}
        {label && (
          <div
            style={{
              fontSize: "0.7rem",
              color: "var(--accent-strong)",
              marginTop: "2px",
            }}
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
