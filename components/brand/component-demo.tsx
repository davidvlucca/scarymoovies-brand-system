"use client";

import { useState, type ReactNode } from "react";

interface ComponentDemoProps {
  title: string;
  description?: string;
  children?: ReactNode;
  code?: string;
}

export function ComponentDemo({
  title,
  description,
  children,
  code,
}: ComponentDemoProps) {
  const [showCode, setShowCode] = useState(false);

  const wrapperStyle: React.CSSProperties = {
    backgroundColor: "var(--bg-surface)",
    borderRadius: "8px",
    margin: "24px 0",
    border: "1px solid var(--border-subtle)",
    overflow: "hidden",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    borderBottom: "1px solid var(--border-subtle)",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    color: "var(--text-secondary)",
    fontSize: "0.875rem",
    fontWeight: 500,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    color: "var(--text-muted)",
    fontSize: "0.8125rem",
    marginTop: "2px",
  };

  const toggleButtonStyle: React.CSSProperties = {
    padding: "4px 12px",
    backgroundColor: showCode ? "var(--accent-primary)" : "transparent",
    border: "1px solid var(--border-subtle)",
    borderRadius: "4px",
    color: showCode ? "var(--text-primary)" : "var(--text-muted)",
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    cursor: "pointer",
    transition: "background-color 150ms ease, color 150ms ease",
    outline: "none",
    flexShrink: 0,
  };

  const demoAreaStyle: React.CSSProperties = {
    padding: "24px 20px",
  };

  const codeBlockStyle: React.CSSProperties = {
    margin: 0,
    padding: "20px",
    backgroundColor: "var(--bg-elevated)",
    overflowX: "auto",
    borderTop: "1px solid var(--border-subtle)",
  };

  const codeStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.8125rem",
    color: "var(--text-secondary)",
    lineHeight: 1.6,
    whiteSpace: "pre",
  };

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle}>
        <div>
          <div style={titleStyle}>{title}</div>
          {description && (
            <div style={descriptionStyle}>{description}</div>
          )}
        </div>
        {code && (
          <button
            style={toggleButtonStyle}
            onClick={() => setShowCode((prev) => !prev)}
            onFocus={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 0 2px var(--accent-hover)";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
            aria-pressed={showCode}
          >
            {showCode ? "Preview" : "Code"}
          </button>
        )}
      </div>

      {!showCode && <div style={demoAreaStyle}>{children}</div>}

      {showCode && code && (
        <pre style={codeBlockStyle}>
          <code style={codeStyle}>{code}</code>
        </pre>
      )}
    </div>
  );
}
