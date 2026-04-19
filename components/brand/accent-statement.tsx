export function AccentStatement({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "1.15rem",
        lineHeight: 1.45,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        color: "var(--accent-strong)",
        margin: "1.75rem 0 1rem",
        maxWidth: "58ch",
      }}
    >
      {children}
    </p>
  );
}
