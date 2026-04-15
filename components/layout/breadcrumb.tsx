interface BreadcrumbProps {
  section: string;
}

export function Breadcrumb({ section }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "8px" }}>
      <span
        style={{
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.04em",
        }}
      >
        Brand System
        <span style={{ margin: "0 8px", opacity: 0.4 }}>·</span>
        <span style={{ color: "var(--text-secondary)" }}>{section}</span>
      </span>
    </nav>
  );
}
