interface CriticalRuleProps {
  children: React.ReactNode;
  label?: string;
  tone?: "danger" | "accent";
}

export function CriticalRule({ children, label = "Non-negotiable", tone = "danger" }: CriticalRuleProps) {
  const accent = tone === "danger" ? "var(--accent-danger)" : "var(--accent-hover)";

  return (
    <aside
      role="note"
      style={{
        margin: "2rem 0",
        padding: "1.35rem 1.5rem 1.4rem 1.75rem",
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${accent}`,
        borderRadius: "2px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "0 0 0.6rem",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "18px",
            height: "2px",
            backgroundColor: accent,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            color: accent,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontWeight: 700,
          }}
        >
          {label}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.975rem",
          lineHeight: 1.6,
          color: "var(--text-primary)",
          fontWeight: 500,
        }}
      >
        {children}
      </div>
    </aside>
  );
}
