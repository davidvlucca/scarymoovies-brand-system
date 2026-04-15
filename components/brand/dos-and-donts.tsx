interface DosDontsProps {
  dos: string[];
  donts: string[];
  doLabel?: string;
  dontLabel?: string;
}

export function DosDonts({
  dos: doItems,
  donts: dontItems,
  doLabel = "Do",
  dontLabel = "Don't",
}: DosDontsProps) {
  return (
    <div className="dos-donts-grid" style={{ margin: "24px 0" }}>
      {/* Do panel */}
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "var(--bg-surface)",
          borderLeft: "3px solid var(--accent-hover)",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--accent-hover)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            fontFamily: "var(--font-body)",
          }}
        >
          ✓ {doLabel}
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {doItems.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginBottom: "8px",
                paddingLeft: "12px",
                borderLeft: "2px solid var(--purple-700)",
                lineHeight: 1.5,
                fontFamily: "var(--font-body)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Don't panel */}
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "var(--bg-surface)",
          borderLeft: "3px solid var(--accent-danger)",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--accent-danger)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            fontFamily: "var(--font-body)",
          }}
        >
          ✗ {dontLabel}
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {dontItems.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginBottom: "8px",
                paddingLeft: "12px",
                borderLeft: "2px solid var(--red-700)",
                lineHeight: 1.5,
                fontFamily: "var(--font-body)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
