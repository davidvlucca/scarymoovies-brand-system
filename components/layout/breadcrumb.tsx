interface BreadcrumbProps {
  section: string;
  num?: string;
}

export function Breadcrumb({ section, num }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "12px" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--text-muted)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        // scarymoovies brand system
        {num && (
          <>
            <span style={{ margin: "0 10px", opacity: 0.5 }}>·</span>
            <span style={{ color: "var(--text-secondary)" }}>{num}</span>
          </>
        )}
        <span style={{ margin: "0 10px", opacity: 0.5 }}>·</span>
        <span style={{ color: "var(--text-secondary)" }}>{section}</span>
      </span>
    </nav>
  );
}
