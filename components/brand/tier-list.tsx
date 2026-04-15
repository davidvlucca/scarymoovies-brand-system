const TIERS = ["S", "A", "B", "C", "D", "E", "F"] as const;
const TIER_COLORS: Record<string, string> = {
  S: "var(--purple-300)",
  A: "var(--purple-400)",
  B: "var(--purple-500)",
  C: "var(--black-400)",
  D: "var(--black-300)",
  E: "var(--accent-danger)",
  F: "var(--red-700)",
};

interface TierListProps {
  interactive?: boolean;
}

export function TierList({ interactive = false }: TierListProps) {
  void interactive;
  return (
    <div
      style={{
        margin: "24px 0",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      aria-label="Tier list"
    >
      {TIERS.map((tier) => (
        <div
          key={tier}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "12px 16px",
            borderBottom: "1px solid var(--border-subtle)",
            backgroundColor: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: TIER_COLORS[tier],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}
          >
            {tier}
          </div>
          <span
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Tier {tier}
          </span>
        </div>
      ))}
    </div>
  );
}
