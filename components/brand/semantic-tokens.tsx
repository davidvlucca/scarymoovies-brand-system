"use client";

import { useState } from "react";

interface TokenRow {
  token: string;
  scale: string;
  hex: string;
  usage: string;
}

const TOKENS: TokenRow[] = [
  { token: "--bg-primary",     scale: "black-500",  hex: "#0c0a0e",               usage: "Root page background" },
  { token: "--bg-surface",     scale: "black-600",  hex: "#0b090d",               usage: "Cards, panels, sidebar" },
  { token: "--bg-elevated",    scale: "black-400",  hex: "#3d3b3e",               usage: "Modals, dropdowns, tooltips" },
  { token: "--accent-primary", scale: "purple-400", hex: "#5d337d",               usage: "Buttons, active states, links" },
  { token: "--accent-hover",   scale: "purple-300", hex: "#785492",               usage: "Hover and focus state for accent elements" },
  { token: "--accent-danger",  scale: "red-500",    hex: "#751111",               usage: "Error states, destructive actions" },
  { token: "--text-primary",   scale: "white-50",   hex: "#fefefe",               usage: "Body text, headings" },
  { token: "--text-secondary", scale: "white-700",  hex: "#adacae",               usage: "Secondary text, labels" },
  { token: "--text-muted",     scale: "white-900",  hex: "#666667",               usage: "Placeholders, disabled text" },
  { token: "--border-subtle",  scale: "—",          hex: "rgba(254,254,254,0.06)", usage: "Hairline dividers, card borders" },
  { token: "--border-default", scale: "—",          hex: "rgba(254,254,254,0.12)", usage: "Default borders and dividers" },
];

function TokenRowItem({ row }: { row: TokenRow }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(row.hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 16px",
        borderRadius: "8px",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {/* Color circle */}
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: row.hex,
          border: "1px solid var(--border-default)",
          flexShrink: 0,
        }}
      />

      {/* Token name */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--accent-strong)",
          minWidth: "180px",
          flexShrink: 0,
        }}
      >
        {row.token}
      </div>

      {/* Scale */}
      <div
        style={{
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          minWidth: "90px",
          flexShrink: 0,
        }}
      >
        {row.scale}
      </div>

      {/* Hex — clickable to copy */}
      <button
        onClick={handleCopy}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: copied ? "var(--accent-hover)" : "var(--text-secondary)",
          minWidth: "185px",
          flexShrink: 0,
          textAlign: "left",
          transition: "color 150ms ease",
        }}
        title="Click to copy"
      >
        {copied ? "Copied!" : row.hex}
      </button>

      {/* Usage */}
      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
          flex: 1,
        }}
      >
        {row.usage}
      </div>
    </div>
  );
}

export function SemanticTokens() {
  return (
    <div style={{ margin: "24px 0" }}>
      {/* Column headers */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 16px 10px",
        }}
      >
        <div style={{ width: "20px", flexShrink: 0 }} />
        {(["Token", "Scale", "Value", "Usage"] as const).map((col, i) => (
          <div
            key={col}
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              minWidth: i === 0 ? "180px" : i === 1 ? "90px" : i === 2 ? "185px" : undefined,
              flex: i === 3 ? 1 : undefined,
              flexShrink: i < 3 ? 0 : undefined,
            }}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {TOKENS.map((row) => (
          <TokenRowItem key={row.token} row={row} />
        ))}
      </div>
    </div>
  );
}
