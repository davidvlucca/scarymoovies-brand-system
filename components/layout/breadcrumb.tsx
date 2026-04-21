interface BreadcrumbProps {
  section: string;
}

export function Breadcrumb({ section }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "12px" }}>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.68rem",
          color: "var(--text-muted)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        ScaryMoovies Brand System
        <span style={{ margin: "0 10px", opacity: 0.5 }}>·</span>
        <span style={{ color: "var(--text-secondary)" }}>{section}</span>
      </span>
    </nav>
  );
}
