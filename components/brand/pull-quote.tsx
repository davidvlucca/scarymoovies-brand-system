"use client";

import { useState } from "react";

// ─── PullQuote ─────────────────────────────────────

export interface PullQuoteProps {
  quote: string;
  attribution?: string;
  variant?: "standard" | "display";
}

export function PullQuote({
  quote,
  attribution,
  variant = "standard",
}: PullQuoteProps) {
  const isDisplay = variant === "display";

  const figureStyle: React.CSSProperties = {
    margin: isDisplay ? "64px 0" : "48px 0",
    padding: 0,
  };

  const quoteStyle: React.CSSProperties = isDisplay
    ? {
        fontFamily: "var(--font-display)",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 700,
        color: "var(--text-primary)",
        lineHeight: 1.2,
        textAlign: "center",
        padding: "32px 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }
    : {
        fontFamily: "var(--font-display)",
        fontSize: "1.375rem",
        fontStyle: "italic",
        fontWeight: 600,
        color: "var(--text-primary)",
        lineHeight: 1.4,
        borderLeft: "3px solid var(--accent-primary)",
        padding: "24px 0 24px 32px",
        margin: 0,
      };

  const attributionStyle: React.CSSProperties = {
    display: "block",
    marginTop: "16px",
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    fontFamily: "var(--font-body)",
    fontStyle: "normal",
    textAlign: isDisplay ? "center" : "left",
  };

  return (
    <figure style={figureStyle}>
      <blockquote style={quoteStyle}>
        {quote}
        {attribution && (
          <cite style={attributionStyle}>{attribution}</cite>
        )}
      </blockquote>
    </figure>
  );
}

// ─── HorrorCallout ─────────────────────────────────

export interface HorrorCalloutProps {
  children: React.ReactNode;
  variant?: "note" | "warning" | "spoiler";
  label?: string;
}

const CALLOUT_DEFAULTS: Record<string, string> = {
  note: "NOTE",
  warning: "WARNING",
  spoiler: "SPOILER",
};

const CALLOUT_BORDER: Record<string, string> = {
  note: "var(--accent-primary)",
  warning: "var(--accent-danger)",
  spoiler: "var(--border-default)",
};

export function HorrorCallout({
  children,
  variant = "note",
  label,
}: HorrorCalloutProps) {
  const [revealed, setRevealed] = useState(false);
  const displayLabel = label ?? CALLOUT_DEFAULTS[variant];

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    background: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)",
    borderLeft: `3px solid ${CALLOUT_BORDER[variant]}`,
    borderRadius: "6px",
    padding: "1rem 1.25rem",
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    margin: "1.5rem 0",
    overflow: "hidden",
  };

  const labelStyle: React.CSSProperties = {
    display: "inline-block",
    fontSize: "0.6875rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 700,
    color:
      variant === "warning"
        ? "var(--accent-danger)"
        : variant === "spoiler"
          ? "var(--text-muted)"
          : "var(--accent-primary)",
    marginBottom: "0.5rem",
    fontFamily: "var(--font-body)",
  };

  if (variant === "spoiler") {
    const contentStyle: React.CSSProperties = {
      filter: revealed ? "none" : "blur(6px)",
      userSelect: revealed ? "auto" : "none",
      transition: "filter 300ms ease",
    };

    const overlayStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      display: revealed ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "transparent",
    };

    const revealLabelStyle: React.CSSProperties = {
      fontSize: "0.75rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      fontWeight: 700,
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)",
      pointerEvents: "none",
    };

    return (
      <div style={wrapperStyle}>
        <span style={labelStyle}>{displayLabel}</span>
        <div style={contentStyle}>{children}</div>
        <button
          style={overlayStyle}
          onClick={() => setRevealed(true)}
          aria-label="Reveal spoiler content"
        >
          <span style={revealLabelStyle}>Click to reveal</span>
        </button>
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <span style={labelStyle}>{displayLabel}</span>
      <div>{children}</div>
    </div>
  );
}
