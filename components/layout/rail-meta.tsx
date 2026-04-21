import { getGroupFor } from "@/lib/navigation";

interface RailMetaProps {
  href: string;
  title: string;
}

export function RailMeta({ href, title }: RailMetaProps) {
  const group = getGroupFor(href);

  return (
    <aside className="rail" aria-hidden="true">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          paddingTop: "4px",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "28px",
            height: "2px",
            backgroundColor: "var(--accent-hover)",
          }}
        />
        {group && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontWeight: 700,
            }}
          >
            {group}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.3,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
      </div>
    </aside>
  );
}
