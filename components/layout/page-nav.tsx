import Link from "next/link";
import type { Section } from "@/lib/navigation";

interface PageNavProps {
  prev: Section | null;
  next: Section | null;
}

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <nav
      aria-label="Section navigation"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "64px",
        paddingTop: "24px",
        borderTop: "1px solid var(--border-subtle)",
        gap: "16px",
      }}
    >
      {prev ? (
        <Link
          href={prev.href}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            textDecoration: "none",
            padding: "14px 18px",
            borderRadius: "6px",
            border: "1px solid var(--border-subtle)",
            transition: "border-color 150ms ease",
            minWidth: "180px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 600,
            }}
          >
            ← Previous
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            textDecoration: "none",
            padding: "14px 18px",
            borderRadius: "6px",
            border: "1px solid var(--border-subtle)",
            transition: "border-color 150ms ease",
            minWidth: "180px",
            textAlign: "right",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 600,
            }}
          >
            Next →
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
