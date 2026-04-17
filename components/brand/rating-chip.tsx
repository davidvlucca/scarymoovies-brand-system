"use client";

export type Tier = "S" | "A" | "B" | "C" | "D" | "E" | "F";

const TIER_STYLES: Record<Tier, { bg: string; color: string }> = {
  S: { bg: "var(--purple-400)", color: "var(--white-50)" },
  A: { bg: "var(--purple-300)", color: "var(--white-50)" },
  B: { bg: "var(--purple-200)", color: "var(--black-700)" },
  C: { bg: "var(--black-300)",  color: "var(--white-50)" },
  D: { bg: "var(--red-300)",    color: "var(--white-50)" },
  E: { bg: "var(--red-400)",    color: "var(--white-50)" },
  F: { bg: "var(--red-500)",    color: "var(--white-50)" },
};

interface RatingChipTierProps {
  variant: "tier";
  tier: Tier;
}

interface RatingChipStarProps {
  variant: "star";
  score: number; // 0.0 – 5.0
}

type RatingChipProps = RatingChipTierProps | RatingChipStarProps;

export function RatingChip(props: RatingChipProps) {
  if (props.variant === "tier") {
    const { bg, color } = TIER_STYLES[props.tier];
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
          borderRadius: "4px",
          backgroundColor: bg,
          color,
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
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
      <span style={{ color: "var(--accent-hover)", fontSize: "0.7rem" }}>★</span>
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

      {/* In context */}
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
          In context — on a dark card surface
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {(["S", "A", "F"] as Tier[]).map((t) => (
            <div
              key={t}
              style={{
                width: "80px",
                height: "120px",
                borderRadius: "8px",
                backgroundColor: "var(--bg-elevated)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                padding: "8px",
                position: "relative",
              }}
            >
              <RatingChip variant="tier" tier={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
