"use client";

import { useState } from "react";

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

export function ColorSwatch({ name, hex, label, showRgb = true }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      aria-label={`Color swatch: ${name}, ${hex}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        border: `1px solid ${hovered ? "var(--border-default)" : "var(--border-subtle)"}`,
        overflow: "hidden",
        background: "var(--bg-surface)",
        transition: "border-color 150ms ease",
      }}
    >
      {/* Color block */}
      <div
        style={{
          flex: "0 0 42%",
          height: "88px",
          backgroundColor: hex,
        }}
      />

      {/* Info */}
      <div
        style={{
          flex: 1,
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          {name}
        </div>

        <button
          onClick={handleCopy}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            textAlign: "left",
            fontSize: "0.8rem",
            fontFamily: "var(--font-mono)",
            color: copied ? "var(--accent-hover)" : "var(--text-secondary)",
            transition: "color 150ms ease",
          }}
          title="Click to copy hex"
        >
          {copied ? "Copied!" : hex}
        </button>

        {showRgb && (
          <div
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            rgb({hexToRgb(hex)})
          </div>
        )}

        {label && (
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              background: "rgba(120, 84, 146, 0.15)",
              border: "1px solid rgba(120, 84, 146, 0.3)",
              color: "var(--accent-strong)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "2px 8px",
              borderRadius: "99px",
              fontFamily: "var(--font-mono)",
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
