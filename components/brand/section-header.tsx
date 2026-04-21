import { getGroupFor } from "@/lib/navigation";

interface SectionHeaderProps {
  title: string;
  echo?: string;
  group?: string;
  href?: string;
}

export function SectionHeader({ title, echo, group, href }: SectionHeaderProps) {
  const eyebrow = group ?? (href ? getGroupFor(href) : null);

  return (
    <header
      style={{
        margin: "0 0 2.5rem",
        paddingBottom: "1.75rem",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {eyebrow && (
        <p
          style={{
            margin: "0 0 0.9rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h1>
      {echo && (
        <p
          style={{
            margin: "0.9rem 0 0",
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "1.0625rem",
            lineHeight: 1.55,
            color: "var(--text-secondary)",
            maxWidth: "62ch",
            fontWeight: 400,
          }}
        >
          {echo}
        </p>
      )}
    </header>
  );
}
