type TypeLevel = "display" | "h1" | "h2" | "h3" | "body" | "caption" | "label";

interface TypeSpecimenProps {
  level: TypeLevel;
  text?: string;
  showSpecs?: boolean;
}

const TYPE_STYLES: Record<TypeLevel, {
  fontSize: string;
  fontWeight: number | string;
  lineHeight: string | number;
  fontFamily: string;
  letterSpacing?: string;
  label: string;
}> = {
  display: {
    fontSize: "4rem",
    fontWeight: 400,
    lineHeight: 1.1,
    fontFamily: "var(--font-display)",
    letterSpacing: "0.03em",
    label: "Display — Creepster 64px",
  },
  h1: {
    fontSize: "2.5rem",
    fontWeight: 400,
    lineHeight: 1.2,
    fontFamily: "var(--font-display)",
    letterSpacing: "0.02em",
    label: "Heading 1 — Creepster 40px",
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: 400,
    lineHeight: 1.3,
    fontFamily: "var(--font-display)",
    label: "Heading 2 — Creepster 28px",
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
    fontFamily: "var(--font-body)",
    label: "Heading 3 — Inter 600 20px",
  },
  body: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.7,
    fontFamily: "var(--font-body)",
    label: "Body — Inter 400 16px",
  },
  caption: {
    fontSize: "0.8rem",
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: "var(--font-body)",
    label: "Caption — Inter 400 12.8px",
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
    fontFamily: "var(--font-body)",
    letterSpacing: "0.06em",
    label: "Label — Inter 600 12px",
  },
};

const DEFAULT_TEXT = "The Last House on the Left";

export function TypeSpecimen({ level, text = DEFAULT_TEXT, showSpecs = true }: TypeSpecimenProps) {
  const styles = TYPE_STYLES[level];
  return (
    <div
      style={{
        margin: "24px 0",
        padding: "24px",
        backgroundColor: "var(--bg-surface)",
        borderRadius: "8px",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          lineHeight: styles.lineHeight,
          fontFamily: styles.fontFamily,
          letterSpacing: styles.letterSpacing,
          color: "var(--text-primary)",
          marginBottom: showSpecs ? "16px" : 0,
        }}
      >
        {text}
      </div>
      {showSpecs && (
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "12px",
          }}
        >
          {styles.label}
        </div>
      )}
    </div>
  );
}
