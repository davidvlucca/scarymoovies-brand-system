export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontStyle: "italic",
        fontSize: "1.0625rem",
        lineHeight: 1.6,
        color: "var(--text-secondary)",
        maxWidth: "62ch",
        margin: "0.5rem 0 1.75rem",
      }}
    >
      {children}
    </p>
  );
}
