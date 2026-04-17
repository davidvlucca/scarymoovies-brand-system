"use client";

import { useState } from "react";
import { type Tier, RatingChip } from "./rating-chip";

// ─── Star Rating ──────────────────────────────────────
// Half-star precision, 0–5 range

interface StarRatingProps {
  value?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

const STAR_SIZES = { sm: 14, md: 20, lg: 28 };

function Star({
  fill,
  size,
}: {
  fill: "empty" | "half" | "full";
  size: number;
}) {
  const id = `half-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      {fill === "half" && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="var(--accent-hover)" />
            <stop offset="50%" stopColor="var(--bg-elevated)" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={
          fill === "full"
            ? "var(--accent-hover)"
            : fill === "half"
            ? `url(#${id})`
            : "var(--bg-elevated)"
        }
        stroke="var(--accent-hover)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarRating({
  value = 0,
  onChange,
  readOnly = false,
  size = "md",
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const displayed = hovered ?? value;
  const px = STAR_SIZES[size];

  const getStarFill = (
    starIndex: number
  ): "empty" | "half" | "full" => {
    const full = starIndex + 1;
    const half = starIndex + 0.5;
    if (displayed >= full) return "full";
    if (displayed >= half) return "half";
    return "empty";
  };

  return (
    <div
      style={{ display: "flex", gap: "2px", alignItems: "center" }}
      role={readOnly ? undefined : "radiogroup"}
      aria-label="Rating"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (readOnly) {
          return <Star key={i} fill={getStarFill(i)} size={px} />;
        }
        return (
          <div
            key={i}
            style={{
              position: "relative",
              width: `${px}px`,
              height: `${px}px`,
              cursor: "pointer",
            }}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Left half — 0.5 increment */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 1,
              }}
              onMouseEnter={() => setHovered(i + 0.5)}
              onClick={() => onChange?.(i + 0.5)}
            />
            {/* Right half — full star */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 1,
              }}
              onMouseEnter={() => setHovered(i + 1)}
              onClick={() => onChange?.(i + 1)}
            />
            <Star fill={getStarFill(i)} size={px} />
          </div>
        );
      })}
      {!readOnly && value > 0 && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: `${px * 0.65}px`,
            color: "var(--text-muted)",
            marginLeft: "6px",
          }}
        >
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}

// ─── Tier Selector ────────────────────────────────────
// S–F picker for the platform's tier list system

const TIERS: Tier[] = ["S", "A", "B", "C", "D", "E", "F"];

interface TierSelectorProps {
  value?: Tier | null;
  onChange?: (tier: Tier | null) => void;
  readOnly?: boolean;
}

export function TierSelector({
  value,
  onChange,
  readOnly = false,
}: TierSelectorProps) {
  return (
    <div
      style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}
      role={readOnly ? undefined : "radiogroup"}
      aria-label="Tier rating"
    >
      {TIERS.map((t) => (
        <button
          key={t}
          onClick={() => !readOnly && onChange?.(value === t ? null : t)}
          aria-pressed={value === t}
          disabled={readOnly}
          style={{
            background: "none",
            border: "none",
            cursor: readOnly ? "default" : "pointer",
            padding: 0,
            outline: value === t ? "2px solid var(--accent-hover)" : "none",
            outlineOffset: "2px",
            borderRadius: "4px",
            opacity: value && value !== t ? 0.4 : 1,
            transition: "opacity 150ms ease, outline 150ms ease",
          }}
        >
          <RatingChip variant="tier" tier={t} />
        </button>
      ))}
    </div>
  );
}

// ─── Showcase ─────────────────────────────────────────

export function StarRatingShowcase() {
  const [starVal, setStarVal] = useState(0);
  const [tierVal, setTierVal] = useState<Tier | null>(null);

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
        gap: "32px",
      }}
    >
      {/* Interactive star rating */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Star rating — interactive, half-star precision
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <StarRating size="lg" value={starVal} onChange={setStarVal} />
          <div style={{ display: "flex", gap: "16px" }}>
            <StarRating size="sm" value={3.5} readOnly />
            <StarRating size="sm" value={4.5} readOnly />
            <StarRating size="sm" value={2.0} readOnly />
          </div>
        </div>
      </div>

      {/* Tier selector */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Tier selector — click to rate, click again to clear
        </p>
        <TierSelector value={tierVal} onChange={setTierVal} />
        {tierVal && (
          <p
            style={{
              marginTop: "12px",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Rated{" "}
            <strong style={{ color: "var(--text-secondary)" }}>
              {tierVal}-tier
            </strong>{" "}
            — this film will appear in your {tierVal} row
          </p>
        )}
      </div>
    </div>
  );
}
