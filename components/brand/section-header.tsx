interface SectionHeaderProps {
  title: string;
  echo?: string;
  href?: string;
}

export function SectionHeader({ title, echo }: SectionHeaderProps) {
  return (
    <header
      style={{
        margin: "0 0 2.5rem",
        paddingBottom: "1.75rem",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
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
