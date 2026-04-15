"use client";

import { useEffect, useState } from "react";

interface HeadingItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3")
    );

    const items: HeadingItem[] = elements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: (el.tagName === "H2" ? 2 : 3) as 2 | 3,
      }));

    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const navStyle: React.CSSProperties = {
    position: "sticky",
    top: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  };

  const headingLabelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.6875rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "10px",
    paddingLeft: "8px",
  };

  const linkStyle = (isActive: boolean, level: 2 | 3): React.CSSProperties => ({
    display: "block",
    paddingLeft: level === 3 ? "20px" : "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "8px",
    borderLeft: `2px solid ${isActive ? "var(--accent-primary)" : "transparent"}`,
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    lineHeight: 1.4,
    color: isActive ? "var(--accent-hover)" : "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 150ms ease, border-color 150ms ease",
    borderRadius: "0 4px 4px 0",
  });

  return (
    <nav style={navStyle} aria-label="On this page">
      <div style={headingLabelStyle}>On this page</div>
      {headings.map(({ id, text, level }) => (
        <a
          key={id}
          href={`#${id}`}
          style={linkStyle(activeId === id, level)}
          onMouseEnter={(e) => {
            if (activeId !== id) {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--accent-hover)";
            }
          }}
          onMouseLeave={(e) => {
            if (activeId !== id) {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--text-secondary)";
            }
          }}
          onClick={() => setActiveId(id)}
        >
          {text}
        </a>
      ))}
    </nav>
  );
}
