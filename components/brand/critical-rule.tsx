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
        padding: "1.25rem 1.5rem 1.25rem 1.75rem",
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${accent}`,
        borderRadius: "2px",
      }}
    >
      <p
        style={{
          margin: "0 0 0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: accent,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          fontWeight: 600,
        }}
      >
        // {label}
      </p>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          lineHeight: 1.55,
          color: "var(--text-primary)",
          fontWeight: 500,
        }}
      >
        {children}
      </div>
    </aside>
  );
}
