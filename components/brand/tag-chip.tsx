"use client";

import { useState } from "react";

type TagChipVariant = "default" | "active" | "outline";
type TagChipSize = "sm" | "md";

interface TagChipProps {
  label: string;
  variant?: TagChipVariant;
  size?: TagChipSize;
  interactive?: boolean;
  onToggle?: (active: boolean) => void;
}

export function TagChip({
  label,
  variant = "default",
  size = "md",
  interactive = false,
  onToggle,
}: TagChipProps) {
  const [active, setActive] = useState(variant === "active");

  const isActive = interactive ? active : variant === "active";

  const paddingMap: Record<TagChipSize, string> = {
    sm: "2px 8px",
    md: "4px 12px",
  };
  const fontSizeMap: Record<TagChipSize, string> = {
    sm: "0.7rem",
    md: "0.8rem",
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: paddingMap[size],
    borderRadius: "9999px",
    fontFamily: "var(--font-body)",
    fontSize: fontSizeMap[size],
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: "0.02em",
    cursor: interactive ? "pointer" : "default",
    userSelect: "none",
    transition: "background-color 150ms ease, color 150ms ease, border-color 150ms ease",
    whiteSpace: "nowrap",
  };

  const variantStyle: React.CSSProperties = isActive
    ? {
        backgroundColor: "var(--accent-primary)",
        color: "var(--white-50)",
        border: "1px solid var(--accent-primary)",
      }
    : variant === "outline"
    ? {
        backgroundColor: "transparent",
        color: "var(--text-secondary)",
        border: "1px solid var(--border-default)",
      }
    : {
        backgroundColor: "var(--bg-elevated)",
        color: "var(--text-secondary)",
        border: "1px solid var(--border-subtle)",
      };

  const handleClick = () => {
    if (!interactive) return;
    const next = !active;
    setActive(next);
    onToggle?.(next);
  };

  return (
    <span
      style={{ ...baseStyle, ...variantStyle }}
      onClick={handleClick}
      role={interactive ? "checkbox" : undefined}
      aria-checked={interactive ? isActive : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      {label}
    </span>
  );
}

const GENRE_TAGS = ["Slasher", "Supernatural", "Psychological", "Folk Horror", "Body Horror", "Found Footage", "Slow Burn", "Cosmic Horror"];
const MOOD_TAGS = ["Dread", "Visceral", "Atmospheric", "Relentless", "Unsettling", "Haunting"];

export function TagChipShowcase() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "24px 20px",
        margin: "24px 0",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      {/* Variants */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Variants — default / active / outline
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <TagChip label="Slasher" variant="default" />
          <TagChip label="Slow Burn" variant="active" />
          <TagChip label="Folk Horror" variant="outline" />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Sizes — sm / md
        </p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <TagChip label="Supernatural" size="sm" />
          <TagChip label="Supernatural" size="md" />
        </div>
      </div>

      {/* Interactive genre filter */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Interactive — genre filter cluster (click to toggle)
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {GENRE_TAGS.map((g) => (
            <TagChip key={g} label={g} interactive />
          ))}
        </div>
      </div>

      {/* Mood filter */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Interactive — mood filter cluster
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {MOOD_TAGS.map((m) => (
            <TagChip key={m} label={m} size="sm" interactive />
          ))}
        </div>
      </div>
    </div>
  );
}
