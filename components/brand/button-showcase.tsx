"use client";

import { Button } from "@/components/ui/button";

// ─── PYFButton ─────────────────────────────────────
// Proper component for the Pick Your Fear pill button.
// Uses CSS variables — no hardcoded hex.

export interface PYFButtonProps {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function PYFButton({
  label = "PICK YOUR FEAR",
  disabled = false,
  onClick,
}: PYFButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: disabled
      ? "var(--black-300)"
      : "var(--accent-primary)",
    color: disabled ? "var(--text-muted)" : "var(--text-primary)",
    borderRadius: "9999px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "var(--font-body)",
    letterSpacing: "0.08em",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    minWidth: "160px",
    transition: "background-color 150ms ease, transform 100ms ease",
    outline: "none",
    userSelect: "none",
  };

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "var(--accent-hover)";
      }}
      onMouseLeave={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "var(--accent-primary)";
      }}
      onMouseDown={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 0 2px var(--border-focus)";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
      }}
      aria-label={label}
    >
      {label}
    </button>
  );
}

// ─── ButtonShowcase ─────────────────────────────────

interface ShowcaseRow {
  label: string;
  description: string;
  buttons: React.ReactNode;
}

export function ButtonShowcase() {
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    border: "1px solid var(--border-subtle)",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "24px 0",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0",
    borderBottom: "1px solid var(--border-subtle)",
    backgroundColor: "var(--bg-surface)",
  };

  const labelColStyle: React.CSSProperties = {
    width: "160px",
    flexShrink: 0,
    padding: "20px 20px",
    borderRight: "1px solid var(--border-subtle)",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    letterSpacing: "0.04em",
    display: "block",
    marginBottom: "2px",
  };

  const descStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.6875rem",
    color: "var(--text-muted)",
    lineHeight: 1.4,
  };

  const previewColStyle: React.CSSProperties = {
    flex: 1,
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap" as const,
    backgroundColor: "var(--bg-primary)",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "var(--bg-surface)",
    borderBottom: "1px solid var(--border-default)",
  };

  const headerLabelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--text-secondary)",
  };

  const rows: ShowcaseRow[] = [
    {
      label: "default",
      description: "Primary action — buttons, CTAs, confirmations",
      buttons: (
        <>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "destructive",
      description: "Dangerous or irreversible actions",
      buttons: (
        <>
          <Button variant="destructive" size="sm">Delete</Button>
          <Button variant="destructive">Delete List</Button>
          <Button variant="destructive" size="lg">Remove Account</Button>
          <Button variant="destructive" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "outline",
      description: "Secondary action — lower visual weight than default",
      buttons: (
        <>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="outline">Save Draft</Button>
          <Button variant="outline" size="lg">View All</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "secondary",
      description: "Supplementary actions — surface-level emphasis",
      buttons: (
        <>
          <Button variant="secondary" size="sm">Share</Button>
          <Button variant="secondary">Add to List</Button>
          <Button variant="secondary" size="lg">Browse Genre</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "ghost",
      description: "Minimal emphasis — icon-adjacent or inline actions",
      buttons: (
        <>
          <Button variant="ghost" size="sm">Skip</Button>
          <Button variant="ghost">Mark Watched</Button>
          <Button variant="ghost" size="lg">Show More</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "ghost-danger",
      description: "Low-emphasis destructive — clear list, unfriend",
      buttons: (
        <>
          <Button variant="ghost-danger" size="sm">Clear</Button>
          <Button variant="ghost-danger">Clear Tier List</Button>
          <Button variant="ghost-danger" size="lg">Remove All</Button>
          <Button variant="ghost-danger" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "link",
      description: "Inline text actions — within prose or card footers",
      buttons: (
        <>
          <Button variant="link" size="sm">See reviews</Button>
          <Button variant="link">Read full synopsis</Button>
          <Button variant="link" disabled>Disabled</Button>
        </>
      ),
    },
    {
      label: "pyf pill",
      description: "Pick Your Fear CTA — pill shape, navbar + hero only",
      buttons: (
        <>
          <PYFButton />
          <PYFButton disabled />
        </>
      ),
    },
  ];

  return (
    <div style={wrapperStyle}>
      <div style={headerStyle}>
        <span style={headerLabelStyle}>Button Variants — Live Preview</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          style={{
            ...rowStyle,
            borderBottom:
              i === rows.length - 1
                ? "none"
                : "1px solid var(--border-subtle)",
          }}
        >
          <div style={labelColStyle}>
            <code style={labelStyle}>{row.label}</code>
            <span style={descStyle}>{row.description}</span>
          </div>
          <div style={previewColStyle}>{row.buttons}</div>
        </div>
      ))}
    </div>
  );
}
