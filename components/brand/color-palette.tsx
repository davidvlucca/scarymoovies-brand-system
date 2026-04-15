import { ColorSwatch } from "./color-swatch";

type Scale = "purple" | "red" | "black" | "white";

interface ColorPaletteProps {
  scale: Scale;
}

const PALETTES: Record<Scale, Array<{ name: string; hex: string; label?: string }>> = {
  purple: [
    { name: "purple-50",  hex: "#ebe6ef" },
    { name: "purple-100", hex: "#c0b0cd" },
    { name: "purple-200", hex: "#a28ab4" },
    { name: "purple-300", hex: "#785492", label: "accent-strong" },
    { name: "purple-400", hex: "#5d337d", label: "accent-hover" },
    { name: "purple-500", hex: "#35005d", label: "accent-primary" },
    { name: "purple-600", hex: "#300055" },
    { name: "purple-700", hex: "#260042" },
    { name: "purple-800", hex: "#1d0033" },
    { name: "purple-900", hex: "#160027", label: "bg-overlay" },
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
    { name: "black-200", hex: "#8f8e90", label: "text-muted" },
    { name: "black-300", hex: "#5c5b5e", label: "border-default" },
    { name: "black-400", hex: "#3d3b3e", label: "bg-surface" },
    { name: "black-500", hex: "#0c0a0e", label: "bg-primary" },
    { name: "black-600", hex: "#0b090d" },
    { name: "black-700", hex: "#09070a" },
    { name: "black-800", hex: "#070608" },
    { name: "black-900", hex: "#050406" },
  ],
  white: [
    { name: "white-50",  hex: "#fefefe" },
    { name: "white-100", hex: "#fcfbfc" },
    { name: "white-200", hex: "#faf9fa" },
    { name: "white-300", hex: "#f8f6f8" },
    { name: "white-400", hex: "#f6f5f7" },
    { name: "white-500", hex: "#f4f2f5", label: "text-primary" },
    { name: "white-600", hex: "#dedcdf" },
    { name: "white-700", hex: "#adacae", label: "text-secondary" },
    { name: "white-800", hex: "#868587" },
    { name: "white-900", hex: "#666667" },
  ],
};

export function ColorPalette({ scale }: ColorPaletteProps) {
  const swatches = PALETTES[scale];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "16px",
        margin: "24px 0",
      }}
      role="list"
      aria-label={`${scale} color scale`}
    >
      {swatches.map((swatch) => (
        <div key={swatch.name} role="listitem">
          <ColorSwatch {...swatch} />
        </div>
      ))}
    </div>
  );
}
