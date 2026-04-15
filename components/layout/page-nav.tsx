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
            gap: "4px",
            textDecoration: "none",
            padding: "12px 16px",
            borderRadius: "6px",
            border: "1px solid var(--border-subtle)",
            transition: "border-color 150ms ease",
            minWidth: "160px",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            ← Previous
          </span>
          <span
            style={{
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {prev.num} {prev.title}
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
            gap: "4px",
            textDecoration: "none",
            padding: "12px 16px",
            borderRadius: "6px",
            border: "1px solid var(--border-subtle)",
            transition: "border-color 150ms ease",
            minWidth: "160px",
            textAlign: "right",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Next →
          </span>
          <span
            style={{
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {next.num} {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
