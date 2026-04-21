import Link from "next/link";
import type { Section } from "@/lib/navigation";

interface PageNavProps {
  prev: Section | null;
  next: Section | null;
}

const linkStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "6px",
  border: "1px solid var(--border-subtle)",
  transition: "border-color 150ms ease",
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.65rem",
  color: "var(--text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontWeight: 600,
};

const titleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "var(--text-primary)",
  letterSpacing: "-0.01em",
};

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <nav aria-label="Section navigation" className="page-nav">
      {prev ? (
        <Link href={prev.href} style={linkStyle}>
          <span style={eyebrowStyle}>← Previous</span>
          <span style={titleStyle}>{prev.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link href={next.href} style={{ ...linkStyle, textAlign: "right" }}>
          <span style={eyebrowStyle}>Next →</span>
          <span style={titleStyle}>{next.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
