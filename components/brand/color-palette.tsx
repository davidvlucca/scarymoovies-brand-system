import { ColorSwatch } from "./color-swatch";

type Scale = "purple" | "red" | "black" | "white";

interface ColorPaletteProps {
  scale: Scale;
}

const SCALE_META: Record<Scale, { title: string; description: string }> = {
  purple: { title: "Purple", description: "Primary brand color — interactive elements, accents, highlights" },
  red:    { title: "Red",    description: "Horror accent — danger states, warnings, destructive actions" },
  black:  { title: "Black",  description: "Surface & background scale — the void that everything sits on" },
  white:  { title: "White",  description: "Text & contrast scale — readability and clarity" },
};

const PALETTES: Record<Scale, Array<{ name: string; hex: string; label?: string }>> = {
  purple: [
    { name: "purple-50",  hex: "#ebe6ef" },
    { name: "purple-100", hex: "#c0b0cd" },
    { name: "purple-200", hex: "#a28ab4" },
    { name: "purple-300", hex: "#785492", label: "accent-hover" },
    { name: "purple-400", hex: "#5d337d", label: "accent-primary" },
    { name: "purple-500", hex: "#35005d" },
    { name: "purple-600", hex: "#300055" },
    { name: "purple-700", hex: "#260042" },
    { name: "purple-800", hex: "#1d0033" },
    { name: "purple-900", hex: "#160027" },
  ],
  red: [
    { name: "red-50",  hex: "#f1e7e7" },
    { name: "red-100", hex: "#d4b5b5" },
    { name: "red-200", hex: "#c09292" },
    { name: "red-300", hex: "#a36060" },
    { name: "red-400", hex: "#914141", label: "accent-danger-hover" },
    { name: "red-500", hex: "#751111", label: "accent-danger" },
    { name: "red-600", hex: "#6a0f0f" },
    { name: "red-700", hex: "#530c0c" },
    { name: "red-800", hex: "#400909" },
    { name: "red-900", hex: "#310707" },
  ],
  black: [
    { name: "black-50",  hex: "#e7e7e7" },
    { name: "black-100", hex: "#b4b3b4" },
    { name: "black-200", hex: "#8f8e90" },
    { name: "black-300", hex: "#5c5b5e" },
    { name: "black-400", hex: "#3d3b3e", label: "bg-elevated" },
    { name: "black-500", hex: "#0c0a0e", label: "bg-primary" },
    { name: "black-600", hex: "#0b090d", label: "bg-surface" },
    { name: "black-700", hex: "#09070a" },
    { name: "black-800", hex: "#070608" },
    { name: "black-900", hex: "#050406" },
  ],
  white: [
    { name: "white-50",  hex: "#fefefe", label: "text-primary" },
    { name: "white-100", hex: "#fcfbfc" },
    { name: "white-200", hex: "#faf9fa" },
    { name: "white-300", hex: "#f8f6f8" },
    { name: "white-400", hex: "#f6f5f7" },
    { name: "white-500", hex: "#f4f2f5" },
    { name: "white-600", hex: "#dedcdf" },
    { name: "white-700", hex: "#adacae", label: "text-secondary" },
    { name: "white-800", hex: "#868587" },
    { name: "white-900", hex: "#666667", label: "text-muted" },
  ],
};

export function ColorPalette({ scale }: ColorPaletteProps) {
  const { title, description } = SCALE_META[scale];
  const swatches = PALETTES[scale];

  return (
    <div style={{ margin: "0 0 48px" }}>
      {/* Scale header */}
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--white-50)",
            fontFamily: "var(--font-body)",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {description}
        </span>
      </div>

      {/* Swatch list */}
      <div
        role="list"
        aria-label={`${title} color scale`}
        style={{ display: "flex", flexDirection: "column", gap: "6px" }}
      >
        {swatches.map((swatch) => (
          <div key={swatch.name} role="listitem">
            <ColorSwatch {...swatch} />
          </div>
        ))}
      </div>
    </div>
  );
}
