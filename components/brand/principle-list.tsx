interface PrincipleItem {
  label: string;
  text: string;
}

export function PrincipleList({ items }: { items: PrincipleItem[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "1.25rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {items.map(({ label, text }) => (
        <li
          key={label}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.025)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "10px",
            padding: "14px 18px",
            margin: 0,
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.55,
            color: "var(--text-secondary)",
          }}
        >
          <strong
            style={{
              color: "var(--text-primary)",
              fontWeight: 600,
              marginRight: "4px",
            }}
          >
            {label}:
          </strong>
          {text}
        </li>
      ))}
    </ul>
  );
}
