"use client";

export type Tier = "S" | "A" | "B" | "C" | "D" | "E" | "F";

const TIER_BG: Record<Tier, string> = {
  S: "var(--tier-s)",  /* #5d337d */
  A: "var(--tier-a)",  /* #785492 */
  B: "var(--tier-b)",  /* #6e5474 */
  C: "var(--tier-c)",  /* #9c80a8 */
  D: "var(--tier-d)",  /* #5c5b5e */
  E: "var(--tier-e)",  /* #914141 */
  F: "var(--tier-f)",  /* #751111 */
};

const TIER_SIZES = { sm: 24, md: 28, xl: 48 };

interface RatingChipTierProps {
  variant: "tier";
  tier: Tier;
  size?: "sm" | "md" | "xl";
}

interface RatingChipStarProps {
  variant: "star";
  score: number; // 0.0 – 5.0
}

type RatingChipProps = RatingChipTierProps | RatingChipStarProps;

export function RatingChip(props: RatingChipProps) {
  if (props.variant === "tier") {
    const px = TIER_SIZES[props.size ?? "md"];
    const fontSize = px >= 40 ? "1.25rem" : px >= 28 ? "0.875rem" : "0.75rem";
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${px}px`,
          height: `${px}px`,
          borderRadius: "4px",
          backgroundColor: TIER_BG[props.tier],
          color: "var(--white-50)",
          fontFamily: "var(--font-body)",
          fontSize,
          fontWeight: 700,
          lineHeight: 1,
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {props.tier}
      </span>
    );
  }

  // Star variant
  const clamped = Math.max(0, Math.min(5, props.score));
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "2px 8px",
        borderRadius: "4px",
        backgroundColor: "rgba(0,0,0,0.50)",
        border: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "var(--white-50)",
        lineHeight: 1,
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      <span style={{ color: "var(--accent-primary)", fontSize: "0.7rem" }}>★</span>
      {clamped.toFixed(1)}
    </span>
  );
}

const TIERS: Tier[] = ["S", "A", "B", "C", "D", "E", "F"];

export function RatingChipShowcase() {
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
      {/* Tier variant */}
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
          Tier chips — S through F
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {TIERS.map((t) => (
            <RatingChip key={t} variant="tier" tier={t} />
          ))}
        </div>
      </div>

      {/* Star variant */}
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
          Star chips — numeric score
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[5.0, 4.5, 3.5, 2.0, 1.0].map((s) => (
            <RatingChip key={s} variant="star" score={s} />
          ))}
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
          Sizes — sm 24px · md 28px (default) · xl 48px
        </p>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <RatingChip variant="tier" tier="S" size="sm" />
          <RatingChip variant="tier" tier="S" size="md" />
          <RatingChip variant="tier" tier="S" size="xl" />
        </div>
      </div>

      {/* In context on card */}
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
          In context — md on poster overlay, xl standalone
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-end" }}>
          {(["S", "A", "F"] as Tier[]).map((t) => (
            <div
              key={t}
              style={{
                width: "80px",
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "var(--bg-elevated)",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                <RatingChip variant="tier" tier={t} size="md" />
              </div>
            </div>
          ))}
          <RatingChip variant="tier" tier="S" size="xl" />
          <RatingChip variant="tier" tier="F" size="xl" />
        </div>
      </div>
    </div>
  );
}
