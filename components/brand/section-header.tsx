interface SectionHeaderProps {
  num: string;
  title: string;
  echo?: string;
  kind?: "section" | "page";
}

export function SectionHeader({ num, title, echo, kind = "page" }: SectionHeaderProps) {
  const titleSize = kind === "page" ? "2.75rem" : "2rem";
  const titleWeight = kind === "page" ? 800 : 700;

  return (
    <header
      style={{
        margin: "0 0 2.5rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <p
        style={{
          margin: "0 0 0.75rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontWeight: 500,
        }}
      >
        // {num} · scarymoovies brand system
      </p>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: titleSize,
          fontWeight: titleWeight,
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
            margin: "0.75rem 0 0",
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
