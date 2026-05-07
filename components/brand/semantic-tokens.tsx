"use client";

import { useState } from "react";

interface TokenRow {
  token: string;
  scale: string;
  hex: string;
  usage: string;
}

interface TokenGroup {
  label: string;
  tokens: TokenRow[];
}

const TOKEN_GROUPS: TokenGroup[] = [
  {
    label: "Surface",
    tokens: [
      { token: "--bg-primary",   scale: "black-500",  hex: "#0c0a0e",               usage: "Root page background — always" },
      { token: "--bg-surface",   scale: "black-600",  hex: "#0b090d",               usage: "Cards, panels, sidebar" },
      { token: "--bg-elevated",  scale: "black-400",  hex: "#3d3b3e",               usage: "Modals, dropdowns, tooltips" },
      { token: "--bg-overlay",   scale: "purple-900", hex: "#160027",               usage: "Scrim behind modals" },
    ],
  },
  {
    label: "Text",
    tokens: [
      { token: "--text-primary",   scale: "white-50",  hex: "#fefefe", usage: "Body text, headings" },
      { token: "--text-secondary", scale: "white-700", hex: "#adacae", usage: "Secondary text, labels" },
      { token: "--text-muted",     scale: "white-900", hex: "#666667", usage: "Placeholders, disabled, timestamps" },
    ],
  },
  {
    label: "Border",
    tokens: [
      { token: "--border-subtle",  scale: "—", hex: "rgba(254,254,254,0.08)", usage: "Hairline dividers, ghost card borders" },
      { token: "--border-default", scale: "—", hex: "rgba(254,254,254,0.12)", usage: "Default borders, input outlines" },
      { token: "--border-strong",  scale: "—", hex: "rgba(254,254,254,0.20)", usage: "Emphatic dividers, active panel borders" },
      { token: "--border-focus",   scale: "purple-300", hex: "#785492", usage: "Keyboard focus ring" },
    ],
  },
  {
    label: "Accent",
    tokens: [
      { token: "--accent-primary",      scale: "purple-400", hex: "#5d337d", usage: "Buttons, active states, links" },
      { token: "--accent-hover",        scale: "purple-300", hex: "#785492", usage: "Hover state for interactive accent elements" },
      { token: "--accent-strong",       scale: "—",          hex: "#785492", usage: "Inline text emphasis on dark surfaces" },
      { token: "--accent-danger",       scale: "red-500",    hex: "#751111", usage: "Error states, destructive actions, F-tier" },
      { token: "--accent-danger-hover", scale: "red-400",    hex: "#914141", usage: "Hover state for danger actions" },
    ],
  },
  {
    label: "Tier",
    tokens: [
      { token: "--tier-s", scale: "purple-400", hex: "#5d337d", usage: "S — Exceptional (brand primary purple)" },
      { token: "--tier-a", scale: "purple-300", hex: "#785492", usage: "A — Excellent" },
      { token: "--tier-b", scale: "—",          hex: "#6e5474", usage: "B — Good (desaturated purple-plum)" },
      { token: "--tier-c", scale: "—",          hex: "#9c80a8", usage: "C — Average (lifted purple)" },
      { token: "--tier-d", scale: "black-300",  hex: "#5c5b5e", usage: "D — Below average (neutral grey pivot)" },
      { token: "--tier-e", scale: "red-400",    hex: "#914141", usage: "E — Poor" },
      { token: "--tier-f", scale: "red-500",    hex: "#751111", usage: "F — Unwatchable (brand crimson)" },
    ],
  },
  {
    label: "Type scale",
    tokens: [
      { token: "--text-display-2xl", scale: "4.5rem",   hex: "72px",  usage: "Hero banners" },
      { token: "--text-display-xl",  scale: "3.75rem",  hex: "60px",  usage: "Page heroes" },
      { token: "--text-display-lg",  scale: "3rem",     hex: "48px",  usage: "Section heroes" },
      { token: "--text-heading-xl",  scale: "2.25rem",  hex: "36px",  usage: "h1" },
      { token: "--text-heading-lg",  scale: "1.875rem", hex: "30px",  usage: "h2" },
      { token: "--text-heading-md",  scale: "1.5rem",   hex: "24px",  usage: "h3, card titles" },
      { token: "--text-heading-sm",  scale: "1.25rem",  hex: "20px",  usage: "h4" },
      { token: "--text-body-lg",     scale: "1.125rem", hex: "18px",  usage: "Featured body" },
      { token: "--text-body-md",     scale: "1rem",     hex: "16px",  usage: "Default body" },
      { token: "--text-body-sm",     scale: "0.875rem", hex: "14px",  usage: "Metadata" },
      { token: "--text-label",       scale: "0.75rem",  hex: "12px",  usage: "All-caps labels" },
    ],
  },
  {
    label: "Motion",
    tokens: [
      { token: "--duration-fast",      scale: "100ms", hex: "100ms", usage: "Hover color, focus ring" },
      { token: "--duration-base",      scale: "150ms", hex: "150ms", usage: "Buttons, card hover" },
      { token: "--duration-moderate",  scale: "250ms", hex: "250ms", usage: "Dropdowns, flyouts" },
      { token: "--duration-slow",      scale: "400ms", hex: "400ms", usage: "Modals, page transitions" },
      { token: "--duration-cinematic", scale: "700ms", hex: "700ms", usage: "Hero backdrop reveals" },
      { token: "--ease-default", scale: "ease",         hex: "ease",         usage: "Default — no directional bias" },
      { token: "--ease-enter",   scale: "ease-out",     hex: "ease-out",     usage: "Elements entering the viewport" },
      { token: "--ease-exit",    scale: "ease-in",      hex: "ease-in",      usage: "Elements leaving the viewport" },
      { token: "--ease-inout",   scale: "ease-in-out",  hex: "ease-in-out",  usage: "Toggles with both directions" },
    ],
  },
  {
    label: "Radius & shadow",
    tokens: [
      { token: "--radius-sm",   scale: "3px",    hex: "3px",    usage: "Small pills, search chips" },
      { token: "--radius-md",   scale: "6px",    hex: "6px",    usage: "Chips, badges" },
      { token: "--radius",      scale: "8px",    hex: "8px",    usage: "Default — cards, posters, buttons" },
      { token: "--radius-lg",   scale: "10px",   hex: "10px",   usage: "Modals" },
      { token: "--radius-pill", scale: "9999px", hex: "9999px", usage: "PYF CTA, tag chips, avatars" },
      { token: "--shadow-sm",     scale: "—", hex: "0 1px 0 rgba(255,255,255,0.02) inset", usage: "Subtle inner highlight" },
      { token: "--shadow-card",   scale: "—", hex: "0 8px 24px rgba(0,0,0,0.4)",           usage: "Movie poster cards" },
      { token: "--shadow-popup",  scale: "—", hex: "0 12px 32px rgba(0,0,0,0.5)",          usage: "Dropdowns, tooltips" },
      { token: "--shadow-modal",  scale: "—", hex: "0 24px 64px rgba(0,0,0,0.7)",          usage: "Modals" },
      { token: "--shadow-flyout", scale: "—", hex: "0 16px 40px rgba(0,0,0,0.6)",          usage: "Search flyout" },
    ],
  },
];

const NON_COLOR_GROUPS = new Set(["Type scale", "Motion", "Radius & shadow"]);

function TokenRowItem({ row, isNonColor }: { row: TokenRow; isNonColor: boolean }) {
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
        gap: "12px",
        padding: "10px 14px",
        borderRadius: "6px",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      {/* Swatch or glyph */}
      <div style={{ width: "20px", flexShrink: 0, display: "flex", justifyContent: "center" }}>
        {isNonColor ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--text-muted)",
              lineHeight: 1,
            }}
          >
            T
          </span>
        ) : (
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
        )}
      </div>

      {/* Token name */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.775rem",
          color: "var(--accent-strong)",
          minWidth: "200px",
          flexShrink: 0,
          wordBreak: "break-all",
        }}
      >
        {row.token}
      </div>

      {/* Scale */}
      <div
        style={{
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          minWidth: "90px",
          flexShrink: 0,
        }}
      >
        {row.scale}
      </div>

      {/* Value — click to copy */}
      <button
        onClick={handleCopy}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: copied ? "var(--accent-hover)" : "var(--text-secondary)",
          minWidth: "200px",
          flexShrink: 0,
          textAlign: "left",
          transition: "color 150ms ease",
          wordBreak: "break-all",
        }}
        title="Click to copy"
      >
        {copied ? "Copied!" : row.hex}
      </button>

      {/* Usage */}
      <div
        style={{
          fontSize: "0.78rem",
          color: "var(--text-secondary)",
          flex: 1,
          minWidth: 0,
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
          gap: "12px",
          padding: "0 14px 10px",
        }}
      >
        <div style={{ width: "20px", flexShrink: 0 }} />
        {(["Token", "Scale", "Value", "Usage"] as const).map((col, i) => (
          <div
            key={col}
            style={{
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              minWidth: i === 0 ? "200px" : i === 1 ? "90px" : i === 2 ? "200px" : undefined,
              flex: i === 3 ? 1 : undefined,
              flexShrink: i < 3 ? 0 : undefined,
            }}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Groups */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {TOKEN_GROUPS.map((group) => (
          <div key={group.label}>
            {/* Group header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "6px",
                paddingLeft: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {group.label}
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "var(--border-subtle)",
                }}
              />
            </div>

            {/* Token rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {group.tokens.map((row) => (
                <TokenRowItem
                  key={row.token}
                  row={row}
                  isNonColor={NON_COLOR_GROUPS.has(group.label)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
